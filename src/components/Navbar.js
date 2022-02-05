import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/appContext";

const Navbar = () => {
  const { toggleModals } = useContext(AppContext);
  const location = useLocation();

  const token = "";
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    setAccessToken(token);
  }, []);

  const Logger = () => {
    // if (!currentUser || !currentUser.emailVerified) {
    if (!accessToken) {
      return (
        <>
          <button
            className="btn btn-primary mx-4"
            onClick={() => toggleModals("signIn")}
          >
            Sign in
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            className="btn btn-secondary mx-4"
            // onClick={logOut}
          >
            logout
          </button>
        </>
      );
    }
  };

  return (
    <>
      {location.pathname !== "/dashboard" ? (
        <></>
      ) : (
        <nav className="navbar fixed-top justify-content-end">
          <Logger />
        </nav>
      )}
    </>
  );
};

export default Navbar;
