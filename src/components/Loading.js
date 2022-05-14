import React from "react";
import ReactLoading from "react-loading";

function Loading() {
  return (
      <ReactLoading
        type={"spinningBubbles"}
        color={"#ed693a"}
        height={"10%"}
        width={"10%"}
        className="loader"
      />
  );
}

export default Loading;
