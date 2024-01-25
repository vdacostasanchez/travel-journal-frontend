import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { useState } from "react";

export function Header() {
  const [tripsDropdownVisible, setTripsDropdownVisible] = useState(false);
  const [entriesDropdownVisible, setEntriesDropdownVisible] = useState(false);
  const [placesDropdownVisible, setPlacesDropdownVisible] = useState(false);

  const handleTripsToggle = () => setTripsDropdownVisible(!tripsDropdownVisible);
  const handleEntriesToggle = () => setEntriesDropdownVisible(!entriesDropdownVisible);
  const handlePlacesToggle = () => setPlacesDropdownVisible(!placesDropdownVisible);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Travel Journal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/map">
                  Map
                </Link>
              </li>
              <li className="nav-item dropdown" onMouseEnter={handleTripsToggle} onMouseLeave={handleTripsToggle}>
                <Link className="nav-link " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Trips
                </Link>
                <ul className={`dropdown-menu ${tripsDropdownVisible ? "show" : ""}`}>
                  <li>
                    <Link className="dropdown-item" to="/trips">
                      All Trips
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/trips/new">
                      New Trip
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown" onMouseEnter={handleEntriesToggle} onMouseLeave={handleEntriesToggle}>
                <Link className="nav-link " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Journal Entries
                </Link>
                <ul className={`dropdown-menu ${entriesDropdownVisible ? "show" : ""}`}>
                  <li>
                    <Link className="dropdown-item" to="/journal_entries">
                      All Journal Entries
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/journal_entries/new">
                      New Journal Entry
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown" onMouseEnter={handlePlacesToggle} onMouseLeave={handlePlacesToggle}>
                <Link className="nav-link " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Places
                </Link>
                <ul className={`dropdown-menu ${placesDropdownVisible ? "show" : ""}`}>
                  <li>
                    <Link className="dropdown-item" to="/places">
                      All Places
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/places/new">
                      New Place
                    </Link>
                  </li>
                </ul>
              </li>
              {localStorage.jwt === undefined ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Singup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <LogoutLink />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
