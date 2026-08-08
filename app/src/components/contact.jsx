import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { useSelector } from "react-redux";
export default function Contact() {
  const color = useSelector((state) => state.theme.color);
  const Bgcolor = useSelector((state) => state.theme.bgcolor);
  const dispmenu = useSelector((state) => state.menu.menudisp);
  const navigate = useNavigate();
  const border = useSelector((state) => state.theme.color);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");
const [data, setData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});
  const onsubmit = async () => {
    if(name === ""){
      return alert("Please enter your name");
    }
    if(email === ""){
      return alert("Please enter your email");
    }

    const payload = {
      name,
      email,
      subject,
      message,
    };

    setData(payload);

    try {
      await axios.post("http://localhost:5000/contact", payload);
      alert("Message sent successfully");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Failed to save message");
    }
  }

  return (
    <div
      className={dispmenu ? "scrollbarmain" : "scrollbarmainscrolltrue"}
      style={{
        backgroundColor: Bgcolor,
        color: color,
        left: "0%",
        padding: "40px",
        paddingTop: "  40px",
      }}
    >
      <div
        className="innerfullscreen"
        style={{ color: color, backgroundColor: Bgcolor }}
      >
        <div className="cinnerpage">
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div
                onClick={() => navigate("/resume")}
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
              <h1 className="aboutheadme">Contact</h1>
            </div>
          </div>
          <h1 className="conhead">Get in touch</h1>
          <h2 className="conbody">
            Have a question, want to collaborate, or need hiring details ?
            <br /> Send a message and I will get back to you soon.
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "  0px",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <h3>Email:</h3>
              <h3 className="mailalign">rajlourdhu889@gmail.com</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <h3>Phone:</h3>
              <h3>+91 8248031072</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <h3>Location:</h3>
              <h3>Madurai, Tamil Nadu, India</h3>
            </div>
          </div>
          <div style={{ marginBottom: "50px" }}>
            {color === "white" ? (
              <div
                style={{
                  display: "flex",
                  width: "200px",
                  height: "50px",
                  flexDirection: "row",
                  gap: "0px",
                  marginTop: "20px",
                }}
              >
                {" "}
                <span className="pointer icontext">
                  <img
                    src="/gmail.svg"
                    width={"80px"}
                    height={"40px"}
                    decoding="async"
                    alt="gmail"
                  />
                  Gmail
                </span>{" "}
                <span className="pointer icontext">
                  <img
                    src="/Linkedin.svg"
                    width={"80px"}
                    height={"40px"}
                    decoding="async"
                    alt="linkedin"
                  />
                  LinkedIn
                </span>{" "}
                <span className="pointer icontext">
                  <img
                    src="/Github.svg"
                    width={"80px"}
                    height={"40px"}
                    decoding="async"
                    alt="github"
                  />
                  Github
                </span>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  width: "70px",
                  height: "50px",
                  flexDirection: "row",
                  gap: "0px",
                  marginTop: "20px",
                }}
              >
                <span className="pointer icontext">
                  <img
                    src="/Bgmail.svg"
                    width={"80px"}
                    height={"40px"}
                    decoding="async"
                    alt="gmail"
                  />
                  Gmail
                </span>{" "}
                <span className="pointer icontext">
                  <img
                    src="/BLinkedin.svg"
                    width={"80px"}
                    height={"40px"}
                    decoding="async"
                    alt="linkedin"
                  />
                  LinkedIn
                </span>{" "}
                <span className="pointer icontext">
                  <img
                    src="/BGithub.svg"
                    width={"80px"}
                    height={"40px"}
                    decoding="async"
                    alt="github"
                  />
                  Github
                </span>
              </div>
            )}
          </div>
          <div
            className="contactscroll   cboxcontainer"
            style={{ border: `3px solid ${border}`, borderRadius: "5px" }}
          >
            <div className="interflex">
              <h3 className="labelfield">Name:</h3>
              <input
                type="text"
                className="inpconset"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ border: `2px solid ${border}`, color: color }}
              />
            </div>

            <div className="interflex">
              <h3 className="labelfield">Email:</h3>

              <input
                type="email"
                className="inpconset"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ border: `2px solid ${border}`, color: color }}
              />
            </div>
            <div className="interflex">
              <h3 className="labelfield">Subject:</h3>

              <input
                type="text"
                className="inpconset"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={{ border: `2px solid ${border}`, color: color }}
              />
            </div>
            <div className="interflex">
              <h3 className="labelfield">Message:</h3>

              <textarea
                className="inpconset textareacon"
                rows="4"
                maxwidth="400px"
                cols="50"
                style={{ border: `2px solid ${border}`, color: color }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="conbtnsub">
              <button
                className="btnsubmit"
                style={{
                  padding: "5px 20px",
                  borderRadius: "50px",
                  fontWeight: "bold",
                }}
                onClick={onsubmit}
              >
                submit
              </button>
            </div>
          </div>

          <h4
            className="contactbase"
            style={{
              display: "flex",
              width: "100wh",
              height: "50px",

              justifyContent: "end",
            }}
          >
            <span className="nav pointers" onClick={() => navigate("/")}>
              {" "}
              Back to home{" "}
              {color === "white" ? (
                <img src="/arrow.svg" alt="arrow" decoding="async" />
              ) : (
                <img src="/Barrow.svg" alt="arrow" decoding="async" />
              )}{" "}
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
}
