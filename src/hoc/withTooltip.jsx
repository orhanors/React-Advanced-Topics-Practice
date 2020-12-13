import React, { useState } from "react";

function withTooltip(WrappedComponent) {
	return function WithTooltip(props) {
		const [color, setColor] = useState({});
		return (
			<div
				onMouseOver={() =>
					setColor({ color: "green", cursor: "pointer" })
				}
				onMouseOut={() => setColor({ color: "black", cursor: "auto" })}>
				<WrappedComponent {...props} color={color} />
			</div>
		);
	};
}

export default withTooltip;
