const inputExpression = document.getElementById("expression");
console.log("inputExpression", inputExpression);

// inputExpression.addEventListener("keydown", (event) => {
//   console.log("keydown", inputExpression.value);
// });

// inputExpression.addEventListener("keypress", (event) => {
//   console.log("keypress", inputExpression.value);
// });

function filtre(startString) {
  const arrayChar = startString.split("");

  const arrayCharParenthese = [];
  for (let i = 0; i < arrayChar.length; ++i) {
    const char = arrayChar[i];
    if (char === "(" || char === ")") {
      arrayCharParenthese.push(char);
    }
  }
  const finalString = arrayCharParenthese.join("");
  return finalString;
}

inputExpression.addEventListener("keyup", (event) => {
  const finalString = filtre(inputExpression.value);
  inputExpression.value = finalString;
  const resultSpan = document.getElementById("result");

  let nbOpenParenthesis = 0;
  let nbCloseParenthesis = 0;

  const splitString = finalString.split("");
  for (let i = 0; i < splitString.length; ++i) {
    const char = splitString[i];
    if (char === "(") {
      ++nbOpenParenthesis;
    }
    if (char === ")") {
      ++nbCloseParenthesis;
    }
  }

  if (nbOpenParenthesis !== nbCloseParenthesis) {
    resultSpan.textContent = "Mauvais parenthesage";
    resultSpan.style.color = "red";
    return;
  }

  let malParenthesee = false;
  console.log("BEGIN FOR");
  let nbOuvrante = 0;
  let nbFermante = 0;
  for (let i = 0; i < finalString.length; ++i) {
    // console.log("i", i);
    if (finalString[i] === "(") {
      ++nbOuvrante;
    }
    if (finalString[i] === ")") {
      ++nbFermante;
    }
    console.log("nbOuvrante", nbOuvrante);
    console.log("nbFermante", nbFermante);
    console.log("nbOuvrante - nbFermante", nbOuvrante - nbFermante);
    if (nbOuvrante - nbFermante < 0) {
      malParenthesee = true;
      break;
    }
  }

  console.log("malParenthesee", malParenthesee);
  if (malParenthesee) {
    resultSpan.textContent = "Mauvais parenthesage";
    resultSpan.style.color = "red";
  } else {
    resultSpan.textContent = "Bon parenthesage";
    resultSpan.style.color = "green";
  }

  console.log("END FOR");
});

// BONUS
// const t1 = ["1", "2", "1"]
// undefined
// t1
// (3) ['1', '2', '1']
// t1.filter(x => x === "1")
// (2) ['1', '1']
// t1.filter(x => x !== "1")
// ['2']

// TODO: la différence entre ++i et i++
