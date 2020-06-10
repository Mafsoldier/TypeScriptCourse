const sqlite3 = require('sqlite3').verbose();


// player class
class Player {
    constructor(name) {
        this.playername = name;
        this.score = 0;
        this.playedMatches = 0;
        this.wins = 0;
        this.losses = 0;
        this.goals = 0;
        this.counterGoals = 0;
        this.klinkers = 0;
    }
}

// setting default players
let text = "";
let list = "";
let defaultPlayer1 = new Player("Marc");
let defaultPlayer2 = new Player("Jus");
let defaultPlayer3 = new Player("Benjamin");
let players = [defaultPlayer1, defaultPlayer2, defaultPlayer3];
let arrayLength = players.length;


//Add a player to the player list 
function addPlayer() {

    if (checkIfPlayerExists(document.getElementById("add-player").value)) {
        console.log("no player added..");
    } else {
        let newPlayer = new Player(document.getElementById("add-player").value);
        players.push(newPlayer);
        console.log(newPlayer.playername + " is added to the list.");
        consoleLogPlayers();
    }
}

function checkIfPlayerExists(playerName) {
    if (findPlayerIndex(playerName)) {
        return true;
    } else {
        return false;
    }
}

//get player name from index number
function getPlayerName(index) {
    console.log(players[index].playername);
    return players[index].playername;
}

// function to find a player 
function findPlayerIndex(inputPlayer) {
    for (var i = 0; i < players.length; i += 1) {
        if (players[i].playername === inputPlayer) {
            console.log("The index number is: " + i);
            return i;
        }
    }
}

// console log player list
function consoleLogPlayers() {
    players.forEach(function (arrayItem) {
        var x = arrayItem.playername;
        console.log(x);
    });
}

// Delete a player from the player list
function deletePlayer() {
    if (checkIfPlayerExists(document.getElementById("delete-player").value)) {
        let x = document.getElementById("delete-player").value;
        let playerIndex = findPlayerIndex(x);
        players.splice(playerIndex, 1);
        console.log("Succeed");
    } else {
        console.log("can't find player");
    }
}

// function to set the score
function setScores(playerWins) {

    // let winningPlayer = document.getElementById("winningPlayer").value;
    let winningPlayerIndex = findPlayerIndex(playerWins);
    players[winningPlayerIndex].score = players[winningPlayerIndex].score + 1;
    console.log("The player: " + players[winningPlayerIndex].playername + " has: " + players[winningPlayerIndex].score + " points.")

}

// setup game match

function chooseMatch() {
    let player1 = document.getElementById("choisePlayer1").value;
    let player2 = document.getElementById("choisePlayer2").value;
    if (player1 === player2) {
        console.log("false match");

    } else {
        console.log(player1 + " versus " + player2);
    }

}

// nog doornemen met Benjamin
// Making the choise list of players
//alleen gaan tonen wie er tegen elkaar kunnen.
// function writePlayersOptions() {
//     let part1 = `<select id="choisePlayer1">`;
//     let part2 = '</select><select id="choisePlayer2">';
//     let part3 = '</select>';

//     for (let i = 0; i < arrayLength; i++) {
//         list +=
//             "<option value=" + i + ">" + players[i].playername + "</option>";
//     }
//     document.getElementById("players").innerHTML = part1 + list + part2 + list + part3;
// }

function writePlayersOptions() {

    for (let i = 0; i < arrayLength; i++) {
        list +=
            "<option value=" + i + ">" + players[i].playername + "</option>";
    }
    document.getElementById("choisePlayer1").innerHTML = list;
}

// write the players to the dome

function writePlayers() {

    for (let i = 0; i < arrayLength; i++) {
        text +=
            "<li id=id " + i + "><div>" +
            players[i].playername + "</div><div>Score:" +
            players[i].score + "</div></li>";
    }
    document.getElementById("spelers").innerHTML = "<ul>" + text + "</ul>";
}


function consoleLogger() {

    console.log("works!");
}