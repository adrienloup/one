import { randomList } from '../../utils/randomList';
import { useProduct } from '../../hooks/useProduct';
import { ProductType } from '../../models/Product';
import { FailureComponent } from '../Failure/Failure';
import { LoaderComponent } from '../Loader/Loader';
import { TitleComponent } from '../Title/Title';
import { ListComponent } from '../List/List';
import { HighlightComponent } from '../Highlight/Highlight';
import { FavoriteComponent } from '../Favorite/Favorite';
import lips1 from '../../assets/highlight/lips-1.webp';
import lips2 from '../../assets/highlight/lips-2.webp';
import face1 from '../../assets/highlight/face-1.webp';
import eyes1 from '../../assets/highlight/eyes-1.webp';
import eyes2 from '../../assets/highlight/eyes-2.webp';
import styles from './Favorites.module.scss';

const highlights = [lips1, lips2, face1, eyes1, eyes2];

export const FavoritesComponent = () => {
  // console.log("FavoritesComponent");

  const { loading, errors, products } = useProduct();

  const favoriteList = products?.map((product: ProductType) => (
    <FavoriteComponent key={product.id} favorite={product} />
  ));

  const highlightList = highlights.map((highlight: string, index: number) => (
    <HighlightComponent
      key={`${highlight}-${index}`}
      cssClass={styles.highlight}
      src={highlight}
    />
  ));

  const randomFavorite = randomList(favoriteList ? favoriteList : []);
  const randomHighlight = randomList(highlightList);

  return (
    <>
      {loading && <LoaderComponent cssClass={styles.loader} size="large" />}
      {products && (
        <>
          <TitleComponent tag="h2">Favorite that's easy to use</TitleComponent>
          <ListComponent
            cssClass={styles.favorites}
            list={[
              randomFavorite[0],
              randomHighlight[0],
              randomFavorite[1],
              randomHighlight[1],
              randomFavorite[2],
              randomHighlight[2],
            ]}
          />
        </>
      )}
      {errors && (
        <FailureComponent cssClass={styles.failure}>
          Failed to fetch :(
        </FailureComponent>
      )}
    </>
  );
};
