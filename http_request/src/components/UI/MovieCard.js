import React from "react";
import styles from "./MovieCard.module.css";
const MovieCard = (props) => {
  console.log("In movie card", props);
  return (
    <div className={`${styles.card} ${styles.container} ${props.className}`}>
      <div className={styles.imgHolder}>
        <img src={props.img} alt={props.alt} />
        <p>{props.description}</p>
        <h4>
          <span>
            <b style={{ textAlign: "left" }}>Title: {props.name}</b>
          </span>
        </h4>
        <h2>
          <span>
            <b style={{ alignItems: "right" }}>Rating: {props.rating}</b>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default MovieCard;
