// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function hiEveryone() {
    return "Hi, everyone!";
}

function sayHello(input) {
    if (input === true || input === false || input === "" || input === undefined) {
        return "Hello, World!";
    }
    return "Hello, " + input + "!";
}

function isFive(input) {
    return (parseFloat(input) == 5);
}

// function isFive() {
//     return input === 5 || input === "5" || input === true;
// }

function isEven(input) {
    return input % 2 === 0;
}


