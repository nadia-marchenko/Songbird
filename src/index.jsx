import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import image2 from './assets/images/image2.jpeg';

import './sass/index.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import HeaderComponent from './js/HeaderComponent';
import QuestionComponent from './js/QuestionComponent';
import AnswersComponent from './js/AnswersComponent';

class App extends React.Component {
  render() {
    return (
      <>
      <HeaderComponent />
      <QuestionComponent/>
      <AnswersComponent/>
        <button className="test wrapper" type="button" onClick={this.toggleActive}>
          Songbird
        </button>
        <div>
          <img  width="300" src= {image2} alt="cat" />
        </div>
      </>
    );
  }
}
const AppWithHot = hot(module)(App);
const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);