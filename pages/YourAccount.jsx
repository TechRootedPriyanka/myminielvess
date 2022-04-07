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
    <div className={styles.outter}>
   
      <div>
        <Link href="/YourOrder">
          <p><img src="https://img.icons8.com/pastel-glyph/64/000000/box--v1.png"/><br/>Your Order</p>
        </Link>
      </div>
      <div>
        <Link href="/LoginAndSecurity">
          <p><img src="https://img.icons8.com/ios-filled/50/000000/lock.png"/><br/>Login And Security</p>
        </Link>
      </div>
      <div>
        <Link href="/YourAddresses">
          <p><img src="https://img.icons8.com/ios-filled/50/000000/address--v2.png"/><br/>Your Addresses</p>
        </Link>
      </div>
      <div>
        <Link href="/cart">
          <p><img src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png"/><br/>Your Cart</p>
        </Link>
      </div>
      <div>
          <p onClick={
            () => {
              dispatch(logout())
              router.push('/')
          }} ><img src="https://img.icons8.com/ios-filled/50/000000/exit.png"/><br/>Logout</p>
      </div>
    </div>
  </>
  )
}

export default YourAccount