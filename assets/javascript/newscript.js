window.onload = function () {

    function newValue(crystalDom) {
        const randomValue = Math.ceil(Math.random()*10);
        crystalDom.attr('data-crystalvalue', randomValue);
    }

    function handleCrystalClick() {
        score = score + parseInt($(this).attr('data-crystalvalue'));
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

    // generatre new values for each crystal
    $(newValue('#crystal1'));
    $(newValue('#crystal2'));
    $(newValue('#crystal3'));
    $(newValue('#crystal4'));

    $("target").html(target);
    $("score").html(score);

    $(document).click(function () {
        gameover()
    });

    $("#newGame").click(newGame);

    $('.crystal').click(handleCrystalClick);

    $("#target").html(target);
    $("#score").html(score);

};



