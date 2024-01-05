import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [erros, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.jwt}`;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/trips";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors("Invalid email or password");
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <ul>
        {erros.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Email: <input type="email" name="email" />
        </div>
        <div>
          Password: <input type="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
