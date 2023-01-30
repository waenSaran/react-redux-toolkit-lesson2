import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import movieApi from "../../api/MovieApi";
import { APIKey } from "../../api/MovieApiKey";
import MovieList from "../../components/MovieList/MovieList";
import { addMovie } from "../../store/reducer";

import "./Home.scss"

function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  // const movies = useSelector((state)=> state.movie)
  useEffect(() => {
    const fetchMovies = async () => {
      const searchKey = search ? search : "Iron Man";
      const res = await movieApi.get(
        `?apikey=${APIKey}&s=${searchKey}&type=movie`
      );
      setTimeout(() => {
        dispatch(addMovie(res.data.Search));
      }, 500);
    };
    fetchMovies();
  }, [search]);
  return (
    <div className="movies-content">
      <h1>Movies</h1>
      <input
        type="text"
        placeholder="Search movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <MovieList />
    </div>
  );
}

export default Home;
