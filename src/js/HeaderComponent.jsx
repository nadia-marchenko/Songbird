import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { PropTypes } from 'prop-types';

class HeaderComponent extends Component {
  constructor() {
    super();
    this.name = 'Songbird';
  }

  render() {
    const { score } = this.props;
    return (
      <>
        <div className = 'wrapper'>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
            <div className = "logo">
              <a href="#r">
                <h3>Songbird</h3>
              </a>
            </div>
          <div className = 'score my-2 my-lg-0'>Score: {score}</div>
          </nav>
            <Container className="btn-group btn-group-toggle" role="group">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-primary active btn-level">
                <input type="checkbox" autoComplete="off" defaultChecked/> Разминка
              </label>
              <label className="btn-level btn btn-primary">
                <input type="checkbox" autoComplete="off" defaultChecked/> Зимующие птицы
              </label>
              <label className="btn-level btn btn-primary">
                <input type="checkbox" autoComplete="off" defaultChecked/> Перелетные птицы
              </label>
              <label className="btn-level btn btn-primary">
                <input type="checkbox" autoComplete="off" defaultChecked/> Хищные птицы
              </label>
              <label className="btn-level btn btn-primary">
                <input type="checkbox" autoComplete="off" defaultChecked/> Горные птицы
              </label>
              <label className="btn-level btn btn-primary">
                <input type="checkbox" autoComplete="off" defaultChecked/> Птицы из Красной книги РБ
              </label>
            </div>
            </Container>
        </div>
      </>
    );
  };
}

HeaderComponent.propTypes = {
  score: PropTypes.number,
};

HeaderComponent.defaultProps = {
  score: 0,
};

export default HeaderComponent;