import "@babel/polyfill";
import { navigate, Router } from "@reach/router";
import React from "react";
import ReactDOM from "react-dom";

import SearchPage from "./pages/SearchPage";
import CreateTopicPage from "./pages/CreateTopicPage";

const App = () => {
  return (
    <Router>
      <CreateTopicPage path="/" onSubmit={topic => navigate(`/${topic}`)} />
      <SearchPage path="/:topic" />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
