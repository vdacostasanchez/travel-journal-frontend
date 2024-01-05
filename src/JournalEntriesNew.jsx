export function JournalEntriesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateJournalEntry(params, () => event.target.reset());
    window.location.href = "/journal_entries";
  };

  return (
    <div>
      <h1>New Journal Entry</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" name="title" />
        </div>
        <div>
          Date: <input type="date" name="date" />
        </div>
        <div>
          Entry: <input type="text" name="entry" />
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
        <button type="submit">Create Journal Entry</button>
      </form>
    </div>
  );
}
