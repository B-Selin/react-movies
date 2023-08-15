import { Link } from 'react-router-dom';

export default function NavBar(user) {
  return (
    <nav>
      <Link to="/">Movies List</Link>
      <Link to="/actors">Actors List</Link>

      {user && <span>Welcome {user}!</span>}
    </nav>
  );
}
