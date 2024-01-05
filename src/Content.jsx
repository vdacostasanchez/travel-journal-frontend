import { TripsIndex } from "./TripsIndex";
import { TripsNew } from "./TripsNew";
import { TripsShow } from "./TripsShow";
import { TripsUpdate } from "./TripsUpdate";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Modal } from "./Modal";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

export function Content() {
  const [trips, setTrips] = useState([]);
  const [isTripsShowVisible, setIsTripsShowVisible] = useState(false);
  const [isTripsUpdateVisible, setIsTripsUpdateVisible] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({});

  const handleIndexTrips = () => {
    axios.get("http://localhost:3000/trips.json").then((response) => {
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

  const handleUpdateShowTrip = (trip) => {
    setIsTripsUpdateVisible(true);
    setCurrentTrip(trip);
  };

  const handleUpdateTrip = (id, params, successCallback) => {
    axios.patch(`http://localhost:3000/trips/${id}.json`, params).then((response) => {
      setTrips(
        trips.map((trip) => {
          if (trip.id === response.data.id) {
            return response.data;
          } else {
            return trip;
          }
        })
      );
      successCallback();
      handleCloseUpdate();
    });
  };

  const handleDestroyTrip = (id) => {
    axios.delete(`http://localhost:3000/trips/${id}.json`).then((response) => {
      console.log(response);
      setTrips(trips.filter((t) => t.id !== id));
      handleCloseUpdate();
    });
  };

  const handleCloseShow = () => {
    setIsTripsShowVisible(false);
  };

  const handleCloseUpdate = () => {
    setIsTripsUpdateVisible(false);
  };

  return (
    <main>
      <h1>Welcome to your Travel Journal!</h1>
      <Signup />
      <Login />
      <Routes>
        <Route
          path="/trips"
          element={<TripsIndex trips={trips} onShowTrip={handleShowTrip} onUpdateTrip={handleUpdateShowTrip} />}
        />
        <Route path="/trips/new" element={<TripsNew onCreateTrip={handleCreateTrip} />} />
      </Routes>
      <Modal show={isTripsShowVisible} onClose={handleCloseShow}>
        <TripsShow trip={currentTrip} />
      </Modal>
      <Modal show={isTripsUpdateVisible} onClose={handleCloseUpdate}>
        <TripsUpdate trip={currentTrip} onUpdateTrip={handleUpdateTrip} onDestroyTrip={handleDestroyTrip} />
      </Modal>
    </main>
  );
}
