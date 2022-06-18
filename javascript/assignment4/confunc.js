function areaRectangle(a, b)
{
    let area = a * b;
    return area;
}
 
function perimeterRectangle(a, b)
{
    let perimeter = 2*(a + b);
    return perimeter;
}
  
let a = 5;
let b = 6;
document.write("Area = " + areaRectangle(a, b) + "<br>");
document.write("Perimeter = " + perimeterRectangle(a, b));