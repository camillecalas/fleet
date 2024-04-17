import React from 'react'
import MovieDetails from './MovieDetails';

function SearchResults({ searchResults }) {
	console.log(searchResults)
	return (
	  <div>
		{searchResults.length > 0 ? (
		  searchResults.map((movie) => (
			<img
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
  

export default SearchResults