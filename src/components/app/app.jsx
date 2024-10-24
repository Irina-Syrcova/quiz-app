import { Card } from '../ui/card/card';
import { Logo } from '../ui/logo/logo';

import styles from './app.module.css';

function App() {

  return (
    <main className={styles.app}>
      <div>
        <Logo />
      </div>
      <div className={styles.content}>
        <Card />
      </div>
      <p className={styles.caption}>Проект выполнен в рамках стажировки <a className={styles.link} href="https://preax.ru">PREAX</a></p>
    </main>
  )
}

export default App
