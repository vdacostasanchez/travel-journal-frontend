export function TripsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTrip(params, () => event.target.reset());
    window.location.href = "/trips";
  };

  return (
    <div>
      <h1>New Trip</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Start Date: <input type="date" name="start_date" />
        </div>
        <div>
          End Date: <input type="date" name="end_date" />
        </div>
        <div>
          Location: <input type="text" name="location" />
        </div>
        <button type="submit">Create Trip</button>
      </form>
    </div>
  );
}
