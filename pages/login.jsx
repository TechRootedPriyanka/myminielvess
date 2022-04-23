import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {loginAction } from '../redux/auth.slice';
import styles from '../styles/login.module.css';
import Link from "next/link";
import { useRouter } from 'next/router'
const login = () => {
  const router = useRouter()
  const auth = useSelector((state) => state.auth.accessToken);
  
  const dispatch = useDispatch();

  const [state, setstate] = useState({});
  const onChange = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value
    })
  }
    const onSubmit = (e) => {
      e.preventDefault();
      dispatch(
        loginAction(state)
      );
     if(auth.length > 0){
     // navigate to the home page
     alert('login success') 
     router.push('/');
    }
    }
  return (
    <>
      <div className={styles.outter}>
        <span>
          <div>
            <h2>LOGIN</h2>
          </div> 
          <br />
          <form onSubmit={onSubmit} >
            <input
            onChange={onChange}
              name="email"
              id="name"
              type="email"
              autoComplete="name"
              placeholder="Email"
              required
             
            />
            <br />
            <input
            onChange={onChange}
              name="password"
              id="name"
              type="password"
              autoComplete="name"
              placeholder="Password"
              required
             
            />
            <br />
            <Link href="./forgetpassword" passHref>
              <div className={styles.forget}>forgot password?</div>
            </Link>
            <br/>
            <button>LOGIN</button>
            <br/>
            <Link href="./signup" passHref>
              <button>SIGNUP</button>
            </Link>
          </form>
        </span>
      </div>
    </>
  );
}



export default login;