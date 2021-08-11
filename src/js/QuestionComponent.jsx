import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ReactAudioPlayer from 'react-audio-player';
import { PropTypes } from 'prop-types';
import birsdata from './birdsdata.json';

import image2 from '../assets/images/default-bird.jpeg';

class QuestionComponent extends Component {
  constructor(props) {
    super(props);
    this.name = 'Questions';
  }

  render() {
    const { rightAnswerID, isRight, level } = this.props;
    return (
      <>
        <div className = 'wrapper question-area'>
          <Container className='bg-dark rounded'>
            <Row>
              <Col sm={3} xs={12}>
                <Image className='default-answer-img' src= { isRight ? birsdata.recordings[level][rightAnswerID-1].image : image2} width='500px' alt="bird" rounded fluid/>
              </Col>
              <Col sm={9} xs={12}>
                <h2 className='bird-name-question'>{isRight ? birsdata.recordings[level][rightAnswerID-1].name : '*******'}</h2>
                <hr/>
                <ReactAudioPlayer
                  className = 'audio-player'
                  src = {birsdata.recordings[level].filter((el) => el.id === rightAnswerID.toString())[0].audio}
                  controls
                />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  };
}

QuestionComponent.propTypes = {
  rightAnswerID: PropTypes.number,
  isRight: PropTypes.bool,
  level: PropTypes.number,
};

QuestionComponent.defaultProps = {
  rightAnswerID: 1,
  isRight: false,
  level: 0,
};

export default QuestionComponent;