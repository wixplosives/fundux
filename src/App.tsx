import FiltersButton from './components/FiltersButton';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OptionButtons from './components/OptionButtons';
import SortByButton from './components/SortByButton';
import DonationCards from './components/DonationCards/DonationCards';

function App() {
   return (
      <div>
         <Header />
         <HeroSection />
         <OptionButtons>
            <SortByButton />
            <FiltersButton />
         </OptionButtons>
         <DonationCards />
      </div>
   );
}

export default App;
