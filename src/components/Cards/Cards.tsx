import { CardComponent } from '../Card/Card';
import { TitleComponent } from '../Title/Title';
import clean from '../../assets/makeup/clean.webp';
import designed from '../../assets/makeup/designed.webp';
import performance from '../../assets/makeup/performance.webp';
import styles from './Cards.module.scss';

export const CardsComponent = ({ cssClass }: { cssClass?: string }) => {
  // console.log("CardsComponent");

  return (
    <div className={cssClass ? ` ${cssClass}` : ''}>
      <TitleComponent tag="h2">Magic's in the makeup</TitleComponent>
      <div className={styles.cards}>
        <CardComponent
          title="Bold, Clean Color"
          text="One formulas are bold and expressive, with richly-pigmented, stay-true color payoff that won't fade. They're also clean, 100% vegan & cruelty-free, and formulated without parabens, phthalates, sulfates, or synthetic fragrances."
          image={clean}
        />
        <CardComponent
          title="Designed Sustainably"
          text="One products are made with sustainable materials. Our outer cartons are 100% recyclable, madewith FSC-certified paperboard. Our primary containers are made with sustainable materials, including PCR (post-consumer recycled) plastic or glass."
          image={designed}
        />
        <CardComponent
          title="With Performance"
          text="From sweat-proof brow pencils to waterproof eyeliner, our high-impact products give budge-proof color with major staying power—wearing comfortably wherever the day takes you."
          image={performance}
        />
      </div>
    </div>
  );
};
