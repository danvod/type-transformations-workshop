import { Equal, Expect } from '../helpers/type-utils';

export type Event =
  | {
      type: 'click';
      event: MouseEvent;
    }
  | {
      type: 'focus';
      event: FocusEvent;
    }
  | {
      type: 'keydown';
      event: KeyboardEvent;
    };

/**
 * Extract is a TS utility that will "pluck" out a member of a distributed union by its discriminator
 */
type ClickEvent = Extract<Event, { type: 'click' }>;

type tests = [Expect<Equal<ClickEvent, { type: 'click'; event: MouseEvent }>>];
