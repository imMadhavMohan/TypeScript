// default parameter
function getName(fname, lname) {
    if (lname === void 0) { lname = ' kumar'; }
    console.log(fname.concat(lname));
}
getName('Madhav');
getName('Mukund', ' Mohan');
// default Optional Param
var getAdd;
getAdd = function (street, city, state, cntry) {
    if (cntry === void 0) { cntry = 'India'; }
    if (typeof cntry !== 'undefined')
        console.log(street, city, state, cntry);
    else
        console.log(street, city, state, cntry);
};
getAdd('Bhoor Ka Bagh', 'Agra', 'U.p', 'America');
getAdd('Bhoor Ka Bagh', 'Agra', 'U.p'); // default optional param
