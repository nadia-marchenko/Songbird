import React, { Component } from 'react';

class QuestionComponent extends Component {
  constructor() {
    super();
    this.name = 'Questions';
  }

  render() {
    return (
      <>
        <div className = 'logo'>{this.name}</div>
      </>
    );
  };
}

export default QuestionComponent;