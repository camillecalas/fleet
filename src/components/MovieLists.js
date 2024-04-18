import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const MovieLists = () => {
	const navigate = useNavigate();
	const [MovieListsMovie, setMovieLists] = useState([]);

    const handleMovieDetails = (movieId) => {
        navigate(`/${movieId}`);
    };
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API}`);
				setMovieLists(response.data.results);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
	
		fetchData();
	}, []);
	
	return (
	
		<div>
			{MovieListsMovie.map((movie) => (
				<img
					onClick={()=> handleMovieDetails(movie.id)}
					key={movie.id}
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt={movie.title}
				/>
			))}
		</div>
	)
}

export default MovieLists