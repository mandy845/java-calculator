//all buttons
const buttons = document.querySelectorAll("button");

const entry = document.querySelector(".entry");

//button activation
buttons.forEach(function (button){
    button.addEventListener("click",key_operator);
});
//functions for calculations
function key_operator(event){
    //click button value
    const clickedbutton = event.target.value;
    if(clickedbutton === "="){
        if (entry.value !=="") {
            entry.value = eval(entry.value);
        }
    }   else if (clickedbutton ==="C"){
        entry.value ="";
    }   else if (clickedbutton === "Del"){
        entry.value = entry.value.slice(0, -1)
    }
        else{
            entry.value += clickedbutton;
    }
    

}