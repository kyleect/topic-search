import "@babel/polyfill";
import { navigate, Router } from "@reach/router";
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import SearchPage from "./pages/SearchPage";
import CreateTopicPage from "./pages/CreateTopicPage";

const Style = styled.div`
  font-style: bold;
`;

const App = () => {
  return (
    <Style>
      <Router>
        <CreateTopicPage path="/" onSubmit={topic => navigate(`/${topic}`)} />
        <SearchPage path="/:topic" />
      </Router>
    </Style>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
