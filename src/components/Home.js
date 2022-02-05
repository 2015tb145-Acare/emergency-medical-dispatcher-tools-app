import React from "react";
import { Link, useNavigate } from "react-router-dom";

import SignInForm from "./SignInForm";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Link to="/dashboard">Accès public</Link>
      <p>ou</p>
      <SignInForm />
    </>
  );
};

export default Home;
