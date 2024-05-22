import styles from './DonationCard.module.css';

export interface DonationCardProps {
    title: string;
    text: string;
    target: number;
}

function DonationCard({title, text, target}: DonationCardProps) {
    return (
        <article className={styles.card}>
            <header>
                <h3>{title}</h3>
            </header>
            <div>
                {text}
                <footer>
                    <p>Target: {target}</p>
                </footer>
            </div>
        </article>
    );
};

export default DonationCard;
