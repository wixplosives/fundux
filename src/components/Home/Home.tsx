import HeroSection from '../HeroSection';
import OptionButtons from '../OptionButtons';
import SortByButton from '../SortByButton';

function Home() {
   return (
      <>
         <HeroSection />
         <OptionButtons>
            <SortByButton />
         </OptionButtons>
      </>
   );
}

export default Home;
