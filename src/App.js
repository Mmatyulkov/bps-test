import React, { useState } from 'react';
import './App.css';

function App(question) {
  return (
    <div className="App">
      <header>
        <div className="img"></div>
        <h1>ВОПРОСЫ</h1>
        <h2>ВСЕ ЧТО ВЫ ХОТИТЕ ЗНАТЬ</h2>
      </header>
      <ul>
        <li>
          <div className="question-block"><button>⨉</button><h3>Как оформить заказ?</h3></div>
        </li>
        {questions.map((question) => (
        <li key={question.key}>
          <Question title={question.title} content={question.content}></Question>
        </li>
        ))}
        <li>
          <div className="question-block"><button>⨉</button><h3>Условия доставки за предалами МКАД</h3></div>
        </li>
        <li>
          <div className="question-block"><button>⨉</button><h3>Какие способы оплаты у вас есть?</h3></div>
        </li>  
        <li>
          <div className="question-block"><button>⨉</button><h3>У меня есть промокод, но я не понимаю как им пользоваться</h3></div>
        </li>
      </ul>
    </div>
  );
}

export const questions = [
  {
    key: "price",
    title: <>Как работает служба доставки?</>,
    content: <>При заказе до 17:00 доставка осуществляется <strong>в день заказа</strong>. Среднее время доставки 2 часа. Доставка осуществляется до 20:00 ежедневно. Мы работаем без выходных и праздников, чтобы Вы всегда могли кушать вкусную и здоровую еду! <br></br><br></br> Доставка осуществляется <strong>бесплатно</strong> при заказе от 1500 руб. по г.Москва в пределах МКАД</>,
  },
];

export const Pum = (props) => (
  <ul>
    {questions.map((question) => (
      <li>
        <Question title={question.title} content={question.content} />
      </li>
    ))}
  </ul>
);

export const Question = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const contentsElement = React.useRef();
  const [height, setHeight] = useState(0)
  
  const onClick = React.useCallback(() => {
    let shouldExpand = !isExpanded;
    setExpanded(shouldExpand);
    setHeight(shouldExpand ? contentsElement.current.scrollHeight : 0);

    var button = document.getElementById("button");
    var p = document.getElementById("question")
    
    p.classList.toggle('opened');button.classList.toggle('btn-answer');
    p.classList.toggle('closed');button.classList.toggle('a');

  }, [isExpanded, contentsElement])

  return <div className="question-block">
    <button id="button" onClick={onClick}><span>⨉</span></button>
    <section>
      <h3>{props.title}</h3>
      <p className="question closed" id="question" ref={contentsElement} style={{ height }}>{props.content}</p>
    </section>
  </div>;
};

export default App;
