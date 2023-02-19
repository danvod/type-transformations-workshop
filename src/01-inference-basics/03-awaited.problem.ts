import { Equal, Expect } from '../helpers/type-utils';

const getUser = () => {
  return Promise.resolve({
    id: '123',
    name: 'John',
    email: 'john@example.com',
  });
};

type JusTheReturnType = ReturnType<typeof getUser>;

/**
 * Unwraps the promise returned by ReturnType<typeof getUser>
 */
type ReturnValue = Awaited<ReturnType<typeof getUser>>;

type tests = [
  Expect<Equal<JusTheReturnType, Promise<{ id: string; name: string; email: string }>>>,
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>
];
