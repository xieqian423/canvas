/**
 * Created by Administrator on 2017/10/2.
 */
var Point = function(x,y){
    this.x = x;
    this.y = y;
}

/**
 * 创建正多边形
 * @param opts
 * @constructor
 */
var Polygon = function(opts){
    this.x = opts.centerX;
    this.y = opts.centerY;
    this.radius = opts.radius;  //半径
    this.sizes = opts.sizes;  //边的数量
    this.startAngle = opts.startAngle;
    this.strokeStyle = opts.strokeStyle;
    this.fillStyle = opts.fillStyle || "blue";
}

Polygon.prototype = {
    getPoints: function(){
        var points = [],
            angle = this.startAngle || 0,
            i =0;
        for(; i< this.sizes; i++){
            var point = new Point(this.x+this.radius*Math.sin(angle), this.y-this.radius*Math.cos(angle));
            points.push(point);
            angle += 2*Math.PI/this.sizes;
        }
        return points;
    },
    createPath: function(context){
        var points = this.getPoints();
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for(var i=1; i< this.sizes; i++){
            context.lineTo(points[i].x, points[i].y);
        }
        context.closePath();
    },
    stroke: function(context){
        context.save();
        this.createPath(context);
        context.strokeStyle = this.strokeStyle;
        context.stroke();
        context.restore();
    },
    fill: function(context){
        context.save();
        this.createPath(context);
        context.fillStyle = this.fillStyle;
        context.fill();
        context.restore();
    },
    move: function(x,y){
        this.x = x;
        this.y = y;
    }
}