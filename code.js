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

function isFive() {
    if (input === 5 || input === "5" || input === true) {
        return true;
    } else {
        return false;
    }
}

// function isFive() {
//     return input === 5 || input === "5" || input === true;
// }


