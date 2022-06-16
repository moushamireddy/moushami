function factorial(n){
    
    if(n == 0 || n == 1){
        return 1;
    
    }else{
        return n * factorial(n-1);
    }
}
let n = 4;
sol = factorial(n)
console.log(" factorial of " + n + " is " + sol);