var characterPoints=100;
var attackPoints=10;
var enemyPoints=100;
display();

function display(){
    document.getElementById("character-points").innerHTML=`
    <b>Points:</b> ${characterPoints}`;
    document.getElementById('status').innerHTML=
    `<h2>Playing....</h2>`
}

function attack(){
    var newPoints= characterPoints-attackPoints;
    characterPoints=newPoints;
    display();
    if(characterPoints<=0){
        document.getElementById('attack-btn').style.
        display="none";
        document.getElementById('status').innerHTML=
        `<h2>Game Over....</h2> <button onclick="restart()">Restart
        </button>`;
    }

function restart (){
    characterPoints>=100;
    display();
    document.getElementById('attack-btn').style.display="block";
}
}