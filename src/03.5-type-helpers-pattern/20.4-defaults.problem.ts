import { Equal, Expect } from '../helpers/type-utils';

/**
 * When TError is given a default value of undefined, it does not have to be specified as the 2nd generic type argument in Test1
 */
type CreateDataShape<TData, TError = undefined> = {
  data: TData;
  error: TError;
};

type tests = [
  Expect<
    Equal<
      CreateDataShape<string>,
      {
        data: string;
        error: undefined;
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<boolean, SyntaxError>,
      {
        data: boolean;
        error: SyntaxError;
      }
    >
  >
];
