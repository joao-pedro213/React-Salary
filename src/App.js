import React, { Component } from 'react';
import Header from './components/header/Header';
import SalaryInput from './components/salaryInput/SalaryInput';
import ReadOnlyInput from './components/readOnlyInput/ReadOnlyInput';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SalaryInput />
        <div style={styles.flexRow}>
          <ReadOnlyInput value={'Test'} inputLabel={'Base INSS:'} />
          <ReadOnlyInput
            textColor={'#e67e22'}
            value={'Test'}
            inputLabel={'Desconto INSS:'}
          />
          <ReadOnlyInput value={'Test'} inputLabel={'Base IRPF:'} />
          <ReadOnlyInput
            textColor={'#c0392b'}
            value={'Test'}
            inputLabel={'Desconto IRPF:'}
          />
        </div>
        <div style={styles.flexRow}>
          <ReadOnlyInput
            textColor={'#16a085'}
            value={'Test'}
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
