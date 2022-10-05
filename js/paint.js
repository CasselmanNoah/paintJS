// Un booléen qui, lorsqu'il est vrai, indique que le déplacement de
// la souris entraîne un dessin sur le canevas
let isDrawing = false;
let x = 0;
let y = 0;

var myRandomColor = 'black'
var btC = document.getElementById("btC");
btC.addEventListener("click", btCouleur, false);
var btR = document.getElementById("btR");
btR.addEventListener("click", clear, false);

//Création canvas
canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
// On récupère le décalage du canevas en x et y par rapport aux bords
// de la page
const rect = canvas.getBoundingClientRect();

//On defini la taille du cadre
canvas.setAttribute('width', 400);
canvas.setAttribute('height', 400);

//Rectangle canvas

ctx.strokeRect(0, 0, 400, 400); //Taille du cadre


// On ajoute les gestionnaires d'évènements pour mousedown, mousemove
// et mouseup
canvas.addEventListener('mousedown', e => {
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    isDrawing = true;
});
canvas.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        drawLine(ctx, x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
    }
});

window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        drawLine(ctx, x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = 0;
        y = 0;
        isDrawing = false;
    }
});

//Fonctions pour faire les lignes
drawLine()

function drawLine(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.strokeStyle = myRandomColor;
    ctx.lineWidth = 2;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

function btCouleur() {
    if (document.getElementById("btC")) {
        myRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return myRandomColor;
    }

}

function clear() {
    if (document.getElementById("btC")) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

//Image de fond
/*
ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, image.naturalWidth / 2, 
image.naturalHeight / 2);
*/


//Affiche texte canvas
/*
gras = 'bold ';
texte = 'Du texte';
tailleFont = 44;
font = 'px Rokkitt';
ctx.font = gras + (tailleFont) + font;
taille = ctx.measureText(texte); // récupère largeur dans taille.width et hauteur dans 
taille.height
ctx.fillText(texte, 0, 0); // dessin du texte.
*/