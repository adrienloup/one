import { SizeType } from '../../models/Size';
import styles from './Loader.module.scss';

interface LoaderProps {
  cssClass?: string;
  size?: SizeType;
}

export const LoaderComponent = ({ cssClass, size = 'medium' }: LoaderProps) => {
  return (
    <div
      className={[
        styles.loader,
        ` ${styles[size]}`,
        cssClass ? ` ${cssClass}` : '',
      ].join('')}
    ></div>
  );
};
