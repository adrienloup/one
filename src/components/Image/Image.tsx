import { useRef, useState } from 'react';
import { LoaderComponent } from '../Loader/Loader';
import styles from './Image.module.scss';

interface ImageProps {
  cssClass?: string;
  src: string;
  alt?: string;
}

export const ImageComponent = ({ cssClass, src, alt }: ImageProps) => {
  // console.log('ImageComponent');

  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLImageElement | null>(null);

  const onLoad = () => setLoading(false);
  const onError = () => console.log(`Failed to ${src}'s image`);

  return (
    <div className={[styles.image, cssClass ? ` ${cssClass}` : ''].join('')}>
      {loading && <LoaderComponent cssClass={styles.loader} />}
      <img
        ref={ref}
        src={src}
        alt={alt}
        onLoad={onLoad}
        onError={onError}
        style={{
          display: loading ? 'none' : 'block',
        }}
      />
    </div>
  );
};
