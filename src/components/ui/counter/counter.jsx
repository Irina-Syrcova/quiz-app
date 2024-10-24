import styles from './counter.module.css';

export const Counter = () => {
  return (
    <div className={styles.counter}>
      <button className={styles.button}>
        <img src="/images/minus.svg" alt="минус" />
      </button>
      <input className={styles.input} type="number" placeholder='18' />
      <button className={styles.button}>
      <img src="/images/plus.svg" alt="плюс" />
      </button>
    </div>
  )
}