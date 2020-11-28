import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    event.persist()
    this.setState(() => {
      if (e.target.id === "username"){
        return({ ...this.state,
        username: event.target.value
        })
      } else {
        return({ ...this.state,
        password: event.target.value
        })
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const userName = this.state.username
    const passWord = this.state.password
      if (userName !== "" && passWord !== ""){
        this.props.handleLogin(this.state)
      }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input value={this.state.username} onChange={this.handleChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} onChange={this.handleChange} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
