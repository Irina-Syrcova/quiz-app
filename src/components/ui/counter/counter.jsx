import Icon from '../icon/icon';

import styles from './counter.module.css';

import data from '../../../quizz_questions.json';

const Counter = ({counter, setCounter}) => {
  const max = data.questions.length;

  function onChange(event) {
    if ((event.target.value < max+1) & (event.target.value > 0)) {
      setCounter(event.target.value);
    }
    if (event.target.value < 1) {
      setCounter(1)
    }
    if (event.target.value > max) {
      setCounter(30)
    }
  }
  
  function onClickCounter() {
    setCounter("")
  }
    
  const handleDecrease = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }
  
  const handleIncrease = () => {
    if (counter < max) {
      setCounter(Number(counter) + 1)
    }
  }

  return (
    <div className={styles.counter}>
      <button className={styles.button} onClick={handleDecrease} disabled={counter == 1}>
        <Icon className={styles.minus} id={"minus"} width={"60"} height={"60"} viewBox={"0 0 60 60"}/>
      </button>
      <input id="counter" className={styles.input} type="number" min={1} max={max} step={1} value={counter} placeholder={counter} onChange={onChange} onClick={onClickCounter}/>
      <button className={styles.button} onClick={handleIncrease} disabled={counter == max}>
        <Icon className={styles.plus} id={"plus"} width={"60"} height={"60"} viewBox={"0 0 60 60"}/>
      </button>
    </div>
  )
}

export default Counter;