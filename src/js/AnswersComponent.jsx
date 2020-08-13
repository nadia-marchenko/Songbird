import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactAudioPlayer from 'react-audio-player';

import Image from 'react-bootstrap/Image';
import image2 from '../assets/images/default-bird.jpeg';
import song from '../assets/images/song.mp3';

class AnswersComponent extends Component {
  constructor() {
    super();
    this.name = 'Answers';
  }

  render() {
    return (
      <>
        <div className = 'wrapper answers-area'>
          <Container>
            <Row>
              <Col sm = {6}>
                <div className="raised-block bg-dark rounded">
                  <ul className='item-list list-group'>
                    <li className='list-group-item'>
                      <span className="control-label"/>
                      Ворон
                    </li>
                    <li className='list-group-item'>
                      <span className="control-label"/>
                      Синица
                    </li>
                    <li className='list-group-item'>
                      <span className="control-label"/>
                      Воробей
                    </li>
                    <li className='list-group-item'>
                      <span className="control-label correct-label"/>
                      Кукушка
                    </li>
                    <li className='list-group-item'>
                      <span className="control-label error-label"/>
                      Ласточка
                    </li>
                    <li className='list-group-item'>
                      <span className="control-label"/>
                      Аист
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm = {6} className="raised-block bg-dark rounded">
                <Row>
                  <Col sm = {12} md = {5}>
                    <Image className='default-answer-img' src= {image2} width='200px' alt="bird" rounded fluid/>
                  </Col>
                  <Col sm = {12} md = {7}>
                    <h4 className='bird-name'>Пеликан</h4>
                    <hr/>
                    <h6 className='translate-bird-name'>Pelikan</h6>
                    <hr/>
                    <ReactAudioPlayer
                      className = 'audio-player player-answer'
                      src = {song}
                      controls
                    />
                  </Col>
                </Row>
                <Row>
                  <p className='birds-description'>Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.</p>
                </Row>
                
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  };
}

export default AnswersComponent;