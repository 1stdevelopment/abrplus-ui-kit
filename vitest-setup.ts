import '@testing-library/jest-dom';
import { AbrplusUIKit } from 'abrplus-ui-kit';
import { TextDecoder, TextEncoder } from 'util';
import { beforeAll } from 'vitest';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

beforeAll(() => {
  AbrplusUIKit.config();
});
