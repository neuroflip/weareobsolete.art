


const canvasWidth = 265,
    canvasHeight = 265,
    scaleFactor = 1.1,
    xoffset = 0,
    yoffset = 0,
    zOff = 150;

var Cube3d = function(canvas) {
        this.canvas = canvas;
        this.canvasCtx = this.canvas.getContext('2d');
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.canvasCtx.lineWidth = 0.5;

        createCubeData.call(this);
};

Cube3d.prototype = {
    Constructor: Cube3d,
    requestAnimationFrameID: null,
    canvas: null,
    canvasCtx: null,
    cube: null,
    xangle: 0,
    yangle: 0,
    isAnimationInitiated: false,

    render: function() {
        if(!this.isAnimationInitiated) {
            setInterval(animate.bind(this), 5);
            this.isAnimationInitiated = true;
        }
        
        clearCtx.call(this);
        calculate2DProjection.call(this);
        draw_cube.call(this, xoffset, yoffset);

        this.requestAnimationFrameID = window.requestAnimationFrame(this.render.bind(this), this.canvas);
    }
}

function animate() {
    xrotate.call(this, 0.01);
    yrotate.call(this, 0.01);
}

function clearCtx() {
    this.canvasCtx.fillStyle = "#000";
    this.canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);
}

function calculate2DProjection() {
    for (var i = 0; i < 8; i++) {
        this.cube2d[i][0] = Math.floor((this.cube3d[i][0] * scaleFactor * 80 / this.cube3d[i][2] * scaleFactor) + (this.canvas.width / 2));
        this.cube2d[i][1] = Math.floor((this.cube3d[i][1] * scaleFactor * 80 / this.cube3d[i][2] * scaleFactor) + (this.canvas.height / 2));
    }
}

function createCubeData() {
    this.cube2d = createArray(8, 2);
    this.cube3d = createArray(8, 3);        

    this.cube3d[0][0] = -50;
    this.cube3d[0][1] = 50;
    this.cube3d[0][2] = zOff - 50;

    this.cube3d[1][0] = 50;
    this.cube3d[1][1] = 50;
    this.cube3d[1][2] = zOff - 50;

    this.cube3d[2][0] = -50;
    this.cube3d[2][1] = -50;
    this.cube3d[2][2] = zOff - 50;

    this.cube3d[3][0] = 50;
    this.cube3d[3][1] = -50;
    this.cube3d[3][2] = zOff - 50;

    this.cube3d[4][0] = -50;
    this.cube3d[4][1] = 50;
    this.cube3d[4][2] = zOff + 50;

    this.cube3d[5][0] = 50;
    this.cube3d[5][1] = 50;
    this.cube3d[5][2] = zOff + 50;

    this.cube3d[6][0] = -50;
    this.cube3d[6][1] = -50;
    this.cube3d[6][2] = zOff + 50;

    this.cube3d[7][0] = 50;
    this.cube3d[7][1] = -50;
    this.cube3d[7][2] = zOff + 50;

    xrotate.call(this, 0.1);
    yrotate.call(this, -0.99);
}

function zrotate(q) {
    var tx, ty, temp;
    for (var i = 0; i < 8; i++) {
        tx = this.cube3d[i][0];
        ty = this.cube3d[i][1];
        temp = tx * Math.cos(q) - ty * Math.sin(q);
        ty = tx * Math.sin(q) + ty * Math.cos(q);
        tx = temp;
        this.cube3d[i][0] = tx;
        this.cube3d[i][1] = ty;
    }
}

function yrotate(q) {
    var tx, tz, temp;
    for (var i = 0; i < 8; i++) {
        tx = this.cube3d[i][0];
        tz = this.cube3d[i][2] - zOff;
        temp = tz * Math.cos(q) - tx * Math.sin(q);
        tx = tz * Math.sin(q) + tx * Math.cos(q);
        tz = temp;
        this.cube3d[i][0] = tx;
        this.cube3d[i][2] = tz + zOff;
    }
}

function xrotate(q) {
    var ty, tz, temp;
    for (var i = 0; i < 8; i++) {
        ty = this.cube3d[i][1];
        tz = this.cube3d[i][2] - zOff;
        temp = ty * Math.cos(q) - tz * Math.sin(q);
        tz = ty * Math.sin(q) + tz * Math.cos(q);
        ty = temp;
        this.cube3d[i][1] = ty;
        this.cube3d[i][2] = tz + zOff;
    }
}

function scale(s) {
    for (var i = 0; i <8; i++) {
        this.cube3d[i][0] = this.cube3d[i][0] * s;
        this.cube3d[i][1] = this.cube3d[i][1] * s;
        this.cube3d[i][2] = this.cube3d[i][2] * s;
    }
}

function drawLine(x0, y0, x1, y1, color) {
    this.canvasCtx.strokeStyle = color;
    this.canvasCtx.beginPath();
    this.canvasCtx.moveTo(x0, y0);
    this.canvasCtx.lineTo(x1, y1);
    this.canvasCtx.stroke();
}

function draw_cube(xoffset, yoffset) {
    var relX = 0,
        relY = 0,
        color = "#fff";

    relY = 0; //canvasWidth / 2 + yoffset;
    relX = 0;//canvasWidth / 2 + xoffset;

    drawLine.call(this, this.cube2d[0][0] + relX, this.cube2d[0][1] + relY, this.cube2d[1][0] + relX, this.cube2d[1][1] + relY, color);
    drawLine.call(this, this.cube2d[0][0] + relX, this.cube2d[0][1] + relY, this.cube2d[2][0] + relX, this.cube2d[2][1] + relY, color);
    drawLine.call(this, this.cube2d[0][0] + relX, this.cube2d[0][1] + relY, this.cube2d[4][0] + relX, this.cube2d[4][1] + relY, color);
    drawLine.call(this, this.cube2d[1][0] + relX, this.cube2d[1][1] + relY, this.cube2d[5][0] + relX, this.cube2d[5][1] + relY, color);
    drawLine.call(this, this.cube2d[1][0] + relX, this.cube2d[1][1] + relY, this.cube2d[3][0] + relX, this.cube2d[3][1] + relY, color);
    drawLine.call(this, this.cube2d[2][0] + relX, this.cube2d[2][1] + relY, this.cube2d[6][0] + relX, this.cube2d[6][1] + relY, color);
    drawLine.call(this, this.cube2d[2][0] + relX, this.cube2d[2][1] + relY, this.cube2d[3][0] + relX, this.cube2d[3][1] + relY, color);
    drawLine.call(this, this.cube2d[4][0] + relX, this.cube2d[4][1] + relY, this.cube2d[6][0] + relX, this.cube2d[6][1] + relY, color);
    drawLine.call(this, this.cube2d[4][0] + relX, this.cube2d[4][1] + relY, this.cube2d[5][0] + relX, this.cube2d[5][1] + relY, color);
    drawLine.call(this, this.cube2d[7][0] + relX, this.cube2d[7][1] + relY, this.cube2d[6][0] + relX, this.cube2d[6][1] + relY, color);
    drawLine.call(this, this.cube2d[7][0] + relX, this.cube2d[7][1] + relY, this.cube2d[3][0] + relX, this.cube2d[3][1] + relY, color);
    drawLine.call(this, this.cube2d[7][0] + relX, this.cube2d[7][1] + relY, this.cube2d[5][0] + relX, this.cube2d[5][1] + relY, color);
}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }

    return arr;
}