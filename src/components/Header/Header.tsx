import { useTransitionPage } from '../../hooks/useTransitionPage';
import { ButtonComponent } from '../Button/Button';
import { MenuComponent } from '../Menu/Menu';
import styles from './Header.module.scss';

export const HeaderComponent = () => {
  // console.log('HeaderComponent');

  const { goTo } = useTransitionPage();

  return (
    <header role="banner" className={styles.header}>
      <ButtonComponent cssClass={styles.name} onClick={() => goTo('/one/')}>
        One <span className={styles.shadow}>Beauty</span>
      </ButtonComponent>
      <MenuComponent />
    </header>
  );
};
