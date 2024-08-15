import styles from './Icon.module.scss';

interface IconProps {
  name: string;
  cssClass?: string;
}

export const IconComponent = ({ name, cssClass }: IconProps) => {
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
