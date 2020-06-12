// const sqlite3 = require('sqlite3').verbose();

// player class
class Player {
    constructor(name) {
        this.playername = name;
        this.playedMatches = 0;
        this.score = 0;
        this.wins = 0;
        this.losses = 0;
        this.goals = 0;
        this.counterGoals = 0;
        this.klinkers = 0;
    }
}

// setting default players
let list = "";
let listPlayer2 = "";
let defaultPlayer1 = new Player("Marc");
let defaultPlayer2 = new Player("Jus");
let defaultPlayer3 = new Player("Benjamin");
let defaultPlayer4 = new Player("Peter");
let players = [defaultPlayer1, defaultPlayer2, defaultPlayer3, defaultPlayer4];
let arrayLength = players.length;

//Add a player to the player list 
function addPlayer() {

    if (checkIfPlayerExists(document.getElementById("add-player").value)) {
        console.log("no player added..");
    } else {
        let newPlayer = new Player(document.getElementById("add-player").value);
        players.push(newPlayer);
        console.log(newPlayer.playername + " is added to the list.");
    }
    writePlayers();
    writePlayersOptions();
}

// Delete a player from the player list
function deletePlayer() {
    if (checkIfPlayerExists(document.getElementById("delete-player").value)) {
        let x = document.getElementById("delete-player").value;
        let playerIndex = findPlayerIndex(x);
        players.splice(playerIndex, 1);
    } else {
        console.log("can't find player");
    }
    writePlayers();
    writePlayersOptions();
}

//checks if player is known
function checkIfPlayerExists(playerName) {
    if (findPlayerIndex(playerName) >= 0 ) {
        return true;
    } else {
        return false;
    }
}

//get player name from index number
function getPlayerName(index) {
    return players[index].playername;
}

// function to find a player 
function findPlayerIndex(inputPlayer) {
    for (var i = 0; i < players.length; i += 1) {
        if (players[i].playername === inputPlayer) {
            return i;
        }
    }
}

// function to set the score
function setScores(playerWins) {

    let winningPlayerIndex = findPlayerIndex(playerWins);
    players[winningPlayerIndex].score = players[winningPlayerIndex].score + 1;
    console.log("The player: " + players[winningPlayerIndex].playername + " has: " + players[winningPlayerIndex].score + " points.")

}

// setup game match
function match() {
    let player1 = document.getElementById("choisePlayer1").value;
    let player2 = document.getElementById("choisePlayer2").value;
    if (player1 === player2) {
        document.getElementById("matchStatus").innerHTML = "Not Possible!";

    } else {
        let name1 = getPlayerName(player1);
        let name2 = getPlayerName(player2);
        document.getElementById("matchStatus").innerHTML = (name1 + " versus " + name2);
        let a = document.getElementById("spelers");
        a.style.display = "none";
        let b = document.getElementById("mainForm");
        b.style.display = "none";
    }
}

// Making the choise list of first players
function writePlayersOptions() {
    list = '"<option value="">Kies speler</option>"';
    listPlayer2 = '"<option value="">Kies eerst speler 1</option>"';
    for (let i = 0; i < arrayLength; i++) {
        list +=
            "<option value=" + i + ">" + players[i].playername + "</option>";
    }
    document.getElementById("choisePlayer1").innerHTML = list;
    document.getElementById("choisePlayer2").innerHTML = listPlayer2;
}

// write the players to the dome
function writePlayers() {
    let text = "";
    arrayLength = players.length;
    for (let i = 0; i < arrayLength; i++) {
        text +=
            "<li id=id " + i + "><div>" +
            players[i].playername + "</div><div>Score:" +
            players[i].score + "</div></li>";
    }
    document.getElementById("spelers").innerHTML = "<ul>" + text + "</ul>";
}

function writePlayersOptions2() {
    let selectedFirstPlayer = (document.getElementById(`choisePlayer1`).value);
    listPlayer2 = '"<option value="">Kies speler</option>"';

    for (let i = 0; i < arrayLength; i++) {
        if (i == selectedFirstPlayer) {
            continue;
        } else {
            listPlayer2 +=
                "<option value=" + i + ">" + players[i].playername + "</option>";
        }
    }
    document.getElementById("choisePlayer2").innerHTML = listPlayer2;
}

// HULP FUNCTIES
// ------------------------------------

function consoleLogger() {

     console.log(players[0].playername);

}

// console log player list
function consoleLogPlayers() {
    players.forEach(function (arrayItem) {
        var x = arrayItem.playername;
        console.log(x);
    });
}
