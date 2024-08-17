import { useTransitionPage } from '../../hooks/useTransitionPage';
import { ButtonComponent } from '../Button/Button';
import styles from './Search.module.scss';

export const SearchComponent = ({ active }: { active?: boolean }) => {
  // console.log("SearchComponent");

  const { goTo } = useTransitionPage();

  return (
    <div
      className={[styles.search, active ? ` ${styles.active}` : ''].join('')}
    >
      <ButtonComponent
        cssClass={styles.button}
        onClick={() => goTo('/one/shop')}
      >
        {active ? 'You are looking for something?' : <h1>Shop now at One</h1>}
      </ButtonComponent>
    </div>
  );
};
