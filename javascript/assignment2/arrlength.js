
var k = new Array();
k[0]=3;
k[1]=6;
k[2]=5;
k[3]="undefined";
k[9]=44;
delete k[0];
console.log(k.length);
k.shift();
console.log(k.length);
for( var I in k){ 
    if(k.hasOwnProperty(I)){
        console.log(I);
    }
}