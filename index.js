// 1. Variable declaration
let name = "John";
const age = 30;
var isStudent = true;

// 2. Function declaration
function greet() {
    console.log("Hello, " + name + "!");
}

// 3. Function invocation
greet();

// 4. Conditional statement
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// 5. Looping statement
for (let i = 0; i < 5; i++) {
    console.log("Count: " + i);
}

// 6. Array declaration
let numbers = [1, 2, 3, 4, 5];

// 7. Array iteration
numbers.forEach(function(number) {
    console.log(number);
});

// 8. Object declaration
let person = {
    name: "Alice",
    age: 25,
};

// 9. Object property access
console.log(person.name);
console.log(person.age);

// 10. Event handling
document.addEventListener("click", function() {
    console.log("Document clicked.");
});

// 11. DOM manipulation
let element = document.getElementById("myElement");
element.innerHTML = "New content";

// 12. Error handling
try {
    // Code that might throw an error
    throw new Error("Something went wrong.");
} catch (error) {
    console.log("Error: " + error.message);
}

// 13. Math operations
let result = Math.sqrt(16);
console.log("Square root: " + result);

// 14. String manipulation
let message = "Hello, World!";
console.log(message.toUpperCase());

// 15. JSON parsing
let json = '{"name":"Bob","age":35}';
let parsedJson = JSON.parse(json);
console.log(parsedJson.name);
console.log(parsedJson.age);

// ... and so on for 50 lines.