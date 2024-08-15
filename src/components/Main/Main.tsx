import { SlotType } from '../../models/Slot';
import styles from './Main.module.scss';

export const MainComponent = ({ children }: SlotType) => {
  console.log('MainComponent');

  return (
    <main role="main" className={styles.main}>
      {children}
    </main>
  );
};
