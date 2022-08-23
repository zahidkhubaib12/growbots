import Profile from "../../../Icons/logo.png";
import Email from "../../../Icons/Email.png";
import Password from "../../../Icons/Password.png";
import fb from "../../../Icons/fb.png";
import google from "../../../Icons/google.png";
import './login.scss'
import { Link } from 'react-router-dom'
const Login=()=>{
return (<>
    <div className='main'>
      <div className='sub-main'>
        <div className='logo'>
          <span className="db">
            <img src={Profile} alt="logo" className="logo" />
          </span>
          <h5 className="font-medium mb-3">Sign in to Admin</h5>
        </div>
        <div className="row">
          <div className="col-12">
            <form className="form-horizontal mt-3" id="loginform" action="index.html">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <img src={Email} alt="email" className="email" />

                </span>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  <img src={Password} alt="password" className="email" />
                </span>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="mb-3">
                  <div className="check">
                    <input type="checkbox" id="customCheck1" />
                    <label
                    >Remember me</label
                    >
                    <Link className="fwd" to="/forget">Forgot fwd?</Link>
                      

                   
                  </div>
                </div>
              <div className="mg">
                  <button className="btn" type="submit">
                    Log In
                  </button>
              
              </div>
              <div className="mt">
                  Don't have an account?
                  <a href="" className="text"
                  ><b>Sign Up</b></a
                  >
                </div>
            </form>
          </div>
        </div>


      </div>
    </div>
    </>
  );
}
export default Login