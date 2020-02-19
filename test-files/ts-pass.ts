const getMaNumberFunction = (value: number, ...rest: Array<number>): number => {
  return value + rest.reduce((acc: number, curr: number) => acc + curr);
};

const bazz = {
  baz: 'baz',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const anObject = {
  ...bazz,
  foo: 'fo',
  bar: 'bat',
};

getMaNumberFunction(3, 4, 2, 1);
