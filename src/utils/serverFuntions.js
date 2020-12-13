import axios from "axios";
export const getUsers = async () => {
	try {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/users"
		);
		if (response.status === 200) {
			const data = await response.data;
			return data;
		} else {
			const error = await response.data;
			return error;
		}
	} catch (error) {
		return error;
	}
};
