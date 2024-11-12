import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer>
      <p className={styles.caption}>Проект выполнен в рамках стажировки <a className={styles.link} target='_blank' href="https://preax.ru" rel="noopener noreferrer">PREAX</a></p>
    </footer>
  )
}

export default Footer;