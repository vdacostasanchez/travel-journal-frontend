export function PlacesShow(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.place.name}</h1>
      <p>{props.place.date}</p>
      <p>{props.place.address}</p>
      <p>Trip: {props.place.trip.location}</p>
    </div>
  );
}
