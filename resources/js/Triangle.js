define([], function() {

	var Triangle = function(point1, point2, point3) {
		this.p1 = point1;
		this.p2 = point2;
		this.p3 = point3;
	};

	Triangle.prototype = {
	    Constructor: Triangle,
	    
	    p1: null,
	    p2: null,
	    p3: null,
	};

	return Triangle;
});