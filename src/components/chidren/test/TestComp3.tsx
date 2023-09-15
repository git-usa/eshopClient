import {useContext} from "react";
import {CountContext} from "../../parents/Test";

const TestComp3 = () => {
	const count = useContext(CountContext);
	return <div>
		Value of Count In Test Comp 3 : {count.count}
	</div>;
};

export default TestComp3;