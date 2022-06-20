function getEvenNumbers() {
    var arr = [4,5,7,8,14,45,76];
    
    var evens = arr.filter(number => number % 2 == 0);
    console.log("Even Numbers: " + evens);
}

getEvenNumbers();