import { useDispatch, useSelector } from "react-redux";
import { ThemeChange } from "../StoreSlice/ColorSlice";
import { useState } from "react";

export default function Toggle() {
  const bgcolor = useSelector((state) => state.theme.bgcolor);
  const color = useSelector((state) => state.theme.color);
  const [contentalign, setcontentalign] = useState("start");
  const dispatch = useDispatch();
  function themeChange() {
    setcontentalign(contentalign === "start" ? "end" : "start");
    dispatch(ThemeChange());
  }
  return (
    <div>
      <div
        onClick={themeChange}
        className="togcontainer"
        style={{
          transition: "ease 0.5s",
          transitionProperty: "justify-content",
          borderRadius: "50px",
          border: "2px solid",
          borderColor: color,

          justifyContent: contentalign,
          display: "flex",
          backgroundColor: bgcolor,
        }}
      >
        <div
          className="togcircle"
          style={{
            borderRadius: "50%",
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
}
