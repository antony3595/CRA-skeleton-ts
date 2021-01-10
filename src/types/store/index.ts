import "./userTypes";

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export interface Action<T, P> {
	readonly type: T;
	readonly payload: P;
}
