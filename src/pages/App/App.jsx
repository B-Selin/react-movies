import { useState } from 'react'

import './App.css'
import LoginPage from '../LoginPage/LoginPage';

export default function App() {
  // Set up a user state variable in <App> that will keep track of the user. The user state should be initialed to null (no user) .

  const [user, setUser] = useState(null)
  return (
    <div>
      {user ? (
        <p>Welcome {user}!</p>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </div>
  );
}
