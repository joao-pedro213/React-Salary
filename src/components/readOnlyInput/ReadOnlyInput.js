import React, { Component } from 'react';
import css from './readOnlyInput.module.css';

export default class ReadOnlyInput extends Component {
  render() {
    const { inputLabel, value, textColor } = this.props;
    return (
      <div className={`input-field ${css.readOnlyInput}`}>
        <input
          style={{ color: textColor, fontWeight: 'bold' }}
          value={value}
          type="text"
          readOnly
        />
        <label className={'active'}>{inputLabel}</label>
      </div>
    );
  }
}
