import commonIntroSectionStyles from '../../common/commonIntroSection.module.css';

function HeroSection() {
   return (
      <section className={commonIntroSectionStyles.section}>
         <article className={commonIntroSectionStyles.text}>
            <h1>
               Transform Lives <br /> with a Single Gesture
            </h1>
            <p>
               Every donation lights up a path to a brighter future. <br />
               Join us in making a real difference where it matters most. <br />
               Together, we can turn hope into action.
            </p>
         </article>
      </section>
   );
}

export default HeroSection;
