import { useEffect, useState } from "react";
import "./App.css"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Review from "./components/Review";
import Trailer from "./components/Trailer";
import Api from "./api/Api"
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [movies,setMovies] = useState();
  const [movie,setMovie] = useState();

  const getMovies = async()=>{
    try {
      const response = await Api.get("/api/v1/movies");
      setMovies(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const getMovieData = async(movieId)=>{
    try {
      const response = await Api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;

      setMovie(singleMovie);

    } catch (error) {

      console.error(error);
    }
  }

  useEffect(()=>{
    getMovies();
  },[]);


  return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Layout/>}>
            <Route path="/" element = {<Home movies = {movies}/>}/>
            <Route path="/trailer/:ytTrailerId" element={<Trailer />}/>
            <Route path="/reviews/:movieId" element = {<Review getMovieData = {getMovieData} movie = {movie} setMovie={setMovie}/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="*" element = {<NotFound/>}></Route>
            
          </Route>
        </Routes>
      </Router>
  );
}

export default App
