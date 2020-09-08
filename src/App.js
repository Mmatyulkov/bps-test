import React from 'react';
import './App.css';
// import { render } from '@testing-library/react';

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
          <div className="question-block"><button>+</button><h3>Как оформить заказ?</h3></div>
        </li>
        {/* <li className="test" id="collapsible">
          <button>+</button>
          <Collapsible id="collapsible" trigger="Как работает служба доставки">
            <p className="first">При заказе до 17:00 доставка осуществляется <p className="pink">в день заказа</p>. Среднее время доставки 2 часа. Доставка осуществляется до 20:00 ежедневно. Мы работаем без выходных и праздников, чтобы Вы всегда могли кушать вкусную и здоровую еду! Доставка осуществляется <p className="pink">бесплатно</p> при заказе от 1500 руб. по г.Москва в пределах МКАД</p>
          </Collapsible>
        </li> */}
        {questions.map((question) => (
        <li>
          <Question title={question.title} content={question.content}></Question>
        </li>
        ))}
        {/* <li>
          <div className="question-block"><button id="button" onClick={Button}>+</button><span><p className="question">Как работает служба доставки</p><p className="answer"></p></span></div>
        </li> */}
        <li>
          <div className="question-block"><button>+</button><h3>Условия доставки за предалами МКАД</h3></div>
        </li>
        <li>
          <div className="question-block"><button>+</button><h3>Какие способы оплаты у вас есть?</h3></div>
        </li>  
        <li>
          <div className="question-block"><button>+</button><h3>У меня есть промокод, но я не понимаю как им пользоваться</h3></div>
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
  // ...
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
  // const [isExpanded, setExpanded] = useState(false);

  return <div className="question-block">
    <button id="button" onClick={open}>+</button>
    <section>
      <h3>{props.title}</h3>
      <div className="bg"><p className="first closed" id="first">{props.content}</p></div>
    </section>
  </div>;
};

const open = () => {
  console.log('do not working')
  var button = document.getElementById("button");
  var p = document.getElementById("first")
  
  p.classList.toggle('opened');button.classList.toggle('btn-answer');
  p.classList.toggle('closed');button.classList.toggle('a');

};


// function Button (){
//   console.log('do not working')
//   var button = document.getElementById("button");
//   var p = document.getElementById("first")

//   // button.classList.add('btn-answer');
//   // if (button.classList.contains('btn-answer')) 
//   // {button.classList.remove('btn-answer');p.classList.add('open');p.classList.remove('closed')} 
//   // else {button.classList.add('btn-answer');p.classList.remove('open');p.classList.add('closed')}


  

  // ;p.classList.remove('open')

  // function Collap (){
    
  //   var collapsible = document.getElementsByClassName("Collapsible")
  //   var button = document.getElementById("button");
  
  //   if (button.classList.contains('btn-answer'))
  //   {collapsible.firstChild.classList.remove('is-closed').add('is-open')} else
  //   {collapsible.firstChild.classList.remove('is-open').add('is-closed')}
  
  //   // ReactComponent.firstChild.classList
  // }

  

export default App;
