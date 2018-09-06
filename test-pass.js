import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const CONSTANT = 'CONSTANT';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      arr: [
        'foo',
        'bar'
      ]
    };

    $(window)
      .on('resize', this.doAThing);
  }

  onClick(event) {
    event.preventDefault();

    this.setState({
      index: 1
    });
  }

  render() {
    return (
      <p

        title={CONSTANT} onClick={this.onClick.bind(this)}>
        Hello, World!
      </p>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
