import { useSelector } from "react-redux";
import Toggle from "./toggle";
import Menu from "./menu";
import "../App.css";

import React, { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const bgcolor = useSelector((state) => state.theme.bgcolor);
  const color = useSelector((state) => state.theme.color);

  const cursorRef = useRef(null);
  const borderRef = useRef(null);

  // transient flags stored in refs (no re-renders)
  const isClickRef = useRef(false);
  const buttonHoverRef = useRef(false);

  // optional state only for rendering the example button (not for cursor movement)
  // you can remove this if you don't need the button to re-render
  const [buttonHovered, setButtonHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const border = borderRef.current;
    if (!cursor || !border) return;

    let clientX = 0;
    let clientY = 0;
    let rafId = null;

    // update loop: position using left/top + keep translate(-50%,-50%) for perfect centering
    const loop = () => {
      // position using left/top (exact pointer location)
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;

      border.style.left = `${clientX}px`;
      border.style.top = `${clientY}px`;

      // apply scale for click effect while preserving centering translate
      const cursorScale = isClickRef.current ? 0.75 : 1;
      const borderScale = isClickRef.current ? 0.95 : 1;

      // keep translate(-50%,-50%) (centers element at left/top)
      cursor.style.transform = `translate(-50%, -50%) scale(${cursorScale})`;
      border.style.transform = `translate(-50%, -50%) scale(${borderScale})`;

      // border color may change on hover
      border.style.borderColor = buttonHoverRef.current ? "yellow" : "#00d4ff";

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    const onMove = (e) => {
      const p = e.touches ? e.touches[0] : e;
      clientX = p.clientX;
      clientY = p.clientY;
    };

    const onDown = () => {
      isClickRef.current = true;
    };

    const onUp = () => {
      isClickRef.current = false;
    };

    // events
    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("touchmove", onMove, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("touchstart", onDown, { passive: true });
    document.addEventListener("touchend", onUp, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("touchend", onUp);
    };
  }, []);

  // helper for button hover: update both ref (fast) and optional state (UI)
  const onButtonEnter = () => {
    buttonHoverRef.current = true;
    setButtonHovered(true);
  };
  const onButtonLeave = () => {
    buttonHoverRef.current = false;
    setButtonHovered(false);
  };
  return (
    <div>
      {" "}
      <style>{`
        * { cursor: none; }

        /* neon-like glow animation (you provided) */
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px #ff005e, 0 0 10px #ff005e, 0 0 20px #ff005e;
          }
          100% {
            box-shadow: 0 0 10px #00d4ff, 0 0 25px #00d4ff, 0 0 50px #00d4ff;
          }
        }

        /* small inner dot with glowing radial background */
        #cursor {
          position: fixed;
          width: 12px;
          height: 12px;
          background: radial-gradient(circle at 50% 50%, rgba(255,0,94,1) 0%, rgba(255,0,94,0.6) 30%, rgba(0,212,255,0.25) 60%, rgba(0,212,255,0) 100%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%) scale(1);
          transition: background 150ms linear, box-shadow 150ms linear, transform 120ms linear;
          /* GPU hint */
          will-change: transform, left, top;
          animation: glow 1.2s infinite alternate;
          box-shadow: 0 0 8px rgba(255,0,94,0.9), 0 0 20px rgba(0,212,255,0.6);
          z-index: 9999;
        }

        /* outer ring */
        #cursor-border {
          position: fixed;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 3px solid transperant; /* border color (will be updated in JS on hover) */
          background: transparent;
          pointer-events: none;
          transform: translate(-50%, -50%) scale(1);
          transition: border-color 120ms linear, transform 120ms linear;
          will-change: transform, left, top;
          animation: glow 1.2s infinite alternate;
          z-index: 9998;
        }
      `}</style>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-border" ref={borderRef} />
      <div
        style={{
          width: "100vw",
          height: "50px",
          position: "fixed",
          top: "0px",
          left: "0px",
          backgroundColor: bgcolor,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            height: "80px",
            left: "0%",
            marginTop: "0px",
            position: "fixed",
            backgroundColor: "#b365f7",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "50px",
              width: "100%",
            }}
          >
            <div
              className="logosiz"
              style={{ border: "5px solid white", borderRadius: "5px" }}
            ></div>
            <div
              className="logowid"
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Portfolio
            </div>
            <div
              style={{
                marginLeft: "auto ",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                paddingRight: "20px",
              }}
            >
              <Toggle />
              <Menu />
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
