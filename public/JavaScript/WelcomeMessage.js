new ResizeObserver(onWindowResize).observe(document.getElementById("playing-chess-image"));

function onWindowResize(){
    let image = document.getElementById("playing-chess-image");
    let messageBox = document.getElementById("welcome-message");

    messageBox.style.width = String(image.clientWidth * 0.6) + "px";
    messageBox.style.height = String(image.clientHeight * 0.62) + "px";

    let messageText = document.getElementById("welcome-text");
    messageText.style.fontSize = String(messageBox.clientHeight * 0.15) + "px";
    messageText.style.marginTop = String((messageBox.clientHeight - messageText.clientHeight) / 2) + "px";
    messageText.style.marginBottom = String((messageBox.clientHeight - messageText.clientHeight) / 2) + "px";
}