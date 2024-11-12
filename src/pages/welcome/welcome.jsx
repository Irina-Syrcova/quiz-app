import Button from '../../components/ui/button/button';
import Counter from '../../components/ui/counter/counter';
import { getAnswerArray, getQuestionArray } from '../../utils/getRundomArray';

import styles from './welcome.module.css';

import data from '../../quizz_questions.json';

const Welcome = ({setPage, counter, setCounter, setQuestionArray, setAnswerArray, buttonRef}) => {
  const isDisabled = counter === "";
  const questionArray = getQuestionArray(data.questions, counter);
  const trueAnswerArray = [];
  questionArray.forEach(element => {
    trueAnswerArray.push(element.correctAnswer)
  });

  const answerArray = [];
  trueAnswerArray.forEach((element) => {
    answerArray.push(getAnswerArray(element, data.countries))
  })

  function startQuiz() {
    if (!isDisabled){
      setQuestionArray(questionArray)
      setAnswerArray(answerArray)
      setPage("start")
    }
  }
  
  return (
    <>
      <img className={styles.welcome} src="./images/sali.png" alt="Welcome" />
      <div className={styles.header}>
        <h2 className={styles.title}>Добро пожаловать </h2>
        <p className={styles.subtitle}>на викторину по странам <br/> и столицам!</p>
      </div>
      <div className={styles.counter}>
        <h2 className={styles.subtitle}>Выбери количество вопросов:</h2>
        <Counter 
          counter={counter}
          setCounter={setCounter} 
        />
      </div>
      <Button text={"Начать"} isDisabled={isDisabled} buttonRef={buttonRef} onClick={startQuiz}/>
    </>
  )
}

export default Welcome;