import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,

} from '../redux/cart.slice';
import styles from '../styles/CartPage.module.css';
import useRazorpay from "react-razorpay";
import { makePayment } from '../payment';
import { getProfile } from '../redux/user.slice';
import { useRouter } from 'next/router';
import CheckoutEdit from '../components/CheckoutEdit';
import { getOrders } from '../redux/order.slice';
const YourOrder  = () => {
  const router = useRouter()
  const Razorpay = useRazorpay();
  const dispatch = useDispatch();
  const [state, setstate] = useState(false);
  const profile = useSelector((state) => state.user.user);
  const auth = useSelector((state) => state.auth.accessToken);
  useEffect(() => {
    dispatch(getOrders())
    dispatch(getProfile())
  }, [state]);
  const cart = useSelector((state) => state.order.order);
  
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
      makePayment(getTotalPrice(), Razorpay,profile,auth, router);

    }
  }
    
  return (
    <div>
 {
   state ?   <CheckoutEdit  func = {() =>{
    setstate(!state)

   }} data={profile} isCheckOut={false}/> : 
 
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Waiting For You To Order!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Order Date</div>
            <div>Total Price</div>
          </div>
          {cart.map(car => 
          
          car.products.map((item) => (
            <div className={styles.body}>
              <div className={styles.image}>
                <Image src={item.image} height="90" width="65" />
              </div>
              <p>{item.product}</p>
              <p>₹ {item.price}</p>
              <p>{item.quantity}</p>
              <p> {new Date(car.date).toLocaleDateString()}</p>
              <p>₹ {item.quantity * item.price}</p>
            </div>
          )))}
        
        </>
      )}
    </div> 
   }
          </div>
  );
};


export default YourOrder