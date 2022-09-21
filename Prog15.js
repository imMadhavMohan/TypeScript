// Enumerated type is a useddefined data type have collection of constant values
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
function isItSummer(month) {
    var isSummer;
    switch (month) {
        case Month.Apr:
        case Month.May:
        case Month.Jun:
        case Month.Jul:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(Month.Jan));
console.log(isItSummer(Month.Jun));
console.log(isItSummer(6));
console.log(Month[7]);
console.log(Month.Sep);
// 2nd ex
var score;
(function (score) {
    score[score["Mohan"] = -2] = "Mohan";
    score[score["Modi"] = -1] = "Modi";
    score[score["Raman"] = 0] = "Raman";
    score[score["Ram"] = 1] = "Ram";
})(score || (score = {}));
console.log(score.Modi);
console.log(score[-0]);
