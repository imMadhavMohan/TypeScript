// Boolean Data type 
function printMe(isVote:string){
    console.log(isVote)
}

function checkVoterList(age:number){
    return age>18
}
let Age = 23

checkVoterList(Age)?printMe('You Can Vote'):printMe('You Can\'t Vote')
