// let's add a new function that resets all input values, 
// and hides the story again!
function resetStory() {
  document.querySelector("div#story").setAttribute("class", "hidden")
  document.getElementById("person1Input").value = null;
  document.getElementById("person2Input").value = null;
  document.getElementById("animalInput").value = null;
  document.getElementById("exclamationInput").value = null;
  document.getElementById("verbInput").value = null;
  document.getElementById("nounInput").value = null;
  document.querySelector("button#reset").setAttribute("class", "hidden");
}

window.onload = function() {
  let form = document.querySelector("form");
  let resetButton = document.querySelector("button#reset")
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const person1Input = document.getElementById("person1Input").value;
    const person2Input = document.getElementById("person2Input").value;
    const animalInput= document.getElementById("animalInput").value;
    const exclamationInput = document.getElementById("exclamationInput").value;
    const verbInput = document.getElementById("verbInput").value;
    // Here's the first log we add.
    
    const nounInput = document.getElementById("nounInput").value;

    document.querySelector("span#person1a").innerText = person1Input;
    document.querySelector("span#person1b").innerText = person1Input;
    document.querySelector("span#person1c").innerText = person1Input;
    document.querySelector("span#person2a").innerText = person2Input;
    document.querySelector("span#person2b").innerText = person2Input;
    document.querySelector("span#animal").innerText = animalInput;
    document.querySelector("span#verb").innerText = verbInput;
    document.querySelector("span#noun").innerText = nounInput;
    document.querySelector("span#exclamation").innerText = exclamationInput;

    document.querySelector("div#story").removeAttribute("class");
  });

  // new event listener for submit event to show the reset button
  form.addEventListener("submit", function() {
    resetButton.removeAttribute("class");
  });

  // new event listener for click event on reset button to 
  // reset form values and hide story
  resetButton.addEventListener("click", resetStory);

};