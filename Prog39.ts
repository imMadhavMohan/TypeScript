import { mySpace as mineSpace} from "./Prog38";
// export import of modules is same as javascript, same aliasing is used

let detail:mineSpace.Person = {
    fname: 'Madhav',
    lname: ' Mohan',
    age : 23,
    street: 'Agra Road'
}

let city:string = mineSpace.getCity()
let age:number = mineSpace.getAge(detail.age)
let fullname:string = mineSpace.getFullname(detail.fname.concat(detail.lname))

console.log(city, age, fullname)