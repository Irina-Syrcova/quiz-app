import { useState, useEffect, useRef } from 'react';

import Header from '../header/header';
import Card from '../ui/card/card';
import Footer from '../footer/footer';

function App() {
  const [page, setPage] = useState("welcome");
  const [counter, setCounter] = useState(18);
  const [questionArray, setQuestionArray] = useState([]);
  const [answerArray, setAnswerArray] = useState([]);
  const ref = useRef(null);

  function handlePressEnter(event) {
    if((event.key === 'Enter')){
      ref.current.click()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handlePressEnter); 
    return () => window.removeEventListener('keydown', handlePressEnter);
});

  return (
    <>
      <Header />
      <Card 
        page={page} 
        setPage={setPage}
        counter={counter}
        setCounter={setCounter}
        questionArray={questionArray}
        setQuestionArray={setQuestionArray}
        answerArray={answerArray}
        setAnswerArray={setAnswerArray}
        buttonRef={ref}
      />
      <Footer />
    </>
  )
}

export default App
