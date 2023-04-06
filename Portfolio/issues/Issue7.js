//Step 1: Select the <body> element
const body = document.getElementById('issue7');

function createElement(element, text, name) { //function to create an element given its parameters of element type, text content, and id-name
  const created = document.createElement(element); //variable for the newly created element
  created.setAttribute("class", name); //sets created elements id = name parameter
  created.textContent = text; //sets text content to text parameter
  body.appendChild(created); //appends to html <body>
  return created;
}

function addList() { //function to create list item, used with button for adding list item
    const listItem = createElement('li', 'List item', 'list-item');
    listItem.addEventListener('click', () => {
      listItem.classList.toggle('clicked'); //when clicked, list items have a background color of red, 1.5rem font size and white font color
    });
}

function removeList() { //function to remove list item, used with button for removing list item
  const listItem = document.querySelector(".list-item");
  if (listItem) { //ensures that there is a list item to remove
    body.removeChild(listItem);
  }
}

createElement('button', 'Add List Item', 'add-button'); //creates add button using function call
createElement('button', 'Remove List Item', 'remove-button'); //creates remove button using function call

const addButton = document.querySelector(".add-button"); //assigns add button to addButton variable
const removeButton = document.querySelector(".remove-button"); //assigns remove button to removeButton variable

addButton.addEventListener('click', addList); //adding event listener for on click with function for adding a list using the add list button
removeButton.addEventListener('click', removeList); //adding event listener for on click with function for removing a list using the removing list button

