define(["Util", "Triangle", "Point3D"], function(Util, Triangle, Point3D) {
var object = Util.createArray(968), cubeWidth = 50.0, zOff = Util.zOff;
object[0] = new Triangle(new Point3D(0.468750,-0.757812,
zOff+0.242188
), new Point3D(0.437500,-0.765625,
zOff+0.164062
), new Point3D(0.500000,-0.687500,
zOff+0.093750
));
object[1] = new Triangle(new Point3D(0.500000,-0.687500,
zOff+0.093750
), new Point3D(0.562500,-0.671875,
zOff+0.242188
), new Point3D(0.468750,-0.757812,
zOff+0.242188
));
object[2] = new Triangle(new Point3D(-0.500000,-0.687500,
zOff+0.093750
), new Point3D(-0.437500,-0.765625,
zOff+0.164062
), new Point3D(-0.468750,-0.757812,
zOff+0.242188
));
object[3] = new Triangle(new Point3D(-0.468750,-0.757812,
zOff+0.242188
), new Point3D(-0.562500,-0.671875,
zOff+0.242188
), new Point3D(-0.500000,-0.687500,
zOff+0.093750
));
object[4] = new Triangle(new Point3D(0.562500,-0.671875,
zOff+0.242188
), new Point3D(0.500000,-0.687500,
zOff+0.093750
), new Point3D(0.546875,-0.578125,
zOff+0.054688
));
object[5] = new Triangle(new Point3D(0.546875,-0.578125,
zOff+0.054688
), new Point3D(0.625000,-0.562500,
zOff+0.242188
), new Point3D(0.562500,-0.671875,
zOff+0.242188
));
object[6] = new Triangle(new Point3D(-0.546875,-0.578125,
zOff+0.054688
), new Point3D(-0.500000,-0.687500,
zOff+0.093750
), new Point3D(-0.562500,-0.671875,
zOff+0.242188
));
object[7] = new Triangle(new Point3D(-0.562500,-0.671875,
zOff+0.242188
), new Point3D(-0.625000,-0.562500,
zOff+0.242188
), new Point3D(-0.546875,-0.578125,
zOff+0.054688
));
object[8] = new Triangle(new Point3D(0.500000,-0.687500,
zOff+0.093750
), new Point3D(0.351562,-0.718750,
zOff+0.031250
), new Point3D(0.351562,-0.617188,
zOff-0.023438
));
object[9] = new Triangle(new Point3D(0.351562,-0.617188,
zOff-0.023438
), new Point3D(0.546875,-0.578125,
zOff+0.054688
), new Point3D(0.500000,-0.687500,
zOff+0.093750
));
object[10] = new Triangle(new Point3D(-0.351562,-0.617188,
zOff-0.023438
), new Point3D(-0.351562,-0.718750,
zOff+0.031250
), new Point3D(-0.500000,-0.687500,
zOff+0.093750
));
object[11] = new Triangle(new Point3D(-0.500000,-0.687500,
zOff+0.093750
), new Point3D(-0.546875,-0.578125,
zOff+0.054688
), new Point3D(-0.351562,-0.617188,
zOff-0.023438
));
object[12] = new Triangle(new Point3D(0.437500,-0.765625,
zOff+0.164062
), new Point3D(0.351562,-0.781250,
zOff+0.132812
), new Point3D(0.351562,-0.718750,
zOff+0.031250
));
object[13] = new Triangle(new Point3D(0.351562,-0.718750,
zOff+0.031250
), new Point3D(0.500000,-0.687500,
zOff+0.093750
), new Point3D(0.437500,-0.765625,
zOff+0.164062
));
object[14] = new Triangle(new Point3D(-0.351562,-0.718750,
zOff+0.031250
), new Point3D(-0.351562,-0.781250,
zOff+0.132812
), new Point3D(-0.437500,-0.765625,
zOff+0.164062
));
object[15] = new Triangle(new Point3D(-0.437500,-0.765625,
zOff+0.164062
), new Point3D(-0.500000,-0.687500,
zOff+0.093750
), new Point3D(-0.351562,-0.718750,
zOff+0.031250
));
object[16] = new Triangle(new Point3D(0.351562,-0.781250,
zOff+0.132812
), new Point3D(0.273438,-0.796875,
zOff+0.164062
), new Point3D(0.203125,-0.742188,
zOff+0.093750
));
object[17] = new Triangle(new Point3D(0.203125,-0.742188,
zOff+0.093750
), new Point3D(0.351562,-0.718750,
zOff+0.031250
), new Point3D(0.351562,-0.781250,
zOff+0.132812
));
object[18] = new Triangle(new Point3D(-0.203125,-0.742188,
zOff+0.093750
), new Point3D(-0.273438,-0.796875,
zOff+0.164062
), new Point3D(-0.351562,-0.781250,
zOff+0.132812
));
object[19] = new Triangle(new Point3D(-0.351562,-0.781250,
zOff+0.132812
), new Point3D(-0.351562,-0.718750,
zOff+0.031250
), new Point3D(-0.203125,-0.742188,
zOff+0.093750
));
object[20] = new Triangle(new Point3D(0.351562,-0.718750,
zOff+0.031250
), new Point3D(0.203125,-0.742188,
zOff+0.093750
), new Point3D(0.156250,-0.648438,
zOff+0.054688
));
object[21] = new Triangle(new Point3D(0.156250,-0.648438,
zOff+0.054688
), new Point3D(0.351562,-0.617188,
zOff-0.023438
), new Point3D(0.351562,-0.718750,
zOff+0.031250
));
object[22] = new Triangle(new Point3D(-0.156250,-0.648438,
zOff+0.054688
), new Point3D(-0.203125,-0.742188,
zOff+0.093750
), new Point3D(-0.351562,-0.718750,
zOff+0.031250
));
object[23] = new Triangle(new Point3D(-0.351562,-0.718750,
zOff+0.031250
), new Point3D(-0.351562,-0.617188,
zOff-0.023438
), new Point3D(-0.156250,-0.648438,
zOff+0.054688
));
object[24] = new Triangle(new Point3D(0.203125,-0.742188,
zOff+0.093750
), new Point3D(0.140625,-0.742188,
zOff+0.242188
), new Point3D(0.078125,-0.656250,
zOff+0.242188
));
object[25] = new Triangle(new Point3D(0.078125,-0.656250,
zOff+0.242188
), new Point3D(0.156250,-0.648438,
zOff+0.054688
), new Point3D(0.203125,-0.742188,
zOff+0.093750
));
object[26] = new Triangle(new Point3D(-0.078125,-0.656250,
zOff+0.242188
), new Point3D(-0.140625,-0.742188,
zOff+0.242188
), new Point3D(-0.203125,-0.742188,
zOff+0.093750
));
object[27] = new Triangle(new Point3D(-0.203125,-0.742188,
zOff+0.093750
), new Point3D(-0.156250,-0.648438,
zOff+0.054688
), new Point3D(-0.078125,-0.656250,
zOff+0.242188
));
object[28] = new Triangle(new Point3D(0.273438,-0.796875,
zOff+0.164062
), new Point3D(0.242188,-0.796875,
zOff+0.242188
), new Point3D(0.140625,-0.742188,
zOff+0.242188
));
object[29] = new Triangle(new Point3D(0.140625,-0.742188,
zOff+0.242188
), new Point3D(0.203125,-0.742188,
zOff+0.093750
), new Point3D(0.273438,-0.796875,
zOff+0.164062
));
object[30] = new Triangle(new Point3D(-0.140625,-0.742188,
zOff+0.242188
), new Point3D(-0.242188,-0.796875,
zOff+0.242188
), new Point3D(-0.273438,-0.796875,
zOff+0.164062
));
object[31] = new Triangle(new Point3D(-0.273438,-0.796875,
zOff+0.164062
), new Point3D(-0.203125,-0.742188,
zOff+0.093750
), new Point3D(-0.140625,-0.742188,
zOff+0.242188
));
object[32] = new Triangle(new Point3D(0.242188,-0.796875,
zOff+0.242188
), new Point3D(0.273438,-0.796875,
zOff+0.328125
), new Point3D(0.203125,-0.742188,
zOff+0.390625
));
object[33] = new Triangle(new Point3D(0.203125,-0.742188,
zOff+0.390625
), new Point3D(0.140625,-0.742188,
zOff+0.242188
), new Point3D(0.242188,-0.796875,
zOff+0.242188
));
object[34] = new Triangle(new Point3D(-0.203125,-0.742188,
zOff+0.390625
), new Point3D(-0.273438,-0.796875,
zOff+0.328125
), new Point3D(-0.242188,-0.796875,
zOff+0.242188
));
object[35] = new Triangle(new Point3D(-0.242188,-0.796875,
zOff+0.242188
), new Point3D(-0.140625,-0.742188,
zOff+0.242188
), new Point3D(-0.203125,-0.742188,
zOff+0.390625
));
object[36] = new Triangle(new Point3D(0.140625,-0.742188,
zOff+0.242188
), new Point3D(0.203125,-0.742188,
zOff+0.390625
), new Point3D(0.156250,-0.648438,
zOff+0.437500
));
object[37] = new Triangle(new Point3D(0.156250,-0.648438,
zOff+0.437500
), new Point3D(0.078125,-0.656250,
zOff+0.242188
), new Point3D(0.140625,-0.742188,
zOff+0.242188
));
object[38] = new Triangle(new Point3D(-0.156250,-0.648438,
zOff+0.437500
), new Point3D(-0.203125,-0.742188,
zOff+0.390625
), new Point3D(-0.140625,-0.742188,
zOff+0.242188
));
object[39] = new Triangle(new Point3D(-0.140625,-0.742188,
zOff+0.242188
), new Point3D(-0.078125,-0.656250,
zOff+0.242188
), new Point3D(-0.156250,-0.648438,
zOff+0.437500
));
object[40] = new Triangle(new Point3D(0.203125,-0.742188,
zOff+0.390625
), new Point3D(0.351562,-0.718750,
zOff+0.453125
), new Point3D(0.351562,-0.617188,
zOff+0.515625
));
object[41] = new Triangle(new Point3D(0.351562,-0.617188,
zOff+0.515625
), new Point3D(0.156250,-0.648438,
zOff+0.437500
), new Point3D(0.203125,-0.742188,
zOff+0.390625
));
object[42] = new Triangle(new Point3D(-0.351562,-0.617188,
zOff+0.515625
), new Point3D(-0.351562,-0.718750,
zOff+0.453125
), new Point3D(-0.203125,-0.742188,
zOff+0.390625
));
object[43] = new Triangle(new Point3D(-0.203125,-0.742188,
zOff+0.390625
), new Point3D(-0.156250,-0.648438,
zOff+0.437500
), new Point3D(-0.351562,-0.617188,
zOff+0.515625
));
object[44] = new Triangle(new Point3D(0.273438,-0.796875,
zOff+0.328125
), new Point3D(0.351562,-0.781250,
zOff+0.359375
), new Point3D(0.351562,-0.718750,
zOff+0.453125
));
object[45] = new Triangle(new Point3D(0.351562,-0.718750,
zOff+0.453125
), new Point3D(0.203125,-0.742188,
zOff+0.390625
), new Point3D(0.273438,-0.796875,
zOff+0.328125
));
object[46] = new Triangle(new Point3D(-0.351562,-0.718750,
zOff+0.453125
), new Point3D(-0.351562,-0.781250,
zOff+0.359375
), new Point3D(-0.273438,-0.796875,
zOff+0.328125
));
object[47] = new Triangle(new Point3D(-0.273438,-0.796875,
zOff+0.328125
), new Point3D(-0.203125,-0.742188,
zOff+0.390625
), new Point3D(-0.351562,-0.718750,
zOff+0.453125
));
object[48] = new Triangle(new Point3D(0.351562,-0.781250,
zOff+0.359375
), new Point3D(0.437500,-0.765625,
zOff+0.328125
), new Point3D(0.500000,-0.687500,
zOff+0.390625
));
object[49] = new Triangle(new Point3D(0.500000,-0.687500,
zOff+0.390625
), new Point3D(0.351562,-0.718750,
zOff+0.453125
), new Point3D(0.351562,-0.781250,
zOff+0.359375
));
object[50] = new Triangle(new Point3D(-0.500000,-0.687500,
zOff+0.390625
), new Point3D(-0.437500,-0.765625,
zOff+0.328125
), new Point3D(-0.351562,-0.781250,
zOff+0.359375
));
object[51] = new Triangle(new Point3D(-0.351562,-0.781250,
zOff+0.359375
), new Point3D(-0.351562,-0.718750,
zOff+0.453125
), new Point3D(-0.500000,-0.687500,
zOff+0.390625
));
object[52] = new Triangle(new Point3D(0.351562,-0.718750,
zOff+0.453125
), new Point3D(0.500000,-0.687500,
zOff+0.390625
), new Point3D(0.546875,-0.578125,
zOff+0.437500
));
object[53] = new Triangle(new Point3D(0.546875,-0.578125,
zOff+0.437500
), new Point3D(0.351562,-0.617188,
zOff+0.515625
), new Point3D(0.351562,-0.718750,
zOff+0.453125
));
object[54] = new Triangle(new Point3D(-0.546875,-0.578125,
zOff+0.437500
), new Point3D(-0.500000,-0.687500,
zOff+0.390625
), new Point3D(-0.351562,-0.718750,
zOff+0.453125
));
object[55] = new Triangle(new Point3D(-0.351562,-0.718750,
zOff+0.453125
), new Point3D(-0.351562,-0.617188,
zOff+0.515625
), new Point3D(-0.546875,-0.578125,
zOff+0.437500
));
object[56] = new Triangle(new Point3D(0.500000,-0.687500,
zOff+0.390625
), new Point3D(0.562500,-0.671875,
zOff+0.242188
), new Point3D(0.625000,-0.562500,
zOff+0.242188
));
object[57] = new Triangle(new Point3D(0.625000,-0.562500,
zOff+0.242188
), new Point3D(0.546875,-0.578125,
zOff+0.437500
), new Point3D(0.500000,-0.687500,
zOff+0.390625
));
object[58] = new Triangle(new Point3D(-0.625000,-0.562500,
zOff+0.242188
), new Point3D(-0.562500,-0.671875,
zOff+0.242188
), new Point3D(-0.500000,-0.687500,
zOff+0.390625
));
object[59] = new Triangle(new Point3D(-0.500000,-0.687500,
zOff+0.390625
), new Point3D(-0.546875,-0.578125,
zOff+0.437500
), new Point3D(-0.625000,-0.562500,
zOff+0.242188
));
object[60] = new Triangle(new Point3D(0.437500,-0.765625,
zOff+0.328125
), new Point3D(0.468750,-0.757812,
zOff+0.242188
), new Point3D(0.562500,-0.671875,
zOff+0.242188
));
object[61] = new Triangle(new Point3D(0.562500,-0.671875,
zOff+0.242188
), new Point3D(0.500000,-0.687500,
zOff+0.390625
), new Point3D(0.437500,-0.765625,
zOff+0.328125
));
object[62] = new Triangle(new Point3D(-0.562500,-0.671875,
zOff+0.242188
), new Point3D(-0.468750,-0.757812,
zOff+0.242188
), new Point3D(-0.437500,-0.765625,
zOff+0.328125
));
object[63] = new Triangle(new Point3D(-0.437500,-0.765625,
zOff+0.328125
), new Point3D(-0.500000,-0.687500,
zOff+0.390625
), new Point3D(-0.562500,-0.671875,
zOff+0.242188
));
object[64] = new Triangle(new Point3D(0.468750,-0.757812,
zOff+0.242188
), new Point3D(0.437500,-0.765625,
zOff+0.328125
), new Point3D(0.445312,-0.781250,
zOff+0.335938
));
object[65] = new Triangle(new Point3D(0.445312,-0.781250,
zOff+0.335938
), new Point3D(0.476562,-0.773438,
zOff+0.242188
), new Point3D(0.468750,-0.757812,
zOff+0.242188
));
object[66] = new Triangle(new Point3D(-0.445312,-0.781250,
zOff+0.335938
), new Point3D(-0.437500,-0.765625,
zOff+0.328125
), new Point3D(-0.468750,-0.757812,
zOff+0.242188
));
object[67] = new Triangle(new Point3D(-0.468750,-0.757812,
zOff+0.242188
), new Point3D(-0.476562,-0.773438,
zOff+0.242188
), new Point3D(-0.445312,-0.781250,
zOff+0.335938
));
object[68] = new Triangle(new Point3D(0.437500,-0.765625,
zOff+0.328125
), new Point3D(0.351562,-0.781250,
zOff+0.359375
), new Point3D(0.351562,-0.804688,
zOff+0.375000
));
object[69] = new Triangle(new Point3D(0.351562,-0.804688,
zOff+0.375000
), new Point3D(0.445312,-0.781250,
zOff+0.335938
), new Point3D(0.437500,-0.765625,
zOff+0.328125
));
object[70] = new Triangle(new Point3D(-0.351562,-0.804688,
zOff+0.375000
), new Point3D(-0.351562,-0.781250,
zOff+0.359375
), new Point3D(-0.437500,-0.765625,
zOff+0.328125
));
object[71] = new Triangle(new Point3D(-0.437500,-0.765625,
zOff+0.328125
), new Point3D(-0.445312,-0.781250,
zOff+0.335938
), new Point3D(-0.351562,-0.804688,
zOff+0.375000
));
object[72] = new Triangle(new Point3D(0.351562,-0.781250,
zOff+0.359375
), new Point3D(0.273438,-0.796875,
zOff+0.328125
), new Point3D(0.265625,-0.820312,
zOff+0.335938
));
object[73] = new Triangle(new Point3D(0.265625,-0.820312,
zOff+0.335938
), new Point3D(0.351562,-0.804688,
zOff+0.375000
), new Point3D(0.351562,-0.781250,
zOff+0.359375
));
object[74] = new Triangle(new Point3D(-0.265625,-0.820312,
zOff+0.335938
), new Point3D(-0.273438,-0.796875,
zOff+0.328125
), new Point3D(-0.351562,-0.781250,
zOff+0.359375
));
object[75] = new Triangle(new Point3D(-0.351562,-0.781250,
zOff+0.359375
), new Point3D(-0.351562,-0.804688,
zOff+0.375000
), new Point3D(-0.265625,-0.820312,
zOff+0.335938
));
object[76] = new Triangle(new Point3D(0.273438,-0.796875,
zOff+0.328125
), new Point3D(0.242188,-0.796875,
zOff+0.242188
), new Point3D(0.226562,-0.820312,
zOff+0.242188
));
object[77] = new Triangle(new Point3D(0.226562,-0.820312,
zOff+0.242188
), new Point3D(0.265625,-0.820312,
zOff+0.335938
), new Point3D(0.273438,-0.796875,
zOff+0.328125
));
object[78] = new Triangle(new Point3D(-0.226562,-0.820312,
zOff+0.242188
), new Point3D(-0.242188,-0.796875,
zOff+0.242188
), new Point3D(-0.273438,-0.796875,
zOff+0.328125
));
object[79] = new Triangle(new Point3D(-0.273438,-0.796875,
zOff+0.328125
), new Point3D(-0.265625,-0.820312,
zOff+0.335938
), new Point3D(-0.226562,-0.820312,
zOff+0.242188
));
object[80] = new Triangle(new Point3D(0.242188,-0.796875,
zOff+0.242188
), new Point3D(0.273438,-0.796875,
zOff+0.164062
), new Point3D(0.265625,-0.820312,
zOff+0.156250
));
object[81] = new Triangle(new Point3D(0.265625,-0.820312,
zOff+0.156250
), new Point3D(0.226562,-0.820312,
zOff+0.242188
), new Point3D(0.242188,-0.796875,
zOff+0.242188
));
object[82] = new Triangle(new Point3D(-0.265625,-0.820312,
zOff+0.156250
), new Point3D(-0.273438,-0.796875,
zOff+0.164062
), new Point3D(-0.242188,-0.796875,
zOff+0.242188
));
object[83] = new Triangle(new Point3D(-0.242188,-0.796875,
zOff+0.242188
), new Point3D(-0.226562,-0.820312,
zOff+0.242188
), new Point3D(-0.265625,-0.820312,
zOff+0.156250
));
object[84] = new Triangle(new Point3D(0.273438,-0.796875,
zOff+0.164062
), new Point3D(0.351562,-0.781250,
zOff+0.132812
), new Point3D(0.351562,-0.804688,
zOff+0.117188
));
object[85] = new Triangle(new Point3D(0.351562,-0.804688,
zOff+0.117188
), new Point3D(0.265625,-0.820312,
zOff+0.156250
), new Point3D(0.273438,-0.796875,
zOff+0.164062
));
object[86] = new Triangle(new Point3D(-0.351562,-0.804688,
zOff+0.117188
), new Point3D(-0.351562,-0.781250,
zOff+0.132812
), new Point3D(-0.273438,-0.796875,
zOff+0.164062
));
object[87] = new Triangle(new Point3D(-0.273438,-0.796875,
zOff+0.164062
), new Point3D(-0.265625,-0.820312,
zOff+0.156250
), new Point3D(-0.351562,-0.804688,
zOff+0.117188
));
object[88] = new Triangle(new Point3D(0.351562,-0.781250,
zOff+0.132812
), new Point3D(0.437500,-0.765625,
zOff+0.164062
), new Point3D(0.445312,-0.781250,
zOff+0.156250
));
object[89] = new Triangle(new Point3D(0.445312,-0.781250,
zOff+0.156250
), new Point3D(0.351562,-0.804688,
zOff+0.117188
), new Point3D(0.351562,-0.781250,
zOff+0.132812
));
object[90] = new Triangle(new Point3D(-0.445312,-0.781250,
zOff+0.156250
), new Point3D(-0.437500,-0.765625,
zOff+0.164062
), new Point3D(-0.351562,-0.781250,
zOff+0.132812
));
object[91] = new Triangle(new Point3D(-0.351562,-0.781250,
zOff+0.132812
), new Point3D(-0.351562,-0.804688,
zOff+0.117188
), new Point3D(-0.445312,-0.781250,
zOff+0.156250
));
object[92] = new Triangle(new Point3D(0.437500,-0.765625,
zOff+0.164062
), new Point3D(0.468750,-0.757812,
zOff+0.242188
), new Point3D(0.476562,-0.773438,
zOff+0.242188
));
object[93] = new Triangle(new Point3D(0.476562,-0.773438,
zOff+0.242188
), new Point3D(0.445312,-0.781250,
zOff+0.156250
), new Point3D(0.437500,-0.765625,
zOff+0.164062
));
object[94] = new Triangle(new Point3D(-0.476562,-0.773438,
zOff+0.242188
), new Point3D(-0.468750,-0.757812,
zOff+0.242188
), new Point3D(-0.437500,-0.765625,
zOff+0.164062
));
object[95] = new Triangle(new Point3D(-0.437500,-0.765625,
zOff+0.164062
), new Point3D(-0.445312,-0.781250,
zOff+0.156250
), new Point3D(-0.476562,-0.773438,
zOff+0.242188
));
object[96] = new Triangle(new Point3D(0.351562,-0.828125,
zOff+0.242188
), new Point3D(0.445312,-0.781250,
zOff+0.156250
), new Point3D(0.476562,-0.773438,
zOff+0.242188
));
object[97] = new Triangle(new Point3D(-0.476562,-0.773438,
zOff+0.242188
), new Point3D(-0.445312,-0.781250,
zOff+0.156250
), new Point3D(-0.351562,-0.828125,
zOff+0.242188
));
object[98] = new Triangle(new Point3D(0.351562,-0.804688,
zOff+0.117188
), new Point3D(0.445312,-0.781250,
zOff+0.156250
), new Point3D(0.351562,-0.828125,
zOff+0.242188
));
object[99] = new Triangle(new Point3D(-0.351562,-0.828125,
zOff+0.242188
), new Point3D(-0.445312,-0.781250,
zOff+0.156250
), new Point3D(-0.351562,-0.804688,
zOff+0.117188
));
object[100] = new Triangle(new Point3D(0.351562,-0.828125,
zOff+0.242188
), new Point3D(0.265625,-0.820312,
zOff+0.156250
), new Point3D(0.351562,-0.804688,
zOff+0.117188
));
object[101] = new Triangle(new Point3D(-0.351562,-0.804688,
zOff+0.117188
), new Point3D(-0.265625,-0.820312,
zOff+0.156250
), new Point3D(-0.351562,-0.828125,
zOff+0.242188
));
object[102] = new Triangle(new Point3D(0.351562,-0.828125,
zOff+0.242188
), new Point3D(0.226562,-0.820312,
zOff+0.242188
), new Point3D(0.265625,-0.820312,
zOff+0.156250
));
object[103] = new Triangle(new Point3D(-0.265625,-0.820312,
zOff+0.156250
), new Point3D(-0.226562,-0.820312,
zOff+0.242188
), new Point3D(-0.351562,-0.828125,
zOff+0.242188
));
object[104] = new Triangle(new Point3D(0.351562,-0.828125,
zOff+0.242188
), new Point3D(0.265625,-0.820312,
zOff+0.335938
), new Point3D(0.226562,-0.820312,
zOff+0.242188
));
object[105] = new Triangle(new Point3D(-0.226562,-0.820312,
zOff+0.242188
), new Point3D(-0.265625,-0.820312,
zOff+0.335938
), new Point3D(-0.351562,-0.828125,
zOff+0.242188
));
object[106] = new Triangle(new Point3D(0.351562,-0.828125,
zOff+0.242188
), new Point3D(0.351562,-0.804688,
zOff+0.375000
), new Point3D(0.265625,-0.820312,
zOff+0.335938
));
object[107] = new Triangle(new Point3D(-0.265625,-0.820312,
zOff+0.335938
), new Point3D(-0.351562,-0.804688,
zOff+0.375000
), new Point3D(-0.351562,-0.828125,
zOff+0.242188
));
object[108] = new Triangle(new Point3D(0.351562,-0.828125,
zOff+0.242188
), new Point3D(0.445312,-0.781250,
zOff+0.335938
), new Point3D(0.351562,-0.804688,
zOff+0.375000
));
object[109] = new Triangle(new Point3D(-0.351562,-0.804688,
zOff+0.375000
), new Point3D(-0.445312,-0.781250,
zOff+0.335938
), new Point3D(-0.351562,-0.828125,
zOff+0.242188
));
object[110] = new Triangle(new Point3D(0.351562,-0.828125,
zOff+0.242188
), new Point3D(0.476562,-0.773438,
zOff+0.242188
), new Point3D(0.445312,-0.781250,
zOff+0.335938
));
object[111] = new Triangle(new Point3D(-0.445312,-0.781250,
zOff+0.335938
), new Point3D(-0.476562,-0.773438,
zOff+0.242188
), new Point3D(-0.351562,-0.828125,
zOff+0.242188
));
object[112] = new Triangle(new Point3D(0.179688,-0.554688,
zOff-0.968750
), new Point3D(0.164062,-0.632812,
zOff-0.929688
), new Point3D(0.000000,-0.640625,
zOff-0.945312
));
object[113] = new Triangle(new Point3D(0.000000,-0.640625,
zOff-0.945312
), new Point3D(0.000000,-0.578125,
zOff-0.984375
), new Point3D(0.179688,-0.554688,
zOff-0.968750
));
object[114] = new Triangle(new Point3D(0.000000,-0.640625,
zOff-0.945312
), new Point3D(-0.164062,-0.632812,
zOff-0.929688
), new Point3D(-0.179688,-0.554688,
zOff-0.968750
));
object[115] = new Triangle(new Point3D(-0.179688,-0.554688,
zOff-0.968750
), new Point3D(0.000000,-0.578125,
zOff-0.984375
), new Point3D(0.000000,-0.640625,
zOff-0.945312
));
object[116] = new Triangle(new Point3D(0.328125,-0.523438,
zOff-0.945312
), new Point3D(0.234375,-0.632812,
zOff-0.914062
), new Point3D(0.164062,-0.632812,
zOff-0.929688
));
object[117] = new Triangle(new Point3D(0.164062,-0.632812,
zOff-0.929688
), new Point3D(0.179688,-0.554688,
zOff-0.968750
), new Point3D(0.328125,-0.523438,
zOff-0.945312
));
object[118] = new Triangle(new Point3D(-0.164062,-0.632812,
zOff-0.929688
), new Point3D(-0.234375,-0.632812,
zOff-0.914062
), new Point3D(-0.328125,-0.523438,
zOff-0.945312
));
object[119] = new Triangle(new Point3D(-0.328125,-0.523438,
zOff-0.945312
), new Point3D(-0.179688,-0.554688,
zOff-0.968750
), new Point3D(-0.164062,-0.632812,
zOff-0.929688
));
object[120] = new Triangle(new Point3D(0.367188,-0.531250,
zOff-0.890625
), new Point3D(0.265625,-0.664062,
zOff-0.820312
), new Point3D(0.234375,-0.632812,
zOff-0.914062
));
object[121] = new Triangle(new Point3D(0.234375,-0.632812,
zOff-0.914062
), new Point3D(0.328125,-0.523438,
zOff-0.945312
), new Point3D(0.367188,-0.531250,
zOff-0.890625
));
object[122] = new Triangle(new Point3D(-0.234375,-0.632812,
zOff-0.914062
), new Point3D(-0.265625,-0.664062,
zOff-0.820312
), new Point3D(-0.367188,-0.531250,
zOff-0.890625
));
object[123] = new Triangle(new Point3D(-0.367188,-0.531250,
zOff-0.890625
), new Point3D(-0.328125,-0.523438,
zOff-0.945312
), new Point3D(-0.234375,-0.632812,
zOff-0.914062
));
object[124] = new Triangle(new Point3D(0.351562,-0.570312,
zOff-0.695312
), new Point3D(0.250000,-0.687500,
zOff-0.703125
), new Point3D(0.265625,-0.664062,
zOff-0.820312
));
object[125] = new Triangle(new Point3D(0.265625,-0.664062,
zOff-0.820312
), new Point3D(0.367188,-0.531250,
zOff-0.890625
), new Point3D(0.351562,-0.570312,
zOff-0.695312
));
object[126] = new Triangle(new Point3D(-0.265625,-0.664062,
zOff-0.820312
), new Point3D(-0.250000,-0.687500,
zOff-0.703125
), new Point3D(-0.351562,-0.570312,
zOff-0.695312
));
object[127] = new Triangle(new Point3D(-0.351562,-0.570312,
zOff-0.695312
), new Point3D(-0.367188,-0.531250,
zOff-0.890625
), new Point3D(-0.265625,-0.664062,
zOff-0.820312
));
object[128] = new Triangle(new Point3D(0.312500,-0.570312,
zOff-0.437500
), new Point3D(0.210938,-0.710938,
zOff-0.445312
), new Point3D(0.250000,-0.687500,
zOff-0.703125
));
object[129] = new Triangle(new Point3D(0.250000,-0.687500,
zOff-0.703125
), new Point3D(0.351562,-0.570312,
zOff-0.695312
), new Point3D(0.312500,-0.570312,
zOff-0.437500
));
object[130] = new Triangle(new Point3D(-0.250000,-0.687500,
zOff-0.703125
), new Point3D(-0.210938,-0.710938,
zOff-0.445312
), new Point3D(-0.312500,-0.570312,
zOff-0.437500
));
object[131] = new Triangle(new Point3D(-0.312500,-0.570312,
zOff-0.437500
), new Point3D(-0.351562,-0.570312,
zOff-0.695312
), new Point3D(-0.250000,-0.687500,
zOff-0.703125
));
object[132] = new Triangle(new Point3D(0.203125,-0.562500,
zOff-0.187500
), new Point3D(0.437500,-0.531250,
zOff-0.140625
), new Point3D(0.398438,-0.671875,
zOff-0.046875
));
object[133] = new Triangle(new Point3D(0.398438,-0.671875,
zOff-0.046875
), new Point3D(0.125000,-0.812500,
zOff-0.101562
), new Point3D(0.203125,-0.562500,
zOff-0.187500
));
object[134] = new Triangle(new Point3D(-0.398438,-0.671875,
zOff-0.046875
), new Point3D(-0.437500,-0.531250,
zOff-0.140625
), new Point3D(-0.203125,-0.562500,
zOff-0.187500
));
object[135] = new Triangle(new Point3D(-0.203125,-0.562500,
zOff-0.187500
), new Point3D(-0.125000,-0.812500,
zOff-0.101562
), new Point3D(-0.398438,-0.671875,
zOff-0.046875
));
object[136] = new Triangle(new Point3D(0.437500,-0.531250,
zOff-0.140625
), new Point3D(0.632812,-0.539062,
zOff-0.039062
), new Point3D(0.617188,-0.625000,
zOff+0.054688
));
object[137] = new Triangle(new Point3D(0.617188,-0.625000,
zOff+0.054688
), new Point3D(0.398438,-0.671875,
zOff-0.046875
), new Point3D(0.437500,-0.531250,
zOff-0.140625
));
object[138] = new Triangle(new Point3D(-0.617188,-0.625000,
zOff+0.054688
), new Point3D(-0.632812,-0.539062,
zOff-0.039062
), new Point3D(-0.437500,-0.531250,
zOff-0.140625
));
object[139] = new Triangle(new Point3D(-0.437500,-0.531250,
zOff-0.140625
), new Point3D(-0.398438,-0.671875,
zOff-0.046875
), new Point3D(-0.617188,-0.625000,
zOff+0.054688
));
object[140] = new Triangle(new Point3D(0.632812,-0.539062,
zOff-0.039062
), new Point3D(0.828125,-0.445312,
zOff+0.148438
), new Point3D(0.726562,-0.601562,
zOff+0.203125
));
object[141] = new Triangle(new Point3D(0.726562,-0.601562,
zOff+0.203125
), new Point3D(0.617188,-0.625000,
zOff+0.054688
), new Point3D(0.632812,-0.539062,
zOff-0.039062
));
object[142] = new Triangle(new Point3D(-0.726562,-0.601562,
zOff+0.203125
), new Point3D(-0.828125,-0.445312,
zOff+0.148438
), new Point3D(-0.632812,-0.539062,
zOff-0.039062
));
object[143] = new Triangle(new Point3D(-0.632812,-0.539062,
zOff-0.039062
), new Point3D(-0.617188,-0.625000,
zOff+0.054688
), new Point3D(-0.726562,-0.601562,
zOff+0.203125
));
object[144] = new Triangle(new Point3D(0.828125,-0.445312,
zOff+0.148438
), new Point3D(0.859375,-0.593750,
zOff+0.429688
), new Point3D(0.742188,-0.656250,
zOff+0.375000
));
object[145] = new Triangle(new Point3D(0.742188,-0.656250,
zOff+0.375000
), new Point3D(0.726562,-0.601562,
zOff+0.203125
), new Point3D(0.828125,-0.445312,
zOff+0.148438
));
object[146] = new Triangle(new Point3D(-0.742188,-0.656250,
zOff+0.375000
), new Point3D(-0.859375,-0.593750,
zOff+0.429688
), new Point3D(-0.828125,-0.445312,
zOff+0.148438
));
object[147] = new Triangle(new Point3D(-0.828125,-0.445312,
zOff+0.148438
), new Point3D(-0.726562,-0.601562,
zOff+0.203125
), new Point3D(-0.742188,-0.656250,
zOff+0.375000
));
object[148] = new Triangle(new Point3D(0.859375,-0.593750,
zOff+0.429688
), new Point3D(0.710938,-0.625000,
zOff+0.484375
), new Point3D(0.687500,-0.726562,
zOff+0.414062
));
object[149] = new Triangle(new Point3D(0.687500,-0.726562,
zOff+0.414062
), new Point3D(0.742188,-0.656250,
zOff+0.375000
), new Point3D(0.859375,-0.593750,
zOff+0.429688
));
object[150] = new Triangle(new Point3D(-0.687500,-0.726562,
zOff+0.414062
), new Point3D(-0.710938,-0.625000,
zOff+0.484375
), new Point3D(-0.859375,-0.593750,
zOff+0.429688
));
object[151] = new Triangle(new Point3D(-0.859375,-0.593750,
zOff+0.429688
), new Point3D(-0.742188,-0.656250,
zOff+0.375000
), new Point3D(-0.687500,-0.726562,
zOff+0.414062
));
object[152] = new Triangle(new Point3D(0.710938,-0.625000,
zOff+0.484375
), new Point3D(0.492188,-0.687500,
zOff+0.601562
), new Point3D(0.437500,-0.796875,
zOff+0.546875
));
object[153] = new Triangle(new Point3D(0.437500,-0.796875,
zOff+0.546875
), new Point3D(0.687500,-0.726562,
zOff+0.414062
), new Point3D(0.710938,-0.625000,
zOff+0.484375
));
object[154] = new Triangle(new Point3D(-0.437500,-0.796875,
zOff+0.546875
), new Point3D(-0.492188,-0.687500,
zOff+0.601562
), new Point3D(-0.710938,-0.625000,
zOff+0.484375
));
object[155] = new Triangle(new Point3D(-0.710938,-0.625000,
zOff+0.484375
), new Point3D(-0.687500,-0.726562,
zOff+0.414062
), new Point3D(-0.437500,-0.796875,
zOff+0.546875
));
object[156] = new Triangle(new Point3D(0.492188,-0.687500,
zOff+0.601562
), new Point3D(0.320312,-0.734375,
zOff+0.757812
), new Point3D(0.312500,-0.835938,
zOff+0.640625
));
object[157] = new Triangle(new Point3D(0.312500,-0.835938,
zOff+0.640625
), new Point3D(0.437500,-0.796875,
zOff+0.546875
), new Point3D(0.492188,-0.687500,
zOff+0.601562
));
object[158] = new Triangle(new Point3D(-0.312500,-0.835938,
zOff+0.640625
), new Point3D(-0.320312,-0.734375,
zOff+0.757812
), new Point3D(-0.492188,-0.687500,
zOff+0.601562
));
object[159] = new Triangle(new Point3D(-0.492188,-0.687500,
zOff+0.601562
), new Point3D(-0.437500,-0.796875,
zOff+0.546875
), new Point3D(-0.312500,-0.835938,
zOff+0.640625
));
object[160] = new Triangle(new Point3D(0.320312,-0.734375,
zOff+0.757812
), new Point3D(0.156250,-0.757812,
zOff+0.718750
), new Point3D(0.203125,-0.851562,
zOff+0.617188
));
object[161] = new Triangle(new Point3D(0.203125,-0.851562,
zOff+0.617188
), new Point3D(0.312500,-0.835938,
zOff+0.640625
), new Point3D(0.320312,-0.734375,
zOff+0.757812
));
object[162] = new Triangle(new Point3D(-0.203125,-0.851562,
zOff+0.617188
), new Point3D(-0.156250,-0.757812,
zOff+0.718750
), new Point3D(-0.320312,-0.734375,
zOff+0.757812
));
object[163] = new Triangle(new Point3D(-0.320312,-0.734375,
zOff+0.757812
), new Point3D(-0.312500,-0.835938,
zOff+0.640625
), new Point3D(-0.203125,-0.851562,
zOff+0.617188
));
object[164] = new Triangle(new Point3D(0.156250,-0.757812,
zOff+0.718750
), new Point3D(0.062500,-0.750000,
zOff+0.492188
), new Point3D(0.101562,-0.843750,
zOff+0.429688
));
object[165] = new Triangle(new Point3D(0.101562,-0.843750,
zOff+0.429688
), new Point3D(0.203125,-0.851562,
zOff+0.617188
), new Point3D(0.156250,-0.757812,
zOff+0.718750
));
object[166] = new Triangle(new Point3D(-0.101562,-0.843750,
zOff+0.429688
), new Point3D(-0.062500,-0.750000,
zOff+0.492188
), new Point3D(-0.156250,-0.757812,
zOff+0.718750
));
object[167] = new Triangle(new Point3D(-0.156250,-0.757812,
zOff+0.718750
), new Point3D(-0.203125,-0.851562,
zOff+0.617188
), new Point3D(-0.101562,-0.843750,
zOff+0.429688
));
object[168] = new Triangle(new Point3D(0.062500,-0.750000,
zOff+0.492188
), new Point3D(0.000000,-0.742188,
zOff+0.429688
), new Point3D(0.000000,-0.820312,
zOff+0.351562
));
object[169] = new Triangle(new Point3D(0.000000,-0.820312,
zOff+0.351562
), new Point3D(0.101562,-0.843750,
zOff+0.429688
), new Point3D(0.062500,-0.750000,
zOff+0.492188
));
object[170] = new Triangle(new Point3D(0.000000,-0.820312,
zOff+0.351562
), new Point3D(0.000000,-0.742188,
zOff+0.429688
), new Point3D(-0.062500,-0.750000,
zOff+0.492188
));
object[171] = new Triangle(new Point3D(-0.062500,-0.750000,
zOff+0.492188
), new Point3D(-0.101562,-0.843750,
zOff+0.429688
), new Point3D(0.000000,-0.820312,
zOff+0.351562
));
object[172] = new Triangle(new Point3D(0.164062,-0.773438,
zOff+0.414062
), new Point3D(0.250000,-0.757812,
zOff+0.468750
), new Point3D(0.203125,-0.851562,
zOff+0.617188
));
object[173] = new Triangle(new Point3D(0.203125,-0.851562,
zOff+0.617188
), new Point3D(0.101562,-0.843750,
zOff+0.429688
), new Point3D(0.164062,-0.773438,
zOff+0.414062
));
object[174] = new Triangle(new Point3D(-0.203125,-0.851562,
zOff+0.617188
), new Point3D(-0.250000,-0.757812,
zOff+0.468750
), new Point3D(-0.164062,-0.773438,
zOff+0.414062
));
object[175] = new Triangle(new Point3D(-0.164062,-0.773438,
zOff+0.414062
), new Point3D(-0.101562,-0.843750,
zOff+0.429688
), new Point3D(-0.203125,-0.851562,
zOff+0.617188
));
object[176] = new Triangle(new Point3D(0.250000,-0.757812,
zOff+0.468750
), new Point3D(0.328125,-0.742188,
zOff+0.476562
), new Point3D(0.312500,-0.835938,
zOff+0.640625
));
object[177] = new Triangle(new Point3D(0.312500,-0.835938,
zOff+0.640625
), new Point3D(0.203125,-0.851562,
zOff+0.617188
), new Point3D(0.250000,-0.757812,
zOff+0.468750
));
object[178] = new Triangle(new Point3D(-0.312500,-0.835938,
zOff+0.640625
), new Point3D(-0.328125,-0.742188,
zOff+0.476562
), new Point3D(-0.250000,-0.757812,
zOff+0.468750
));
object[179] = new Triangle(new Point3D(-0.250000,-0.757812,
zOff+0.468750
), new Point3D(-0.203125,-0.851562,
zOff+0.617188
), new Point3D(-0.312500,-0.835938,
zOff+0.640625
));
object[180] = new Triangle(new Point3D(0.429688,-0.718750,
zOff+0.437500
), new Point3D(0.437500,-0.796875,
zOff+0.546875
), new Point3D(0.312500,-0.835938,
zOff+0.640625
));
object[181] = new Triangle(new Point3D(0.312500,-0.835938,
zOff+0.640625
), new Point3D(0.328125,-0.742188,
zOff+0.476562
), new Point3D(0.429688,-0.718750,
zOff+0.437500
));
object[182] = new Triangle(new Point3D(-0.312500,-0.835938,
zOff+0.640625
), new Point3D(-0.437500,-0.796875,
zOff+0.546875
), new Point3D(-0.429688,-0.718750,
zOff+0.437500
));
object[183] = new Triangle(new Point3D(-0.429688,-0.718750,
zOff+0.437500
), new Point3D(-0.328125,-0.742188,
zOff+0.476562
), new Point3D(-0.312500,-0.835938,
zOff+0.640625
));
object[184] = new Triangle(new Point3D(0.601562,-0.664062,
zOff+0.375000
), new Point3D(0.687500,-0.726562,
zOff+0.414062
), new Point3D(0.437500,-0.796875,
zOff+0.546875
));
object[185] = new Triangle(new Point3D(0.437500,-0.796875,
zOff+0.546875
), new Point3D(0.429688,-0.718750,
zOff+0.437500
), new Point3D(0.601562,-0.664062,
zOff+0.375000
));
object[186] = new Triangle(new Point3D(-0.437500,-0.796875,
zOff+0.546875
), new Point3D(-0.687500,-0.726562,
zOff+0.414062
), new Point3D(-0.601562,-0.664062,
zOff+0.375000
));
object[187] = new Triangle(new Point3D(-0.601562,-0.664062,
zOff+0.375000
), new Point3D(-0.429688,-0.718750,
zOff+0.437500
), new Point3D(-0.437500,-0.796875,
zOff+0.546875
));
object[188] = new Triangle(new Point3D(0.640625,-0.648438,
zOff+0.296875
), new Point3D(0.742188,-0.656250,
zOff+0.375000
), new Point3D(0.687500,-0.726562,
zOff+0.414062
));
object[189] = new Triangle(new Point3D(0.687500,-0.726562,
zOff+0.414062
), new Point3D(0.601562,-0.664062,
zOff+0.375000
), new Point3D(0.640625,-0.648438,
zOff+0.296875
));
object[190] = new Triangle(new Point3D(-0.687500,-0.726562,
zOff+0.414062
), new Point3D(-0.742188,-0.656250,
zOff+0.375000
), new Point3D(-0.640625,-0.648438,
zOff+0.296875
));
object[191] = new Triangle(new Point3D(-0.640625,-0.648438,
zOff+0.296875
), new Point3D(-0.601562,-0.664062,
zOff+0.375000
), new Point3D(-0.687500,-0.726562,
zOff+0.414062
));
object[192] = new Triangle(new Point3D(0.625000,-0.648438,
zOff+0.187500
), new Point3D(0.726562,-0.601562,
zOff+0.203125
), new Point3D(0.742188,-0.656250,
zOff+0.375000
));
object[193] = new Triangle(new Point3D(0.742188,-0.656250,
zOff+0.375000
), new Point3D(0.640625,-0.648438,
zOff+0.296875
), new Point3D(0.625000,-0.648438,
zOff+0.187500
));
object[194] = new Triangle(new Point3D(-0.742188,-0.656250,
zOff+0.375000
), new Point3D(-0.726562,-0.601562,
zOff+0.203125
), new Point3D(-0.625000,-0.648438,
zOff+0.187500
));
object[195] = new Triangle(new Point3D(-0.625000,-0.648438,
zOff+0.187500
), new Point3D(-0.640625,-0.648438,
zOff+0.296875
), new Point3D(-0.742188,-0.656250,
zOff+0.375000
));
object[196] = new Triangle(new Point3D(0.492188,-0.671875,
zOff+0.062500
), new Point3D(0.617188,-0.625000,
zOff+0.054688
), new Point3D(0.726562,-0.601562,
zOff+0.203125
));
object[197] = new Triangle(new Point3D(0.726562,-0.601562,
zOff+0.203125
), new Point3D(0.625000,-0.648438,
zOff+0.187500
), new Point3D(0.492188,-0.671875,
zOff+0.062500
));
object[198] = new Triangle(new Point3D(-0.726562,-0.601562,
zOff+0.203125
), new Point3D(-0.617188,-0.625000,
zOff+0.054688
), new Point3D(-0.492188,-0.671875,
zOff+0.062500
));
object[199] = new Triangle(new Point3D(-0.492188,-0.671875,
zOff+0.062500
), new Point3D(-0.625000,-0.648438,
zOff+0.187500
), new Point3D(-0.726562,-0.601562,
zOff+0.203125
));
object[200] = new Triangle(new Point3D(0.375000,-0.703125,
zOff+0.015625
), new Point3D(0.398438,-0.671875,
zOff-0.046875
), new Point3D(0.617188,-0.625000,
zOff+0.054688
));
object[201] = new Triangle(new Point3D(0.617188,-0.625000,
zOff+0.054688
), new Point3D(0.492188,-0.671875,
zOff+0.062500
), new Point3D(0.375000,-0.703125,
zOff+0.015625
));
object[202] = new Triangle(new Point3D(-0.617188,-0.625000,
zOff+0.054688
), new Point3D(-0.398438,-0.671875,
zOff-0.046875
), new Point3D(-0.375000,-0.703125,
zOff+0.015625
));
object[203] = new Triangle(new Point3D(-0.375000,-0.703125,
zOff+0.015625
), new Point3D(-0.492188,-0.671875,
zOff+0.062500
), new Point3D(-0.617188,-0.625000,
zOff+0.054688
));
object[204] = new Triangle(new Point3D(0.203125,-0.742188,
zOff+0.093750
), new Point3D(0.125000,-0.812500,
zOff-0.101562
), new Point3D(0.398438,-0.671875,
zOff-0.046875
));
object[205] = new Triangle(new Point3D(0.398438,-0.671875,
zOff-0.046875
), new Point3D(0.375000,-0.703125,
zOff+0.015625
), new Point3D(0.203125,-0.742188,
zOff+0.093750
));
object[206] = new Triangle(new Point3D(-0.398438,-0.671875,
zOff-0.046875
), new Point3D(-0.125000,-0.812500,
zOff-0.101562
), new Point3D(-0.203125,-0.742188,
zOff+0.093750
));
object[207] = new Triangle(new Point3D(-0.203125,-0.742188,
zOff+0.093750
), new Point3D(-0.375000,-0.703125,
zOff+0.015625
), new Point3D(-0.398438,-0.671875,
zOff-0.046875
));
object[208] = new Triangle(new Point3D(0.203125,-0.742188,
zOff+0.093750
), new Point3D(0.164062,-0.750000,
zOff+0.140625
), new Point3D(0.000000,-0.726562,
zOff+0.046875
));
object[209] = new Triangle(new Point3D(0.000000,-0.726562,
zOff+0.046875
), new Point3D(0.125000,-0.812500,
zOff-0.101562
), new Point3D(0.203125,-0.742188,
zOff+0.093750
));
object[210] = new Triangle(new Point3D(0.000000,-0.726562,
zOff+0.046875
), new Point3D(-0.164062,-0.750000,
zOff+0.140625
), new Point3D(-0.203125,-0.742188,
zOff+0.093750
));
object[211] = new Triangle(new Point3D(-0.203125,-0.742188,
zOff+0.093750
), new Point3D(-0.125000,-0.812500,
zOff-0.101562
), new Point3D(0.000000,-0.726562,
zOff+0.046875
));
object[212] = new Triangle(new Point3D(0.164062,-0.773438,
zOff+0.414062
), new Point3D(0.101562,-0.843750,
zOff+0.429688
), new Point3D(0.000000,-0.820312,
zOff+0.351562
));
object[213] = new Triangle(new Point3D(0.000000,-0.820312,
zOff+0.351562
), new Point3D(0.125000,-0.765625,
zOff+0.304688
), new Point3D(0.164062,-0.773438,
zOff+0.414062
));
object[214] = new Triangle(new Point3D(0.000000,-0.820312,
zOff+0.351562
), new Point3D(-0.101562,-0.843750,
zOff+0.429688
), new Point3D(-0.164062,-0.773438,
zOff+0.414062
));
object[215] = new Triangle(new Point3D(-0.164062,-0.773438,
zOff+0.414062
), new Point3D(-0.125000,-0.765625,
zOff+0.304688
), new Point3D(0.000000,-0.820312,
zOff+0.351562
));
object[216] = new Triangle(new Point3D(0.125000,-0.765625,
zOff+0.304688
), new Point3D(0.000000,-0.820312,
zOff+0.351562
), new Point3D(0.000000,-0.765625,
zOff+0.210938
));
object[217] = new Triangle(new Point3D(0.000000,-0.765625,
zOff+0.210938
), new Point3D(0.132812,-0.757812,
zOff+0.210938
), new Point3D(0.125000,-0.765625,
zOff+0.304688
));
object[218] = new Triangle(new Point3D(0.000000,-0.765625,
zOff+0.210938
), new Point3D(0.000000,-0.820312,
zOff+0.351562
), new Point3D(-0.125000,-0.765625,
zOff+0.304688
));
object[219] = new Triangle(new Point3D(-0.125000,-0.765625,
zOff+0.304688
), new Point3D(-0.132812,-0.757812,
zOff+0.210938
), new Point3D(0.000000,-0.765625,
zOff+0.210938
));
object[220] = new Triangle(new Point3D(0.000000,-0.726562,
zOff+0.046875
), new Point3D(0.164062,-0.750000,
zOff+0.140625
), new Point3D(0.132812,-0.757812,
zOff+0.210938
));
object[221] = new Triangle(new Point3D(0.132812,-0.757812,
zOff+0.210938
), new Point3D(0.000000,-0.765625,
zOff+0.210938
), new Point3D(0.000000,-0.726562,
zOff+0.046875
));
object[222] = new Triangle(new Point3D(-0.132812,-0.757812,
zOff+0.210938
), new Point3D(-0.164062,-0.750000,
zOff+0.140625
), new Point3D(0.000000,-0.726562,
zOff+0.046875
));
object[223] = new Triangle(new Point3D(0.000000,-0.726562,
zOff+0.046875
), new Point3D(0.000000,-0.765625,
zOff+0.210938
), new Point3D(-0.132812,-0.757812,
zOff+0.210938
));
object[224] = new Triangle(new Point3D(0.062500,-0.695312,
zOff-0.882812
), new Point3D(0.000000,-0.687500,
zOff-0.890625
), new Point3D(0.000000,-0.640625,
zOff-0.945312
));
object[225] = new Triangle(new Point3D(0.000000,-0.640625,
zOff-0.945312
), new Point3D(0.164062,-0.632812,
zOff-0.929688
), new Point3D(0.062500,-0.695312,
zOff-0.882812
));
object[226] = new Triangle(new Point3D(0.000000,-0.640625,
zOff-0.945312
), new Point3D(0.000000,-0.687500,
zOff-0.890625
), new Point3D(-0.062500,-0.695312,
zOff-0.882812
));
object[227] = new Triangle(new Point3D(-0.062500,-0.695312,
zOff-0.882812
), new Point3D(-0.164062,-0.632812,
zOff-0.929688
), new Point3D(0.000000,-0.640625,
zOff-0.945312
));
object[228] = new Triangle(new Point3D(0.117188,-0.710938,
zOff-0.835938
), new Point3D(0.062500,-0.695312,
zOff-0.882812
), new Point3D(0.164062,-0.632812,
zOff-0.929688
));
object[229] = new Triangle(new Point3D(0.164062,-0.632812,
zOff-0.929688
), new Point3D(0.234375,-0.632812,
zOff-0.914062
), new Point3D(0.117188,-0.710938,
zOff-0.835938
));
object[230] = new Triangle(new Point3D(-0.164062,-0.632812,
zOff-0.929688
), new Point3D(-0.062500,-0.695312,
zOff-0.882812
), new Point3D(-0.117188,-0.710938,
zOff-0.835938
));
object[231] = new Triangle(new Point3D(-0.117188,-0.710938,
zOff-0.835938
), new Point3D(-0.234375,-0.632812,
zOff-0.914062
), new Point3D(-0.164062,-0.632812,
zOff-0.929688
));
object[232] = new Triangle(new Point3D(0.109375,-0.734375,
zOff-0.718750
), new Point3D(0.117188,-0.710938,
zOff-0.835938
), new Point3D(0.234375,-0.632812,
zOff-0.914062
));
object[233] = new Triangle(new Point3D(0.234375,-0.632812,
zOff-0.914062
), new Point3D(0.265625,-0.664062,
zOff-0.820312
), new Point3D(0.109375,-0.734375,
zOff-0.718750
));
object[234] = new Triangle(new Point3D(-0.234375,-0.632812,
zOff-0.914062
), new Point3D(-0.117188,-0.710938,
zOff-0.835938
), new Point3D(-0.109375,-0.734375,
zOff-0.718750
));
object[235] = new Triangle(new Point3D(-0.109375,-0.734375,
zOff-0.718750
), new Point3D(-0.265625,-0.664062,
zOff-0.820312
), new Point3D(-0.234375,-0.632812,
zOff-0.914062
));
object[236] = new Triangle(new Point3D(0.210938,-0.710938,
zOff-0.445312
), new Point3D(0.078125,-0.750000,
zOff-0.445312
), new Point3D(0.117188,-0.734375,
zOff-0.687500
));
object[237] = new Triangle(new Point3D(0.117188,-0.734375,
zOff-0.687500
), new Point3D(0.250000,-0.687500,
zOff-0.703125
), new Point3D(0.210938,-0.710938,
zOff-0.445312
));
object[238] = new Triangle(new Point3D(-0.117188,-0.734375,
zOff-0.687500
), new Point3D(-0.078125,-0.750000,
zOff-0.445312
), new Point3D(-0.210938,-0.710938,
zOff-0.445312
));
object[239] = new Triangle(new Point3D(-0.210938,-0.710938,
zOff-0.445312
), new Point3D(-0.250000,-0.687500,
zOff-0.703125
), new Point3D(-0.117188,-0.734375,
zOff-0.687500
));
object[240] = new Triangle(new Point3D(0.109375,-0.734375,
zOff-0.718750
), new Point3D(0.265625,-0.664062,
zOff-0.820312
), new Point3D(0.250000,-0.687500,
zOff-0.703125
));
object[241] = new Triangle(new Point3D(0.250000,-0.687500,
zOff-0.703125
), new Point3D(0.117188,-0.734375,
zOff-0.687500
), new Point3D(0.109375,-0.734375,
zOff-0.718750
));
object[242] = new Triangle(new Point3D(-0.250000,-0.687500,
zOff-0.703125
), new Point3D(-0.265625,-0.664062,
zOff-0.820312
), new Point3D(-0.109375,-0.734375,
zOff-0.718750
));
object[243] = new Triangle(new Point3D(-0.109375,-0.734375,
zOff-0.718750
), new Point3D(-0.117188,-0.734375,
zOff-0.687500
), new Point3D(-0.250000,-0.687500,
zOff-0.703125
));
object[244] = new Triangle(new Point3D(0.085938,-0.742188,
zOff-0.289062
), new Point3D(0.000000,-0.742188,
zOff-0.328125
), new Point3D(0.000000,-0.750000,
zOff-0.445312
));
object[245] = new Triangle(new Point3D(0.000000,-0.750000,
zOff-0.445312
), new Point3D(0.078125,-0.750000,
zOff-0.445312
), new Point3D(0.085938,-0.742188,
zOff-0.289062
));
object[246] = new Triangle(new Point3D(0.000000,-0.750000,
zOff-0.445312
), new Point3D(0.000000,-0.742188,
zOff-0.328125
), new Point3D(-0.085938,-0.742188,
zOff-0.289062
));
object[247] = new Triangle(new Point3D(-0.085938,-0.742188,
zOff-0.289062
), new Point3D(-0.078125,-0.750000,
zOff-0.445312
), new Point3D(0.000000,-0.750000,
zOff-0.445312
));
object[248] = new Triangle(new Point3D(0.117188,-0.734375,
zOff-0.687500
), new Point3D(0.078125,-0.750000,
zOff-0.445312
), new Point3D(0.000000,-0.750000,
zOff-0.445312
));
object[249] = new Triangle(new Point3D(0.000000,-0.750000,
zOff-0.445312
), new Point3D(0.000000,-0.734375,
zOff-0.679688
), new Point3D(0.117188,-0.734375,
zOff-0.687500
));
object[250] = new Triangle(new Point3D(0.000000,-0.750000,
zOff-0.445312
), new Point3D(-0.078125,-0.750000,
zOff-0.445312
), new Point3D(-0.117188,-0.734375,
zOff-0.687500
));
object[251] = new Triangle(new Point3D(-0.117188,-0.734375,
zOff-0.687500
), new Point3D(0.000000,-0.734375,
zOff-0.679688
), new Point3D(0.000000,-0.750000,
zOff-0.445312
));
object[252] = new Triangle(new Point3D(0.000000,-0.734375,
zOff-0.765625
), new Point3D(0.109375,-0.734375,
zOff-0.718750
), new Point3D(0.117188,-0.734375,
zOff-0.687500
));
object[253] = new Triangle(new Point3D(0.117188,-0.734375,
zOff-0.687500
), new Point3D(0.000000,-0.734375,
zOff-0.679688
), new Point3D(0.000000,-0.734375,
zOff-0.765625
));
object[254] = new Triangle(new Point3D(-0.117188,-0.734375,
zOff-0.687500
), new Point3D(-0.109375,-0.734375,
zOff-0.718750
), new Point3D(0.000000,-0.734375,
zOff-0.765625
));
object[255] = new Triangle(new Point3D(0.000000,-0.734375,
zOff-0.765625
), new Point3D(0.000000,-0.734375,
zOff-0.679688
), new Point3D(-0.117188,-0.734375,
zOff-0.687500
));
object[256] = new Triangle(new Point3D(0.125000,-0.750000,
zOff-0.226562
), new Point3D(0.132812,-0.796875,
zOff-0.226562
), new Point3D(0.093750,-0.781250,
zOff-0.273438
));
object[257] = new Triangle(new Point3D(0.093750,-0.781250,
zOff-0.273438
), new Point3D(0.085938,-0.742188,
zOff-0.289062
), new Point3D(0.125000,-0.750000,
zOff-0.226562
));
object[258] = new Triangle(new Point3D(-0.093750,-0.781250,
zOff-0.273438
), new Point3D(-0.132812,-0.796875,
zOff-0.226562
), new Point3D(-0.125000,-0.750000,
zOff-0.226562
));
object[259] = new Triangle(new Point3D(-0.125000,-0.750000,
zOff-0.226562
), new Point3D(-0.085938,-0.742188,
zOff-0.289062
), new Point3D(-0.093750,-0.781250,
zOff-0.273438
));
object[260] = new Triangle(new Point3D(0.101562,-0.742188,
zOff-0.148438
), new Point3D(0.109375,-0.781250,
zOff-0.132812
), new Point3D(0.132812,-0.796875,
zOff-0.226562
));
object[261] = new Triangle(new Point3D(0.132812,-0.796875,
zOff-0.226562
), new Point3D(0.125000,-0.750000,
zOff-0.226562
), new Point3D(0.101562,-0.742188,
zOff-0.148438
));
object[262] = new Triangle(new Point3D(-0.132812,-0.796875,
zOff-0.226562
), new Point3D(-0.109375,-0.781250,
zOff-0.132812
), new Point3D(-0.101562,-0.742188,
zOff-0.148438
));
object[263] = new Triangle(new Point3D(-0.101562,-0.742188,
zOff-0.148438
), new Point3D(-0.125000,-0.750000,
zOff-0.226562
), new Point3D(-0.132812,-0.796875,
zOff-0.226562
));
object[264] = new Triangle(new Point3D(0.000000,-0.742188,
zOff-0.140625
), new Point3D(0.039062,-0.781250,
zOff-0.125000
), new Point3D(0.109375,-0.781250,
zOff-0.132812
));
object[265] = new Triangle(new Point3D(0.109375,-0.781250,
zOff-0.132812
), new Point3D(0.101562,-0.742188,
zOff-0.148438
), new Point3D(0.000000,-0.742188,
zOff-0.140625
));
object[266] = new Triangle(new Point3D(-0.109375,-0.781250,
zOff-0.132812
), new Point3D(-0.039062,-0.781250,
zOff-0.125000
), new Point3D(0.000000,-0.742188,
zOff-0.140625
));
object[267] = new Triangle(new Point3D(0.000000,-0.742188,
zOff-0.140625
), new Point3D(-0.101562,-0.742188,
zOff-0.148438
), new Point3D(-0.109375,-0.781250,
zOff-0.132812
));
object[268] = new Triangle(new Point3D(0.000000,-0.750000,
zOff-0.195312
), new Point3D(0.000000,-0.796875,
zOff-0.187500
), new Point3D(0.039062,-0.781250,
zOff-0.125000
));
object[269] = new Triangle(new Point3D(0.039062,-0.781250,
zOff-0.125000
), new Point3D(0.000000,-0.742188,
zOff-0.140625
), new Point3D(0.000000,-0.750000,
zOff-0.195312
));
object[270] = new Triangle(new Point3D(-0.039062,-0.781250,
zOff-0.125000
), new Point3D(0.000000,-0.796875,
zOff-0.187500
), new Point3D(0.000000,-0.750000,
zOff-0.195312
));
object[271] = new Triangle(new Point3D(0.000000,-0.750000,
zOff-0.195312
), new Point3D(0.000000,-0.742188,
zOff-0.140625
), new Point3D(-0.039062,-0.781250,
zOff-0.125000
));
object[272] = new Triangle(new Point3D(0.000000,-0.742188,
zOff-0.328125
), new Point3D(0.085938,-0.742188,
zOff-0.289062
), new Point3D(0.093750,-0.781250,
zOff-0.273438
));
object[273] = new Triangle(new Point3D(0.093750,-0.781250,
zOff-0.273438
), new Point3D(0.000000,-0.781250,
zOff-0.320312
), new Point3D(0.000000,-0.742188,
zOff-0.328125
));
object[274] = new Triangle(new Point3D(-0.093750,-0.781250,
zOff-0.273438
), new Point3D(-0.085938,-0.742188,
zOff-0.289062
), new Point3D(0.000000,-0.742188,
zOff-0.328125
));
object[275] = new Triangle(new Point3D(0.000000,-0.742188,
zOff-0.328125
), new Point3D(0.000000,-0.781250,
zOff-0.320312
), new Point3D(-0.093750,-0.781250,
zOff-0.273438
));
object[276] = new Triangle(new Point3D(0.000000,-0.781250,
zOff-0.320312
), new Point3D(0.093750,-0.781250,
zOff-0.273438
), new Point3D(0.078125,-0.804688,
zOff-0.250000
));
object[277] = new Triangle(new Point3D(0.078125,-0.804688,
zOff-0.250000
), new Point3D(0.000000,-0.804688,
zOff-0.289062
), new Point3D(0.000000,-0.781250,
zOff-0.320312
));
object[278] = new Triangle(new Point3D(-0.078125,-0.804688,
zOff-0.250000
), new Point3D(-0.093750,-0.781250,
zOff-0.273438
), new Point3D(0.000000,-0.781250,
zOff-0.320312
));
object[279] = new Triangle(new Point3D(0.000000,-0.781250,
zOff-0.320312
), new Point3D(0.000000,-0.804688,
zOff-0.289062
), new Point3D(-0.078125,-0.804688,
zOff-0.250000
));
object[280] = new Triangle(new Point3D(0.000000,-0.796875,
zOff-0.187500
), new Point3D(0.000000,-0.828125,
zOff-0.203125
), new Point3D(0.046875,-0.812500,
zOff-0.148438
));
object[281] = new Triangle(new Point3D(0.046875,-0.812500,
zOff-0.148438
), new Point3D(0.039062,-0.781250,
zOff-0.125000
), new Point3D(0.000000,-0.796875,
zOff-0.187500
));
object[282] = new Triangle(new Point3D(-0.046875,-0.812500,
zOff-0.148438
), new Point3D(0.000000,-0.828125,
zOff-0.203125
), new Point3D(0.000000,-0.796875,
zOff-0.187500
));
object[283] = new Triangle(new Point3D(0.000000,-0.796875,
zOff-0.187500
), new Point3D(-0.039062,-0.781250,
zOff-0.125000
), new Point3D(-0.046875,-0.812500,
zOff-0.148438
));
object[284] = new Triangle(new Point3D(0.039062,-0.781250,
zOff-0.125000
), new Point3D(0.046875,-0.812500,
zOff-0.148438
), new Point3D(0.093750,-0.812500,
zOff-0.156250
));
object[285] = new Triangle(new Point3D(0.093750,-0.812500,
zOff-0.156250
), new Point3D(0.109375,-0.781250,
zOff-0.132812
), new Point3D(0.039062,-0.781250,
zOff-0.125000
));
object[286] = new Triangle(new Point3D(-0.093750,-0.812500,
zOff-0.156250
), new Point3D(-0.046875,-0.812500,
zOff-0.148438
), new Point3D(-0.039062,-0.781250,
zOff-0.125000
));
object[287] = new Triangle(new Point3D(-0.039062,-0.781250,
zOff-0.125000
), new Point3D(-0.109375,-0.781250,
zOff-0.132812
), new Point3D(-0.093750,-0.812500,
zOff-0.156250
));
object[288] = new Triangle(new Point3D(0.109375,-0.781250,
zOff-0.132812
), new Point3D(0.093750,-0.812500,
zOff-0.156250
), new Point3D(0.109375,-0.828125,
zOff-0.226562
));
object[289] = new Triangle(new Point3D(0.109375,-0.828125,
zOff-0.226562
), new Point3D(0.132812,-0.796875,
zOff-0.226562
), new Point3D(0.109375,-0.781250,
zOff-0.132812
));
object[290] = new Triangle(new Point3D(-0.109375,-0.828125,
zOff-0.226562
), new Point3D(-0.093750,-0.812500,
zOff-0.156250
), new Point3D(-0.109375,-0.781250,
zOff-0.132812
));
object[291] = new Triangle(new Point3D(-0.109375,-0.781250,
zOff-0.132812
), new Point3D(-0.132812,-0.796875,
zOff-0.226562
), new Point3D(-0.109375,-0.828125,
zOff-0.226562
));
object[292] = new Triangle(new Point3D(0.132812,-0.796875,
zOff-0.226562
), new Point3D(0.109375,-0.828125,
zOff-0.226562
), new Point3D(0.078125,-0.804688,
zOff-0.250000
));
object[293] = new Triangle(new Point3D(0.078125,-0.804688,
zOff-0.250000
), new Point3D(0.093750,-0.781250,
zOff-0.273438
), new Point3D(0.132812,-0.796875,
zOff-0.226562
));
object[294] = new Triangle(new Point3D(-0.078125,-0.804688,
zOff-0.250000
), new Point3D(-0.109375,-0.828125,
zOff-0.226562
), new Point3D(-0.132812,-0.796875,
zOff-0.226562
));
object[295] = new Triangle(new Point3D(-0.132812,-0.796875,
zOff-0.226562
), new Point3D(-0.093750,-0.781250,
zOff-0.273438
), new Point3D(-0.078125,-0.804688,
zOff-0.250000
));
object[296] = new Triangle(new Point3D(0.000000,-0.828125,
zOff-0.203125
), new Point3D(0.109375,-0.828125,
zOff-0.226562
), new Point3D(0.093750,-0.812500,
zOff-0.156250
));
object[297] = new Triangle(new Point3D(0.093750,-0.812500,
zOff-0.156250
), new Point3D(0.046875,-0.812500,
zOff-0.148438
), new Point3D(0.000000,-0.828125,
zOff-0.203125
));
object[298] = new Triangle(new Point3D(-0.093750,-0.812500,
zOff-0.156250
), new Point3D(-0.109375,-0.828125,
zOff-0.226562
), new Point3D(0.000000,-0.828125,
zOff-0.203125
));
object[299] = new Triangle(new Point3D(0.000000,-0.828125,
zOff-0.203125
), new Point3D(-0.046875,-0.812500,
zOff-0.148438
), new Point3D(-0.093750,-0.812500,
zOff-0.156250
));
object[300] = new Triangle(new Point3D(0.000000,-0.828125,
zOff-0.203125
), new Point3D(0.000000,-0.804688,
zOff-0.289062
), new Point3D(0.078125,-0.804688,
zOff-0.250000
));
object[301] = new Triangle(new Point3D(0.078125,-0.804688,
zOff-0.250000
), new Point3D(0.109375,-0.828125,
zOff-0.226562
), new Point3D(0.000000,-0.828125,
zOff-0.203125
));
object[302] = new Triangle(new Point3D(-0.078125,-0.804688,
zOff-0.250000
), new Point3D(0.000000,-0.804688,
zOff-0.289062
), new Point3D(0.000000,-0.828125,
zOff-0.203125
));
object[303] = new Triangle(new Point3D(0.000000,-0.828125,
zOff-0.203125
), new Point3D(-0.109375,-0.828125,
zOff-0.226562
), new Point3D(-0.078125,-0.804688,
zOff-0.250000
));
object[304] = new Triangle(new Point3D(0.000000,-0.742188,
zOff-0.140625
), new Point3D(0.101562,-0.742188,
zOff-0.148438
), new Point3D(0.125000,-0.812500,
zOff-0.101562
));
object[305] = new Triangle(new Point3D(0.125000,-0.812500,
zOff-0.101562
), new Point3D(0.000000,-0.726562,
zOff+0.046875
), new Point3D(0.000000,-0.742188,
zOff-0.140625
));
object[306] = new Triangle(new Point3D(-0.125000,-0.812500,
zOff-0.101562
), new Point3D(-0.101562,-0.742188,
zOff-0.148438
), new Point3D(0.000000,-0.742188,
zOff-0.140625
));
object[307] = new Triangle(new Point3D(0.000000,-0.742188,
zOff-0.140625
), new Point3D(0.000000,-0.726562,
zOff+0.046875
), new Point3D(-0.125000,-0.812500,
zOff-0.101562
));
object[308] = new Triangle(new Point3D(0.101562,-0.742188,
zOff-0.148438
), new Point3D(0.125000,-0.750000,
zOff-0.226562
), new Point3D(0.164062,-0.710938,
zOff-0.242188
));
object[309] = new Triangle(new Point3D(0.164062,-0.710938,
zOff-0.242188
), new Point3D(0.125000,-0.812500,
zOff-0.101562
), new Point3D(0.101562,-0.742188,
zOff-0.148438
));
object[310] = new Triangle(new Point3D(-0.164062,-0.710938,
zOff-0.242188
), new Point3D(-0.125000,-0.750000,
zOff-0.226562
), new Point3D(-0.101562,-0.742188,
zOff-0.148438
));
object[311] = new Triangle(new Point3D(-0.101562,-0.742188,
zOff-0.148438
), new Point3D(-0.125000,-0.812500,
zOff-0.101562
), new Point3D(-0.164062,-0.710938,
zOff-0.242188
));
object[312] = new Triangle(new Point3D(0.125000,-0.750000,
zOff-0.226562
), new Point3D(0.085938,-0.742188,
zOff-0.289062
), new Point3D(0.179688,-0.710938,
zOff-0.312500
));
object[313] = new Triangle(new Point3D(0.179688,-0.710938,
zOff-0.312500
), new Point3D(0.164062,-0.710938,
zOff-0.242188
), new Point3D(0.125000,-0.750000,
zOff-0.226562
));
object[314] = new Triangle(new Point3D(-0.179688,-0.710938,
zOff-0.312500
), new Point3D(-0.085938,-0.742188,
zOff-0.289062
), new Point3D(-0.125000,-0.750000,
zOff-0.226562
));
object[315] = new Triangle(new Point3D(-0.125000,-0.750000,
zOff-0.226562
), new Point3D(-0.164062,-0.710938,
zOff-0.242188
), new Point3D(-0.179688,-0.710938,
zOff-0.312500
));
object[316] = new Triangle(new Point3D(0.085938,-0.742188,
zOff-0.289062
), new Point3D(0.078125,-0.750000,
zOff-0.445312
), new Point3D(0.210938,-0.710938,
zOff-0.445312
));
object[317] = new Triangle(new Point3D(0.210938,-0.710938,
zOff-0.445312
), new Point3D(0.179688,-0.710938,
zOff-0.312500
), new Point3D(0.085938,-0.742188,
zOff-0.289062
));
object[318] = new Triangle(new Point3D(-0.210938,-0.710938,
zOff-0.445312
), new Point3D(-0.078125,-0.750000,
zOff-0.445312
), new Point3D(-0.085938,-0.742188,
zOff-0.289062
));
object[319] = new Triangle(new Point3D(-0.085938,-0.742188,
zOff-0.289062
), new Point3D(-0.179688,-0.710938,
zOff-0.312500
), new Point3D(-0.210938,-0.710938,
zOff-0.445312
));
object[320] = new Triangle(new Point3D(0.312500,-0.570312,
zOff-0.437500
), new Point3D(0.257812,-0.554688,
zOff-0.312500
), new Point3D(0.179688,-0.710938,
zOff-0.312500
));
object[321] = new Triangle(new Point3D(0.179688,-0.710938,
zOff-0.312500
), new Point3D(0.210938,-0.710938,
zOff-0.445312
), new Point3D(0.312500,-0.570312,
zOff-0.437500
));
object[322] = new Triangle(new Point3D(-0.179688,-0.710938,
zOff-0.312500
), new Point3D(-0.257812,-0.554688,
zOff-0.312500
), new Point3D(-0.312500,-0.570312,
zOff-0.437500
));
object[323] = new Triangle(new Point3D(-0.312500,-0.570312,
zOff-0.437500
), new Point3D(-0.210938,-0.710938,
zOff-0.445312
), new Point3D(-0.179688,-0.710938,
zOff-0.312500
));
object[324] = new Triangle(new Point3D(0.257812,-0.554688,
zOff-0.312500
), new Point3D(0.234375,-0.554688,
zOff-0.250000
), new Point3D(0.164062,-0.710938,
zOff-0.242188
));
object[325] = new Triangle(new Point3D(0.164062,-0.710938,
zOff-0.242188
), new Point3D(0.179688,-0.710938,
zOff-0.312500
), new Point3D(0.257812,-0.554688,
zOff-0.312500
));
object[326] = new Triangle(new Point3D(-0.164062,-0.710938,
zOff-0.242188
), new Point3D(-0.234375,-0.554688,
zOff-0.250000
), new Point3D(-0.257812,-0.554688,
zOff-0.312500
));
object[327] = new Triangle(new Point3D(-0.257812,-0.554688,
zOff-0.312500
), new Point3D(-0.179688,-0.710938,
zOff-0.312500
), new Point3D(-0.164062,-0.710938,
zOff-0.242188
));
object[328] = new Triangle(new Point3D(0.203125,-0.562500,
zOff-0.187500
), new Point3D(0.125000,-0.812500,
zOff-0.101562
), new Point3D(0.164062,-0.710938,
zOff-0.242188
));
object[329] = new Triangle(new Point3D(0.164062,-0.710938,
zOff-0.242188
), new Point3D(0.234375,-0.554688,
zOff-0.250000
), new Point3D(0.203125,-0.562500,
zOff-0.187500
));
object[330] = new Triangle(new Point3D(-0.164062,-0.710938,
zOff-0.242188
), new Point3D(-0.125000,-0.812500,
zOff-0.101562
), new Point3D(-0.203125,-0.562500,
zOff-0.187500
));
object[331] = new Triangle(new Point3D(-0.203125,-0.562500,
zOff-0.187500
), new Point3D(-0.234375,-0.554688,
zOff-0.250000
), new Point3D(-0.164062,-0.710938,
zOff-0.242188
));
object[332] = new Triangle(new Point3D(0.109375,-0.734375,
zOff-0.718750
), new Point3D(0.000000,-0.734375,
zOff-0.765625
), new Point3D(0.000000,-0.718750,
zOff-0.773438
));
object[333] = new Triangle(new Point3D(0.000000,-0.718750,
zOff-0.773438
), new Point3D(0.093750,-0.726562,
zOff-0.742188
), new Point3D(0.109375,-0.734375,
zOff-0.718750
));
object[334] = new Triangle(new Point3D(0.000000,-0.718750,
zOff-0.773438
), new Point3D(0.000000,-0.734375,
zOff-0.765625
), new Point3D(-0.109375,-0.734375,
zOff-0.718750
));
object[335] = new Triangle(new Point3D(-0.109375,-0.734375,
zOff-0.718750
), new Point3D(-0.093750,-0.726562,
zOff-0.742188
), new Point3D(0.000000,-0.718750,
zOff-0.773438
));
object[336] = new Triangle(new Point3D(0.117188,-0.710938,
zOff-0.835938
), new Point3D(0.109375,-0.734375,
zOff-0.718750
), new Point3D(0.093750,-0.726562,
zOff-0.742188
));
object[337] = new Triangle(new Point3D(0.093750,-0.726562,
zOff-0.742188
), new Point3D(0.093750,-0.710938,
zOff-0.820312
), new Point3D(0.117188,-0.710938,
zOff-0.835938
));
object[338] = new Triangle(new Point3D(-0.093750,-0.726562,
zOff-0.742188
), new Point3D(-0.109375,-0.734375,
zOff-0.718750
), new Point3D(-0.117188,-0.710938,
zOff-0.835938
));
object[339] = new Triangle(new Point3D(-0.117188,-0.710938,
zOff-0.835938
), new Point3D(-0.093750,-0.710938,
zOff-0.820312
), new Point3D(-0.093750,-0.726562,
zOff-0.742188
));
object[340] = new Triangle(new Point3D(0.062500,-0.695312,
zOff-0.882812
), new Point3D(0.117188,-0.710938,
zOff-0.835938
), new Point3D(0.093750,-0.710938,
zOff-0.820312
));
object[341] = new Triangle(new Point3D(0.093750,-0.710938,
zOff-0.820312
), new Point3D(0.046875,-0.687500,
zOff-0.867188
), new Point3D(0.062500,-0.695312,
zOff-0.882812
));
object[342] = new Triangle(new Point3D(-0.093750,-0.710938,
zOff-0.820312
), new Point3D(-0.117188,-0.710938,
zOff-0.835938
), new Point3D(-0.062500,-0.695312,
zOff-0.882812
));
object[343] = new Triangle(new Point3D(-0.062500,-0.695312,
zOff-0.882812
), new Point3D(-0.046875,-0.687500,
zOff-0.867188
), new Point3D(-0.093750,-0.710938,
zOff-0.820312
));
object[344] = new Triangle(new Point3D(0.000000,-0.687500,
zOff-0.890625
), new Point3D(0.062500,-0.695312,
zOff-0.882812
), new Point3D(0.046875,-0.687500,
zOff-0.867188
));
object[345] = new Triangle(new Point3D(0.046875,-0.687500,
zOff-0.867188
), new Point3D(0.000000,-0.687500,
zOff-0.875000
), new Point3D(0.000000,-0.687500,
zOff-0.890625
));
object[346] = new Triangle(new Point3D(-0.046875,-0.687500,
zOff-0.867188
), new Point3D(-0.062500,-0.695312,
zOff-0.882812
), new Point3D(0.000000,-0.687500,
zOff-0.890625
));
object[347] = new Triangle(new Point3D(0.000000,-0.687500,
zOff-0.890625
), new Point3D(0.000000,-0.687500,
zOff-0.875000
), new Point3D(-0.046875,-0.687500,
zOff-0.867188
));
object[348] = new Triangle(new Point3D(0.000000,-0.687500,
zOff-0.875000
), new Point3D(0.046875,-0.687500,
zOff-0.867188
), new Point3D(0.046875,-0.632812,
zOff-0.851562
));
object[349] = new Triangle(new Point3D(0.046875,-0.632812,
zOff-0.851562
), new Point3D(0.000000,-0.632812,
zOff-0.859375
), new Point3D(0.000000,-0.687500,
zOff-0.875000
));
object[350] = new Triangle(new Point3D(-0.046875,-0.632812,
zOff-0.851562
), new Point3D(-0.046875,-0.687500,
zOff-0.867188
), new Point3D(0.000000,-0.687500,
zOff-0.875000
));
object[351] = new Triangle(new Point3D(0.000000,-0.687500,
zOff-0.875000
), new Point3D(0.000000,-0.632812,
zOff-0.859375
), new Point3D(-0.046875,-0.632812,
zOff-0.851562
));
object[352] = new Triangle(new Point3D(0.046875,-0.687500,
zOff-0.867188
), new Point3D(0.093750,-0.710938,
zOff-0.820312
), new Point3D(0.093750,-0.640625,
zOff-0.812500
));
object[353] = new Triangle(new Point3D(0.093750,-0.640625,
zOff-0.812500
), new Point3D(0.046875,-0.632812,
zOff-0.851562
), new Point3D(0.046875,-0.687500,
zOff-0.867188
));
object[354] = new Triangle(new Point3D(-0.093750,-0.640625,
zOff-0.812500
), new Point3D(-0.093750,-0.710938,
zOff-0.820312
), new Point3D(-0.046875,-0.687500,
zOff-0.867188
));
object[355] = new Triangle(new Point3D(-0.046875,-0.687500,
zOff-0.867188
), new Point3D(-0.046875,-0.632812,
zOff-0.851562
), new Point3D(-0.093750,-0.640625,
zOff-0.812500
));
object[356] = new Triangle(new Point3D(0.093750,-0.710938,
zOff-0.820312
), new Point3D(0.093750,-0.726562,
zOff-0.742188
), new Point3D(0.093750,-0.664062,
zOff-0.750000
));
object[357] = new Triangle(new Point3D(0.093750,-0.664062,
zOff-0.750000
), new Point3D(0.093750,-0.640625,
zOff-0.812500
), new Point3D(0.093750,-0.710938,
zOff-0.820312
));
object[358] = new Triangle(new Point3D(-0.093750,-0.664062,
zOff-0.750000
), new Point3D(-0.093750,-0.726562,
zOff-0.742188
), new Point3D(-0.093750,-0.710938,
zOff-0.820312
));
object[359] = new Triangle(new Point3D(-0.093750,-0.710938,
zOff-0.820312
), new Point3D(-0.093750,-0.640625,
zOff-0.812500
), new Point3D(-0.093750,-0.664062,
zOff-0.750000
));
object[360] = new Triangle(new Point3D(0.093750,-0.726562,
zOff-0.742188
), new Point3D(0.000000,-0.718750,
zOff-0.773438
), new Point3D(0.000000,-0.656250,
zOff-0.781250
));
object[361] = new Triangle(new Point3D(0.000000,-0.656250,
zOff-0.781250
), new Point3D(0.093750,-0.664062,
zOff-0.750000
), new Point3D(0.093750,-0.726562,
zOff-0.742188
));
object[362] = new Triangle(new Point3D(0.000000,-0.656250,
zOff-0.781250
), new Point3D(0.000000,-0.718750,
zOff-0.773438
), new Point3D(-0.093750,-0.726562,
zOff-0.742188
));
object[363] = new Triangle(new Point3D(-0.093750,-0.726562,
zOff-0.742188
), new Point3D(-0.093750,-0.664062,
zOff-0.750000
), new Point3D(0.000000,-0.656250,
zOff-0.781250
));
object[364] = new Triangle(new Point3D(0.000000,-0.656250,
zOff-0.781250
), new Point3D(0.000000,-0.632812,
zOff-0.859375
), new Point3D(0.046875,-0.632812,
zOff-0.851562
));
object[365] = new Triangle(new Point3D(0.046875,-0.632812,
zOff-0.851562
), new Point3D(0.093750,-0.664062,
zOff-0.750000
), new Point3D(0.000000,-0.656250,
zOff-0.781250
));
object[366] = new Triangle(new Point3D(-0.046875,-0.632812,
zOff-0.851562
), new Point3D(0.000000,-0.632812,
zOff-0.859375
), new Point3D(0.000000,-0.656250,
zOff-0.781250
));
object[367] = new Triangle(new Point3D(0.000000,-0.656250,
zOff-0.781250
), new Point3D(-0.093750,-0.664062,
zOff-0.750000
), new Point3D(-0.046875,-0.632812,
zOff-0.851562
));
object[368] = new Triangle(new Point3D(0.093750,-0.664062,
zOff-0.750000
), new Point3D(0.046875,-0.632812,
zOff-0.851562
), new Point3D(0.093750,-0.640625,
zOff-0.812500
));
object[369] = new Triangle(new Point3D(-0.093750,-0.640625,
zOff-0.812500
), new Point3D(-0.046875,-0.632812,
zOff-0.851562
), new Point3D(-0.093750,-0.664062,
zOff-0.750000
));
object[370] = new Triangle(new Point3D(0.132812,-0.757812,
zOff+0.210938
), new Point3D(0.164062,-0.750000,
zOff+0.140625
), new Point3D(0.187500,-0.773438,
zOff+0.156250
));
object[371] = new Triangle(new Point3D(0.187500,-0.773438,
zOff+0.156250
), new Point3D(0.171875,-0.781250,
zOff+0.218750
), new Point3D(0.132812,-0.757812,
zOff+0.210938
));
object[372] = new Triangle(new Point3D(-0.187500,-0.773438,
zOff+0.156250
), new Point3D(-0.164062,-0.750000,
zOff+0.140625
), new Point3D(-0.132812,-0.757812,
zOff+0.210938
));
object[373] = new Triangle(new Point3D(-0.132812,-0.757812,
zOff+0.210938
), new Point3D(-0.171875,-0.781250,
zOff+0.218750
), new Point3D(-0.187500,-0.773438,
zOff+0.156250
));
object[374] = new Triangle(new Point3D(0.125000,-0.765625,
zOff+0.304688
), new Point3D(0.132812,-0.757812,
zOff+0.210938
), new Point3D(0.171875,-0.781250,
zOff+0.218750
));
object[375] = new Triangle(new Point3D(0.171875,-0.781250,
zOff+0.218750
), new Point3D(0.179688,-0.781250,
zOff+0.296875
), new Point3D(0.125000,-0.765625,
zOff+0.304688
));
object[376] = new Triangle(new Point3D(-0.171875,-0.781250,
zOff+0.218750
), new Point3D(-0.132812,-0.757812,
zOff+0.210938
), new Point3D(-0.125000,-0.765625,
zOff+0.304688
));
object[377] = new Triangle(new Point3D(-0.125000,-0.765625,
zOff+0.304688
), new Point3D(-0.179688,-0.781250,
zOff+0.296875
), new Point3D(-0.171875,-0.781250,
zOff+0.218750
));
object[378] = new Triangle(new Point3D(0.164062,-0.773438,
zOff+0.414062
), new Point3D(0.125000,-0.765625,
zOff+0.304688
), new Point3D(0.179688,-0.781250,
zOff+0.296875
));
object[379] = new Triangle(new Point3D(0.179688,-0.781250,
zOff+0.296875
), new Point3D(0.210938,-0.781250,
zOff+0.375000
), new Point3D(0.164062,-0.773438,
zOff+0.414062
));
object[380] = new Triangle(new Point3D(-0.179688,-0.781250,
zOff+0.296875
), new Point3D(-0.125000,-0.765625,
zOff+0.304688
), new Point3D(-0.164062,-0.773438,
zOff+0.414062
));
object[381] = new Triangle(new Point3D(-0.164062,-0.773438,
zOff+0.414062
), new Point3D(-0.210938,-0.781250,
zOff+0.375000
), new Point3D(-0.179688,-0.781250,
zOff+0.296875
));
object[382] = new Triangle(new Point3D(0.164062,-0.750000,
zOff+0.140625
), new Point3D(0.203125,-0.742188,
zOff+0.093750
), new Point3D(0.226562,-0.781250,
zOff+0.109375
));
object[383] = new Triangle(new Point3D(0.226562,-0.781250,
zOff+0.109375
), new Point3D(0.187500,-0.773438,
zOff+0.156250
), new Point3D(0.164062,-0.750000,
zOff+0.140625
));
object[384] = new Triangle(new Point3D(-0.226562,-0.781250,
zOff+0.109375
), new Point3D(-0.203125,-0.742188,
zOff+0.093750
), new Point3D(-0.164062,-0.750000,
zOff+0.140625
));
object[385] = new Triangle(new Point3D(-0.164062,-0.750000,
zOff+0.140625
), new Point3D(-0.187500,-0.773438,
zOff+0.156250
), new Point3D(-0.226562,-0.781250,
zOff+0.109375
));
object[386] = new Triangle(new Point3D(0.203125,-0.742188,
zOff+0.093750
), new Point3D(0.375000,-0.703125,
zOff+0.015625
), new Point3D(0.375000,-0.742188,
zOff+0.062500
));
object[387] = new Triangle(new Point3D(0.375000,-0.742188,
zOff+0.062500
), new Point3D(0.226562,-0.781250,
zOff+0.109375
), new Point3D(0.203125,-0.742188,
zOff+0.093750
));
object[388] = new Triangle(new Point3D(-0.375000,-0.742188,
zOff+0.062500
), new Point3D(-0.375000,-0.703125,
zOff+0.015625
), new Point3D(-0.203125,-0.742188,
zOff+0.093750
));
object[389] = new Triangle(new Point3D(-0.203125,-0.742188,
zOff+0.093750
), new Point3D(-0.226562,-0.781250,
zOff+0.109375
), new Point3D(-0.375000,-0.742188,
zOff+0.062500
));
object[390] = new Triangle(new Point3D(0.375000,-0.703125,
zOff+0.015625
), new Point3D(0.492188,-0.671875,
zOff+0.062500
), new Point3D(0.476562,-0.718750,
zOff+0.101562
));
object[391] = new Triangle(new Point3D(0.476562,-0.718750,
zOff+0.101562
), new Point3D(0.375000,-0.742188,
zOff+0.062500
), new Point3D(0.375000,-0.703125,
zOff+0.015625
));
object[392] = new Triangle(new Point3D(-0.476562,-0.718750,
zOff+0.101562
), new Point3D(-0.492188,-0.671875,
zOff+0.062500
), new Point3D(-0.375000,-0.703125,
zOff+0.015625
));
object[393] = new Triangle(new Point3D(-0.375000,-0.703125,
zOff+0.015625
), new Point3D(-0.375000,-0.742188,
zOff+0.062500
), new Point3D(-0.476562,-0.718750,
zOff+0.101562
));
object[394] = new Triangle(new Point3D(0.492188,-0.671875,
zOff+0.062500
), new Point3D(0.625000,-0.648438,
zOff+0.187500
), new Point3D(0.578125,-0.679688,
zOff+0.195312
));
object[395] = new Triangle(new Point3D(0.578125,-0.679688,
zOff+0.195312
), new Point3D(0.476562,-0.718750,
zOff+0.101562
), new Point3D(0.492188,-0.671875,
zOff+0.062500
));
object[396] = new Triangle(new Point3D(-0.578125,-0.679688,
zOff+0.195312
), new Point3D(-0.625000,-0.648438,
zOff+0.187500
), new Point3D(-0.492188,-0.671875,
zOff+0.062500
));
object[397] = new Triangle(new Point3D(-0.492188,-0.671875,
zOff+0.062500
), new Point3D(-0.476562,-0.718750,
zOff+0.101562
), new Point3D(-0.578125,-0.679688,
zOff+0.195312
));
object[398] = new Triangle(new Point3D(0.625000,-0.648438,
zOff+0.187500
), new Point3D(0.640625,-0.648438,
zOff+0.296875
), new Point3D(0.585938,-0.687500,
zOff+0.289062
));
object[399] = new Triangle(new Point3D(0.585938,-0.687500,
zOff+0.289062
), new Point3D(0.578125,-0.679688,
zOff+0.195312
), new Point3D(0.625000,-0.648438,
zOff+0.187500
));
object[400] = new Triangle(new Point3D(-0.585938,-0.687500,
zOff+0.289062
), new Point3D(-0.640625,-0.648438,
zOff+0.296875
), new Point3D(-0.625000,-0.648438,
zOff+0.187500
));
object[401] = new Triangle(new Point3D(-0.625000,-0.648438,
zOff+0.187500
), new Point3D(-0.578125,-0.679688,
zOff+0.195312
), new Point3D(-0.585938,-0.687500,
zOff+0.289062
));
object[402] = new Triangle(new Point3D(0.640625,-0.648438,
zOff+0.296875
), new Point3D(0.601562,-0.664062,
zOff+0.375000
), new Point3D(0.562500,-0.695312,
zOff+0.351562
));
object[403] = new Triangle(new Point3D(0.562500,-0.695312,
zOff+0.351562
), new Point3D(0.585938,-0.687500,
zOff+0.289062
), new Point3D(0.640625,-0.648438,
zOff+0.296875
));
object[404] = new Triangle(new Point3D(-0.562500,-0.695312,
zOff+0.351562
), new Point3D(-0.601562,-0.664062,
zOff+0.375000
), new Point3D(-0.640625,-0.648438,
zOff+0.296875
));
object[405] = new Triangle(new Point3D(-0.640625,-0.648438,
zOff+0.296875
), new Point3D(-0.585938,-0.687500,
zOff+0.289062
), new Point3D(-0.562500,-0.695312,
zOff+0.351562
));
object[406] = new Triangle(new Point3D(0.601562,-0.664062,
zOff+0.375000
), new Point3D(0.429688,-0.718750,
zOff+0.437500
), new Point3D(0.421875,-0.773438,
zOff+0.398438
));
object[407] = new Triangle(new Point3D(0.421875,-0.773438,
zOff+0.398438
), new Point3D(0.562500,-0.695312,
zOff+0.351562
), new Point3D(0.601562,-0.664062,
zOff+0.375000
));
object[408] = new Triangle(new Point3D(-0.421875,-0.773438,
zOff+0.398438
), new Point3D(-0.429688,-0.718750,
zOff+0.437500
), new Point3D(-0.601562,-0.664062,
zOff+0.375000
));
object[409] = new Triangle(new Point3D(-0.601562,-0.664062,
zOff+0.375000
), new Point3D(-0.562500,-0.695312,
zOff+0.351562
), new Point3D(-0.421875,-0.773438,
zOff+0.398438
));
object[410] = new Triangle(new Point3D(0.429688,-0.718750,
zOff+0.437500
), new Point3D(0.328125,-0.742188,
zOff+0.476562
), new Point3D(0.335938,-0.757812,
zOff+0.429688
));
object[411] = new Triangle(new Point3D(0.335938,-0.757812,
zOff+0.429688
), new Point3D(0.421875,-0.773438,
zOff+0.398438
), new Point3D(0.429688,-0.718750,
zOff+0.437500
));
object[412] = new Triangle(new Point3D(-0.335938,-0.757812,
zOff+0.429688
), new Point3D(-0.328125,-0.742188,
zOff+0.476562
), new Point3D(-0.429688,-0.718750,
zOff+0.437500
));
object[413] = new Triangle(new Point3D(-0.429688,-0.718750,
zOff+0.437500
), new Point3D(-0.421875,-0.773438,
zOff+0.398438
), new Point3D(-0.335938,-0.757812,
zOff+0.429688
));
object[414] = new Triangle(new Point3D(0.328125,-0.742188,
zOff+0.476562
), new Point3D(0.250000,-0.757812,
zOff+0.468750
), new Point3D(0.273438,-0.773438,
zOff+0.421875
));
object[415] = new Triangle(new Point3D(0.273438,-0.773438,
zOff+0.421875
), new Point3D(0.335938,-0.757812,
zOff+0.429688
), new Point3D(0.328125,-0.742188,
zOff+0.476562
));
object[416] = new Triangle(new Point3D(-0.273438,-0.773438,
zOff+0.421875
), new Point3D(-0.250000,-0.757812,
zOff+0.468750
), new Point3D(-0.328125,-0.742188,
zOff+0.476562
));
object[417] = new Triangle(new Point3D(-0.328125,-0.742188,
zOff+0.476562
), new Point3D(-0.335938,-0.757812,
zOff+0.429688
), new Point3D(-0.273438,-0.773438,
zOff+0.421875
));
object[418] = new Triangle(new Point3D(0.250000,-0.757812,
zOff+0.468750
), new Point3D(0.164062,-0.773438,
zOff+0.414062
), new Point3D(0.210938,-0.781250,
zOff+0.375000
));
object[419] = new Triangle(new Point3D(0.210938,-0.781250,
zOff+0.375000
), new Point3D(0.273438,-0.773438,
zOff+0.421875
), new Point3D(0.250000,-0.757812,
zOff+0.468750
));
object[420] = new Triangle(new Point3D(-0.210938,-0.781250,
zOff+0.375000
), new Point3D(-0.164062,-0.773438,
zOff+0.414062
), new Point3D(-0.250000,-0.757812,
zOff+0.468750
));
object[421] = new Triangle(new Point3D(-0.250000,-0.757812,
zOff+0.468750
), new Point3D(-0.273438,-0.773438,
zOff+0.421875
), new Point3D(-0.210938,-0.781250,
zOff+0.375000
));
object[422] = new Triangle(new Point3D(0.273438,-0.773438,
zOff+0.421875
), new Point3D(0.210938,-0.781250,
zOff+0.375000
), new Point3D(0.234375,-0.757812,
zOff+0.359375
));
object[423] = new Triangle(new Point3D(0.234375,-0.757812,
zOff+0.359375
), new Point3D(0.281250,-0.765625,
zOff+0.398438
), new Point3D(0.273438,-0.773438,
zOff+0.421875
));
object[424] = new Triangle(new Point3D(-0.234375,-0.757812,
zOff+0.359375
), new Point3D(-0.210938,-0.781250,
zOff+0.375000
), new Point3D(-0.273438,-0.773438,
zOff+0.421875
));
object[425] = new Triangle(new Point3D(-0.273438,-0.773438,
zOff+0.421875
), new Point3D(-0.281250,-0.765625,
zOff+0.398438
), new Point3D(-0.234375,-0.757812,
zOff+0.359375
));
object[426] = new Triangle(new Point3D(0.335938,-0.757812,
zOff+0.429688
), new Point3D(0.273438,-0.773438,
zOff+0.421875
), new Point3D(0.281250,-0.765625,
zOff+0.398438
));
object[427] = new Triangle(new Point3D(0.281250,-0.765625,
zOff+0.398438
), new Point3D(0.335938,-0.750000,
zOff+0.406250
), new Point3D(0.335938,-0.757812,
zOff+0.429688
));
object[428] = new Triangle(new Point3D(-0.281250,-0.765625,
zOff+0.398438
), new Point3D(-0.273438,-0.773438,
zOff+0.421875
), new Point3D(-0.335938,-0.757812,
zOff+0.429688
));
object[429] = new Triangle(new Point3D(-0.335938,-0.757812,
zOff+0.429688
), new Point3D(-0.335938,-0.750000,
zOff+0.406250
), new Point3D(-0.281250,-0.765625,
zOff+0.398438
));
object[430] = new Triangle(new Point3D(0.421875,-0.773438,
zOff+0.398438
), new Point3D(0.335938,-0.757812,
zOff+0.429688
), new Point3D(0.335938,-0.750000,
zOff+0.406250
));
object[431] = new Triangle(new Point3D(0.335938,-0.750000,
zOff+0.406250
), new Point3D(0.414062,-0.750000,
zOff+0.390625
), new Point3D(0.421875,-0.773438,
zOff+0.398438
));
object[432] = new Triangle(new Point3D(-0.335938,-0.750000,
zOff+0.406250
), new Point3D(-0.335938,-0.757812,
zOff+0.429688
), new Point3D(-0.421875,-0.773438,
zOff+0.398438
));
object[433] = new Triangle(new Point3D(-0.421875,-0.773438,
zOff+0.398438
), new Point3D(-0.414062,-0.750000,
zOff+0.390625
), new Point3D(-0.335938,-0.750000,
zOff+0.406250
));
object[434] = new Triangle(new Point3D(0.562500,-0.695312,
zOff+0.351562
), new Point3D(0.421875,-0.773438,
zOff+0.398438
), new Point3D(0.414062,-0.750000,
zOff+0.390625
));
object[435] = new Triangle(new Point3D(0.414062,-0.750000,
zOff+0.390625
), new Point3D(0.531250,-0.679688,
zOff+0.335938
), new Point3D(0.562500,-0.695312,
zOff+0.351562
));
object[436] = new Triangle(new Point3D(-0.414062,-0.750000,
zOff+0.390625
), new Point3D(-0.421875,-0.773438,
zOff+0.398438
), new Point3D(-0.562500,-0.695312,
zOff+0.351562
));
object[437] = new Triangle(new Point3D(-0.562500,-0.695312,
zOff+0.351562
), new Point3D(-0.531250,-0.679688,
zOff+0.335938
), new Point3D(-0.414062,-0.750000,
zOff+0.390625
));
object[438] = new Triangle(new Point3D(0.585938,-0.687500,
zOff+0.289062
), new Point3D(0.562500,-0.695312,
zOff+0.351562
), new Point3D(0.531250,-0.679688,
zOff+0.335938
));
object[439] = new Triangle(new Point3D(0.531250,-0.679688,
zOff+0.335938
), new Point3D(0.554688,-0.671875,
zOff+0.281250
), new Point3D(0.585938,-0.687500,
zOff+0.289062
));
object[440] = new Triangle(new Point3D(-0.531250,-0.679688,
zOff+0.335938
), new Point3D(-0.562500,-0.695312,
zOff+0.351562
), new Point3D(-0.585938,-0.687500,
zOff+0.289062
));
object[441] = new Triangle(new Point3D(-0.585938,-0.687500,
zOff+0.289062
), new Point3D(-0.554688,-0.671875,
zOff+0.281250
), new Point3D(-0.531250,-0.679688,
zOff+0.335938
));
object[442] = new Triangle(new Point3D(0.578125,-0.679688,
zOff+0.195312
), new Point3D(0.585938,-0.687500,
zOff+0.289062
), new Point3D(0.554688,-0.671875,
zOff+0.281250
));
object[443] = new Triangle(new Point3D(0.554688,-0.671875,
zOff+0.281250
), new Point3D(0.546875,-0.671875,
zOff+0.210938
), new Point3D(0.578125,-0.679688,
zOff+0.195312
));
object[444] = new Triangle(new Point3D(-0.554688,-0.671875,
zOff+0.281250
), new Point3D(-0.585938,-0.687500,
zOff+0.289062
), new Point3D(-0.578125,-0.679688,
zOff+0.195312
));
object[445] = new Triangle(new Point3D(-0.578125,-0.679688,
zOff+0.195312
), new Point3D(-0.546875,-0.671875,
zOff+0.210938
), new Point3D(-0.554688,-0.671875,
zOff+0.281250
));
object[446] = new Triangle(new Point3D(0.476562,-0.718750,
zOff+0.101562
), new Point3D(0.578125,-0.679688,
zOff+0.195312
), new Point3D(0.546875,-0.671875,
zOff+0.210938
));
object[447] = new Triangle(new Point3D(0.546875,-0.671875,
zOff+0.210938
), new Point3D(0.460938,-0.703125,
zOff+0.117188
), new Point3D(0.476562,-0.718750,
zOff+0.101562
));
object[448] = new Triangle(new Point3D(-0.546875,-0.671875,
zOff+0.210938
), new Point3D(-0.578125,-0.679688,
zOff+0.195312
), new Point3D(-0.476562,-0.718750,
zOff+0.101562
));
object[449] = new Triangle(new Point3D(-0.476562,-0.718750,
zOff+0.101562
), new Point3D(-0.460938,-0.703125,
zOff+0.117188
), new Point3D(-0.546875,-0.671875,
zOff+0.210938
));
object[450] = new Triangle(new Point3D(0.375000,-0.742188,
zOff+0.062500
), new Point3D(0.476562,-0.718750,
zOff+0.101562
), new Point3D(0.460938,-0.703125,
zOff+0.117188
));
object[451] = new Triangle(new Point3D(0.460938,-0.703125,
zOff+0.117188
), new Point3D(0.375000,-0.726562,
zOff+0.085938
), new Point3D(0.375000,-0.742188,
zOff+0.062500
));
object[452] = new Triangle(new Point3D(-0.460938,-0.703125,
zOff+0.117188
), new Point3D(-0.476562,-0.718750,
zOff+0.101562
), new Point3D(-0.375000,-0.742188,
zOff+0.062500
));
object[453] = new Triangle(new Point3D(-0.375000,-0.742188,
zOff+0.062500
), new Point3D(-0.375000,-0.726562,
zOff+0.085938
), new Point3D(-0.460938,-0.703125,
zOff+0.117188
));
object[454] = new Triangle(new Point3D(0.226562,-0.781250,
zOff+0.109375
), new Point3D(0.375000,-0.742188,
zOff+0.062500
), new Point3D(0.375000,-0.726562,
zOff+0.085938
));
object[455] = new Triangle(new Point3D(0.375000,-0.726562,
zOff+0.085938
), new Point3D(0.242188,-0.757812,
zOff+0.125000
), new Point3D(0.226562,-0.781250,
zOff+0.109375
));
object[456] = new Triangle(new Point3D(-0.375000,-0.726562,
zOff+0.085938
), new Point3D(-0.375000,-0.742188,
zOff+0.062500
), new Point3D(-0.226562,-0.781250,
zOff+0.109375
));
object[457] = new Triangle(new Point3D(-0.226562,-0.781250,
zOff+0.109375
), new Point3D(-0.242188,-0.757812,
zOff+0.125000
), new Point3D(-0.375000,-0.726562,
zOff+0.085938
));
object[458] = new Triangle(new Point3D(0.187500,-0.773438,
zOff+0.156250
), new Point3D(0.226562,-0.781250,
zOff+0.109375
), new Point3D(0.242188,-0.757812,
zOff+0.125000
));
object[459] = new Triangle(new Point3D(0.242188,-0.757812,
zOff+0.125000
), new Point3D(0.203125,-0.750000,
zOff+0.171875
), new Point3D(0.187500,-0.773438,
zOff+0.156250
));
object[460] = new Triangle(new Point3D(-0.242188,-0.757812,
zOff+0.125000
), new Point3D(-0.226562,-0.781250,
zOff+0.109375
), new Point3D(-0.187500,-0.773438,
zOff+0.156250
));
object[461] = new Triangle(new Point3D(-0.187500,-0.773438,
zOff+0.156250
), new Point3D(-0.203125,-0.750000,
zOff+0.171875
), new Point3D(-0.242188,-0.757812,
zOff+0.125000
));
object[462] = new Triangle(new Point3D(0.210938,-0.781250,
zOff+0.375000
), new Point3D(0.179688,-0.781250,
zOff+0.296875
), new Point3D(0.195312,-0.757812,
zOff+0.296875
));
object[463] = new Triangle(new Point3D(0.195312,-0.757812,
zOff+0.296875
), new Point3D(0.234375,-0.757812,
zOff+0.359375
), new Point3D(0.210938,-0.781250,
zOff+0.375000
));
object[464] = new Triangle(new Point3D(-0.195312,-0.757812,
zOff+0.296875
), new Point3D(-0.179688,-0.781250,
zOff+0.296875
), new Point3D(-0.210938,-0.781250,
zOff+0.375000
));
object[465] = new Triangle(new Point3D(-0.210938,-0.781250,
zOff+0.375000
), new Point3D(-0.234375,-0.757812,
zOff+0.359375
), new Point3D(-0.195312,-0.757812,
zOff+0.296875
));
object[466] = new Triangle(new Point3D(0.179688,-0.781250,
zOff+0.296875
), new Point3D(0.171875,-0.781250,
zOff+0.218750
), new Point3D(0.195312,-0.750000,
zOff+0.226562
));
object[467] = new Triangle(new Point3D(0.195312,-0.750000,
zOff+0.226562
), new Point3D(0.195312,-0.757812,
zOff+0.296875
), new Point3D(0.179688,-0.781250,
zOff+0.296875
));
object[468] = new Triangle(new Point3D(-0.195312,-0.750000,
zOff+0.226562
), new Point3D(-0.171875,-0.781250,
zOff+0.218750
), new Point3D(-0.179688,-0.781250,
zOff+0.296875
));
object[469] = new Triangle(new Point3D(-0.179688,-0.781250,
zOff+0.296875
), new Point3D(-0.195312,-0.757812,
zOff+0.296875
), new Point3D(-0.195312,-0.750000,
zOff+0.226562
));
object[470] = new Triangle(new Point3D(0.171875,-0.781250,
zOff+0.218750
), new Point3D(0.187500,-0.773438,
zOff+0.156250
), new Point3D(0.203125,-0.750000,
zOff+0.171875
));
object[471] = new Triangle(new Point3D(0.203125,-0.750000,
zOff+0.171875
), new Point3D(0.195312,-0.750000,
zOff+0.226562
), new Point3D(0.171875,-0.781250,
zOff+0.218750
));
object[472] = new Triangle(new Point3D(-0.203125,-0.750000,
zOff+0.171875
), new Point3D(-0.187500,-0.773438,
zOff+0.156250
), new Point3D(-0.171875,-0.781250,
zOff+0.218750
));
object[473] = new Triangle(new Point3D(-0.171875,-0.781250,
zOff+0.218750
), new Point3D(-0.195312,-0.750000,
zOff+0.226562
), new Point3D(-0.203125,-0.750000,
zOff+0.171875
));
object[474] = new Triangle(new Point3D(0.000000,-0.742188,
zOff+0.429688
), new Point3D(0.062500,-0.750000,
zOff+0.492188
), new Point3D(0.109375,-0.609375,
zOff+0.460938
));
object[475] = new Triangle(new Point3D(0.109375,-0.609375,
zOff+0.460938
), new Point3D(0.000000,-0.601562,
zOff+0.406250
), new Point3D(0.000000,-0.742188,
zOff+0.429688
));
object[476] = new Triangle(new Point3D(-0.109375,-0.609375,
zOff+0.460938
), new Point3D(-0.062500,-0.750000,
zOff+0.492188
), new Point3D(0.000000,-0.742188,
zOff+0.429688
));
object[477] = new Triangle(new Point3D(0.000000,-0.742188,
zOff+0.429688
), new Point3D(0.000000,-0.601562,
zOff+0.406250
), new Point3D(-0.109375,-0.609375,
zOff+0.460938
));
object[478] = new Triangle(new Point3D(0.062500,-0.750000,
zOff+0.492188
), new Point3D(0.156250,-0.757812,
zOff+0.718750
), new Point3D(0.195312,-0.617188,
zOff+0.664062
));
object[479] = new Triangle(new Point3D(0.195312,-0.617188,
zOff+0.664062
), new Point3D(0.109375,-0.609375,
zOff+0.460938
), new Point3D(0.062500,-0.750000,
zOff+0.492188
));
object[480] = new Triangle(new Point3D(-0.195312,-0.617188,
zOff+0.664062
), new Point3D(-0.156250,-0.757812,
zOff+0.718750
), new Point3D(-0.062500,-0.750000,
zOff+0.492188
));
object[481] = new Triangle(new Point3D(-0.062500,-0.750000,
zOff+0.492188
), new Point3D(-0.109375,-0.609375,
zOff+0.460938
), new Point3D(-0.195312,-0.617188,
zOff+0.664062
));
object[482] = new Triangle(new Point3D(0.156250,-0.757812,
zOff+0.718750
), new Point3D(0.320312,-0.734375,
zOff+0.757812
), new Point3D(0.335938,-0.593750,
zOff+0.687500
));
object[483] = new Triangle(new Point3D(0.335938,-0.593750,
zOff+0.687500
), new Point3D(0.195312,-0.617188,
zOff+0.664062
), new Point3D(0.156250,-0.757812,
zOff+0.718750
));
object[484] = new Triangle(new Point3D(-0.335938,-0.593750,
zOff+0.687500
), new Point3D(-0.320312,-0.734375,
zOff+0.757812
), new Point3D(-0.156250,-0.757812,
zOff+0.718750
));
object[485] = new Triangle(new Point3D(-0.156250,-0.757812,
zOff+0.718750
), new Point3D(-0.195312,-0.617188,
zOff+0.664062
), new Point3D(-0.335938,-0.593750,
zOff+0.687500
));
object[486] = new Triangle(new Point3D(0.320312,-0.734375,
zOff+0.757812
), new Point3D(0.492188,-0.687500,
zOff+0.601562
), new Point3D(0.484375,-0.554688,
zOff+0.554688
));
object[487] = new Triangle(new Point3D(0.484375,-0.554688,
zOff+0.554688
), new Point3D(0.335938,-0.593750,
zOff+0.687500
), new Point3D(0.320312,-0.734375,
zOff+0.757812
));
object[488] = new Triangle(new Point3D(-0.484375,-0.554688,
zOff+0.554688
), new Point3D(-0.492188,-0.687500,
zOff+0.601562
), new Point3D(-0.320312,-0.734375,
zOff+0.757812
));
object[489] = new Triangle(new Point3D(-0.320312,-0.734375,
zOff+0.757812
), new Point3D(-0.335938,-0.593750,
zOff+0.687500
), new Point3D(-0.484375,-0.554688,
zOff+0.554688
));
object[490] = new Triangle(new Point3D(0.492188,-0.687500,
zOff+0.601562
), new Point3D(0.710938,-0.625000,
zOff+0.484375
), new Point3D(0.679688,-0.492188,
zOff+0.453125
));
object[491] = new Triangle(new Point3D(0.679688,-0.492188,
zOff+0.453125
), new Point3D(0.484375,-0.554688,
zOff+0.554688
), new Point3D(0.492188,-0.687500,
zOff+0.601562
));
object[492] = new Triangle(new Point3D(-0.679688,-0.492188,
zOff+0.453125
), new Point3D(-0.710938,-0.625000,
zOff+0.484375
), new Point3D(-0.492188,-0.687500,
zOff+0.601562
));
object[493] = new Triangle(new Point3D(-0.492188,-0.687500,
zOff+0.601562
), new Point3D(-0.484375,-0.554688,
zOff+0.554688
), new Point3D(-0.679688,-0.492188,
zOff+0.453125
));
object[494] = new Triangle(new Point3D(0.710938,-0.625000,
zOff+0.484375
), new Point3D(0.859375,-0.593750,
zOff+0.429688
), new Point3D(0.796875,-0.460938,
zOff+0.406250
));
object[495] = new Triangle(new Point3D(0.796875,-0.460938,
zOff+0.406250
), new Point3D(0.679688,-0.492188,
zOff+0.453125
), new Point3D(0.710938,-0.625000,
zOff+0.484375
));
object[496] = new Triangle(new Point3D(-0.796875,-0.460938,
zOff+0.406250
), new Point3D(-0.859375,-0.593750,
zOff+0.429688
), new Point3D(-0.710938,-0.625000,
zOff+0.484375
));
object[497] = new Triangle(new Point3D(-0.710938,-0.625000,
zOff+0.484375
), new Point3D(-0.679688,-0.492188,
zOff+0.453125
), new Point3D(-0.796875,-0.460938,
zOff+0.406250
));
object[498] = new Triangle(new Point3D(0.859375,-0.593750,
zOff+0.429688
), new Point3D(0.828125,-0.445312,
zOff+0.148438
), new Point3D(0.773438,-0.375000,
zOff+0.164062
));
object[499] = new Triangle(new Point3D(0.773438,-0.375000,
zOff+0.164062
), new Point3D(0.796875,-0.460938,
zOff+0.406250
), new Point3D(0.859375,-0.593750,
zOff+0.429688
));
object[500] = new Triangle(new Point3D(-0.773438,-0.375000,
zOff+0.164062
), new Point3D(-0.828125,-0.445312,
zOff+0.148438
), new Point3D(-0.859375,-0.593750,
zOff+0.429688
));
object[501] = new Triangle(new Point3D(-0.859375,-0.593750,
zOff+0.429688
), new Point3D(-0.796875,-0.460938,
zOff+0.406250
), new Point3D(-0.773438,-0.375000,
zOff+0.164062
));
object[502] = new Triangle(new Point3D(0.828125,-0.445312,
zOff+0.148438
), new Point3D(0.632812,-0.539062,
zOff-0.039062
), new Point3D(0.601562,-0.414062,
zOff+0.000000
));
object[503] = new Triangle(new Point3D(0.601562,-0.414062,
zOff+0.000000
), new Point3D(0.773438,-0.375000,
zOff+0.164062
), new Point3D(0.828125,-0.445312,
zOff+0.148438
));
object[504] = new Triangle(new Point3D(-0.601562,-0.414062,
zOff+0.000000
), new Point3D(-0.632812,-0.539062,
zOff-0.039062
), new Point3D(-0.828125,-0.445312,
zOff+0.148438
));
object[505] = new Triangle(new Point3D(-0.828125,-0.445312,
zOff+0.148438
), new Point3D(-0.773438,-0.375000,
zOff+0.164062
), new Point3D(-0.601562,-0.414062,
zOff+0.000000
));
object[506] = new Triangle(new Point3D(0.632812,-0.539062,
zOff-0.039062
), new Point3D(0.437500,-0.531250,
zOff-0.140625
), new Point3D(0.437500,-0.468750,
zOff-0.093750
));
object[507] = new Triangle(new Point3D(0.437500,-0.468750,
zOff-0.093750
), new Point3D(0.601562,-0.414062,
zOff+0.000000
), new Point3D(0.632812,-0.539062,
zOff-0.039062
));
object[508] = new Triangle(new Point3D(-0.437500,-0.468750,
zOff-0.093750
), new Point3D(-0.437500,-0.531250,
zOff-0.140625
), new Point3D(-0.632812,-0.539062,
zOff-0.039062
));
object[509] = new Triangle(new Point3D(-0.632812,-0.539062,
zOff-0.039062
), new Point3D(-0.601562,-0.414062,
zOff+0.000000
), new Point3D(-0.437500,-0.468750,
zOff-0.093750
));
object[510] = new Triangle(new Point3D(0.000000,-0.320312,
zOff-0.570312
), new Point3D(0.000000,-0.281250,
zOff-0.484375
), new Point3D(0.179688,-0.257812,
zOff-0.414062
));
object[511] = new Triangle(new Point3D(0.179688,-0.257812,
zOff-0.414062
), new Point3D(0.125000,-0.359375,
zOff-0.539062
), new Point3D(0.000000,-0.320312,
zOff-0.570312
));
object[512] = new Triangle(new Point3D(-0.179688,-0.257812,
zOff-0.414062
), new Point3D(0.000000,-0.281250,
zOff-0.484375
), new Point3D(0.000000,-0.320312,
zOff-0.570312
));
object[513] = new Triangle(new Point3D(0.000000,-0.320312,
zOff-0.570312
), new Point3D(-0.125000,-0.359375,
zOff-0.539062
), new Point3D(-0.179688,-0.257812,
zOff-0.414062
));
object[514] = new Triangle(new Point3D(0.000000,-0.343750,
zOff-0.804688
), new Point3D(0.000000,-0.320312,
zOff-0.570312
), new Point3D(0.125000,-0.359375,
zOff-0.539062
));
object[515] = new Triangle(new Point3D(0.125000,-0.359375,
zOff-0.539062
), new Point3D(0.140625,-0.367188,
zOff-0.757812
), new Point3D(0.000000,-0.343750,
zOff-0.804688
));
object[516] = new Triangle(new Point3D(-0.125000,-0.359375,
zOff-0.539062
), new Point3D(0.000000,-0.320312,
zOff-0.570312
), new Point3D(0.000000,-0.343750,
zOff-0.804688
));
object[517] = new Triangle(new Point3D(0.000000,-0.343750,
zOff-0.804688
), new Point3D(-0.140625,-0.367188,
zOff-0.757812
), new Point3D(-0.125000,-0.359375,
zOff-0.539062
));
object[518] = new Triangle(new Point3D(0.000000,-0.460938,
zOff-0.976562
), new Point3D(0.000000,-0.343750,
zOff-0.804688
), new Point3D(0.140625,-0.367188,
zOff-0.757812
));
object[519] = new Triangle(new Point3D(0.140625,-0.367188,
zOff-0.757812
), new Point3D(0.164062,-0.437500,
zOff-0.945312
), new Point3D(0.000000,-0.460938,
zOff-0.976562
));
object[520] = new Triangle(new Point3D(-0.140625,-0.367188,
zOff-0.757812
), new Point3D(0.000000,-0.343750,
zOff-0.804688
), new Point3D(0.000000,-0.460938,
zOff-0.976562
));
object[521] = new Triangle(new Point3D(0.000000,-0.460938,
zOff-0.976562
), new Point3D(-0.164062,-0.437500,
zOff-0.945312
), new Point3D(-0.140625,-0.367188,
zOff-0.757812
));
object[522] = new Triangle(new Point3D(0.179688,-0.554688,
zOff-0.968750
), new Point3D(0.000000,-0.578125,
zOff-0.984375
), new Point3D(0.000000,-0.460938,
zOff-0.976562
));
object[523] = new Triangle(new Point3D(0.000000,-0.460938,
zOff-0.976562
), new Point3D(0.164062,-0.437500,
zOff-0.945312
), new Point3D(0.179688,-0.554688,
zOff-0.968750
));
object[524] = new Triangle(new Point3D(0.000000,-0.460938,
zOff-0.976562
), new Point3D(0.000000,-0.578125,
zOff-0.984375
), new Point3D(-0.179688,-0.554688,
zOff-0.968750
));
object[525] = new Triangle(new Point3D(-0.179688,-0.554688,
zOff-0.968750
), new Point3D(-0.164062,-0.437500,
zOff-0.945312
), new Point3D(0.000000,-0.460938,
zOff-0.976562
));
object[526] = new Triangle(new Point3D(0.328125,-0.523438,
zOff-0.945312
), new Point3D(0.179688,-0.554688,
zOff-0.968750
), new Point3D(0.164062,-0.437500,
zOff-0.945312
));
object[527] = new Triangle(new Point3D(0.164062,-0.437500,
zOff-0.945312
), new Point3D(0.328125,-0.398438,
zOff-0.914062
), new Point3D(0.328125,-0.523438,
zOff-0.945312
));
object[528] = new Triangle(new Point3D(-0.164062,-0.437500,
zOff-0.945312
), new Point3D(-0.179688,-0.554688,
zOff-0.968750
), new Point3D(-0.328125,-0.523438,
zOff-0.945312
));
object[529] = new Triangle(new Point3D(-0.328125,-0.523438,
zOff-0.945312
), new Point3D(-0.328125,-0.398438,
zOff-0.914062
), new Point3D(-0.164062,-0.437500,
zOff-0.945312
));
object[530] = new Triangle(new Point3D(0.367188,-0.531250,
zOff-0.890625
), new Point3D(0.328125,-0.523438,
zOff-0.945312
), new Point3D(0.328125,-0.398438,
zOff-0.914062
));
object[531] = new Triangle(new Point3D(0.328125,-0.398438,
zOff-0.914062
), new Point3D(0.289062,-0.382812,
zOff-0.710938
), new Point3D(0.367188,-0.531250,
zOff-0.890625
));
object[532] = new Triangle(new Point3D(-0.328125,-0.398438,
zOff-0.914062
), new Point3D(-0.328125,-0.523438,
zOff-0.945312
), new Point3D(-0.367188,-0.531250,
zOff-0.890625
));
object[533] = new Triangle(new Point3D(-0.367188,-0.531250,
zOff-0.890625
), new Point3D(-0.289062,-0.382812,
zOff-0.710938
), new Point3D(-0.328125,-0.398438,
zOff-0.914062
));
object[534] = new Triangle(new Point3D(0.351562,-0.570312,
zOff-0.695312
), new Point3D(0.367188,-0.531250,
zOff-0.890625
), new Point3D(0.289062,-0.382812,
zOff-0.710938
));
object[535] = new Triangle(new Point3D(0.289062,-0.382812,
zOff-0.710938
), new Point3D(0.250000,-0.390625,
zOff-0.500000
), new Point3D(0.351562,-0.570312,
zOff-0.695312
));
object[536] = new Triangle(new Point3D(-0.289062,-0.382812,
zOff-0.710938
), new Point3D(-0.367188,-0.531250,
zOff-0.890625
), new Point3D(-0.351562,-0.570312,
zOff-0.695312
));
object[537] = new Triangle(new Point3D(-0.351562,-0.570312,
zOff-0.695312
), new Point3D(-0.250000,-0.390625,
zOff-0.500000
), new Point3D(-0.289062,-0.382812,
zOff-0.710938
));
object[538] = new Triangle(new Point3D(0.289062,-0.382812,
zOff-0.710938
), new Point3D(0.140625,-0.367188,
zOff-0.757812
), new Point3D(0.125000,-0.359375,
zOff-0.539062
));
object[539] = new Triangle(new Point3D(0.125000,-0.359375,
zOff-0.539062
), new Point3D(0.250000,-0.390625,
zOff-0.500000
), new Point3D(0.289062,-0.382812,
zOff-0.710938
));
object[540] = new Triangle(new Point3D(-0.125000,-0.359375,
zOff-0.539062
), new Point3D(-0.140625,-0.367188,
zOff-0.757812
), new Point3D(-0.289062,-0.382812,
zOff-0.710938
));
object[541] = new Triangle(new Point3D(-0.289062,-0.382812,
zOff-0.710938
), new Point3D(-0.250000,-0.390625,
zOff-0.500000
), new Point3D(-0.125000,-0.359375,
zOff-0.539062
));
object[542] = new Triangle(new Point3D(0.289062,-0.382812,
zOff-0.710938
), new Point3D(0.328125,-0.398438,
zOff-0.914062
), new Point3D(0.164062,-0.437500,
zOff-0.945312
));
object[543] = new Triangle(new Point3D(0.164062,-0.437500,
zOff-0.945312
), new Point3D(0.140625,-0.367188,
zOff-0.757812
), new Point3D(0.289062,-0.382812,
zOff-0.710938
));
object[544] = new Triangle(new Point3D(-0.164062,-0.437500,
zOff-0.945312
), new Point3D(-0.328125,-0.398438,
zOff-0.914062
), new Point3D(-0.289062,-0.382812,
zOff-0.710938
));
object[545] = new Triangle(new Point3D(-0.289062,-0.382812,
zOff-0.710938
), new Point3D(-0.140625,-0.367188,
zOff-0.757812
), new Point3D(-0.164062,-0.437500,
zOff-0.945312
));
object[546] = new Triangle(new Point3D(0.234375,-0.406250,
zOff-0.351562
), new Point3D(0.250000,-0.390625,
zOff-0.500000
), new Point3D(0.125000,-0.359375,
zOff-0.539062
));
object[547] = new Triangle(new Point3D(0.125000,-0.359375,
zOff-0.539062
), new Point3D(0.179688,-0.257812,
zOff-0.414062
), new Point3D(0.234375,-0.406250,
zOff-0.351562
));
object[548] = new Triangle(new Point3D(-0.125000,-0.359375,
zOff-0.539062
), new Point3D(-0.250000,-0.390625,
zOff-0.500000
), new Point3D(-0.234375,-0.406250,
zOff-0.351562
));
object[549] = new Triangle(new Point3D(-0.234375,-0.406250,
zOff-0.351562
), new Point3D(-0.179688,-0.257812,
zOff-0.414062
), new Point3D(-0.125000,-0.359375,
zOff-0.539062
));
object[550] = new Triangle(new Point3D(0.312500,-0.570312,
zOff-0.437500
), new Point3D(0.351562,-0.570312,
zOff-0.695312
), new Point3D(0.250000,-0.390625,
zOff-0.500000
));
object[551] = new Triangle(new Point3D(0.250000,-0.390625,
zOff-0.500000
), new Point3D(0.234375,-0.406250,
zOff-0.351562
), new Point3D(0.312500,-0.570312,
zOff-0.437500
));
object[552] = new Triangle(new Point3D(-0.250000,-0.390625,
zOff-0.500000
), new Point3D(-0.351562,-0.570312,
zOff-0.695312
), new Point3D(-0.312500,-0.570312,
zOff-0.437500
));
object[553] = new Triangle(new Point3D(-0.312500,-0.570312,
zOff-0.437500
), new Point3D(-0.234375,-0.406250,
zOff-0.351562
), new Point3D(-0.250000,-0.390625,
zOff-0.500000
));
object[554] = new Triangle(new Point3D(0.257812,-0.554688,
zOff-0.312500
), new Point3D(0.218750,-0.429688,
zOff-0.281250
), new Point3D(0.210938,-0.468750,
zOff-0.226562
));
object[555] = new Triangle(new Point3D(0.210938,-0.468750,
zOff-0.226562
), new Point3D(0.234375,-0.554688,
zOff-0.250000
), new Point3D(0.257812,-0.554688,
zOff-0.312500
));
object[556] = new Triangle(new Point3D(-0.210938,-0.468750,
zOff-0.226562
), new Point3D(-0.218750,-0.429688,
zOff-0.281250
), new Point3D(-0.257812,-0.554688,
zOff-0.312500
));
object[557] = new Triangle(new Point3D(-0.257812,-0.554688,
zOff-0.312500
), new Point3D(-0.234375,-0.554688,
zOff-0.250000
), new Point3D(-0.210938,-0.468750,
zOff-0.226562
));
object[558] = new Triangle(new Point3D(0.312500,-0.570312,
zOff-0.437500
), new Point3D(0.234375,-0.406250,
zOff-0.351562
), new Point3D(0.218750,-0.429688,
zOff-0.281250
));
object[559] = new Triangle(new Point3D(0.218750,-0.429688,
zOff-0.281250
), new Point3D(0.257812,-0.554688,
zOff-0.312500
), new Point3D(0.312500,-0.570312,
zOff-0.437500
));
object[560] = new Triangle(new Point3D(-0.218750,-0.429688,
zOff-0.281250
), new Point3D(-0.234375,-0.406250,
zOff-0.351562
), new Point3D(-0.312500,-0.570312,
zOff-0.437500
));
object[561] = new Triangle(new Point3D(-0.312500,-0.570312,
zOff-0.437500
), new Point3D(-0.257812,-0.554688,
zOff-0.312500
), new Point3D(-0.218750,-0.429688,
zOff-0.281250
));
object[562] = new Triangle(new Point3D(0.203125,-0.562500,
zOff-0.187500
), new Point3D(0.234375,-0.554688,
zOff-0.250000
), new Point3D(0.210938,-0.468750,
zOff-0.226562
));
object[563] = new Triangle(new Point3D(0.210938,-0.468750,
zOff-0.226562
), new Point3D(0.203125,-0.500000,
zOff-0.171875
), new Point3D(0.203125,-0.562500,
zOff-0.187500
));
object[564] = new Triangle(new Point3D(-0.210938,-0.468750,
zOff-0.226562
), new Point3D(-0.234375,-0.554688,
zOff-0.250000
), new Point3D(-0.203125,-0.562500,
zOff-0.187500
));
object[565] = new Triangle(new Point3D(-0.203125,-0.562500,
zOff-0.187500
), new Point3D(-0.203125,-0.500000,
zOff-0.171875
), new Point3D(-0.210938,-0.468750,
zOff-0.226562
));
object[566] = new Triangle(new Point3D(0.203125,-0.562500,
zOff-0.187500
), new Point3D(0.203125,-0.500000,
zOff-0.171875
), new Point3D(0.437500,-0.468750,
zOff-0.093750
));
object[567] = new Triangle(new Point3D(0.437500,-0.468750,
zOff-0.093750
), new Point3D(0.437500,-0.531250,
zOff-0.140625
), new Point3D(0.203125,-0.562500,
zOff-0.187500
));
object[568] = new Triangle(new Point3D(-0.437500,-0.468750,
zOff-0.093750
), new Point3D(-0.203125,-0.500000,
zOff-0.171875
), new Point3D(-0.203125,-0.562500,
zOff-0.187500
));
object[569] = new Triangle(new Point3D(-0.203125,-0.562500,
zOff-0.187500
), new Point3D(-0.437500,-0.531250,
zOff-0.140625
), new Point3D(-0.437500,-0.468750,
zOff-0.093750
));
object[570] = new Triangle(new Point3D(0.000000,0.828125,
zOff+0.070312
), new Point3D(0.335938,0.664062,
zOff+0.054688
), new Point3D(0.343750,0.539062,
zOff-0.148438
));
object[571] = new Triangle(new Point3D(0.343750,0.539062,
zOff-0.148438
), new Point3D(0.000000,0.671875,
zOff-0.195312
), new Point3D(0.000000,0.828125,
zOff+0.070312
));
object[572] = new Triangle(new Point3D(-0.343750,0.539062,
zOff-0.148438
), new Point3D(-0.335938,0.664062,
zOff+0.054688
), new Point3D(0.000000,0.828125,
zOff+0.070312
));
object[573] = new Triangle(new Point3D(0.000000,0.828125,
zOff+0.070312
), new Point3D(0.000000,0.671875,
zOff-0.195312
), new Point3D(-0.343750,0.539062,
zOff-0.148438
));
object[574] = new Triangle(new Point3D(0.000000,0.671875,
zOff-0.195312
), new Point3D(0.343750,0.539062,
zOff-0.148438
), new Point3D(0.296875,0.265625,
zOff-0.312500
));
object[575] = new Triangle(new Point3D(0.296875,0.265625,
zOff-0.312500
), new Point3D(0.000000,0.351562,
zOff-0.382812
), new Point3D(0.000000,0.671875,
zOff-0.195312
));
object[576] = new Triangle(new Point3D(-0.296875,0.265625,
zOff-0.312500
), new Point3D(-0.343750,0.539062,
zOff-0.148438
), new Point3D(0.000000,0.671875,
zOff-0.195312
));
object[577] = new Triangle(new Point3D(0.000000,0.671875,
zOff-0.195312
), new Point3D(0.000000,0.351562,
zOff-0.382812
), new Point3D(-0.296875,0.265625,
zOff-0.312500
));
object[578] = new Triangle(new Point3D(0.000000,0.351562,
zOff-0.382812
), new Point3D(0.296875,0.265625,
zOff-0.312500
), new Point3D(0.210938,-0.164062,
zOff-0.390625
));
object[579] = new Triangle(new Point3D(0.210938,-0.164062,
zOff-0.390625
), new Point3D(0.000000,-0.187500,
zOff-0.460938
), new Point3D(0.000000,0.351562,
zOff-0.382812
));
object[580] = new Triangle(new Point3D(-0.210938,-0.164062,
zOff-0.390625
), new Point3D(-0.296875,0.265625,
zOff-0.312500
), new Point3D(0.000000,0.351562,
zOff-0.382812
));
object[581] = new Triangle(new Point3D(0.000000,0.351562,
zOff-0.382812
), new Point3D(0.000000,-0.187500,
zOff-0.460938
), new Point3D(-0.210938,-0.164062,
zOff-0.390625
));
object[582] = new Triangle(new Point3D(0.000000,-0.187500,
zOff-0.460938
), new Point3D(0.210938,-0.164062,
zOff-0.390625
), new Point3D(0.179688,-0.257812,
zOff-0.414062
));
object[583] = new Triangle(new Point3D(0.179688,-0.257812,
zOff-0.414062
), new Point3D(0.000000,-0.281250,
zOff-0.484375
), new Point3D(0.000000,-0.187500,
zOff-0.460938
));
object[584] = new Triangle(new Point3D(-0.179688,-0.257812,
zOff-0.414062
), new Point3D(-0.210938,-0.164062,
zOff-0.390625
), new Point3D(0.000000,-0.187500,
zOff-0.460938
));
object[585] = new Triangle(new Point3D(0.000000,-0.187500,
zOff-0.460938
), new Point3D(0.000000,-0.281250,
zOff-0.484375
), new Point3D(-0.179688,-0.257812,
zOff-0.414062
));
object[586] = new Triangle(new Point3D(0.234375,-0.406250,
zOff-0.351562
), new Point3D(0.179688,-0.257812,
zOff-0.414062
), new Point3D(0.210938,-0.164062,
zOff-0.390625
));
object[587] = new Triangle(new Point3D(0.210938,-0.164062,
zOff-0.390625
), new Point3D(0.218750,-0.429688,
zOff-0.281250
), new Point3D(0.234375,-0.406250,
zOff-0.351562
));
object[588] = new Triangle(new Point3D(-0.210938,-0.164062,
zOff-0.390625
), new Point3D(-0.179688,-0.257812,
zOff-0.414062
), new Point3D(-0.234375,-0.406250,
zOff-0.351562
));
object[589] = new Triangle(new Point3D(-0.234375,-0.406250,
zOff-0.351562
), new Point3D(-0.218750,-0.429688,
zOff-0.281250
), new Point3D(-0.210938,-0.164062,
zOff-0.390625
));
object[590] = new Triangle(new Point3D(0.773438,-0.375000,
zOff+0.164062
), new Point3D(0.601562,-0.414062,
zOff+0.000000
), new Point3D(0.734375,-0.070312,
zOff-0.046875
));
object[591] = new Triangle(new Point3D(0.734375,-0.070312,
zOff-0.046875
), new Point3D(0.851562,-0.054688,
zOff+0.234375
), new Point3D(0.773438,-0.375000,
zOff+0.164062
));
object[592] = new Triangle(new Point3D(-0.734375,-0.070312,
zOff-0.046875
), new Point3D(-0.601562,-0.414062,
zOff+0.000000
), new Point3D(-0.773438,-0.375000,
zOff+0.164062
));
object[593] = new Triangle(new Point3D(-0.773438,-0.375000,
zOff+0.164062
), new Point3D(-0.851562,-0.054688,
zOff+0.234375
), new Point3D(-0.734375,-0.070312,
zOff-0.046875
));
object[594] = new Triangle(new Point3D(0.000000,0.851562,
zOff+0.562500
), new Point3D(0.460938,0.703125,
zOff+0.437500
), new Point3D(0.335938,0.664062,
zOff+0.054688
));
object[595] = new Triangle(new Point3D(0.335938,0.664062,
zOff+0.054688
), new Point3D(0.000000,0.828125,
zOff+0.070312
), new Point3D(0.000000,0.851562,
zOff+0.562500
));
object[596] = new Triangle(new Point3D(-0.335938,0.664062,
zOff+0.054688
), new Point3D(-0.460938,0.703125,
zOff+0.437500
), new Point3D(0.000000,0.851562,
zOff+0.562500
));
object[597] = new Triangle(new Point3D(0.000000,0.851562,
zOff+0.562500
), new Point3D(0.000000,0.828125,
zOff+0.070312
), new Point3D(-0.335938,0.664062,
zOff+0.054688
));
object[598] = new Triangle(new Point3D(0.000000,-0.289062,
zOff+0.898438
), new Point3D(0.453125,-0.234375,
zOff+0.851562
), new Point3D(0.453125,0.070312,
zOff+0.929688
));
object[599] = new Triangle(new Point3D(0.453125,0.070312,
zOff+0.929688
), new Point3D(0.000000,0.078125,
zOff+0.984375
), new Point3D(0.000000,-0.289062,
zOff+0.898438
));
object[600] = new Triangle(new Point3D(-0.453125,0.070312,
zOff+0.929688
), new Point3D(-0.453125,-0.234375,
zOff+0.851562
), new Point3D(0.000000,-0.289062,
zOff+0.898438
));
object[601] = new Triangle(new Point3D(0.000000,-0.289062,
zOff+0.898438
), new Point3D(0.000000,0.078125,
zOff+0.984375
), new Point3D(-0.453125,0.070312,
zOff+0.929688
));
object[602] = new Triangle(new Point3D(0.000000,0.078125,
zOff+0.984375
), new Point3D(0.453125,0.070312,
zOff+0.929688
), new Point3D(0.453125,0.382812,
zOff+0.867188
));
object[603] = new Triangle(new Point3D(0.453125,0.382812,
zOff+0.867188
), new Point3D(0.000000,0.546875,
zOff+0.898438
), new Point3D(0.000000,0.078125,
zOff+0.984375
));
object[604] = new Triangle(new Point3D(-0.453125,0.382812,
zOff+0.867188
), new Point3D(-0.453125,0.070312,
zOff+0.929688
), new Point3D(0.000000,0.078125,
zOff+0.984375
));
object[605] = new Triangle(new Point3D(0.000000,0.078125,
zOff+0.984375
), new Point3D(0.000000,0.546875,
zOff+0.898438
), new Point3D(-0.453125,0.382812,
zOff+0.867188
));
object[606] = new Triangle(new Point3D(0.000000,0.546875,
zOff+0.898438
), new Point3D(0.453125,0.382812,
zOff+0.867188
), new Point3D(0.460938,0.703125,
zOff+0.437500
));
object[607] = new Triangle(new Point3D(0.460938,0.703125,
zOff+0.437500
), new Point3D(0.000000,0.851562,
zOff+0.562500
), new Point3D(0.000000,0.546875,
zOff+0.898438
));
object[608] = new Triangle(new Point3D(-0.460938,0.703125,
zOff+0.437500
), new Point3D(-0.453125,0.382812,
zOff+0.867188
), new Point3D(0.000000,0.546875,
zOff+0.898438
));
object[609] = new Triangle(new Point3D(0.000000,0.546875,
zOff+0.898438
), new Point3D(0.000000,0.851562,
zOff+0.562500
), new Point3D(-0.460938,0.703125,
zOff+0.437500
));
object[610] = new Triangle(new Point3D(0.679688,-0.492188,
zOff+0.453125
), new Point3D(0.796875,-0.460938,
zOff+0.406250
), new Point3D(0.726562,-0.335938,
zOff+0.406250
));
object[611] = new Triangle(new Point3D(0.726562,-0.335938,
zOff+0.406250
), new Point3D(0.632812,-0.281250,
zOff+0.453125
), new Point3D(0.679688,-0.492188,
zOff+0.453125
));
object[612] = new Triangle(new Point3D(-0.726562,-0.335938,
zOff+0.406250
), new Point3D(-0.796875,-0.460938,
zOff+0.406250
), new Point3D(-0.679688,-0.492188,
zOff+0.453125
));
object[613] = new Triangle(new Point3D(-0.679688,-0.492188,
zOff+0.453125
), new Point3D(-0.632812,-0.281250,
zOff+0.453125
), new Point3D(-0.726562,-0.335938,
zOff+0.406250
));
object[614] = new Triangle(new Point3D(0.632812,-0.281250,
zOff+0.453125
), new Point3D(0.726562,-0.335938,
zOff+0.406250
), new Point3D(0.796875,-0.125000,
zOff+0.562500
));
object[615] = new Triangle(new Point3D(0.796875,-0.125000,
zOff+0.562500
), new Point3D(0.640625,-0.054688,
zOff+0.703125
), new Point3D(0.632812,-0.281250,
zOff+0.453125
));
object[616] = new Triangle(new Point3D(-0.796875,-0.125000,
zOff+0.562500
), new Point3D(-0.726562,-0.335938,
zOff+0.406250
), new Point3D(-0.632812,-0.281250,
zOff+0.453125
));
object[617] = new Triangle(new Point3D(-0.632812,-0.281250,
zOff+0.453125
), new Point3D(-0.640625,-0.054688,
zOff+0.703125
), new Point3D(-0.796875,-0.125000,
zOff+0.562500
));
object[618] = new Triangle(new Point3D(0.640625,-0.054688,
zOff+0.703125
), new Point3D(0.796875,-0.125000,
zOff+0.562500
), new Point3D(0.796875,0.117188,
zOff+0.617188
));
object[619] = new Triangle(new Point3D(0.796875,0.117188,
zOff+0.617188
), new Point3D(0.640625,0.195312,
zOff+0.750000
), new Point3D(0.640625,-0.054688,
zOff+0.703125
));
object[620] = new Triangle(new Point3D(-0.796875,0.117188,
zOff+0.617188
), new Point3D(-0.796875,-0.125000,
zOff+0.562500
), new Point3D(-0.640625,-0.054688,
zOff+0.703125
));
object[621] = new Triangle(new Point3D(-0.640625,-0.054688,
zOff+0.703125
), new Point3D(-0.640625,0.195312,
zOff+0.750000
), new Point3D(-0.796875,0.117188,
zOff+0.617188
));
object[622] = new Triangle(new Point3D(0.640625,0.195312,
zOff+0.750000
), new Point3D(0.796875,0.117188,
zOff+0.617188
), new Point3D(0.796875,0.359375,
zOff+0.539062
));
object[623] = new Triangle(new Point3D(0.796875,0.359375,
zOff+0.539062
), new Point3D(0.640625,0.445312,
zOff+0.679688
), new Point3D(0.640625,0.195312,
zOff+0.750000
));
object[624] = new Triangle(new Point3D(-0.796875,0.359375,
zOff+0.539062
), new Point3D(-0.796875,0.117188,
zOff+0.617188
), new Point3D(-0.640625,0.195312,
zOff+0.750000
));
object[625] = new Triangle(new Point3D(-0.640625,0.195312,
zOff+0.750000
), new Point3D(-0.640625,0.445312,
zOff+0.679688
), new Point3D(-0.796875,0.359375,
zOff+0.539062
));
object[626] = new Triangle(new Point3D(0.773438,0.437500,
zOff+0.265625
), new Point3D(0.617188,0.585938,
zOff+0.328125
), new Point3D(0.640625,0.445312,
zOff+0.679688
));
object[627] = new Triangle(new Point3D(0.640625,0.445312,
zOff+0.679688
), new Point3D(0.796875,0.359375,
zOff+0.539062
), new Point3D(0.773438,0.437500,
zOff+0.265625
));
object[628] = new Triangle(new Point3D(-0.640625,0.445312,
zOff+0.679688
), new Point3D(-0.617188,0.585938,
zOff+0.328125
), new Point3D(-0.773438,0.437500,
zOff+0.265625
));
object[629] = new Triangle(new Point3D(-0.773438,0.437500,
zOff+0.265625
), new Point3D(-0.796875,0.359375,
zOff+0.539062
), new Point3D(-0.640625,0.445312,
zOff+0.679688
));
object[630] = new Triangle(new Point3D(0.460938,0.703125,
zOff+0.437500
), new Point3D(0.453125,0.382812,
zOff+0.867188
), new Point3D(0.640625,0.445312,
zOff+0.679688
));
object[631] = new Triangle(new Point3D(0.640625,0.445312,
zOff+0.679688
), new Point3D(0.617188,0.585938,
zOff+0.328125
), new Point3D(0.460938,0.703125,
zOff+0.437500
));
object[632] = new Triangle(new Point3D(-0.640625,0.445312,
zOff+0.679688
), new Point3D(-0.453125,0.382812,
zOff+0.867188
), new Point3D(-0.460938,0.703125,
zOff+0.437500
));
object[633] = new Triangle(new Point3D(-0.460938,0.703125,
zOff+0.437500
), new Point3D(-0.617188,0.585938,
zOff+0.328125
), new Point3D(-0.640625,0.445312,
zOff+0.679688
));
object[634] = new Triangle(new Point3D(0.453125,0.382812,
zOff+0.867188
), new Point3D(0.453125,0.070312,
zOff+0.929688
), new Point3D(0.640625,0.195312,
zOff+0.750000
));
object[635] = new Triangle(new Point3D(0.640625,0.195312,
zOff+0.750000
), new Point3D(0.640625,0.445312,
zOff+0.679688
), new Point3D(0.453125,0.382812,
zOff+0.867188
));
object[636] = new Triangle(new Point3D(-0.640625,0.195312,
zOff+0.750000
), new Point3D(-0.453125,0.070312,
zOff+0.929688
), new Point3D(-0.453125,0.382812,
zOff+0.867188
));
object[637] = new Triangle(new Point3D(-0.453125,0.382812,
zOff+0.867188
), new Point3D(-0.640625,0.445312,
zOff+0.679688
), new Point3D(-0.640625,0.195312,
zOff+0.750000
));
object[638] = new Triangle(new Point3D(0.453125,0.070312,
zOff+0.929688
), new Point3D(0.453125,-0.234375,
zOff+0.851562
), new Point3D(0.640625,-0.054688,
zOff+0.703125
));
object[639] = new Triangle(new Point3D(0.640625,-0.054688,
zOff+0.703125
), new Point3D(0.640625,0.195312,
zOff+0.750000
), new Point3D(0.453125,0.070312,
zOff+0.929688
));
object[640] = new Triangle(new Point3D(-0.640625,-0.054688,
zOff+0.703125
), new Point3D(-0.453125,-0.234375,
zOff+0.851562
), new Point3D(-0.453125,0.070312,
zOff+0.929688
));
object[641] = new Triangle(new Point3D(-0.453125,0.070312,
zOff+0.929688
), new Point3D(-0.640625,0.195312,
zOff+0.750000
), new Point3D(-0.640625,-0.054688,
zOff+0.703125
));
object[642] = new Triangle(new Point3D(0.453125,-0.234375,
zOff+0.851562
), new Point3D(0.460938,-0.429688,
zOff+0.523438
), new Point3D(0.632812,-0.281250,
zOff+0.453125
));
object[643] = new Triangle(new Point3D(0.632812,-0.281250,
zOff+0.453125
), new Point3D(0.640625,-0.054688,
zOff+0.703125
), new Point3D(0.453125,-0.234375,
zOff+0.851562
));
object[644] = new Triangle(new Point3D(-0.632812,-0.281250,
zOff+0.453125
), new Point3D(-0.460938,-0.429688,
zOff+0.523438
), new Point3D(-0.453125,-0.234375,
zOff+0.851562
));
object[645] = new Triangle(new Point3D(-0.453125,-0.234375,
zOff+0.851562
), new Point3D(-0.640625,-0.054688,
zOff+0.703125
), new Point3D(-0.632812,-0.281250,
zOff+0.453125
));
object[646] = new Triangle(new Point3D(0.484375,-0.554688,
zOff+0.554688
), new Point3D(0.679688,-0.492188,
zOff+0.453125
), new Point3D(0.632812,-0.281250,
zOff+0.453125
));
object[647] = new Triangle(new Point3D(0.632812,-0.281250,
zOff+0.453125
), new Point3D(0.460938,-0.429688,
zOff+0.523438
), new Point3D(0.484375,-0.554688,
zOff+0.554688
));
object[648] = new Triangle(new Point3D(-0.632812,-0.281250,
zOff+0.453125
), new Point3D(-0.679688,-0.492188,
zOff+0.453125
), new Point3D(-0.484375,-0.554688,
zOff+0.554688
));
object[649] = new Triangle(new Point3D(-0.484375,-0.554688,
zOff+0.554688
), new Point3D(-0.460938,-0.429688,
zOff+0.523438
), new Point3D(-0.632812,-0.281250,
zOff+0.453125
));
object[650] = new Triangle(new Point3D(0.000000,-0.570312,
zOff+0.570312
), new Point3D(0.460938,-0.429688,
zOff+0.523438
), new Point3D(0.453125,-0.234375,
zOff+0.851562
));
object[651] = new Triangle(new Point3D(0.453125,-0.234375,
zOff+0.851562
), new Point3D(0.000000,-0.289062,
zOff+0.898438
), new Point3D(0.000000,-0.570312,
zOff+0.570312
));
object[652] = new Triangle(new Point3D(-0.453125,-0.234375,
zOff+0.851562
), new Point3D(-0.460938,-0.429688,
zOff+0.523438
), new Point3D(0.000000,-0.570312,
zOff+0.570312
));
object[653] = new Triangle(new Point3D(0.000000,-0.570312,
zOff+0.570312
), new Point3D(0.000000,-0.289062,
zOff+0.898438
), new Point3D(-0.453125,-0.234375,
zOff+0.851562
));
object[654] = new Triangle(new Point3D(0.109375,-0.609375,
zOff+0.460938
), new Point3D(0.195312,-0.617188,
zOff+0.664062
), new Point3D(0.335938,-0.593750,
zOff+0.687500
));
object[655] = new Triangle(new Point3D(0.335938,-0.593750,
zOff+0.687500
), new Point3D(0.484375,-0.554688,
zOff+0.554688
), new Point3D(0.109375,-0.609375,
zOff+0.460938
));
object[656] = new Triangle(new Point3D(-0.335938,-0.593750,
zOff+0.687500
), new Point3D(-0.195312,-0.617188,
zOff+0.664062
), new Point3D(-0.109375,-0.609375,
zOff+0.460938
));
object[657] = new Triangle(new Point3D(-0.109375,-0.609375,
zOff+0.460938
), new Point3D(-0.484375,-0.554688,
zOff+0.554688
), new Point3D(-0.335938,-0.593750,
zOff+0.687500
));
object[658] = new Triangle(new Point3D(0.109375,-0.609375,
zOff+0.460938
), new Point3D(0.484375,-0.554688,
zOff+0.554688
), new Point3D(0.460938,-0.429688,
zOff+0.523438
));
object[659] = new Triangle(new Point3D(0.460938,-0.429688,
zOff+0.523438
), new Point3D(0.000000,-0.570312,
zOff+0.570312
), new Point3D(0.109375,-0.609375,
zOff+0.460938
));
object[660] = new Triangle(new Point3D(-0.460938,-0.429688,
zOff+0.523438
), new Point3D(-0.484375,-0.554688,
zOff+0.554688
), new Point3D(-0.109375,-0.609375,
zOff+0.460938
));
object[661] = new Triangle(new Point3D(-0.109375,-0.609375,
zOff+0.460938
), new Point3D(0.000000,-0.570312,
zOff+0.570312
), new Point3D(-0.460938,-0.429688,
zOff+0.523438
));
object[662] = new Triangle(new Point3D(0.000000,-0.601562,
zOff+0.406250
), new Point3D(0.109375,-0.609375,
zOff+0.460938
), new Point3D(0.000000,-0.570312,
zOff+0.570312
));
object[663] = new Triangle(new Point3D(0.000000,-0.570312,
zOff+0.570312
), new Point3D(-0.109375,-0.609375,
zOff+0.460938
), new Point3D(0.000000,-0.601562,
zOff+0.406250
));
object[664] = new Triangle(new Point3D(0.796875,-0.460938,
zOff+0.406250
), new Point3D(0.773438,-0.375000,
zOff+0.164062
), new Point3D(0.851562,-0.054688,
zOff+0.234375
));
object[665] = new Triangle(new Point3D(0.851562,-0.054688,
zOff+0.234375
), new Point3D(0.726562,-0.335938,
zOff+0.406250
), new Point3D(0.796875,-0.460938,
zOff+0.406250
));
object[666] = new Triangle(new Point3D(-0.851562,-0.054688,
zOff+0.234375
), new Point3D(-0.773438,-0.375000,
zOff+0.164062
), new Point3D(-0.796875,-0.460938,
zOff+0.406250
));
object[667] = new Triangle(new Point3D(-0.796875,-0.460938,
zOff+0.406250
), new Point3D(-0.726562,-0.335938,
zOff+0.406250
), new Point3D(-0.851562,-0.054688,
zOff+0.234375
));
object[668] = new Triangle(new Point3D(0.851562,-0.054688,
zOff+0.234375
), new Point3D(0.859375,0.046875,
zOff+0.320312
), new Point3D(0.796875,-0.125000,
zOff+0.562500
));
object[669] = new Triangle(new Point3D(0.796875,-0.125000,
zOff+0.562500
), new Point3D(0.726562,-0.335938,
zOff+0.406250
), new Point3D(0.851562,-0.054688,
zOff+0.234375
));
object[670] = new Triangle(new Point3D(-0.796875,-0.125000,
zOff+0.562500
), new Point3D(-0.859375,0.046875,
zOff+0.320312
), new Point3D(-0.851562,-0.054688,
zOff+0.234375
));
object[671] = new Triangle(new Point3D(-0.851562,-0.054688,
zOff+0.234375
), new Point3D(-0.726562,-0.335938,
zOff+0.406250
), new Point3D(-0.796875,-0.125000,
zOff+0.562500
));
object[672] = new Triangle(new Point3D(0.859375,0.046875,
zOff+0.320312
), new Point3D(0.820312,0.203125,
zOff+0.328125
), new Point3D(0.796875,0.117188,
zOff+0.617188
));
object[673] = new Triangle(new Point3D(0.796875,0.117188,
zOff+0.617188
), new Point3D(0.796875,-0.125000,
zOff+0.562500
), new Point3D(0.859375,0.046875,
zOff+0.320312
));
object[674] = new Triangle(new Point3D(-0.796875,0.117188,
zOff+0.617188
), new Point3D(-0.820312,0.203125,
zOff+0.328125
), new Point3D(-0.859375,0.046875,
zOff+0.320312
));
object[675] = new Triangle(new Point3D(-0.859375,0.046875,
zOff+0.320312
), new Point3D(-0.796875,-0.125000,
zOff+0.562500
), new Point3D(-0.796875,0.117188,
zOff+0.617188
));
object[676] = new Triangle(new Point3D(0.773438,0.437500,
zOff+0.265625
), new Point3D(0.796875,0.359375,
zOff+0.539062
), new Point3D(0.796875,0.117188,
zOff+0.617188
));
object[677] = new Triangle(new Point3D(0.796875,0.117188,
zOff+0.617188
), new Point3D(0.820312,0.203125,
zOff+0.328125
), new Point3D(0.773438,0.437500,
zOff+0.265625
));
object[678] = new Triangle(new Point3D(-0.796875,0.117188,
zOff+0.617188
), new Point3D(-0.796875,0.359375,
zOff+0.539062
), new Point3D(-0.773438,0.437500,
zOff+0.265625
));
object[679] = new Triangle(new Point3D(-0.773438,0.437500,
zOff+0.265625
), new Point3D(-0.820312,0.203125,
zOff+0.328125
), new Point3D(-0.796875,0.117188,
zOff+0.617188
));
object[680] = new Triangle(new Point3D(0.210938,-0.164062,
zOff-0.390625
), new Point3D(0.296875,0.265625,
zOff-0.312500
), new Point3D(0.429688,0.210938,
zOff-0.195312
));
object[681] = new Triangle(new Point3D(0.429688,0.210938,
zOff-0.195312
), new Point3D(0.406250,-0.148438,
zOff-0.171875
), new Point3D(0.210938,-0.164062,
zOff-0.390625
));
object[682] = new Triangle(new Point3D(-0.429688,0.210938,
zOff-0.195312
), new Point3D(-0.296875,0.265625,
zOff-0.312500
), new Point3D(-0.210938,-0.164062,
zOff-0.390625
));
object[683] = new Triangle(new Point3D(-0.210938,-0.164062,
zOff-0.390625
), new Point3D(-0.406250,-0.148438,
zOff-0.171875
), new Point3D(-0.429688,0.210938,
zOff-0.195312
));
object[684] = new Triangle(new Point3D(0.734375,-0.070312,
zOff-0.046875
), new Point3D(0.406250,-0.148438,
zOff-0.171875
), new Point3D(0.429688,0.210938,
zOff-0.195312
));
object[685] = new Triangle(new Point3D(0.429688,0.210938,
zOff-0.195312
), new Point3D(0.593750,0.164062,
zOff-0.125000
), new Point3D(0.734375,-0.070312,
zOff-0.046875
));
object[686] = new Triangle(new Point3D(-0.429688,0.210938,
zOff-0.195312
), new Point3D(-0.406250,-0.148438,
zOff-0.171875
), new Point3D(-0.734375,-0.070312,
zOff-0.046875
));
object[687] = new Triangle(new Point3D(-0.734375,-0.070312,
zOff-0.046875
), new Point3D(-0.593750,0.164062,
zOff-0.125000
), new Point3D(-0.429688,0.210938,
zOff-0.195312
));
object[688] = new Triangle(new Point3D(0.601562,-0.414062,
zOff+0.000000
), new Point3D(0.437500,-0.468750,
zOff-0.093750
), new Point3D(0.406250,-0.148438,
zOff-0.171875
));
object[689] = new Triangle(new Point3D(0.406250,-0.148438,
zOff-0.171875
), new Point3D(0.734375,-0.070312,
zOff-0.046875
), new Point3D(0.601562,-0.414062,
zOff+0.000000
));
object[690] = new Triangle(new Point3D(-0.406250,-0.148438,
zOff-0.171875
), new Point3D(-0.437500,-0.468750,
zOff-0.093750
), new Point3D(-0.601562,-0.414062,
zOff+0.000000
));
object[691] = new Triangle(new Point3D(-0.601562,-0.414062,
zOff+0.000000
), new Point3D(-0.734375,-0.070312,
zOff-0.046875
), new Point3D(-0.406250,-0.148438,
zOff-0.171875
));
object[692] = new Triangle(new Point3D(0.437500,-0.468750,
zOff-0.093750
), new Point3D(0.210938,-0.468750,
zOff-0.226562
), new Point3D(0.218750,-0.429688,
zOff-0.281250
));
object[693] = new Triangle(new Point3D(0.218750,-0.429688,
zOff-0.281250
), new Point3D(0.406250,-0.148438,
zOff-0.171875
), new Point3D(0.437500,-0.468750,
zOff-0.093750
));
object[694] = new Triangle(new Point3D(-0.218750,-0.429688,
zOff-0.281250
), new Point3D(-0.210938,-0.468750,
zOff-0.226562
), new Point3D(-0.437500,-0.468750,
zOff-0.093750
));
object[695] = new Triangle(new Point3D(-0.437500,-0.468750,
zOff-0.093750
), new Point3D(-0.406250,-0.148438,
zOff-0.171875
), new Point3D(-0.218750,-0.429688,
zOff-0.281250
));
object[696] = new Triangle(new Point3D(0.218750,-0.429688,
zOff-0.281250
), new Point3D(0.210938,-0.164062,
zOff-0.390625
), new Point3D(0.406250,-0.148438,
zOff-0.171875
));
object[697] = new Triangle(new Point3D(-0.406250,-0.148438,
zOff-0.171875
), new Point3D(-0.210938,-0.164062,
zOff-0.390625
), new Point3D(-0.218750,-0.429688,
zOff-0.281250
));
object[698] = new Triangle(new Point3D(0.437500,-0.468750,
zOff-0.093750
), new Point3D(0.203125,-0.500000,
zOff-0.171875
), new Point3D(0.210938,-0.468750,
zOff-0.226562
));
object[699] = new Triangle(new Point3D(-0.210938,-0.468750,
zOff-0.226562
), new Point3D(-0.203125,-0.500000,
zOff-0.171875
), new Point3D(-0.437500,-0.468750,
zOff-0.093750
));
object[700] = new Triangle(new Point3D(0.773438,0.437500,
zOff+0.265625
), new Point3D(0.640625,0.429688,
zOff-0.007812
), new Point3D(0.484375,0.546875,
zOff+0.023438
));
object[701] = new Triangle(new Point3D(0.484375,0.546875,
zOff+0.023438
), new Point3D(0.617188,0.585938,
zOff+0.328125
), new Point3D(0.773438,0.437500,
zOff+0.265625
));
object[702] = new Triangle(new Point3D(-0.484375,0.546875,
zOff+0.023438
), new Point3D(-0.640625,0.429688,
zOff-0.007812
), new Point3D(-0.773438,0.437500,
zOff+0.265625
));
object[703] = new Triangle(new Point3D(-0.773438,0.437500,
zOff+0.265625
), new Point3D(-0.617188,0.585938,
zOff+0.328125
), new Point3D(-0.484375,0.546875,
zOff+0.023438
));
object[704] = new Triangle(new Point3D(0.460938,0.703125,
zOff+0.437500
), new Point3D(0.617188,0.585938,
zOff+0.328125
), new Point3D(0.484375,0.546875,
zOff+0.023438
));
object[705] = new Triangle(new Point3D(0.484375,0.546875,
zOff+0.023438
), new Point3D(0.335938,0.664062,
zOff+0.054688
), new Point3D(0.460938,0.703125,
zOff+0.437500
));
object[706] = new Triangle(new Point3D(-0.484375,0.546875,
zOff+0.023438
), new Point3D(-0.617188,0.585938,
zOff+0.328125
), new Point3D(-0.460938,0.703125,
zOff+0.437500
));
object[707] = new Triangle(new Point3D(-0.460938,0.703125,
zOff+0.437500
), new Point3D(-0.335938,0.664062,
zOff+0.054688
), new Point3D(-0.484375,0.546875,
zOff+0.023438
));
object[708] = new Triangle(new Point3D(0.593750,0.164062,
zOff-0.125000
), new Point3D(0.429688,0.210938,
zOff-0.195312
), new Point3D(0.484375,0.546875,
zOff+0.023438
));
object[709] = new Triangle(new Point3D(0.484375,0.546875,
zOff+0.023438
), new Point3D(0.640625,0.429688,
zOff-0.007812
), new Point3D(0.593750,0.164062,
zOff-0.125000
));
object[710] = new Triangle(new Point3D(-0.484375,0.546875,
zOff+0.023438
), new Point3D(-0.429688,0.210938,
zOff-0.195312
), new Point3D(-0.593750,0.164062,
zOff-0.125000
));
object[711] = new Triangle(new Point3D(-0.593750,0.164062,
zOff-0.125000
), new Point3D(-0.640625,0.429688,
zOff-0.007812
), new Point3D(-0.484375,0.546875,
zOff+0.023438
));
object[712] = new Triangle(new Point3D(0.296875,0.265625,
zOff-0.312500
), new Point3D(0.343750,0.539062,
zOff-0.148438
), new Point3D(0.484375,0.546875,
zOff+0.023438
));
object[713] = new Triangle(new Point3D(0.484375,0.546875,
zOff+0.023438
), new Point3D(0.429688,0.210938,
zOff-0.195312
), new Point3D(0.296875,0.265625,
zOff-0.312500
));
object[714] = new Triangle(new Point3D(-0.484375,0.546875,
zOff+0.023438
), new Point3D(-0.343750,0.539062,
zOff-0.148438
), new Point3D(-0.296875,0.265625,
zOff-0.312500
));
object[715] = new Triangle(new Point3D(-0.296875,0.265625,
zOff-0.312500
), new Point3D(-0.429688,0.210938,
zOff-0.195312
), new Point3D(-0.484375,0.546875,
zOff+0.023438
));
object[716] = new Triangle(new Point3D(0.335938,0.664062,
zOff+0.054688
), new Point3D(0.484375,0.546875,
zOff+0.023438
), new Point3D(0.343750,0.539062,
zOff-0.148438
));
object[717] = new Triangle(new Point3D(-0.343750,0.539062,
zOff-0.148438
), new Point3D(-0.484375,0.546875,
zOff+0.023438
), new Point3D(-0.335938,0.664062,
zOff+0.054688
));
object[718] = new Triangle(new Point3D(1.023438,0.312500,
zOff+0.476562
), new Point3D(0.890625,0.234375,
zOff+0.406250
), new Point3D(0.921875,0.218750,
zOff+0.359375
));
object[719] = new Triangle(new Point3D(0.921875,0.218750,
zOff+0.359375
), new Point3D(1.015625,0.289062,
zOff+0.414062
), new Point3D(1.023438,0.312500,
zOff+0.476562
));
object[720] = new Triangle(new Point3D(-0.921875,0.218750,
zOff+0.359375
), new Point3D(-0.890625,0.234375,
zOff+0.406250
), new Point3D(-1.023438,0.312500,
zOff+0.476562
));
object[721] = new Triangle(new Point3D(-1.023438,0.312500,
zOff+0.476562
), new Point3D(-1.015625,0.289062,
zOff+0.414062
), new Point3D(-0.921875,0.218750,
zOff+0.359375
));
object[722] = new Triangle(new Point3D(1.023438,0.312500,
zOff+0.476562
), new Point3D(1.015625,0.289062,
zOff+0.414062
), new Point3D(1.187500,0.390625,
zOff+0.437500
));
object[723] = new Triangle(new Point3D(1.187500,0.390625,
zOff+0.437500
), new Point3D(1.234375,0.421875,
zOff+0.507812
), new Point3D(1.023438,0.312500,
zOff+0.476562
));
object[724] = new Triangle(new Point3D(-1.187500,0.390625,
zOff+0.437500
), new Point3D(-1.015625,0.289062,
zOff+0.414062
), new Point3D(-1.023438,0.312500,
zOff+0.476562
));
object[725] = new Triangle(new Point3D(-1.023438,0.312500,
zOff+0.476562
), new Point3D(-1.234375,0.421875,
zOff+0.507812
), new Point3D(-1.187500,0.390625,
zOff+0.437500
));
object[726] = new Triangle(new Point3D(1.234375,0.421875,
zOff+0.507812
), new Point3D(1.187500,0.390625,
zOff+0.437500
), new Point3D(1.265625,0.406250,
zOff+0.289062
));
object[727] = new Triangle(new Point3D(1.265625,0.406250,
zOff+0.289062
), new Point3D(1.351562,0.421875,
zOff+0.320312
), new Point3D(1.234375,0.421875,
zOff+0.507812
));
object[728] = new Triangle(new Point3D(-1.265625,0.406250,
zOff+0.289062
), new Point3D(-1.187500,0.390625,
zOff+0.437500
), new Point3D(-1.234375,0.421875,
zOff+0.507812
));
object[729] = new Triangle(new Point3D(-1.234375,0.421875,
zOff+0.507812
), new Point3D(-1.351562,0.421875,
zOff+0.320312
), new Point3D(-1.265625,0.406250,
zOff+0.289062
));
object[730] = new Triangle(new Point3D(1.351562,0.421875,
zOff+0.320312
), new Point3D(1.265625,0.406250,
zOff+0.289062
), new Point3D(1.210938,0.406250,
zOff+0.078125
));
object[731] = new Triangle(new Point3D(1.210938,0.406250,
zOff+0.078125
), new Point3D(1.281250,0.429688,
zOff+0.054688
), new Point3D(1.351562,0.421875,
zOff+0.320312
));
object[732] = new Triangle(new Point3D(-1.210938,0.406250,
zOff+0.078125
), new Point3D(-1.265625,0.406250,
zOff+0.289062
), new Point3D(-1.351562,0.421875,
zOff+0.320312
));
object[733] = new Triangle(new Point3D(-1.351562,0.421875,
zOff+0.320312
), new Point3D(-1.281250,0.429688,
zOff+0.054688
), new Point3D(-1.210938,0.406250,
zOff+0.078125
));
object[734] = new Triangle(new Point3D(1.281250,0.429688,
zOff+0.054688
), new Point3D(1.210938,0.406250,
zOff+0.078125
), new Point3D(1.031250,0.304688,
zOff-0.039062
));
object[735] = new Triangle(new Point3D(1.031250,0.304688,
zOff-0.039062
), new Point3D(1.039062,0.328125,
zOff-0.101562
), new Point3D(1.281250,0.429688,
zOff+0.054688
));
object[736] = new Triangle(new Point3D(-1.031250,0.304688,
zOff-0.039062
), new Point3D(-1.210938,0.406250,
zOff+0.078125
), new Point3D(-1.281250,0.429688,
zOff+0.054688
));
object[737] = new Triangle(new Point3D(-1.281250,0.429688,
zOff+0.054688
), new Point3D(-1.039062,0.328125,
zOff-0.101562
), new Point3D(-1.031250,0.304688,
zOff-0.039062
));
object[738] = new Triangle(new Point3D(1.039062,0.328125,
zOff-0.101562
), new Point3D(1.031250,0.304688,
zOff-0.039062
), new Point3D(0.828125,0.132812,
zOff-0.070312
));
object[739] = new Triangle(new Point3D(0.828125,0.132812,
zOff-0.070312
), new Point3D(0.773438,0.125000,
zOff-0.140625
), new Point3D(1.039062,0.328125,
zOff-0.101562
));
object[740] = new Triangle(new Point3D(-0.828125,0.132812,
zOff-0.070312
), new Point3D(-1.031250,0.304688,
zOff-0.039062
), new Point3D(-1.039062,0.328125,
zOff-0.101562
));
object[741] = new Triangle(new Point3D(-1.039062,0.328125,
zOff-0.101562
), new Point3D(-0.773438,0.125000,
zOff-0.140625
), new Point3D(-0.828125,0.132812,
zOff-0.070312
));
object[742] = new Triangle(new Point3D(1.031250,0.304688,
zOff-0.039062
), new Point3D(1.039062,0.367188,
zOff+0.000000
), new Point3D(0.882812,0.210938,
zOff-0.023438
));
object[743] = new Triangle(new Point3D(0.882812,0.210938,
zOff-0.023438
), new Point3D(0.828125,0.132812,
zOff-0.070312
), new Point3D(1.031250,0.304688,
zOff-0.039062
));
object[744] = new Triangle(new Point3D(-0.882812,0.210938,
zOff-0.023438
), new Point3D(-1.039062,0.367188,
zOff+0.000000
), new Point3D(-1.031250,0.304688,
zOff-0.039062
));
object[745] = new Triangle(new Point3D(-1.031250,0.304688,
zOff-0.039062
), new Point3D(-0.828125,0.132812,
zOff-0.070312
), new Point3D(-0.882812,0.210938,
zOff-0.023438
));
object[746] = new Triangle(new Point3D(1.210938,0.406250,
zOff+0.078125
), new Point3D(1.187500,0.445312,
zOff+0.093750
), new Point3D(1.039062,0.367188,
zOff+0.000000
));
object[747] = new Triangle(new Point3D(1.039062,0.367188,
zOff+0.000000
), new Point3D(1.031250,0.304688,
zOff-0.039062
), new Point3D(1.210938,0.406250,
zOff+0.078125
));
object[748] = new Triangle(new Point3D(-1.039062,0.367188,
zOff+0.000000
), new Point3D(-1.187500,0.445312,
zOff+0.093750
), new Point3D(-1.210938,0.406250,
zOff+0.078125
));
object[749] = new Triangle(new Point3D(-1.210938,0.406250,
zOff+0.078125
), new Point3D(-1.031250,0.304688,
zOff-0.039062
), new Point3D(-1.039062,0.367188,
zOff+0.000000
));
object[750] = new Triangle(new Point3D(1.265625,0.406250,
zOff+0.289062
), new Point3D(1.234375,0.445312,
zOff+0.250000
), new Point3D(1.187500,0.445312,
zOff+0.093750
));
object[751] = new Triangle(new Point3D(1.187500,0.445312,
zOff+0.093750
), new Point3D(1.210938,0.406250,
zOff+0.078125
), new Point3D(1.265625,0.406250,
zOff+0.289062
));
object[752] = new Triangle(new Point3D(-1.187500,0.445312,
zOff+0.093750
), new Point3D(-1.234375,0.445312,
zOff+0.250000
), new Point3D(-1.265625,0.406250,
zOff+0.289062
));
object[753] = new Triangle(new Point3D(-1.265625,0.406250,
zOff+0.289062
), new Point3D(-1.210938,0.406250,
zOff+0.078125
), new Point3D(-1.187500,0.445312,
zOff+0.093750
));
object[754] = new Triangle(new Point3D(1.187500,0.390625,
zOff+0.437500
), new Point3D(1.171875,0.437500,
zOff+0.359375
), new Point3D(1.234375,0.445312,
zOff+0.250000
));
object[755] = new Triangle(new Point3D(1.234375,0.445312,
zOff+0.250000
), new Point3D(1.265625,0.406250,
zOff+0.289062
), new Point3D(1.187500,0.390625,
zOff+0.437500
));
object[756] = new Triangle(new Point3D(-1.234375,0.445312,
zOff+0.250000
), new Point3D(-1.171875,0.437500,
zOff+0.359375
), new Point3D(-1.187500,0.390625,
zOff+0.437500
));
object[757] = new Triangle(new Point3D(-1.187500,0.390625,
zOff+0.437500
), new Point3D(-1.265625,0.406250,
zOff+0.289062
), new Point3D(-1.234375,0.445312,
zOff+0.250000
));
object[758] = new Triangle(new Point3D(1.015625,0.289062,
zOff+0.414062
), new Point3D(1.023438,0.359375,
zOff+0.343750
), new Point3D(1.171875,0.437500,
zOff+0.359375
));
object[759] = new Triangle(new Point3D(1.171875,0.437500,
zOff+0.359375
), new Point3D(1.187500,0.390625,
zOff+0.437500
), new Point3D(1.015625,0.289062,
zOff+0.414062
));
object[760] = new Triangle(new Point3D(-1.171875,0.437500,
zOff+0.359375
), new Point3D(-1.023438,0.359375,
zOff+0.343750
), new Point3D(-1.015625,0.289062,
zOff+0.414062
));
object[761] = new Triangle(new Point3D(-1.015625,0.289062,
zOff+0.414062
), new Point3D(-1.187500,0.390625,
zOff+0.437500
), new Point3D(-1.171875,0.437500,
zOff+0.359375
));
object[762] = new Triangle(new Point3D(1.015625,0.289062,
zOff+0.414062
), new Point3D(0.921875,0.218750,
zOff+0.359375
), new Point3D(0.945312,0.289062,
zOff+0.304688
));
object[763] = new Triangle(new Point3D(0.945312,0.289062,
zOff+0.304688
), new Point3D(1.023438,0.359375,
zOff+0.343750
), new Point3D(1.015625,0.289062,
zOff+0.414062
));
object[764] = new Triangle(new Point3D(-0.945312,0.289062,
zOff+0.304688
), new Point3D(-0.921875,0.218750,
zOff+0.359375
), new Point3D(-1.015625,0.289062,
zOff+0.414062
));
object[765] = new Triangle(new Point3D(-1.015625,0.289062,
zOff+0.414062
), new Point3D(-1.023438,0.359375,
zOff+0.343750
), new Point3D(-0.945312,0.289062,
zOff+0.304688
));
object[766] = new Triangle(new Point3D(0.734375,-0.070312,
zOff-0.046875
), new Point3D(0.593750,0.164062,
zOff-0.125000
), new Point3D(0.718750,0.171875,
zOff-0.023438
));
object[767] = new Triangle(new Point3D(0.718750,0.171875,
zOff-0.023438
), new Point3D(0.726562,0.070312,
zOff+0.000000
), new Point3D(0.734375,-0.070312,
zOff-0.046875
));
object[768] = new Triangle(new Point3D(-0.718750,0.171875,
zOff-0.023438
), new Point3D(-0.593750,0.164062,
zOff-0.125000
), new Point3D(-0.734375,-0.070312,
zOff-0.046875
));
object[769] = new Triangle(new Point3D(-0.734375,-0.070312,
zOff-0.046875
), new Point3D(-0.726562,0.070312,
zOff+0.000000
), new Point3D(-0.718750,0.171875,
zOff-0.023438
));
object[770] = new Triangle(new Point3D(0.593750,0.164062,
zOff-0.125000
), new Point3D(0.773438,0.125000,
zOff-0.140625
), new Point3D(0.828125,0.132812,
zOff-0.070312
));
object[771] = new Triangle(new Point3D(0.828125,0.132812,
zOff-0.070312
), new Point3D(0.718750,0.171875,
zOff-0.023438
), new Point3D(0.593750,0.164062,
zOff-0.125000
));
object[772] = new Triangle(new Point3D(-0.828125,0.132812,
zOff-0.070312
), new Point3D(-0.773438,0.125000,
zOff-0.140625
), new Point3D(-0.593750,0.164062,
zOff-0.125000
));
object[773] = new Triangle(new Point3D(-0.593750,0.164062,
zOff-0.125000
), new Point3D(-0.718750,0.171875,
zOff-0.023438
), new Point3D(-0.828125,0.132812,
zOff-0.070312
));
object[774] = new Triangle(new Point3D(0.851562,-0.054688,
zOff+0.234375
), new Point3D(0.734375,-0.070312,
zOff-0.046875
), new Point3D(0.726562,0.070312,
zOff+0.000000
));
object[775] = new Triangle(new Point3D(0.726562,0.070312,
zOff+0.000000
), new Point3D(0.859375,0.046875,
zOff+0.320312
), new Point3D(0.851562,-0.054688,
zOff+0.234375
));
object[776] = new Triangle(new Point3D(-0.726562,0.070312,
zOff+0.000000
), new Point3D(-0.734375,-0.070312,
zOff-0.046875
), new Point3D(-0.851562,-0.054688,
zOff+0.234375
));
object[777] = new Triangle(new Point3D(-0.851562,-0.054688,
zOff+0.234375
), new Point3D(-0.859375,0.046875,
zOff+0.320312
), new Point3D(-0.726562,0.070312,
zOff+0.000000
));
object[778] = new Triangle(new Point3D(0.820312,0.203125,
zOff+0.328125
), new Point3D(0.843750,0.210938,
zOff+0.289062
), new Point3D(0.921875,0.218750,
zOff+0.359375
));
object[779] = new Triangle(new Point3D(0.921875,0.218750,
zOff+0.359375
), new Point3D(0.890625,0.234375,
zOff+0.406250
), new Point3D(0.820312,0.203125,
zOff+0.328125
));
object[780] = new Triangle(new Point3D(-0.921875,0.218750,
zOff+0.359375
), new Point3D(-0.843750,0.210938,
zOff+0.289062
), new Point3D(-0.820312,0.203125,
zOff+0.328125
));
object[781] = new Triangle(new Point3D(-0.820312,0.203125,
zOff+0.328125
), new Point3D(-0.890625,0.234375,
zOff+0.406250
), new Point3D(-0.921875,0.218750,
zOff+0.359375
));
object[782] = new Triangle(new Point3D(0.828125,0.132812,
zOff-0.070312
), new Point3D(0.882812,0.210938,
zOff-0.023438
), new Point3D(0.812500,0.273438,
zOff-0.015625
));
object[783] = new Triangle(new Point3D(0.812500,0.273438,
zOff-0.015625
), new Point3D(0.718750,0.171875,
zOff-0.023438
), new Point3D(0.828125,0.132812,
zOff-0.070312
));
object[784] = new Triangle(new Point3D(-0.812500,0.273438,
zOff-0.015625
), new Point3D(-0.882812,0.210938,
zOff-0.023438
), new Point3D(-0.828125,0.132812,
zOff-0.070312
));
object[785] = new Triangle(new Point3D(-0.828125,0.132812,
zOff-0.070312
), new Point3D(-0.718750,0.171875,
zOff-0.023438
), new Point3D(-0.812500,0.273438,
zOff-0.015625
));
object[786] = new Triangle(new Point3D(0.843750,0.273438,
zOff+0.015625
), new Point3D(0.718750,0.187500,
zOff+0.039062
), new Point3D(0.718750,0.171875,
zOff-0.023438
));
object[787] = new Triangle(new Point3D(0.718750,0.171875,
zOff-0.023438
), new Point3D(0.812500,0.273438,
zOff-0.015625
), new Point3D(0.843750,0.273438,
zOff+0.015625
));
object[788] = new Triangle(new Point3D(-0.718750,0.171875,
zOff-0.023438
), new Point3D(-0.718750,0.187500,
zOff+0.039062
), new Point3D(-0.843750,0.273438,
zOff+0.015625
));
object[789] = new Triangle(new Point3D(-0.843750,0.273438,
zOff+0.015625
), new Point3D(-0.812500,0.273438,
zOff-0.015625
), new Point3D(-0.718750,0.171875,
zOff-0.023438
));
object[790] = new Triangle(new Point3D(0.757812,0.273438,
zOff+0.093750
), new Point3D(0.718750,0.187500,
zOff+0.039062
), new Point3D(0.843750,0.273438,
zOff+0.015625
));
object[791] = new Triangle(new Point3D(0.843750,0.273438,
zOff+0.015625
), new Point3D(0.820312,0.273438,
zOff+0.085938
), new Point3D(0.757812,0.273438,
zOff+0.093750
));
object[792] = new Triangle(new Point3D(-0.843750,0.273438,
zOff+0.015625
), new Point3D(-0.718750,0.187500,
zOff+0.039062
), new Point3D(-0.757812,0.273438,
zOff+0.093750
));
object[793] = new Triangle(new Point3D(-0.757812,0.273438,
zOff+0.093750
), new Point3D(-0.820312,0.273438,
zOff+0.085938
), new Point3D(-0.843750,0.273438,
zOff+0.015625
));
object[794] = new Triangle(new Point3D(0.835938,0.273438,
zOff+0.171875
), new Point3D(0.796875,0.210938,
zOff+0.203125
), new Point3D(0.718750,0.187500,
zOff+0.039062
));
object[795] = new Triangle(new Point3D(0.718750,0.187500,
zOff+0.039062
), new Point3D(0.757812,0.273438,
zOff+0.093750
), new Point3D(0.835938,0.273438,
zOff+0.171875
));
object[796] = new Triangle(new Point3D(-0.718750,0.187500,
zOff+0.039062
), new Point3D(-0.796875,0.210938,
zOff+0.203125
), new Point3D(-0.835938,0.273438,
zOff+0.171875
));
object[797] = new Triangle(new Point3D(-0.835938,0.273438,
zOff+0.171875
), new Point3D(-0.757812,0.273438,
zOff+0.093750
), new Point3D(-0.718750,0.187500,
zOff+0.039062
));
object[798] = new Triangle(new Point3D(0.843750,0.210938,
zOff+0.289062
), new Point3D(0.796875,0.210938,
zOff+0.203125
), new Point3D(0.835938,0.273438,
zOff+0.171875
));
object[799] = new Triangle(new Point3D(0.835938,0.273438,
zOff+0.171875
), new Point3D(0.890625,0.265625,
zOff+0.242188
), new Point3D(0.843750,0.210938,
zOff+0.289062
));
object[800] = new Triangle(new Point3D(-0.835938,0.273438,
zOff+0.171875
), new Point3D(-0.796875,0.210938,
zOff+0.203125
), new Point3D(-0.843750,0.210938,
zOff+0.289062
));
object[801] = new Triangle(new Point3D(-0.843750,0.210938,
zOff+0.289062
), new Point3D(-0.890625,0.265625,
zOff+0.242188
), new Point3D(-0.835938,0.273438,
zOff+0.171875
));
object[802] = new Triangle(new Point3D(0.921875,0.218750,
zOff+0.359375
), new Point3D(0.843750,0.210938,
zOff+0.289062
), new Point3D(0.890625,0.265625,
zOff+0.242188
));
object[803] = new Triangle(new Point3D(0.890625,0.265625,
zOff+0.242188
), new Point3D(0.945312,0.289062,
zOff+0.304688
), new Point3D(0.921875,0.218750,
zOff+0.359375
));
object[804] = new Triangle(new Point3D(-0.890625,0.265625,
zOff+0.242188
), new Point3D(-0.843750,0.210938,
zOff+0.289062
), new Point3D(-0.921875,0.218750,
zOff+0.359375
));
object[805] = new Triangle(new Point3D(-0.921875,0.218750,
zOff+0.359375
), new Point3D(-0.945312,0.289062,
zOff+0.304688
), new Point3D(-0.890625,0.265625,
zOff+0.242188
));
object[806] = new Triangle(new Point3D(0.859375,0.046875,
zOff+0.320312
), new Point3D(0.796875,0.210938,
zOff+0.203125
), new Point3D(0.843750,0.210938,
zOff+0.289062
));
object[807] = new Triangle(new Point3D(0.843750,0.210938,
zOff+0.289062
), new Point3D(0.820312,0.203125,
zOff+0.328125
), new Point3D(0.859375,0.046875,
zOff+0.320312
));
object[808] = new Triangle(new Point3D(-0.843750,0.210938,
zOff+0.289062
), new Point3D(-0.796875,0.210938,
zOff+0.203125
), new Point3D(-0.859375,0.046875,
zOff+0.320312
));
object[809] = new Triangle(new Point3D(-0.859375,0.046875,
zOff+0.320312
), new Point3D(-0.820312,0.203125,
zOff+0.328125
), new Point3D(-0.843750,0.210938,
zOff+0.289062
));
object[810] = new Triangle(new Point3D(0.859375,0.046875,
zOff+0.320312
), new Point3D(0.726562,0.070312,
zOff+0.000000
), new Point3D(0.718750,0.187500,
zOff+0.039062
));
object[811] = new Triangle(new Point3D(0.718750,0.187500,
zOff+0.039062
), new Point3D(0.796875,0.210938,
zOff+0.203125
), new Point3D(0.859375,0.046875,
zOff+0.320312
));
object[812] = new Triangle(new Point3D(-0.718750,0.187500,
zOff+0.039062
), new Point3D(-0.726562,0.070312,
zOff+0.000000
), new Point3D(-0.859375,0.046875,
zOff+0.320312
));
object[813] = new Triangle(new Point3D(-0.859375,0.046875,
zOff+0.320312
), new Point3D(-0.796875,0.210938,
zOff+0.203125
), new Point3D(-0.718750,0.187500,
zOff+0.039062
));
object[814] = new Triangle(new Point3D(0.726562,0.070312,
zOff+0.000000
), new Point3D(0.718750,0.171875,
zOff-0.023438
), new Point3D(0.718750,0.187500,
zOff+0.039062
));
object[815] = new Triangle(new Point3D(-0.718750,0.187500,
zOff+0.039062
), new Point3D(-0.718750,0.171875,
zOff-0.023438
), new Point3D(-0.726562,0.070312,
zOff+0.000000
));
object[816] = new Triangle(new Point3D(0.945312,0.289062,
zOff+0.304688
), new Point3D(0.890625,0.265625,
zOff+0.242188
), new Point3D(0.890625,0.320312,
zOff+0.234375
));
object[817] = new Triangle(new Point3D(0.890625,0.320312,
zOff+0.234375
), new Point3D(0.953125,0.343750,
zOff+0.289062
), new Point3D(0.945312,0.289062,
zOff+0.304688
));
object[818] = new Triangle(new Point3D(-0.890625,0.320312,
zOff+0.234375
), new Point3D(-0.890625,0.265625,
zOff+0.242188
), new Point3D(-0.945312,0.289062,
zOff+0.304688
));
object[819] = new Triangle(new Point3D(-0.945312,0.289062,
zOff+0.304688
), new Point3D(-0.953125,0.343750,
zOff+0.289062
), new Point3D(-0.890625,0.320312,
zOff+0.234375
));
object[820] = new Triangle(new Point3D(0.890625,0.265625,
zOff+0.242188
), new Point3D(0.835938,0.273438,
zOff+0.171875
), new Point3D(0.843750,0.320312,
zOff+0.171875
));
object[821] = new Triangle(new Point3D(0.843750,0.320312,
zOff+0.171875
), new Point3D(0.890625,0.320312,
zOff+0.234375
), new Point3D(0.890625,0.265625,
zOff+0.242188
));
object[822] = new Triangle(new Point3D(-0.843750,0.320312,
zOff+0.171875
), new Point3D(-0.835938,0.273438,
zOff+0.171875
), new Point3D(-0.890625,0.265625,
zOff+0.242188
));
object[823] = new Triangle(new Point3D(-0.890625,0.265625,
zOff+0.242188
), new Point3D(-0.890625,0.320312,
zOff+0.234375
), new Point3D(-0.843750,0.320312,
zOff+0.171875
));
object[824] = new Triangle(new Point3D(0.835938,0.273438,
zOff+0.171875
), new Point3D(0.757812,0.273438,
zOff+0.093750
), new Point3D(0.765625,0.320312,
zOff+0.093750
));
object[825] = new Triangle(new Point3D(0.765625,0.320312,
zOff+0.093750
), new Point3D(0.843750,0.320312,
zOff+0.171875
), new Point3D(0.835938,0.273438,
zOff+0.171875
));
object[826] = new Triangle(new Point3D(-0.765625,0.320312,
zOff+0.093750
), new Point3D(-0.757812,0.273438,
zOff+0.093750
), new Point3D(-0.835938,0.273438,
zOff+0.171875
));
object[827] = new Triangle(new Point3D(-0.835938,0.273438,
zOff+0.171875
), new Point3D(-0.843750,0.320312,
zOff+0.171875
), new Point3D(-0.765625,0.320312,
zOff+0.093750
));
object[828] = new Triangle(new Point3D(0.757812,0.273438,
zOff+0.093750
), new Point3D(0.820312,0.273438,
zOff+0.085938
), new Point3D(0.828125,0.320312,
zOff+0.078125
));
object[829] = new Triangle(new Point3D(0.828125,0.320312,
zOff+0.078125
), new Point3D(0.765625,0.320312,
zOff+0.093750
), new Point3D(0.757812,0.273438,
zOff+0.093750
));
object[830] = new Triangle(new Point3D(-0.828125,0.320312,
zOff+0.078125
), new Point3D(-0.820312,0.273438,
zOff+0.085938
), new Point3D(-0.757812,0.273438,
zOff+0.093750
));
object[831] = new Triangle(new Point3D(-0.757812,0.273438,
zOff+0.093750
), new Point3D(-0.765625,0.320312,
zOff+0.093750
), new Point3D(-0.828125,0.320312,
zOff+0.078125
));
object[832] = new Triangle(new Point3D(0.820312,0.273438,
zOff+0.085938
), new Point3D(0.843750,0.273438,
zOff+0.015625
), new Point3D(0.851562,0.320312,
zOff+0.015625
));
object[833] = new Triangle(new Point3D(0.851562,0.320312,
zOff+0.015625
), new Point3D(0.828125,0.320312,
zOff+0.078125
), new Point3D(0.820312,0.273438,
zOff+0.085938
));
object[834] = new Triangle(new Point3D(-0.851562,0.320312,
zOff+0.015625
), new Point3D(-0.843750,0.273438,
zOff+0.015625
), new Point3D(-0.820312,0.273438,
zOff+0.085938
));
object[835] = new Triangle(new Point3D(-0.820312,0.273438,
zOff+0.085938
), new Point3D(-0.828125,0.320312,
zOff+0.078125
), new Point3D(-0.851562,0.320312,
zOff+0.015625
));
object[836] = new Triangle(new Point3D(0.843750,0.273438,
zOff+0.015625
), new Point3D(0.812500,0.273438,
zOff-0.015625
), new Point3D(0.812500,0.320312,
zOff-0.015625
));
object[837] = new Triangle(new Point3D(0.812500,0.320312,
zOff-0.015625
), new Point3D(0.851562,0.320312,
zOff+0.015625
), new Point3D(0.843750,0.273438,
zOff+0.015625
));
object[838] = new Triangle(new Point3D(-0.812500,0.320312,
zOff-0.015625
), new Point3D(-0.812500,0.273438,
zOff-0.015625
), new Point3D(-0.843750,0.273438,
zOff+0.015625
));
object[839] = new Triangle(new Point3D(-0.843750,0.273438,
zOff+0.015625
), new Point3D(-0.851562,0.320312,
zOff+0.015625
), new Point3D(-0.812500,0.320312,
zOff-0.015625
));
object[840] = new Triangle(new Point3D(0.812500,0.273438,
zOff-0.015625
), new Point3D(0.882812,0.210938,
zOff-0.023438
), new Point3D(0.882812,0.265625,
zOff-0.015625
));
object[841] = new Triangle(new Point3D(0.882812,0.265625,
zOff-0.015625
), new Point3D(0.812500,0.320312,
zOff-0.015625
), new Point3D(0.812500,0.273438,
zOff-0.015625
));
object[842] = new Triangle(new Point3D(-0.882812,0.265625,
zOff-0.015625
), new Point3D(-0.882812,0.210938,
zOff-0.023438
), new Point3D(-0.812500,0.273438,
zOff-0.015625
));
object[843] = new Triangle(new Point3D(-0.812500,0.273438,
zOff-0.015625
), new Point3D(-0.812500,0.320312,
zOff-0.015625
), new Point3D(-0.882812,0.265625,
zOff-0.015625
));
object[844] = new Triangle(new Point3D(1.023438,0.359375,
zOff+0.343750
), new Point3D(0.945312,0.289062,
zOff+0.304688
), new Point3D(0.953125,0.343750,
zOff+0.289062
));
object[845] = new Triangle(new Point3D(0.953125,0.343750,
zOff+0.289062
), new Point3D(1.039062,0.414062,
zOff+0.328125
), new Point3D(1.023438,0.359375,
zOff+0.343750
));
object[846] = new Triangle(new Point3D(-0.953125,0.343750,
zOff+0.289062
), new Point3D(-0.945312,0.289062,
zOff+0.304688
), new Point3D(-1.023438,0.359375,
zOff+0.343750
));
object[847] = new Triangle(new Point3D(-1.023438,0.359375,
zOff+0.343750
), new Point3D(-1.039062,0.414062,
zOff+0.328125
), new Point3D(-0.953125,0.343750,
zOff+0.289062
));
object[848] = new Triangle(new Point3D(1.171875,0.437500,
zOff+0.359375
), new Point3D(1.023438,0.359375,
zOff+0.343750
), new Point3D(1.039062,0.414062,
zOff+0.328125
));
object[849] = new Triangle(new Point3D(1.039062,0.414062,
zOff+0.328125
), new Point3D(1.187500,0.484375,
zOff+0.343750
), new Point3D(1.171875,0.437500,
zOff+0.359375
));
object[850] = new Triangle(new Point3D(-1.039062,0.414062,
zOff+0.328125
), new Point3D(-1.023438,0.359375,
zOff+0.343750
), new Point3D(-1.171875,0.437500,
zOff+0.359375
));
object[851] = new Triangle(new Point3D(-1.171875,0.437500,
zOff+0.359375
), new Point3D(-1.187500,0.484375,
zOff+0.343750
), new Point3D(-1.039062,0.414062,
zOff+0.328125
));
object[852] = new Triangle(new Point3D(1.234375,0.445312,
zOff+0.250000
), new Point3D(1.171875,0.437500,
zOff+0.359375
), new Point3D(1.187500,0.484375,
zOff+0.343750
));
object[853] = new Triangle(new Point3D(1.187500,0.484375,
zOff+0.343750
), new Point3D(1.257812,0.492188,
zOff+0.242188
), new Point3D(1.234375,0.445312,
zOff+0.250000
));
object[854] = new Triangle(new Point3D(-1.187500,0.484375,
zOff+0.343750
), new Point3D(-1.171875,0.437500,
zOff+0.359375
), new Point3D(-1.234375,0.445312,
zOff+0.250000
));
object[855] = new Triangle(new Point3D(-1.234375,0.445312,
zOff+0.250000
), new Point3D(-1.257812,0.492188,
zOff+0.242188
), new Point3D(-1.187500,0.484375,
zOff+0.343750
));
object[856] = new Triangle(new Point3D(1.187500,0.445312,
zOff+0.093750
), new Point3D(1.234375,0.445312,
zOff+0.250000
), new Point3D(1.257812,0.492188,
zOff+0.242188
));
object[857] = new Triangle(new Point3D(1.257812,0.492188,
zOff+0.242188
), new Point3D(1.210938,0.484375,
zOff+0.085938
), new Point3D(1.187500,0.445312,
zOff+0.093750
));
object[858] = new Triangle(new Point3D(-1.257812,0.492188,
zOff+0.242188
), new Point3D(-1.234375,0.445312,
zOff+0.250000
), new Point3D(-1.187500,0.445312,
zOff+0.093750
));
object[859] = new Triangle(new Point3D(-1.187500,0.445312,
zOff+0.093750
), new Point3D(-1.210938,0.484375,
zOff+0.085938
), new Point3D(-1.257812,0.492188,
zOff+0.242188
));
object[860] = new Triangle(new Point3D(1.039062,0.367188,
zOff+0.000000
), new Point3D(1.187500,0.445312,
zOff+0.093750
), new Point3D(1.210938,0.484375,
zOff+0.085938
));
object[861] = new Triangle(new Point3D(1.210938,0.484375,
zOff+0.085938
), new Point3D(1.046875,0.421875,
zOff+0.000000
), new Point3D(1.039062,0.367188,
zOff+0.000000
));
object[862] = new Triangle(new Point3D(-1.210938,0.484375,
zOff+0.085938
), new Point3D(-1.187500,0.445312,
zOff+0.093750
), new Point3D(-1.039062,0.367188,
zOff+0.000000
));
object[863] = new Triangle(new Point3D(-1.039062,0.367188,
zOff+0.000000
), new Point3D(-1.046875,0.421875,
zOff+0.000000
), new Point3D(-1.210938,0.484375,
zOff+0.085938
));
object[864] = new Triangle(new Point3D(0.882812,0.210938,
zOff-0.023438
), new Point3D(1.039062,0.367188,
zOff+0.000000
), new Point3D(1.046875,0.421875,
zOff+0.000000
));
object[865] = new Triangle(new Point3D(1.046875,0.421875,
zOff+0.000000
), new Point3D(0.882812,0.265625,
zOff-0.015625
), new Point3D(0.882812,0.210938,
zOff-0.023438
));
object[866] = new Triangle(new Point3D(-1.046875,0.421875,
zOff+0.000000
), new Point3D(-1.039062,0.367188,
zOff+0.000000
), new Point3D(-0.882812,0.210938,
zOff-0.023438
));
object[867] = new Triangle(new Point3D(-0.882812,0.210938,
zOff-0.023438
), new Point3D(-0.882812,0.265625,
zOff-0.015625
), new Point3D(-1.046875,0.421875,
zOff+0.000000
));
object[868] = new Triangle(new Point3D(0.828125,0.320312,
zOff+0.078125
), new Point3D(0.851562,0.320312,
zOff+0.015625
), new Point3D(0.937500,0.335938,
zOff+0.062500
));
object[869] = new Triangle(new Point3D(0.937500,0.335938,
zOff+0.062500
), new Point3D(0.890625,0.328125,
zOff+0.109375
), new Point3D(0.828125,0.320312,
zOff+0.078125
));
object[870] = new Triangle(new Point3D(-0.937500,0.335938,
zOff+0.062500
), new Point3D(-0.851562,0.320312,
zOff+0.015625
), new Point3D(-0.828125,0.320312,
zOff+0.078125
));
object[871] = new Triangle(new Point3D(-0.828125,0.320312,
zOff+0.078125
), new Point3D(-0.890625,0.328125,
zOff+0.109375
), new Point3D(-0.937500,0.335938,
zOff+0.062500
));
object[872] = new Triangle(new Point3D(0.890625,0.328125,
zOff+0.109375
), new Point3D(0.937500,0.335938,
zOff+0.062500
), new Point3D(1.000000,0.367188,
zOff+0.125000
));
object[873] = new Triangle(new Point3D(1.000000,0.367188,
zOff+0.125000
), new Point3D(0.960938,0.351562,
zOff+0.171875
), new Point3D(0.890625,0.328125,
zOff+0.109375
));
object[874] = new Triangle(new Point3D(-1.000000,0.367188,
zOff+0.125000
), new Point3D(-0.937500,0.335938,
zOff+0.062500
), new Point3D(-0.890625,0.328125,
zOff+0.109375
));
object[875] = new Triangle(new Point3D(-0.890625,0.328125,
zOff+0.109375
), new Point3D(-0.960938,0.351562,
zOff+0.171875
), new Point3D(-1.000000,0.367188,
zOff+0.125000
));
object[876] = new Triangle(new Point3D(0.960938,0.351562,
zOff+0.171875
), new Point3D(1.000000,0.367188,
zOff+0.125000
), new Point3D(1.054688,0.382812,
zOff+0.187500
));
object[877] = new Triangle(new Point3D(1.054688,0.382812,
zOff+0.187500
), new Point3D(1.015625,0.375000,
zOff+0.234375
), new Point3D(0.960938,0.351562,
zOff+0.171875
));
object[878] = new Triangle(new Point3D(-1.054688,0.382812,
zOff+0.187500
), new Point3D(-1.000000,0.367188,
zOff+0.125000
), new Point3D(-0.960938,0.351562,
zOff+0.171875
));
object[879] = new Triangle(new Point3D(-0.960938,0.351562,
zOff+0.171875
), new Point3D(-1.015625,0.375000,
zOff+0.234375
), new Point3D(-1.054688,0.382812,
zOff+0.187500
));
object[880] = new Triangle(new Point3D(1.015625,0.375000,
zOff+0.234375
), new Point3D(1.054688,0.382812,
zOff+0.187500
), new Point3D(1.109375,0.390625,
zOff+0.210938
));
object[881] = new Triangle(new Point3D(1.109375,0.390625,
zOff+0.210938
), new Point3D(1.085938,0.390625,
zOff+0.273438
), new Point3D(1.015625,0.375000,
zOff+0.234375
));
object[882] = new Triangle(new Point3D(-1.109375,0.390625,
zOff+0.210938
), new Point3D(-1.054688,0.382812,
zOff+0.187500
), new Point3D(-1.015625,0.375000,
zOff+0.234375
));
object[883] = new Triangle(new Point3D(-1.015625,0.375000,
zOff+0.234375
), new Point3D(-1.085938,0.390625,
zOff+0.273438
), new Point3D(-1.109375,0.390625,
zOff+0.210938
));
object[884] = new Triangle(new Point3D(1.039062,0.414062,
zOff+0.328125
), new Point3D(0.953125,0.343750,
zOff+0.289062
), new Point3D(1.015625,0.375000,
zOff+0.234375
));
object[885] = new Triangle(new Point3D(1.015625,0.375000,
zOff+0.234375
), new Point3D(1.085938,0.390625,
zOff+0.273438
), new Point3D(1.039062,0.414062,
zOff+0.328125
));
object[886] = new Triangle(new Point3D(-1.015625,0.375000,
zOff+0.234375
), new Point3D(-0.953125,0.343750,
zOff+0.289062
), new Point3D(-1.039062,0.414062,
zOff+0.328125
));
object[887] = new Triangle(new Point3D(-1.039062,0.414062,
zOff+0.328125
), new Point3D(-1.085938,0.390625,
zOff+0.273438
), new Point3D(-1.015625,0.375000,
zOff+0.234375
));
object[888] = new Triangle(new Point3D(0.890625,0.320312,
zOff+0.234375
), new Point3D(0.960938,0.351562,
zOff+0.171875
), new Point3D(1.015625,0.375000,
zOff+0.234375
));
object[889] = new Triangle(new Point3D(1.015625,0.375000,
zOff+0.234375
), new Point3D(0.953125,0.343750,
zOff+0.289062
), new Point3D(0.890625,0.320312,
zOff+0.234375
));
object[890] = new Triangle(new Point3D(-1.015625,0.375000,
zOff+0.234375
), new Point3D(-0.960938,0.351562,
zOff+0.171875
), new Point3D(-0.890625,0.320312,
zOff+0.234375
));
object[891] = new Triangle(new Point3D(-0.890625,0.320312,
zOff+0.234375
), new Point3D(-0.953125,0.343750,
zOff+0.289062
), new Point3D(-1.015625,0.375000,
zOff+0.234375
));
object[892] = new Triangle(new Point3D(0.890625,0.320312,
zOff+0.234375
), new Point3D(0.843750,0.320312,
zOff+0.171875
), new Point3D(0.890625,0.328125,
zOff+0.109375
));
object[893] = new Triangle(new Point3D(0.890625,0.328125,
zOff+0.109375
), new Point3D(0.960938,0.351562,
zOff+0.171875
), new Point3D(0.890625,0.320312,
zOff+0.234375
));
object[894] = new Triangle(new Point3D(-0.890625,0.328125,
zOff+0.109375
), new Point3D(-0.843750,0.320312,
zOff+0.171875
), new Point3D(-0.890625,0.320312,
zOff+0.234375
));
object[895] = new Triangle(new Point3D(-0.890625,0.320312,
zOff+0.234375
), new Point3D(-0.960938,0.351562,
zOff+0.171875
), new Point3D(-0.890625,0.328125,
zOff+0.109375
));
object[896] = new Triangle(new Point3D(0.828125,0.320312,
zOff+0.078125
), new Point3D(0.890625,0.328125,
zOff+0.109375
), new Point3D(0.843750,0.320312,
zOff+0.171875
));
object[897] = new Triangle(new Point3D(0.843750,0.320312,
zOff+0.171875
), new Point3D(0.765625,0.320312,
zOff+0.093750
), new Point3D(0.828125,0.320312,
zOff+0.078125
));
object[898] = new Triangle(new Point3D(-0.843750,0.320312,
zOff+0.171875
), new Point3D(-0.890625,0.328125,
zOff+0.109375
), new Point3D(-0.828125,0.320312,
zOff+0.078125
));
object[899] = new Triangle(new Point3D(-0.828125,0.320312,
zOff+0.078125
), new Point3D(-0.765625,0.320312,
zOff+0.093750
), new Point3D(-0.843750,0.320312,
zOff+0.171875
));
object[900] = new Triangle(new Point3D(0.812500,0.320312,
zOff-0.015625
), new Point3D(0.882812,0.265625,
zOff-0.015625
), new Point3D(0.937500,0.335938,
zOff+0.062500
));
object[901] = new Triangle(new Point3D(0.937500,0.335938,
zOff+0.062500
), new Point3D(0.851562,0.320312,
zOff+0.015625
), new Point3D(0.812500,0.320312,
zOff-0.015625
));
object[902] = new Triangle(new Point3D(-0.937500,0.335938,
zOff+0.062500
), new Point3D(-0.882812,0.265625,
zOff-0.015625
), new Point3D(-0.812500,0.320312,
zOff-0.015625
));
object[903] = new Triangle(new Point3D(-0.812500,0.320312,
zOff-0.015625
), new Point3D(-0.851562,0.320312,
zOff+0.015625
), new Point3D(-0.937500,0.335938,
zOff+0.062500
));
object[904] = new Triangle(new Point3D(1.046875,0.421875,
zOff+0.000000
), new Point3D(1.000000,0.367188,
zOff+0.125000
), new Point3D(0.937500,0.335938,
zOff+0.062500
));
object[905] = new Triangle(new Point3D(0.937500,0.335938,
zOff+0.062500
), new Point3D(0.882812,0.265625,
zOff-0.015625
), new Point3D(1.046875,0.421875,
zOff+0.000000
));
object[906] = new Triangle(new Point3D(-0.937500,0.335938,
zOff+0.062500
), new Point3D(-1.000000,0.367188,
zOff+0.125000
), new Point3D(-1.046875,0.421875,
zOff+0.000000
));
object[907] = new Triangle(new Point3D(-1.046875,0.421875,
zOff+0.000000
), new Point3D(-0.882812,0.265625,
zOff-0.015625
), new Point3D(-0.937500,0.335938,
zOff+0.062500
));
object[908] = new Triangle(new Point3D(1.210938,0.484375,
zOff+0.085938
), new Point3D(1.054688,0.382812,
zOff+0.187500
), new Point3D(1.000000,0.367188,
zOff+0.125000
));
object[909] = new Triangle(new Point3D(1.000000,0.367188,
zOff+0.125000
), new Point3D(1.046875,0.421875,
zOff+0.000000
), new Point3D(1.210938,0.484375,
zOff+0.085938
));
object[910] = new Triangle(new Point3D(-1.000000,0.367188,
zOff+0.125000
), new Point3D(-1.054688,0.382812,
zOff+0.187500
), new Point3D(-1.210938,0.484375,
zOff+0.085938
));
object[911] = new Triangle(new Point3D(-1.210938,0.484375,
zOff+0.085938
), new Point3D(-1.046875,0.421875,
zOff+0.000000
), new Point3D(-1.000000,0.367188,
zOff+0.125000
));
object[912] = new Triangle(new Point3D(1.257812,0.492188,
zOff+0.242188
), new Point3D(1.109375,0.390625,
zOff+0.210938
), new Point3D(1.054688,0.382812,
zOff+0.187500
));
object[913] = new Triangle(new Point3D(1.054688,0.382812,
zOff+0.187500
), new Point3D(1.210938,0.484375,
zOff+0.085938
), new Point3D(1.257812,0.492188,
zOff+0.242188
));
object[914] = new Triangle(new Point3D(-1.054688,0.382812,
zOff+0.187500
), new Point3D(-1.109375,0.390625,
zOff+0.210938
), new Point3D(-1.257812,0.492188,
zOff+0.242188
));
object[915] = new Triangle(new Point3D(-1.257812,0.492188,
zOff+0.242188
), new Point3D(-1.210938,0.484375,
zOff+0.085938
), new Point3D(-1.054688,0.382812,
zOff+0.187500
));
object[916] = new Triangle(new Point3D(1.187500,0.484375,
zOff+0.343750
), new Point3D(1.085938,0.390625,
zOff+0.273438
), new Point3D(1.109375,0.390625,
zOff+0.210938
));
object[917] = new Triangle(new Point3D(1.109375,0.390625,
zOff+0.210938
), new Point3D(1.257812,0.492188,
zOff+0.242188
), new Point3D(1.187500,0.484375,
zOff+0.343750
));
object[918] = new Triangle(new Point3D(-1.109375,0.390625,
zOff+0.210938
), new Point3D(-1.085938,0.390625,
zOff+0.273438
), new Point3D(-1.187500,0.484375,
zOff+0.343750
));
object[919] = new Triangle(new Point3D(-1.187500,0.484375,
zOff+0.343750
), new Point3D(-1.257812,0.492188,
zOff+0.242188
), new Point3D(-1.109375,0.390625,
zOff+0.210938
));
object[920] = new Triangle(new Point3D(1.039062,0.414062,
zOff+0.328125
), new Point3D(1.085938,0.390625,
zOff+0.273438
), new Point3D(1.187500,0.484375,
zOff+0.343750
));
object[921] = new Triangle(new Point3D(-1.187500,0.484375,
zOff+0.343750
), new Point3D(-1.085938,0.390625,
zOff+0.273438
), new Point3D(-1.039062,0.414062,
zOff+0.328125
));
object[922] = new Triangle(new Point3D(1.039062,0.328125,
zOff-0.101562
), new Point3D(0.773438,0.125000,
zOff-0.140625
), new Point3D(0.789062,0.328125,
zOff-0.125000
));
object[923] = new Triangle(new Point3D(0.789062,0.328125,
zOff-0.125000
), new Point3D(1.039062,0.492188,
zOff-0.085938
), new Point3D(1.039062,0.328125,
zOff-0.101562
));
object[924] = new Triangle(new Point3D(-0.789062,0.328125,
zOff-0.125000
), new Point3D(-0.773438,0.125000,
zOff-0.140625
), new Point3D(-1.039062,0.328125,
zOff-0.101562
));
object[925] = new Triangle(new Point3D(-1.039062,0.328125,
zOff-0.101562
), new Point3D(-1.039062,0.492188,
zOff-0.085938
), new Point3D(-0.789062,0.328125,
zOff-0.125000
));
object[926] = new Triangle(new Point3D(1.281250,0.429688,
zOff+0.054688
), new Point3D(1.039062,0.328125,
zOff-0.101562
), new Point3D(1.039062,0.492188,
zOff-0.085938
));
object[927] = new Triangle(new Point3D(1.039062,0.492188,
zOff-0.085938
), new Point3D(1.312500,0.531250,
zOff+0.054688
), new Point3D(1.281250,0.429688,
zOff+0.054688
));
object[928] = new Triangle(new Point3D(-1.039062,0.492188,
zOff-0.085938
), new Point3D(-1.039062,0.328125,
zOff-0.101562
), new Point3D(-1.281250,0.429688,
zOff+0.054688
));
object[929] = new Triangle(new Point3D(-1.281250,0.429688,
zOff+0.054688
), new Point3D(-1.312500,0.531250,
zOff+0.054688
), new Point3D(-1.039062,0.492188,
zOff-0.085938
));
object[930] = new Triangle(new Point3D(1.351562,0.421875,
zOff+0.320312
), new Point3D(1.281250,0.429688,
zOff+0.054688
), new Point3D(1.312500,0.531250,
zOff+0.054688
));
object[931] = new Triangle(new Point3D(1.312500,0.531250,
zOff+0.054688
), new Point3D(1.367188,0.500000,
zOff+0.296875
), new Point3D(1.351562,0.421875,
zOff+0.320312
));
object[932] = new Triangle(new Point3D(-1.312500,0.531250,
zOff+0.054688
), new Point3D(-1.281250,0.429688,
zOff+0.054688
), new Point3D(-1.351562,0.421875,
zOff+0.320312
));
object[933] = new Triangle(new Point3D(-1.351562,0.421875,
zOff+0.320312
), new Point3D(-1.367188,0.500000,
zOff+0.296875
), new Point3D(-1.312500,0.531250,
zOff+0.054688
));
object[934] = new Triangle(new Point3D(1.234375,0.421875,
zOff+0.507812
), new Point3D(1.351562,0.421875,
zOff+0.320312
), new Point3D(1.367188,0.500000,
zOff+0.296875
));
object[935] = new Triangle(new Point3D(1.367188,0.500000,
zOff+0.296875
), new Point3D(1.250000,0.546875,
zOff+0.468750
), new Point3D(1.234375,0.421875,
zOff+0.507812
));
object[936] = new Triangle(new Point3D(-1.367188,0.500000,
zOff+0.296875
), new Point3D(-1.351562,0.421875,
zOff+0.320312
), new Point3D(-1.234375,0.421875,
zOff+0.507812
));
object[937] = new Triangle(new Point3D(-1.234375,0.421875,
zOff+0.507812
), new Point3D(-1.250000,0.546875,
zOff+0.468750
), new Point3D(-1.367188,0.500000,
zOff+0.296875
));
object[938] = new Triangle(new Point3D(1.023438,0.312500,
zOff+0.476562
), new Point3D(1.234375,0.421875,
zOff+0.507812
), new Point3D(1.250000,0.546875,
zOff+0.468750
));
object[939] = new Triangle(new Point3D(1.250000,0.546875,
zOff+0.468750
), new Point3D(1.023438,0.484375,
zOff+0.437500
), new Point3D(1.023438,0.312500,
zOff+0.476562
));
object[940] = new Triangle(new Point3D(-1.250000,0.546875,
zOff+0.468750
), new Point3D(-1.234375,0.421875,
zOff+0.507812
), new Point3D(-1.023438,0.312500,
zOff+0.476562
));
object[941] = new Triangle(new Point3D(-1.023438,0.312500,
zOff+0.476562
), new Point3D(-1.023438,0.484375,
zOff+0.437500
), new Point3D(-1.250000,0.546875,
zOff+0.468750
));
object[942] = new Triangle(new Point3D(0.890625,0.234375,
zOff+0.406250
), new Point3D(1.023438,0.312500,
zOff+0.476562
), new Point3D(1.023438,0.484375,
zOff+0.437500
));
object[943] = new Triangle(new Point3D(1.023438,0.484375,
zOff+0.437500
), new Point3D(0.859375,0.382812,
zOff+0.382812
), new Point3D(0.890625,0.234375,
zOff+0.406250
));
object[944] = new Triangle(new Point3D(-1.023438,0.484375,
zOff+0.437500
), new Point3D(-1.023438,0.312500,
zOff+0.476562
), new Point3D(-0.890625,0.234375,
zOff+0.406250
));
object[945] = new Triangle(new Point3D(-0.890625,0.234375,
zOff+0.406250
), new Point3D(-0.859375,0.382812,
zOff+0.382812
), new Point3D(-1.023438,0.484375,
zOff+0.437500
));
object[946] = new Triangle(new Point3D(1.023438,0.484375,
zOff+0.437500
), new Point3D(1.039062,0.492188,
zOff-0.085938
), new Point3D(0.789062,0.328125,
zOff-0.125000
));
object[947] = new Triangle(new Point3D(0.789062,0.328125,
zOff-0.125000
), new Point3D(0.859375,0.382812,
zOff+0.382812
), new Point3D(1.023438,0.484375,
zOff+0.437500
));
object[948] = new Triangle(new Point3D(-0.789062,0.328125,
zOff-0.125000
), new Point3D(-1.039062,0.492188,
zOff-0.085938
), new Point3D(-1.023438,0.484375,
zOff+0.437500
));
object[949] = new Triangle(new Point3D(-1.023438,0.484375,
zOff+0.437500
), new Point3D(-0.859375,0.382812,
zOff+0.382812
), new Point3D(-0.789062,0.328125,
zOff-0.125000
));
object[950] = new Triangle(new Point3D(1.023438,0.484375,
zOff+0.437500
), new Point3D(1.250000,0.546875,
zOff+0.468750
), new Point3D(1.312500,0.531250,
zOff+0.054688
));
object[951] = new Triangle(new Point3D(1.312500,0.531250,
zOff+0.054688
), new Point3D(1.039062,0.492188,
zOff-0.085938
), new Point3D(1.023438,0.484375,
zOff+0.437500
));
object[952] = new Triangle(new Point3D(-1.312500,0.531250,
zOff+0.054688
), new Point3D(-1.250000,0.546875,
zOff+0.468750
), new Point3D(-1.023438,0.484375,
zOff+0.437500
));
object[953] = new Triangle(new Point3D(-1.023438,0.484375,
zOff+0.437500
), new Point3D(-1.039062,0.492188,
zOff-0.085938
), new Point3D(-1.312500,0.531250,
zOff+0.054688
));
object[954] = new Triangle(new Point3D(1.250000,0.546875,
zOff+0.468750
), new Point3D(1.367188,0.500000,
zOff+0.296875
), new Point3D(1.312500,0.531250,
zOff+0.054688
));
object[955] = new Triangle(new Point3D(-1.312500,0.531250,
zOff+0.054688
), new Point3D(-1.367188,0.500000,
zOff+0.296875
), new Point3D(-1.250000,0.546875,
zOff+0.468750
));
object[956] = new Triangle(new Point3D(0.773438,0.437500,
zOff+0.265625
), new Point3D(0.820312,0.203125,
zOff+0.328125
), new Point3D(0.890625,0.234375,
zOff+0.406250
));
object[957] = new Triangle(new Point3D(0.890625,0.234375,
zOff+0.406250
), new Point3D(0.859375,0.382812,
zOff+0.382812
), new Point3D(0.773438,0.437500,
zOff+0.265625
));
object[958] = new Triangle(new Point3D(-0.890625,0.234375,
zOff+0.406250
), new Point3D(-0.820312,0.203125,
zOff+0.328125
), new Point3D(-0.773438,0.437500,
zOff+0.265625
));
object[959] = new Triangle(new Point3D(-0.773438,0.437500,
zOff+0.265625
), new Point3D(-0.859375,0.382812,
zOff+0.382812
), new Point3D(-0.890625,0.234375,
zOff+0.406250
));
object[960] = new Triangle(new Point3D(0.773438,0.437500,
zOff+0.265625
), new Point3D(0.859375,0.382812,
zOff+0.382812
), new Point3D(0.789062,0.328125,
zOff-0.125000
));
object[961] = new Triangle(new Point3D(0.789062,0.328125,
zOff-0.125000
), new Point3D(0.640625,0.429688,
zOff-0.007812
), new Point3D(0.773438,0.437500,
zOff+0.265625
));
object[962] = new Triangle(new Point3D(-0.789062,0.328125,
zOff-0.125000
), new Point3D(-0.859375,0.382812,
zOff+0.382812
), new Point3D(-0.773438,0.437500,
zOff+0.265625
));
object[963] = new Triangle(new Point3D(-0.773438,0.437500,
zOff+0.265625
), new Point3D(-0.640625,0.429688,
zOff-0.007812
), new Point3D(-0.789062,0.328125,
zOff-0.125000
));
object[964] = new Triangle(new Point3D(0.593750,0.164062,
zOff-0.125000
), new Point3D(0.640625,0.429688,
zOff-0.007812
), new Point3D(0.789062,0.328125,
zOff-0.125000
));
object[965] = new Triangle(new Point3D(0.789062,0.328125,
zOff-0.125000
), new Point3D(0.773438,0.125000,
zOff-0.140625
), new Point3D(0.593750,0.164062,
zOff-0.125000
));
object[966] = new Triangle(new Point3D(-0.789062,0.328125,
zOff-0.125000
), new Point3D(-0.640625,0.429688,
zOff-0.007812
), new Point3D(-0.593750,0.164062,
zOff-0.125000
));
object[967] = new Triangle(new Point3D(-0.593750,0.164062,
zOff-0.125000
), new Point3D(-0.773438,0.125000,
zOff-0.140625
), new Point3D(-0.789062,0.328125,
zOff-0.125000
));
return object; });
