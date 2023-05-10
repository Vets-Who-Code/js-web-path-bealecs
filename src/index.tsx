//build an array of objects with their values being strings

interface Object {  //creating new interface for the new type
    [value: string]: string;
}

type myArr = Array<Object>; //created the type of array based off interface created before

//Function iterating through number parameter times to create that many new array objects with random strings.
function getArrNum(newArr: myArr, num: number) {
    for(let i = 0; i < num; i++) {
        const randChar = (Math.random() + 1).toString(36).substring(7); //creates a random string 
        newArr.push({value: randChar}); // pushes the value of string to the newArry
    }
    return newArr; //Self explanatory
}

const finalArr: myArr = []; //declaring a new variable with the type of the earlier created type, and making it an empty array

const callFunc = getArrNum(finalArr, 10); //storing the function call to a variable

console.log(callFunc); //console log