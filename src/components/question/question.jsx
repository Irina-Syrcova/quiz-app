import styles from './question.module.css';

const Question = ({question}) => {

  return (
    <div className={styles.question}>
      <img className={styles.flag} src={question.flag} alt="flag" />
      <p className={styles.subtitle}>{question.question}</p>
    </div>
  )
}

export default Question;