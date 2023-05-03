import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

/**
 * Key in keyof Attributes -> get the union of all the keys of Attributes
 */
type AttributeGetters = {
  //  firstName:  Attributes["firstName"]
  //  lastName:   Attributes["lastName"]
  //  age:        Attributes["age"]
  [Key in keyof Attributes]: () => Attributes[Key]
};

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        firstName: () => string;
        lastName: () => string;
        age: () => number;
      }
    >
  >,
];
