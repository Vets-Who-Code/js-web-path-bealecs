const button = document.getElementById("api"); //selecting button by element ID
const issue8Body = document.getElementById('apiSection');

function createElement(element, text, name) { //function to create an element given its parameters of element type, text content, and id-name
  const created = document.createElement(element); //variable for the newly created element
  created.setAttribute("class", name); //sets created elements id = name parameter
  created.textContent = text; //sets text content to text parameter
  issue8Body.appendChild(created); //appends to html <body>
  return created;
}

//adding a click event listener to add loading text when the button is fired..
    button.addEventListener('click', () => { 
        createElement('p', 'Loading...', 'loading');
        document.getElementById("apiSection").appendChild(document.querySelector('.loading')); //Displays loading screen on buttton click until the promise is satisfied

//Start of Promise to fetch data from given API
    new Promise((resolve) => setTimeout(resolve, 1000)) //1 second timeout before fetching data
        .then(() => fetch("https://theaudiodb.com/api/v1/json/2/artist.php?i=152666")) //url which I am fetching data from, pulled from swapi documentation
        .then((response) => response.json()) //JSON formatted response of data
        .then((data) => {
            dataObject = data.artists;
        })
        .then(() => {
            const [strArtist] = dataObject;
            const resultName = createElement('h2', JSON.stringify(strArtist.strArtist, null, 2), 'data');
            const resultPara = createElement('p', JSON.stringify(strArtist.strBiographyEN), 'data-p');
            const resultImg = document.createElement("img"); //creates the image element
            resultImg.src = strArtist.strArtistThumb; //draws src for image from fetch request variable
            resultImg.alt = "Rosalia Thumbnail";
            resultImg.classList.add('data-img');
            document.getElementById("apiSection").appendChild(resultName); //appending that text to the apiSection id element
            document.getElementById("apiSection").appendChild(resultPara);
            document.getElementById("apiSection").appendChild(resultImg);
        })
        .catch((error) => {
            const errorResult = createElement('p', error, 'error');
            document.getElementById("apiSection").appendChild(errorResult); //If an error occurs, it will append a p element to the apiSection ID element
        })
        .finally(() => {
            //Removes Loading... text once the promise is satisfied
            const loading = document.querySelector(".loading");
            loading.remove();
        })
         //disables the button after its been clicked once so that you cannot spam page with sw facts
         button.disabled = true;
    });