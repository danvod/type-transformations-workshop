import { Equal, Expect } from '../helpers/type-utils';

export const fakeDataDefaults = {
  String: 'Default string',
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: 'id',

  complexObj: {
    otherProperty: 'Hello',
  }
};

type FakeDataType = typeof fakeDataDefaults;

/**
 * Extracting property types by indexing into the type by using property name as the key
 */
export type StringType = FakeDataType['String'];
export type IntType = FakeDataType['Int'];
export type FloatType = FakeDataType['Float'];
export type BooleanType = FakeDataType['Boolean'];
export type IDType = FakeDataType['ID'];

/**
 * Also works with nesting
 */
export type NestedStuff = FakeDataType['complexObj']["otherProperty"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>
];
