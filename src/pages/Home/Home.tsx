import { memo } from 'react';
import { useTitle } from '../../hooks/useTitle';
import { HeaderComponent } from '../../components/Header/Header';
import { MainComponent } from '../../components/Main/Main';
import { FooterComponent } from '../../components/Footer/Footer';
import { ScrollToTopComponent } from '../../components/ScrollToTop/ScrollToTop';
import { ArticleComponent } from '../../components/Article/Article';
import { HeroComponent } from '../../components/Hero/Hero';
import { CollectionsComponent } from '../../components/Collections/Collections';
import { FavoritesComponent } from '../../components/Favorites/Favorites';
import { CardsComponent } from '../../components/Cards/Cards';

function HomePage() {
  console.log('HomePage');

  useTitle('Welcome');

  return (
    <>
      <HeaderComponentMemo />
      <MainComponent>
        <ArticleComponent>
          <HeroComponentMemo />
          <FavoritesComponentMemo />
          <CollectionsComponentMemo />
          <CardsComponentMemo />
        </ArticleComponent>
      </MainComponent>
      <FooterComponentMemo />
      <ScrollToTopComponent />
    </>
  );
}

const HeaderComponentMemo = memo(HeaderComponent);
const HeroComponentMemo = memo(HeroComponent);
const FavoritesComponentMemo = memo(FavoritesComponent);
const CollectionsComponentMemo = memo(CollectionsComponent);
const CardsComponentMemo = memo(CardsComponent);
const FooterComponentMemo = memo(FooterComponent);

export default HomePage;
