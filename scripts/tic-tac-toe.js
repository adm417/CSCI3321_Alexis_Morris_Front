var gameOver = false;
var currentPlayer = 'X';
var totalMove = 0;

function placeMarker(squares){
    if(!gameOver){
        var spot = document.getElementById(squares);

        if(spot.innerHTML === ''){
            spot.innerHTML += currentPlayer;
            
            if(currentPlayerWon()){
                updateGameStatus();
            }
            else{
                totalMove++;
                if(currentPlayer === 'X'){
                    currentPlayer = 'O';
                }
                else if(currentPlayer === 'O'){
                    currentPlayer = 'X';
                }
                updateGameStatus();
            }
        }
    }
}

function currentPlayerWon(){
    var s1 = document.getElementById('spot1');
    var s2 = document.getElementById('spot2');
    var s3 = document.getElementById('spot3');
    var s4 = document.getElementById('spot4');
    var s5 = document.getElementById('spot5');
    var s6 = document.getElementById('spot6');
    var s7 = document.getElementById('spot7');
    var s8 = document.getElementById('spot8');
    var s9 = document.getElementById('spot9');

    if((s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML && s1.innerHTML !== '') 
    || (s4.innerHTML === s5.innerHTML && s5.innerHTML === s6.innerHTML && s4.innerHTML !== '') 
    || (s7.innerHTML === s8.innerHTML && s8.innerHTML === s9.innerHTML && s7.innerHTML !== '') 
    || (s1.innerHTML === s4.innerHTML && s4.innerHTML === s7.innerHTML && s1.innerHTML !== '')
    || (s2.innerHTML === s5.innerHTML && s5.innerHTML === s8.innerHTML && s2.innerHTML !== '')
    || (s3.innerHTML === s6.innerHTML && s6.innerHTML === s9.innerHTML && s3.innerHTML !== '')
    || (s1.innerHTML === s5.innerHTML && s5.innerHTML === s9.innerHTML && s1.innerHTML !== '')
    || (s3.innerHTML === s5.innerHTML && s5.innerHTML === s7.innerHTML && s3.innerHTML !== ''))
    {
        gameOver = true;    
    }
    else{
        gameOver = false;
    }

    if(!gameOver){
        if(totalMove === 9){
            gameOver = true;
        }
        else{
            gameOver = false;
        }
    }
    return gameOver;
}

function updateGameStatus(){
    var statusBoard = document.getElementById('gamestatus');

    if(gameOver){
        statusBoard.innerHTML = "Player " + currentPlayer + " has won";
    }
    else{
        if(totalMove !== 9){
            statusBoard.innerHTML = "Player " + currentPlayer + " it's your turn";
        }
        else{
            statusBoard.innerHTML = "It is a tie.";
        }
    }
}

function replayGame(){
    var replay = document.getElementById('btn');
    //var display = replay.style.display;

    if((currentPlayerWon()) || (totalMove === 9)){
        replay.style.display = 'block';
    }
}