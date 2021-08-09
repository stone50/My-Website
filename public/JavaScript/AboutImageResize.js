let heightWatchers = document.querySelectorAll('[data-watch-height]');

for(let i = 0; i < heightWatchers.length; i++){
    let currentHeightWatcher = heightWatchers.item(i);
    new ResizeObserver(() => onElementResize(currentHeightWatcher)).observe(document.getElementById(currentHeightWatcher.getAttribute("data-watch-height")));
}

function onElementResize(watcher){
    watcher.setAttribute("height", String(document.getElementById(watcher.getAttribute("data-watch-height")).clientHeight) + "px");
}