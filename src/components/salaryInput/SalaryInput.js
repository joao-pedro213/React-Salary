import React, { Component } from 'react';
import css from './salaryInput.module.css';

export default class SalaryInput extends Component {
  render() {
    return (
      <div className={`input-field ${css.salaryInput}`}>
        <input
          placeholder="Digite um valor para calcular o salário bruto"
          type="number"
        />
        <label className="active">Salário bruto</label>
      </div>
    );
  }
}
