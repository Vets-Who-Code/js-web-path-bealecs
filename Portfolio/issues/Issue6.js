    //Step 1: Assign an array of 5 random numbers to a variable
    const genRandArr = () => {
       let numbers = [];
       for(let i = 0; i < 5; i++) {
        numbers.push(Math.floor(Math.random() * 100));
       }
       return numbers;
    };
    const numArray = genRandArr();

    for(let counter = 0 ; counter < numArray.length; counter++) {
        const newValue = numArray[counter] + counter; 
        console.log(`Old Value: ${numArray[counter]} \n
         The updated value after counting is: ${newValue}`);
    }
    genRandArr();
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
    issue6(genRandArr()); 

    //Step 7: Call the above function with a new array with 5 random numbers
    issue6(genRandArr());
    //Step 8: Delete the third item of the saved array
    const newNumberArray = genRandArr().splice(2, 1);

    //Step 9: Add a string to the front of the saved array
    numArray.unshift("Hello World");

    //Step 10: Add a string to the end of the saved array
    numArray.push("The End");

    //Step 11: console.log the saved array
    console.log({ newNumberArray, numArray});
