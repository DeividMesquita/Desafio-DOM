window.onload = () => {
  const button = document.getElementById("sum-btn");
  const result = document.getElementById("result");
  let currValue = parseInt(result.innerText);

  button.addEventListener("click", () => {
    currValue += 1;
    result.innerText = currValue;
  });
};
