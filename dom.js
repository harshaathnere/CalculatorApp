var n1 , n2;
function sumValues() {
    n1 = Number(document.getElementById("n1").value);
    n2 = Number(document.getElementById("n2").value);
   
}
function Multiply()
{
     sumValues()
    result = n1*n2;
    alert("the ans is" + result);
}
function Substraction()
{   sumValues()
    result = n1-n2;
    alert("the ans is" + result);
}
function Addition()
    {
        sumValues()
    result = n1+n2;
    alert("the ans is" + result);
}
function Division()
{  sumValues()
    result = n1/n2;
    alert("the ans is" + result);
}