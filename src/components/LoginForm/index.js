// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
  }

  submitForm = async event => {
    console.log(event)
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data)
  }

  onchangeInput = event => {
    this.setState({userName: event.target.value})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {userName, password} = this.state

    return (
      <div className="login-form-bg">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="logo-l"
          />
        </div>
        <form className="form-bg" onSubmit={this.submitForm}>
          <div className="form-inside-card">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="logo"
              />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
                alt="website login"
                className="logo-s"
              />
            </div>

            <label htmlFor="loginInput" className="label">
              USERNAME
            </label>
            <br />
            <input
              id="loginInput"
              type="input"
              className="input"
              placeholder="Username"
              onChange={this.onchangeInput}
              value={userName}
            />
            <br />
            <label htmlFor="passwordInput" className="label">
              PASSWORD
            </label>
            <br />
            <input
              id="passwordInput"
              type="password"
              className="input"
              placeholder="Password"
              onChange={this.onchangePassword}
              value={password}
            />
            <br />
            <button className="button" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
