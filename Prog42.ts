// Generics in TS
// help us to increase code reusability as we can use that component(class,interface,fun(), var, obj, etc)
// with any kind of data types rather than single data type.
// to achieve this we use <T> braces with T = types 

function sayHello<T>(msg:T):T{
    return msg
}

console.log(sayHello<string>('Hi Madhav!'))
console.log(sayHello<number>(23))

function printItem<T>(items:T[]):T[]{ // return an arr of type 'T'
    return new Array<T>().concat(items)
}

console.log(printItem<number>([12,14,16,18,20]))
console.log(printItem<string>(['App','Nap','Slap','Dap']))

function fullName<T,U>(name:T, age:U):void{
    console.log(name, age, typeof(name), typeof(age))
}

fullName<string,number>('Madhav Mohan',23)

// Generic Interface
interface PrintInfo<T,U>{
    id:U;
    fname:T;
    lname:T;
    age:U;   
    pin:U; 
}

let myInfo:PrintInfo<string, number> = {
    id:1,
    fname:'Madhav',
    lname:'Mohan',
    age: 23,
    pin: 1234
}
console.log(myInfo)

// Generic interface having function
interface nameAge<T,U>{
    (fname:T,age:U):void
}

function printName(name:string, age:number):void{
    console.log(`${name} & ${age}`)
}

let maddyName:nameAge<string,number> = printName
maddyName('Madhav_Mohan', 23)
console.log(maddyName)

function friendInfo(name:string, city:string):void{
    console.log(`${name} & ${city}`)
}

let mukuInfo:nameAge<string,string> = friendInfo
mukuInfo('Mukund Mohan', 'Agra')
console.log(mukuInfo)

