function calculate() {
    let price = Number(document.getElementById('price').value);
    let tipPercent = Number(document.getElementById('tipPercent').value);
    let numberOfPeople = Number(document.getElementById('numberOfPeople').value);

    let tip = price * (tipPercent / 100);
    let totalAmount = price + tip;
    let tipPerPerson = tip / numberOfPeople;
    let totalPerPerson = price / numberOfPeople + tipPerPerson;

    document.getElementById("result").style.display = "block";
    document.getElementById("tip").innerHTML = tip.toFixed(2);
    document.getElementById("totalAmount").innerHTML = totalAmount.toFixed(2);
    document.getElementById('tipPerPerson').innerHTML = tipPerPerson.toFixed(2);
    document.getElementById("totalPerPerson").innerHTML = totalPerPerson.toFixed(2);
}

document.getElementById('calculate').addEventListener('click', function (e) {
    e.preventDefault();
    calculate();
});