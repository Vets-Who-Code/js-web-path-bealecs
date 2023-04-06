//Step 1: Select the <body> element
const body = document.getElementById('issue7');

//Step 2: Add a list element as a child of the body
const list = document.createElement('li');
list.textContent = "List item"
body.appendChild(list);

//Step 3: Add 2 buttons as children to the <body> element
const addButton = document.createElement('button');
addButton.textContent = 'Add List Item';
body.appendChild(addButton);

const removeButton = document.createElement('button');
removeButton.textContent = 'Remove List Item';
body.appendChild(removeButton);

//Step 4: The first button should add a list item element to the newly created list
addButton.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.textContent = 'List Item';
  list.appendChild(listItem);
});

//Step 5: The second button should remove a list item from the list
removeButton.addEventListener('click', () => {
  const lastListItem = list.lastElementChild; 
  if (lastListItem) { //ensures that there is a list item to remove
    list.removeChild(lastListItem);
  }
});

//Step 6: Make an event that listens for a click on one of the list items and when that event happens something updates (example: the background color updates) using .classList.add and .classList.remove
list.addEventListener('click', (event) => {
  const listItem = event.target;
    if(listItem.tagName === "LI") {
        if(listItem.classList.contains("clicked")) {
            listItem.classList.remove("clicked");
        } else {
            listItem.classList.add("clicked"); //On click, the list items will have a background color of red, a font size of 1.5 rem and a font color of white
        }
    }
});