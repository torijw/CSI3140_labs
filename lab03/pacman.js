var n = 10;
var pacmanIndex;
var ghostIndex;
var fruitIndex;
var score = 0;

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
    var pacmanIndex = (((pacmanIndex - 1) % n) + n) % n;
    
    if (game[pacmanIndex]==".") {
        score++;
    }
    game[pacmanIndex] = "C" + game[pacmanIndex];

    console.log(game.join("  "));
    return game;
}

function moveRight(game) {
    if (pacmanIndex!=ghostIndex) {
        game[pacmanIndex] = " ";
    } else {
        game[pacmanIndex] = "^.";
    }
    pacmanIndex = (pacmanIndex + 1) % n;

    if (game[pacmanIndex]==".") {
        score++;
    }
    game[pacmanIndex] = "C" + game[pacmanIndex];
    
    console.log(game.join("  "));
    return game;
}

game = createGame(n);
console.log(game.join("  "));
game = moveLeft(game);
game = moveRight(game);
console.log(score);