import React from "react";
import Spinner from "react-spinkit";
import "./index.css";

function Loading() {
  return (
    <div className="container">
      <Spinner name="cube-grid" color="white" className="spinner" />
    </div>
  );
}

export default Loading;
