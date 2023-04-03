    //Step 1: Assign an array of 5 random numbers to a variable
    var numArray = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
    
    //Step 2: Assign a number to a variable and call it counter
    let counter = 0;
    
    //Step 3: Use a for loop to iterate through the array and add the counter to each item in the array
    for(let i = 0 ; i < numArray.length; i++) {
        //Step 4: On each iteration add 1 to the counter
        counter++; 
        //value from the random number generator in the array index before adding counter variable
        const oldValue = numArray[i]; 
        //value from the random number generator in the array index after adding counter variable
        const newValue = numArray[i] + counter; 
        console.log(`The updated value before counting is: ${oldValue}`);
        console.log(`The updated value after counting is: ${newValue}`);
    }

    //Step 5: Define a function that takes an array as an argument and uses a while loop to console.log whether each item in the array is even or odd
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

    //Step 6: Call the above function with the previously assigned array variable as a parameter
    issue6(numArray); 

    //Step 7: Call the above function with a new array with 5 random numbers
    issue6([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);

    //Step 8: Delete the third item of the saved array
    const newNumberArray = numArray.splice(2, 1);

    //Step 9: Add a string to the front of the saved array
    numArray.unshift("Hello World");

    //Step 10: Add a string to the end of the saved array
    numArray.push("The End");

    //Step 11: console.log the saved array
    console.log(numArray);