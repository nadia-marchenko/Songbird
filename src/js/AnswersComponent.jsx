import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactAudioPlayer from 'react-audio-player';
import { PropTypes } from 'prop-types';

import Image from 'react-bootstrap/Image';
import birsdata from './birdsdata.json';

class AnswersComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chosenBird: '1',
      isChosen: false,
      clickedAnswers: 0,
      maxPoints: 5,
    }
  }

  getComponent(event) {
    const { rightAnswerID, updateAnswer } = this.props;
    let { clickedAnswers } = this.state;
    const click = event;
    const label = click.currentTarget.querySelector('.control-label');

    this.setState({
      chosenBird: label.id,
      isChosen: true,
    });
    
    if(Number(label.id) === rightAnswerID) {
      label.classList.add('correct-label');
      this.changeScore();
      updateAnswer(true);
    } else {
      label.classList.add('error-label');
      this.setState({
        clickedAnswers: clickedAnswers += 1,
      })
    }
  }
  
  changeScore(){
    const { maxPoints, clickedAnswers } = this.state;
    const { updateScore } = this.props;
    let score = 0;
    score = maxPoints - clickedAnswers;
    updateScore(score);

    this.setState({
      clickedAnswers: 0,
    })
  }

  renderBirdDescription() {
    const { chosenBird } = this.state;

    return (
      <>
        <Row>
          <Col sm = {12} md = {5}>
            <Image className='default-answer-img' src= {birsdata.recordings[0][chosenBird-1].image} width='200px' alt="bird" rounded fluid/>
          </Col>
          <Col sm = {12} md = {7}>
            <h4 className='bird-name'>{birsdata.recordings[0][chosenBird-1].name}</h4>
            <hr/>
            <h6 className='translate-bird-name'>{birsdata.recordings[0][chosenBird-1].species}</h6>
            <hr/>
            <ReactAudioPlayer
              className = 'audio-player player-answer'
              src = {birsdata.recordings[0][chosenBird-1].audio}
              controls
            />
          </Col>
        </Row>
        <Row>
          <p className='birds-description'>{birsdata.recordings[0][chosenBird-1].description}</p>
        </Row>
      </>
    );
  }

  render() {
    const { isChosen, clickedAnswers } = this.state;
    const listItems = birsdata.recordings[0].map((item) => 
      <li key={item.id} className='list-group-item' role="presentation" onClick={e => this.getComponent(e)} >
        <span className='control-label' id={item.id}/>
        {item.name}
      </li>, this
    );

    return (
      <>
        <div className = 'wrapper answers-area'>
          <Container>
            <Row>
              <Col sm = {6}>
                <div className="raised-block bg-dark rounded">
                  <ul className='item-list list-group'>
                    {listItems}
                  </ul>
                </div>
              </Col>
              <Col sm = {6} className="raised-block bg-dark rounded">
                { isChosen ? this.renderBirdDescription() : <p>Послушайте плеер. Выберите птицу из списка</p>}
              </Col>
            </Row>
          </Container>
        </div>
        <div>ClickedAnswers: {clickedAnswers}</div>
      </>
    );
  };
}

AnswersComponent.propTypes = {
  rightAnswerID: PropTypes.number,
  updateAnswer: PropTypes.func.isRequired,
  updateScore: PropTypes.func.isRequired,
};

AnswersComponent.defaultProps = {
  rightAnswerID: 1,
};

export default AnswersComponent;