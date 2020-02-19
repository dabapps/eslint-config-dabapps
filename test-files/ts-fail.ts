export interface StateProps {
  index: number;
  arr: Array<string>;
  obj: Record<string, any>;
}

// eslint-disable-next-line prettier/prettier
function foo() {
  const x = 0;
  const y = 1;
  if (x) {
    return 2;
    // eslint-disable-next-line no-else-return
  } else {
    return y;
  }
}

foo();
