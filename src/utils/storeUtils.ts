import { Action } from "../types/store";

export const createAction = <T extends string, P>(type: T, payload: P): Action<T, P> => ({ type, payload });
