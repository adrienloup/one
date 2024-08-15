import styles from './Loader.module.scss';

interface LoaderProps {
  cssClass?: string;
  size?: string;
}

export const LoaderComponent = ({ cssClass }: LoaderProps) => {
  return (
    <div
      className={[styles.loader, cssClass ? ` ${cssClass}` : ''].join('')}
    ></div>
  );
};
