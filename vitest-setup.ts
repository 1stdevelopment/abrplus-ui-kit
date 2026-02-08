import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'util';
import { beforeAll } from 'vitest';

import { AbrplusUIKit } from './src/configs';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

beforeAll(() => {
  AbrplusUIKit.config();
});
