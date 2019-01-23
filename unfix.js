var elems = document.body.getElementsByTagName("*");
var len = elems.length
var config = { attributes: true, childList: true, subtree: true };

var callback = function(mutationsList, observer){
    for(var mutation of mutationsList) {
        if (mutation.attributeName == 'style'){
            for(var style of  mutation.target.style)
                if(style == 'position'){
                    mutation.target.style.setProperty('position', 'absolute', 'important');
                }
        }
    }
}

for (var i=0;i<len;i++) {
    if (window.getComputedStyle(elems[i],null).getPropertyValue('position') == 'fixed') {
        elems[i].style.setProperty('position', 'absolute', 'important');
    }
}

var observer = new MutationObserver(callback);
observer.observe(document.body, config);