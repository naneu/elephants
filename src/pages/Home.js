import React from "react";
import { useGlobalContext } from "../Context";
import Loading from "../components/Loading";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Loading />
    </div>
  );
}

export default Home;
