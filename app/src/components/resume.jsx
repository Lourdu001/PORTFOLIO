import { useNavigate } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";
export default function Resume() {
  const color = useSelector((state) => state.theme.color);
  const Bgcolor = useSelector((state) => state.theme.bgcolor);
  const dispmenu = useSelector((state) => state.menu.menudisp);
  const navigate = useNavigate();
  return (
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
        <div>
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <div
              onClick={() => navigate("/project")}
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
            <h1 className="aboutheadme">Resume</h1>
          </div>
        </div>
                    <div className="icontainer" ><img
          src="/Resume.png"
          alt="resume"
          loading="lazy"
          
          decoding="async"
          style={{width:'100%',height:'100%'}}
        /></div>

        
        <h4
          className="resumebase"
          style={{
            display: "flex",
            width: "100wh",
            height: "50px",
            marginTop: "30px",
            justifyContent: "end",
          }}
        >
          <span className="nav pointers" onClick={() => navigate("/contact")}>
            {" "}
            See contact{" "}
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
