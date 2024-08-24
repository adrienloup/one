import { memo } from 'react';
import { useTitle } from '../../hooks/useTitle';
import { useCollection } from '../../hooks/useCollection';
import { HeaderComponent } from '../../components/Header/Header';
import { MainComponent } from '../../components/Main/Main';
import { FooterComponent } from '../../components/Footer/Footer';
import { CursorComponent } from '../../components/Cursor/Cursor';
import { ArticleComponent } from '../../components/Article/Article';
import { TitleComponent } from '../../components/Title/Title';
import { LoaderComponent } from '../../components/Loader/Loader';
import { FailureComponent } from '../../components/Failure/Failure';
import { ImageComponent } from '../../components/Image/Image';
import { CollectionsComponent } from '../../components/Collections/Collections';
import styles from './Collection.module.scss';

function CollectionPage() {
  // console.log('CollectionPage');

  const { loading, errors, collections } = useCollection();

  const currentCollection = collections?.find(
    (collection) => collection.route === location.pathname.split('/').pop()
  );

  useTitle(
    currentCollection ? currentCollection.title + ' Collection' : 'Collection'
  );

  return (
    <>
      <HeaderComponentMemo />
      <MainComponent>
        <ArticleComponent>
          {loading && <LoaderComponent cssClass={styles.loader} size="large" />}
          {currentCollection && (
            <>
              <TitleComponent>
                {currentCollection.title} Collection
              </TitleComponent>
              <div className={styles.content}>
                <div className={styles.inner}>
                  <ImageComponent
                    cssClass={styles.image}
                    src={`/one/data/collections/${currentCollection.image}`}
                    alt={currentCollection.title}
                  />
                  <div className={styles.short}>{currentCollection.short}</div>
                  <div className={styles.description}>
                    {currentCollection.description.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))}
                  </div>
                </div>
              </div>
              <CollectionsComponentMemo />
            </>
          )}
          {errors && (
            <FailureComponent cssClass={styles.failure}>
              Failed to fetch :(
            </FailureComponent>
          )}
        </ArticleComponent>
      </MainComponent>
      <FooterComponentMemo />
      <CursorComponent />
    </>
  );
}

const HeaderComponentMemo = memo(HeaderComponent);
const CollectionsComponentMemo = memo(CollectionsComponent);
const FooterComponentMemo = memo(FooterComponent);

export default CollectionPage;
