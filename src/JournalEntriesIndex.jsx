export function JournalEntriesIndex(props) {
  return (
    <div>
      <h1>All Journal Entries</h1>
      {props.journalEntries.map((journalEntry) => (
        <div key={journalEntry.id}>
          <h2>{journalEntry.title}</h2>
          <p>{journalEntry.date}</p>
          <button onClick={() => props.onShowJournalEntry(journalEntry)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
