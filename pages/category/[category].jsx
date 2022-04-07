import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { getProductsByCategory } from '../../redux/product.slice';
import styles from '../../styles/ShopPage.module.css';


const CategoryPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  // const fetch = async () => {
  //   const prods =  await getProductsByCategory(router.query.category);
  //   setProducts(prods);
  // };
  useEffect(() => {
    // fetch();
    dispatch(getProductsByCategory(router.query.category));
  }, [dispatch]);
  const products = useSelector((state) => state.product.bycategory);


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Results for {router.query.category}</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

// export async function getServerSideProps(ctx) {
//   const category = ctx.query.category;
//   const products = await getProductsByCategory(category);
//   return { props: { products } };
// }
