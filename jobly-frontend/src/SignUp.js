import React, { useContext, useState } from "react";
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";

const SignUp = ({ signup }) => {
  const { currentUser } = useContext(UserContext);
  if (currentUser) return <Navigate to="/" />;

  const INITIAL_VALUES = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  };
  const [formData, setFormData] = useState(INITIAL_VALUES);
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSignUp = async () => {
    await signup(formData);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    handleSignUp();
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
      <label htmlFor="email"> Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={formData.email}
      />
      <label htmlFor="password"> Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={formData.password}
      />
      <label htmlFor="firstName"> First Name</label>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        value={formData.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        value={formData.lastName}
      />
      <button> SignUp</button>
    </form>
  );
};

export default SignUp;
