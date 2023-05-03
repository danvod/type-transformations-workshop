import { Equal, Expect } from "../helpers/type-utils";

type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };

type RouteDiscriminator = Route["route"];

//  Will extract the first memeber of the discriminated union (with the search object)
type ExtractSearch = Extract<Route, { route: "/" }>;

//  Indexing into that will give only the actual search object type
type ExtractSearchOnly = Extract<Route, { route: "/" }>["search"];

/**
 * K in Route['route'] will get all the keys ->  "/" | "/about" | "/admin" | "/admin/users"
 *
 * Extract<Route, {route: K}>["search"]
 *  - Same as ExtractSearchOnly, but K whish is the union of keys is used to get the required items
 *
 */
type RoutesObject = {
  [K in Route["route"]]: Extract<Route, { route: K }>["search"];
};

/**
 * Alternative
 * Map over Routes type and for each entry do
 * Route["route"]: K["search"]
 */
type RoutesObject2 = {
  [K in Route as K["route"]]: K["search"];
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": {};
        "/admin": {};
        "/admin/users": {};
      }
    >
  >,
  Expect<
    Equal<
      RoutesObject2,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": {};
        "/admin": {};
        "/admin/users": {};
      }
    >
  >
];
