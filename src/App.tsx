import { useState, useEffect } from "react";
import Button from "./components/Button";
import Timer from "./components/Timer"

function App(): JSX.Element {
  const [timer, setTimer] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [timerColor, setTimerColor] = useState<"normal" | "start" | "stop">(
    "normal"
  );

  useEffect(() => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
    if (timer > 0) {
      const newIntervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setIntervalId(newIntervalId);
    }
  }, [timer]);

  const handleStart = (): void => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
    const newIntervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    setIntervalId(newIntervalId);
    setTimerColor("start");
  };

  const handleStop = (): void => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
      setTimerColor("stop");
    }
  };

  const handleReset = (): void => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setTimer(0);
    setTimerColor("normal");
  };
  
  return (
    <div className="flex flex-col justify-center items-center  h-screen bg-slate-200">
      <div className="flex flex-col justify-center items-center gap-8 p-12 rounded-2xl bg-gray-100 shadow-lg">
        <Timer timerColor={timerColor} timer={timer}/>
        <Button onClick={handleStart} start>
          Zacznij odliczanie
        </Button>
        <Button onClick={handleStop} stop>
          Zatrzymaj odliczanie
        </Button>
        <Button onClick={handleReset} reset>
          Zresetuj odliczanie
        </Button>
      </div>
    </div>
  );
}

export default App;
