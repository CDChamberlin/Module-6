import { useState } from "react";
import Movie from "./Movie";
import AddMovieFormUncontrolled from "./AddMovieFormUncontrolled";
function MoviesList(props) {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  const [currentMovies, setCurrentMovies] = useState(movies);
  const movieItems = currentMovies.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));
  const handleReverseMovies = () => {
    let newMovies = [...currentMovies];
    newMovies.reverse();
    setCurrentMovies(newMovies);
  };

  const handleUpdateMovie = (movieID) => {
    let updatedSynopsis = "Iconic heart-warming prison break movie";
    let newMovies = currentMovies.map((movie) =>
      movie.id === movieID ? { ...movie, synopsis: updatedSynopsis } : movie
    );
    setCurrentMovies(newMovies)
  };

  const handleSortMovies = () => {
    let newMovies = [...currentMovies];
    newMovies.sort((a, b) => a.title.localeCompare(b.title))
    setCurrentMovies(newMovies)
  }
  const handleAddMovie = (newMovie) => {
    newMovie.id = currentMovies.length + 1; // unreliable but succinct
    setCurrentMovies([...currentMovies, newMovie])
   }
   

  return (
    <div className="MoviesList">
      <ul>{movieItems}</ul>
      <button onClick={handleReverseMovies}>Reverse List</button>
      <button onClick={() => handleUpdateMovie(1)}>Update Movie</button>
      <button onClick={() => handleSortMovies}>Sort Movies</button>
      <AddMovieFormUncontrolled onAddMovie={handleAddMovie}/>
    </div>
  );
}


export default MoviesList;
