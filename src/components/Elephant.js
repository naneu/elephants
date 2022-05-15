import React from "react";
import { Link } from "react-router-dom";


function Elephant({ name,sex, image,affiliation }) {
  return (
    <article className="elephant">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="elephant-footer">
        <h3>{name}</h3>
        <h4>{affiliation}</h4>
        <p>{sex}</p>
        <Link to={`/name/${name}`} className='btn btn-primary btn-details'>Details</Link>
      </div>
    </article>
  );
}

export default Elephant;
