import { SlotType } from '../../models/Slot';
import styles from './Failure.module.scss';

interface FailureProps extends SlotType {
  cssClass?: string;
}

export const FailureComponent = ({ cssClass, children }: FailureProps) => {
  // console.log('FailureComponent');

  return (
    <div className={[styles.failure, cssClass ? ` ${cssClass}` : ''].join('')}>
      {children}
    </div>
  );
};
