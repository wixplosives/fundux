import styles from './DonationCard.module.css';

export interface DonationCardProps {
   title: string;
   text: string;
   target: number;
}

function DonationCard({ title, text, target }: DonationCardProps) {
   return (
      <article className={styles.donationCard}>
         <header>
            <h3>{title}</h3>
         </header>
         <section>
            <p>{text}</p>
            <footer>
               <p>Target: {target}</p>
            </footer>
         </section>
      </article>
   );
}

export default DonationCard;
