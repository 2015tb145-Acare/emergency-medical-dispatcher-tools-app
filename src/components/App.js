import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppContextProvider } from "../context";
import { ApiContexProvider } from "../context";

import Navbar from "./Navbar";
import SignInModal from "./SignInModal";
import Home from "./Home";
import Dashboard from "./Dashboard";
import PageNotFound from "./PageNotFound";

import { GlobalStyle } from "../styles";
import styled from "styled-components/macro";
import { mixins } from "../styles";

const App = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <GlobalStyle />
        <AppContainer>
          <AppContextProvider>
            <ApiContexProvider>
              <Navbar />
              <SignInModal />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </ApiContexProvider>
          </AppContextProvider>
        </AppContainer>
      </Router>
    </>
  );
};

export default App;

const AppContainer = styled.div`
  ${mixins.flexCenter}
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
`;
