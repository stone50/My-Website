//setup events for project categories
let categories = document.getElementsByClassName("category");

for(let i = 0; i < categories.length; i++){
    categories.item(i).addEventListener('mouseover', onMouseHoverCategory);
    categories.item(i).addEventListener('mouseleave', onMouseLeaveCategory);
}

function onMouseHoverCategory(e) {
    let target = e.target;
    if(target.getAttribute("class") === "category-header"){
        target.nextElementSibling.hidden = false;
    }
}

function onMouseLeaveCategory(e) {
    e.target.children[1].hidden = true;
}

//setup events for project titles
let projects = document.getElementsByClassName("project-title");

for(let i = 0; i < projects.length; i++){
    projects.item(i).addEventListener('mouseover', onMouseHoverProject);
    projects.item(i).addEventListener('mouseleave', onMouseLeaveProject);
    projects.item(i).addEventListener('mouseup', onMouseUpProject);
}

function onMouseHoverProject(e) {
    e.target.style.backgroundColor = "#808080";
}

function onMouseLeaveProject(e) {
    e.target.style.backgroundColor = "white";
}

function onMouseUpProject(e){
    let target = e.target;
    target.parentElement.hidden = true;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            let projectHtml = "Unexpected error occurred.";
            switch (this.status){
                case 200:
                    projectHtml = this.responseText;
                    document.getElementById("project-css").setAttribute("href", `CSS/Projects/${target.getAttribute("data-css")}`);
                    document.getElementById("back-to-top-button").hidden = true;
                    break;

                case 404:
                    projectHtml = "Page not found.";
                    document.getElementById("project-css").removeAttribute("href");
                    break;
            }
            document.getElementById("project-body").innerHTML = projectHtml;
        }
    }
    xhttp.open("GET", `../HTML/Projects/${target.getAttribute("data-html")}`);
    xhttp.send();
}