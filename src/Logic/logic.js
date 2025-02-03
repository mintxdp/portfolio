function Arc(
  context,
  x,
  y,
  rad,
  start_angle,
  end_angle,
  clr = "red",
  path = false,
  fill = false,
  fill_clr = "red"
) {
  context.moveTo(x, y);
  context.beginPath();
  context.arc(x, y, rad, start_angle, end_angle);
  context.strokeStyle = `${clr}`;
  context.lineWidth = 30;
  if (fill) {
    context.fillStyle = `${fill_clr}`;
    context.fill();
  }
  context.stroke();

  if (path) context.closePath();
}
function Square(
  ctx,
  x,
  y,
  width,
  fill = false,
  fill_clr = "black",
  clr = "black"
) {
  ctx.moveTo(x, y);
  ctx.beginPath();
  ctx.rect(x, y, width, width);
  if (clr) ctx.strokeStyle = `${clr}`;
  if (fill) {
    ctx.fillStyle = `${fill_clr}`;
    ctx.fill();
  }
  ctx.stroke();
  ctx.closePath();
}

function Line(ctx,x1,y1,x2,y2,width=2){
    ctx.beginPath()
ctx.moveTo(x1,y1)
ctx.lineTo(x2,y2)
ctx.lineWidth=width
ctx.strokeStyle='black'
ctx.stroke()
ctx.closePath()
}
function Text(ctx,text,x,y,size=20,font="Arial",color="black"){
   ctx.font=`${size}px ${font}`
  //  console.log(ctx.font)
  //  ctx.font="30px Arial"
   ctx.fillStyle=color
   ctx.fillText(text,x,y)
}

function Grid(ctx,width=800,height=800){
   for(let i=0;i<800;i+=40){
    Line(ctx,i,0,i,800,1)
    Text(ctx,`${i}`,i,30)
    Line(ctx,0,i,800,i,1)
    Text(ctx,`${i}`,20,i)
   }
   ctx.closePath()
}
export { Arc, Square ,Line, Text,Grid};
