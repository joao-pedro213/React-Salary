import React, { Component } from 'react';
import Header from './components/header/Header';
import SalaryInput from './components/salaryInput/SalaryInput';
import ReadOnlyInput from './components/readOnlyInput/ReadOnlyInput';
import { calculateSalaryFrom } from './controller/salaryController.js';
import { numberFormat } from './helpers/numberFormat.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullSalary: '',
      baseINSS: 0,
      baseIRPF: 0,
      discountINSS: 0,
      discountIRPF: 0,
      netSalary: 0,
    };
  }

  handleInputChangeValue = (value) => {
    const typedSalary = value === '' ? 0 : value;
    const {
      baseINSS,
      baseIRPF,
      discountINSS,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom(typedSalary);
    this.setState({
      fullSalary: typedSalary,
      baseINSS,
      baseIRPF,
      discountINSS,
      discountIRPF,
      netSalary,
    });
  };

  render() {
    const {
      fullSalary,
      baseINSS,
      baseIRPF,
      discountINSS,
      discountIRPF,
      netSalary,
    } = this.state;
    return (
      <div className="container">
        <Header />
        <SalaryInput onChangeInput={this.handleInputChangeValue} />
        <div style={styles.flexRow}>
          <ReadOnlyInput
            value={numberFormat(baseINSS)}
            inputLabel={'Base INSS:'}
          />
          <ReadOnlyInput
            textColor={'#e67e22'}
            value={numberFormat(discountINSS)}
            inputLabel={'Desconto INSS:'}
          />
          <ReadOnlyInput
            value={numberFormat(baseIRPF)}
            inputLabel={'Base IRPF:'}
          />
          <ReadOnlyInput
            textColor={'#c0392b'}
            value={numberFormat(discountIRPF)}
            inputLabel={'Desconto IRPF:'}
          />
        </div>
        <div style={styles.flexRow}>
          <ReadOnlyInput
            textColor={'#16a085'}
            value={numberFormat(netSalary)}
            inputLabel={'Salário líquido:'}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  border: {
    border: 'solid 1px lightgrey',
    borderRadius: '5px',
    padding: '10px',
  },
};
