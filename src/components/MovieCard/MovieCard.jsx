import { Link } from "react-router-dom"


// takes in a props object as a parameter
export default function MovieCard(props) {
  return (
    <>
      <Link to={`/movies/${props.movie.title}`} className="movie-link">

        {/* The background image is set using a template literal to insert the poster_path property of the movie prop as the url */}
        <div style={{ "background": `url(${props.movie.poster_path}) no-repeat center center`, "WebkitBackgroundSize": "cover" }} className="item-card">
          <div className="title">
            <h1>{props.movie.title}</h1>
            <h4>Released: {props.movie.release_date}</h4>
          </div>
        </div>
      </Link>
    </>
  );
}



// We are passing props as an argument to the MovieCard component function because we want to be able to pass data from the parent component into the MovieCard component.

// The props object will contain any data that the parent component passes to the MovieCard when rendering it. For example, the parent component may pass a movie object as a prop to MovieCard like:

// &lt;MovieCard movie={movie} /&gt;
// Inside the MovieCard component, we can then access that movie object via the props parameter:

// export default function MovieCard(props) {
//   const { movie } = props;

// can now use movie object that was passed in 
// }
// So passing props allows data to be shared from parent to child component. The child MovieCard component can then use that data (accessed via props) to render its output.