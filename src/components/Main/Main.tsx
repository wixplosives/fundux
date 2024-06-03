import styles from './Main.module.css';
import OptionButtons from '../OptionButtons';
import SortByButton from '../SortByButton';
import FiltersButton from '../FiltersButton';
import SearchButton from '../SearchButton';
import DonationCards from '../DonationCards';

function Main() {
   return (
      <main className={styles.main}>
         <header className={styles.header}>
            <h1 className={styles.title}>
               Discover Our <br />
               Partners in Impact
            </h1>
         </header>
         <section className={styles.bar}>
            <OptionButtons>
               <SortByButton />
               <FiltersButton />
               <SearchButton />
            </OptionButtons>
         </section>
         <DonationCards />
      </main>
   );
}

export default Main;
