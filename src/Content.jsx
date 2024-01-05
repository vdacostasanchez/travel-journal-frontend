import { TripsIndex } from "./TripsIndex";
import { TripsNew } from "./TripsNew";
import { TripsShow } from "./TripsShow";
import { TripsUpdate } from "./TripsUpdate";
import { JournalEntriesIndex } from "./JournalEntriesIndex";
import { JournalEntriesNew } from "./JournalEntriesNew";
import { JournalEntriesShow } from "./JournalEntriesShow";
import { JournalEntriesUpdate } from "./JournalEntriesUpdate";
import { PlacesIndex } from "./PlacesIndex";
import { PlacesNew } from "./PlacesNew";
import { MyMap } from "./MyMap";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Modal } from "./Modal";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

export function Content() {
  //trips
  const [trips, setTrips] = useState([]);
  const [isTripsShowVisible, setIsTripsShowVisible] = useState(false);
  const [isTripsUpdateVisible, setIsTripsUpdateVisible] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({});
  //journal entries
  const [journalEntries, setJournalEntries] = useState([]);
  const [isJournalEntriesShowVisible, setIsJournalEntriesShowVisible] = useState(false);
  const [isJournalEntriesUpdateVisible, setIsJournalEntriesUpdateVisible] = useState(false);
  const [currentJournalEntry, setCurrentJournalEntry] = useState({});
  //places
  const [places, setPlaces] = useState([]);
  // const [isPlacesShowVisible, setIsPlacesShowVisible] = useState(false);
  // const [isPlacesUpdateVisible, setIsPlacesUpdateVisible] = useState(false);
  // const [currentPlace, setCurrentPlace] = useState({});

  //trips
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
      handleCloseUpdateTrip();
    });
  };

  const handleDestroyTrip = (id) => {
    axios.delete(`http://localhost:3000/trips/${id}.json`).then((response) => {
      console.log(response);
      setTrips(trips.filter((t) => t.id !== id));
      handleCloseUpdateTrip();
    });
  };

  const handleCloseShowTrip = () => {
    setIsTripsShowVisible(false);
  };

  const handleCloseUpdateTrip = () => {
    setIsTripsUpdateVisible(false);
  };

  //journal entries
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

  const handleUpdateShowJournalEntry = (journalEntry) => {
    setIsJournalEntriesUpdateVisible(true);
    setCurrentJournalEntry(journalEntry);
  };

  const handleCloseShowJournalEntries = () => {
    setIsJournalEntriesShowVisible(false);
  };
  const handleCloseUpdateJournalEntries = () => {
    setIsJournalEntriesUpdateVisible(false);
  };

  const handleUpdateJournalEntry = (id, params, successCallback) => {
    axios.patch(`http://localhost:3000/journal_entries/${id}.json`, params).then((response) => {
      setJournalEntries(
        journalEntries.map((journalEntry) => {
          if (journalEntry.id === response.data.id) {
            return response.data;
          } else {
            return journalEntry;
          }
        })
      );
      successCallback();
      handleCloseUpdateJournalEntries();
    });
  };

  const handleDestroyJournalEntry = (journalEntry) => {
    axios.delete(`http://localhost:3000/journal_entries/${journalEntry.id}.json`).then((response) => {
      console.log(response);
      setJournalEntries(journalEntries.filter((j) => j.id !== journalEntry.id));
      handleCloseUpdateJournalEntries();
    });
  };

  //places
  const handleIndexPlaces = () => {
    axios.get("http://localhost:3000/places.json").then((response) => {
      setPlaces(response.data);
    });
  };

  useEffect(handleIndexPlaces, []);

  const handleCreatePlace = (params, successCallback) => {
    axios.post("http://localhost:3000/places.json", params).then((response) => {
      setPlaces([...places, response.data]);
      successCallback();
    });
  };

  return (
    <main className="container">
      <h1>Welcome to your Travel Journal!</h1>

      <Routes>
        <Route path="/" element={<MyMap />} />
        <Route
          path="/trips"
          element={<TripsIndex trips={trips} onShowTrip={handleShowTrip} onUpdateTrip={handleUpdateShowTrip} />}
        />
        <Route path="/trips/new" element={<TripsNew onCreateTrip={handleCreateTrip} />} />

        <Route
          path="/journal_entries"
          element={
            <JournalEntriesIndex
              journalEntries={journalEntries}
              onShowJournalEntry={handleShowJournalEntry}
              onUpdateJournalEntry={handleUpdateShowJournalEntry}
            />
          }
        />
        <Route
          path="/journal_entries/new"
          element={<JournalEntriesNew trips={trips} onCreateJournalEntry={handleCreateJournalEntry} />}
        />

        <Route path="/places" element={<PlacesIndex places={places} />} />
        <Route path="/places/new" element={<PlacesNew trips={trips} onCreatePlace={handleCreatePlace} />} />

        <Route path="/map" element={<MyMap />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Modal show={isTripsShowVisible} onClose={handleCloseShowTrip}>
        <TripsShow trip={currentTrip} />
      </Modal>
      <Modal show={isTripsUpdateVisible} onClose={handleCloseUpdateTrip}>
        <TripsUpdate trip={currentTrip} onUpdateTrip={handleUpdateTrip} onDestroyTrip={handleDestroyTrip} />
      </Modal>

      <Modal show={isJournalEntriesShowVisible} onClose={handleCloseShowJournalEntries}>
        <JournalEntriesShow journalEntry={currentJournalEntry} />
      </Modal>
      <Modal show={isJournalEntriesUpdateVisible} onClose={handleCloseUpdateJournalEntries}>
        <JournalEntriesUpdate
          trips={trips}
          journalEntry={currentJournalEntry}
          onUpdateJournalEntry={handleUpdateJournalEntry}
          onDestroyJournalEntry={handleDestroyJournalEntry}
        />
      </Modal>
    </main>
  );
}
