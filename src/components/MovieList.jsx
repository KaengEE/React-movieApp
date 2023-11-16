import React from "react";

//rafce 화살표함수
export const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <div className="image-container d-flex m-3" key={movie.imdbID}>
          <img src={movie.Poster} alt="movie"></img>

          <div
            onClick={() => props.addMovie(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <span className="me-2"> 선호작 추가</span>
            <span>💖</span>
          </div>
        </div>
      ))}
    </>
  );
};
