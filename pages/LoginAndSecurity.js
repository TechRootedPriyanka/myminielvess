import React, { PureComponent, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/youraccount.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth.slice";
import { useRouter } from "next/router";
import { getProfile } from "../redux/user.slice";
import { useSelector } from "react-redux";

const YourAccount = () => {
  useEffect(() => {
    dispatch(getProfile())
  }, []);
  const router = useRouter();
  const profile = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.spc}>
        <div>
          {/* <Link href="/LoginAndSecurityEdit">
            <img
              src="https://img.icons8.com/ios-filled/30/000000/pencil-tip.png"
              className={styles.edit}
            />
          </Link> */}
          <br />
          <p>
            <br />
            <u> Login And Security </u>
          </p>
          <br></br>
          {
            profile.name ?
          <>
            <h5>Your Name</h5>
          <p>{profile.name}</p> <br></br>
          </> :
          null
        }
          <h5>Email</h5>
          <p>{profile.email}</p> <br></br>
          <h5>Password</h5>
          <p>********</p> <br></br>
        </div>
      </div>

      <div className={styles.inner}>
        <div>
          <Link href="/YourOrder">
            <p>
              <img src="https://img.icons8.com/pastel-glyph/64/000000/box--v1.png" />
              <br />
              Your Order
            </p>
          </Link>
        </div>

        <div>
          <Link href="/YourAddresses">
            <p>
              <img src="https://img.icons8.com/ios-filled/50/000000/address--v2.png" />
              <br />
              Your Addresses
            </p>
          </Link>
        </div>
        <div>
          <Link href="/cart">
            <p>
              <img src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png" />
              <br />
              Your Cart
            </p>
          </Link>
        </div>
        <div>
          <p
            onClick={() => {
              dispatch(logout());
              router.push("/");
            }}
          >
            <img src="https://img.icons8.com/ios-filled/50/000000/exit.png" />
            <br />
            Logout
          </p>
        </div>
      </div>
    </>
  );
};

export default YourAccount;
