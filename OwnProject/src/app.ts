
const idCheckName = document.getElementById("introName");

if(idCheckName){
    idCheckName.innerHTML = "nice"; 
}

const buttonCheck = document.getElementById("clickMeButton");

if (buttonCheck){
    buttonCheck.onclick = function() {
        console.log("clicked");
        buttonCheck.remove();
    };
    

}


