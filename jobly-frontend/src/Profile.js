import React, { useContext, useState } from "react";
import UserContext from "./UserContext";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
  const { currentUser, updateUser } = useContext(UserContext);
  if (!currentUser) return <Navigate to="/login" />;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: currentUser.email,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    updateUser(currentUser.username, formData);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email"> Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={formData.email}
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
      <button> Save</button>
    </form>
  );
};

export default Profile;
