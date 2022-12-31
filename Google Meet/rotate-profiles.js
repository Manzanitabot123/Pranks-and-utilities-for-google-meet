var css = '@keyframes rotation {from { transform: rotate(0deg); } to { transform: rotate(359deg); }}', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
head.appendChild(style); style.type = 'text/css';
if (style.styleSheet){ style.styleSheet.cssText = css;} 
else { style.appendChild(document.createTextNode(css)) }; 
for(x=0; x<document.querySelectorAll("img").length; x++) { 
    document.querySelectorAll("img")[x].style.animation = "rotation 0.7s infinite linear"; 
}

/*
To disable just copy this:
for(x=0; x<document.querySelectorAll("[class='qg7mD r6DyN xm86Be JBY0Kc eXUaib']").length; x++) { document.querySelectorAll("[class='qg7mD r6DyN xm86Be JBY0Kc eXUaib']")[x].style.animation = ""}
*/