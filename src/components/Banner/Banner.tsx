import { useState } from 'react';
import { ButtonComponent } from '../Button/Button';
import { IconComponent } from '../Icon/Icon';
import styles from './Banner.module.scss';

interface BannerProps {
  cssClass?: string;
}

export const BannerComponent = ({ cssClass }: BannerProps) => {
  // console.log('BannerComponent');

  const [displayed, setDisplay] = useState(true);

  return (
    <>
      {displayed && (
        <div
          className={[styles.banner, cssClass ? ` ${cssClass}` : ''].join('')}
        >
          <div className={styles.title}>
            Promotions for the best quality and innovation you love with the
            convenience and exceptional service at One.com
          </div>
          <ButtonComponent
            cssClass={styles.button}
            onClick={() => setDisplay(false)}
          >
            <IconComponent name="close" />
          </ButtonComponent>
        </div>
      )}
    </>
  );
};
