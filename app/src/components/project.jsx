import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import {useEffect, useState} from "react";
  

import { useSelector } from "react-redux";
export default function Project() {
  const color = useSelector((state) => state.theme.color);
  const Bgcolor = useSelector((state) => state.theme.bgcolor);
  const dispmenu = useSelector((state) => state.menu.menudisp);

const [align,setAlign] = useState([]);

useEffect(()=>{
   axios.get("http://localhost:5000/projects")
   .then(res=>setAlign(res.data));
},[]);

// const align = [
//   { 
//     title: "Chatbot Engine Using AI",
//     description: "I developed an AI-powered chatbot using Retrieval-Augmented Generation (RAG) to extract accurate answers from user-uploaded documents such as PDFs and manuals. The system understands user queries using NLP techniques and retrieves the most relevant content before generating a clear, contextual response. Built with a basic Express.js API and a React.js frontend, this project demonstrates how AI can automate document understanding and intelligent question-answering for industries like aviation, healthcare, and education.",
//     tech: ["React JS", "Node JS", "Express JS", "MongoDB"]
//   },
//   {
//     title: "Employee Attendance Management System",
//     description: "Developed a web-based Employee Attendance Management System using React.js, Express.js, PostgreSQL, and JWT authentication. The system allows employees to securely log in, mark attendance, view daily/weekly records, and manage their profiles. Implemented secure user authentication with JWT, REST APIs for data handling, and a responsive React interface for smooth user experience.",
//     tech: ["React JS", "Node JS", "Express JS", "PostgreSQL"]
//   },
//   {
//     title: "XO Game",
//     description: "A simple yet fully functional tic-tac-toe (XO) game developed using React. The game features turn-based logic, automatic win/draw detection, and the ability to restart the game.",
//     tech: ["React JS","Node JS"]
//   }
// ];




  const navigate = useNavigate();

return(
  <div
      className={dispmenu ? "scrollbarmain" : "scrollbarmainscrolltrue"}
      style={{
        backgroundColor: Bgcolor,
        color: color,
        left: "0%",
        padding: "40px",
      }}
    >

<div
        className="innerfullscreen"
        style={{ color: color, backgroundColor: Bgcolor }}
      >
      <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
            }}
          >
           <div className="tscroll" style={{backgroundColor:color}}>
<div className="tsc" style={{backgroundColor:Bgcolor,padding:'10px',width:'98%',height:'100%',margin:'0px'}}>
   <div
    style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
             marginLeft:'35px',
             marginTop:'10px'

            }}
          >
            <div
              onClick={() => navigate("/about")}
              className={color === "white" ? "backhoo" : "backhoowh"}
              style={{ borderRadius: "25%" }}
            >
              {color === "white" ? (
                <img
                  height={"50px"}
                  src="/whiteback.svg"
                  alt="arrow"
                  decoding="async"
                />
              ) : (
                <img
                  height={"50px"}
                  src="/blackback.svg"
                  alt="arrow"
                  decoding="async"
                />
              )}
            </div>
            <h1 className="aboutheadme">Project</h1>
          </div>
          

    <div className="GContainer">

{align.map((item, index) => {


  return (
   

      
        <div key={index} className="SubContainer" style={{ borderColor: color }}>
          <div className="headtestpro">{item.title}</div>
          <div className="bodytestpro">{item.description}</div>

          <div className="endtestpro">
  {item.tech.map((tech, i) => ([
    <div
      key={`s-${i}`}
      className="splitter"
      style={{ backgroundColor: color }}
    />,
    <div key={`t-${i}`} className="Psourcecss">
      {tech}
    </div>
  ]))}

  <div
    className="splitter"
    style={{ backgroundColor: color }}
  />
</div>

        </div>
      
  );
})}
      

    </div>
       <h4
              className="projectbase"
              style={{
                display: "flex",
                width: "100%",
                height: "50px",
                justifyContent: "end",
              }}
            >
              <span
                className="nav pointers"
                onClick={() => navigate("/resume")}
              >
                {" "}
                See resume{" "}
                {color === "white" ? (
                  <img src="/arrow.svg" alt="arrow" decoding="async" />
                ) : (
                  <img src="/Barrow.svg" alt="arrow" decoding="async" />
                )}{" "}
              </span>
            </h4>
</div>


           </div>
            </div></div>
      </div>
     
     
    </div>
)
}