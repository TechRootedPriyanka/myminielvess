import React from "react";
import styles from "../styles/youraccount.module.css";

const Profile = (props) => {
  return (
    <div>
      <img
        onClick={props.func}
        src="https://img.icons8.com/fluency-systems-filled/48/000000/filled-trash.png"
        className={styles.edit}
      />
      <br />
      <p>
        <br />
        <u> Your Addresses 1</u>
      </p>
      <br></br>
      <h5>House</h5>
      <p>{props.data.address_1}</p> <br></br>
      <h5>Street</h5>
      <p>{props.data.address_2}</p> <br></br>
      <h5>City</h5>
      <p>{props.data.city}</p> <br></br>
      <h5>State</h5>
      <p>{props.data.state}</p> <br></br>
      <h5>Zip code</h5>
      <p>{props.data.pincode}</p> <br></br>
    </div>
  );
};

export default Profile;
