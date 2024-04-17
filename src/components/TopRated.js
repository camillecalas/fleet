import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopRated = () => {
	const [TopRatedMovie, setTopRatedMovie] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API}`);
			setTopRatedMovie(response.data.results);
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
	
		fetchData();
	  }, []);
	
	return (
	
		<div>
			<h1>Top rated movie</h1>
			{TopRatedMovie.map((movie) => (
				<img
				key={movie.id}
				src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
				alt={movie.title}
				/>
			))}
		</div>
	)
}

export default TopRated