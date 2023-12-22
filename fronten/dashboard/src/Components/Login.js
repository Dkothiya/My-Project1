import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigets = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigets("/");
    }
  });

  const handlelogin = async () => {
    console.warn(email, password);

    let result = await fetch("http://localhost:5000/Login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigets("/");
    } else {
      alert("Please enter connect details");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="email"
        className="inputbox"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        className="inputbox"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button className="Button1" type="button" onClick={handlelogin}>
        Login
      </button>
    </div>
  );
}
