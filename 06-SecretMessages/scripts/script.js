const encodeButton = document.getElementById("encodeMessage");
const decodeButton = document.getElementById("decodeMessage");

function encodeMessage() {
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
    let outputResult = "";

    for (let i = 0; i < input.length; i++) {
        let ASCIIOfChar;

        if (i % 2 === 0) {
            ASCIIOfChar = input[i].charCodeAt(0) - 3;
        }
        else {
            ASCIIOfChar = input[i].charCodeAt(0) + 3;
        }

        outputResult += String.fromCharCode(ASCIIOfChar);
    }

    output.value = outputResult;
}

function decodeMessage() {
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
    let outputResult = "";

    for (let i = 0; i < input.length; i++) {
        let ASCIIOfChar;

        if (i % 2 === 0) {
            ASCIIOfChar = input[i].charCodeAt(0) + 3;
        }
        else {
            ASCIIOfChar = input[i].charCodeAt(0) - 3;
        }

        outputResult += String.fromCharCode(ASCIIOfChar);
    }

    output.value = outputResult;
}

encodeButton.addEventListener('click', encodeMessage);
decodeButton.addEventListener('click', decodeMessage);