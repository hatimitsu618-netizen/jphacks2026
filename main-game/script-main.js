const boardData = {
    rows: 8,
    columns: 8,
    playerPosition: { row: 1, column: 1 },
    playerStatus: {up: true, down: true, left: true, right: true},
    goalPosition: { row: 3, column: 3 },
    wall: [[2,3], [3,5]]
};


const cells = document.querySelectorAll(".cell");
const player = document.querySelector("#player");

console.log("start");

const movement = (moveRow, moveColumn) => {
    const moveGrid = (moveRow - 1) * boardData.rows + (moveColumn - 1);
    cells[moveGrid].append(player);
}

const wallJudge = () => {
    if (true) {
        console.log("OK");
    }
}

document.addEventListener("keydown", (event) => {
    const downKey = event.key.toLowerCase();  // 置き換え
    
    
    if (downKey === "w" && boardData.playerPosition.row !== 1) {  // wキー(上方向の移動)
        boardData.playerPosition.row -= 1;
        movement(boardData.playerPosition.row, boardData.playerPosition.column);
        console.log("press [W]");
    }
    if (downKey === "a" && boardData.playerPosition.column !== 1) {  // aキー(左方向の移動)
        boardData.playerPosition.column -= 1;
        movement(boardData.playerPosition.row, boardData.playerPosition.column);
        console.log("press [A]");
    }
    if (downKey === "s" && boardData.playerPosition.row !== boardData.rows) {  // sキー(下方向の移動)
        boardData.playerPosition.row += 1;
        movement(boardData.playerPosition.row, boardData.playerPosition.column);
        console.log("press [S]");
    }
    if (downKey === "d" && boardData.playerPosition.column !== boardData.columns) {  // dキー(右方向の移動)
        boardData.playerPosition.column += 1;
        movement(boardData.playerPosition.row, boardData.playerPosition.column);
        console.log("press [D]");
    }    
});

