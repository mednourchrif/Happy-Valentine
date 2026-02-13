const noPrompts = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Maybe think one more time?",
  "I promise it will be fun.",
  "Still no?",
  "You are making this hard.",
  "Last chance to say yes?",
  "Okay... final final chance?"
];

const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");

let promptIndex = 0;
let yesSize = 1;
let noSize = 1;
let switchedBanner = false;

noButton.addEventListener("click", () => {
  const banner = document.getElementById("banner");

  if (!switchedBanner) {
    banner.src = "./public/images/no.gif";
    switchedBanner = true;
  }

  if (promptIndex < noPrompts.length - 1) {
    promptIndex += 1;
    noButton.textContent = noPrompts[promptIndex];
  } else {
    promptIndex = 0;
    noButton.textContent = noPrompts[0];
  }

  yesSize = Math.min(yesSize + 0.35, 3.8);
  yesButton.style.transform = `scale(${yesSize})`;

  noSize = Math.max(noSize - 0.08, 0.45);
  noButton.style.transform = `scale(${noSize})`;
});

yesButton.addEventListener("click", () => {
  const banner = document.getElementById("banner");
  banner.src = "./public/images/benna.jpeg";

  const buttons = document.querySelector(".buttons");
  const message = document.getElementById("message");

  buttons.style.display = "none";
  message.style.display = "block";
});
