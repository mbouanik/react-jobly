import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

const HomePage = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <>
      {console.log(currentUser)}
      <div>Welcome to Jobly</div>
      {currentUser ? (
        <div>
          {" "}
          Welcome Back {currentUser.firstName} {currentUser.lastName}
        </div>
      ) : (
        <div>
          <Link to="/login">Login </Link>
          <Link to="/signup">Signup </Link>
        </div>
      )}
    </>
  );
};

export default HomePage;
