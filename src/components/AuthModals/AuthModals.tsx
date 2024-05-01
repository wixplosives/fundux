import React, { useState } from 'react';
import LogInModal from '../LogInModal';
import SignUpModal from '../SignUpModal';
import styles from './AuthModals.module.css';

interface AuthModalsProps {
   onCloseModal: () => void;
}

type AuthMode = 'login' | 'signup';

function AuthModals({ onCloseModal }: AuthModalsProps) {
   const [mode, setMode] = useState<AuthMode>('login');

   const handleSwitchMode = (newMode: AuthMode) => {
      return () => setMode(newMode);
   };

   const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
         onCloseModal();
      }
   };

   return (
      <div className={styles.modal} onClick={handleOnClick}>
         {mode === 'login' ? (
            <LogInModal switchMode={handleSwitchMode('signup')} />
         ) : (
            <SignUpModal switchMode={handleSwitchMode('login')} />
         )}
      </div>
   );
}

export default AuthModals;
