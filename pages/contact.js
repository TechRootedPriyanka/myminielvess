import React, { PureComponent } from "react";
import Link from "next/link";
import styles from '../styles/youraccount.module.css';
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth.slice";
import { useRouter } from "next/router";


const YourAccount = () => {
  const router = useRouter()

  const dispatch = useDispatch();

  return (
    <>
    <div className={styles.title}>
        <h1>Let's Chat</h1>
        <h3>We would Love to hear from you!!</h3>
    </div>
    <div className={styles.outter}>
      <div>
          <p><img src="https://img.icons8.com/fluency-systems-filled/50/000000/phone.png"/><br/>Call us at</p>
          <h5>+91 99750 XXXXX</h5>

      </div>
      <div>
          <p><img src="https://img.icons8.com/ios-filled/50/000000/marker.png"/><br/>Find us at</p>
          <h5>Ghatkopar, Mumbai</h5>

      </div>
      <div>
          <p><img src="https://img.icons8.com/ios-filled/50/000000/email-open.png"/><br/>Email us at</p>
          <h5>hey@rawcanvas.com</h5>

      </div>
    </div>
  </>
  )
}

export default YourAccount