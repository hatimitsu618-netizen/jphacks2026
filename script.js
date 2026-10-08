const boardData = {
    rows: 8,
    columns: 8,
    playerPosition: { row: 1, column: 1 },
    playerStatus: {up: true, down: true, left: true, right: true},
    goalPosition: { row: 3, column: 3 },
    wall: [[2,3], [3,5]]
};

const mouseStatus = {
    mouse:,
    
};


const cells = Array.from(document.querySelectorAll(".cell"));
const player = document.querySelector("#player");

console.log("start");

let mouseOnJudge = false;   // マウスがマス目に乗ったかの判定用bool値

const drawFun = () => {
    
}

cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        console.log("mouse on");
        mouseOnJudge = true;
    });

    cell.addEventListener("mouseleave", () => {
        console.log("mouse leave");
        mouseOnJudge = false;
    });

    cell.addEventListener("click", (event) => {
        if (mouseOnJudge) {
            const clickedGridIndex = cells.indexOf(event.currentTarget);
            console.log(`click ${cells[clickedGridIndex]}`);
        }
    });


});


