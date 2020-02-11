import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

const _LEADING_UNDERSCORE = 'Title';
const PascalCaseTitle = _LEADING_UNDERSCORE;

export interface Props {
  greating: string;
}

export interface StateProps {
  index: number;
  arr: Array<string>;
}

export default class App extends React.PureComponent<Props, StateProps> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      index: 0,
      arr: ['foo', 'bar'],
    };

    $(window).on('resize', this.doAThing);
  }

  public doAThing() {
    throw new Error('Method not implemented.');
  }

  private onClick(event) {
    event.preventDefault();

    this.setState({
      index: 1,
    });
  }

  public render() {
    return (
      <p title={PascalCaseTitle} onClick={this.onClick}>
        {this.props.greating}
      </p>
    );
  }
}

ReactDOM.render(
  <App greating="Hello, World!" />,
  document.getElementById('app')
);
