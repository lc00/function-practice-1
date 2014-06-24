/*  5. toArray */

var toArray = function(x,y,z){
  return [x,y,z];
}

console.log(toArray(1,10,100));


/* 6. startsWithA */

var startsWith = function(word){
	return word[1].toLowerCase() === "a";
}

console.log(startsWith("aardvark"));
console.log(startsWith("bear"));


/* 7. excite */

var excite = function(word){
	return word + "!!!";
}

console.log(excite("yes"));


/* 8. sun */
var sun = function(word){

	return word.indexOf("sun") >= 0;

}

console.log(sun("yeah sun"));
console.log(sun("catapult"));
console.log(sun("sun"));

/* 9. tiny  */
var tiny = function(x){
	return 0<x && x<1;
}

console.log(tiny(0.3));


/* 10. getSeconds  */
var getSeconds = function(x){
	var time = x.split(":");

	return +time[0]*60 + (+time[1]); 
}

console.log(getSeconds("10:30"));