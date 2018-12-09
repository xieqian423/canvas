/**
 * Created by Administrator on 2018/12/9.
 */
// 9.1.2
var ImagePainter = function (imageUrl) {
    this.image = new Image();
    this.image.src = imageUrl;
};

ImagePainter.prototype = {
    paint: function (sprite, context) {
        if(this.image.complete) {
            context.drawImage(this.image, sprite.left, sprite.top, sprite.width, sprite.height);
        }
    }
};