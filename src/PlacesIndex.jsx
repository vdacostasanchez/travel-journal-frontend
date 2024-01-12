import { MyMap } from "./MyMap";

export function PlacesIndex(props) {
  return (
    <div>
      <h1>All Places</h1>
      <MyMap />
      {props.places.map((place) => (
        <div key={place.id}>
          <h2>{place.name}</h2>
          <p>{place.date}</p>
          <button onClick={() => props.onShowPlace(place)}>More Info</button>
          <button onClick={() => props.onUpdatePlace(place)}>Update Place</button>
        </div>
      ))}
    </div>
  );
}
