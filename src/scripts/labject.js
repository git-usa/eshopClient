/**
 * Count Number of Keys in Object
 * @returns {number}
 */

export const lat_toCount = (obj) => Object.keys(obj).length;

/**
 * Count the Keys in an Object
 * @returns {number}
 */

export const lat_objectCount = (obj) => lat_toCount(obj);

/**
 * Get Array of Keys from Object
 * @returns {string[]}
 */

export const lat_toKeys = (obj) => Object.keys(obj);

/**
 * Get Array of Values from Object
 * @returns {any[]}
 */
export const lat_toValues = (obj) => Object.values(obj);

/**
 * Check if Array is Valid & Have at least Minimum Length
 * @param obj
 * @param minLen
 * @param maxLen
 * @returns {boolean}
 */

export const lat_isValidArray = (obj, minLen = 1, maxLen = 0) => obj
                                                                 && Array.isArray(obj)
                                                                 && obj.length >= minLen
                                                                 && (maxLen > 0 ? obj.length <= maxLen : true);

/**
 * Check if Object is Valid & Have at least Minimum Length
 * @param obj
 * @param notArray
 * @param minLen
 * @param maxLen
 * @returns {boolean}
 */

export const lat_isValidObject = (obj, notArray = true, minLen = 1, maxLen = 0) => obj
                                                                                   && typeof obj === "object"
                                                                                   && !(obj instanceof String)
                                                                                   && (notArray && !Array.isArray(obj))
                                                                                   && Object.keys(obj).length >= minLen
                                                                                   && (maxLen > 0 ? Object.keys(obj).length <= maxLen : true);

/**
 * Check if String is Valid JSON representation
 * @returns {boolean}
 */

export const lat_isValidJsonString = (obj) => {
	try{
		if(!obj || !(obj instanceof String)){
			console.error("Not a Valid String");
			return false;
		}
		JSON.parse(obj);
		return true;
	} catch(e){
		console.error(e);
		return false;
	}
};

/**
 * Loop through each item in Object
 * @param obj
 * @param next
 */

export const lat_eachProperty = (obj, next) => {
	
	if(!lat_isValidObject(obj))
		return;
	
	for(let key in obj){
		if(!obj.hasOwnProperty(key))
			continue;
		if(next && typeof next === "function"){
			next(key, obj[key]);
		}
	}
};

/**
 * Alias of _eachProperty
 * Loop through each item in Object
 * @param obj
 * @param next
 */

export const lat_eachItem = (obj, next) => lat_eachProperty(obj, next);

/**
 * Loop & process each item in object through next & map the returned result into Array
 * @param obj       Object to Loop & Process
 * @param next      Returning Function where each item will be sent processed
 * @returns {[]}
 */

export const lat_mapToArray = (obj, next) => {
	const map = [];
	
	if(!(next && typeof next === "function")){
		console.error("In _mapToArray, next should be a function, but is empty or other type");
		return map;
	}
	
	if(!lat_isValidObject(obj)){
		console.error("In _mapToArray, obj should be an object, but is empty or other type");
		return map;
	}
	
	for(let key in obj){
		if(!obj.hasOwnProperty(key)) continue;
		map.push(next(key, obj[key]));
	}
	
	return map;
};

/**
 * Clone an Array
 * @param arr
 * @returns {*}
 */
export const lat_cloneArray = (arr) => arr.filter(() => true);

/**
 * Alias for _cloneArray
 * Copy an Array
 * @returns {[]}
 */

export const lat_copyArray = (arr) => lat_cloneArray(arr);

/**
 * Clone an Object
 * @param obj
 * @returns {*}
 */
export const lat_cloneObject = (obj) => {return {...obj};};

/**
 * Alias for _cloneObject
 * @param obj
 * @returns {{}}
 */
export const lat_copyObject = (obj) => lat_cloneObject(obj);

export const lat_sortBy = (obj, field) => {
	const newObj = [];
	lat_eachItem(obj, (k, v) => newObj.push([k, v, v[field]]));
	
	const sortObj = newObj.sort((a, b) => a[2] - b[2]);
	const sorted  = {};
	sortObj.forEach(obj => {
		sorted[obj[0]] = obj[1];
	});
	
	return sorted;
};

export const lat_renameKey = (obj, oldKey, newKey) => {delete (Object.assign(obj, {[newKey] : obj[oldKey]}))[oldKey];};

export const lat_reverseArray = (arr) => {
	let length = arr.length;
	if(!arr || !length) return null;
	
	let index    = 0;
	const newArr = [];
	while(length >= 1) newArr[index++] = arr[--length];
	return newArr;
};

export const lat_capital = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export const lat_mongoDate = (dateValue, toUtc = true, separator = "-") => {
	if(isNaN(Date.parse(dateValue))) return null;
	const date       = new Date(!toUtc ? dateValue : dateValue.replace(/-/g, "\/").replace(/T.+/, ""));
	const dateFormat = {
		date      : date.toLocaleString("en-us"),
		weekday   : date.toLocaleString("en-us", {weekday : "long"}),
		monthName : date.toLocaleString("en-us", {month : "long"}),
		//
		day   : ("0" + date.toLocaleString("en-us", {day : "numeric"})).slice(-2),
		month : ("0" + date.toLocaleString("en-us", {month : "numeric"})).slice(-2),
		year  : date.toLocaleString("en-us", {year : "numeric"}),
		//
		hour   : date.toLocaleString("en-us", {hour : "numeric"}).split(" ")[0].trim(),
		minute : ("0" + date.toLocaleString("en-us", {minute : "numeric"})).slice(-2),
		second : ("0" + date.toLocaleString("en-us", {second : "numeric"})).slice(-2),
		// second : date.toLocaleString("en-us", {second : "numeric"}),
		merid : date.toLocaleString("en-us", {hour : "numeric"}).split(" ")[1].trim(),
		//
		HOUR : date.toLocaleString("en-us", {hour12 : false}).split(",")[1].split(":")[0].trim(),
		//
		timeZone       : date.toLocaleString("en-us", {timeZoneName : "short"}),
		htmlInput      : "",
		htmlInputLocal : "",
		monthFormat    : "",
		yearFormat     : "",
		dayFormat      : "",
		dayMonthFormat : "",
		time           : "",
		time24         : ""
	};
	
	dateFormat.dayFormat      = dateFormat.day + separator + dateFormat.month + separator + dateFormat.year;
	dateFormat.yearFormat     = dateFormat.year + separator + dateFormat.month + separator + dateFormat.day;
	dateFormat.monthFormat    = dateFormat.monthName + " " + dateFormat.day + ", " + dateFormat.year;
	dateFormat.dayMonthFormat = dateFormat.day + separator + (dateFormat.monthName) + separator + dateFormat.year;
	
	dateFormat.time   = dateFormat.hour + ":" + dateFormat.minute + ":" + dateFormat.second + " " + dateFormat.merid;
	dateFormat.time24 = dateFormat.HOUR + ":" + dateFormat.minute + ":" + dateFormat.second;
	
	dateFormat.htmlInput      = dateFormat.yearFormat;
	dateFormat.htmlInputLocal = dateFormat.yearFormat + "T" + dateFormat.time24;
	
	return dateFormat;
};

export const lat_trim = (text, charToRemove) => {
	while(text.charAt(0) === charToRemove) text = text.length > 1 ? text.substring(1) : "";
	while(text.charAt(text.length - 1) === charToRemove) text = text.length > 1 ? text.substring(0, text.length - 1) : "";
	return text;
};

export const lat_getCookie = (cookieName) => {
	let cookieArr = document.cookie && document.cookie.split(";");
	if(!cookieArr) return undefined;
	for(let index = 0; index < cookieArr.length; index++){
		let cookiePair = cookieArr[index].split("=");
		if(cookieName === cookiePair[0].trim()){
			return decodeURIComponent(cookiePair[1]);
		}
	}
};

export const lat_writeCookie = (cookieName, value) => {
	const expires   = "";
	document.cookie = cookieName + "=" + value + expires + "; path=/";
};

export const lat_deleteCookie = (cookieName) => {
	document.cookie = `${cookieName}=;path=/`;
};

export const lat_onEnter = (event, next) => {
	if(event.key === "Enter" || event.keyCode === 13){
		next();
	}
};

/**
 * Get URL Parameters
 * @param paramName
 * @return {string|module:url.URL}
 */
export const lat_getUrlParams = (paramName = null) => {
	const url = new URL(window.location.href);
	if(paramName){
		return url.searchParams.get(paramName);
	}
	return url;
};

export const lat_getInput = (inputId) => {
	return document.getElementById(inputId);
};

export const lat_getInputValue = (inputId) => {
	const input = lat_getInput(inputId);
	if(!input) return null;
	return input.value;
};

export const lat_focusInput = (inputId) => lat_getInput(inputId)?.focus();

export const lat_isValidString = (value) => value && value.length > 0;

export const lat_screenWidth    = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
export const lat_screenHeight   = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
export const lat_onScreenResize = (next) => window.addEventListener("resize", () => next(lat_screenWidth(), lat_screenHeight()));
export const lat_scrollTo       = (x, y) => window.scrollTo(x, y);