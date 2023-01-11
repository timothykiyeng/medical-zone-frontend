import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    fetch(docLogin ? "http://127.0.0.1:3000/doclogin" : "http://127.0.0.1:3000/patientlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(loginData),
    }).then((r) => {
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
          .then(() => navigate("/"));
      } else {
        r.json().then((json) => setErrors(json.errors));
      }
    });
  };