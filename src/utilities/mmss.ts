export const mmss = (secs: number) => {
  function pad(num: number) {
    return (String(num).length === 1 ? '0' : '') + num;
  }

  let minutes = Math.floor(secs / 60);
  minutes = minutes % 60;
  secs = secs % 60;
  return `${pad(minutes >= 0 ? minutes : 0)}:${pad(secs >= 0 ? secs : 0)}`;
};
