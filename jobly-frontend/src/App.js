import React from "react";
import "./App.css";
import JoblyApi from "./api/api";
import { BrowserRouter } from "react-router-dom";
import RouterList from "./RouterList";
import NavBar from "./NavBar";
import UserContext from "./UserContext";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const TOKEN_STORAGE = "jobly-token";
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE);
  const [applicationsId, setAplicationsId] = useState(new Set());
  useEffect(() => {
    const getCurrentUser = async () => {
      if (token) {
        JoblyApi.token = token;
        const { username } = jwt.decode(token);
        console.log(username);
        const res = await JoblyApi.getCurrentUser(username);

        console.log(res);
        setCurrentUser(res);
        setAplicationsId(new Set(res.applications));
        console.log(applicationsId);
      }
    };
    getCurrentUser();
  }, [token]);

  const login = async loginData => {
    const token = await JoblyApi.login(loginData);
    JoblyApi.token = token;
    setToken(token);
  };
  const signup = async signupData => {
    const token = await JoblyApi.signup(signupData);
    JoblyApi.token = token;

    setToken(token);
  };
  const logout = () => {
    setToken(null);
    setCurrentUser(null);
  };
  const updateUser = async (username, userData) => {
    const res = await JoblyApi.updateUser(username, userData);
    setCurrentUser(res);
  };

  const applyToJob = async (username, jobId) => {
    const res = await JoblyApi.applyToJob(username, jobId);
    console.log(res);
  };
  const hasAppliedToJob = jobId => {
    return applicationsId.has(jobId);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{ currentUser, updateUser, applyToJob, hasAppliedToJob }}
        >
          <NavBar logout={logout} />
          <RouterList login={login} signup={signup} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
