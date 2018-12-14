import React from "react";
import { navigate, Router } from "@reach/router";
import SearchPage from "./pages/SearchPage";
import CreateTopicPage from "./pages/CreateTopicPage";

export default () => {
  return (
    <Router>
      <CreateTopicPage path="/" onSubmit={topic => navigate(`/${topic}`)} />
      <SearchPage path="/:topic" />
    </Router>
  );
};
