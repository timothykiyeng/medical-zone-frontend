import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function SignUp({ setUser }) {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [user, setUserData] = useState({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      phone: "",
      category: "doctor",
    });

     // Keep track of the changes made to the form
  function handleChanges(e) {
    console.log(e.target.name);
    setUserData({ ...user, [e.target.name]: e.target.value });
  }

   // Vallidate the user inputs and check if any are emptty
   function validateUserInput(e) {
    if (
      user.name === "" ||
      user.email === "" ||
      user.phone === "" ||
      user.password === "" ||
      user.password_confirmation === ""
    ) {
      alert("All fields are required");
    } else {
      createUser(e);
    }
  }

  //add a new user to the database
  function createUser(event) {
    event.preventDefault();
    fetch("/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.ok) {
        response.json().then((userData) => {
          setUser(userData);
          userData.category === "doctor"
            ? navigate("/")
            : navigate("/dashboard");
          alert("Created account successfully");
        });
    } else {
        alert("Failed to create account");
        response.json().then((error) => setErrors(error.errors));
      }
    });
  }