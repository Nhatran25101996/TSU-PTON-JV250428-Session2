function processConfirm(answer) {
    let result;
    if (answer) {
        result = "Excellent. We will play a nice game of chess.";
    } else {
        result = "Maybe later then.";
    }
    return result;
}

let answer = confirm("Do you want to play a game?");
let result2 = processConfirm(answer);
alert(result2);
