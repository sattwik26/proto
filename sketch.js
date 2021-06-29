////////////////////////////////////////////////////////////////////////////////////////////

var a = prompt('Enter the first variable: ');
var b=prompt('Enter the second variable: ');
function setup(){
  createCanvas(400,400)
  var b2 = createButton("click here to Swap");
b2.mousePressed(swap)
  }


function draw()
{
}
function swap(){
  [a,b]=[b,a]
  text("a:"+a,200,180);
  text("b:"+b,200,200);
}