const input = document.getElementById("user-input") as HTMLInputElement;
const checkBtn = document.getElementById("check-btn") as HTMLButtonElement;
const clearBtn = document.getElementById("clear-btn") as HTMLButtonElement;
const results = document.getElementById("results-div") as HTMLDivElement;

// valid usa number
// 1. only allow numbers or  -, \s, ()
// 2. numbers should be 10 or 11 digits
// 3. the area code can only be 1 if there are 11 digits
// 4. if there is (), it has to be a pair, and can not be at the start or end
// 5. dash can not be at the start
// 6. numbers should be grouped either in 3 digits or 4

const check = () => {
  if (input.value === "") {
    alert("Please provide a phone number");
  }
};

const clear = () => {
  results.textContent = "";
};

checkBtn.addEventListener("click", check);
clearBtn.addEventListener("click", clear);
