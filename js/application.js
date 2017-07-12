//sayı tanımlama
//var bli = window.prompt("birinci sayı")
//var two = window.prompt("ikinci sayı")

/*sayıların butonları*/
var numbers = ["num1","num2","num3","num4","num5","num6","num7","num8","num9","+","-","*","/","num0"];
function myFunction(sayi)
{
  var i = sayi
  var num = document.getElementById(numbers[i]).value ;
  document.getElementById("text").value+= num;
}

function calculate()
{
    var result = eval(document.getElementById("text").value);
    document.getElementById("resultBox").value = result;
}
