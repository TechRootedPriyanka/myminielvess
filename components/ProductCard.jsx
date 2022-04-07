import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const router = useRouter()

  const auth = useSelector((state) => state.auth.accessToken);

  const dispatch = useDispatch();

  return (
    <div className={styles}>
      <Image src={product.image} height={300} width={220} />
      <h4 className={styles.title}>{product.product}</h4>
      <h5 className={styles.category}>{product.category}</h5>
      <p>$ {product.price}</p>
      <button
        onClick={() =>{ 
          if(auth.length > 0){

          dispatch(addToCart(product))
          } else {
            router.push('/login')
          }
        
        }}
        className={styles.button}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
