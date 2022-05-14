import React from "react";
import { useGlobalContext } from "../Context";
import Loading from "../components/Loading";
import Elephants from "../components/Elephants";

function Home() {

  return (
    <div>
      <Elephants />
    </div>
  );
}

export default Home;
