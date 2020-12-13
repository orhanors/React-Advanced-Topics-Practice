import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import { getUsers } from "../utils/serverFuntions";
import UserListContext from "../context/UserListContext";
function Home(props) {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUserList();
	}, []);

	const getUserList = async () => {
		const userList = await getUsers();
		setUsers(userList);
	};
	return (
		<div>
			<UserListContext.Provider value={users}>
				<UserList />
			</UserListContext.Provider>
		</div>
	);
}

export default Home;
