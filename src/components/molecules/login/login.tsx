import Profile from "../../../Icons/logo.png";
import React, { useState } from "react";
import Email from "../../../Icons/Email.png";
import Password from "../../../Icons/Password.png";
import fb from "../../../Icons/fb.png";
import google from "../../../Icons/google.png";
import "./login.scss";
import { Link } from "react-router-dom";
const Login = () => {
  const [errorMessages, setErrorMessages] = useState({ name: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  // User Login info 
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  console.log("murshad",username,password )
  const handleSubmit = (event: any) => {
    //Prevent page reload
    event.preventDefault();
    // console.log("murshad", event.target, document.forms[0])

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => {
      if(user.username == username && user.password == password){
        setIsSubmitted(false);

      }
      else{
        // setErrorMessages({ name: "pass", message: errors.pass });

        // setErrorMessages({ name: "uname", message: errors.uname });
      }
    } );
    console.log("userdata", userData)

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name: any) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    const consol =()=>{
console.log('hi')
setIsSubmitted(false)
    }

  return (
    <div>
      {isSubmitted ? (
        <div className="main">
          <div className="sub-main">
            <div className="logo">
              <span className="db">
                <img src={Profile} alt="logo" className="logo" />
              </span>
              <h5 className="font-medium mb-3">Sign in to Admin</h5>
            </div>
            <div className="row">
              <div className="col-12">
                <form
                  className="form-horizontal mt-3"
                  id="loginform"
                  onSubmit={handleSubmit}
                >
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <img src={Email} alt="email" className="email" />
                    </span>
                    <input
                     onChange={e => setUserName(e.target.value)}
                      type="text"
                      name="uname"
                      className="form-control form-control-lg"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      
                    />
                    {renderErrorMessage("uname")}
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">
                      <img src={Password} alt="password" className="email" />
                    </span>
                    <input
                      type="password"
                      name="pass"
                      onChange={e => setPassword(e.target.value)}
                      className="form-control form-control-lg"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                    />
                    {renderErrorMessage("pass")}
                  </div>
                  <div className="mb-3">
                    <div className="check">
                      <input type="checkbox" id="customCheck1" />
                      <label>Remember me</label>
                      <Link className="fwd" to="/forget">
                        Forgot fwd?
                      </Link>
                    </div>
                  </div>
                  <div className="mg">
                    <button className="btn" type="submit" >
                      Log In
                    </button>
                  </div>
                  <div className="mt">
                    Don't have an account?
                    <a href="" className="text">
                      <b>Sign Up</b>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="user">User is successfully logged in</h1>
      )}
    </div>
  );
};
export default Login;