export function JournalEntriesShow(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.journalEntry.title}</h1>
      <p>{props.journalEntry.date}</p>
      <p>{props.journalEntry.entry}</p>
      <p>Trip: {props.journalEntry.trip.location}</p>
    </div>
  );
}
