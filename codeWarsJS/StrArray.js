//Create a function that will return a string that combines all of the
// letters of the three inputed strings in groups. Taking the first letter of all of
// the inputs and grouping them next to each other. Do this for every letter
function tripleTrouble(one, two, three){
    str = '';
    for (let i = 0; i <one.length ; i++){
        str += one[i] + two[i]+ three[i];
    }
    return str;
}

console.log(tripleTrouble("aaa","bbb","ccc"))