import React, { PureComponent, useState } from "react";
import Link from "next/link";
import styles from '../styles/login.module.css';
import { useDispatch } from "react-redux";
import { signupAction } from "../redux/auth.slice";

const signup = () => {
  const dispatch = useDispatch();
  const [state, setstate] = useState({});
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signupAction({
        email: state.email,
        password: state.password,
      })
    );
  };
  return (
    <>
      <div className={styles.outter}>
        <span>
          <div>
            <h2>SIGNUP</h2>
          </div>
          <br />
          <form  onSubmit={onSubmit}>
          <input
              name="YourName"
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Your Name"
              required
             
            />
            <br />
            <input
              onChange={handleChange}
              name="email"
              id="name"
              type="email"
              autoComplete="name"
              placeholder="Email"
              required
             
            />
            <br />
            <input
              onChange={handleChange}
              name="password"
              id="name"
              type="password"
              autoComplete="password"
              placeholder="Password"
              required
             
            />
                   <br />
            <input
              name="confirmpassword"
              id="name"
              type="password"
              autoComplete="confirmpassword"
              placeholder="Confirm Password"
              required
             
            />
                  
            <br/>
              <button>Continue</button>
          </form>
        </span>
      </div>
    </>
  );
}

export default signup