import React from "react";
import { Link } from "react-router-dom";


function Elephant({ _id, name, species, sex, image,affiliation, dob,note, wikilink, dod  }) {
  return (
    <article className="elephant">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="elephant-footer">
        <h3>{name}</h3>
        <h4>{affiliation}</h4>
        <p>{sex}</p>
        <Link to={`/elephant/${_id}`} className='btn btn-primary btn-details'>Details</Link>
      </div>
    </article>
  );
}

export default Elephant;
