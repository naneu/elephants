import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

function SingleElephant() {
  const { name } = useParams();
  console.log(name);
  const [loading, setLoading] = useState(false);
  const [elephant, setElephant] = useState(null);

  
  const url = `https://elephant-api.herokuapp.com/elephants/name/?${name}`;
  const proxy = "https://api.allorigins.win/get?url=";
  useEffect(() => {
    setLoading(true);
    async function getElephantDetails() {
      try {
        const response = await axios.get(proxy + url);
        const data = await response.data;
        const results = JSON.parse(data.contents);
        const {
          index,
          name,
          affiliation,
          species,
          sex,
          fictional,
          dob,
          dod,
          wikilink,
          image,
          note,
        } = results;
        const newElephant = {
          index,
          name,
          affiliation,
          species,
          sex,
          fictional,
          dob,
          dod,
          wikilink,
          image,
          note,
        };
        setElephant(newElephant);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getElephantDetails();
  }, [name]);

  if (loading) {
    return <Loading />;
  }
  if (!elephant) {
    return <h3 className="section-title">no elephant to display</h3>;
  } else {
    const {
      index,
      name,
      affiliation,
      species,
      sex,
      fictional,
      dob,
      dod,
      wikilink,
      image,
      note,
    } = elephant;
    return (
      <section className="section elephants-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="elephant-item">
          <img src={image} alt={name}></img>
          <div className="elephant-item-info">
            <p>
              <span className="elephant-item-data">name :</span> {name}
            </p>
            <p>
              <span className="elephant-item-data">affiliation :</span> {affiliation}
            </p>
            <p>
              <span className="elephant-item-data">species :</span> {species}
            </p>
            <p>
              <span className="elephant-item-data">sex :</span> {sex}
            </p>
            <p>
              <span className="elephant-item-data">fictional :</span> {fictional}
            </p>
            <p>
              <span className="elephant-item-data">dob :</span> {dob}
            </p>
            <p>
              <span className="elephant-item-data">dod :</span> {dod}
            </p>
            <p>
              <span className="elephant-item-data">note :</span> {note}
            </p>
            <p>
              <span className="elephant-item-data">wikilink :</span> {wikilink}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default SingleElephant;
