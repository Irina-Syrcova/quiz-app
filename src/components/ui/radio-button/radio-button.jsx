import styles from './radio-button.module.css';

const RadioButton = ({id, value, setSelected}) => {
  const handleChange = () => {
    setSelected(true)
  }

  return (
    <>
      <input className={styles.input} type="radio" id={id} value={value} name="radio" onChange={handleChange}/>
      <label className={styles.label} htmlFor={id}><span className={styles.number}>{id}</span>{value}</label>
    </>
  )
}

export default RadioButton;