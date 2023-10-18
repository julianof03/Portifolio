import styled from "styled-components";
import React from 'react';
import Presentation from "./Sections/Presentation";
import Tecnologies from "./Sections/TecnologieSection";
import Projects from "./Sections/ProjectSection";
import ProjectPopUp from "./Sections/ProjectPopUp";
import About from "./Sections/About";
import { useEffect, useState } from 'react';

export default function Home() {
  const [PopUp, SetPopUp] = useState(0);
  return (
    <AppContainer className="App">
      <About/>
      {/* <Presentation/> */}
      <ProjectPopUp
          PopUp = {PopUp}
          SetPopUp = {SetPopUp}
      />  
      <Tecnologies 
        PopUp = {PopUp}
        SetPopUp = {SetPopUp}
      />
     <Projects/>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`;
const Header = styled.div`
  width:100%;
  height:65px;
  margin-top:-5vh;
  background-color:#892ec1;
  position: fixed;
`;
