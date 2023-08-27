const bookmarks = document.querySelector('[data-js="bookmarkbutton"]');
const image = document.querySelector('[data-js="hidden"]');
const answer1 = document.querySelector('[data-js="answer1"]');
const answerButton = document.querySelector('[data-js="answerButton"]');

bookmarks.addEventListener("click", () => {
  image.classList.toggle("hidden");
});

answerButton.addEventListener("click", () => {
  console.log(answerButton.textContent);
  answer1.toggleAttribute("hidden");
  if (answerButton.textContent === "hide answer") {
    answerButton.textContent = "show me the answer";
  } else {
    answerButton.textContent = "hide answer";
  }
});
