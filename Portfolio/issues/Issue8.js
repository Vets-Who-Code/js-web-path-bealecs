const button = document.getElementById("api"); //selecting button by element ID
const body1 = document.getElementById('apiSection');

function createElement(element, text, name) { //function to create an element given its parameters of element type, text content, and id-name
  const created = document.createElement(element); //variable for the newly created element
  created.setAttribute("class", name); //sets created elements id = name parameter
  created.textContent = text; //sets text content to text parameter
  body.appendChild(created); //appends to html <body>
  return created;
}
//adding a click event listener to add loading text when the button is fired..
    button.addEventListener('click', () => { 
        createElement('p', 'Loading...', 'loading');
        document.getElementById("apiSection").appendChild(document.querySelector('.loading')); //Displays loading screen on buttton click until the promise is satisfied

//Start of Promise to fetch data from given API
    new Promise((resolve) => setTimeout(resolve, 1000)) //1 second timeout before fetching data
        .then(() => fetch("https://swapi.dev/api/people/1/")) //url which I am fetching data from, pulled from swapi documentation
        .then((response) => {
            return response.json(); //JSON formatted response of data
        })
        .then((data) => {
            const result = createElement('p', JSON.stringify(data, null, 3), 'data')
            document.getElementById("apiSection").appendChild(result); //appending that text to the apiSection id element
        })
        .catch((error) => {
            const errorResult = createElement('p', error, 'error');
            document.getElementById("apiSection").appendChild(errorResult); //If an error occurs, it will append a p element to the apiSection ID element
        })
        .finally(() => {
            loading.remove();
             //Removes Loading... text once the promise is satisfied
        })
         //disables the button after its been clicked once so that you cannot spam page with sw facts
         button.disabled = true;
    });