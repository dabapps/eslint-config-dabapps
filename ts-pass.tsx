import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

const CONSTANT_NAME = 'CONSTANT';

export interface Props {
  text: string;
}

export default class App extends React.PureComponent<Props> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      index: 0,
      arr: ['foo', 'bar'],
    };

    $(window).on('resize', this.doAThing);
  }

  public render() {
    return (
      <p title={CONSTANT_NAME} onClick={this.onClick.bind(this)}>
        {this.props.text}
      </p>
    );
  }

  private onClick(event) {
    event.preventDefault();

    this.setState({
      index: 1,
    });
  }
}

ReactDOM.render(<App text="Hello, World!" />, document.getElementById('app'));
