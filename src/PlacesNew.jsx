import { useState } from "react";

export function PlacesNew(props) {
  const [selectedTrip, setSelectedTrip] = useState(null);

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);

    const matchingTrip = props.trips.find(
      (trip) => selectedDate >= new Date(trip.start_date) && selectedDate <= new Date(trip.end_date)
    );

    setSelectedTrip(matchingTrip);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePlace(params, () => event.target.reset());
    window.location.href = "/places";
  };

  return (
    <div>
      <h1>New Place</h1>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" name="name" />
        </div>
        <div>
          Date: <input type="date" name="date" onChange={handleDateChange} />
        </div>
        <div>
          Address: <input type="text" name="address" />
        </div>
        <div>
          Trip:{" "}
          <select name="trip_id" id="trip" value={selectedTrip ? selectedTrip.id : ""} onChange={() => {}}>
            <option value="">Select a Trip</option>
            {props.trips.map((trip) => (
              <option key={trip.id} value={trip.id}>
                {trip.location}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create Place</button>
      </form>
    </div>
  );
}
