canvas = document.getElementById("myCanvas")
ctx = canvas.getContext ('2d')

img_width = 300;
img_height = 100;

var img_image;

//coloque as coordenadas da imagem

function add() {
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//crie um escutador de evento para keyDown

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)){
		numberkey();
		document.getElementById("d1").innerHTML="você está pressionando uma tecla do numérica"
		}
		else if  ((keyPressed >=65 && keyPressed<=90)){
			aplhabetkey();
			document.getElementById("d1").innerHTML="você está pressionando uma tecla do alfabeto"
		}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="voce está pressionando uma outra tecla";
	}
}

function aplhabetkey()
{
	img_image="alfabeto.png"
	//chame a função add para adicionar a imagem

}
function numberkey()
{
	img_image="número.png"
	add();
	
}
function arrowkey()
{
	img_image="direcional.png"
	add();
}
function specialkey()
{
	img_image="especial.png"
	add();
}
function otherkey()
{
	img_image="outras.png";
	add();
}
	
