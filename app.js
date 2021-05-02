const form = document.querySelector('.quiz-form');

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
        console.log(score);
    });
});