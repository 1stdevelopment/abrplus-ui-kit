import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { colors } from '@configs';

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

function isColorValue(value: unknown): value is string {
  return typeof value === 'string';
}

const copyToClipboard = async (value: string) => {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    // catch
  }
};

const ColorSwatch = ({ name, value }: { name: string; value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    await copyToClipboard(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div
      style={{
        width: 160,
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        position: 'relative',
      }}
      onClick={handleClick}
    >
      <div
        style={{
          height: 90,
          borderRadius: 10,
          backgroundColor: value,
          border: '1px solid #e5e7eb',
        }}
      />
      <div style={{ marginTop: 8, fontSize: 12 }}>
        <div style={{ fontWeight: 600 }}>{name}</div>
        <div style={{ color: '#6b7280' }}>{value}</div>
      </div>

      {copied && (
        <div
          style={{
            position: 'absolute',
            top: -24,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#111',
            color: '#fff',
            fontSize: 10,
            padding: '2px 6px',
            borderRadius: 4,
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            zIndex: 10,
          }}
        >
          Copied!
        </div>
      )}
    </div>
  );
};

export const AllColors: Story = {
  render: () => (
    <div
      style={{
        height: '100vh',
        overflow: 'auto',
        padding: 32,
        boxSizing: 'border-box',
        fontFamily: 'sans-serif',
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          justifyContent: 'center',
        }}
      >
        {Object.entries(colors).map(([key, value]) => {
          if (isColorValue(value)) {
            return <ColorSwatch key={key} name={key} value={value} />;
          }

          return (
            <div
              key={key}
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h2
                style={{
                  margin: '24px 0 16px',
                  fontSize: 18,
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                {key}
              </h2>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 16,
                  justifyContent: 'center',
                }}
              >
                {Object.entries(value).map(([nestedKey, nestedValue]) => (
                  <ColorSwatch key={nestedKey} name={`${key}.${nestedKey}`} value={nestedValue} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
};
