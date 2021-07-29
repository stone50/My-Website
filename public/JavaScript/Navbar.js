let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
        let newElement = document.createElement("nav");
        newElement.id = "navbar";
        switch (this.status){
            case 200:
                newElement.innerHTML = this.responseText;
                let style = document.createElement("link");
                style.setAttribute("rel", "stylesheet");
                style.setAttribute("href", "CSS/Navbar.css");
                document.getElementsByTagName("head")[0].append(style);
                break;

            case 404:
                newElement.innerHTML = "Page not found.";
                break;

            default:
                newElement.innerHTML = "Unexpected error occurred.";
        }
        const body = document.getElementsByTagName("body")[0];
        body.insertBefore(newElement, body.firstChild);
    }
}

xhttp.open("GET", "../HTML/Navbar.html");
xhttp.send();