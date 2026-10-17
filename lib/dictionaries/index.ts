import { en } from "./en";
import { id, type Dictionary } from "./id";

export const dictionaries = { id, en };

export type Locale = keyof typeof dictionaries;
export type { Dictionary };
