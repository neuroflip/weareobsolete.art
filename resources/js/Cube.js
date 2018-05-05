define(["Util", "Triangle", "Point3D"], function(Util, Triangle, Point3D) {
var object = Util.createArray(12), cubeWidth = 50.0, zOff = Util.zOff;
object[0] = new Triangle(new Point3D(-50.000000,-50.000000,
zOff-50.000000
), new Point3D(-50.000000,-50.000000,
zOff+50.000000
), new Point3D(-50.000000,50.000000,
zOff+50.000000
));
object[1] = new Triangle(new Point3D(-50.000000,50.000000,
zOff+50.000000
), new Point3D(-50.000000,50.000000,
zOff-50.000000
), new Point3D(-50.000000,-50.000000,
zOff-50.000000
));
object[2] = new Triangle(new Point3D(-50.000000,50.000000,
zOff-50.000000
), new Point3D(-50.000000,50.000000,
zOff+50.000000
), new Point3D(50.000000,50.000000,
zOff+50.000000
));
object[3] = new Triangle(new Point3D(50.000000,50.000000,
zOff+50.000000
), new Point3D(50.000000,50.000000,
zOff-50.000000
), new Point3D(-50.000000,50.000000,
zOff-50.000000
));
object[4] = new Triangle(new Point3D(50.000000,50.000000,
zOff-50.000000
), new Point3D(50.000000,50.000000,
zOff+50.000000
), new Point3D(50.000000,-50.000000,
zOff+50.000000
));
object[5] = new Triangle(new Point3D(50.000000,-50.000000,
zOff+50.000000
), new Point3D(50.000000,-50.000000,
zOff-50.000000
), new Point3D(50.000000,50.000000,
zOff-50.000000
));
object[6] = new Triangle(new Point3D(-50.000000,-50.000000,
zOff+50.000000
), new Point3D(-50.000000,-50.000000,
zOff-50.000000
), new Point3D(50.000000,-50.000000,
zOff-50.000000
));
object[7] = new Triangle(new Point3D(50.000000,-50.000000,
zOff-50.000000
), new Point3D(50.000000,-50.000000,
zOff+50.000000
), new Point3D(-50.000000,-50.000000,
zOff+50.000000
));
object[8] = new Triangle(new Point3D(50.000000,-50.000000,
zOff-50.000000
), new Point3D(-50.000000,-50.000000,
zOff-50.000000
), new Point3D(-50.000000,50.000000,
zOff-50.000000
));
object[9] = new Triangle(new Point3D(-50.000000,50.000000,
zOff-50.000000
), new Point3D(50.000000,50.000000,
zOff-50.000000
), new Point3D(50.000000,-50.000000,
zOff-50.000000
));
object[10] = new Triangle(new Point3D(50.000000,50.000000,
zOff+50.000000
), new Point3D(-50.000000,50.000000,
zOff+50.000000
), new Point3D(-50.000000,-50.000000,
zOff+50.000000
));
object[11] = new Triangle(new Point3D(-50.000000,-50.000000,
zOff+50.000000
), new Point3D(50.000000,-50.000000,
zOff+50.000000
), new Point3D(50.000000,50.000000,
zOff+50.000000
));
return object; });
