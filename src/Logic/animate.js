// function Animate( element , fxn, canvas){
// 
    // ctx.clearRect(0,0,canvas.width,canvas.height)
    // fxn()
    // 
  //Animation logic
// 
    // requestAnimationFrame(Animate)
// 
// }

function Move(element , fxn ,canvas , context , x){
    context.clearRect(0,0,canvas.width,canvas.height)
    x=5;y=0
   fxn()
   x+=dx;

   requestAnimationFrame(Move)
}