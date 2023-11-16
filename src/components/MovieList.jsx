import React from "react";

//rafce 화살표함수
export const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <div className="d-flex m-3">
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  );
};
