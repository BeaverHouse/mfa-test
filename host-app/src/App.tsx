import React from "react";
import GNB from "./component/GNB";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import styled from "styled-components";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import Team from "sample1/Team";
import { data } from "./constant";

// @ts-ignore
const TeamComponent = React.lazy(() => import("sample1/Team"));

const StyledCard = styled(Card)`
  background-color: pink;
  width: 400px;
  height: 300px;
`;

function App() {
  return (
    <div className="App">
      <GNB />
      <h2>MFA Host Template</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ErrorBoundary>
          <TeamComponent team={data} />
        </ErrorBoundary>
        <StyledCard hoverable cover={<h1>This is from host</h1>}>
          <Meta title="Host Card" />
        </StyledCard>
      </div>
    </div>
  );
}

export default App;
