var w = c.width = window.innerWidth,
		h = c.height = window.innerHeight,
		ctx = c.getContext( '2d' ),
		
		particles = [],
		minSquareDist = w * 16,
		springConst = .0000032,
		tick = 0;
for( var i = 0; i < 256; ++i )
	particles.push( new Particle );
function Particle(){
	
	this.x = Math.random() * w;
	this.y = Math.random() * h;
	
	var rad = Math.random() * Math.PI * 2;
	
	this.vx = Math.cos( rad ) * 0.1;
	this.vy = Math.sin( rad ) * 0.1;
	
	this.waveSize = rad;
}
Particle.prototype.update = function(){
	
	this.x += this.vx;
	this.y += this.vy;
	
	var changeX = true,
	changeY = true;
	
	if( this.x < 0 )
		this.x = w;
	else if( this.x > w )
		this.x = 0;
	else changeX = false;
	
	if( changeX )
		this.vx *= 0.95;
	
	if( this.y < 0 )
		this.y = h;
	else if( this.y > h )
		this.y = 0;
	else changeY = false;
	
	if( changeY )
		this.vy *= 0.95;
}

Particle.prototype.render = function(){
	ctx.fillStyle = '#fff'
	ctx.beginPath();
	ctx.arc( this.x, this.y, 4 * this.waveSize, 0, Math.PI * 2 );
	ctx.fill();
}
function anim(){
	
	window.requestAnimationFrame( anim );
	
	++tick;
	
	ctx.fillStyle = 'rgba(0,0,0,1)';
	ctx.fillRect( 0, 0, w, h );
	ctx.strokeStyle = 'rgba(128,128,128,0.1)';
	
	particles.map( function( particle ){ particle.update(); } );
	
	for( var i = 0; i < particles.length; ++i ){
		
		var p1 = particles[ i ];
		
		for( var j = i + 1; j < particles.length; ++j ){
			
			var p2 = particles[ j ],
					dx = p1.x - p2.x,
					dy = p1.y - p2.y,
					dSquare = dx*dx + dy*dy;
			
			if( dSquare < minSquareDist ){
				
				p1.vx -= dx * springConst;
				p1.vy -= dy * springConst;
				p2.vx += dx * springConst;
				p2.vy += dy * springConst;
				
				ctx.lineWidth = ( 2 - dSquare / minSquareDist ) * 2;
				
				ctx.beginPath();
				ctx.moveTo( p1.x, p1.y );
				ctx.lineTo( p2.x, p2.y );
				ctx.stroke();
			}
		}
		
		p1.render();
	}
}
anim();
window.addEventListener( 'resize', function(){
	
	w = c.width = window.innerWidth;
	h = c.height = window.innerHeight;
	
	minSquareDist = w * 16;
})
	
