import { HTMLAttributes, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

// Default number of visualizer bars if not specified
const NUM_BARS = 48;

// Props for the AudioVisualizer component
interface AudioVisualizerProps {
  deviceId?: string; // Microphone device ID to capture audio from
  speakerId?: string; // Output device ID for audio playback (monitoring)
  monitor?: 'on' | 'off'; // Whether to play microphone audio through speakers
  containerStyle?: HTMLAttributes<HTMLDivElement>['style']; // Custom styles for main container
  containerClassName?: HTMLAttributes<HTMLDivElement>['className']; // Custom classes for main container
  barContainerStyle?: HTMLAttributes<HTMLDivElement>['style']; // Custom styles for bars wrapper
  barContainerClassName?: HTMLAttributes<HTMLDivElement>['className']; // Custom classes for bars wrapper
  barStyle?: HTMLAttributes<HTMLDivElement>['style']; // Custom styles for individual bars
  barClassName?: HTMLAttributes<HTMLDivElement>['className']; // Custom classes for individual bars
  barsNumber?: number; // Number of bars in the visualizer
}

export const AudioVisualizer = ({
  deviceId,
  speakerId,
  monitor = 'off',
  containerStyle,
  containerClassName,
  barContainerStyle,
  barContainerClassName,
  barStyle,
  barClassName,
  barsNumber = NUM_BARS,
}: AudioVisualizerProps) => {
  // Refs to store audio element, analyser node, audio context, animation frame, container, and microphone stream
  const audioElRef = useRef<HTMLAudioElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const visualizerContainerRef = useRef<HTMLDivElement | null>(null);
  const microphoneStreamRef = useRef<MediaStream | null>(null);

  /**
   * Create hidden audio element on mount
   * This element will be used for playback when monitor = 'on'
   */
  useEffect(() => {
    const audio = document.createElement('audio');
    audio.autoplay = true;
    audio.controls = false; // Hide controls
    audioElRef.current = audio;
    document.body.appendChild(audio);

    // Cleanup audio element on unmount
    return () => {
      audio.pause();
      audio.srcObject = null;
      audio.remove();
    };
  }, []);

  /**
   * Setup microphone stream and analyser node when deviceId changes
   */
  useEffect(() => {
    if (!deviceId || !audioElRef.current) return;

    let cancelled = false;

    const setupVisualizer = async () => {
      // Stop old microphone stream if exists
      microphoneStreamRef.current?.getTracks().forEach((t) => t.stop());

      // Request microphone access for the specified device
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { deviceId: { exact: deviceId } },
      });
      if (cancelled) return;

      microphoneStreamRef.current = stream;

      // Create audio context
      const audioCtx = new AudioContext();
      audioContextRef.current = audioCtx;

      // Create analyser node to extract frequency data
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256; // FFT resolution
      analyser.smoothingTimeConstant = 0.75; // Smooth transitions
      analyserRef.current = analyser;

      // Connect microphone stream to analyser
      const source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);

      // Start rendering visualizer bars
      drawVisualization();
    };

    setupVisualizer();

    // Cleanup on unmount or device change
    return () => {
      cancelled = true;
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      microphoneStreamRef.current?.getTracks().forEach((t) => t.stop());
      audioContextRef.current?.close();
      microphoneStreamRef.current = null;
      audioContextRef.current = null;
      analyserRef.current = null;
      resetVisualizerBars();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceId]);

  /**
   * Toggle audio monitoring (hear your own mic) dynamically
   */
  useEffect(() => {
    const audioEl = audioElRef.current;
    const audioCtx = audioContextRef.current;
    const analyser = analyserRef.current;
    const stream = microphoneStreamRef.current;

    if (!audioEl || !audioCtx || !analyser || !stream) return;

    if (monitor === 'on') {
      // Connect analyser to speakers
      analyser.connect(audioCtx.destination);
      audioEl.srcObject = stream;

      // Optional: set specific output device (if browser supports)
      if (speakerId && typeof (audioEl as any).setSinkId === 'function') {
        (audioEl as any).setSinkId(speakerId).catch(() => {});
      }
    } else {
      // Disconnect from output
      audioEl.srcObject = null;
    }
  }, [monitor, speakerId]);

  /**
   * Initialize visualizer bars container and individual bars
   */
  useEffect(() => {
    const container = visualizerContainerRef.current;
    if (!container) return;

    container.innerHTML = ''; // Clear old bars

    // Create container for bars
    const barContainer = document.createElement('div');
    Object.assign(barContainer.style, {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      position: 'relative',
      ...barContainerStyle,
    });
    barContainer.className = twMerge(barContainerClassName);

    // Create individual bars
    for (let i = 0; i < barsNumber; i++) {
      const bar = document.createElement('div');
      Object.assign(bar.style, {
        backgroundColor: '#d1d5db', // default color (gray)
        height: '80%',
        transition: 'background-color 0.1s ease-out',
        margin: '0 1px',
        borderRadius: '2px',
        width: '100%',
        ...barStyle,
      });
      bar.className = twMerge(barClassName);
      barContainer.appendChild(bar);
    }

    container.appendChild(barContainer);
  }, [barsNumber, barClassName, barContainerClassName, barStyle, barContainerStyle]);

  /**
   * Render visualizer bars based on microphone audio levels
   */
  const drawVisualization = () => {
    if (!analyserRef.current || !visualizerContainerRef.current) return;

    const barContainer = visualizerContainerRef.current.querySelector(
      'div[style*="display: flex"]',
    );
    if (!barContainer) return;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const render = () => {
      analyserRef.current!.getByteFrequencyData(dataArray);

      // Calculate overall loudness
      const overallAvg = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;
      const normalizedLoudness = Math.min(overallAvg / 140, 1);
      const numActiveBars = Math.floor(normalizedLoudness * barsNumber);

      // Update bar colors based on active bars
      const bars = barContainer.children;
      for (let i = 0; i < bars.length; i++) {
        (bars[i] as HTMLDivElement).style.backgroundColor =
          i < numActiveBars ? colors.team.action : '#d1d5db';
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();
  };

  /**
   * Reset all bars to default gray color
   */
  const resetVisualizerBars = () => {
    const container = visualizerContainerRef.current;
    if (!container) return;
    const barContainer = container.querySelector('div[style*="display: flex"]');
    if (!barContainer) return;
    const bars = barContainer.children;
    for (let i = 0; i < bars.length; i++) {
      (bars[i] as HTMLDivElement).style.backgroundColor = '#d1d5db';
    }
  };

  // Main container for visualizer
  return (
    <div
      ref={visualizerContainerRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '1rem',
        width: '100%',
        borderRadius: '0.5rem',
        boxSizing: 'border-box',
        ...containerStyle,
      }}
      className={twMerge(containerClassName)}
    />
  );
};
