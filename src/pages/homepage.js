import styled from "styled-components";
import { TecnologiesList } from "./Tecnologie";
import { ProjectList } from "./Projects";
import React, { Component } from 'react';
import ScrollContainer from "react-indiana-drag-scroll";
import ReactPlayer from 'react-player'
import { useState } from "react";


export default function Home() {

  const [time, SetTime] = useState(0);
  const changeTime = (event) => {
    SetTime(event.target.value);
  };


  return (
    <AppContainer className="App">
      <Header></Header>
      <Presentation>
        <p> Video de apresentação </p>
        <div className="Video">
        <ReactPlayer height='100%' width='100%' controls url='https://www.youtube.com/watch?v=MxqM91WrnQk'/>
        </div>
      </Presentation>
      <About>
        <p> Sobre Mim</p>
      </About>
      <Tecnologies>
        <h1>Tecnologias</h1>
        
        <div className="TecnologieList">{TecnologiesList.map((e) => { return (
          <div className="TecnoligieDiv">
            <img src={e.Image} alt={e.Image} className="image"/>
            <p>{e.Tecnologie}</p>
          </div>
        ) })}

        </div>
        <input type="button" value="Ver Mais"></input>
      </Tecnologies>
      <Projects>
        <h1>Projetos</h1>
        <ScrollContainer className="container">
            {ProjectList.map
              (
                (e) => {
                  return (
                    <div className="project">
                      <img src={e.Image} alt="img" className="image"/>
                      <button className="OnHover">
                        {e.ProjectName}
                      </button>
                    </div>
                  )
                }
            )}
        </ScrollContainer>
      </Projects>
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
const Presentation = styled.div`
  height:55vh;
  width:100%;
  margin-top:5vh;
  font-size:32px;
  padding-left:5vh;
  color:#0B121D;
  font-weight:bold;
  display:flex;
  flex-direction:column;
  align-items:flex-start;

  .Video{
    width:70%;
    height:400px;
    max-height:560px;
    border-radius:15px;
    min-width:400px;
    background-color:#892ec1;
  }
  @media only screen and (max-width: 600px) {
    height:37vh;
    .Video {
      width:70%;
  }
}
@media only screen and (min-width: 601px) {
    height:42vh;
    .Video {
      width:478px;
  }
}
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
const Tecnologies = styled.div`
  width:80%;
  font-size:32px;
  margin-top:5vh;
  padding-left:5vh;
  color:#0B121D;
  font-weight:bold;
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  align-items:center;


  h1{
    font-size:32px;
  }
  .TecnologieList{
    width:100%;
    max-width:90%;
    min-width:400px;
    padding:0px;
    
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
  }
  .TecnoligieDiv{
    width:20%;
    margin: 10px 10px 10px 10px;
    padding:10px 10px 10px 10px;
    max-width:120px;
    min-width:80px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 2px 1px, rgba(0, 0, 0, 0.02) 0px 4px 2px, rgba(0, 0, 0, 0.02) 0px 8px 4px, rgba(0, 0, 0, 0.02) 0px 16px 8px, rgba(0, 0, 0, 0.02) 0px 32px 16px;
    :hover{
      cursor: pointer;
      background-color:#DEE9FF;
    }
  }
  p{
    height:30px;
    width:20%;
    margin-top:5px;
    font-size:15px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    :hover{
      cursor: pointer;
    }
  }
  img{
    width:70px;
    height:70px;
  }
  input{
    width:25%;
    height:25px;
    margin-top:25px;
    background-color:white;
    border-style:none;
    border-radius:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#0C1630;
    font-size:18px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    :hover{
      cursor: pointer;
    }
  }
  
`;
const Projects = styled.div`
  margin-top:5vh;
  padding-left:5vh;
  margin-bottom:250px;
  font-size:32px;
  font-weight:bold;
  color:#892ec1;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  
  .container{
    display:flex;
    height:285px;
    width:80%;
    min-width:400px;
    border-width:5px;
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  .image{
    width:240px;
    height:240px;
    border-radius:5px;
  }
  .project{
    margin-top:20px;
    width:270px;
    height:240px;
    border-radius:5px;
    margin-left:25px;
    margin-right:25px;
    background-color:#ebdff2;
    position:relative;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  }
  .OnHover{
    top:0px;
    width:100%;
    height:100%;
    border-radius: 5px 5px 5px 5px;
    font-size:32px;
    background-color: rgba(0,0,0,0);
    color: rgba(142,101,227,0);
    font-weight:bold;
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    border-style:none;
    :hover{

      background-color: rgba(60,15,104,0.5);
    color: rgba(235,223,242,1);
    }
  }
  .OnHover:active{
    background-color: rgba(235,223,242,0.5);
      color: rgba(60,15,104,1);
  }

`;
const SocialMidias = styled.div`
  font-size:32px;
  padding-left:5vh;
  margin-top:5vh;
  font-weight:bold;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  color:#892ec1;
`;