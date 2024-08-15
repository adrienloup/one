import { SlotType } from '../../models/Slot';
import styles from './Title.module.scss';

interface TitleProps extends SlotType {
  tag?: keyof JSX.IntrinsicElements;
  cssClass?: string;
}

export const TitleComponent = ({
  children,
  tag: Tag = 'h1',
  cssClass,
}: TitleProps) => {
  // console.log('TitleComponent');

  return (
    <Tag className={[styles.title, cssClass ? ` ${cssClass}` : ''].join('')}>
      {children}
    </Tag>
  );
};
