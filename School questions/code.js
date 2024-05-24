let questions = [
    {
      text: '49 + 52?',
      variants: ['101', '100', '89'],
      right: 0
    },
    {
      text: '544000 : 80?',
      variants: ['540', '680', '200'],
      right: 1
    },
    {
      text: '15400 : 220?',
      variants: ['70', '365', '100'],
      right: 0
    },
    {
      text: '	853 - 799?',
      variants: ['60', '54', '98'],
      right: 1
    }
];

let html = '';

  questions.forEach((question, index) => {
    html += `<div>
      <p>${question.text}</p>
      ${question.variants.map((variant, i) => `
        <label>
          <input type="radio" name="question${index}" value="${i}">
          ${variant}
        </label>
      `).join('')}
    </div>`;
  });

  document.getElementById('test').innerHTML = html;

  document.getElementById('button').addEventListener('click', function() {
    let answers = questions.map(question => question.right);
    const questionsDivs = document.querySelectorAll('#test > div');
    questionsDivs.forEach((questionDiv, index) => {
      const inputs = questionDiv.querySelectorAll('input[type="radio"]');
      inputs.forEach((input, i) => {
        if (input.checked) {
          if (i === answers[index]) {
            input.parentElement.classList.add('right');
          } else {
            input.parentElement.classList.add('wrong');
          }
        }
      });
    });
  });