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
