import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login.css";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [errors, setErrors] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [docLogin, setDocLogin] = useState(true);
  const [patLogin, setPatLogin] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    birthdate: "",
    age: "",
    doc: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((loginData) => ({ ...loginData, [name]: value }));
  };
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignupData((signupData) => ({ ...signupData, [name]: value }));
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
          .then(() => navigate("/doctor"));
      } else {
        r.json().then((json) => setError(json.error));
      }
    });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (confirmPassword !== signupData.password) {
      alert("Passwords dont' match!");
    }
    fetch("/patients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(signupData),
    }).then((r) => {
      if (r.ok) {
        r.json()
          .then((user) => {
            setUser(user);
          })
          .then(() => navigate("/patient"));
      } else {
        r.json().then((json) => setErrors(json.errors));
      }
    });
  };

  const handleDocClick = () => {
    setDocLogin(true);
    setPatLogin(false);
    setLoginData({ email: "", password: "" });
    setError([]);
  };
  const handlePatClick = () => {
    setDocLogin(false);
    setPatLogin(true);
    setLoginData({ email: "", password: "" });
    setError([]);
  };
  const handleSignupClick = () => {
    setDocLogin(false);
    setPatLogin(false);
    setLoginData({ name: "", email: "", password: "", birthdate: "" });
    setErrors([]);
  };

  return (
    <div className="login md:min-h-[80vh] min-h-[82vh] flex flex-col items-center justify-center">
      <figure className="login-form-box ">
        <div className="selector ">
          <button
            className={docLogin ? "active" : null}
            onClick={handleDocClick}
          >
            Doctor
          </button>
          <button
            className={patLogin ? "active" : null}
            onClick={handlePatClick}
          >
            Patient
          </button>
        </div>

        <div className="flex justify-center items-center md:mt-16 mt-8">
          {docLogin || patLogin ? (
            <form
              className="input-group bg-sky-400 md:py-16 py-8 md:px-12 px-6 rounded-lg"
              onSubmit={handleLoginSubmit}
            >
              <div>
                <label className="text-lg font-medium text-gray-800">
                  {docLogin ? "Doctor's " : "Patient "} Email:
                </label>
                <br />
                <input
                  className="input   mt-2"
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={loginData.email}
                ></input>
              </div>
              <div className="mt-4">
                <label className="input-label text-lg font-medium text-gray-800">
                  Password:
                </label>
                <br />
                <input
                  className="input mt-2"
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  value={loginData.password}
                ></input>
              </div>

              {error ? (
                <p className="error text-red-500 mb-4">{error}</p>
              ) : null}

              <button
                onClick={handleLoginSubmit}
                value="Login"
                className="btn w-full font-medium text-lg"
              >
                Login
              </button>

              <div className="mt-8 flex justify-between items-center">
                <p>Don't have an account?</p>
                <Link
                  to="/signup"
                  className="mx-2 text-white font-medium uppercase"
                >
                  Signup
                </Link>
              </div>
            </form>
          ) : (
            <form className="input-group">
              <div>
                <label className="input-label">Name:</label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleSignUpChange}
                  value={signupData.name}
                ></input>
              </div>

              <div>
                <label className="input-label">Email:</label>
                <input
                  className="input"
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleSignUpChange}
                  value={signupData.email}
                ></input>
              </div>

              <div>
                <label className="input-label">Age:</label>
                <input
                  className="input"
                  type="text"
                  name="age"
                  id="age"
                  onChange={handleSignUpChange}
                  value={signupData.age}
                ></input>
              </div>

              <div>
                <label className="input-label">Birthdate:</label>
                <input
                  className="input"
                  type="text"
                  placeholder="mm/dd/yyyy"
                  name="birthdate"
                  id="birthdate"
                  onChange={handleSignUpChange}
                  value={signupData.birthdate}
                ></input>
              </div>

              <div>
                <label className="input-label">Password:</label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleSignUpChange}
                  value={signupData.password}
                ></input>
              </div>

              <div>
                <label className="input-label">Confirm Password:</label>
                <input
                  className="input"
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>
              </div>

              {errors ? errors.map((e) => <p className="error">{e}</p>) : null}

              <button onClick={handleSignUpSubmit} className="button">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </figure>
    </div>
  );
};

export default Login;
