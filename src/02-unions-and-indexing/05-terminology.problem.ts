/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

/**
 * Discriminated union where "type" is the "discriminator"
 * Discriminator is a common key shared among all members of the union
 */
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

const getUnion = (result: A) => {
  if(result.type === 'a') {
    //  we have access to "a"
    result.a = 'something';
  }

  // incorrect - Property 'a' does not exist on type 'A'.
  result.a = 'something';
}


//  Union
type B = "a" | "b" | "c";

//  Enum
enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
