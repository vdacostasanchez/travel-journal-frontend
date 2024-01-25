import "./Modal";

export function TripsShow(props) {
  return (
    <div>
      <h1>{props.trip.location}</h1>
      <p>
        {props.trip.start_date} - {props.trip.end_date}
      </p>
      <br></br>
      <h1>Places</h1>
      {props.trip.places.map((place) => (
        <div key={place.id}>
          <h2>{place.name}</h2>
          <p>{place.date}</p>
          <p>{place.address}</p>
        </div>
      ))}
    </div>
  );
}
