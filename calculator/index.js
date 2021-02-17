const button = document.querySelector("button");
const ul = document.querySelector("ul");
let last = 0;

button.addEventListener('click',(event) => {
    let X = Number(prompt("input number",0));
    let sign = prompt("input sign","sign");
    let Y = Number(prompt("input number",0));
    calculator(X,sign,Y);
})

function append(last){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = last;
    ul.appendChild(li);
}

function calculator(X,sign,Y){
    switch(true){
        case sign == "+":
            last = X + Y;
            append("PLUS : "+X+" + "+Y+" = "+last);
            break;
        case sign == "-":
            last = X - Y;
            append("MINUS : "+X+" - "+Y+" = "+last);
            break;
        case sign == "*":
            last = X * Y;
            append("MULTIPLE : "+X+" * "+Y+" = "+last);
            break;
        case sign == "%":
            last = X % Y;
            append("REMAINDER : "+X+" % "+Y+" = "+last);
            break;
        case sign == "/":
            last == X / Y;
            append("SHARE : "+X+" / "+Y+" = "+last);
            break;
    }
}