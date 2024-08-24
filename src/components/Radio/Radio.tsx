import { useId, useRef } from 'react';
import { useCursor } from '../../hooks/useCursor';
import { IconComponent } from '../Icon/Icon';
import styles from './Radio.module.scss';

interface RadioProps {
  cssClass?: string;
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: { target: { value: string } }) => void;
}

export const RadioComponent = ({
  cssClass,
  label,
  name,
  value,
  checked,
  onChange,
}: RadioProps) => {
  // console.log('RadioComponent');

  const uId = useId();
  const ref = useRef<HTMLDivElement>(null);

  useCursor(ref);

  return (
    <div
      ref={ref}
      className={[styles.radio, cssClass ? ` ${cssClass}` : ''].join('')}
    >
      <input
        id={uId}
        className={styles.input}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={uId} className={styles.label}>
        <IconComponent
          cssClass={styles.icon}
          name={checked ? 'radio_button_checked' : 'radio_button_unchecked'}
        />
        {label}
      </label>
    </div>
  );
};
