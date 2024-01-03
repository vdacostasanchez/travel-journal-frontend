import "./Modal";

export function TripsShow(props) {
  return (
    <div>
      <h2>{props.trip.location}</h2>
      <p>
        {props.trip.start_date} - {props.trip.end_date}
      </p>
    </div>
  );
}
