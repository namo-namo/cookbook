(() => {
  'use strict'

  function draw(canvas) {
    let height = canvas.height;
    let width  = canvas.width ;

    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,height,width);
    for(let i=0; i<100; i++) {
      const x = Math.floor(Math.random()*width);
      const y = Math.floor(Math.random()*height);
      const rad = Math.floor(30);

      const r = Math.floor(Math.random()*255);
      const g = Math.floor(Math.random()*255);
      const b = Math.floor(Math.random()*255);
      ctx.beginPath();
      ctx.arc(x,y,rad,Math.PI*2,0,false);
      ctx.fillStyle = `rgba(${r},${g},${b},1)`;
      ctx.fill();
      ctx.closePath();
    }
  }

  const cl = document.getElementById('canvas_left');
  const cr = document.getElementById('canvas_right');
  draw(cl)
  draw(cr)
})();
