import React,{useState} from "react";
import Profile from "../../../Icons/growbots.png";
import styles from './forgetPassword.module.scss'
import { Link } from 'react-router-dom'
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
            <div className={styles.auth}>
                <div className={styles.wrap}>
                    <div>
                        <span>
                            <img className={styles.logo} src={Profile} alt="logo" />
                        </span>
                        <h5 className={styles.mb_3}>Recover Password</h5>
                        <span className={styles.font}>Enter your Email and instructions will be sent to you!</span>
                    </div>
                    <div className={styles.mb_3}>
              <form>
                <div className={styles.mb_3}>
                  <div>
                    <input className={styles.inp}
                    value={email}
                      type="email"
                      placeholder="Email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <button
                      className={styles.btn}
                      type="submit"
                       // onClick={() => doRequestPasswordReset()}
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