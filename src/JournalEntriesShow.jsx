export function JournalEntriesShow(props) {
  return (
    <div>
      <h1>{props.journalEntry.title}</h1>
      <p>{props.journalEntry.date}</p>
      <p>{props.journalEntry.entry}</p>
    </div>
  );
}
