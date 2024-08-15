import styles from './Hero.module.scss';

export const HeroComponent = () => {
  // console.log("HeroComponent");

  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        One classic eye looks, Budge-proof color that's easy to use, glides
        seamlessly, and stays put
      </h1>
    </div>
  );
};
