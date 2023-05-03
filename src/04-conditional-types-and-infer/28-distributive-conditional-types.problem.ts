import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

/**
 * When a union type is passed in to a generic, it gets distributed
 * T extends "apple" | "banana" will "filter-out" all members of the union that don't satisfy that condition,
 * leaving just "apple" | "banana"
 */
type GetAppleOrBanana<T> = T extends "apple" | "banana" ? T : never;

type AppleOrBanana = GetAppleOrBanana<Fruit>;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
