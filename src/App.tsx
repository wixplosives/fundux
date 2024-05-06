import React, { useState } from 'react';
import DonationCards from './components/DonationCards';
import DonationCardModal from './components/DonationCardModal';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OptionButtons from './components/OptionButtons';
import SortByButton from './components/SortByButton';

interface DonationCard {
   title: string;
   target: number;
   amount: number;
   updated: boolean;
}

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
