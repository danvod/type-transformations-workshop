import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

/**
 * Index into a discriminated union to "pluck" out its discriminators
 */
type EventType = Event["type"]

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
