requirejs(["Triangle", "Point2D", "Point3D", "Cube", "Util"], function(Triangle, Point2D, Point3D, RAWObject, Util) {
	const canvasWidth = 265,
	    canvasHeight = 265,
	    scaleFactor = 10,
	    xoffset = 0,
	    yoffset = 0,
	    zOff = Util.zOff;

	var Engine = function(canvas) {
	        this.canvas = canvas;
	        this.canvasCtx = this.canvas.getContext('2d');
	        this.canvas.width = canvasWidth;
	        this.canvas.height = canvasHeight;
	        this.canvasCtx.lineWidth = 0.1;
		
			initScene.call(this);
	};

	Engine.prototype = {
		Constructor: Engine,
		requestAnimationFrameID: null,
		canvas: null,
		canvasCtx: null,
		objects: null,
		triangles2d: null,

		renderScene: function() {
	        clearCtx.call(this);

	        zrotate.call(this, -2 * 3.14 / 180);
	        //yrotate.call(this, 1 * 3.14 / 180);
	        xrotate.call(this, 2 * 3.14 / 180);

			for(var i=0;i<this.objects.length;i++) {
				render.call(this, this.canvasCtx, this.objects[i]);
			}

	        this.requestAnimationFrameID = window.requestAnimationFrame(this.renderScene.bind(this), this.canvas);
		}
	};

	function initScene() {
		this.objects = Util.createArray(1); 
		this.objects[0] = RAWObject;
	}

	function clearCtx() {
	    this.canvasCtx.fillStyle = "#000";
	    this.canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}

	function calculate2DProjectionPoint(point) {
		return new Point2D(
			Math.floor((point.x * scaleFactor / point.z * scaleFactor) + (this.canvas.width / 2)),
			Math.floor((point.y * scaleFactor / point.z * scaleFactor) + (this.canvas.height / 2)));
	}

	function render(context, object) {
	    var color1 = "#BBB",
	    	color2 = "#FFF",
	    	color3 = "#BBB";

		for(var i=0; i<object.length; i++) {
			for(var j=0; j<3; j++) {
	    		drawLine.call(this, 
	    			calculate2DProjectionPoint.call(this, object[i].p1).x,
	    			calculate2DProjectionPoint.call(this, object[i].p1).y,
	    			calculate2DProjectionPoint.call(this, object[i].p2).x,
	    			calculate2DProjectionPoint.call(this, object[i].p2).y,
	    			color1);

	    		drawLine.call(this, 
	    			calculate2DProjectionPoint.call(this, object[i].p2).x,
	    			calculate2DProjectionPoint.call(this, object[i].p2).y,
	    			calculate2DProjectionPoint.call(this, object[i].p3).x,
	    			calculate2DProjectionPoint.call(this, object[i].p3).y,
	    			color2);

	    		drawLine.call(this, 
	    			calculate2DProjectionPoint.call(this, object[i].p3).x,
	    			calculate2DProjectionPoint.call(this, object[i].p3).y,
	    			calculate2DProjectionPoint.call(this, object[i].p1).x,
	    			calculate2DProjectionPoint.call(this, object[i].p1).y,
	    			color3);
			}
		}
	}

	function zrotatePoint(point, q) {
		var tx, ty, temp;

        tx = point.x;
        ty = point.y;
        temp = tx * Math.cos(q) - ty * Math.sin(q);
        ty = tx * Math.sin(q) + ty * Math.cos(q);
        tx = temp;

        return new Point3D(tx, ty, point.z);
	}

	function zrotate(q) {
	    var object;

	    for (var i = 0; i < this.objects.length; i++) {
	        object = this.objects[i];
	        
	        for(var j=0; j<object.length; j++) {
        		object[j].p1 = zrotatePoint(object[j].p1, q);
        		object[j].p2 = zrotatePoint(object[j].p2, q);
        		object[j].p3 = zrotatePoint(object[j].p3, q);
	        }
	    }
	}

	function yrotatePoint(point, q) {
		var tx, ty, temp;

        tx = point.x;
        tz = point.z - zOff;
        temp = tz * Math.cos(q) - tx * Math.sin(q);
        tx = tz * Math.sin(q) + tx * Math.cos(q);
        tz = temp;

        return new Point3D(tx, point.y, tz + zOff);
	}

	function yrotate(q) {
	    var object;

	    for (var i = 0; i < this.objects.length; i++) {
	        object = this.objects[i];
	        
	        for(var j=0; j<object.length; j++) {
        		object[j].p1 = yrotatePoint(object[j].p1, q);
        		object[j].p2 = yrotatePoint(object[j].p2, q);
        		object[j].p3 = yrotatePoint(object[j].p3, q);
	        }
	    }
	}
	
	function xrotatePoint(point, q) {
		var tx, ty, temp;

        ty = point.y;
        tz = point.z - zOff;
        temp = ty * Math.cos(q) - tz * Math.sin(q);
        tz = ty * Math.sin(q) + tz * Math.cos(q);
        ty = temp;
        
        return new Point3D(point.x, ty, tz + zOff);
	}

	function xrotate(q) {
	    var object;
	    
	    for (var i = 0; i < this.objects.length; i++) {
	        object = this.objects[i];
	        
	        for(var j=0; j<object.length; j++) {
	        		object[j].p1 = xrotatePoint(object[j].p1, q);
	        		object[j].p2 = xrotatePoint(object[j].p2, q);
	        		object[j].p3 = xrotatePoint(object[j].p3, q);
	        }
	    }
	}

	function scale(s) {
		var object;

	    for (var i = 0; i < this.objects.length; i++) {
	        object = this.objects[i];
	        
	        for(var j=0; j<object.length; j++) {
			        object[j].p1 = object[j].p1 * s;
			        object[j].p2 = object[j].p2 * s;
			        object[j].p3 = object[j].p3 * s;
	        }
	    }
	}
	function drawLine(x0, y0, x1, y1, color) {
	    this.canvasCtx.strokeStyle = color;
	    this.canvasCtx.beginPath();
	    this.canvasCtx.moveTo(x0, y0);
	    this.canvasCtx.lineTo(x1, y1);
	    this.canvasCtx.stroke();
	}

    var t = new Engine(document.querySelector('#mainContainer--canvas'));
    t.renderScene();
});