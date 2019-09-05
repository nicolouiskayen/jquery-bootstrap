$(document).ready(function() {
    var goal = 0;
    var total = 0;
    var wins = 0;
    var losses = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;

    function reset() {
        goal = Math.floor(Math.random() * 100) + 1;
        total = 0;
        crystal1 = Math.floor(Math.random() * 9) + 1;
        crystal2 = Math.floor(Math.random() * 9) + 1;
        crystal3 = Math.floor(Math.random() * 9) + 1;
        crystal4 = Math.floor(Math.random() * 9) + 1;
        $("#goal").text("Goal: " + goal);
        $("#total").text("Total: " + total);
    }
    $("#crystal-1").on("click", function(){
        total += crystal1
        $("#total").text("Total: " + total)
        if (total === goal) {
            wins += 1;
            reset();
            $(".wins").text("Wins: " + wins);

        } else if (total > goal) {
            losses += 1;
            reset();
            $(".losses").text("Losses: " + losses);
        }       
    })
    $("#crystal-2").on("click", function(){
        total += crystal2
        $("#total").text("Total: " + total)
        if (total === goal) {
            wins += 1;
            reset();
            $(".wins").text("Wins: " + wins);

        } else if (total > goal) {
            losses += 1;
            reset();
            $(".losses").text("Losses: " + losses);
        }       
    })
    $("#crystal-3").on("click", function(){
        total += crystal3
        $("#total").text("Total: " + total)
        if (total === goal) {
            wins += 1;
            reset();
            $(".wins").text("Wins: " + wins);

        } else if (total > goal) {
            losses += 1;
            reset();
            $(".losses").text("Losses: " + losses);
        }       
    })
    $("#crystal-4").on("click", function(){
        total += crystal4
        $("#total").text("Total: " + total)
        if (total === goal) {
            wins += 1;
            reset();
            $(".wins").text("Wins: " + wins);

        } else if (total > goal) {
            losses += 1;
            reset();
            $(".losses").text("Losses: " + losses);
        }       
    })
    reset();
});