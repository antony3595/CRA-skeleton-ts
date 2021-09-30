import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { AppState } from "../../../store/store";
import { createLoadingSelector } from "../../../store/reducers/loadingReducer";
import { FETCH_USERS } from "../../../store/actionTypes/contentAT";
import { fetchUsersRequest } from "../../../store/actionCreators/contentAC";
import { User } from "../../../types/api/user";
import fetchUsersThunk from "../../../store/middlewares/usersMiddleware";
import { createErrorMessageSelector } from "../../../store/reducers/errorReducer";

interface HomeViewProps {
	isDataFetching: boolean;
	users: User[];
}

const HomeView = (props: HomeViewProps) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsersThunk());
	}, [dispatch]);
	return (
		<div className="page__content">
			<div className="page__section">
				{props.isDataFetching ? (
					<div>Loading</div>
				) : (
					<table>
						<tbody>
							{props.users.map((user) => (
								<tr key={user.username}>
									<td>{user.username}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

const loadingSelector = createLoadingSelector([FETCH_USERS]);
const errorSelector = createErrorMessageSelector([FETCH_USERS]);

const mapDispatchToProps = {
	fetchUsers: fetchUsersRequest,
};

const mapStateToProps = (state: AppState) => ({
	isDataFetching: loadingSelector(state.loading),
	errorMessage: errorSelector(state.errors),
	users: state.content.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
