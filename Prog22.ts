// Optional Parameter
function mul(a:number, b:number, c?:number): number{
    if(typeof c!=='undefined') // c!=='undefined'
        return a*b*c
    return a*b
}
console.log(mul(4,5))
console.log(mul(4,5,2))