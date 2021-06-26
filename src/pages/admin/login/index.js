import React from "react";

export default class AdminLoginPage extends React.Component {
  state = {
    form: {
      email: "",
      password: "",
    },
  };

  constructor(props) {
    super(props);
    // this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    const newState = { ...this.state };
    newState.form[event.target.name] = event.target.value;
    this.setState(newState);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state));
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          this.onSubmitHandler(event);
        }}
      >
        <p>
          <label>Email</label>
          <input
            type="text"
            value={this.state.form.email}
            onChange={(event) => {
              this.onChangeHandler(event);
            }}
            name="email"
            placeholder="Enter your email."
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            value={this.state.form.password}
            onChange={(event) => {
              this.onChangeHandler(event);
            }}
            name="password"
            placeholder="Enter your password."
          />
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>
    );
  }
}
