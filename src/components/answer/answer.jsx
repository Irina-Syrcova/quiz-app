import RadioButton from '../ui/radio-button/radio-button';

import styles from './answer.module.css';

const Answer = ({number, answerArray, setSelected}) => {
  const answers = [];

  answerArray[number].forEach((result, index) => {
    answers.push (
      <li className={styles.item} key={result}>
        <RadioButton id={index + 1} value={result} setSelected={setSelected}/>
      </li>
    )
  })

  return (
    <form >
      <ol className={styles.list}>{answers}</ol>
    </form>
  )
}

export default Answer;