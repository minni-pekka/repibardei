var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{

fabric.Image.fromURL('AniversarioImagem.png', function (Img) {
    blackImageObject = Img;
    blackImageObject.scaleToWidth(700);
    blackImageObject.scaleToHeight(510);
    blackImageObject.set({
        top:0,
        left:0
    }) 
canvas.add(blackImageObject);

})



	


}

function playSound(){
x.play();
}
