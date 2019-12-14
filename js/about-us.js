// changing the background and font color on hover of about us
$('#image-text').hover(
    function(){$(this).css({
        'background': '#A8E6CE',
        'color': '#FF8C94'
    });},
    function(){$(this).css({
        'background': '#FF8C94',
        'color': 'white'
    });}
)
//changing the font and color on hover
$('#history').hover(
    function(){$(this).css({
        'background': '#A8E6CE',
        'color': '#FF8C94'
    });},
    function(){$(this).css({
        'background': '#FF8C94',
        'color': 'white'
    });}
)

//on hover of image showing the name
function showDetails(divid){
    if (divid === "div1"){
        document.getElementById(divid).innerHTML = "Yash(Owner)";
    }
    else if (divid === "div2"){
        document.getElementById(divid).innerHTML = "Krishna (Lead Baker)";
    }
    else if (divid === "div3"){
        document.getElementById(divid).innerHTML = "Marl (Associate Baker)";
    }
    else if (divid === "div4"){
        document.getElementById(divid).innerHTML = "Sukhdeep (Manager)";
    }
    else {
        document.getElementById(divid).innerHTML = "Amit(Supervisor)";
    }
}
//hide the details of image on mouse out
function hideDetails(divid){
    document.getElementById(divid).innerHTML = "";
}
