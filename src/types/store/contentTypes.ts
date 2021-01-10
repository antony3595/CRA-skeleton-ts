import * as contentActions from "../../store/actionCreators/contentAC";
import { InferValueTypes } from "./index";
import { User } from "../api/user";

export interface ContentState {
	readonly users: User[];
}

export type ContentAction = ReturnType<InferValueTypes<typeof contentActions>>;
