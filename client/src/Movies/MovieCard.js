import React from 'react';

const MovieCard = props => {
  //gets its props from movieList: from mapped data ML passes in a 'movie' named prop into this component


  //below we are spreading out the props.movie: so we dont have to say 'props.movie.title' e.g instead just refer to it by the name reference in the { }
  const { title, director, metascore, stars } = props.movie;

  return (

  <div className="movie-card">
 
      <h2> Film: {title} </h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {stars}
        </div>
      ))}  

</div>


  );
};

export default MovieCard;


