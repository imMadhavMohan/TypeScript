// Interface extends interface & Array type interface, we can achieve multiple inheritance using interfaces
interface Person{
    fname: string,
    lname: string,
    age: number
}

interface Men extends Person{
    sex?: string,
    city: string,
    pin: string
}

let Maddy = <Men> {}; // assigned a empty obj of type <Men> interface
Maddy.pin = '28005'
Maddy.lname = 'Mohan'
Maddy.fname = 'Madhav'
Maddy.age = 23
Maddy.city = 'Agra'

console.log(Maddy)

// Array type interface
interface data{
    [i:number]:string // 'i' is index to retrieve the element by index in array 
}

let userName : data = ['Maddy','Sam','Rok','Joe']

for(let i=0;i<4;i++)
    console.log(userName[i])


    
