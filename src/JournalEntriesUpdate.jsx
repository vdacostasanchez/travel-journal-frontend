export function JournalEntriesUpdate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateJournalEntry(props.journalEntry.id, params, () => event.target.reset());
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.journalEntry.title} type="text" name="title" />
        </div>
        <div>
          Date: <input defaultValue={props.journalEntry.date} type="date" name="date" />
        </div>
        <div>
          Entry: <input defaultValue={props.journalEntry.entry} type="text" name="entry" />
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
        <button type="submit">Update Journal Entry</button>
      </form>
    </div>
  );
}
