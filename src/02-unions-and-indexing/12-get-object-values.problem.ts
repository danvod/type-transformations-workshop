import { Equal, Expect } from '../helpers/type-utils';

const frontendToBackendEnumMap = {
  singleModule: 'SINGLE_MODULE',
  multiModule: 'MULTI_MODULE',
  sharedModule: 'SHARED_MODULE',
} as const;

//  Get the type of the enumMap object
type EnumMap = typeof frontendToBackendEnumMap;

//  Index into EnumMap by using all of the keys of that object
type BackendModuleEnum = EnumMap[keyof EnumMap];

// Same as
type BackendModuleEnum2 = EnumMap['multiModule' | 'singleModule' | 'sharedModule'];

type tests = [
  Expect<Equal<BackendModuleEnum, 'SINGLE_MODULE' | 'MULTI_MODULE' | 'SHARED_MODULE'>>,
  Expect<Equal<BackendModuleEnum2, 'SINGLE_MODULE' | 'MULTI_MODULE' | 'SHARED_MODULE'>>
];
