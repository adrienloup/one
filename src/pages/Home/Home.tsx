import { memo } from 'react';
import { HeaderComponent } from '../../components/Header/Header';
import { MainComponent } from '../../components/Main/Main';
import { FooterComponent } from '../../components/Footer/Footer';
import { ScrollToTopComponent } from '../../components/ScrollToTop/ScrollToTop';
import { ArticleComponent } from '../../components/Article/Article';
import { HeroComponent } from '../../components/Hero/Hero';
import { CollectionComponent } from '../../components/Collection/Collection';
// import { FavoriteComponent } from '../../components/Favorite/Favorite';

function HomePage() {
  console.log('HomePage');

  return (
    <>
      <HeaderComponentMemo />
      <MainComponent>
        <ArticleComponent>
          <HeroComponentMemo />
          <CollectionComponentMemo />
          {/* <FavoriteComponentMemo /> */}
        </ArticleComponent>
      </MainComponent>
      <FooterComponentMemo />
      <ScrollToTopComponent />
    </>
  );
}

const HeaderComponentMemo = memo(HeaderComponent);
const HeroComponentMemo = memo(HeroComponent);
const CollectionComponentMemo = memo(CollectionComponent);
// const FavoriteComponentMemo = memo(FavoriteComponent);
const FooterComponentMemo = memo(FooterComponent);

export default HomePage;
