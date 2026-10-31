import React, { useState } from "react";

const VolumeController = () => {
  const [volume, setVolume] = useState(50);
  return (
    <>
      <h1>Volume Controller</h1>
      {volume > 0 ? <h3>Volume: {volume}%</h3> : <h3>Volume: Muted</h3>}
      <button onClick={() => setVolume(volume > 0 ? volume - 10 : volume)}>
        -
      </button>
      <button onClick={() => setVolume(0)}>Mute</button>
      <button onClick={() => setVolume(volume < 100 ? volume + 10 : volume)}>
        +
      </button>
    </>
  );
};

export default VolumeController;
