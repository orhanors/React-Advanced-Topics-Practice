import React, { useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ColorChangeContext from "./context/ColorChangeContext";
import CountContext from "./context/CounterContext";
import KeywordContext from "./context/KeywordContext";
import useCount from "./utils/useCount";
import useColorChange from "./utils/useColorChange";

function App(props) {
	const [keyword, setKeyword] = useState("");
	const [count, dispatch] = useCount();
	const [colorStyle, colorDispatch] = useColorChange();
	return (
		<div>
			<ColorChangeContext.Provider
				value={{
					colorStyle: colorStyle,
					colorDispatch: colorDispatch,
				}}>
				<NavBar
					value={keyword}
					handleOnChange={(e) => setKeyword(e.target.value)}
				/>
			</ColorChangeContext.Provider>

			<KeywordContext.Provider value={keyword}>
				<CountContext.Provider
					value={{ countValue: count, countDispatch: dispatch }}>
					<Home />
				</CountContext.Provider>
			</KeywordContext.Provider>
		</div>
	);
}

export default App;
