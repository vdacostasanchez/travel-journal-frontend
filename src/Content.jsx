import { TripsIndex } from "./TripsIndex";
import { TripsNew } from "./TripsNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { useState, useEffect } from "react";
import axios from "axios";

export function Content() {
  const [trips, setTrips] = useState([]);

  const handleIndexTrips = () => {
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  useEffect(handleIndexTrips, []);

  const handleCreateTrip = (params, successCallback) => {
    axios.post("http://localhost:3000/trips.json", params).then((response) => {
      setTrips([...trips, response.data]);
      successCallback();
    });
  };

  return (
    <main>
      <h1>Welcome to your Travel Journal!</h1>
      <Signup />
      <Login />
      <TripsNew onCreateTrip={handleCreateTrip} />
      <TripsIndex trips={trips} />
    </main>
  );
}
