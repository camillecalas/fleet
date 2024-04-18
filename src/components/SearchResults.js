import React from "react";
import { useNavigate } from "react-router-dom";


function SearchResults({ searchResults }) {
	const navigate = useNavigate();

    const handleMovieDetails = (movieId) => {
        navigate(`/${movieId}`);
    };

    return (
        <div>
            {searchResults.length > 0 ? (
                searchResults.map((movie) => (
                    <img
                        onClick={() => handleMovieDetails(movie.id, navigate)}
                        key={movie.id}
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                    />
                ))
            ) : (
                <p>No search results found</p>
            )}
        </div>
    );
}

export default SearchResults;
