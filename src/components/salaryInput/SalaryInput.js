import React, { Component } from 'react';
import css from './salaryInput.module.css';

export default class SalaryInput extends Component {
  handleInputValue = (event) => {
    const typedSalary = event.target.value;
    this.props.onChangeInput(typedSalary);
  };

  render() {
    return (
      <div className={`input-field ${css.salaryInput}`}>
        <input
          placeholder="Digite um valor para calcular o salário bruto"
          type="number"
          onChange={this.handleInputValue}
        />
        <label className="active">Salário bruto</label>
      </div>
    );
  }
}
