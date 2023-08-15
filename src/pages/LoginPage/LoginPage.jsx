
// In App.jsx, the user state is initialized with useState
// he setUser function is passed down to LoginPage as a prop
// This allows LoginPage to update the user state in App.jsx
export default function LoginPage({ setUser }) {


  // Calling setUser(username) will update the user state in App to be the username string
  // Updating state in React causes a re-render of components using that state
  // So App will re-render and show the welcome message because user is now set to the username
  // The user prop in LoginPage gives it access to update the state in the parent App component
  // This allows child components to communicate up to parent components by calling setter functions like setUser

  function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    setUser(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" />
      <button type="submit">Login</button>
    </form>
  );

}