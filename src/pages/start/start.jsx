import { useState } from 'react';
import Answer from '../../components/answer/answer';
import Question from '../../components/question/question';
import Button from '../../components/ui/button/button';
import Icon from '../../components/ui/icon/icon';

import styles from './start.module.css';

const Start = ({counter, setPage, questionArray, answerArray, buttonRef}) => {
  const [current, setCurrent] = useState(1);
  const [selected, setSelected] = useState(false);
  const index = current - 1;
  const question = questionArray[index];

  const onClick = () => {
    if (selected) {
      if (current < counter) {
        setSelected(false);
        setCurrent(current + 1);
      } else {
        setPage("result");
      }
    }
  }
  
  return (
    <>
      <Icon className={styles.close} id={"close"} width={"40"} height={"40"} viewBox={"0 0 40 40"}/>
      <Question question={question}/>
      <Answer number={index} answerArray={answerArray} setSelected={setSelected}/>
      <div className={styles.counts}>
        <Button text={"Ответить"} isDisabled={!selected} onClick={onClick} buttonRef={buttonRef} />
        <p className={styles.count}>{current} / {counter}</p>
      </div>
    </>
  )
}

export default Start;