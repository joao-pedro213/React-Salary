import React, { Component } from 'react';
import css from './readOnlyInput.module.css';

export default class ReadOnlyInput extends Component {
  render() {
    const { inputLabel, value, textColor } = this.props;
    return (
      <div
        style={{ borderColor: textColor }}
        className={`input-field ${css.readOnlyInput} ${css.border}`}
      >
        <input
          style={{
            color: textColor,
            fontWeight: 'bold',
            borderColor: textColor,
          }}
          value={value}
          type="text"
          readOnly
        />
        <label style={{ color: textColor }} className={'active'}>
          {inputLabel}
        </label>
      </div>
    );
  }
}
