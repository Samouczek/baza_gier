class Game{
    constructor(title, rating, description){
        this.title = title;
        this.rating = rating;
        this.description = description; 
    }
}

let games = []; 

function addTableRow(game){
    let tableBody = document.getElementById("game_table");
    let tableRow = tableBody.insertRow(); 
    let titleCall = tableRow.insertCell();
    titleCall.appendChild(document.createTextNode(game.title));
    let ratingCall = tableRow.insertCell();
    ratingCall.appendChild(document.createTextNode(game.rating));
    let detailsCall = tableRow.insertCell();
    detailsCall.appendChild(createDetailsButton());
    let deteteCall = tableRow.insertCell();
    deteteCall.appendChild(createDeleteButton());
}

function createDetailsButton() {
    let detailsButton = createButton("Pokaż szczegóły"); 
    detailsButton.onclick=()=>{
        let rowIndex = detailsButton.parentNode.parentNode.rowIndex-1;
        let game = games[rowIndex]; 
        let gameDetailsParagraph = document.getElementById("description");
        gameDetailsParagraph.textContent = `Opis gry: ${game.description}`; 

    }
    return detailsButton; 
}

function createDeleteButton(){
    let deleteButton = createButton("Usuń"); 
    deleteButton.onclick=()=>{
        let tableRow = deleteButton.parentNode.parentNode;
        let tableBody = tableRow.parentNode; 
        let gameIndex = tableRow.rowIndex;
        tableBody.deleteRow(gameIndex);
        games.splice(gameIndex,1); 
    }
    return deleteButton; 
}

function createButton(text){
    let button = document.createElement("button");
    let buttonBody = document.createTextNode(text);
    button.appendChild(buttonBody);
    return button; 
}

(function examleGames() {
    games.push(new Game("Wiedźmin 3", 10, "Fantastyczna gra o walce z potworami i jeżdzeniu na koniu."));
    games.push(new Game("Starcraft", 7, "Walki kosmitów i różnych ras."));
    games.push(new Game("The Sims", 8, "Buduj domy, rozwijaj relacje. Prawdziwe życie w realnym świecie."));
    games.forEach(game=> addTableRow(game));
})(); 

function addGame() {
    let title = document.getElementById("game-name").value;
    let rating = document.getElementById("game-rate").value;
    let description = document.getElementById("game-description").value; 
    let game = new Game(title,rating,description); 
    games.push(game); 
    addTableRow(game); 
    
}

(function registryAddButtonClick() {
    let addButton = document.getElementById("button_add"); 
    addButton.onclick=addGame; 
})()