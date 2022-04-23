import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../redux/product.slice';

const ProductDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductById(router.query.id));
  }, []);
  const product = useSelector((state) => state.product.product);
  return (
    <div>
      <h1>{product.product}</h1>
      <h1>{product.price}</h1>
    </div>
  )
}

export default ProductDetail