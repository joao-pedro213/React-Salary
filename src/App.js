import React, { Component } from 'react';
import Header from './components/header/Header';
import SalaryInput from './components/salaryInput/SalaryInput';
import ReadOnlyInput from './components/readOnlyInput/ReadOnlyInput';
import ProgressBar from './components/progressBar/ProgressBar.js';
import { calculateSalaryFrom } from './controller/salaryController.js';
import { numberFormat } from './helpers/numberFormat.js';
import Footer from './components/footer/Footer';

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
      progNetSalary: 0,
      progDiscountINSS: 0,
      progDiscountIRPF: 0,
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
    const {
      aPercentual,
      bPercentual,
      cPercentual,
    } = this.calculatePercentageFrom(netSalary, discountINSS, discountIRPF);
    this.setState({
      fullSalary: typedSalary,
      baseINSS,
      baseIRPF,
      discountINSS,
      discountIRPF,
      netSalary,
      progNetSalary: aPercentual,
      progDiscountINSS: bPercentual,
      progDiscountIRPF: cPercentual,
    });
  };

  calculatePercentageFrom = (a, b, c) => {
    let total = a + b + c === 0 ? 1 : a + b + c;
    const aPercentual = (a * 100) / total;
    const bPercentual = (b * 100) / total;
    const cPercentual = (c * 100) / total;

    return {
      aPercentual,
      bPercentual,
      cPercentual,
    };
  };

  render() {
    const {
      baseINSS,
      baseIRPF,
      discountINSS,
      discountIRPF,
      netSalary,
      progNetSalary,
      progDiscountINSS,
      progDiscountIRPF,
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
            percentageValue={progDiscountINSS}
            value={numberFormat(discountINSS)}
            inputLabel={'Desconto INSS:'}
          />
          <ReadOnlyInput
            value={numberFormat(baseIRPF)}
            inputLabel={'Base IRPF:'}
          />
          <ReadOnlyInput
            textColor={'#c0392b'}
            percentageValue={progDiscountIRPF}
            value={numberFormat(discountIRPF)}
            inputLabel={'Desconto IRPF:'}
          />
        </div>
        <div style={styles.flexRow}>
          <ReadOnlyInput
            textColor={'#16a085'}
            percentageValue={progNetSalary}
            value={numberFormat(netSalary)}
            inputLabel={'Salário líquido:'}
          />
        </div>
        <div style={styles.flexRow}>
          <ProgressBar
            widthValue={progDiscountINSS}
            referenceColor={'#e67e22'}
          />
          <ProgressBar
            widthValue={progDiscountIRPF}
            referenceColor={'#c0392b'}
          />
          <ProgressBar widthValue={progNetSalary} referenceColor={'#16a085'} />
        </div>
        <Footer />
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
