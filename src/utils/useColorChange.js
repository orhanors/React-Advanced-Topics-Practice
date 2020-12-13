import React, { useReducer } from "react";

function useColorChange() {
	const initialState = {};

	const reducer = (state, action) => {
		switch (action) {
			case "green":
				return { color: "green" };
			case "red":
				return { color: "red" };
			default:
				return "black";
		}
	};
	const colorArray = useReducer(reducer, initialState);
	return colorArray;
}

export default useColorChange;
