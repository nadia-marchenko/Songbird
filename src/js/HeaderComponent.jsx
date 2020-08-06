import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HeaderComponent extends Component {
  constructor() {
    super();
    this.name = 'Songbird';
  }

  render() {
    return (
      <>
        <div className = 'wrapper'>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
            <div className = "logo">
              <a href="#r">
                <h3>Songbird</h3>
              </a>
            </div>
            <div className = 'score my-2 my-lg-0'>Score: 20</div>
          </nav>
            <Container className="btn-group" role="group">
              <Row>
                <Col>
                  <button type = "button" className="btn btn-primary active">Разминка</button>
                </Col>
                <Col>
                  <button type = "button" className="btn btn-primary">Воробьиные</button>
                </Col>
                <Col>
                  <button type = "button" className="btn btn-primary">Лесные птицы</button>
                </Col>
                <Col>
                  <button type = "button" className="btn btn-primary">Певчие птицы</button>
                </Col>
                <Col>
                  <button type = "button" className="btn btn-primary">Хищные птицы</button>
                </Col>
                <Col>
                 <button type = "button" className="btn btn-primary">Морские птицы</button>
                </Col>
              </Row>
            </Container>
        </div>
      </>
    );
  };
}

export default HeaderComponent;