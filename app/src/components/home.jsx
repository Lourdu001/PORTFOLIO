import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Home() {
  const color = useSelector((state) => state.theme.color);
  const Bgcolor = useSelector((state) => state.theme.bgcolor);
  const dispmenu = useSelector((state) => state.menu.menudisp);
  const navigate = useNavigate();

  return (
    <div
      className={dispmenu ? "scrollbarmain" : "scrollbarmain"}
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
        <div className="neon-container " style={{ color: color }}>
          <h1 style={{ color: color }}>
            I'm
            <br />{" "}
            <span className="neon-text homesize lovalina-font">
              JEYA LOURDU RAJ S
            </span>
          </h1>
          <h2 className="hcontentcss" style={{ margin: "10px" }}>
            {" "}
            Full-stack developer who believes every problem deserves a
            beautifully coded solution.
          </h2>

          <br />
          {color === "white" ? (
            <div
              style={{
                display: "flex",
                width: "200px",
                height: "50px",
                flexDirection: "row",
                gap: "0px",
                marginTop: "0px",
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
                marginTop: "0px",
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
          <h4
            className="homebase"
            style={{
              display: "flex",
              width: "100wh",
              height: "50px",
              marginTop: "50px",

              justifyContent: "end",
            }}
          >
            <span className="nav pointers" onClick={() => navigate("/about")}>
              {" "}
              See about me{" "}
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
