import { useId } from 'react';
import { IconComponent } from '../Icon/Icon';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  cssClass?: string;
  label: string;
  checked: boolean;
  onChange: (e: { target: { checked: boolean } }) => void;
}

export const CheckboxComponent = ({
  cssClass,
  label,
  checked,
  onChange,
}: CheckboxProps) => {
  // console.log('CheckboxComponent');

  const uId = useId();

  return (
    <div className={[styles.checkbox, cssClass ? ` ${cssClass}` : ''].join('')}>
      <input
        id={uId}
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={uId} className={styles.label}>
        <IconComponent
          cssClass={styles.icon}
          name={checked ? 'check_box' : 'check_box_outline_blank'}
        />
        {label}
      </label>
    </div>
  );
};
