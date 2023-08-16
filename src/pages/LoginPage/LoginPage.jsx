import { useState } from "react"
import "./LoginPage.css"

// useState hook to create a state variable inputValue that stores the user's entered username
export default function LoginPage(props) {
  const [inputValue, setInputValue] = useState("")

  // handleChange function updates inputValue when the input field changes by setting it to the new value from the input event
  const handleChange = (evt) => {
    setInputValue(evt.target.value)
  }

  // handleSubmit function prevents the default form submit behavior, then calls the props.setUser function, passing it the current inputValue to set the username in the parent component
  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.setUser(inputValue)
  }

  return (
    <div className="full-screen-container">
      <div className="login-container">
        <h3 className="login-title">Please enter your desired username below</h3>
        {/* form calls handleSubmit when submitted */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>

            {/* calls handleChange whenever its value changes to update inputValue */}
            <input type="text" onChange={handleChange} />
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
      </div>
    </div>
  )
}

