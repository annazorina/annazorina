//Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".
function tripleX(str){
    Index = str.indexOf("x");
    return Index != -1 && str.slice(Index+1, Index+3) === "xx"? true: false
}

