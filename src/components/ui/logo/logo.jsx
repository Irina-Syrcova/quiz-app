import Icon from '../icon/icon';
import styles from './logo.module.css';

export const Logo = () => {
  return (
    <a href="index.html" className={styles.logo}>
      <Icon id={"logo"} width={"179"} height={"48"} viewBox={"0 0 179 48"}/>
    </a>
  )
}