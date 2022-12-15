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