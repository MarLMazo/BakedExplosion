function showDetails(divid){
    if (divid === "div1"){
        var one = document.getElementById(divid).innerHTML = "Starting from $2";
        one.element.classList.add("shadow-pop-tr");
    }
    else if (divid === "div2"){
        document.getElementById(divid).innerHTML = "Starting from $3";
    }
    else {
        document.getElementById(divid).innerHTML = "Starting from $1.75";
    }
}
function hideDetails(divid){
    if (divid === "div1"){
        document.getElementById(divid).innerHTML = "Donuts";
    }
    else if (divid === "div2"){
        document.getElementById(divid).innerHTML = "Cupcakes";
    }
    else {
        document.getElementById(divid).innerHTML = "Croissants";
    }
}