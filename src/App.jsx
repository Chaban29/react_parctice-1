import React from "react";
import styled from "styled-components";
import Counter from "./components/Counter/Counter";

const AppWrapper = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
`;

const App = () => {
  return (
    <AppWrapper>
      <Counter />
    </AppWrapper>
  );
};

export default App;
