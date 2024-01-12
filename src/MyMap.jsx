import { Map, Marker } from "pigeon-maps";
import { useState, useEffect } from "react";
import axios from "axios";

export function MyMap() {
  const [places, setPlaces] = useState([]);

  const handleGetPlaces = () => {
    axios.get("http://localhost:3000/places.json").then((response) => {
      setPlaces(response.data);
      console.log(response.data);
    });
  };

  useEffect(handleGetPlaces, []);
  console.log(places);

  return (
    <Map height={400} width={600} defaultCenter={[42.3611, -71.0571]} defaultZoom={6}>
      {places.map((place) => (
        <Marker key={place.id} width={40} anchor={[place.latitude, place.longitude]} />
      ))}
      ;
    </Map>
  );
}
