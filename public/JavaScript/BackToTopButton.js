document.getElementById("back-to-top-button").addEventListener('click', onClick);

function onClick(e){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Oper
}