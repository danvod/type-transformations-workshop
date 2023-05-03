import { Equal, Expect } from '../helpers/type-utils';

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

/**
 * Similar to previous exercise, with addition of the "as" that enables renaming the mapped props
 * Capitalize is a TS utility function to maintain camelCase
 */
type AttributeGetters = {
  [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
};

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        getFirstName: () => string;
        getLastName: () => string;
        getAge: () => number;
      }
    >
  >
];
