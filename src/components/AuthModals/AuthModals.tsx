import React, { useState } from 'react';
import styles from './AuthModals.module.css';
import LogInModal from '../LogInModal';
import SignUpModal from '../SignUpModal';

interface AuthModalsProps {
   onCloseModal: () => void;
}

type AuthMode = 'login' | 'signup';

function AuthModals({ onCloseModal }: AuthModalsProps) {
   const [mode, setMode] = useState<AuthMode>('login');

   const handleSwitchMode = (newMode: AuthMode) => {
      return () => setMode(newMode);
   };

   const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
         onCloseModal();
      }
   };

   return (
      <div className={styles.modal} onClick={handleClick}>
         {mode === 'login' ? (
            <LogInModal onSwitchMode={handleSwitchMode('signup')} />
         ) : (
            <SignUpModal onSwitchMode={handleSwitchMode('login')} />
         )}
      </div>
   );
}

export default AuthModals;
