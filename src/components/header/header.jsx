import { Logo } from '../ui/logo/logo';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  )
}

export default Header;