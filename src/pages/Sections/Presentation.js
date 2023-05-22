import ReactPlayer from 'react-player'
import styled from "styled-components";

export default function Presentation(){
    return(
        <PresentationDiv>
            <p> Video de apresentação </p>
            <div className="Video">
            <ReactPlayer height='100%' width='100%' controls url='https://www.youtube.com/watch?v=MxqM91WrnQk'/>
            </div>
        </PresentationDiv>);
}
const PresentationDiv = styled.div`
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