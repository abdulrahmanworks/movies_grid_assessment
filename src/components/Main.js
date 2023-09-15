import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Main() {
    const key = '';
    const [movies, setMovies] = useState([])
    useEffect(() => {
        getMoviesList();
    }, []);
    const getMoviesList = () => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`).then(resp => {
            setMovies(resp.data.results)
        })
    }

    const renderedMovies = movies.map(movie => {
        return (
            <div className="col-6 p-0">
                <Link to={`/movie/details/${movie.id}`} className="movie-item">
                    <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.original_title} />
                </Link>
                {/* <a href="javascript:void()" className="movie-item">
                    <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.original_title} />
                </a> */}
            </div>
        )
    })
  return (
    <div>
      <main>
        <div className="container px-0">
            <div className="movies-list">
                <div className="row g-0">
                    {renderedMovies}
                </div>
            </div>
        </div>
    </main>
    </div>
  );
}

export default Main;
