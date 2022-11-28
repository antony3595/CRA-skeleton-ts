import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import config from "../../../config";
import { RootState } from "../store";

export interface AppState {
	stateVersion: number;
}

const initialState: AppState = {
	stateVersion: config.stateVersion,
};

const setStateVersionAction = createAction<number>("SET_STATE_VERSION");

export const appSlice = createSlice({
	name: "app",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setStateVersion: (state, action: PayloadAction<number>) => {
			state.stateVersion = action.payload;
		},
	},
	// The `extraReducers` field lets the slice handle actions defined elsewhere,
	// including actions generated by createAsyncThunk or in other slices.
	extraReducers: (builder) => {
		builder.addCase(setStateVersionAction, (state, action) => {
			state.stateVersion = action.payload;
		});
	},
});

export const { setStateVersion } = appSlice.actions;

export const selectStateVersion = (state: RootState) => state.app.stateVersion;

export default appSlice.reducer;