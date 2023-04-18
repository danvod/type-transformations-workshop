import { Equal, Expect } from "../helpers/type-utils";

const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();
  return {
    props: {
      json,
    },
  };
};

/**
 * Check T is a function that returns a Promise with "props",
 * if so, infer the props
 */

type InferPropsFromServerSideFunction<T> = T extends () => Promise<{
  props: infer U;
}>
  ? U
  : never;

type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >
];
