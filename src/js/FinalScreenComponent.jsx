import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class FinalScreenComponent extends Component {
  constructor() {
    super();
    this.name = 'Songbird';
  }

  render() {
    const { score, playAgain } = this.props;
    return (
      <>
        <div className="jumbotron wrapper">
          <h1 className="display-3">Поздравляем!</h1>
          <p className="lead">Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
          <hr className="my-4"/>
          <p className="lead">
            <a className="btn btn-primary btn-lg btn-one-more" href="/#" role="button" onClick={playAgain}>Попробовать еще раз</a>
          </p>
        </div>
      </>
    );
  }
}

FinalScreenComponent.propTypes = {
  score: PropTypes.number,
  playAgain: PropTypes.func.isRequired,
};

FinalScreenComponent.defaultProps = {
  score: 0,
};

export default FinalScreenComponent;
