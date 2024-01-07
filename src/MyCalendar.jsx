import { useState } from "react";
import Calendar from "react-calendar";
import "./MyCalendar.css";

export function MyCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <main>
      <div className="calendar-container">
        <Calendar onChange={setValue} value={value} selectRange={true} />
      </div>
      {value.length > 0 ? (
        <p className="text-center">
          <span className="bold">Start:</span> {value[0].toDateString()}
          <br></br>
          <span className="bold">End:</span> {value[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">
          <span className="bold">Defualt selected date:</span> {value.toDateString()}
        </p>
      )}
    </main>
  );
}
