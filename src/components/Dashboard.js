import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ApiContext } from "../context";

import styled from "styled-components/macro";
import { mixins } from "../styles";

const AppContainer = styled.div`
  ${mixins.flexCenter}
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
`;

const Dashboard = () => {
  const { token, refresh_token } = useContext(ApiContext);

  return (
    <>
      <AppContainer>
        <h1>Dashboard</h1>
        <Link to="/">Retour à l'accueil</Link>
      </AppContainer>
    </>
  );
};

export default Dashboard;
