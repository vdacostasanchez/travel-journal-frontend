import { useState } from "react";
import Calendar from "react-calendar";
import "./MyCalendar.css";

export function MyCalendar({ onSelectDates }) {
  const [value, setValue] = useState(new Date());

  const handleDateChange = (newValue) => {
    setValue(newValue);
    onSelectDates(newValue);
  };

  return (
    <main>
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={value} selectRange={true} />
      </div>
      {value.length > 0 ? (
        <p>
          <span className="bold">Start Date:</span> {value[0].toDateString()}
          <br></br>
          <span className="bold">End Date:</span> {value[1].toDateString()}
        </p>
      ) : (
        <p>
          <span className="bold">Defualt selected date:</span> {value.toDateString()}
        </p>
      )}
    </main>
  );
}
