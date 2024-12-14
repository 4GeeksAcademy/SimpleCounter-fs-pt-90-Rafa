//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";


// include your styles into the webpack bundle
import "../styles/index.css";
import PropTypes, { number } from "prop-types";


//render your react application
let counter = 0


const Counter = (props) => {
  return (<div className="counterbox">
    <div className="m-3"><i className="fa-solid fa-clock"></i></div>
    <div className="six m-1">{props.six}</div>
    <div className="five m-1">{props.five}</div>
    <div className="four m-1">{props.four}</div>
    <div className="three m-1">{props.three}</div>
    <div className="two m-1">{props.two}</div>
    <div className="one m-1">{props.one}</div>
  </div>
  )
}

Counter.propTypes = {
  one: PropTypes.number,
  two: PropTypes.number,
  three: PropTypes.number,
  four: PropTypes.number,
  five: PropTypes.number,
  six: PropTypes.number,
}

setInterval(() => {
  ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
      <Counter one={counter} />
    </React.StrictMode>,
  )
  counter = counter + 1;
}, 1000);
