import Profile from "../../../Icons/logo.png";
import Email from "../../../Icons/Email.png";
import Password from "../../../Icons/Password.png";
import fb from "../../../Icons/fb.png";
import google from "../../../Icons/google.png";
import './login.css'
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
              <div className="mb-3 row">
                <div className="col-md-12">
                  <div className="form-check d-flex align-items-center">
                    <input type="checkbox" className="form-check-input" id="customCheck1" />
                    <label className="form-check-label ms-2 mt-1"
                    >Remember me</label
                    >
                    <a
                      href="javascript:void(0)"
                      id="to-recover"
                      className="text-dark ms-auto d-flex align-items-center"
                    ><i data-feather="lock" className="feather-sm me-1"></i> Forgot pwd?</a
                    >
                  </div>
                </div>
              </div>
              <div className="mb-3 text-center">
                <div className="col-xs-12 pb-3">
                  <button className="btn d-block w-100 btn-lg btn-info font-medium" type="submit">
                    Log In
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 text-center">
                  <div className="social">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-facebook"
                      data-bs-toggle="tooltip"
                      title=""
                      data-original-title="Login with Facebook"
                    >
                      <img src={fb} alt="fb" className="fb" />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-googleplus"
                      data-bs-toggle="tooltip"
                      title=""
                      data-original-title="Login with Google"
                    >
                      <img src={google} alt="google" className="google" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-3 mb-0 mt-2">
                <div className="col-sm-12 text-center">
                  Don't have an account?
                  <a href="authentication-register1.html" className="text-info ms-1"
                  ><b>Sign Up</b></a
                  >
                </div>
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