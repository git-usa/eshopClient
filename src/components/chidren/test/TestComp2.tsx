import {useContext} from "react";
import {CountContext} from "../../parents/Test";

const TestComp2 = () => {
	const count = useContext(CountContext);
	return <div>
		<h5>Actions from Test Comp 2</h5>
		<button onClick={() => count.setCount(count.count + 1)}>Change Count</button>
		<button onClick={() => count.changeComponent("test3")}>Load Component 3</button>
		<button onClick={() => count.changeComponent("test4")}>Load Component 4</button>
	</div>;
};

export default TestComp2;