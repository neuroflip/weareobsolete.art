define([], function() {
	var Point3D = function(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	};

	Point3D.prototype = {
	    Constructor: Point3D,
	    
	    x: 0.0,
	    y: 0.0,
	    z: 0.0
	};

	return Point3D;
});