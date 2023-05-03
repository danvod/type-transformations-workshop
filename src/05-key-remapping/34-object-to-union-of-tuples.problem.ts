import { Equal, Expect } from "../helpers/type-utils";

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

/**
 * Resulting type is a type in which keys are props of Values
 * and types is a tuple of [PropName, PropType]
 *
 * [keyof Values] at the end is what makes the resulting type a union
 *
 * ValuesAsUnionOfTuples is mapped over and tuples are extracted by indexing into ValuesAsUnionOfTuples
 */
type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]];
}[keyof Values];

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >
];
