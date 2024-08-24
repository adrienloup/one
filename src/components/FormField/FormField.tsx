import { ReactNode } from 'react';
import styles from './FormField.module.scss';

interface FormFieldProps {
  children: ReactNode;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  cssClass?: string;
}

export const FormFieldComponent = ({
  children,
  label,
  helperText,
  errorMessage,
  cssClass,
}: FormFieldProps) => {
  // console.log("FormFieldComponent");

  return (
    <div
      className={[styles.formfield, cssClass ? ` ${cssClass}` : ''].join('')}
    >
      {label && <div className={styles.label}>{label}</div>}
      {children}
      {errorMessage ? (
        <div className={styles.errormessage}>{errorMessage}</div>
      ) : helperText ? (
        <div className={styles.helpertext}>{helperText}</div>
      ) : null}
    </div>
  );
};
