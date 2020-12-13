import React, { useState, useContext } from "react";
import { Input } from "@material-ui/core";
import withTooltip from "../hoc/withTooltip";
import ColorChangeContext from "../context/ColorChangeContext";
function NavBar(props) {
	const color = useContext(ColorChangeContext);
	return (
		<div>
			<h3 style={color.colorStyle}>Navbar</h3>
			<button onClick={() => color.colorDispatch("green")}>Green</button>

			<button onClick={() => color.colorDispatch("red")}>red</button>

			<br />
			<Input value={props.value} onChange={props.handleOnChange} />
		</div>
	);
}

export default withTooltip(NavBar);
