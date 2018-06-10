var canvas, context;

document.addEventListener("DOMContentLoaded", main, true);
document.addEventListener("mouseup", onmouseup, true);

function onmouseup(/*MouseEvent*/ e){
    var aStar = new Star();
    aStar.x = e.clientX;
    aStar.y = e.clientY;
    aStar.vx = 25;
    star.push(aStar);
    document.title = star.length;
}

var star = new Array(); // в этом массиве будут храниться все объекты
var count = 256; // количество астероидов
var HEIGHT = window.innerHeight, WIDTH = window.innerWidth;
var timer;

var sunMass = 1410720;
var maxVz = 666.66;

var G = 0.0066; // GRAVITY
var dt = 0.01; // stepTime

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
        aStar.x = (WIDTH * Math.random()) / 30 + WIDTH / 2.1;
        aStar.y = (HEIGHT * Math.random()) / 30 + HEIGHT / 1.55;
        aStar.vx = Math.random() * 14 + 1;
        aStar.vy = Math.random() * 4 - Math.random() * 4;
        star.push(aStar);
    }
    // TIMER
    timer = setInterval(Step, dt * 30);
}

function Star(){
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.m = (Math.random() * 2) * 160;
    this.r = this.m / 640; // Radius
    if (this.r < 1) this.r = 1;
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
            if(r < 0.1) r = 0.1; // donotnul
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
      if(rs < 0.1) rs = 0.1;
      //if(rs < 10) star[i].x = -10;
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
		      star[i].x = WIDTH/2;// + Math.random() * 8;
          star[i].y = HEIGHT/2 - 128;// + Math.random() * 8;
          star[i].vx = -8 + Math.random();
          star[i].vy = 0;
          changeX = false;
        };
      
	      if( star[i].y < 0 )
		      star[i].y = HEIGHT;
	      else if( star[i].y > HEIGHT )
		      star[i].y = 0;
	      else changeY = false;
	
	      if( changeY ){
		      star[i].x = WIDTH/2;// + Math.random() * 8;
          star[i].y = HEIGHT/2 + 128;// + Math.random() * 8;
          star[i].vx = 7 + Math.random();
          star[i].vy = 0;
        };
    }
    
    // выводим на экран
    Draw();
}

function Draw(){
    // очищение экрана
    context.fillStyle = 'rgba(0,0,0,1)';
    context.fillRect(0, 0, WIDTH, HEIGHT);
    
    // рисование кругов
    
    for(var i = 0; i < star.length; i++){
      //context.drawImage(astr, star[i].x-4, star[i].y/2+HEIGHT/4-4,8,8);
      context.fillStyle = 'rgba(188,188,148,0.2 )';
      context.beginPath();
        
        context.arc(
            star[i].x,
            star[i].y/2+HEIGHT/4,
            star[i].r + star[i].y/140,
            0,
            Math.PI * 2
        );
      
        context.closePath();
        context.fill();
        
    }
    context.fillStyle = "#8AF";
    context.fillText(star.length, 15, 15);
    context.fillStyle = 'rgba(178,128,255,0.7)';
    context.beginPath();
    context.arc(
      WIDTH/2,
      HEIGHT/2,
      3.1+Math.random(), 
      0, 
      Math.PI * 2
    );
    context.closePath();
    context.fill();
    context.fillStyle = 'rgba(0,0,0,0.8)';
    context.beginPath();
    context.arc(
      WIDTH/2 + Math.random() - Math.random(),
      HEIGHT/2 + Math.random() - Math.random(),
      3.3 + Math.random(), 
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
