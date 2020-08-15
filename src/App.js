import React, { Component } from 'react';
import Header from './components/header/Header';
import SalaryInput from './components/salaryInput/SalaryInput';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SalaryInput />
      </div>
    );
  }
}
