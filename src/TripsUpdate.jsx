export function TripsUpdate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateTrip(props.trip.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyTrip(props.trip.id);
  };

  return (
    <div>
      <h1>Update Trip</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Start Date: <input defaultValue={props.trip.start_date} type="date" name="start_date" />
        </div>
        <div>
          End Date: <input defaultValue={props.trip.end_date} type="date" name="end_date" />
        </div>
        <div>
          Location: <input defaultValue={props.trip.location} type="text" name="location" />
        </div>
        <button type="submit">Update Trip</button>
      </form>
      <button onClick={handleClick}>Destroy Trip</button>
    </div>
  );
}
