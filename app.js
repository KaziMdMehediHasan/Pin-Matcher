//pin generation event handler
function pinGeneration() {
  let number = Math.round(Math.random() * 10000);
  if (number > 999) {
    return number;
  } else {
    return pinGeneration();
  }
  //   console.log(number > 999);
}

let pin = pinGeneration();

document.getElementById("generatePin").addEventListener("click", function () {
  pin = pinGeneration();
  document.getElementById("pinGeneratorDisplay").value = pin;
  document.getElementById("error").style.display = "none";
  document.getElementById("success").style.display = "none";
});

// user input event handler

let userInput;

let calcBtn = document.getElementsByClassName("button");

for (let button of calcBtn) {
  button.addEventListener("click", function (event) {
    // debugger;
    const userInputDisplay = document.getElementById("userInput");
    userInput = userInputDisplay.value;

    userInput = userInput + event.target.innerText;

    if (Number(event.target.innerText) < 10) {
      userInputDisplay.value = userInput;
    }
  });
}

// making the remove button functional

document.getElementById("remove").addEventListener("click", function () {
  userInput = userInput.slice(0, userInput.length - 2);
  document.getElementById("userInput").value = userInput;
});

//clear button functionality

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("userInput").value = "";
});

// submit button functionality
document.getElementById("submit").addEventListener("click", function () {
  //   console.log(Number(userInput), pinGeneration());
  //   debugger;
  //   console.log(pin, userInput);
  if (pin === Number(userInput)) {
    document.getElementById("success").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
});
