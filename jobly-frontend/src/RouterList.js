import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyDetails from "./CompanyDetails";
import CompanyList from "./CompanyList";
import HomePage from "./HomePage";
import JobDetails from "./JobDetails";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import Profile from "./Profile";
import SignUp from "./SignUp";
import PrivateRoutes from "./PrivateRoutes";

const RouterList = ({ login, signup }) => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/login" element={<LoginForm login={login} />} />
      <Route exact path="/signup" element={<SignUp signup={signup} />} />
      <Route exact path="/profile" element={<Profile />} />

      <Route element={<PrivateRoutes />}>
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/companies/:handle" element={<CompanyDetails />} />
        <Route exact path="/jobs/:id" element={<JobDetails />} />
        <Route exact path="/jobs" element={<JobList />} />
        <Route exact path="/companies" element={<CompanyList />} />
      </Route>
    </Routes>
  );
};

export default RouterList;
