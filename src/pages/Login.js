import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [docLogin, setDocLogin] = useState(true);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((loginData) => ({ ...loginData, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError([]);
    fetch(
      docLogin
        ? "http://127.0.0.1:3000/doclogin"
        : "http://127.0.0.1:3000/patientlogin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(loginData),
      }
    ).then((r) => {
      if (r.ok) {
        r.json()
          .then((user) => {
            setUser(user);
          })
          .then(() => navigate("/"));
      } else {
        r.json().then((json) => setError(json.error));
      }
    });
  };

  const handleDocClick = () => {
    setDocLogin(true);
    setLoginData({ email: "", password: "" });
    setError([]);
  };

  const handlePatClick = () => {
    setDocLogin(false);
    setLoginData({ email: "", password: "" });
    setError([]);
  };

  return (
    <div className="login">
      <form onSubmit={handleLoginSubmit}>
        <div className="selector">
          <button
            className={docLogin ? "active" : null}
            onClick={handleDocClick}
          >
            Doctor
          </button>
          <button
            className={!docLogin ? "active" : null}
            onClick={handlePatClick}
          >
            Patient
          </button>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
      {error.length > 0 ? <p>{error}</p> : null}
    </div>
  );
};

export default Login;
