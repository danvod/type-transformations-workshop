import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

type GetParserResult<T> = T extends { parse: () => infer TRes } // If T is a type that has a parse method, infer its Type
  ? TRes
  : T extends () => infer TRes // if T is a function, infer its type
  ? TRes
  : T extends { extract: () => infer TRes } // if T is a type with an extract method, infer its type
  ? TRes
  : never;
type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>
];
