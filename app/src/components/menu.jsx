import { useNavigate } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuChange } from "../StoreSlice/ColorSlice";

export default function Menu() {
  const [display, setdisplay] = useState(true);
  const [hovered, setHovered] = useState(null);

  const bgcolor = useSelector((state) => state.theme.bgcolor);
  const color = useSelector((state) => state.theme.color);
  const dispatch = useDispatch();
  const HBR = {
    height: "5px",
    backgroundColor: "white",
    borderRadius: "2px",
    transition: "width 0.3s ease",
  };
  const navigate = useNavigate();

  const navfun = (name) => {
    setdisplay(true);
    navigate(
      name === "Home"
        ? "/"
        : name === "About"
          ? "/about"
          : name === "Project"
            ? "/project"
            : name === "Resume"
              ? "/resume"
              : name === "Contact" ? "/contact"
               
                : "/",
    );
    dispatch(MenuChange());
  };
  const menucontainer = () => {
    setdisplay(!display);
    dispatch(MenuChange());
  };

  const box = {
    width: "100%",
    height: "80px",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  };

  return (
    <div width="100%">
      {display ? (
        <div
          id="menu"
          onClick={() => menucontainer()}
          className="menu-container"
        >
          <div className="bar" style={{ ...HBR }}></div>
          <div className="bar" style={{ ...HBR }}></div>
          <div className="bar" style={{ ...HBR }}></div>
        </div>
      ) : (
        <div
          style={{
            display: "block",
            width: "30%",
            position: "fixed",
            height: "200vh",
            right: "0%",
            top: "0px",
            backgroundColor: "#b365f7",
            border: "1px solid white",
            borderTop: "none",
            zIndex: "1",
            margin: "10px 0px",
          }}
        >
          <div
            style={{
              display: "block",
              width: "30%",
              position: "fixed",
              height: "100%",
              right: "0%",
              top: "0px",
              backgroundColor: "#b365f7",
              border: "1px solid white",
              borderTop: "none",
              zIndex: "1",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                height: "79px",
                backgroundColor: "#b365f7",
                alignItems: "center",
                borderBottom: "1px solid white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "50px",
                  width: "100%",
                }}
              >
                <div
                  style={{ display: "flex", gap: "10px", marginLeft: "20px" }}
                >
                  <div
                    id="menu"
                    onClick={() => menucontainer()}
                    className="menu-container"
                  >
                    <div className="bar" style={{ ...HBR }}></div>
                    <div className="bar" style={{ ...HBR }}></div>
                    <div className="bar" style={{ ...HBR }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div style={box}>
              <div
                onMouseEnter={() => setHovered("Home")}
                onMouseLeave={() => setHovered(null)}
                onClick={() => navfun("Home")}
                style={{
                  padding: "20px",
                  width: "100%",
                  backgroundColor:
                    hovered === "Home" ? "purple" : "transparent",
                  color: "white",
                }}
              >
                Home
              </div>
            </div>
            <div style={box}>
              <div
                onMouseEnter={() => setHovered("About")}
                onMouseLeave={() => setHovered(null)}
                onClick={() => navfun("About")}
                style={{
                  padding: "20px",
                  width: "100%",
                  backgroundColor:
                    hovered === "About" ? "purple" : "transparent",
                  color: "white",
                }}
              >
                About
              </div>
            </div>
            <div style={box}>
              <div
                onMouseEnter={() => setHovered("Project")}
                onMouseLeave={() => setHovered(null)}
                onClick={() => navfun("Project")}
                style={{
                  padding: "20px",
                  width: "100%",
                  backgroundColor:
                    hovered === "Project" ? "purple" : "transparent",
                  color: "white",
                }}
              >
                Project
              </div>
            </div>
            <div style={box}>
              <div
                onMouseEnter={() => setHovered("Resume")}
                onMouseLeave={() => setHovered(null)}
                onClick={() => navfun("Resume")}
                style={{
                  padding: "20px",
                  width: "100%",
                  backgroundColor:
                    hovered === "Resume" ? "purple" : "transparent",
                  color: "white",
                }}
              >
                Resume
              </div>
            </div>
            <div style={box}>
              <div
                onMouseEnter={() => setHovered("Contact")}
                onMouseLeave={() => setHovered(null)}
                onClick={() => navfun("Contact")}
                style={{
                  padding: "20px",
                  width: "100%",
                  backgroundColor:
                    hovered === "Contact" ? "purple" : "transparent",
                  color: "white",
                }}
              >
                Contact
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              height: "79px",
              backgroundColor: "#b365f7",
              alignItems: "center",
              borderBottom: "1px solid white",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "50px",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", gap: "10px", marginLeft: "20px" }}>
                <div
                  id="menu"
                  onClick={() => menucontainer()}
                  className="menu-container"
                >
                  <div className="bar" style={{ ...HBR }}></div>
                  <div className="bar" style={{ ...HBR }}></div>
                  <div className="bar" style={{ ...HBR }}></div>
                </div>
              </div>
            </div>
          </div>
          <div style={box}>
            <div
              onMouseEnter={() => setHovered("Home")}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navfun("Home")}
              style={{
                padding: "20px",
                width: "100%",
                backgroundColor: hovered === "Home" ? "purple" : "transparent",
                color: "white",
              }}
            >
              Home
            </div>
          </div>
          <div style={box}>
            <div
              onMouseEnter={() => setHovered("About")}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navfun("About")}
              style={{
                padding: "20px",
                width: "100%",
                backgroundColor: hovered === "About" ? "purple" : "transparent",
                color: "white",
              }}
            >
              About
            </div>
          </div>
          <div style={box}>
            <div
              onMouseEnter={() => setHovered("Project")}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navfun("Project")}
              style={{
                padding: "20px",
                width: "100%",
                backgroundColor:
                  hovered === "Project" ? "purple" : "transparent",
                color: "white",
              }}
            >
              Project
            </div>
          </div>
          <div style={box}>
            <div
              onMouseEnter={() => setHovered("Resume")}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navfun("Resume")}
              style={{
                padding: "20px",
                width: "100%",
                backgroundColor:
                  hovered === "Resume" ? "purple" : "transparent",
                color: "white",
              }}
            >
              Resume
            </div>
          </div>
          <div style={box}>
            <div
              onMouseEnter={() => setHovered("Contact")}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navfun("Contact")}
              style={{
                padding: "20px",
                width: "100%",
                backgroundColor:
                  hovered === "Contact" ? "purple" : "transparent",
                color: "white",
              }}
            >
              Contact
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
