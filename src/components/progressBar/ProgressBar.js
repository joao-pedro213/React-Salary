import React, { Component } from 'react';

export default class ProgressBar extends Component {
  render() {
    const { referenceColor, widthValue } = this.props;
    return (
      <div
        style={{
          backgroundColor: referenceColor,
          height: '25px',
          width: `${widthValue}%`,
        }}
      ></div>
    );
  }
}
