import styled from "styled-components";
import { ProjectList } from "../Projects";
import ScrollContainer from "react-indiana-drag-scroll";
export default function Projects(){
    return(
    <ProjectsDiv>
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
      </ProjectsDiv>);
}
const ProjectsDiv = styled.div`
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