let showingAlert = false;
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const question = document.getElementById("question");
noBtn.addEventListener("click", () => {
  let rand = Math.floor(Math.random() * (200 - 100) + 1);
  let rand2 = Math.floor(Math.random() * -120 + 1);
  noBtn.style.transform = "translate(" + rand + "px, " + rand2 + "px)";
});
yesBtn.addEventListener("click", () => {
  question.innerText = "I love you too 🥰❤️";
  noBtn.style.display = "none";
  yesBtn.style.display = "none";
  document.querySelector(".wrapper").classList.add("red");

  setTimeout(() => {}, 200);
  let showingAlert = false;
  const interval = setInterval(() => {
    document.title = showingAlert ? "Thank You" : "And Me Love You";
    showingAlert = !showingAlert;
  }, 1000);
});
