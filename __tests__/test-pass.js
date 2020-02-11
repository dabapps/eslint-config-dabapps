import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const CONSTANT = 'CONSTANT';
const backtick = 'back\ntick';
const backtickVar = `back${backtick}tick`;
const template = 'template';

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
  }

  onClick(event) {
    event.preventDefault();

    this.setState({
      index: 1,
    });
  }

  render() {
    return (
      <p title={CONSTANT} onClick={this.onClick.bind(this)}>
        Hello, World! {backtickVar}
      </p>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
