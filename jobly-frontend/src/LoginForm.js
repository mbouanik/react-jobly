import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

const LoginForm = ({ login }) => {
  const { currentUser } = useContext(UserContext);
  if (currentUser) return <Navigate to="/" />;
  const INITIAL_VALUES = {
    username: "",
    password: ""
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_VALUES);
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleLogin = async () => {
    await login(formData);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    handleLogin();
    navigate("/");

    // setFormData(INITIAL_VALUES);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username"> Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        value={formData.username}
      />
      <label htmlFor="username"> Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={formData.password}
      />
      <button> Log in </button>
    </form>
  );
};

export default LoginForm;
