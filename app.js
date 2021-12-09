 var btnTranslate = document.querySelector("#button1-translate");
var txtInput = document.querySelector("#txt-input");
var resultDiv = document.querySelector("#result");


 //
//var serverURL = "https://api.funtranslations.com/translate/groot.json"

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationURL(key)
{
    return serverURL + "?" + "text" + key
}

function errorHandler(error)
{
    console.log("error here", error);
    alert("Something wrong with seerver try again")
}


function clickHandler()
{ 

 //resultDiv.innerText ="   "+txtInput.value ;
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        resultDiv.innerText = translatedText;
    })

    .catch(errorHandler)

} ;

 btnTranslate.addEventListener("click",  clickHandler)




