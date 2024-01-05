import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authentication"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a className="nav-link" href="#" onClick={handleClick}>
      Logout
    </a>
  );
}
