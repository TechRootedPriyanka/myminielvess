import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image="https://i.ibb.co/Kj67sb5/Printed-Shirts-Manufacturers-Wholesalers-Suppliers-esunseafashion-Bangladesh7.jpg" name="Hoodies" />
        <CategoryCard image="https://i.ibb.co/sjHBZds/A1-Gtz-Ea-O3-KL-SX569.jpg" name="Sticker" />
        <CategoryCard image="https://i.ibb.co/3MCts6X/vice-golf-caps-slider01-mobile.jpg" name="Caps" />
      </div>
      <div className={styles.large}>
        <CategoryCard image="https://i.ibb.co/K7M25Lw/0965ef81104935-5cf5538d77ac8.jpg" name="T-shirt" />
        <CategoryCard
          image="https://i.ibb.co/3Byw8bk/61-Dqejf5-Pp-L-SX679.jpg" name="Mugs" />
      </div>
    </main>
  );
};

export default HomePage;
