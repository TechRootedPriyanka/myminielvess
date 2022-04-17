import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  getCart,
} from '../redux/cart.slice';
import styles from '../styles/CartPage.module.css';
import useRazorpay from "react-razorpay";
import { makePayment } from '../payment';
import { getProfile } from '../redux/user.slice';
import ProfileEdit from '../components/ProfileEdit';

const CartPage = () => {
  const Razorpay = useRazorpay();
  const dispatch = useDispatch();
  const [state, setstate] = useState(false);
  const profile = useSelector((state) => state.user.user);
  const auth = useSelector((state) => state.auth.accessToken);
  useEffect(() => {
    dispatch(getCart())
    dispatch(getProfile())
  }, [state]);
  const cart = useSelector((state) => state.cart.cart);

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
  const buyNow = () => {
    if(profile.address_1 === '' || profile.address_2 === '' || profile.city === '' || profile.state === '' || profile.pincode === ''){
      setstate(!state)
    }
    else{
      // setstate(!state)
      makePayment(getTotalPrice(), Razorpay,profile,auth);

    }
  }
    
  return (
    <div>
 {
   state ?   <ProfileEdit  func = {() =>{
    setstate(!state)

   }} data={profile} isCheckOut={false}/> : 
 
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div className={styles.body}>
              <div className={styles.image}>
                <Image src={item.image} height="90" width="65" />
              </div>
              <p>{item.product}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Grand Total: $ {getTotalPrice()}</h2>
          <button onClick={buyNow}>Check Out</button>
        </>
      )}
    </div> 
   }
          </div>
  );
};

export default CartPage;
