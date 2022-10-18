const string = "This is an assignment that would need to be done between 1 to 2 days."
console.log("Before -", string);

console.log("After - Length", string.length);
console.log("After - First Character", string.charAt(0));
console.log("After - Last Character", string.charAt(string.length - 1));
console.log("After - First 'that' word index", string.indexOf("that"));
console.log("After - Change 'assignment' to 'homework'", string.replace("assignment", "homework"));
console.log("After - Is there 'to' word in string", string.includes("to"));