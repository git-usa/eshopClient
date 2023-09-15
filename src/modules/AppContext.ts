import {createContext} from "react";
import {TypeCart} from "../interfaces/TypeCart";

interface Type{
	cartItems : TypeCart;
	setCartItem : (name : string, qty : number) => void;
	changeComponent : (name : string, extra? : any) => void;
}

const AppContext = createContext<Type>(
	{
		cartItems       : {},
		setCartItem     : (name : string, qty : number) => {},
		changeComponent : (name : string, extra? : any) => {}
	}
);

export default AppContext;