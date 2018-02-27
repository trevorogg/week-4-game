window.onload = function () {
    // declare variables
    var score, target, val1, val2, val3, val4;

    var crystalValue = [];

    function newGame() {
        score = 0;
        target = Math.ceil(Math.random()*100);
        val1 = newValue();
        val2 = newValue();
        val3 = newValue();
        val4 = newValue();

        crystalValue = [val1, val2, val3, val4];
    }

    function newValue() {
        return Math.random()*10;
    }

    function crystal(whichCrystal) {
        score = score + crystalValue[whichCrystal];
        $("#score").html(score);
    }

    function gameover() {
        if (score == target) {
            alert("YOU WIN");
        }

        else if (score > target) {
            alert("YOU LOSE");
        }
    }

    

    newGame();




























}