// default parameter
function getName(fname: string, lname: string = ' kumar') {
    console.log(fname.concat(lname))
}
getName('Madhav')
getName('Mukund', ' Mohan')

// default Optional Param
let getAdd: (street: string, city: string, state: string, cntry?: string) => void
getAdd = function(street: string, city: string, state: string, cntry: string = 'India'){
    if(typeof cntry!=='undefined')
         console.log(street,city,state,cntry)
    else console.log(street,city,state,cntry)
}

getAdd('Bhoor Ka Bagh','Agra','U.p','America')
getAdd('Bhoor Ka Bagh','Agra','U.p') // default optional param