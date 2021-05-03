const form = document.querySelector('.quiz-form');
const finalResult = document.querySelector('.result');

const correctAnswer = ['B', 'B', 'B', 'B'];

form.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;

    const valueForm = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ];

    valueForm.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
            score += 25;
        };
    });
    
    scrollTo(0, 0);

    finalResult.querySelector('span').textContent = `${score}%`;
    finalResult.classList.remove('d-none');
});