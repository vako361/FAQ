const container = document.querySelector('main');
let active = null;

container.addEventListener('click', function (event) {
    const questionDiv = event.target.closest('.question-answer');

    if (questionDiv) {
        const answer = questionDiv.querySelector('.answer');
        const arrow = questionDiv.querySelector('.arrow');

       
        if (questionDiv === active) {
            if (answer) answer.style.display = "none";
            if (arrow) arrow.style.transform = "rotate(0deg)";
            active = null;
        } else {
      
            if (active) {
                const activeAnswer = active.querySelector('.answer');
                const activeArrow = active.querySelector('.arrow');
                if (activeAnswer) activeAnswer.style.display = "none";
                if (activeArrow) activeArrow.style.transform = "rotate(0deg)";
            }

            
            if (answer) answer.style.display = "block";
            if (arrow) arrow.style.transform = "rotate(180deg)";

            active = questionDiv; 
        }
    }
});
