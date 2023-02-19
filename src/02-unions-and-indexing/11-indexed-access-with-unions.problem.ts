import { Equal, Expect } from '../helpers/type-utils';

export const programModeEnumMap = {
  GROUP: 'group',
  ANNOUNCEMENT: 'announcement',
  ONE_ON_ONE: '1on1',
  SELF_DIRECTED: 'selfDirected',
  PLANNED_ONE_ON_ONE: 'planned1on1',
  PLANNED_SELF_DIRECTED: 'plannedSelfDirected',
} as const;

/**
 * Passing in a union to the index access for the type typeof programModeEnumMap
 * This returns another union from which we exclude
 */
type ProgramModeType = typeof programModeEnumMap[keyof typeof programModeEnumMap];

export type IndividualProgram = Exclude<ProgramModeType, 'group' | 'announcement'>;

/**
 * Also works
 * Exclude "GROUP" | "ANNOUNCEMENT" and use that union to index into typeof programModeEnumMap
 */
export type IndividualProgram2 = typeof programModeEnumMap[Exclude<keyof typeof programModeEnumMap, 'GROUP' | 'ANNOUNCEMENT'>];

type tests = [
  Expect<Equal<IndividualProgram, '1on1' | 'selfDirected' | 'planned1on1' | 'plannedSelfDirected'>>,
  Expect<Equal<IndividualProgram2, '1on1' | 'selfDirected' | 'planned1on1' | 'plannedSelfDirected'>>
];
