import styles from './button.module.css';

const Button = ({text, isDisabled, onClick, buttonRef}) => {
  return (
    <div className={`
      ${styles.container}
      ${isDisabled ? styles.disabled : ''}
    `}>
      <button id='button' className={styles.button} onClick={onClick} ref={buttonRef}>{text}</button>
      <p className={styles.caption}>или нажми <span className={styles.enter}>Enter ↵</span></p>
    </div>
  )
}

export default Button;