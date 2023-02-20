/**
 * T is a type that requires at least one element of type T with more optional arguments
 */
type NonEmptyArray<T> = [T, ...T[]];

/**
 * Require at least 2 array items
 */
type NonEmptyArrayAtLeast2<T> = [T, T, ...T[]];

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

// @ts-expect-error
makeEnum([]);
