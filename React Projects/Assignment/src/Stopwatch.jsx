import { useEffect, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState("stopped");

  useEffect(() => {
    let interval;

    if (status === "running") {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [status]);

  const handleStart = () => {
    setTime(0);
    setStatus("running");
  };

  const handleStop = () => {
    setStatus("stopped");
    setTime(0);
  };

  const handlePause = () => {
    setStatus("paused");
  };

  const handleResume = () => {
    setStatus("running");
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>

      <h2>{time} Seconds</h2>

      <div className="buttons">
        <button onClick={handleStart} disabled={status === "running"}>
          Start
        </button>

        <button onClick={handleStop} disabled={status === "stopped"}>
          Stop
        </button>

        <button onClick={handlePause} disabled={status !== "running"}>
          Pause
        </button>

        <button onClick={handleResume} disabled={status !== "paused"}>
          Resume
        </button>
      </div>

      <p>Status: {status}</p>
    </div>
  );
}

export default Stopwatch;