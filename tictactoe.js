function game() {

    var blocks = [];
    var count = 0;
    var f = "x";

    this.init = function init() {
        var i, e;
        for (i = 1; i <= 9; i++) {
            blocks[i] = "#";
            e = document.getElementById(i);
            e.style.backgroundColor = "blue";
        }
        count = 0;
        f = "x";
    };
    
    this.set = function set(id) {
        var gameover = false;
        
        // Early return!!!
        if (blocks[id] !== '#') {
            alert("please pick someother box to continue the game");
            return;
        }

        blocks[id] = f;
        count += 1;

        var e = document.getElementById(id);
        if (f === "x") {
            e.style.backgroundColor = "green";
        } else {
            e.style.backgroundColor = "red";
        }

        f = f ===  "x" ? "0" : "x";

        var t = iswin();
        if (t === "x") {
            alert("player 1 wins :)");
            gameover = true;

        } else if (t === "0") {
            alert("player 2 wins :)");
            gameover = true;
        
        } else if (count >= 9) {
            alert("It's a tie :)");
            gameover = true;
            
        }

        if (gameover) {
            if (prompt("Game is over. Do you want to again play the game?") === "yes") {
                return this.init();
            }
            /*else
            {
            var u=document.get
            }*/
        }
    };
    
    var iswin = function iswin() {
        if ((blocks[1] === "x" && blocks[2] === "x" && blocks[3] === "x") || (blocks[4] === "x" && blocks[5] === "x" && blocks[6] === "x") || (blocks[7] === "x" && blocks[8] === "x" && blocks[9] === "x") || (blocks[1] === "x" && blocks[4] === "x" && blocks[7] === "x") || (blocks[2] === "x" && blocks[5] === "x" && blocks[8] === "x") || (blocks[3] === "x" && blocks[6] === "x" && blocks[9] === "x") || (blocks[1] === "x" && blocks[5] === "x" && blocks[9] === "x") || (blocks[3] === "x" && blocks[5] === "x" && blocks[7] === "x")) return "x";
        else if ((blocks[1] === "0" && blocks[2] === "0" && blocks[3] === "0") || (blocks[4] === "0" && blocks[5] === "0" && blocks[6] === "0") || (blocks[7] === "0" && blocks[8] === "0" && blocks[9] === "0") || (blocks[1] === "0" && blocks[4] === "0" && blocks[7] === "0") || (blocks[2] === "0" && blocks[5] === "0" && blocks[8] === "0") || (blocks[3] === "0" && blocks[6] === "0" && blocks[9] === "0") || (blocks[1] === "0" && blocks[5] === "0" && blocks[9] === "0") || (blocks[3] === "0" && blocks[5] === "0" && blocks[7] === "0")) return "0";
    };

}

window.ngame = new game();
window.ngame.init();