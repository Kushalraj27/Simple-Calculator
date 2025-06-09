let input=document.querySelector("input")
function addValue(elementVal){
    input.value += elementVal;

}
function clearvalue(){
    input.value= "";
}
function del(){
    input.value= input.value.slice(0,input.value.length-1);
}

function evaluvate(){
    input.value=eval(input.value)
}
 

 
  
