import Profile from "../../../Icons/logo.png";
import React, { useState } from 'react';
import './forgetPassword.scss'
// const Parse = require('parse/dist/parse.min.js');

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  // const doRequestPasswordReset = async function () {
  //   // Note that this value come from state variables linked to your text input
  //   const emailValue = email;
  //   try {
  //     await Parse.User.requestPasswordReset(emailValue);
  //     alert(`Success! Please check ${email} to proceed with password reset.`);
  //     return true;
  //   } catch(error) {
  //     // Error can be caused by lack of Internet connection
  //     alert(`Error! ${error}`);
  //     return false;
  //   }
  // };
    return (
        <>
            <div className='auth'>
                <div className='wrap'>
                    <div className='logo'>
                        <span className="db">
                            <img src={Profile} alt="logo" className="logo" />
                        </span>
                        <h5 className="font-medium mb-3">Recover Password</h5>
                        <span>Enter your Email and instructions will be sent to you!</span>
                    </div>
                    <div className="row mt-3">
              <form className="col-12">
                <div className="mb-3 row">
                  <div className="col-12">
                    <input
                     value={email}
                     onChange={(event) => setEmail(event.target.value)}
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    <button
                      // onClick={() => doRequestPasswordReset()}
                      className="btn"
                      type="submit"
                      name="action"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
                </div>
            </div>
        </>
    );
}
export default ForgetPassword