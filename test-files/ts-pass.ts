function getMaNumberFunction(value: number, ...rest: Array<number>) {
  return value + rest.reduce((acc: number, curr: number) => acc + curr);
}

getMaNumberFunction(3, 4, 2, 1);
