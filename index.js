function loadDoc(key) {
    const xhttp = new XMLHttpRequest()
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        xhttp.onload = () => localStorage.setItem(key, JSON.stringify(xhttp.response.results));
    }
    xhttp.open("GET", "https://swapi.dev/api/" + key);
    xhttp.send();
}

loadDoc("people");
loadDoc("films");
loadDoc("starships");



function getArrayOf(objName) {
    return JSON.parse(localStorage.getItem(objName));
}

getFilterdArrayByAttribure = (arr, attribute, value) => arr.filter((element) => element[attribute] === value);

const PEOPLE_ARR = getArrayOf("people");
const FILMS_ARR = getArrayOf("films");
const STARSHIPS_ARR = getArrayOf("starships");

console.log('getArrayOf("people"): ', getArrayOf("people"))
console.log('eyecolor: ', getFilterdArrayByAttribure(PEOPLE_ARR, "eye_color", 'blue'));
console.log('getFilmsOfDirector: ', getFilterdArrayByAttribure(FILMS_ARR, "director", 'George Lucas'));
console.log('spaces: ', getFilterdArrayByAttribure(STARSHIPS_ARR, "manufacturer","Corellian Engineering Corporation"));


function getObjById(id, objType) {
    const ARR = JSON.parse(localStorage.getItem(objType));
    return ARR[id] || {};
}

/**
 * a function that adds a new object to the type it gets. it gets the type, 
 * then two arrays - one of key names and the other one for their values.
 */
function addObj(ObjType, keys, values) {
    newObj = {};
    const ARR = getArrayOf(ObjType);
    for(let i = 0; i < keys.length; i++) {
        newObj[keys[i]] = values[i];
    }
    ARR.push(newObj);
    localStorage.setItem(ObjType, JSON.stringify(ARR));
}

/**
 * this function sets a given property (with the key and value) to the object of the given id
 */
function setObjProperty(objType, id, key, value) {
    const ARR = getArrayOf(objType);
    ARR[id][key] = value;
    localStorage.setItem(objType, JSON.stringify(ARR));
}
