import { MyCalendar } from "./MyCalendar";
import { useState } from "react";

export function TripsNew(props) {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleCalendarChange = (dates) => {
    setSelectedDates(dates);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    params.set("start_date", selectedDates[0]?.toDateString());
    params.set("end_date", selectedDates[1]?.toDateString());
    props.onCreateTrip(params, () => event.target.reset());
    window.location.href = "/trips";
  };

  return (
    <div>
      <h1>New Trip</h1>
      <form onSubmit={handleSubmit}>
        <MyCalendar onSelectDates={handleCalendarChange} />
        <div>
          Location(s): <input type="text" name="location" />
        </div>
        <button type="submit">Create Trip</button>
      </form>
    </div>
  );
}
