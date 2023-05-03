import { Equal, Expect } from "../helpers/type-utils";

type Fruit =
  | {
      name: "apple";
      color: "red";
    }
  | {
      name: "banana";
      color: "yellow";
    }
  | {
      name: "orange";
      color: "orange";
    };

// {
//     apple: "apple:red";
//     banana: "banana:yellow";
//     orange: "orange:orange";
// }
type S1 = {
  [F in Fruit as F["name"]]: `${F["name"]}:${F["color"]}`;
};

//  Index into S1 type to get just the union out
type TransformedFruit = S1[Fruit["name"]];

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >
];
