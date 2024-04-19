import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import FooterMovieDetail from './FooterMovieDetail';


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
	<>
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
				<p id='description'>{movie.overview}</p>
				</div>
			</MovieContent>
		</MovieDetailsContainer>
		<FooterMovieDetail/>
	</>
  );
}

export default MovieDetails;


const MovieDetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	position: relative;
	background-image: url(${props => props.$backgroundUrl});
	height: 100vh;
	background-size: cover;
	background-position: center;
`;

const MovieContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content:space-around;
	gap: 1rem;
	height: 100vh;
	padding: 2rem;
	background-color: rgba(0, 0, 0, 0.6);

	#details_container{
		display: flex; 
		flex-direction: column;
		align-items:center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.4);
		padding: 2rem;
		width: 40%;
	}

	h2{
		margin: 0rem;
	}

	#details {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap:0.5rem;
		font-weight: lighter;
	}

	#description {
		font-weight: 400;
		width: 100%; 
	}

	@media (max-width: 1030px) {
		img{
			width: 20rem;
		}
		#description {
			width: 90%;
  		}
		#details_container{
			width: 90%;
		}
	}	

	@media (max-width: 600px) {
		img{
			width: 10rem;
			object-fit: cover;
		}
		#description {
			width: 95%;
  		}
		#details_container{
			width: 95%;
		}
		#details{
			line-height: 0.3rem;
		}
	}	


`;