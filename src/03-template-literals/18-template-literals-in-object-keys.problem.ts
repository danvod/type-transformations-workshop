import { Equal, Expect } from '../helpers/type-utils';

type TemplateLiteralKey = `${'user' | 'post' | 'comment'}${'Id' | 'Name'}`;

type ObjectOfKeys = {
  [k in TemplateLiteralKey]: string;
};

type ObjectOfKeysV2 = Record<TemplateLiteralKey, string>;

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: string;
        userName: string;
        postId: string;
        postName: string;
        commentId: string;
        commentName: string;
      }
    >
  >,
  Expect<
    Equal<
      ObjectOfKeysV2,
      {
        userId: string;
        userName: string;
        postId: string;
        postName: string;
        commentId: string;
        commentName: string;
      }
    >
  >
];
