import styled from "styled-components";
import React from 'react';
import Presentation from "./Sections/Presentation";
import Tecnologies from "./Sections/TecnologieSection";
import Projects from "./Sections/ProjectSection";


export default function Home() {
  return (
    <AppContainer className="App">
      <Header></Header>
      <Presentation/>
      <About>
        <p> Sobre Mim</p>
      </About>
     <Tecnologies/>
     <Projects/>
    </AppContainer>
  );
}

const AppContainer = styled.div`
height:100%;
width:100%;
display:flex;
flex-direction:column;
.Whatsapp{
  background-color:red;
  height:10px;
  width:10px;
}
`;
const Header = styled.div`
  width:100%;
  height:65px;
  margin-top:-5vh;
  background-color:#892ec1;
  position: fixed;
`;
const About = styled.div`
  font-size:32px;
  margin-top:5vh;
  padding-left:5vh;
  font-weight:bold;
  color:#0B121D;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
`;