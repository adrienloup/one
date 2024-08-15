import { ButtonComponent } from '../Button/Button';
import { MenuComponent } from '../Menu/Menu';
import styles from './Header.module.scss';

export const HeaderComponent = () => {
  // console.log('HeaderComponent');

  return (
    <header role="banner" className={styles.header}>
      <ButtonComponent cssClass={styles.name} to="/one/">
        One <span className={styles.shadow}>Beauty</span>
      </ButtonComponent>
      <MenuComponent />
    </header>
  );
};
