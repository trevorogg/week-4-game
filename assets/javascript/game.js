window.onload = function () {

    function newValue() {
        return Math.ceil(Math.random() * 10);
    }

    function crystal1() {
        score = score + value1;
        $("#score").html(score);
    }

    function crystal2() {
        score = score + value2;
        $("#score").html(score);
    }

    function crystal3() {
        score = score + value3;
        $("#score").html(score);
    }

    function crystal4() {
        score = score + value4;
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

    function newGame() {
        score = 0;
        target = Math.ceil(Math.random() * 100);

        $("#score").html(score);
        $("#target").html(target);
    }

    newGame();

    var score = 0;
    // generate random target value
    var target = Math.ceil(Math.random() * 100);
    // generate value for each crystal
    var value1 = newValue();
    var value2 = newValue()
    var value3 = newValue()
    var value4 = newValue();

    $("target").html(target);
    $("score").html(score);

    $(document).click(function () {
        gameover()
    });

    $("#newGame").click(newGame);

    $("#crystal1").click(crystal1);
    $("#crystal2").click(crystal2);
    $("#crystal3").click(crystal3);
    $("#crystal4").click(crystal4);

    $("#target").html(target);
    $("#score").html(score);

};



