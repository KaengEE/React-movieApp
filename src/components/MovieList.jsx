import React from "react";

//rafce 화살표함수
export const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <div className="image-container d-flex m-3" key={movie.imdbID}>
          <img src={movie.Poster} alt="movie"></img>
          <div
            onClick={() => props.handleClick(movie)}
            className="overlay d-flex flex-column align-items-center justify-content-center"
          >
            <p className="me-2">{movie.Title}</p>
            <span className="me-2 ">
              {props.add ? "선호작 추가 💖" : "선호작제거 ❌"}
            </span>{" "}
          </div>
        </div>
      ))}
    </>
  );
};
