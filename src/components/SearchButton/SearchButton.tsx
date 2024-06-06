import styles from './SearchButton.module.css';

function SearchButton() {
   return (
      <div className={styles.searchButton}>
         <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
         />
         <i className={`fas fa-search ${styles.searchIcon}`}></i>
      </div>
   );
}

export default SearchButton;
