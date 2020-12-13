import React, { useContext } from "react";
import KeywordContext from "../context/KeywordContext";
import UserListContext from "../context/UserListContext";
import User from "./User";

function UserList(props) {
	const users = useContext(UserListContext);
	const keyword = useContext(KeywordContext);

	return (
		<div>
			you typed: {keyword}
			<ul>
				{users.map((user) => (
					<User user={user} />
				))}
			</ul>
		</div>
	);
}

export default UserList;
