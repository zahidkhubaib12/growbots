import Profile from "../../../Icons/logo.png";
import './forgetPassword.scss'
const ForgetPassword = () => {
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
              <form className="col-12" action="index.html">
                <div className="mb-3 row">
                  <div className="col-12">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    <button
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