import Welcome from '../../../pages/welcome/welcome';
import Start from '../../../pages/start/start';
import Result from '../../../pages/result/result';

import styles from './card.module.css';

const Card = ({page, setPage, counter, setCounter, questionArray, setQuestionArray, answerArray, setAnswerArray, buttonRef}) => {
  
  if (page === "welcome") {
    return (
      <main className={styles.main}>
        <Welcome
          setPage={setPage}
          counter={counter}
          setCounter={setCounter}
          setQuestionArray={setQuestionArray}
          setAnswerArray={setAnswerArray}
          buttonRef={buttonRef}
        />
      </main>
    )
  }

  if (page === "start") {
    return (
      <main className={styles.main}>
        <Start
          counter={counter}
          setPage={setPage}
          questionArray={questionArray}
          answerArray={answerArray}
          buttonRef={buttonRef}
        />
      </main>
    )
  }

  if (page === "result") {
    return (
      <main className={styles.main}>
        <Result 
          setPage={setPage}
          buttonRef={buttonRef}
        />
      </main>
    )
  }
}

export default Card;