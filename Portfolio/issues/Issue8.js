const button = document.getElementById("api"); //selecting button by element ID

//adding a click event listener to add loading text when the button is fired..
button.addEventListener('click', () => {
    const loading = document.createElement('p');
    loading.textContent = "Loading...";
    document.getElementById("apiSection").appendChild(loading); //Displays loading screen on buttton click until the promise is satisfied

//Start of Promise to fetch data from given API
    new Promise((resolve) => setTimeout(resolve, 1000)) //1 second timeout before fetching data
        .then(() => fetch("https://swapi.dev/api/people/1/")) //url which I am fetching data from, pulled from swapi documentation
        .then((response) => {
            return response.json(); //JSON formatted response of data
        })
        .then((data) => {
            const result = document.createElement('p');
            result.textContent = JSON.stringify(data); //Turning data retrieved into readable text
            document.getElementById("apiSection").appendChild(result); //appending that text to the apiSection id element
        })
        .catch((error) => {
            const errorResult = document.createElement('p');
            errorResult.textContent = error;
            document.getElementById("apiSection").appendChild(errorResult); //If an error occurs, it will append a p element to the apiSection ID element
        })
        .finally(() => {
            loading.remove(); //Removes Loading... text once the promise is satisfied
        })
        button.disabled = true; //disables the button after its been clicked once so that you cannot spam page with sw facts
    });

