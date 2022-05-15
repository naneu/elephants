import React from "react";
import Loading from "./Loading";
import Elephant from "./Elephant";
import { useGlobalContext } from "../Context";

function Elephants() {
  const { elephants, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="section">
      <h2 className="section-title">Elephants</h2>
      <div className="elephants-center">
        {elephants.map((item) => {
          return <Elephant key={item.index} {...item} />;
        })}
      </div>
    </section>
  );
}

export default Elephants;
