import React, { useState } from 'react';
import Question from './Question';
import data from './data';

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <main>
        <div className="container">
          <h3>Questions and Answers about 'login'</h3>
          <section className="info">
            {questions.map((question) => {
              return <Question key={question.id} {...question} />;
            })}
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
