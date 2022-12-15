import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login({ setUser }) {
    const navigate = useNavigate();
    const [user, setUserData] = useState({ email: "", password: "" });
    // eslint-disable-next-line
    const [errors, setErrors] = useState([]);

    // Keep track of the changes made to the form
  function handleChanges(e) {
    console.log(e.target.name);
    setUserData({ ...user, [e.target.name]: e.target.value });
  }

  // Validates if all fields are filled
  function validateUser(e) {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      alert("All fields are required");
    } else {
      AuthenticateUser(e);
    }
    // Check if user exists in the database and authenticate
  function AuthenticateUser(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.ok) {
        response.json().then((userData) => loginUser(userData));
      } else {
        alert("Failed to login");
        response.json().then((error) => setErrors(error.errors));
      }
    });
  }
