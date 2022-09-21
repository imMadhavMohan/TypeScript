// let V/s var declared variables

function letEx(){
    let x:number = 5
    if(true){
        let y:number = 8
        console.log(x,y)
    }
    // let x:number = 12 // not allowed
    x = 14
    console.log(x) 
    // console.log(y) // here we cant use y as it has 'block scope'
}

function varEx(){
    var x:number = 4
    if(true){
        var y:number = 8
        console.log(x,y)
    }
    var x: number = 12 // allowed
    console.log(x)
    console.log(y) // wecan use y here as var has 'functional scope'
}

varEx()
console.log('\n')
letEx()