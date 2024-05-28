var n = 10;
var pacmanIndex;
var ghostIndex;
var fruitIndex;
var score = 0;
var game;
var direction = 1;

function createGame(n) {
    pacmanIndex = Math.floor(Math.random()*(n-1));
    ghostIndex = (pacmanIndex + 3) % n;
    fruitIndex = (ghostIndex + 2) % n;

    let map = new Array(n);
    for (var i=0; i<n; i++) {
        switch (i) {
            case pacmanIndex:
                map[i] = "C";
                break;
            case ghostIndex:
                map[i] = "^.";
                break;
            case fruitIndex:
                map[i] = "@";
                break;
            default:
                map[i] = ".";
        }
    }
    return map;
}

function moveLeft(game) {
    if (pacmanIndex!=ghostIndex) {
        game[pacmanIndex] = " ";
    } else {
        game[pacmanIndex] = "^.";
    }
    pacmanIndex = (((pacmanIndex - 1) % n) + n) % n;
    
    let element = String(game[pacmanIndex]);
    if (element.includes(".")) {
        score++;
    }
    game[pacmanIndex] = "C" + game[pacmanIndex];

    console.log(game.join("  "));
    console.log(score);

    //next level check
    if (score == (n-1)) {
        console.log("Next level");
        score = 0;
        let newGame = createGame(n);
        console.log(newGame.join("  "));
        return newGame;
    }

    return game;
}

function moveRight(game) {
    if (pacmanIndex!=ghostIndex) {
        game[pacmanIndex] = " ";
    } else {
        game[pacmanIndex] = "^.";
    }
    pacmanIndex = (pacmanIndex + 1) % n;

    let element = String(game[pacmanIndex]);
    if (element.includes(".")) {
        score++;
    }
    game[pacmanIndex] = "C" + game[pacmanIndex];

    console.log(game.join("  "));
    console.log(score);

    //next level check
    if (score == (n-2)) {
        console.log("Next level");
        score = 0;
        let newGame = createGame(n);
        console.log(newGame.join("  "));
        return newGame;
    }
    
    return game;
}

function changeGhostDirection() {
    direction = Math.random()<0.5 ? -1 : 1;
}

function moveGhost(game) {
    let cur = String(game[ghostIndex]);
    if (cur.includes(".")) {
        game[ghostIndex] = ".";
    } else if (cur.includes("@")){
        game[ghostIndex] = "@";
    }else {
        game[ghostIndex] = " ";
    }
    ghostIndex = (ghostIndex + direction + n) % n;
    game[ghostIndex] = "^" + game[ghostIndex];
    console.log(game.join("  "));
}

game = createGame(n);
console.log(game.join("  "));
game = moveLeft(game);
for (var i=0; i<n; i++) {
    game = moveRight(game);
}
game = moveRight(game);
console.log(score);

//test ghost movement without timing
moveGhost(game);
moveGhost(game);
changeGhostDirection();
moveGhost(game);