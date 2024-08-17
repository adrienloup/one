import styles from './Icon.module.scss';

interface IconProps {
  cssClass?: string;
  name: string;
}

export const IconComponent = ({ cssClass, name }: IconProps) => {
  // console.log("IconComponent");

  return (
    <span
      aria-hidden={false}
      className={[styles.icon, cssClass ? ` ${cssClass}` : ''].join('')}
    >
      {name}
    </span>
  );
};
