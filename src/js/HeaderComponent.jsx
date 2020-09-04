import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { PropTypes } from 'prop-types';

class HeaderComponent extends Component {
  constructor() {
    super();
    this.name = 'Songbird';
  }

  render() {
    const { score, level } = this.props;
    const levelNames = ['Разминка', 'Зимующие птицы', 'Перелетные птицы', 'Хищные птицы', 'Горные птицы', 'Птицы из Красной книги РБ'];
    const listItems = levelNames.map((item, index) => 
      <label className={level === index ? 'btn btn-primary btn-level active' : 'btn btn-primary btn-level disabled'} key={item.id}>
        <input type="checkbox" autoComplete="off" defaultChecked/> {item}
      </label>
    , this
  );

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
              {listItems}
            </div>
            </Container>
        </div>
      </>
    );
  };
}

HeaderComponent.propTypes = {
  score: PropTypes.number,
  level: PropTypes.number,
};

HeaderComponent.defaultProps = {
  score: 0,
  level: 0,
};

export default HeaderComponent;