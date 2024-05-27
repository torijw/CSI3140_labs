function createGame(n) {
    var pacmanIndex = Math.floor(Math.random()*(n-1));
    var ghostIndex = (pacmanIndex + 3) % n;
    var fruitIndex = (ghostIndex + 2) % n;

    var map = new Array(n);
    for (var i=0; i<n; i++) {
        switch (i) {
            case pacmanIndex:
                map.push("C");
                break;
            case ghostIndex:
                map.push("^.");
                break;
            case fruitIndex:
                map.push("@");
                break;
            default:
                map.push(".");
        }
    }
    console.log(map.join("  "));
}

createGame(10);