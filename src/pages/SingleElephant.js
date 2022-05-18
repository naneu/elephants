import React, { useState, useEffect } from "react";
import { filter } from "lodash";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

function SingleElephant() {
  const { id } = useParams();
  const eleIndex = parseInt(id)
  const { elephants } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [elephant,setElephant] = useState(null)

  useEffect(() => {
    setLoading(true);
    async function getElephantDetails() {
      try {
        const data = filter(elephants,['index', eleIndex])
        const singleData = data[0];
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
        } = singleData;
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
  }, [elephants,eleIndex]);

  if (loading) {
    return <Loading />;
  }
  if (!elephant) {
    return <h3 className="section-title">no elephant to display</h3>;
  } else {
    const {
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
              <span className="elephant-item-data">affiliation :</span>{" "}
              {affiliation}
            </p>
            <p>
              <span className="elephant-item-data">species :</span> {species}
            </p>
            <p>
              <span className="elephant-item-data">sex :</span> {sex}
            </p>
            <p>
              <span className="elephant-item-data">fictional :</span>{" "}
              {fictional}
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
              <span className="elephant-item-data">wikilink :</span> <a href={wikilink}>{wikilink}</a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default SingleElephant;
