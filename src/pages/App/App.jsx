import { useState } from 'react'

import './App.css'
import LoginPage from '../LoginPage/LoginPage';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  // Set up a user state variable in <App> that will keep track of the user. The user state should be initialed to null (no user) .

  const [user, setUser] = useState(null)

  return (
    <div>
      {user ? (
        <>
          <NavBar />

          <Routes>
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorsListPage />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      )}
    </div>
  );
}
