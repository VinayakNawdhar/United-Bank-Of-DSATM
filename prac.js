const isPalindrom = function(str){
    const newStr  = [...str];
    newStr.reverse();
    return newStr.join("") === str ? true : false;
}

console.log(isPalindrom("dsjadkl"));

