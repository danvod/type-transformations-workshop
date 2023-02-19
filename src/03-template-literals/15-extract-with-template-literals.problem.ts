import { Equal, Expect } from "../helpers/type-utils";

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id" | "/posts/:somethingElse";

//  Extract from Routes the members that match the someString/:id
type DynamicRoutes = Extract<Routes, `${string}/:id`>;

//  Extract from Routes the members that match the someString/:someParam
type DynamicRoutesAny = Extract<Routes, `${string}/:${string}`>;

type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/posts/:id">>,
Expect<Equal<DynamicRoutesAny, "/users/:id" | "/posts/:id" | "/posts/:somethingElse">>];
