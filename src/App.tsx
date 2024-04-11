import styles from './App.module.scss';
import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import OptionButtons from './components/OptionButtons';


function App() {
    return (
        <div className={styles.App}>
            <Header />
            {/* <HeroSection />
            <OptionButtons /> */}
        </div>
    );
}

export default App;
