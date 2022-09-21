// Boolean Data type 
function printMe(isVote) {
    console.log(isVote);
}
function checkVoterList(age) {
    return age > 18;
}
var Age = 23;
checkVoterList(Age) ? printMe('You Can Vote') : printMe('You Can\'t Vote');
