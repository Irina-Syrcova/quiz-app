import { useState } from 'react';

import { Counter } from '../counter/counter';
import { Button } from '../button/button';

import styles from './card.module.css';

export const Card = () => {
  const [isWelcome, setWelcome] = useState(true);
  const [isStart, setStart] = useState(false);
  const [isResult, setResult] = useState(true);
  const [isTrue, setTrue] = useState(false);
  const [isFalse, setFalse] = useState(false);

  if (isWelcome) {
    return (
      <>
        <img className={styles.welcome} src="/images/sali.png" alt="Welcome" />
        <div className={styles.container}>
          <h1 className={styles.title}>Добро пожаловать </h1>
          <p className={styles.subtitle}>на викторину по странам и столицам!</p>
        </div>
        <div className={styles.counter}>
          <h2 className={styles.subtitle}>Выбери количество вопросов:</h2>
          <Counter />
        </div><Button text={"Начать"} />
      </>
    )
  }

  if (isStart) {
    return (
      <>
        <svg className={styles.close} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="19.65" cy="19.65" r="15.15" stroke-width="3"/>
        <path d="M24.7763 16.0624C25.2018 15.6368 25.2018 14.9458 24.7763 14.5203C24.3508 14.0948 23.6598 14.0948 23.2343 14.5203L19.6498 18.1082L16.0619 14.5237C15.6364 14.0982 14.9453 14.0982 14.5198 14.5237C14.0943 14.9492 14.0943 15.6402 14.5198 16.0658L18.1077 19.6503L14.5232 23.2382C14.0977 23.6637 14.0977 24.3547 14.5232 24.7802C14.9487 25.2057 15.6398 25.2057 16.0653 24.7802L19.6498 21.1923L23.2377 24.7768C23.6632 25.2023 24.3542 25.2023 24.7797 24.7768C25.2052 24.3513 25.2052 23.6603 24.7797 23.2348L21.1918 19.6503L24.7763 16.0624Z"/>
        </svg>
        <div className={styles.question}>
          <img className={styles.flag} src="/images/flag.jpg" alt="img" />
          <p className={styles.subtitle}>Флаг какой страны изображен?</p>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link} href=""><span className={styles.number}>1</span> Камерун</a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href=""><span className={styles.number}>2</span> Нигерия</a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href=""><span className={styles.number}>3</span> Центрально-Африканская Республика</a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href=""><span className={styles.number}>4</span> Гаити</a>
          </li>
        </ul>
        <div className={styles.counts}>
          <div className={styles.disable}>
            <Button text={"Ответить"} />
          </div>
          <p className={styles.count}>1 / 18</p>
        </div>
      </>
    )
  }

  if (isResult) {
    return (
      <>
        <img className={styles.result} src="/images/result.png" alt="img" />
        <div className={styles.results}>
          <h2 className={styles.title}>Результат</h2>
          {isTrue && isFalse ? (
            <p className={styles.subtitle}>Ты ответил правильно на <span className={styles.true}>12</span> вопросов и сделал <span className={styles.false}>6</span> ошибок.</p>
          ) : (
            <></>
          )}
          {isTrue && !isFalse ? (
            <p className={styles.subtitle}>Ты ответил правильно на все вопросы. Так держать!</p>
          ) : (
            <></>
          )}
          {!isTrue && isFalse ? (
            <p className={styles.subtitle}>Ты не ответил ни на один вопрос. Попробуй еще!</p>
          ) : (
            <></>
          )}
        </div>
        <Button text={"Попробовать еще"} />
      </>
    )
  }
}