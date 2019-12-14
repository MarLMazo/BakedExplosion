// defining the win condition
var winMoves = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

// defining the boardmoves
var boardMoves = [0,0,0,0,0,0,0,0,0,0];
//initalizing the turn
var turns = 0;
result_element = document.getElementById("game_result")


//this method will check if the match is over or not
function checkWin()
{
    var win = false;
    for (i = 0; i < winMoves.length; i++)
    {
        if (boardMoves[winMoves[i][0]] == 'o' && boardMoves[winMoves[i][1]] == 'o' && boardMoves[winMoves[i][2]] == 'o')
        {
            result_element.innerHTML = "Computer wins!😱 Click on reset to play again!"
            $("#" + winMoves[i][0]).addClass("turn lost");
            $("#" + winMoves[i][1]).addClass("turn lost");
            $("#" + winMoves[i][2]).addClass("turn lost");
            $('[class^="box-"]').css('perspective', 'none');
            win = true;
        }
        else if (boardMoves[winMoves[i][0]] == 'x' && boardMoves[winMoves[i][1]] == 'x' && boardMoves[winMoves[i][2]] == 'x')
        {
            result_element.innerHTML = "You win!! Congratulations!🤗"
            $("#" + winMoves[i][0]).addClass("turn win");
            $("#" + winMoves[i][1]).addClass("turn win");
            $("#" + winMoves[i][2]).addClass("turn win");
            $('[class^="box-"]').css('perspective', 'none');
            win = true;
        }
    }
    if (win){
        // if the game is over, then the below code will remove the onclick
        result_element.style.display = "block";
        for (i=1; i<10; i++){
            div = document.getElementById(i);
            div.removeAttribute('onclick');
        }
    }
    return win;
}


//this method returns the id of the element where the computer should place the next element
//here I am just checking if there is possibility of winning or losing, if there is then it will return the element id
function getBox(condition)
{
    for (i = 0; i < winMoves.length; i++)
    {
        if (boardMoves[winMoves[i][0]] == condition && boardMoves[winMoves[i][1]] == condition && boardMoves[winMoves[i][2]] == '0')
        {
            return winMoves[i][2];
        }
        else if (boardMoves[winMoves[i][0]] == condition && boardMoves[winMoves[i][2]] == condition && boardMoves[winMoves[i][1]] == '0')
        {
            return winMoves[i][1];
        }
        else if (boardMoves[winMoves[i][1]] == condition && boardMoves[winMoves[i][2]] == condition && boardMoves[winMoves[i][0]] == '0')
        {
            return winMoves[i][0];
        }
    }
    return false;
}


//checking the user click here
function checkClick(boardPosition)
{

    if (boardMoves[boardPosition] === 0)
    {
        var position = document.getElementById(boardPosition);
        
        position.innerHTML = 'x';
        boardMoves[boardPosition] = 'x';
        turns ++;
        //checking if the game is over
        var win = checkWin();
        //calling the computer turn
        if (!win){
            smartComputer();
        }
    }
}


//computer turn
function smartComputer()
{
    //if win is 9 means it's draw
    if (turns >= 9) 
       {
        result_element.innerHTML = "Draw! What a smart game!😎\nClick on reset to play again!"
        result_element.style.display = "block";
        tunrs ++;
        //game is over removing onclick
        for (i=1; i<10; i++){
            div = document.getElementById(i);
            div.removeAttribute('onclick');
        }
        return false;
       }
    //to prevent the case of losing, if the user doesn't place anything in exact middle, this will put the "O" in middle
    if (boardMoves[5] === 0)
    {
        computerMove = 5;
    }
    //checking if we are winning then play offensive
    else if (getBox('o'))
    {
        computerMove = getBox('o')
    }
    //checking if the user is winning then play defense
    else if (getBox('x'))
    {
        computerMove = getBox('x')
    }
    //when there is no winning or losing possibility this scenario will be return
    else {
        do 
        {
            // taking anything between 1 to 9
            computerMove = Math.ceil(Math.random() * 9);
        }
        // checking if the random number is not already selected
        while(boardMoves[computerMove] != 0);
    }
    var position = document.getElementById(computerMove);
    position.innerHTML = 'o';
    boardMoves[computerMove] = 'o';
    turns ++;
    checkWin();
}

document.getElementById("reset-button").onclick = function (){
    // reloading the page to reset everything
    location.reload();
    // boardMoves = [0,0,0,0,0,0,0,0,0,0];
    // turns = 0;
    // for (i=1; i<10; i++){
    //     position = document.getElementById(i);
    //     position.innerHTML = '';
    //     document.getElementById(i).setAttribute("onclick", "1");
    // }
    // result_element.innerHTML = ""
    // result_element.style.display = "none";
    }


//this will give the intro element when the page is loaded
$("#intro").animate({ top: "200px", opacity: "1" }, 1100);
$( "#intro_button" ).click(function() {
    $("#intro").fadeOut(1000);
});
