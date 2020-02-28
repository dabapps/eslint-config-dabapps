import React from 'react';
import Dom from 'react-dom';

import nooo from '../base/test';

import { foo as fu } from './js-fail';
import { baz as bart } from './imports-pass';

import yaaaaa from '^/base/test-copy';

export const foo = 'bar';
export const baz = 'foo';

export default {
  foo,
  baz,
};
