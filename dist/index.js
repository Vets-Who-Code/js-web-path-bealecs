//build an array of objects with their values being strings
//Function iterating through number parameter times to create that many new array objects with random strings.
function $701ea2edfb58594c$var$getArrNum(newArr, num) {
    for(let i = 0; i < num; i++)newArr.push(Math.random().toString(36).substring(7));
    return newArr;
}
const $701ea2edfb58594c$var$finalArr = []; //declaring a new variable with the type of the earlier created type, and making it an empty array
const $701ea2edfb58594c$var$callFunc = $701ea2edfb58594c$var$getArrNum($701ea2edfb58594c$var$finalArr, 10); //storing the function call to a variable
console.log($701ea2edfb58594c$var$callFunc); //console log


//# sourceMappingURL=index.js.map
