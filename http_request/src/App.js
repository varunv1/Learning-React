import React, { useCallback, useEffect, useState } from "react";
import Movies from "./components/Movies";
import Card from "./components/UI/Card";
import styles from "./App.module.css";
import AddMovies from "./components/AddMovies";
const App = () => {
  // console.log("In app js ", movieList);
  const [movies, setMovies] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    const response = await fetch(
      "https://react-http-d7005-default-rtdb.firebaseio.com/movies.json"
    );
    const response_data = await response.json();
    console.log(response_data);
  });

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <Card className={styles.content}>
      <AddMovies />
      <button className={styles.refresh} onClick={fetchMoviesHandler}>
        Refresh
      </button>
      {/* <Movies movies={movies} /> */}
    </Card>
  );
};

export default App;
