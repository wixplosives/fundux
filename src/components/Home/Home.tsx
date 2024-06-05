import HeroSection from '../HeroSection';
import OptionButtons from '../OptionButtons';
import SortByButton from '../SortByButton';
import FiltersButton from '../FiltersButton';
import DonationCards from '../DonationCards';

function Home() {
   return (
      <>
         <HeroSection />
         <OptionButtons>
            <SortByButton />
            <FiltersButton />
         </OptionButtons>
         <DonationCards />
      </>
   );
}

export default Home;
