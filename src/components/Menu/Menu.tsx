import { useLocation } from 'react-router-dom';
import { useTransitionPage } from '../../hooks/useTransitionPage';
import { ButtonComponent } from '../Button/Button';
import { IconComponent } from '../Icon/Icon';
import styles from './Menu.module.scss';

export const MenuComponent = () => {
  // console.log('MenuComponent');

  const location = useLocation();
  const { goTo } = useTransitionPage();

  const actived = (route: string) =>
    location.pathname.split('/').pop() === route;

  return (
    <nav role="navigation" className={styles.menu}>
      <ButtonComponent
        cssClass={[
          styles.button,
          actived('shop') ? ` ${styles.active}` : '',
        ].join('')}
        onClick={() => {
          goTo('/one/shop');
        }}
      >
        <IconComponent cssClass={styles.icon} name="storefront" />
        Shop
      </ButtonComponent>
      <ButtonComponent
        cssClass={[
          styles.button,
          actived('shoppingcart') ? ` ${styles.active}` : '',
        ].join('')}
        onClick={() => {
          goTo('/one/shoppingcart');
        }}
      >
        <IconComponent cssClass={styles.icon} name="local_mall" />
        Shopping cart
      </ButtonComponent>
    </nav>
  );
};
