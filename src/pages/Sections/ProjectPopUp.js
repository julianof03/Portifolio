import styled from "styled-components";
import { TecnologiesList } from "../Tecnologie";
export default function ProjectPopUp({ PopUp, SetPopUp }) {
    const List = TecnologiesList[PopUp - 1];
    if (PopUp === 0) return ('');
    return (
        <PoPContainer>
                <button className="ExitButton" type="button"
                    onClick={() => { SetPopUp(0) }}
                ></button>
                <div className="HtmlAndDescripition">
                    <img src={List.Image}/>
                    <p> {List.Description}</p>
                </div>
            
            <div className="ProjectsButtonContainer">
            <h3>Projetos Utilizados</h3>
                {List.projectsList.map((e) => 
                <button type="button" className="ProjectButton">{e.ProjectName}
                </button>)}
            </div>
        </PoPContainer>
    );
}

const PoPContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start;
    position:fixed;
    height:480px;
    width:590px;
    top:20vh;
    color:black;
    background-color:white;
    border-radius:15px;
    transition: opacity 3s ease-in-out;
    box-shadow: rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.09) 0px -2px 6px 0px inset;
    img{
        height:165px;
        margin-top:15px;
    }
    .HtmlAndDescripition{
        display:flex;
        margin-top:55px;
        justify-content:space-around;
        height:50%;
        font-size:18px;
        width:90%;
        p{
            width:45%;
            height:100%;
            text-align:initial;
            height:fit-content;
        }
    }
    .ProjectsButtonContainer{
        width:100%;
        position:absolute;
        bottom:0px;
        border-radius:0px 0px 15px 15px;
        display:flex;
        background-color:#0d2738;
        align-items:center;
        justify-content:space-evenly;
        height:150px;
        
        h3{
            position:absolute;
            top:0px;
            color:white;
        }
        .ProjectButton{
            height:35px;
            width:85px;
            margin-top:35px;
            background-color:white;
            border-radius:5px;
            border-style:none;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            :hover{
            cursor: pointer;
            background-color:grey;
    }
        }
    }
    .ExitButton{
    height:25px;
    width:25px;
    font-size:12px;
    font-weight:bold;
    position:absolute;
    right:10px;
    top:10px;
    background-color:#E02116;
    border-style:none;
    border-radius:5px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    :hover{
        cursor: pointer;
        background-color:#9C1710;
    }
    
}
`;