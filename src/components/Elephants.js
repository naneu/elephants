import React, { useState } from "react";
import Loading from "./Loading";
import Elephant from "./Elephant";
import { useGlobalContext } from "../Context";

function Elephants() {
  const { elephants, loading } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState("");
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="section">
      <div className="header-section">
        <h2 className="section-title">Elephants</h2>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="elephants-center">
        {elephants
          .filter((item) => {
            if (searchTerm === "") {
              return item;
            } else if (
              item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => {
            return <Elephant key={item.index} {...item} />;
          })}
      </div>
    </section>
  );
}

export default Elephants;
