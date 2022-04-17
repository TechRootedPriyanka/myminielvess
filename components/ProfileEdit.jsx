import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateProfile } from '../redux/user.slice';
import styles from "../styles/youraccount.module.css";

const ProfileEdit = (props) => {
  const dispatch = useDispatch();

   const [state, setstate] = useState({
    address_1: props.data.address_1 ?? "",
    address_2: props.data.address_2 ?? "",
    pincode: props.data.pincode ?? "",
    city: props.data.city ?? "",
    state: props.data.state ?? "",
    number: props.data.number ?? "",
    name: props.data.name ?? "",
   });
  const onChange = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const onsubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile({
      ...state
    }))
    props.isCheckOut ?   props.func2() : props.func()
    alert("Profile Updated Successfully")
  }
  return (
    <div>
    <img onClick={props.func} src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-plus-essentials-tanah-basah-glyph-tanah-basah.png"
      className={styles.edit}
    />

    <br />
    <p>
      <br />
      <u> Your Addresses</u>
    </p>
    <br></br>
    <h5></h5>
    <form onSubmit={onsubmit}>
    <h5>Name</h5>
    <input name='name' onChange={onChange}
    value={state.name}
    />
    <h5>Number</h5>
    <input name='number' onChange={onChange}
    value={state.number}
    />
    <h5>House</h5>
    <input name='address_1' onChange={onChange}
    value={state.address_1}
    />
    <br></br>
    <h5>Street</h5><input 
    name = 'address_2' onChange={onChange} 
    value={state.address_2}
    />
    <br></br>
    <h5>City</h5><input 
      value={state.city}
    name = 'city' onChange={onChange}
    /> <br></br>
    <h5>State</h5><input
      value={state.state}
    name = 'state' onChange={onChange}
    /> <br></br>
    <h5>Zip code</h5><input
      value={state.pincode} 
    name = 'pincode' onChange={onChange}
    /> <br></br> <br></br>
    <button>Add</button>
    </form>
  </div>
  )
}

export default ProfileEdit