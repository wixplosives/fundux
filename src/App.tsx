import DonationCards from './components/DonationCards';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OptionButtons from './components/OptionButtons';
import SortByButton from './components/SortByButton';

function App() {
   return (
      <div>
         <Header />
         <HeroSection />
         <OptionButtons>
            <SortByButton />
         </OptionButtons>
         <DonationCards />
      </div>
   );
}

export default App;
