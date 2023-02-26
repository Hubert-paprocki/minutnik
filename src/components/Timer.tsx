import { json } from "stream/consumers";

interface TimerProps {
    timerColor: string;
    timer: number;
  }
  
  function Timer({ timerColor, timer }: TimerProps) {
    const formatTime = (time: number): string => {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  
    let classes = "text-5xl font-bold border-4 border-slate-200 rounded-2xl px-4 py-2  tracking-wide ";
    if (timerColor === "normal") {
      classes += " text-neutral-600";
    } else if (timerColor === "start") {
      classes += " text-green-600";
    } else if (timerColor === "stop") {
      classes += " text-orange-600";
    }
    return (
      <div className={classes}>
        {formatTime(timer)}
      </div>
    );
  }
  
  export default Timer;
//   formularze json server