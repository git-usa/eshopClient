import TestComp3 from "./TestComp3";
import {useContext, useEffect} from "react";
import {CountContext} from "../../parents/Test";
import TestComp4 from "./TestComp4";

const TestLoadComp = ({name} : {name : string}) => {
	const count = useContext(CountContext);
	/*useEffect(() => {
	 console.info(count.count);
	 }, [count.count]);*/
	
	switch(name){
		case "test3":
			return <TestComp3 key={count.count}/>;
		case "test4":
			return <TestComp4 key={count.count}/>;
	}
	return <div>Value of Count in Test Load Comp : {count.count}</div>;
};

export default TestLoadComp;