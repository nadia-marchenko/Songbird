import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

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
      </>
    );
  }
}
const AppWithHot = hot(module)(App);
const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);