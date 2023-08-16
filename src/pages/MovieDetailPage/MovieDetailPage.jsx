import { useParams } from "react-router-dom"


// fetch the movie name from the route params, find the matching movie object, and display the details. The movies array is passed in as a prop
export default function MovieDetailPage({ movies }) {

  // use the useParams hook to get the movieName parameter from the route
  let { movieName } = useParams();

  // find the specific movie object in the movies array where the title matches the movieName
  let movie = movies.find(mov => mov.title === movieName)

  // return a JSX div with the movie details: title, release date formatted with toLocaleDateString() a heading for Cast Members, an ul list rendered with .map() that displays the cast members
  return (
    <div className="flex">
      <div>
        <h1>{movie.title}</h1>
        <h4>Released: {new Date(movie.release_date).toLocaleDateString()}</h4>
        <h3>Cast Members:</h3>
        <ul>
          {
            movie.cast.map(actor => {
              return <li key={actor}>{actor}</li>
            })
          }
        </ul>
      </div>
      <img src={`${movie.poster_path}`} alt="" />
    </div>
  )
}

