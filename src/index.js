import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import SetTopicForm from "./SetTopicForm";
import TopicSearchForm from "./TopicSearchForm";

const Style = styled.div`
  font-style: bold;
`;

const App = () => {
  const [topic, setTopic] = useState("");

  return (
    <Style>
      {topic ? (
        <TopicSearchForm topic={topic} />
      ) : (
        <SetTopicForm onSubmit={setTopic} />
      )}
    </Style>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
