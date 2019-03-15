var n1 , n2;
function sumValues() {
    n1 = Number(document.getElementById("n1").value);
     n2 = Number(document.getElementById("n2").value);
   return {n1,n2}
}
function Multiply()
{
     
    result = n1*n2;
    alert("the ans is" + result);
}
function Substraction()
{
     
    result = n1-n2;
    alert("the ans is" + result);
}
function Addition()
    {
     
    result = n1+n2;
    alert("the ans is" + result);
}
function Division()
{

     
    result = n1/n2;
    alert("the ans is" + result);
}