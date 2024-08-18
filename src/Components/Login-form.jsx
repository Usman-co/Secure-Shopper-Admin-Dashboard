import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthenticContext";

      const Loginform = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "Usman" && passWord === "Password") {
      setError(false);
      login();
      navigate("/home");
    } else if (userName === "admin" && passWord === "adminpassword") {
      setError(false);
      login();
      navigate("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <center>
        <form onSubmit={handleSubmit}>
          <div className="login-form">
            <h1>Login Form</h1>
            <input
              type="text"
              value={userName}
              placeholder="username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
            />
          </div>
          <button type="submit" id="btn">
            Login
          </button>

          {error && (
            <p style={{ color: "red" }}>Invalid username or password</p>
          )}
        </form>
      
    </center>
  );
};

export default Loginform;
