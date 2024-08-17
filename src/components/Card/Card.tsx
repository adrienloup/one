import { ImageComponent } from '../Image/Image';
import styles from './Card.module.scss';

interface CardProps {
  cssClass?: string;
  title: string;
  text: string;
  image: string;
}

export const CardComponent = ({ cssClass, title, text, image }: CardProps) => {
  // console.log("CardComponent");

  return (
    <div className={[styles.card, cssClass ? ` ${cssClass}` : ''].join('')}>
      <ImageComponent cssClass={styles.image} src={image} alt={title} />
      <div className={styles.title}>{title}</div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
