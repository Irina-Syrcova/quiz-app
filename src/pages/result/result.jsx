import Button from '../../components/ui/button/button';

import styles from './result.module.css';

const Result = ({setPage, buttonRef}) => {
  const isTrue = false;
  const isFalse = true;

  const onClick = () => {
    setPage('welcome')
  }

  return (
    <>
      <div className={styles.img}></div>
      <div className={styles.results}>
        <h2 className={styles.title}>Результат</h2>
        {isTrue && isFalse ? (
          <p className={styles.subtitle}>Ты ответил правильно на <span className={styles.true}>12</span> вопросов и сделал <span className={styles.false}>6</span> ошибок.</p>
        ) : (
          null
        )}
        {isTrue && !isFalse ? (
          <p className={styles.subtitle}>Ты ответил правильно на все вопросы. Так держать!</p>
        ) : (
          null
        )}
        {!isTrue && isFalse ? (
          <p className={styles.subtitle}>Ты не ответил ни на один вопрос. Попробуй еще!</p>
        ) : (
          null
        )}
      </div>
        <Button text={"Попробовать еще"} isDisabled={false} onClick={onClick} buttonRef={buttonRef} />
    </>
  )
}

export default Result;