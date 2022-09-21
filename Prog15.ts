// Enumerated type is a useddefined data type have collection of constant values
enum Month{Jan , Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec}

function isItSummer(month:Month){
    let isSummer: boolean;
    switch(month){
        case Month.Apr:
        case Month.May:            
        case Month.Jun:
        case Month.Jul:
            isSummer = true
            break
        default:
            isSummer = false
            break
    }
    return isSummer
}

console.log(isItSummer(Month.Jan))
console.log(isItSummer(Month.Jun))
console.log(isItSummer(6))
console.log(Month[7])
console.log(Month.Sep)


// 2nd ex
enum score{Mohan=-2, Modi, Raman, Ram}
console.log(score.Modi)
console.log(score[-0])
