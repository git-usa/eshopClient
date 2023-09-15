
import {useContext} from "react";
import {CountContext} from "../../parents/Test";

const TestComp1 = () => {
	const count = useContext(CountContext);
	return <div>
		Value of Count In Test Comp 1 : {count.count}
	</div>;
};

export default TestComp1;