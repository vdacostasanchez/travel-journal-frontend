export function PlacesUpdate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePlace(props.place.id, params, () => event.target.reset());
  };

  // const handleClick = () => {
  //   props.onDestroyPlace(props.place);
  // };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.place.name} type="text" name="name" />
        </div>
        <div>
          Date: <input defaultValue={props.place.date} type="date" name="date" />
        </div>
        <div>
          Address: <input defaultValue={props.place.address} type="text" name="address" />
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
        <button type="submit">Update Place</button>
      </form>
      {/* <button onClick={handleClick}>Destroy Journal Entry</button> */}
    </div>
  );
}
