import React, { Component } from "react";

const SignupForm = props => {
  return (
    <div>
      Signup
      <form onSubmit={props.handleSubmit}>
        <label>Username:</label>

        <input
          onChange={props.handleChange}
          type="text"
          name="username"
          value={props.values.username}
        />

        <label>Name:</label>

        <input
          onChange={props.handleChange}
          type="text"
          name="name"
          value={props.values.name}
        />

        <label>Surname:</label>

        <input
          onChange={props.handleChange}
          type="text"
          name="surname"
          value={props.values.surname}
        />

        <label>Email:</label>

        <input
          onChange={props.handleChange}
          type="email"
          name="email"
          value={props.values.email}
        />

        <label>Password:</label>
        <input
          onChange={props.handleChange}
          type="password"
          name="password"
          value={props.values.password}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignupForm;
