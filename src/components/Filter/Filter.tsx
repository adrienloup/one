import { SlotType } from '../../models/Slot';
import { ButtonComponent } from '../Button/Button';
import { IconComponent } from '../Icon/Icon';
import styles from './Filter.module.scss';

interface FilterProps extends SlotType {
  title: string;
  checked: boolean;
  onClick: () => void;
}

export const FilterComponent = ({
  title,
  checked,
  onClick,
  children,
}: FilterProps) => {
  // console.log('FilterComponent');

  return (
    <div className={styles.filter}>
      <div className={styles.title}>
        <span>{title}</span>
        <ButtonComponent
          cssClass={[styles.button, checked ? ` ${styles.checked}` : ''].join(
            ''
          )}
          onClick={onClick}
        >
          <IconComponent name="delete_forever" />
        </ButtonComponent>
      </div>
      {children}
    </div>
  );
};
