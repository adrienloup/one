import { SlotType } from '../../models/Slot';
import styles from './Article.module.scss';

export const ArticleComponent = ({ children }: SlotType) => {
  // console.log('ArticleComponent');

  return <article className={styles.article}>{children}</article>;
};
