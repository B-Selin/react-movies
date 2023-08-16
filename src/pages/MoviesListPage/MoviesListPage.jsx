

import MovieCard from '../../components/MovieCard/MovieCard';



// Map over the movies array from props and render a MovieCard component for each movie, passing in the movie as a prop.

// The key prop is set to the movie's title to help React uniquely identify each MovieCard.

// This component takes a list of movies, maps over them, and renders a MovieCard for each one inside a div container.

// the MoviesListPage component is receiving a movies prop which contains an array of movie data. This allows the MoviesListPage component to map over that movie data and render MovieCard components.

export default function MoviesListPage(props) {
  return (
    <div className="container">
      {
        props.movies.map(movie => {
          return <MovieCard key={movie.title} movie={movie} />
        })
      }
    </div>
  )
}
