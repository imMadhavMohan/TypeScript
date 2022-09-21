// Fnction in typescript
function Product(a:number, b:number):number{ // return type numeric
    return a+b
}

// console.log(Product(5,'4')) // CTE
console.log(Product(5,4))

function getName(a:string, b:string):void{ // Return nothing
    console.log(a.concat(b).toUpperCase())
}
getName('Madhav',' Mohan')
