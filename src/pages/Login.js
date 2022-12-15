import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login({ setUser }) {
    const navigate = useNavigate();
    const [user, setUserData] = useState({ email: "", password: "" });
    // eslint-disable-next-line
    const [errors, setErrors] = useState([]);