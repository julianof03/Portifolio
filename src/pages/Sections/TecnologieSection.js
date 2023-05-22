import styled from "styled-components";
import { TecnologiesList } from "../Tecnologie";
export default function Tecnologies(){
    return( 
    <TecnologiesDiv>
        <h1>Tecnologias</h1>
        
        <div className="TecnologieList">{TecnologiesList.map((e) => { return (
          <div className="TecnoligieDiv">
            <img src={e.Image} alt={e.Image} className="image"/>
            <p>{e.Tecnologie}</p>
          </div>
        ) })}

        </div>
        <input type="button" value="Ver Mais"></input>
      </TecnologiesDiv>);
    
}

const TecnologiesDiv = styled.div`
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