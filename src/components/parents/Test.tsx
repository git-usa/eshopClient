import TestComp1 from "../chidren/test/TestComp1";
import TestComp2 from "../chidren/test/TestComp2";
import React, {createContext, useState} from "react";
import TestLoadComp from "../chidren/test/TestLoadComp";

const Test = () => {
	const [count, setCount]       = useState(0);
	const [compName, setCompName] = useState<string>("");
	const comp                    = <TestLoadComp name={compName}/>;
	const changeComponent = (name : string) => setCompName(name);
	
	return <CountContext.Provider value={{count, setCount, changeComponent}}>
		<div className="w3-padding">
			<h3>This is Test Page</h3>
			<TestComp1/>
			<TestComp2/>
			{comp}
		</div>
	</CountContext.Provider>;
};

export const CountContext = createContext({count : 0, setCount : (count : number) => {}, changeComponent : (name : string) => {}});

export default Test;