let icon = 1;
 
function zmien() {
	let ile = obrazki.length;
    document.getElementById("change").src = obrazki[icon];	
    icon++;
    if(ile==icon) {
        icon=1;
	} 
 
}

setInterval("zmien()", 1000);

const obrazki = new Array("img/ai.svg", "img/bootstrap.svg", "img/css.svg", "img/html.svg", "img/js.svg", "img/ps.svg");