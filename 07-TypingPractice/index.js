(function () {
    const randomWords = words;
    let currentWords = randomWords(5).join(' ');
    const text = document.getElementsByClassName('text')[0];
    createLetters(currentWords);
    let letters = document.getElementsByClassName('item');
    let currentLetterIndex = 0;
    addStyleToCurrentLetter(currentLetterIndex);


    document.addEventListener('keydown', function (e) {
        const currentLetter = currentWords[currentLetterIndex];

        if (e.key === currentLetter) {
            currentLetterIndex++;

            if (currentLetterIndex === currentWords.length) {
                currentLetterIndex = 0;
                currentWords = randomWords(5).join(' ');
                text.innerHTML = '';
                createLetters(currentWords);
                letters = document.getElementsByClassName('item')
            }

            addStyleToCurrentLetter(currentLetterIndex);
        }
    });

    function addStyleToCurrentLetter(index) {
        if (index !== 0) {
            letters[index - 1].classList = 'item';
        }

        letters[index].className = 'item current';
    }

    function createLetters(words) {
        for (let i = 0; i < words.length; i++) {
            const current = words[i];

            const span = document.createElement('span');
            const textNode = document.createTextNode(current);
            span.className = 'item';

            span.appendChild(textNode);
            text.appendChild(span);
        }
    }
})();


