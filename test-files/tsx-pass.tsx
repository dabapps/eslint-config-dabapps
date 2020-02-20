import $ from 'jquery';
import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { StateProps } from './ts-fail';

const _LEADING_UNDERSCORE = 'Title';
const PascalCaseTitle = _LEADING_UNDERSCORE;

export interface Props {
  greating: string;
}

export interface SomeProps {
  one: number;
  two: number;
  three?: number;
  four?: number;
  five?: number;
  six: () => void;
  seven?: boolean;
  children?: ReactNode;
}

const SomeCompWithProps = ({
  children,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
}: SomeProps) => (
  <div>
    {one} {two} {three} {four} {five} {six} {seven}
    {children}
  </div>
);

class App extends React.PureComponent<Props, StateProps> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      index: 0,
      arr: ['foo', 'bar'],
      obj: { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7 },
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
      <>
        <p title={PascalCaseTitle} onClick={this.onClick}>
          {this.props.greating}
          Doesn't do what is supposed to do
        </p>

        <SomeCompWithProps
          one={1}
          two={2}
          three={2}
          four={2}
          six={this.doAThing}
        >
          <span>Children</span>
        </SomeCompWithProps>
      </>
    );
  }
}

ReactDOM.render(
  <App greating="Hello, World!" />,
  document.getElementById('app')
);
