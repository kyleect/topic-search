import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import SetTopicForm from "./SetTopicForm";
import SetQueryForm from "./SetQueryForm";

import HistoryList from "./HistoryList";

const Style = styled.div`
  font-style: bold;
`;

const App = () => {
  const [topic, setTopic] = useState("");
  const [history, setHistory] = useState([]);

  const onSubmitSearch = query => {
    setHistory([...history, { topic, query }]);
  };

  return (
    <Style>
      {topic ? (
        <SetQueryForm topic={topic} onSubmit={onSubmitSearch} />
      ) : (
        <SetTopicForm onSubmit={setTopic} />
      )}

      <HistoryList history={history} />
    </Style>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
