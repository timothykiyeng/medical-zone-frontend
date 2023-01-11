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