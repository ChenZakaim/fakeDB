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
loadDoc("species");
