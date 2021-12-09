 var btnTranslate = document.querySelector("#button1-translate");
var txtInput = document.querySelector("#txt-input");
var resultDiv = document.querySelector("#result");

 
//  resultDiv.innerText = "hey"

// console.log(resultDiv)

function clickHandler(){ 
 // console.log("hurryy!!");

resultDiv.innerText ="nanaaa"+txtInput.value +"nana";
} ;

 btnTranslate.addEventListener("click",  clickHandler)




