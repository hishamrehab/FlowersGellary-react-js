import React from "react";
import ReactDOM from "react-dom";
import Image1 from "./images/image1.jpg";
const Flowers = (props) => {
  console.log(props);
  return (
    <>
      <div className="cards">
        <h2>{props.title}</h2>
        <img src={props.imgsrc} alt="rose" />
        <p>{props.desc}</p>
              <button>{props.btn}</button>
        <hr />
      </div>
    </>
  );
};

export default Flowers;
