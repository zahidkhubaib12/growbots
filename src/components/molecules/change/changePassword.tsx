import './changePassword.module.scss';
import Profile from "../../../Icons/growbots.png";
import styles from './changePassword.module.scss'

const ChangePassword = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.sub_main}>
          <div>
            <span>
              <img className={styles.logo} src={Profile} alt="logo" />
            </span>
            <h5>Change Password</h5>
            <span className={styles.font}>Your password must be of atleast 6 characters</span>
          </div>
          <form className={styles.form}>
            <div className={styles.input_form}>
              <input
                type="password"
                placeholder="Current Password"
              /><br/>
              <input className={styles.input_width}
                type="password"
                placeholder="New Password"
              /><br/>
              <input className={styles.input_width}
                type="password"
                placeholder="Confirm Password"
              /><br/>
            </div>
            <div>
              <button
              className={styles.btn}
              type='submit'
              >Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ChangePassword;