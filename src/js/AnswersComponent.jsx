import React, { Component } from 'react';

class AnswersComponent extends Component {
  constructor() {
    super();
    this.name = 'Answers';
  }

  render() {
    return (
      <>
        <h1 className = 'logo'>{this.name}</h1>
      </>
    );
  };
}

export default AnswersComponent;