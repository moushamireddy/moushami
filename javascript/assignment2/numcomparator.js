var array=[{radius: 5},{radius: 9},{radius:2}]
var radius=[5,9,2];
function num_comparator(a,b){
return a-b;

}
radius.sort(num_comparator);
document.write(radius);