import React, { useReducer } from "react";

function useCount() {
	const initialState = 0;
	const reducer = (state, action) => {
		switch (action) {
			case "increment":
				return state + 1;
			case "decrement":
				return state - 1;
			case "reset":
				return initialState;
			default:
				return state;
		}
	};
	const countArray = useReducer(reducer, initialState);
	return countArray; //[count,dispatch]
}

export default useCount;

/**
 * 1- useReducer takes 2 prameters --> reducer function,initial state
 * 2- useReducer returns an array with two values ---> currentState,dispatch function
 * 3- reducer function takes two parameter ---> state,action
 * 4- we should specify action paramater when we are calling dispatch (dispatch(action))
 */
