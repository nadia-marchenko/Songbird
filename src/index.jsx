import React from 'react';
import ReactDOM from 'react-dom';
// import { hot } from 'react-hot-loader';

import './sass/index.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import HeaderComponent from './js/HeaderComponent';
import QuestionComponent from './js/QuestionComponent';
import AnswersComponent from './js/AnswersComponent';
import birdsdata from './js/birdsdata.json';
import Helper from './js/Helper';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rightAnswerID: Helper.getRandomArbitrary(0, birdsdata.recordings[0].length),
      isRight: false,
      score: 0,
    }

    this.updateAnswer = (value) => {
      this.setState({ isRight: value });
    };

    this.updateScore = (value) => {
      this.setState({ score: value });
    };
  }

  render() {
    const { rightAnswerID, isRight, score } = this.state;
    return (
      <>
        <HeaderComponent score = {score} />
        <QuestionComponent rightAnswerID = {rightAnswerID} isRight = {isRight}/>
        <AnswersComponent rightAnswerID = {rightAnswerID} updateAnswer = {this.updateAnswer} updateScore = {this.updateScore}/>
        <button type="button" className="btn btn-primary btn-lg btn-block wrapper button-next" disabled={!isRight} >Next</button>
        <div>{rightAnswerID}</div>
        <div>{isRight.toString()}</div>
        <div>Score parent: { score }</div>
      </>
    );
  }
}
// const AppWithHot = hot(module)(App);
const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);