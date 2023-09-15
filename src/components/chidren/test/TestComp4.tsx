import {useContext} from "react";
import {CountContext} from "../../parents/Test";

const TestComp4 = () => {
	const count = useContext(CountContext);
	return <div>
		Value of Count In Test Comp 4 : {count.count}
	</div>;
};

export default TestComp4;