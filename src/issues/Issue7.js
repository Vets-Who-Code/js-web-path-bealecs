//Step 1: Select the <body> element
const issue7Body = document.getElementById('issue7');

function createElement7(element, text, name) { //function to create an element given its parameters of element type, text content, and id-name
  const created = document.createElement(element); //variable for the newly created element
  created.setAttribute("class", name); //sets created elements id = name parameter
  created.textContent = text; //sets text content to text parameter
  issue7Body.appendChild(created); //appends to html <body>
  return created;
}

//function to create list item, used with button for adding list item
  const textContent = ['Besos Mojados', 'LLYLM', 'La Fama', 'Despecha', 'Yo x Ti, Tu x Mi'];
  let counter = 0;
  
  function addList() {
    if(counter < textContent.length) {
      const listItem = createElement7('li', textContent[counter], 'list-item');
      listItem.addEventListener('click', () => {
        listItem.classList.toggle('clicked');
      });
      counter++;
    } else if(counter >= 5){
      console.log("The end...");
    }
    
  }

function removeList() { //function to remove list item, used with button for removing list item
  const listItem = document.querySelector(".list-item");
  if (listItem) { //ensures that there is a list item to remove
    issue7Body.removeChild(issue7Body.lastChild);
    counter--;
  }
}

createElement7('button', 'Show Next', 'add-button'); //creates add button using function call
createElement7('button', 'Remove Last', 'remove-button'); //creates remove button using function call

const addButton = document.querySelector(".add-button"); //assigns add button to addButton variable
const removeButton = document.querySelector(".remove-button"); //assigns remove button to removeButton variable

addButton.addEventListener('click', addList); //adding event listener for on click with function for adding a list using the add list button
removeButton.addEventListener('click', removeList); //adding event listener for on click with function for removing a list using the removing list button

