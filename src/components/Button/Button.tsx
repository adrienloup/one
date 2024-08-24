import { memo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../../hooks/useCursor';
import { SlotType } from '../../models/Slot';
import styles from './Button.module.scss';

interface ButtonProps extends SlotType {
  cssClass?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
  to?: string;
  onClick?: () => void;
}

export const ButtonComponent = memo(
  ({
    cssClass,
    type = 'button',
    disabled = false,
    href,
    to,
    onClick,
    children,
  }: ButtonProps) => {
    // console.log('ButtonComponent');

    const ref = useRef<HTMLButtonElement>(null);

    useCursor(ref);

    const link = (
      <Link
        to={to!}
        className={[styles.button, cssClass ? ` ${cssClass}` : ''].join('')}
      >
        {children}
      </Link>
    );

    const a = (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className={[styles.button, cssClass ? ` ${cssClass}` : ''].join('')}
      >
        {children}
      </a>
    );

    const button = (
      <button
        ref={ref}
        type={type}
        className={[styles.button, cssClass ? ` ${cssClass}` : ''].join('')}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );

    return href ? a : to ? link : button;
  }
);
