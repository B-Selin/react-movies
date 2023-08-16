import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import ActorPage from "../ActorPage/ActorPage";
import MoviePage from "../MoviePage/MoviePage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import LoginPage from "../LoginPage/LoginPage";
import { movies } from "../../data.js";

export default function App() {

  // declare a state variable called user using the useState hook. user is initialized to null
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {/* If user is truthy, it will render the NavBar component, passing the user state as a prop. Then it renders some Routes from react-router-dom */}
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviePage movies={movies} />} />
            <Route
              path="/movies/:movieName"
              element={<MovieDetailPage movies={movies} />}
            />
            <Route path="/actors" element={<ActorPage movies={movies} />} />
          </Routes>
        </>
      ) : (
        // If user is falsy, it will render the LoginPage component, passing setUser as a prop
        <LoginPage setUser={setUser} />
      )}
    </div>
  );
}
