import styled from "styled-components";
import icon from "../images/Tecnologies/HTML.png"
import React from 'react';

export default function About() {
    return (
        <AboutContainer>
            <div className="Content">
                <div className="Left">
                    <p> Oi! eu sou o Juliano </p>
                    <div className="Tittle">
                        <h1>Dev.</h1>
                        <h1>full Stack</h1>
                    </div>
                </div>

                <Social>
                    <button className="TecnoligieDiv">
                        <img src={icon} alt={'ai'} className="image" />
                    </button>
                    <button className="TecnoligieDiv">
                        <img src={icon} alt={'ai'} className="image" />
                    </button>
                    <button className="TecnoligieDiv">
                        <img src={icon} alt={'ai'} className="image" />
                    </button>
                </Social>
            </div>
        </AboutContainer>
    );
}
const AboutContainer = styled.div`
    height:55vh;
    width:100%;
    margin-top:5vh;
    font-size:32px;
    font-weight:bold;
    color:white;
    display:flex;
    position:relative;
    flex-direction:column;
    align-items:center;
    background-color:#3497da;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    p{
        margin-left:25px;
    }
    .Content{
        height:55vh;
        width:90%;
        position:relative;
        max-width:800px;
    }
    .Left{
        display:flex;
        align-items:start;
        flex-direction:column;
    }
    .Tittle{
        width:60%;
        height:300px;
        margin-left:30px;
        display:flex;
        align-items:start;
        flex-direction:column; 
        justify-content:center;
    }
    h1{
        width:120%;
        margin-top:-20px;
        display:flex;
        align-items:start;
        flex-direction:column;
    }
    button{
        width:140px;
        height:140px;
        border-style:none;
        border-radius:150px;
        background-color:white;
        :hover{
            background-color:#e3e3e3;
        }
    }
    img{
        height:75%;
        width:75%;
    }
    @media only screen and (max-width: 601px) {
        h1{        
            width:140%;
            margin-left:10px;
            font-size:80px;
            margin-top:-50px; }
    }
    @media only screen and (min-width: 655px) {
        .Tittle{
            margin-top:52px; 
        }   
        h1{         
            font-size:80px;
            margin-top:-50px;     
        }
    }
    @media only screen and (min-width: 755px) {
        .Tittle{    
            margin-top:52px;    
        }
        h1{         
            font-size:100px;
            margin-top:-80px;     
        }
    }
    @media only screen and (min-width: 900px) {
        .Tittle{    
            margin-top:52px;    
        }
        h1{         
            font-size:120px;
            margin-top:-80px;   
        }
    }
`;
const Social = styled.div`
    width:20%;
    height:90%;    
    min-width:150px;
    border-radius:5px;
    right:5%;
    bottom:20px;
    
    display:flex;
    position:absolute;
    align-items:center;
    flex-direction:column;
    background-color:white;
    justify-content:space-around;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    @media only screen and (max-width: 601px) {
        width:80%;
        height:120px;
        max-width:900px;
        bottom:5px;
        right:40px;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-around;

        button{
        width:100px;
        height:100px;
        border-radius:150px;
        border-style:none;
        background-color:white;
        :hover{
            background-color:#e3e3e3;
        }
    }
    }
`;