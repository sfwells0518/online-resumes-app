import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (

    <div className="signup">
      <h1>Registration</h1>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          Name: <input name="name" type="text" placeholder="Enter name here" />
        </div>
        <div className="input-box">
          Email: <input name="email" type="email" placeholder="Enter email here"/>
        </div>
        <div className="input-box">
          Password: <input name="password" type="password" placeholder="Enter password here"/>
        </div>
        <div className="input-box">
          Password confirmation: <input name="password_confirmation" type="password" />
        </div>
        <button className="signup-button" type="submit">Signup</button>
      </form>
    </div>
  );
}