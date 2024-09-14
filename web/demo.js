function myFunction(){
    document.getElementById("myId").innerHTML="谢谢你的赞";
    document.getElementById("myId").style.color = "blue"
}

function f(b){
    var num1 = parseFloat(document.calc.num1.value);
    var num2 = parseFloat(document.calc.num2.value);

    if(b == '+')
        document.calc.sum.value = num1 + num2;
    else if(b == '-')
        document.calc.sum.value = num1 - num2;
    else if(b == '*')
        document.calc.sum.value = num1 * num2;
    else if(b == '/')
        document.calc.sum.value = num1 / num2;
}