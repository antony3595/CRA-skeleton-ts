import React, { useEffect } from "react";
import { connect } from "react-redux";
import { AppState } from "../../../store/store";
import { createLoadingSelector } from "../../../store/reducers/loadingReducer";
import { FETCH_USERS } from "../../../store/actionTypes/contentAT";
import { fetchUsersRequest } from "../../../store/actionCreators/contentAC";
import { User } from "../../../types/api/user";

interface HomeViewProps {
	isDataFetching: boolean;
	users: User[];
	fetchUsers: () => {};
}

const HomeView = (props: HomeViewProps) => {
	useEffect(() => {
		props.fetchUsers();
	}, [props.fetchUsers]);
	return (
		<div className="page__content">
			<div className="page__section">
				{props.isDataFetching ? (
					<div>Loading</div>
				) : (
					<table>
						{props.users.map((user, index) => (
							<tr>
								<td>{user.username}</td>
							</tr>
						))}
					</table>
				)}
			</div>
		</div>
	);
};

const loadingSelector = createLoadingSelector([FETCH_USERS]);

const mapDispatchToProps = {
	fetchUsers: fetchUsersRequest,
};

const mapStateToProps = (state: AppState) => ({
	isDataFetching: loadingSelector(state.loading),
	users: state.content.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
