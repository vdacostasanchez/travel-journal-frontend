import { TripsIndex } from "./TripsIndex";
import { TripsNew } from "./TripsNew";
import { TripsShow } from "./TripsShow";
import { TripsUpdate } from "./TripsUpdate";
import { JournalEntriesIndex } from "./JournalEntriesIndex";
import { JournalEntriesNew } from "./JournalEntriesNew";
import { JournalEntriesShow } from "./JournalEntriesShow";
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
  const [journalEntries, setJournalEntries] = useState([]);
  const [isJournalEntriesShowVisible, setIsJournalEntriesShowVisible] = useState(false);
  const [currentJournalEntry, setCurrentJournalEntry] = useState({});

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

  const handleIndexJournalEntries = () => {
    axios.get("http://localhost:3000/journal_entries.json").then((response) => {
      setJournalEntries(response.data);
    });
  };

  useEffect(handleIndexJournalEntries, []);

  const handleCreateJournalEntry = (params, successCallback) => {
    axios.post("http://localhost:3000/journal_entries.json", params).then((response) => {
      setJournalEntries([...journalEntries, response.data]);
      successCallback();
    });
  };

  const handleShowJournalEntry = (journalEntry) => {
    setIsJournalEntriesShowVisible(true);
    setCurrentJournalEntry(journalEntry);
  };

  const handleClose = () => {
    setIsJournalEntriesShowVisible(false);
  };

  return (
    <main className="container">
      <h1>Welcome to your Travel Journal!</h1>

      <Routes>
        <Route
          path="/"
          element={<TripsIndex trips={trips} onShowTrip={handleShowTrip} onUpdateTrip={handleUpdateShowTrip} />}
        />
        <Route
          path="/trips"
          element={<TripsIndex trips={trips} onShowTrip={handleShowTrip} onUpdateTrip={handleUpdateShowTrip} />}
        />
        <Route path="/trips/new" element={<TripsNew onCreateTrip={handleCreateTrip} />} />

        <Route
          path="/journal_entries"
          element={<JournalEntriesIndex journalEntries={journalEntries} onShowJournalEntry={handleShowJournalEntry} />}
        />
        <Route
          path="/journal_entries/new"
          element={<JournalEntriesNew trips={trips} onCreateJournalEntry={handleCreateJournalEntry} />}
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Modal show={isTripsShowVisible} onClose={handleCloseShow}>
        <TripsShow trip={currentTrip} />
      </Modal>
      <Modal show={isTripsUpdateVisible} onClose={handleCloseUpdate}>
        <TripsUpdate trip={currentTrip} onUpdateTrip={handleUpdateTrip} onDestroyTrip={handleDestroyTrip} />
      </Modal>

      <Modal show={isJournalEntriesShowVisible} onClose={handleClose}>
        <JournalEntriesShow journalEntry={currentJournalEntry} />
      </Modal>
    </main>
  );
}
