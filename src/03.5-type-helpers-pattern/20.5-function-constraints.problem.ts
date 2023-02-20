import { Equal, Expect } from '../helpers/type-utils';

/**
 * Constrain T to a function that accepts any number of arguments and returns anything (or void)
 */
type GetParametersAndReturnType<T extends (...args: any) => any> = {
  params: Parameters<T>;
  returnValue: ReturnType<T>;
};

type tests = [
  Expect<Equal<GetParametersAndReturnType<() => string>, { params: []; returnValue: string }>>,
  Expect<Equal<GetParametersAndReturnType<(s: string) => void>, { params: [string]; returnValue: void }>>,
  Expect<Equal<GetParametersAndReturnType<(n: number, b: boolean) => number>, { params: [number, boolean]; returnValue: number }>>
];
