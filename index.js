try {
    function loadDoc(url, callback) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callback(JSON.parse(this.responseText).results);
            }
        }
    }
    xhttp.open("GET", url);
    xhttp.send();
}
catch (err) {
    console.log("we had a problem reaching the server:( try again later!")
}

getPeople = () => {

}

// loadDoc("https://swapi.dev/api/people", getPeople);

getFilms = () => {
    
}

getShips = () => {
    
}
