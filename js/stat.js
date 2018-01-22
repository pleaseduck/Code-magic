var canvas = document.getElementById('statsCloud');
var ctx = canvas.getContext('2d');
window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110,20,420,270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100,10,420,270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы разъебали забор!', 120, 40);
  ctx.fillText('Результаты:', 120, 56);
  var max = -1;
  var maxIndex = -1;
for (var i = 0; i < times.length; i++) {
  var time = times[i];
  if (time > max) {
    max = time;
    maxIndex = 1;
  }
}
var histogramHeight = 150;
var step = histogramHeight/(max);

ctx.translate(540, 420);
var canvasWidth = 420;
var barWidth = 20;
var indent = 40;
var initialX = canvasWidth - indent*2;
var initialY = 80;
var lineHeight = 15;

ctx.rotate(Math.PI);
for(var i = 0; i < times.length; i++) {
  if (i == 2) {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(initialX - 100*i + barWidth*i, 170, barWidth, times[i]*step);
  } else {
  ctx.fillStyle = 'rgba(0, 17, 255, 0.7)';
  ctx.fillRect(initialX - 100*i + barWidth*i, 170, barWidth, times[i]*step);
}
}

ctx.rotate(Math.PI);
ctx.translate(-540, -400);
for(var i = 0; i < times.length; i++) {
    ctx.fillStyle = 'rgb(0, 0, 0)';
 ctx.fillText(names[i],140 + indent + barWidth*i + 50*i, 250);
}
}
