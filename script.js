document
.getElementById("startBtn")
.addEventListener("click", startGame);

function startGame(){

    let players = [];

    let inputs =
    document.querySelectorAll("input");

    inputs.forEach(input => {

        if(input.value.trim() !== ""){

            players.push(input.value);
        }

    });

    if(players.length < 2){

        alert("Minimum 2 players");
        return;
    }

    localStorage.setItem(
        "players",
        JSON.stringify(players)
    );

    window.location.href =
    "game.html";
}
