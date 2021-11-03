import React from "react";
import styles from "./Movies.module.css";
import MovieCard from "./UI/MovieCard";
const Movies = (props) => {
  return props.movies.map((movie, index) => (
    <MovieCard {...movie} key={index} className={styles.movies} />
  ));
};

export default Movies;
