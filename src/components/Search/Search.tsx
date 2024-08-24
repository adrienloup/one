import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ButtonComponent } from '../Button/Button';
import { ModalComponent } from '../Modal/Modal';
import { SearchModalComponent } from '../SearchModal/SearchModal';
import styles from './Search.module.scss';

export const SearchComponent = ({ active }: { active?: boolean }) => {
  // console.log("SearchComponent");

  const [searchModal, setSearchModal] = useState(false);

  return (
    <div
      className={[styles.search, active ? ` ${styles.active}` : ''].join('')}
    >
      <ButtonComponent
        cssClass={styles.button}
        onClick={() => setSearchModal(!searchModal)}
      >
        {active ? 'You are looking for something?' : <h1>Shop now at One</h1>}
      </ButtonComponent>
      {searchModal &&
        createPortal(
          <ModalComponent
            head="You are looking for something?"
            body={<SearchModalComponent />}
            open={searchModal}
            onClick={() => setSearchModal(false)}
          />,
          document.querySelector('#_one_1em0m_3') ?? document.body
        )}
    </div>
  );
};
