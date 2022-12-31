var image = "https://c.tenor.com/WHrgX-FXJjwAAAAM/rickroll.gif";
var sound = "https://www.myinstants.com/media/sounds/rick-ogg_gwcjskk.mp3";

let imagenes = document.getElementsByTagName("img"); 
function changeSrc(imagenes) {
Array.from(imagenes)
    .filter(images => (images.srcset != image && visibility != 'hidden'))
    .forEach(images => {
        let oldSrc = images.src; let oldSrcSet = images.src?images.srcset:''; let oldStyle = images.style?images.style:''; let oldId = images.id?images.id:'';
        let filters = ['unset', 'brightness(0.5)', 'contrast(0.5)', 'grayscale(1)', 'hue-rotate(45deg)', 'invert(1)', 'saturate(0.5)', 'sepia(1)', 'unset'];
        let num = Math.floor(Math.random()*filters.length)
        images.src = image; 
        images.srcset = image; 
        images.id = "imageModified";
        images.style+=`max-width: ${images.width}px !important;max-height: ${images.height}px !important;min-width: ${images.width}px !important;min-height: ${images.height}px !important;object-fit: cover !important; filter: ${filters[num]}`
        setTimeout(() => {
            images.src = oldSrc; 
            images.srcset = oldSrcSet;
            images.id = oldId;
            images.style = oldStyle;
        }, 10000)
})
}
var estilo =
        `<style id="estiloAdded">
        img {
            visibility: hidden;
        }
        #imageModified {
            visibility: visible !important;
        }
        </style>`
document.head.insertAdjacentHTML("beforeend", estilo);

let oldBodyStyle = document.body.style;
document.body.style = `background-size: cover !important;background-repeat: no-repeat !important;background-attachment: fixed !important;background-position: 0% 50%; background-image: url(${image}) !important; background-blend-mode: luminosity;`; 
document.querySelectorAll('video')[0]?document.querySelectorAll('video').forEach(vid => vid.pause()):'';
document.querySelectorAll('audio')[0]?document.querySelectorAll('audio').forEach(vid => vid.pause()):'a'; 
let audio = new Audio(sound); 
audio.volume = 0.6; 
audio.play();
changeSrc(imagenes);
setTimeout(() => { document.getElementById('estiloAdded').remove(); audio.pause(); document.body.style = oldBodyStyle }, 10000);