import styles from './Footer.module.scss';

export const FooterComponent = () => {
  // console.log('FooterComponent');

  return (
    <footer role="contentinfo" className={styles.footer}>
      &copy; 2024
    </footer>
  );
};
