import { memo } from 'react';
import { useTitle } from '../../hooks/useTitle';
import { useCollection } from '../../hooks/useCollection';
import { HeaderComponent } from '../../components/Header/Header';
import { MainComponent } from '../../components/Main/Main';
import { FooterComponent } from '../../components/Footer/Footer';
// import { ScrollToTopComponent } from '../../components/ScrollToTop/ScrollToTop';
import { ArticleComponent } from '../../components/Article/Article';
import { TitleComponent } from '../../components/Title/Title';
import { LoaderComponent } from '../../components/Loader/Loader';
import { FailureComponent } from '../../components/Failure/Failure';
import { ImageComponent } from '../../components/Image/Image';
import styles from './Collection.module.scss';
import { FavoritesComponent } from '../../components/Favorites/Favorites';

function CollectionPage() {
  console.log('CollectionPage');

  const { loading, errors, collections } = useCollection();

  const collection = collections?.filter(
    (collection) => collection.route === location.pathname.split('/').pop()
  );

  useTitle(collection ? collection[0].title + ' Collection' : 'Collection');

  return (
    <>
      <HeaderComponentMemo />
      <MainComponent>
        <ArticleComponent>
          {loading && <LoaderComponent cssClass={styles.loader} size="large" />}
          {collection && (
            <>
              <TitleComponent>{collection[0].title} Collection</TitleComponent>
              <div className={styles.content}>
                <div className={styles.inner}>
                  <ImageComponent
                    cssClass={styles.image}
                    src={`/one/data/collections/${collection[0].image}`}
                    alt={collection[0].title}
                  />
                  <div className={styles.short}>{collection[0].short}</div>
                  <div className={styles.description}>
                    {collection[0].description.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
          {errors && (
            <FailureComponent cssClass={styles.failure}>
              Failed to fetch :(
            </FailureComponent>
          )}
          {collection && <FavoritesComponent title={collection[0].title} />}
        </ArticleComponent>
      </MainComponent>
      <FooterComponentMemo />
      {/* <ScrollToTopComponent /> */}
    </>
  );
}

const HeaderComponentMemo = memo(HeaderComponent);
const FooterComponentMemo = memo(FooterComponent);

export default CollectionPage;
