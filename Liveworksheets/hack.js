let element, total = 0, select = 0, tick = 0, drop = 0, text = 0, choose = 0, ans = null, joins = 0, join = null, x1, y1, svg;
Array.from(contenidorellenado)
.forEach(x => {
total++;
if(x[0].includes('select:')) {
	element = document.querySelectorAll('[id^="selectablediv"]')[select];
    (x[0].includes('yes') && !element.ariaChecked)?element.click():{};
    select++; element.ariaChecked = true; console.log("%c"+total+" | Success => "+x[0], 'background: #005e06; color: white; font-size: 12px') 
} else if(x[0].includes('tick:')) {
	element = document.querySelectorAll('[id^="tickbox"]')[tick];
    (x[0].includes('yes') && !element.ariaChecked)?element.click():{};
    tick++; element.ariaChecked = true; console.log("%c"+total+" | Success => "+x[0], 'background: #005e06; color: white; font-size: 12px') 
} else if(x[0].includes('drop:')) {
	element = document.querySelectorAll('[id^="dragablediv"]')[drop];
    !element.ariaChecked?(element.style.top = x[1]+'px', element.style.left = x[2]+'px'): {};
    drop++; element.ariaChecked = true; console.log("%c"+total+" | Success => "+x[0], 'background: #005e06; color: white; font-size: 12px') 
} else if(x[0].includes('choose:')) {
	element = document.querySelectorAll('[id^="selectbox"]')[choose];
    !element.ariaChecked?(ans = x[0].replace('choose:','').split('/').findIndex(entry => entry.includes("*")), element.selectedIndex = ans+1):{};
    choose++; element.ariaChecked = true; console.log("%c"+total+" | Success => "+x[0], 'background: #005e06; color: white; font-size: 12px') 
} else if (x[0].includes('drag:') || x[0].includes('print:') || x[0].includes('playmp3:')) {
	console.log("%c"+total+" | Success => "+x[0], 'background: #005e06; color: white; font-size: 12px') 
} else if (x[0].includes('join:')) {
	if(x[0]===join) { x[5] = "ans-"+join;
	} else { x[5] = "ans-"+x[0]; join = x[5]}
	console.log("%c"+total+" | Success => "+x[0], 'background: #005e06; color: white; font-size: 12px') 
} else if (x[0] =='') {
	text++; console.log("%c"+total+" | Free answer", 'background: yellow; color: black; font-size: 12px') 
} else if(typeof x[0] === "string") {
	element = document.querySelectorAll('[id^="textbox"]')[text];
    !element.ariaChecked?(element.textContent = x[0]):{};
    text++; element.ariaChecked = true; console.log("%c"+total+" | Success => "+x[0], 'background: #005e06; color: white; font-size: 12px') 
} else console.log("%c"+total+" | Error => "+x[0], 'background: #5e0000; color: white; font-size: 12px') 
})

