import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { foo } from './imports-fail';
import { maFunction } from './ts-pass';

const CONSTANT = 'CONSTANT';
const backtick = 'back\ntick';
const backtickVar = `back${backtick}tick`;
const unused = 'warning';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      arr: [
        'foo',
        'bar',
        'foo',
        'bar',
        'foo',
        'bar',
        'foo',
        'bar',
        'foo',
        'bar',
      ],
    };

    $(window).on('resize', this.doAThing);
    this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();

    this.setState({
      index: 1,
    });
  }

  render() {
    return (
      <p title={CONSTANT} onClick={this.onClick}>
        Hello, World! {backtickVar}
        {console.log('HELLO:', foo, maFunction(5, 4, 1))}
      </p>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
