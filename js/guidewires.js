
function drawHorizontalLine(context, y){
    context.save();
    context.moveTo(0, y+0.5);
    context.lineTo(context.canvas.width, y+0.5);
    context.stroke();
}

function drawVerticalLine(context, x){
    context.save();
    context.moveTo(x+0.5, 0);
    context.lineTo(x+0.5, context.canvas.height);
    context.stroke();
}

function drawGuidewires(context,x,y,style){
    style = style || {};
    context.save();
    context.strokeStyle = style.strokeStyle || "rgba(0,0,230,0.4)";
    context.lineWidth = style.lineWidth || 0.5;
    drawHorizontalLine(context, y);
    drawVerticalLine(context, x);
    context.restore();
}
