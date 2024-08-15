import { memo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

interface ButtonProps {
  cssClass?: string;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  to?: string;
  onClick?: () => void;
}

export const ButtonComponent = memo(
  ({
    cssClass,
    children,
    type = 'button',
    href,
    to,
    onClick,
    ...rest
  }: ButtonProps) => {
    console.log('ButtonComponent');

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
        {...rest}
      >
        {children}
      </a>
    );

    const button = (
      <button
        type={type}
        className={[styles.button, cssClass ? ` ${cssClass}` : ''].join('')}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    );

    return href ? a : to ? link : button;
  }
);
