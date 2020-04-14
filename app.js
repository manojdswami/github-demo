const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');

const totalPlace = document.querySelector('#total');

form.addEventListener('submit', e => {
    e.preventDefault();
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    let score = 0;
    userAnswers.forEach((uAnswer, index) => {
        if(uAnswer === correctAnswers[index]){
            score += 25;
        }
    });
    
    scrollTo(0,0);
    result.classList.remove('d-none');
    let counter = 0;
    const timer = setInterval(() => {
        totalPlace.textContent = `${counter}%`;
        if(counter === score){
            clearInterval(timer);
        }
        counter++;
    },10);
    
});