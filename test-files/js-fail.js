import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { foo } from './imports-fail';
import { maFunction } from './ts-pass';

const CONSTANT = 'CONSTANT';
const backtick = 'back\ntick';
const backtickVar = `back${backtick}tick`;
const unused = 'warning';

class App extends Component {
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
      <p className={CONSTANT} onClick={this.onClick}>
        {this.props.title} {backtickVar}
        {console.log('HELLO:', foo, maFunction(5, 4, 1))}
      </p>
    );
  }
}

ReactDOM.render(<App title="Hello, World!" />, document.getElementById('app'));
