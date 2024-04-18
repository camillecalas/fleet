import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_API}`);
		console.log(response.data)
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]); // Utilisation de movieId comme dépendance

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <StyledMovie>
		<img
			src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
			alt={movie.title}
		/>
		<h2>{movie.title}</h2>
		<div id='details'>
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
    </StyledMovie>
  );


}

export default MovieDetails;



const StyledMovie = styled.div`
	display: flex;
	flex-direction:column;
	align-items: center;
	gap: 1rem;
	margin: 2rem;

	h2{
		margin: 0rem;
		padding: 0rem;
	}

	img {
		height: 20rem;
		/* object-fit: cover; */
	}

	#description{
		width: 50%;
	}
	
	#details{
		display: flex;
		gap: 0.5rem;
		font-size: 1rem;
		font-weight: lighter;
		align-items: center;
	}
`;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import styled from 'styled-components';

// const StyledMovieOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const StyledMovieDetails = styled.div`
//   background-color: white;
//   padding: 2rem;
// `;

// const MovieDetails = () => {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_API}`);
//         console.log(response.data);
//         setMovie(response.data);
//         setShowModal(true); // Open the modal when movie details are fetched
//       } catch (error) {
//         console.error('Error fetching movie details:', error);
//       }
//     };

//     fetchMovieDetails();
//   }, [movieId]);

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   if (!movie) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//       {showModal && (
//         <StyledMovieOverlay onClick={handleCloseModal}>
//           <StyledMovieDetails onClick={(e) => e.stopPropagation()}>
//             <img
//               src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//               alt={movie.title}
//             />
//             <h2>{movie.title}</h2>
//             <p>{movie.overview}</p>
//           </StyledMovieDetails>
//         </StyledMovieOverlay>
//       )}
//     </>
//   );
// };

// export default MovieDetails;
