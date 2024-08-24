import { useState } from 'react';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { ButtonComponent } from '../Button/Button';
import { IconComponent } from '../Icon/Icon';
import styles from './Banner.module.scss';

export const BannerComponent = ({ cssClass }: { cssClass?: string }) => {
  // console.log('BannerComponent');

  const [banner, setBanner] = useSessionStorage('promotion-banner', '');
  const [hidden, setDisplay] = useState(!!banner);

  const onClick = () => {
    setBanner('hidden');
    setDisplay(true);
  };

  return (
    <>
      {!hidden && (
        <div
          className={[styles.banner, cssClass ? ` ${cssClass}` : ''].join('')}
          id="promotion-banner"
        >
          <div className={styles.title}>
            Promotions for the best quality and innovation you love with the
            convenience and exceptional service at One.com
          </div>
          <ButtonComponent cssClass={styles.button} onClick={onClick}>
            <IconComponent name="close" />
          </ButtonComponent>
        </div>
      )}
    </>
  );
};
