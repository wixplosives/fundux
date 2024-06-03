import styles from './DonationCard.module.css';

export interface DonationCardProps {
   title: string;
   description: string;
   donationTarget: number;
}

function DonationCard({ title, description, donationTarget }: DonationCardProps) {
   return (
      <article className={styles.donationCard}>
         <header>
            <h3>{title}</h3>
         </header>
         <section>
            <p>{description}</p>
            <footer>
               <p>Target: {donationTarget}</p>
            </footer>
         </section>
      </article>
   );
}

export default DonationCard;
