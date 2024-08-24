import { useId, useState } from 'react';
import { StatusType } from '../../models/Status';
import { FormFieldComponent } from '../FormField/FormField';
import { IconComponent } from '../Icon/Icon';
import styles from './TextField.module.scss';

interface TextFieldProps {
  cssClass?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  value?: string;
  prefix?: string;
  suffix?: string;
  status?: StatusType;
  onChange: (e: { target: { value: string } }) => void;
}

export const TextFieldComponent = ({
  cssClass,
  id,
  label,
  placeholder = 'Placeholder',
  helperText,
  errorMessage,
  value,
  prefix,
  suffix,
  status,
  onChange,
}: TextFieldProps) => {
  // console.log("TextFieldComponent");

  const uId = useId();
  const [focus, setFocus] = useState(false);

  return (
    <FormFieldComponent
      label={label}
      helperText={helperText}
      errorMessage={errorMessage}
    >
      <div
        className={[
          styles.textfield,
          focus ? ` ${styles.focus}` : '',
          status
            ? ` ${styles[status]}`
            : errorMessage
              ? ` ${styles.error}`
              : '',
          cssClass ? ` ${cssClass}` : '',
        ].join('')}
      >
        {prefix && <IconComponent name={prefix} cssClass={styles.icon} />}
        <input
          type="text"
          id={id ? id : uId}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {suffix && <IconComponent name={suffix} cssClass={styles.icon} />}
      </div>
    </FormFieldComponent>
  );
};
