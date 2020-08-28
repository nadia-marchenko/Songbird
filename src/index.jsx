import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import HeaderComponent from './js/HeaderComponent';
import QuestionComponent from './js/QuestionComponent';
import AnswersComponent from './js/AnswersComponent';
import birdsdata from './js/birdsdata.json';
import Helper from './js/Helper';
import FinalScreenComponent from './js/FinalScreenComponent';


class App extends React.Component {
  constructor() {
    super();
    this.child = React.createRef();
    this.toNextLevel = this.toNextLevel.bind(this);
    this.playAgain = this.playAgain.bind(this);
    this.state = {
      rightAnswerID: Helper.getRandomArbitrary(0, birdsdata.recordings[0].length),
      isRight: false,
      score: 0,
      level: 0,
    }

    this.updateAnswer = (value) => {
      this.setState({ isRight: value });
    };

    this.updateScore = (value) => {
      const { score } = this.state;
      this.setState({ score: score + value });
    };
  }

  toNextLevel() {
    this.setState((state) => {
      return { 
        level: state.level + 1,
        isRight: false,
        rightAnswerID: Helper.getRandomArbitrary(0, birdsdata.recordings[0].length),
    }
    })
    this.child.current.updateLevel();
  }

  playAgain() {
    this.setState({
      level: 0,
      score: 0,
    });
  }

  render() {
    const { rightAnswerID, isRight, score, level } = this.state;
    if(level < 6) {
      return (
        <>
        <HeaderComponent 
          score = {score} 
          level = {level}
        />
        
        <QuestionComponent 
          rightAnswerID = {rightAnswerID} 
          isRight = {isRight} 
          level = {level}
        />
        <AnswersComponent 
          rightAnswerID = {rightAnswerID} 
          updateAnswer = {this.updateAnswer} 
          updateScore = {this.updateScore}
          level = {level}
          isRight = {isRight}
          ref={this.child}
        />
        <button 
          type="button" 
          className="btn btn-primary btn-lg btn-block wrapper button-next"
          onClick={this.toNextLevel}
          disabled={!isRight}
        >Next
        </button>
        </>
      )
    } 
    return (
      <>
        <HeaderComponent 
          score = {score} 
          level = {level}
        />
        <FinalScreenComponent 
          score = {score}
          playAgain = {this.playAgain}
        />
      </>
    );
    }
}
// const AppWithHot = hot(module)(App);
const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);