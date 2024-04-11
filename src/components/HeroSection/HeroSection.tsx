import styles from './HeroSection.module.css';

function HeroSection() {
    return (
        <div className={styles.heroSection}>
            <h1>Transform Lives with a Single Gesture</h1>
            <h2>
            Every donation lights up a path to a brighter future. <br />
            Join us in making a real difference where it matters most. <br />
            Together, we can turn hope into action.
            </h2>
        </div>
    );
}

export default HeroSection;
