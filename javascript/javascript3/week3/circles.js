//Canvas and a Circle
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
ctx.beginPath();
ctx.arc(800, 500, 100, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

//Circle Class
class Circle {
    constructor(x, y, r, startAng, endAng, color){
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAng = startAng;
        this.endAng = endAng;
        this.color = color;
    }

    draw () {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAng, this.endAng);
        ctx.fillStyle = this.color;
        ctx.fill();  
    }
}

const circle1 = new Circle (50, 50, 20, 0, 2 * Math.PI, "#900000");
const circle2 = new Circle (100, 100, 50, 0, 2 * Math.PI, "#909000");
// circle1.draw();
// circle2.draw();
const randomMath = x => Math.floor(Math.random() * x);
const randomColor = () => {
    let color = '#';
    let letters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//Randomly appearing Circles
setInterval(() => {
    const circleX = new Circle (randomMath (1920), randomMath (1080), randomMath (100), 0, 2 * Math.PI, randomColor());
    circleX.draw(); 
}, 100); 

//Circles around MouseMove
document.addEventListener('mousemove', function (e){
const x = e.clientX; y = e.clientY;
const circleX = new Circle (x, y, randomMath (100), 0, 2 * Math.PI, randomColor());
circleX.draw(); 
})