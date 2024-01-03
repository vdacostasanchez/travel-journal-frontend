export function TripsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTrip(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Trip</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Start Date: <input type="date" name="start_date" />
        </div>
        <div>
          End Date: <input type="date" name="start_date" />
        </div>
        <div>
          Location: <input type="text" name="start_date" />
        </div>
        <button type="submit">Create Trip</button>
      </form>
    </div>
  );
}
