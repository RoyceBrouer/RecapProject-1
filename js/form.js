//form
// const submittButton = document.querySelector('[data-js="submitButton"]');
const form = document.querySelector('[data-js="form"]');
const newCardsSection = document.querySelector('[data-js="newCardsSection"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  const newcard = document.createElement("article");
  newcard.innerHTML = `<tag class="tag tag--new">${data.tag}</tag>
<button type="button" class="bookmarkbutton" data-js="bookmarkbutton">
  <img
    class="cardbookmark"
    src="../images/bookmark-white.png"
    alt="bookmark"
  />
  <img
    class="cardbookmark hidden"
    data-js="hidden"
    src="../images/bookmark.png"
    alt="bookmark"
  />
</button>
<p class="card__text">
${data.question}
</p>
<section class="cards--primary--answer" data-js="answer1" hidden>
  <p class="card__answer">
  ${data.answer}
  </p>
</section>
<button
  type="button"
  class="button button__text button--one"
  data-js="answerButton"
>
  show me the answer
</button>`;
  newCardsSection.append(newcard);
});
