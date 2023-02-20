import { Equal, Expect } from "../helpers/type-utils";

/**
 * Constrain the type T to a string
 * Without the type constraint, TRoute is inferred as unknown
 */
type AddRoutePrefix<TRoute extends string> = `/${TRoute}`;


type tests = [
  Expect<Equal<AddRoutePrefix<"">, "/">>,
  Expect<Equal<AddRoutePrefix<"about">, "/about">>,
  Expect<Equal<AddRoutePrefix<"about/team">, "/about/team">>,
  Expect<Equal<AddRoutePrefix<"blog">, "/blog">>,
  // @ts-expect-error
  AddRoutePrefix<boolean>,
  // @ts-expect-error
  AddRoutePrefix<number>,
];
