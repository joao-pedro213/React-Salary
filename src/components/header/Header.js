import React, { Component } from 'react';
import css from './header.module.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h3 className={css.header}>
          React <span className={css.headerTitle}>Salary.</span>
        </h3>
      </div>
    );
  }
}
