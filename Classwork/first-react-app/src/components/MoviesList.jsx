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

  const moviesItems = movies.map((movie, index) => <li key={index}>{movie.title}</li>);

  return (
    <div>
      <ul>{moviesItems}</ul>
    </div>
  );
}

export default MoviesList;
