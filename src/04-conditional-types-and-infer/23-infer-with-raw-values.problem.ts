import { Equal, Expect } from "../helpers/type-utils";

/**
 * check if T extends a given shape and infer its type
 */
type GetDataValue<T> = T extends { data: infer U } ? U : never;
type GetDataValueV2<T> = T extends { data: any } ? T["data"] : never;

type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue<string>, never>>,

  Expect<Equal<GetDataValueV2<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValueV2<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValueV2<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValueV2<string>, never>>
];
