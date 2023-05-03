import { Equal, Expect } from "../helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

/**
 * Match any property that contains either id or Id
 */
type ExtractId = `${string}${"id" | "Id"}${string}`;

/**
 * This can also work by taking in an a union
 */
type ExtractKey<T extends string> = `${string}${T}${string}`;

type OnlyIdKeys<T> = {
  /**
   * Use as to remap K with the addition of a conditional type
   * Only those properties that satisfy the "ExtractId" are considered as valid keys
   */
  [K in keyof T as K extends ExtractId ? K : never]: T[K];
};

type OnlyIdKeys2<T> = {
  [K in keyof T as K extends ExtractKey<"id" | "Id"> ? K : never]: T[K];
};

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<
    Equal<
      OnlyIdKeys2<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
