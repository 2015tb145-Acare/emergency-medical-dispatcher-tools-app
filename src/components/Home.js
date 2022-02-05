import React from "react";
import { Link } from "react-router-dom";

import SignInForm from "./SignInForm";

const Home = () => {
  return (
    <>
      <Link to="/dashboard">Accès public</Link>
      <p>ou</p>
      <SignInForm />
    </>
  );
};

export default Home;
