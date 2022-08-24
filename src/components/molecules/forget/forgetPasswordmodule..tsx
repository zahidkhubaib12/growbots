import Profile from "../../../Icons/logo.png";
import styles from './forgetPassword.module.scss'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
    return (
        <>
            <div className={styles.auth}>
                <div className={styles.wrap}>
                    <div>
                        <span>
                            <img src={Profile} alt="logo" />
                        </span>
                        <h5 className={styles.mb_3}>Recover Password</h5>
                        <span>Enter your Email and instructions will be sent to you!</span>
                    </div>
                    <div className={styles.mb_3}>
              <form>
                <div className={styles.mb_3}>
                  <div>
                    <input className={styles.inp}
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <button
                      className={styles.btn}
                      type="submit"
                    >
                      Reset
                    </button>
                    <div className={styles.this}>
                    <Link className={styles.this_input} to="/change">Change Password</Link>
                    </div>
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