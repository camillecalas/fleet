import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import Footer from "./Footer";


function SearchResults({ searchResults }) {
	const navigate = useNavigate();

    const handleMovieDetails = (movieId) => {
        navigate(`/${movieId}`);
    };

    return (
		<>
			<StyledSearchList>
				{searchResults.length > 0 ? (
					searchResults.map((movie) => (
						movie.poster_path !== null ? (
							<img
							onClick={() => handleMovieDetails(movie.id, navigate)}
							key={movie.id}
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
							alt={movie.title}
							/>
							) : null
							))
							) : (
								<p> No search results found</p>
								)}
			</StyledSearchList>
			<Footer/>
		</>
    );
}

export default SearchResults;


const StyledSearchList = styled.div`
	display: flex;
	flex-wrap: wrap; 
	align-items: center;
	justify-content:  center;
	gap: 1rem;
	margin: 2rem;

	img {
		height: 20rem;
		width: 15rem;
		object-fit: cover;
		margin: 0;
	}	
`;