import styled from "styled-components";
import { TecnologiesList } from "../Tecnologie";
export default function Tecnologies({ PopUp, SetPopUp }) {


  return (
    <TecnologiesDiv>
      <h1>Tecnologias</h1>
      <div className="TecnologieList">{TecnologiesList.map((e, i) => {
        return (
          <button className="TecnoligieDiv" key={i}
            onClick={() => { SetPopUp(e.PopUpCount) }}>
            <img src={e.Image} alt={e.Image} className="image" />
            <p>{e.Tecnologie}</p>
          </button>
        )
      })}

      </div>
    </TecnologiesDiv>
  );

}

const TecnologiesDiv = styled.div`
  width:100%;
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
    width:150%;
    max-width:90%;
    min-width:400px;
    padding:0px;
    
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
  }
  .TecnoligieDiv{
    width:80%;
    height:200px;
    margin: 10px 10px 10px 10px;
    padding:10px 10px 10px 10px;
    max-width:180px;
    min-width:80px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    background-color:white;
    border-style:none;
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 2px 1px, rgba(0, 0, 0, 0.02) 0px 4px 2px, rgba(0, 0, 0, 0.02) 0px 8px 4px, rgba(0, 0, 0, 0.02) 0px 16px 8px, rgba(0, 0, 0, 0.02) 0px 32px 16px;
    :hover{
      cursor: pointer;
      background-color:#DEE9FF;
    }
  }
  p{
    height:30px;
    width:20%;
    font-size:18px;
    font-weight:bold;
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
    width:90px;
    height:90px;
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
    font-size:15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    :hover{
      cursor: pointer;
    }
  }
  
`;