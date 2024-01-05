export function PlacesNew(props) {
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
          Date: <input type="date" name="date" />
        </div>
        <div>
          Address: <input type="text" name="address" />
        </div>
        <div>
          Trip:{" "}
          <select name="trip_id" id="trip">
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
