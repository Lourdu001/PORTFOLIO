import { useNavigate } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";

export default function About() {
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <div
            onClick={() => navigate("/")}
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
          <h1 className="aboutheadme">About Me</h1>
        </div>
        <h2 className="aboutbodycss">
          I’m a full-stack web developer with a passion for building smooth,
          modern, and high-performance applications. Whether it’s crafting
          pixel-perfect UI or architecting powerful backend systems, I love the
          entire process of bringing ideas to life. I enjoy solving real-world
          problems, exploring new technologies, and designing experiences that
          feel simple, fast, and enjoyable for users. Every project pushes me to
          grow, experiment, and build something even better than the last.
        </h2>
        <br />
        <h4
          className="aboutbase"
          style={{
            display: "flex",
            width: "100wh",
            height: "50px",

            justifyContent: "end",
          }}
        >
          <span className="nav pointers" onClick={() => navigate("/project")}>
            {" "}
            See project{" "}
            {color === "white" ? (
              <img src="/arrow.svg" alt="arrow" decoding="async" />
            ) : (
              <img src="/Barrow.svg" alt="arrow" decoding="async" />
            )}{" "}
          </span>
        </h4>
      </div>
    </div>
  );
}
