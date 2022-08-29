import React, { useState } from 'react'
import Profile from '../../../Icons/growbots.png'
import styles from './signup.module.scss'

const Signup = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")

  const handleSubmit = (event: any) => {
    //Prevent page reload
    event.preventDefault();
    console.log('event',event);

  }

  return (
  <>
      <div className={styles.main}>
        <div className={styles.sub_main}>
          <div>
            <span>
              <img className={styles.logo} src={Profile} alt="growbots" />
            </span>
            <h5>Sign Up</h5>
            <span className={styles.font}>Create your account. It's free and only takes a minute.</span>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.input_form}>
              <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              /><br/>
              <input className={styles.input_width}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /><br/>
              <input className={styles.input_width}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /><br/>
               <input className={styles.input_width}
                type="password"
                placeholder="Confirm Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                />
            </div>
            <div>
              <button
              className={styles.btn}
              type='submit'
              >Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup