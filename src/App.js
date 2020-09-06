import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header>
        <div className="img"></div>
        <h2>ВОПРОСЫ</h2>
        <h3>ВСЕ ЧТО ВЫ ХОТИТЕ ЗНАТЬ</h3>
      </header>
      <ul>
        <li>
          <div className="question-block"><button>+</button><p>Как оформить заказ?</p></div>
        </li>
        <li>
          <div className="question-block"><button id="button" onClick={Button}>+</button><span><p className="question">Как работает служба доставки</p><p className="answer"></p></span></div>
        </li>
        <li>
          <div className="question-block"><button>+</button><p>Условия доставки за предалами МКАД</p></div>
        </li>
        <li>
          <div className="question-block"><button>+</button><p>Какие способы оплаты у вас есть?</p></div>
        </li>
        <li>
          <div className="question-block"><button>+</button><p>У меня есть промокод, но я не понимаю как им пользоваться</p></div>
        </li>
      </ul>
    </div>
  );
}

function Button (){
  console.log('do not working')
  var button = document.getElementById("button");

  if (button.classList.contains('btn-answer')) 
  {button.classList.remove('btn-answer')} 
  else {button.classList.add('btn-answer')}
  var Answer = 'asdasdasdads'
  };

// function Answer() {
//   var Answer = React.createElement({
//     render: function(){
//       return (
//         <h1>asdasd</h1>
//       )
//     }
//   })
  // const NewComponent = Answer
  // return (
  //   <p>При заказе до 17:00 доставка осуществляется в день заказа. Среднее время доставки 2 часа. Доставка осуществляется до 20:00 ежедневно. Мы работаем без выходных и праздников, чтобы Вы всегда могли кушать вкусную и здоровую еду!  
  //   Доставка осуществляется бесплатно  при заказе от 1500 руб. по г.Москва в пределах МКАД</p>
  // )
// }

export default App;
