import React from 'react'

const MovieDetails = ({movie}) => {
  return (
	<div>
		<img
			key={movie.id}
			src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
			alt={movie.title}
		/>
		<h2>{movie.title}</h2>
		<h2>{movie.overview}</h2>
		
	</div>

  )
}

export default MovieDetails