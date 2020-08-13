import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
              <Col sm = {6}>
                <div className="raised-block bg-dark rounded">
                  <h3>Tweets</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  };
}

export default AnswersComponent;