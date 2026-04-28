const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(100,100,20,0,2*Math.PI);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();