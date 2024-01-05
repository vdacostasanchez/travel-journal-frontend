import React from "react";
import { Map, Marker } from "pigeon-maps";

export function MyMap() {
  return (
    <Map height={300} defaultCenter={[42.879, 71.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[42.879, 71.6997]} />
    </Map>
  );
}
