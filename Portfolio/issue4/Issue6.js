    var numArray = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
    
    let counter = 0;
    
    for(let i = 0 ; i < numArray.length; i++) {
        counter++; //increment counter variable with each array index
        const oldValue = numArray[i]; //value from the random number generator in the array index before adding counter variable
        console.log(`The updated value before counting is: ${oldValue}`);
        const newValue = numArray[i] + counter; //value from the random number generator in the array index after adding counter variable
        console.log(`The updated value after counting is: ${newValue}`);
    }


    function issue6(arr) {

        let i = 0; //index variable

        while( i < arr.length) { //loop continues while there are indexes in the given array parameter
            if(arr[i] % 2 === 0) { //modulus operator to determine if the number has a remainder or not when divided by 2
                console.log("This value is even");
            } else {
                console.log("This value is odd");
            }
            i++; //iterates this value after each index so the loop doesn't continue forever
        }
    }

    issue6(numArray); //call to the function passing numArray (array with 5 randomly generated numbers) as the argument

    //Call a 2nd time with 5 more random numbers *Did not save these numbers to a variable this time
    issue6([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);

    const newNumberArray = numArray.splice(2, 1);

    //adds string to beginning of array
    numArray.unshift("Hello World");

    //adds string to end of array
    numArray.push("The End");

    console.log(numArray);