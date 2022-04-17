import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../redux/order.slice';

const YourOrder = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders())
  }, []);
  const orders = useSelector((state) => state.order.order);
  console.log(orders);
  return (
    <div>YourOrder</div>
  )
}

export default YourOrder