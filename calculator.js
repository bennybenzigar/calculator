// display numbers in textbox

function displayNum(num){
    result.value +=num

}


//to clear contents inntextbox

function clearBox (){
    result.value=""
}

// evaluate expression

function evaluateExpr(){
    // expr=result.value
    // output=eval(expr)
    // result.value=output

    result.value=eval(result.value)
}


// remove last item from textbox
function removeItem(){
  curExp=  result.value
  result.value=curExp.slice(0,-1)

}