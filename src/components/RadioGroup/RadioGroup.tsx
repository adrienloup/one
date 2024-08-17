import { SlotType } from '../../models/Slot';
import styles from './RadioGroup.module.scss';

interface RadioGroupProps extends SlotType {
  cssClass?: string;
  title: string;
}

export const RadioGroupComponent = ({
  cssClass,
  title,
  children,
}: RadioGroupProps) => {
  // console.log('RadioGroupComponent');

  return (
    <div className={[styles.group, cssClass ? ` ${cssClass}` : ''].join('')}>
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  );
};
