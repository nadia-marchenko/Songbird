import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ReactAudioPlayer from 'react-audio-player';

import image2 from '../assets/images/default-bird.jpeg';
import song from '../assets/images/song.mp3';


class QuestionComponent extends Component {
  constructor() {
    super();
    this.name = 'Questions';
  }

  render() {
    return (
      <>
        <div className = 'wrapper question-area'>
          <Container className='bg-dark rounded'>
            <Row>
              <Col sm={3} xs={12}>
                <Image className='default-answer-img' src= {image2} width='500px' alt="bird" rounded fluid/>
              </Col>
              <Col sm={9} xs={12}>
                <h2 className='bird-name-question'>*******</h2>
                <hr/>
                <ReactAudioPlayer
                  className = 'audio-player'
                  src = {song}
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

export default QuestionComponent;