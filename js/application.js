/*sayıların butonları*/
var numbers = ["num0","num1","num2","num3","num4","num5","num6","num7","num8","num9"];
var operators = ["+","-","*","/","open_paranthesis","close_paranthesis"]
function write_numbers(i)
{
  var num = document.getElementById(numbers[i]).value ;
  document.getElementById("text").value+= num;
  document.getElementById("history_box").value+= num;
}

function write_operators(i)
{
  var num = document.getElementById(operators[i]).value ;
  document.getElementById("text").value+= num;
  document.getElementById("history_box").value+= num;
}

function calculate()
{
    var result_box = document.getElementById("E").value;
    document.getElementById("history_box").value+= result_box;
    var result = eval(document.getElementById("text").value);
    document.getElementById("text").value = result;
    document.getElementById("history_box").value+= result;

    console.log(result);
}

function refresh()
{
  document.getElementById("text").value = "";
  document.getElementById("history_box").value+= " // ";
}

$(document).ready(function()
{
  $("button").mouseenter(function(e){
  $(this).css("background-color","orange");
});
$("button").mouseleave(function(a){
  $(this).css("background-color","white");
});
});
