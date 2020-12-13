import React, { useContext } from "react";
import KeywordContext from "../context/KeywordContext";
import UserListContext from "../context/UserListContext";
import withTooltip from "../hoc/withTooltip";
import CountContext from "../context/CounterContext";

function User(props) {
	const users = useContext(UserListContext);
	const keyword = useContext(KeywordContext);

	const countContext = useContext(CountContext);
	return (
		<div>
			<div>
				count: {countContext.countValue} <br />
				<button onClick={() => countContext.countDispatch("increment")}>
					increment
				</button>
				<button
					disabled={
						countContext.countValue === 0 ? "disabled" : false
					}
					onClick={() => countContext.countDispatch("decrement")}>
					decrement
				</button>
				<button onClick={() => countContext.countDispatch("reset")}>
					reset
				</button>
			</div>
			<hr />
			<li style={props.color}>
				{props.user.name} ---- {keyword}
			</li>
		</div>
	);
}

export default withTooltip(User);
