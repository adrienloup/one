import { ReactNode, useEffect, useState } from 'react';
import { ButtonComponent } from '../Button/Button';
import styles from './Modal.module.scss';

interface ModalProps {
  head?: ReactNode;
  body?: ReactNode;
  foot?: ReactNode;
  open: boolean;
  cssClass?: string;
  onClick: () => void;
}

export const ModalComponent = ({
  head,
  body,
  foot,
  open,
  cssClass,
  onClick,
}: ModalProps) => {
  // console.log("ModalComponent");

  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(document.documentElement.scrollTop);
  }, []);

  return (
    <div
      className={[
        styles.modal,
        cssClass ? ` ${cssClass}` : '',
        open ? ` ${styles.open}` : '',
      ].join('')}
    >
      <div
        className={styles.inner}
        style={{
          top: `${top}px`,
        }}
      >
        <ButtonComponent cssClass={styles.close} onClick={onClick}>
          esc
        </ButtonComponent>
        {head && <div className={styles.head}>{head}</div>}
        {body && <div className={styles.body}>{body}</div>}
        {foot && <div className={styles.foot}>{foot}</div>}
      </div>
      <div className={styles.backdrop} onClick={onClick}></div>
    </div>
  );
};
