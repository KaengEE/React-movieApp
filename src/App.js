import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MovieList } from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import ScrollContainer from "react-indiana-drag-scroll";

function App() {
  const [movies, setMovies] = useState([]);
  const [myMovies, setMyMovies] = useState([]);
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

  useEffect(() => {
    //처음 시작시 myMovies가 있으면 가져와서 초기값 입력
    const movieLikes = JSON.parse(localStorage.getItem("myMovies"));
    if (movieLikes) {
      setMyMovies(movieLikes);
    }
  }, []);

  //localStorage에 선호작 저장
  const saveToLocalStorage = (items) => {
    localStorage.setItem("myMovies", JSON.stringify(items));
  };

  //선호작 리스트(myMovies)에 새로운 영화 추가
  const addMovie = (movie) => {
    const newList = [...myMovies, movie];
    setMyMovies(newList);
    saveToLocalStorage(newList);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row align-items-center my-4">
        <MovieListHeading heading="영화검색과 선호작 등록" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <ScrollContainer className="row scroll-container">
        {/* 영화가 없을때 */}
        {movies && <MovieList movies={movies} addMovie={addMovie} />}
      </ScrollContainer>
      <div className="row align-items-center my-4">
        <MovieListHeading heading="내 선호작" />
      </div>
      <ScrollContainer className="row scroll-container">
        {/* 영화가 없을때 */}
        {movies && <MovieList movies={myMovies} />}
      </ScrollContainer>
    </div>
  );
}
export default App;
