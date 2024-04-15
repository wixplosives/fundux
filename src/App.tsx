import styles from './App.module.scss';
import SortByButton from './components/SortByButton';

function App() {
    return (
        <>
            <div className={styles.App}>
                <h2>Welcome to your App Component 🎉</h2>
                <span>
                    Double click to edit App component
                    <br />
                    &amp; drag here elements from + Add <b>Elements</b> Panel
                </span>
                <p
                    style={{
                        fontSize: '12px',
                        marginTop: '80px',
                        display: 'flex',
                        gap: '3px',
                        justifyContent: 'center',
                    }}
                >
                    This project is using <img src="/src/assets/vite.svg" width="12" />+
                    <img src="/src/assets/typescript.svg" width="12" />
                    Visit vitejs.dev to learn more.
                </p>
            </div>
        </>
    );
}

export default App;
