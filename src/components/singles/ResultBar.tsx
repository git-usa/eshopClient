import TypeResult from "../../interfaces/TypeResult";

const ResultBar = ({id, text, type} : TypeResult) => {
	const typeClass = () => {
		switch(type){
			case "info":
				return "la-info";
			case "error":
				return "la-error";
			case "pass":
				return "la-pass";
			default:
				return "";
		}
	};
	
	return <><div className={`la-shrink ${typeClass()}`}>{text}</div></>;
};

export default ResultBar;