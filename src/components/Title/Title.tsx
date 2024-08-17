import { SlotType } from '../../models/Slot';
import styles from './Title.module.scss';

interface TitleProps extends SlotType {
  cssClass?: string;
  tag?: keyof JSX.IntrinsicElements;
}

export const TitleComponent = ({
  tag: Tag = 'h1',
  children,
  cssClass,
}: TitleProps) => {
  // console.log('TitleComponent');

  return (
    <Tag className={[styles.title, cssClass ? ` ${cssClass}` : ''].join('')}>
      {children}
    </Tag>
  );
};
