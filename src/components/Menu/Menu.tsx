import { NavLink } from 'react-router-dom';
import { IconComponent } from '../Icon/Icon';
import styles from './Menu.module.scss';

export const MenuComponent = () => {
  // console.log('MenuComponent');

  return (
    <nav role="navigation" className={styles.menu}>
      <NavLink to="/one/shop">
        <IconComponent cssClass={styles.icon} name="storefront" />
        Shop
      </NavLink>
      <NavLink to="/one/shoppingcart">
        <IconComponent cssClass={styles.icon} name="local_mall" />
        Shopping cart
      </NavLink>
    </nav>
  );
};
