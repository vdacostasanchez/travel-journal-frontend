export function TripsIndex(props) {
  console.log(props);
  return (
    <div>
      <h1>All Trips</h1>
      {props.trips.map((trip) => (
        <div key={trip.id}>
          <h2>{trip.location}</h2>
          <p>
            {trip.start_date} - {trip.end_date}
          </p>
        </div>
      ))}
    </div>
  );
}
