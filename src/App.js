import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MovieList } from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import ScrollContainer from "react-indiana-drag-scroll";

function App() {
  const [movies, setMovies] = useState([
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lion King",
      Year: "1994",
      imdbID: "tt0110357",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    },
    {
      Title: "King Kong",
      Year: "2005",
      imdbID: "tt0360717",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
  ]);
  const [searchValue, setSearchValue] = useState("");

  //영화 데이터 가져오기
  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?apikey=c9f35eb0&s=${searchValue}`;
    const response = await fetch(url);
    const responseJson = await response.json(); //JSON으로 변환
    //영화정보를 업데이트하기
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    if (searchValue.length > 3) {
      //3자 이상 검색
      getMovieRequest(searchValue);
    }
  }, [searchValue]); //searchValue가 변경될때마다

  return (
    <div className="container-fluid movie-app">
      <div className="row align-items-center my-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <ScrollContainer className="row scroll-container">
        {/* 영화가 없을때 */}
        {movies && <MovieList movies={movies} />}
      </ScrollContainer>
    </div>
  );
}
export default App;
