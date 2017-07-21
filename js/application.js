//sayı tanımlama
//var bli = window.prompt("birinci sayı")
//var two = window.prompt("ikinci sayı")

/*sayıların butonları*/
var numbers = ["num0","num1","num2","num3","num4","num5","num6","num7","num8","num9"];
var operators = ["+","-","*","/"]
function write_numbers(i)
{
  var num = document.getElementById(numbers[i]).value ;
  document.getElementById("text").value+= num;
}

function write_operators(i)
{
  var num = document.getElementById(operators[i]).value ;
  document.getElementById("text").value+= num;
}

function calculate()
{
    var result = eval(document.getElementById("text").value);
    document.getElementById("text").value = result;
}
