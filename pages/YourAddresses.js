import React, { PureComponent, useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/youraccount.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth.slice";
import { useRouter } from "next/router";
import { getProfile } from "../redux/user.slice";
import ProfileEdit from "../components/ProfileEdit";
import Profile from "../components/Profile";

const YourAccount = () => {
  const [edit, setedit] = useState(false);
  const router = useRouter();
  
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.user);
  // const [state, setstate] = useState();

  useEffect(() => {
    dispatch(getProfile())
  }, []);
  return (
    <>
      <div className={styles.spc}>
        { profile.address_1 ? edit ? 
          <ProfileEdit func = {() => {
             setedit(!edit);
          }} data={profile}  isCheckOut={false}/>
         : 

       <Profile func = {() => {
          setedit(!edit);
       }} data = {profile}/>
         :  <ProfileEdit func = {() => {
              setedit(!edit);
            }} data={{
              ...profile,
            }} isCheckOut={false}/>

          }
      </div>

      <div className={styles.inner}>
        <div>
          <Link href="/LoginAndSecurity">
            <p><img src="https://img.icons8.com/ios-filled/50/000000/lock.png" /><br />Login And Security</p>
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
