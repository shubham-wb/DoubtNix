import React from "react";
import "../assets/css/fSignup.css";
import { useState } from "react";
function FacultySignUp() {
  let [facultyDetails, setFacultyDetails] = useState({
    name: "",
    email: "",
    subject: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFacultyDetails((prevState) => ({
      facultyDetails: {
        // object that we want to update
        ...prevState.facultyDetails, // keep all other key-value pairs
        [name]: value, // update the value of specific key
      },
    }));
    console.log(facultyDetails);
  }

  const handleSubmit = (event) => {
    console.log(facultyDetails);
    event.preventDefault();
  };

  return (
    <div className="f-signup-container">
      <div className="f-signup-wrapper-container">
        <div className="f-signup-description"></div>
        <div className="f-signup-form">
          <form>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleInputChange}
              value={facultyDetails.name}
            ></input>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleInputChange}
              value={facultyDetails.username}
            ></input>

            <input
              type="subject"
              placeholder="Enter Your Subject"
              name="subject"
              onChange={handleInputChange}
              value={facultyDetails.subject}
            ></input>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={facultyDetails.email}
            ></input>

            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={facultyDetails.pasword}
            ></input>

            <input
              type="confirm-password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleInputChange}
              value={facultyDetails.confirmPassword}
            ></input>
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Register
            </button>
            <hr />
            <a
              className="btn btn-primary btn-lg"
              href="/users/auth/google_oauth2"
            >
              <i className="fa fa-google"></i> Login with Google
            </a>
            <p className="text-justify text-muted margin-top-10">
              Sign in / Sign up with your google account. We will never post
              anything on your behalf.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FacultySignUp;
