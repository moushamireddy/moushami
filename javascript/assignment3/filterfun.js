var myNumberArray=[1,2,3,4,5,6,7,8,9];
console.log(myNumberArray.filter(function(num){
    return !(num % 3);
}));
var myStringArray=["this","is","Array","of","String"];
console.log(myStringArray.filter(function(str)
                                 {
                                     return str.length>3;
                                 }));