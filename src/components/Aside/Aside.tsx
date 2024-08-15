import { SlotType } from '../../models/Slot';
import styles from './Aside.module.scss';

export const AsideComponent = ({ children }: SlotType) => {
  // console.log('AsideComponent');

  return (
    <aside role="complementary" className={styles.aside}>
      {children}
    </aside>
  );
};
