import { Equal, Expect } from "../helpers/type-utils";

/**
 * Type Helper that can either be a T or null/undefined
 */
type Maybe<T> = T | null | undefined;

type tests = [
  Expect<Equal<Maybe<string>, string | null | undefined>>,
  Expect<Equal<Maybe<number>, number | null | undefined>>,
  Expect<Equal<Maybe<boolean>, boolean | null | undefined>>,
  Expect<Equal<Maybe<null>, null | undefined>>,
];
