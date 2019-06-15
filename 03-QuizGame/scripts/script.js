let questions = [];
let questionIndex = 0;

function loadQuestion() {
    if (questionIndex < questions.length) {
        document.getElementById("question").innerHTML = questions[questionIndex].question;
        document.getElementById("firstAnswer").innerHTML = questions[questionIndex].firstAnswer.value;
        document.getElementById("secondAnswer").innerHTML = questions[questionIndex].secondAnswer.value;
        document.getElementById("thirdAnswer").innerHTML = questions[questionIndex].thirdAnswer.value;
        document.getElementById("fourthAnswer").innerHTML = questions[questionIndex].fourthAnswer.value;
    }
}

function checkAnswer() {
    if (questionIndex < questions.length) {
        let answer = questions[questionIndex][this.id.toString()];

        if (answer.isTrue) {
            questionIndex++;
            loadQuestion();
            checkIfWin();
            const btns = document.getElementsByTagName("button");
            for (let i = 0; i < btns.length; i++) {
                btns[i].disabled = false;
            }
        }
        else {
            this.disabled = true;
        }
    }
}

function checkIfWin() {
    if (questionIndex === questions.length) {
        alert("Congrats! You win!");
        location.reload();
    }
}

function readJSON() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './questions.json', true);
    xhr.responseType = 'blob';
    xhr.onload = function (e) {
        if (this.status == 200) {
            var file = new File([this.response], 'temp');
            var fileReader = new FileReader();
            fileReader.addEventListener('load', function () {
                questions = JSON.parse(this.result);
                loadQuestion();
            });
            fileReader.readAsText(file);
        }
    }
    xhr.send();
}

function onLoad() {
    readJSON();

    const btns = document.getElementsByTagName("button");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', checkAnswer);
    }
}

window.onload = onLoad();
