import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Signup.css";
const Signup = ({ setUser }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [gender, setGender] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    setSignupData((signupData) => ({ ...signupData, [name]: value }));
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (confirmPassword !== signupData.password) {
      alert("Passwords dont' match!");
    }
    fetch("http://127.0.0.1:3000/patients", {
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

  return (
    <div className="signup flex flex-col items-center justify-center md:min-h-[80vh] min-h-[82vh]">
      <h1 className="header text-gray-700 text-center md:my-8 my-4">
        Get Started
      </h1>
      <form
        onSubmit={handleSignUpSubmit}
        className="bg-sky-400 md:py-16 py-8 md:px-12 px-6 rounded-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={signupData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signupData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signupData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input
          type="text"
          name="birthdate"
          placeholder="dd/mm/yyyy"
          value={signupData.birthdate}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={signupData.age}
          onChange={handleChange}
        />
        <div className="gender-select">
          <select
            className="w-full py-2 px-3 rounded-md mt-2"
            id="gender-select"
            placeholder="Gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <button type="submit" className="btn w-full font-medium text-lg">
          Sign Up
        </button>

        <div className="mt-8 flex justify-between items-center">
          <p>Already have an account?</p>
          <Link to="/login" className="mx-2 text-white font-medium uppercase">
            Login
          </Link>
        </div>
      </form>
      {errors.length > 0 ? (
        <ul className="my-4">
          {errors.map((error) => (
            <li className="text-red-500 font-medium text-xl" key={error}>
              {error}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Signup;
