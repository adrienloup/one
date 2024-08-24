import { memo } from 'react';
import { ImageComponent } from '../Image/Image';
import styles from './Highlight.module.scss';

export const HighlightComponent = memo(
  ({ cssClass, src }: { cssClass?: string; src: string }) => {
    // console.log('HighlightComponent');

    return (
      <div
        className={[styles.highlight, cssClass ? ` ${cssClass}` : ''].join('')}
      >
        <ImageComponent cssClass={styles.image} src={src} alt="One" />
      </div>
    );
  }
);
