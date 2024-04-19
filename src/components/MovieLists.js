import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

const MovieLists = ({apiUrl}) => {
	const navigate = useNavigate();
	const [MovieListsMovie, setMovieLists] = useState([]);

    const handleMovieDetails = (movieId) => {
        navigate(`/${movieId}`);
    };

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${apiUrl}`);
				setMovieLists(response.data.results);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
	
		fetchData();
	}, []);
	
	return (
	
		<StyledListMovies>
			{MovieListsMovie.map((movie) => (
				<img
					onClick={()=> handleMovieDetails(movie.id)}
					key={movie.id}
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt={movie.title}
				/>
			))}
		</StyledListMovies>
	)
}

export default MovieLists

const StyledListMovies = styled.div`
	display: flex;
	overflow-x: auto;
	gap: 1rem;
	margin: 0rem 4rem ;

	img {
		height: 20rem;
	}

	@media (max-width: 1300px) {
   		margin: 0rem;
	}
`;