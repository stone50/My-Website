document.addEventListener('wheel', onScroll);

function onScroll(e){
    let scrollText = document.getElementById("scroll-text");
    if(scrollText){
        const d = document.documentElement;
        const offset = d.scrollTop + window.innerHeight;
        const height = d.offsetHeight;
        let projectDetails = document.getElementById("project-details");
        if (projectDetails.hidden && offset >= height && e.deltaY > 0) {
            projectDetails.hidden = false;
            scrollText.remove();
            document.getElementById("back-to-top-button").hidden = false;
        }
    }
}