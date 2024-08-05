// Create a new div element
const element = document.createElement("div");

// Set the text inside the new element
element.textContent = "YOUR-NAME is the champion";

// Append the new element to the body
document.body.append(element);

// Create an unordered list
const ul = document.createElement("ul");

// Use a for loop to create three li elements, set their text, and append them to the ul
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

// Append the ul to the newly created div
element.append(ul);

//changing properties of DOM nodes
element.style.height = "300px";

// Add a class to the element
element.className = "pet-listing dog";

// Remove the second child of the ul
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

// Remove the entire ul element from the DOM
ul.remove();