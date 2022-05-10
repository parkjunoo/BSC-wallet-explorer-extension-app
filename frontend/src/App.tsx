import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import theme from "./theme";

function App() {
  useEffect(() => {}, []);
  return (
    <PageWrapper>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </HashRouter>
    </PageWrapper>
  );
}
const PageWrapper = styled.div`
  width: 375px;
  height: 600px;
  background-color: ${theme.colors.White};
`;

export default App;
