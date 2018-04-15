var canvas, context;

document.addEventListener("DOMContentLoaded", main, true);
document.addEventListener("mouseup", onmouseup, true);

function onmouseup(/*MouseEvent*/ e){
    var aStar = new Star();
    aStar.x = e.clientX;
    aStar.y = e.clientY;
    aStar.vx = 16;
    star.push(aStar);
    document.title = star.length;
}

var star = new Array(); // в этом массиве будут храниться все объекты
var count = 32; // количество астероидов
var HEIGHT = window.innerHeight, WIDTH = window.innerWidth;
var timer;

var sunMass = 131072;
var maxVz = 1;

var G = 0.066; // GRAVITY
var dt = 0.03; // stepTime

function main(){
    // CREATE Canvas
	canvas = document.createElement('canvas');
	canvas.height = HEIGHT;
	canvas.width = WIDTH;
	canvas.id = 'canvas';
	canvas.style.position = 'absolute';
	canvas.style.top = '0';
	canvas.style.left = '0';
	document.body.appendChild(canvas);
    context = canvas.getContext("2d");
   // CREATE Asters 
    var aStar;
    for(var i = 0; i < count; i++){
        aStar = new Star();
        aStar.x = Math.random() * WIDTH;
        aStar.y = Math.random() * HEIGHT;
        star.push(aStar);
    }
    // TIMER
    timer = setInterval(Step, dt * 1000);
}

function Star(){
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.m = Math.random() * 256;
    this.r = this.m / 96; // Radius
    if (this.r < 0.5) {this.r = 0.5};
}

function Step(){
    var a, ax, ay, dx, dy, r;
    // вычисление каждый с каждым
    for(var i = 0; i < star.length; i++) // считаем текущей
        for(var j = 0; j < star.length; j++) // считаем второй
        {
            if(i == j) continue;
            dx = star[j].x - star[i].x;
            dy = star[j].y - star[i].y;
            
            r = dx * dx + dy * dy;// R^2
            if(r < 0.01) r = 0.01; // donotnul
            if(r > maxVz) continue;
          
            a = G * star[j].m / r;
            
            r = Math.sqrt(r); // тут R
            ax = a * dx / r; // a * cos
            ay = a * dy / r; // a * sin
            
            star[i].vx += ax * dt;
            star[i].vy += ay * dt;
        }

  // меняем координаты, делаем проверки
    for(var i = 0; i < star.length; i++){
        
  // Включаем Солнце
      var as, axs, ays, dxs, dys, rs;
      dxs = WIDTH/2 - star[i].x;
      dys = HEIGHT/2 - star[i].y;
      rs = dxs * dxs + dys * dys;
      if(rs < 1) rs = 1;
      as = G * sunMass / rs;
      rs = Math.sqrt(rs); // тут R
      axs = as * dxs / rs; // a * cos
      ays = as * dys / rs; // a * sin
      star[i].vx += axs * dt;
      star[i].vy += ays * dt;
      
      
      star[i].x += star[i].vx * dt;
      star[i].y += star[i].vy * dt;
        //Проверки края холста
        var changeX = true, changeY = true;
	
	      if( star[i].x < 0 )
          star[i].x = WIDTH;
	      else if( star[i].x > WIDTH ) 
          star[i].x = 0;
        else changeX = false;
	
        if( changeX ){
		      star[i].x = WIDTH/2 + Math.random() * 8;
          star[i].y = HEIGHT/2 + 64 + Math.random() * 8;
          star[i].vx = 15 + Math.random() * 2;
          star[i].vy = 0;
        };
      
	      if( star[i].y < 0 )
		      star[i].y = HEIGHT;
	      else if( star[i].y > HEIGHT )
		      star[i].y = 0;
	      else changeY = false;
	
	      if( changeY ){
		      star[i].x = WIDTH/2 + Math.random() * 16;
          star[i].y = HEIGHT/2 + 128 + Math.random() * 16;
          star[i].vx = 6 + Math.random() * 2;
          star[i].vy = 0;
        };
    }
    
    // выводим на экран
    Draw();
}

function Draw(){
    // очищение экрана
    context.fillStyle = 'rgba(0,0,0,0.6)';
    context.fillRect(0, 0, WIDTH, HEIGHT);
    
    // рисование кругов
    context.fillStyle = 'rgba(128,128,128,0.3)';
    for(var i = 0; i < star.length; i++){
        context.beginPath();
        
        context.arc(
            star[i].x,
            star[i].y,
            star[i].r,
            0,
            Math.PI * 2
        );
      
        context.closePath();
        context.fill();
    }
    context.fillStyle = "#8AF";
    context.fillText(star.length, 20, 15);
    context.fillStyle = 'rgba(255,128,0,0.7)';
    context.beginPath();
    context.arc(
      WIDTH/2,
      HEIGHT/2,
      3+Math.random()*1, 
      0, 
      Math.PI * 2
    );
    context.closePath();
    context.fill();
}

window.addEventListener( 'resize', function(){
	
	canvas.height = HEIGHT = window.innerHeight;
	canvas.width = WIDTH = window.innerWidth;
	
})
