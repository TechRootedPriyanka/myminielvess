import React, { PureComponent } from "react";
import Link from "next/link";
import styles from "../styles/youraccount.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth.slice";
import { useRouter } from "next/router";

const YourAccount = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  return (
    <>
  
      <div className={styles.spc}>
        <div>
        <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-plus-essentials-tanah-basah-glyph-tanah-basah.png"
              className={styles.edit}
            />
          
          <br />
          <p>
            <br />
            <u> Your Addresses</u>
          </p>
          <br></br>
          <h5></h5>
          <h5>House</h5><input></input> <br></br>
          <h5>Street</h5><input></input> <br></br>
          <h5>City</h5><input></input>  <br></br> 
          <h5>State</h5><input></input>  <br></br> 
          <h5>Zip code</h5><input></input>  <br></br> <br></br> 
          <button>Add</button>
        </div> 
          <div>
          <img src="https://img.icons8.com/fluency-systems-filled/48/000000/filled-trash.png"
              className={styles.edit}
            />
          
          <br />
          <p>
            <br />
            <u> Your Addresses 1</u>
          </p>
          <br></br>
          <h5>House</h5>
          <p>My home</p> <br></br>
          <h5>Street</h5>
          <p>some street</p> <br></br>
          <h5>City</h5>
          <p>Best city</p> <br></br>
          <h5>State</h5>
          <p>Our state</p> <br></br>
          <h5>Zip code</h5>
          <p>some number</p> <br></br>
        </div> 
      </div>

      <div className={styles.inner}>
      <div>
        <Link href="/LoginAndSecurity">
          <p><img src="https://img.icons8.com/ios-filled/50/000000/lock.png"/><br/>Login And Security</p>
        </Link>
      </div>
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
