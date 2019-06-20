let quotes = [];
let quoteText = document.getElementById("quote-text");
let person = document.getElementById("person");

var xhr = new XMLHttpRequest();
xhr.open('GET', './quotes.json', true);
xhr.responseType = 'blob';

xhr.onload = function (e) {
    if (this.status == 200) {
        var file = new File([this.response], 'temp');
        var fileReader = new FileReader();
        fileReader.addEventListener('load', function () {
            quotes = JSON.parse(this.result);
        });
        fileReader.readAsText(file);
    }
}
xhr.send();


document.getElementById("new-quote").addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let getQuote = quotes[randomNumber];

    quoteText.innerHTML = getQuote["quote"];
    person.innerHTML = getQuote["person"];
});
