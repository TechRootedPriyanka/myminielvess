import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../redux/product.slice';
import styles from '../styles/ShopPage.module.css';
import { getProducts } from './api/products/index';

const ShopPage = () => {
//  const [products, setProducts] = useState([]);
const dispatch = useDispatch();

  const fetchProducts = async () => {
    const prods = await getProducts();
    setProducts(prods);  
  };
  useEffect(() => {
    // fetchProducts();
    dispatch(getAllProducts());
  }, []);
  const products = useSelector((state) => state.product.products);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

// export async function getStaticProps() {
//   const products = await getProducts();
//   return { props: { products } };
// }
