// create async function fight
async function fight(p1, p2, ...points) {
    let loser = null;
    let players = new Array(p1, p2);
    let pId = 0;
    while (loser === null) {
        let point = points[Math.floor(Math.random() * points.length)];
        players[pId].hit(players[pId + 1], point);
        if (players[pId + 1].health <= 0) {
            loser = players[pId + 1];
        }
        players.reverse();
    }
    let result = await loser.knockout();
}
