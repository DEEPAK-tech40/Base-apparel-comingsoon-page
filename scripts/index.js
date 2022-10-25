const inputEl = document.querySelector("#email");
const btnEl = document.querySelector(".arrow");
const showEl = document.querySelectorAll(".error");
const inputField = document.querySelector(".inputField");
const showMsg = document.querySelector(".errorMsg");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function updateMsg(flag) {
  showMsg.style.display = `block`;
  if (flag) {
    showMsg.innerHTML = `Your email has been submitted successfully`;
    showMsg.style.color = `var(--darkGrayishRed)`;
  } else {
    showMsg.textContent = `Please provide a valid email`;
    showMsg.style.color = `var(--softRed)`;
  }
}

function validate() {
  let str = inputEl.value;
  if (str.match(mailFormat)) {
    updateMsg(true);
  } else {
    updateMsg(false);
    showEl.forEach((element) => element.classList.add("clicked"));
    inputField.classList.add("clickedField");
  }
}

function setDefault() {
  showEl.forEach((element) => element.classList.remove("clicked"));
  inputField.classList.remove("clickedField");
  showMsg.style.display = `none`;
}

btnEl.addEventListener("click", validate);
inputEl.addEventListener("focus", setDefault);
