const plays=[``,``,``,``,``,``,``,``,``];
let currentPlayer='X';
let playCount=0;
function setCurrentPlayer(cplayer){
    console.log(cplayer);
    let player = document.getElementById('currentPlayer');
    player.textContent=`Current Player ${cplayer}`;
}
function onPlay(pos){
    if(plays[pos]!==``){
        alert(`Play on empty sport`);
        return;
    }
    playCount++;
    plays[pos]=currentPlayer;
    let ele = document.getElementById(`id${pos}`);
    ele.value=currentPlayer;
    ele.disabled=true;
    currentPlayer= currentPlayer==='X'? 'O':'X';
    setCurrentPlayer(currentPlayer);
}
function reset(){
    for(let i=0;i<plays.length;i++){
        let ele = document.getElementById(`id${i}`);
        ele.value=``;
        ele.disabled=false;
        plays[i]=``;
    }
    currentPlayer='X';
    setCurrentPlayer('X');
    playCount=0;
}
function evaluateSuccess(){
    if(isWinner(plays[0],plays[1],plays[2])){
        alert(`${plays[0]} is winner`);
        return;
    }
    if(isWinner(plays[3],plays[4],plays[5])){
        alert(`${plays[3]} is winner`);
        return;
    }
    if(isWinner(plays[6],plays[7],plays[8])){
        alert(`${plays[6]} is winner`);
        return;
    }
    if(isWinner(plays[0],plays[3],plays[6])){
        alert(`${plays[0]} is winner`);
        return;
    }
    if(isWinner(plays[1],plays[4],plays[7])){
        alert(`${plays[1]} is winner`);
        return;
    }
    if(isWinner(plays[2],plays[5],plays[8])){
        alert(`${plays[2]} is winner`);
        return;
    }
    if(isWinner(plays[0],plays[4],plays[8])){
        alert(`${plays[0]} is winner`);
        return;
    }
    if(isWinner(plays[2],plays[4],plays[6])){
        alert(`${plays[2]} is winner`);
        return;
    }
    if(playCount==9){
        alert('it is a tie');
    }
}

function isWinner(val1,val2,val3){
    if(!val1 || !val2|| !val3){
        return false;
    }

    if(val1===val2 && val2===val3){
        return true;
    }
    return false;
}
setCurrentPlayer(currentPlayer);