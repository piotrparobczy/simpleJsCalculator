//function to add on each element of calculator
function clickButtonOrPressKey(button,functionToRun) {
    let key;
    switch(button.value){
        case "C":
            // key =
            break;
        default:
            key = button.value
    }
    let events = ['click',key]
    events.forEach(evnt,function(evnt){
        button.addEventListener(evnt,functionToRun(button))
    })
}

//function to run
//if statments for 
function functionToRun(){
    //checing all possibilities?
}
//mozna 
//! TODO
//A -> zrobic mape/classe dla kazdego buttona i przypisać mu odpowiednia funcje
//B-> można przejść if statmentami przez wszystkie opcje

//factory of elements of calculator with function and keyboard input
//each function descriped
//add for all button event listner
//next and history
