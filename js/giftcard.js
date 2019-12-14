//alert("Hi");
window.onload = pageReady;

function pageReady() {
    var bigImage = document.getElementById("bigimage");

    var image1 = document.getElementById("img1");
    var image2 = document.getElementById("img2");
    var image3 = document.getElementById("img3");
    var image4 = document.getElementById("img4");
    var image5 = document.getElementById("img5");

    var formHandle = document.forms[0];
    formHandle.onsubmit = processForm;

    image1.onclick = switchPic1;
    image2.onclick = switchPic2;
    image3.onclick = switchPic3;
    image4.onclick = switchPic4;
    image5.onclick = switchPic5;
    

    $('button').hover(
        function () { $(this).css({ 'color': '#ffffff', 'background': '#000000' }); },
        function () { $(this).css({ 'color': '#000000', 'background': 'transparent' }); }
    );

    $('input,textarea').hover(
        function () { $(this).css({ 'border-color': '#FF8C94' }); },
        function () { $(this).css({ 'border-color': '#000000' }); }
    );

    function processForm() {
        alert("Thank You for Shopping.");
        return false;
    }

    document.getElementById("user_txt").value = "Thank You";

    $('#demo').click(function () {
        //alert("show changes");

        var nameValue = formHandle.card_msg.value;
        //console.log(nameValue);

        document.getElementById("user_txt").value = nameValue;
        
    });

    function switchPic1() {
        bigImage.src = image1.src;
    }

    function switchPic2() {
        bigImage.src = image2.src;
        
    }

    function switchPic3() {
        bigImage.src = image3.src;
    }

    function switchPic4() {
        bigImage.src = image4.src;
    }
    function switchPic5() {
        bigImage.src = image5.src;
    }


    
}
