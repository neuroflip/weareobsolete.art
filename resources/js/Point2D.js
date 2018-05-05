define([], function() {

	var Point2D = function(x, y) {
		this.x = x;
		this.y = y;
	};

	Point2D.prototype = {
	    Constructor: Point2D,
	    
	    x: 0,
	    y: 0
	};

	return Point2D;
});