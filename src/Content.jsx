import { TripsIndex } from "./TripsIndex";
import { TripsNew } from "./TripsNew";
import { TripsShow } from "./TripsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Modal } from "./Modal";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

export function Content() {
  const [trips, setTrips] = useState([]);
  const [isTripsShowVisible, setIsTripsShowVisible] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({});

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

  const handleShowTrip = (trip) => {
    setIsTripsShowVisible(true);
    setCurrentTrip(trip);
  };

  const handleClose = () => {
    setIsTripsShowVisible(false);
  };

  return (
    <main>
      <h1>Welcome to your Travel Journal!</h1>
      <Routes>
        <Route path="/trips" element={<TripsIndex trips={trips} onShowTrip={handleShowTrip} />} />
        <Route path="/trips/new" element={<TripsNew onCreateTrip={handleCreateTrip} />} />
      </Routes>
      <Modal show={isTripsShowVisible} onClose={handleClose}>
        <TripsShow trip={currentTrip} />
      </Modal>
      <Signup />
      <Login />
    </main>
  );
}
