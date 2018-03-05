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
            wins++;
            $("#wins").html("Wins: " + wins);
        }

        else if (score > target) {
            alert("YOU LOSE");
            losses++;
            $("#losses").html("Losses: " + losses);
        }
    }

    function newGame() {
        score = 0;
        target = Math.ceil(Math.random() * 100);

        value1 = newValue();
        value2 = newValue();
        value3 = newValue();
        value4 = newValue();

        $("#score").html(score);
        $("#target").html(target);
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
    }


    var score;
    var target;
    var wins = 0;
    var losses = 0;

    newGame();

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



