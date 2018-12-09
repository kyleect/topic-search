import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Styled = styled.div`
  font-style: bold;
`;

class App extends React.Component {
  render() {
    return (
      <Styled>
        <h1>Hello</h1>
      </Styled>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
