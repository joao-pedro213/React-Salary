import React, { Component } from 'react';
import css from './footer.module.css';

export default class Footer extends Component {
  render() {
    return (
      <p className={css.footerText}>
        Desenvolvido por{' '}
        <span className={css.emphasisText}>João Pedro Capobiango</span> durante
        o Bootcamp de Dev. FullStack promovido pela IGTI
      </p>
    );
  }
}
