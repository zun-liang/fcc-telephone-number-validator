const input = document.getElementById("user-input") as HTMLInputElement;
const checkBtn = document.getElementById("check-btn") as HTMLButtonElement;
const clearBtn = document.getElementById("clear-btn") as HTMLButtonElement;
const results = document.getElementById("results-div") as HTMLDivElement;

const numOnlyRegex = /^1?\d{10}$/;
const spaceOrDashRegex = /^1?\s*\d{3}[\s-]\d{3}[\s-]\d{4}$/;
const parenthesesRegex = /^1?\s*\(\d{3}\)[\s-]?\d{3}[\s-]?\d{4}$/;
const regex = [numOnlyRegex, spaceOrDashRegex, parenthesesRegex];

const check = () => {
  if (input.value === "") {
    alert("Please provide a phone number");
  } else if (regex.some((regex) => regex.test(input.value))) {
    results.innerHTML += `<p class="valid">Valid US number: ${input.value}</p>`;
  } else {
    results.innerHTML += `<p class="invalid">Invalid US number: ${input.value}</p>`;
  }
  input.value = "";
};

const clear = () => (results.innerHTML = "");
checkBtn.addEventListener("click", check);
clearBtn.addEventListener("click", clear);
