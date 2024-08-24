import { SlotType } from '../../models/Slot';
import styles from './Alerts.module.scss';

export const AlertsComponent = ({ children }: SlotType) => {
  // console.log('AlertsComponent');

  return (
    <div className={styles.alerts}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
