import React from "react";
import Home from "./components/parents/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Invalid from "./components/parents/Invalid";
import Test from "./components/parents/Test";

function App(){
	return <BrowserRouter>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/home" element={<Home/>}/>
			<Route path="/test" element={<Test/>}/>
			<Route path="*" element={<Invalid/>}/>
		</Routes>
	</BrowserRouter>;
}

export default App;
