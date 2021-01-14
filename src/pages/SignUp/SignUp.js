import React from "react";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isInstructor, setIsInstructor] = useState(false);

  // TODO: Change in accordance to users.model.js (CreateExercise.jsx for reference)
  return (
    <div>
      <h3>Sign Up</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          const user = {
            username: username,
            password: password,
            email: email,
            isInstructor: isInstructor
          };
          console.log(user);
          axios
            .post("http://localhost:5000/users/add", user)
            .then(res => console.log(res.data));

          window.location = "/login";
        }}
      >
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={e => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            required
            className="form-control"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>
            <input
              type="radio"
              required
              name="radio-button-1"
              onClick={e => {
                setIsInstructor(true);
              }}
            />
            Instructor
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              required
              name="radio-button-1"
              onClick={e => {
                setIsInstructor(false);
              }}
            />
            Learner
          </label>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Let's Get To It!"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
