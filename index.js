let result = "0";
let isResultDisplayed = false;
const display = document.querySelector("#display");
const satu = document.querySelector("#satu");
const dua = document.querySelector("#dua");
const tiga = document.querySelector("#tiga");
const empat = document.querySelector("#empat");
const lima = document.querySelector("#lima");
const enam = document.querySelector("#enam");
const tujuh = document.querySelector("#tujuh");
const delapan = document.querySelector("#delapan");
const sembilan = document.querySelector("#sembilan");
const nol = document.querySelector("#nol");
const tambah = document.querySelector("#tambah");
const kurang = document.querySelector("#kurang");
const bagi = document.querySelector("#bagi");
const kali = document.querySelector("#kali");
const hasil = document.querySelector("#hasil");
const titik = document.querySelector("#titik");
const ac = document.querySelector("#ac");
const back = document.querySelector("#back");

satu.addEventListener("click", function () {
  addChar("1");
});
dua.addEventListener("click", function () {
  addChar("2");
});
tiga.addEventListener("click", function () {
  addChar("3");
});
empat.addEventListener("click", function () {
  addChar("4");
});
lima.addEventListener("click", function () {
  addChar("5");
});
enam.addEventListener("click", function () {
  addChar("6");
});
tujuh.addEventListener("click", function () {
  addChar("7");
});
delapan.addEventListener("click", function () {
  addChar("8");
});
sembilan.addEventListener("click", function () {
  addChar("9");
});
nol.addEventListener("click", function () {
  addChar("0");
});
tambah.addEventListener("click", function () {
  addOperator("+");
});
kurang.addEventListener("click", function () {
  addOperator("-");
});
bagi.addEventListener("click", function () {
  addOperator("/");
});
kali.addEventListener("click", function () {
  addOperator("*");
});
hasil.addEventListener("click", function () {
  calculateResult();
});
titik.addEventListener("click", function () {
  addDecimal();
});
ac.addEventListener("click", function () {
  resetAll();
});
back.addEventListener("click", function () {
  hapusKarakter();
});

function addChar(char) {
  if (isResultDisplayed) {
    result = char;
    isResultDisplayed = false;
  } else {
    if (result == "0" || result === "Error") {
      result = char;
    } else {
      result += char;
    }
  }
  display.innerHTML = result;
}

function addOperator(op) {
  if (isResultDisplayed) {
    isResultDisplayed = false;
  }
  if (result !== "" && !isOperator(result.slice(-1))) {
    result += op;
    display.innerHTML = result;
  } else if (isOperator(result.slice(-1))) {
    result = result.slice(0, -1) + op;
    display.innerHTML = result;
  }
}

function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}

function addDecimal() {
  if (isResultDisplayed) {
    result = "0.";
    isResultDisplayed = false;
  } else {
    const lastNumber = result.split(/[\+\-\*\/]/).pop();
    if (!lastNumber.includes(".")) {
      result += ".";
    }
  }
  display.innerHTML = result;
}

function resetAll() {
  result = "0";
  isResultDisplayed = false;
  display.innerHTML = result;
}

function hapusKarakter() {
  result = result.slice(0, -1);
  if (result === "") {
    result = "0";
  }
  display.innerHTML = result;
}

function calculateResult() {
  try {
    result = eval(result).toString();
    display.innerHTML = result;
    isResultDisplayed = true;
  } catch (e) {
    result = "Error";
    display.innerHTML = result;
  }
}