import styles from './button.module.css';

export const Button = ({text}) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} type='submit'>{text}</button>
      <p className={styles.caption}>или нажми <span className={styles.enter}>Enter ↵</span></p>
    </div>
  )
}