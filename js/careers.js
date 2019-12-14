window.onload = pageReady;

function pageReady() {

    var callFunction = setInterval(changeColor, 2000);

    function changeColor() {
        var hashTag = document.getElementById("hashtag");
        hashTag.style.color = hashTag.style.color == 'black' ? '#FF8C94' : 'black';
    }

    $("button").click(function () {
        $(this).next("section").slideToggle(2000);
        $("section").css('background', '#FFAAA5');
    });
}