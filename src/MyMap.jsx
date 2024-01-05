import { Map, Marker } from "pigeon-maps";

export function MyMap() {
  return (
    <Map height={400} width={600} defaultCenter={[51.1657, 10.4515]} defaultZoom={2}>
      <Marker width={50} anchor={[51.1657, 10.4515]} />
    </Map>
  );
}
