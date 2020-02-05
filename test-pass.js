import $ from 'jquery'; /* eslint-disable-line import/no-unresolved */
import React, { Component } from 'react';
import ReactDOM from 'react-dom'; /* eslint-disable-line import/no-unresolved */
import { foo } from './test-import';

console.log(foo); // eslint-disable-line no-console

const CONSTANT = 'CONSTANT';

/* eslint-disable-next-line import/no-unused-modules */
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      arr: ['foo', 'bar'],
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
        Hello, World!
      </p>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
