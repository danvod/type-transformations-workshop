import { Equal, Expect } from "../helpers/type-utils";

// as const to get the literal values out of the array
const fruits = ["apple", "banana", "orange"] as const;

type AppleOrBanana = typeof fruits[0 | 1];

//  Get a union of all the members of the array
type Fruit = typeof fruits [number];

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];
