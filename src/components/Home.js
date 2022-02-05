import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ApiContext } from "../context";
import SignInForm from "./SignInForm";

const Home = () => {
  const navigate = useNavigate();
  const { token } = useContext(ApiContext);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    setAccessToken(token);
  }, []);

  return (
    <>
      {accessToken ? (
        navigate("/dashboard")
      ) : (
        <>
          <Link to="/dashboard">Accès public</Link>
          <p>ou</p>
          <SignInForm />
        </>
      )}
    </>
  );
};

export default Home;
