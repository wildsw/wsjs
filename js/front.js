var canvas, context;

var astr = new Image();
astr.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAGk0lEQVR4nO2ZaUxUZxSGLzCsMyzCMDPs+8DMsDowoCAgiCCiIKAogsomIMiwDfsiq2yKiFs1rq200bRJt7SpbWLjryZdkjZNbX/0R3803dImjWmj1pye8w0YQuIdlpmxafySN8MNmZvnfrznfO+5cNyL9f9aFs8b4OmysbERubu7qZWKkDZFWHAjfraqlPIpZVjw2cjwsIsJmug7MVGq92LVkXdD5YG3ZVL3SaGDfS1+VY2yNxuopaWlIEIVundHdvrLFYeKvm5uqHzU1lwN9TUH4FBpIezbsxPi1JEQHOQH66NVgLCADwH4HfD38wInRxHgPZ7grd5GeZoUViCwsouPizlYWbb3o/7uRhjqb4HJ491w+cIkjA7o4HBFMWSkJzEwhAL8CvsUCASAuwtCoT1YW1uDhYUF+928vkRlmgTY1dXFu6p8360LsyNwfKgdxoY74PzpEbh0bgwmRrugpnI/bN2yCZydHRcDLVc/olKNChzg7xOPoPdfvTELJ8Z7GPSF2VG4enEKJkY6AXce0jcnQmCAL9vVVUCTfkClGwUYiyrp7KmhL+auz6INJmAcIWem+uHM9CB7AB16OXNLMvj6eIKdne1qgRf0CbdWj/v7eYdfOj/++QfvvAJXXppE/3aBtq4MBnqbobezAfq6tFCybxfIgwNAInFD/1qsFZp0c9XAYrGr75npoc8+vnMLXrtxBnC3oaWxCqrRu62Nh6GrrQ56Ouphc0oC+Pl6gZurCyswi7VD/45SrApa11wzd+fdm/DW65eZHQZ6m9jOtrXUQGN9OXS310GLtgpi1RHg4SFh0NbWAqY1QpPeR7muCJh8fHvu/MO566fh4tkx3NGjMDrYBsPHWtnP5GPszWiNPEjZFA/qmHBwF7syTxsJmtSxIujd+duHb16bYZagXkwHBxXeFPbkYz2N7LogLws2JqghOlIBgf4+4O0lA7HbOnDAfmwk6F9QmmUBW1lZWeOf/97MiWNsd6nwdE2Hga4JmLxcXJQL4Uo5SNzdQCoVgz3uMF2TRYwEvKA3CckgNJ56NrVVJfepQ2jRu3Q0d7fXwwieeP3dWvYQdOpFRShA8fRo9mYtz8bG2lgdZLGalrPTttjGvmlvrYU6BCYPT4x2wsmJXhjsa8GDpAgKd22DrK0pkIp+ztmWxnKFna0t2NvbgYfMnX0aEfpvVJ4hbgv0611dUzUQ+GBfMwOenR5gra7paAUrwKyMZNDERkHSxlhWjFHobcocQqGDMYtxQR+ibHipU5MTxgZ6mtghQoV4bmaYFWGLtpJBFxXmMFhNXBQmOX9QKUNYB/H0kBobdrH4j/joSGV5p+4IgyToWewcVIh9XQ3M43sKt7PYSZ3CAa1ABUmF6OLiZEroFl5oLLCiBiy46spi7CA6PTQeMFigkJ+bBVvSEiEo0A98vD1AKhGDk5MIMAViWLIyJfQRXmhsY5rqiuIn9bUHWYqbPTnAsgZ1DYKknrw5ZQPglAIikZDdlHy8kKFNpAp+aIlYU3Zg9z9khXHMzcexX9MDFGDX8JBJcJd9ISVJw6xhQsilKuGFVilC8uiYPlJdynp0O+YNHAAAZz4Wisi7lJ2xPZoL+DGnnymfvTDQd9BhQi2vA0UHCs19lC/oJmQDEbY2M+7yI5SSF3pTokZHHqbjm7oI2SQnOw3WmbY78OkBKoQXGg+LXsoYrQjd1lzDskaCJsbcHl6sn1AyXuiYKGVDbdV+qDi0B7Ag2esAmkyWTNHmFv/EjoNsEXmYdjgTJ2xqc54Y9I2cKVaqA7zQruucIw6WFDzcvzcPsrNSIUweCF6eUgZt4l78LP2GCuKFxlbmiEnuu9352ZCdmcoCUWREGBaiMwjM1+YW63uUCy80LZxK3tiKJyAFIwpElDUoMz8HYNK0QWBagQE+pbk5GWyckocEsEAUFhrEomdEeCjLGmYC/opwlgXt5CgKzc/NfECRk0Gr5BAwPwtSjnaczxxmkMEB4OnC2CnL25HxM4WkxA1qiF0fwcYqKkYz9usplGDZ0LQUoUFXcCCA5KQ4tImSvbYVGm/a5tNfnD6KGh5qly4rS0uZTCqeQz8/pl2mwLTKt6Ir0a+o0hXDLl3Ym0sxL39LrwpMnOyucobS3AqXBDWB+sPIoH+iBlDbOEPD6xqWHKVFXUNdQX3K6cf8h5w+Qj5aBPTYAPC9eVizL0dO/yBhnP5tZyRqJ6f3ZTwql9MPpeWoMk4/gRSg0jhz/qPoxXqx/uPrXxKOzwdWdkaMAAAAAElFTkSuQmCC';


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
var count = 512; // количество астероидов
var HEIGHT = window.innerHeight, WIDTH = window.innerWidth;
var timer;

var sunMass = 1310720;
var maxVz = 0;

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
        aStar.vx = Math.random() * 10 - Math.random() * 10;
        aStar.vy = Math.random() * 10- Math.random() * 10;
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
    this.m = Math.random() * 320;
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
		      star[i].x = WIDTH/2;// + Math.random() * 8;
          star[i].y = HEIGHT/2 - 128;// + Math.random() * 8;
          star[i].vx = -26 + Math.random();
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
          star[i].vx = 26 + Math.random();
          star[i].vy = 0;
        };
    }
    
    // выводим на экран
    Draw();
}

function Draw(){
    // очищение экрана
    context.fillStyle = 'rgba(8,8,8,1)';
    context.fillRect(0, 0, WIDTH, HEIGHT);
    
    // рисование кругов
    
    for(var i = 0; i < star.length; i++){
      context.drawImage(astr, star[i].x-4, star[i].y/2+HEIGHT/4-4,8,8);
      context.fillStyle = 'rgba(88,88,88,0.1)';
      context.beginPath();
        
        context.arc(
            star[i].x,
            star[i].y/2+HEIGHT/4,
            star[i].r + (star[i].y/170),
            0,
            Math.PI * 2
        );
      
        context.closePath();
        context.fill();
        
    }
    context.fillStyle = "#8AF";
    context.fillText(star.length, 15, 15);
    context.fillStyle = 'rgba(255,128,0,0.8)';
    context.beginPath();
    context.arc(
      WIDTH/2,
      HEIGHT/2,
      7+Math.random()*1, 
      0, 
      Math.PI * 2
    );
    context.closePath();
    context.fill();
    context.fillStyle = 'rgba(255,255,128,0.5)';
    context.beginPath();
    context.arc(
      WIDTH/2 + Math.random()*1 - Math.random()*1,
      HEIGHT/2 + Math.random()*1 - Math.random()*1,
      5 + Math.random()*1, 
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
