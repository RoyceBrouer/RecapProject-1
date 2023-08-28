//form
// const submittButton = document.querySelector('[data-js="submitButton"]');
const form = document.querySelector('[data-js="form"]');
const newCardsSection = document.querySelector('[data-js="newCardsSection"]');
const charactersQuestion = document.querySelector(
  '[data-js="charactersQuestion"]'
);
const charactersAnswer = document.querySelector('[data-js="charactersAnswer"]');
const question = document.querySelector('[data-js="question"]');
const answer = document.querySelector('[data-js="answer"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  const newcard = document.createElement("article");
  newcard.classList.add("newCard");
  newcard.innerHTML = `<tag class="tag tag--new">${data.tag}</tag>
<button type="button" class="bookmarkbuttonNew" data-js="bookmarkbuttonNew">
  <img
    class="cardbookmark"
    src="../images/bookmark-white.png"
    alt="bookmark"
  />
  <img
    class="cardbookmark hiddenNew"
    data-js="hiddenNew"
    src="../images/bookmark.png"
    alt="bookmark"
  />
</button>
<p class="card__text">
${data.question}
</p>
<section class="cards--new--answer" data-js="answerNew" hidden>
  <p class="card__answer">
  ${data.answer}
  </p>
</section>
<button
  type="button"
  class="button button__text button--New"
  data-js="answerButtonNew"
>
  show me the answer
</button>`;
  newCardsSection.append(newcard);
  //functionality new Card

  const newBookmark = document.querySelector('[data-js="bookmarkbuttonNew"]');
  const image = document.querySelector('[data-js="hiddenNew"]');
  const answerNew = document.querySelector('[data-js="answerNew"]');
  const answerButtonNew = document.querySelector('[data-js="answerButtonNew"]');

  newBookmark.addEventListener("click", () => {
    image.classList.toggle("hiddenNew");
  });

  answerButtonNew.addEventListener("click", () => {
    console.log(answerButtonNew.textContent);
    answerNew.toggleAttribute("hidden");
    if (answerButtonNew.textContent === "hide answer") {
      answerButtonNew.textContent = "show me the answer";
    } else {
      answerButtonNew.textContent = "hide answer";
    }
  });
});

function calculateCharacters(input) {
  return Number(150 - input.value.length);
}

question.addEventListener("input", () => {
  console.log(question.value.length);
  charactersQuestion.textContent = calculateCharacters(question);
});

answer.addEventListener("input", () => {
  console.log(answer.value.length);
  charactersAnswer.textContent = calculateCharacters(answer);
});
