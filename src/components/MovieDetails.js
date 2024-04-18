import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';


function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_API}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <MovieDetailsContainer $backgroundUrl={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}>
      <MovieContent>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div id='details_container'>
				<h2>{movie.title}</h2>
			<div id="details">
				<p id='runtime'>{movie.runtime} min | </p>
				{movie.genres.map((genre, index) => (
					index === movie.genres.length - 1 ? (
					<span key={index}>{genre.name}</span>
					) : (
					<span key={index}>{genre.name} / </span>
					)
				))}
			</div>
        </div>
        <p id='description'>{movie.overview}</p>
      </MovieContent>
    </MovieDetailsContainer>
  );
}

export default MovieDetails;


const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem;
  position: relative;
  /* padding: 2rem; */
  background-image: url(${props => props.$backgroundUrl}); /* Note the $ prefix */
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

const MovieContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	width: 100%;
	height: 100vh;
	padding: 2rem;
	background-color: rgba(0, 0, 0, 0.6);

	img{
		width: 20rem;
	}

	#details_container{
		display: flex; 
		flex-direction: column;
		align-items:center;
		justify-content: center;
	}

	h2{
		margin: 0rem;
	}

	#details {
		display: flex;
		align-items: center;
		gap:0.5rem;
		font-weight: lighter;
	}
	#description {
		width: 40%;
		font-weight: 400;
	}

	@media (max-width: 780px) {
		/* margin: 0; */
		img{
			width: 20rem;
		}
		#description {
			width: 90%;
  		}
	}	
`;