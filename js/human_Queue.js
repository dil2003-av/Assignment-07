const letters = ["A", "B", "C", "D", "E", "F"];
let timeoutId = null;

function rotateLetter() {
    const letterDivs = document.querySelectorAll('.letter');

    const lastLetter = letters.pop();
    letters.unshift(lastLetter);

    letterDivs.forEach((letterDiv, i) => {
        letterDiv.textContent = letters[i];
    });

    timeoutId = setTimeout(rotateLetter, 1000);
}

document.querySelector('.start-btn').addEventListener('click', () => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    rotateLetter();
});

document.querySelector('.stop-btn').addEventListener('click', () => {
    clearTimeout(timeoutId);
    // timeoutId = null; 
});