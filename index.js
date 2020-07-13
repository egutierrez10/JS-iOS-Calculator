let cur = "";
let out = document.getElementById('item1');
let num1 = "na";
let num2 = "na";
let add = false;
let sub = false;
let mul = false;
let div = false;
function ConvertDecimal(){
    if(cur == "") //empty string nothing to convert
        return;
    out.innerHTML = parseFloat(cur) / 100 + "";
}
function setText(text){
    if(add || sub || mul || div)
        cur = "";
    if(cur.length >= 14){
        out.style.fontSize = "30px";
        return;
    }
    cur = cur + text;
    out.innerHTML = cur;
    document.getElementById('ac').innerHTML = "C";
}
function clearText(){
    if(cur == "") //empty string nothing to convert
        return;
    out.innerHTML = "0";
    cur = "";
    document.getElementById('ac').innerHTML = "AC";
}
function negate(){
    if(cur == "") //empty string nothing to convert
        return;
    cur = parseFloat(cur) * -1 + "";
    out.innerHTML = cur;
}
function setOperation(op){
    num1 = parseFloat(cur);
    switch(op){
        case '+': add = true; break;
        case '-': sub = true; break;
        case 'x': mul = true; break;
        case '/': div = true; break;
    }
}
function solve(){
    num2 = parseInt(cur);
    if(add){
        cur = (num1 + num2) + "";
        out.innerHTML = cur;
        num1 = parseFloat(cur);
        add = false;
    }else if(sub){
        cur = (num1 - num2) + "";
        out.innerHTML = cur;
        num1 = parseFloat(cur);
        sub = false;
    }else if(mul){
        cur = (num1 * num2) + "";
        out.innerHTML = cur;
        num1 = parseFloat(cur);
        mul = false;
    }else{
        cur = (num1 / num2) + "";
        if(cur.length >= 18){
            out.style.fontSize = "30px";
        }
        out.innerHTML = cur;
        num1 = parseFloat(cur);
        div = false;
    }
}