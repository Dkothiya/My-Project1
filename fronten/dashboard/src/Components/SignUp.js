import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigets = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");

    if (auth) {
      navigets("/");
    }
  }, []);

  const collectdata = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token",JSON.stringify(result.auth))
    navigets("/");
  };

  return (
    <div className="signupto">
      <h1>Register</h1>
      <input
        className="inputbox"
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      <input
        className="inputbox"
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <input
        className="inputbox"
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>
      <button className="Button1" type="button" onClick={collectdata}>
        Sign Up
      </button>
    </div>
  );
}
