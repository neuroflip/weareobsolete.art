define(["Util", "Triangle", "Point3D"], function(Util, Triangle, Point3D) {
var object = Util.createArray(11), cubeWidth = 50.0, zOff = Util.zOff;
object[0] = new Triangle(new Point3D(-50.043491,-48.483818,
zOff+0.870998
), new Point3D(-38.932381,-48.483818,
zOff+0.870998
), new Point3D(-38.932381,-37.372707,
zOff+0.870998
));
object[1] = new Triangle(new Point3D(-38.932381,-37.372707,
zOff+0.870998
), new Point3D(-50.043491,-37.372707,
zOff+0.870998
), new Point3D(-50.043491,-48.483818,
zOff+0.870998
));
object[2] = new Triangle(new Point3D(-38.932381,-48.483818,
zOff+0.870998
), new Point3D(-27.821272,-48.483818,
zOff+0.870998
), new Point3D(-27.821272,-37.372707,
zOff+0.870998
));
object[3] = new Triangle(new Point3D(-27.821272,-37.372707,
zOff+0.870998
), new Point3D(-38.932381,-37.372707,
zOff+0.870998
), new Point3D(-38.932381,-48.483818,
zOff+0.870998
));
object[4] = new Triangle(new Point3D(-27.821272,-48.483818,
zOff+0.870998
), new Point3D(-16.710159,-48.483818,
zOff+0.870998
), new Point3D(-16.710159,-37.372707,
zOff+0.870998
));
object[5] = new Triangle(new Point3D(-16.710159,-37.372707,
zOff+0.870998
), new Point3D(-27.821272,-37.372707,
zOff+0.870998
), new Point3D(-27.821272,-48.483818,
zOff+0.870998
));
object[6] = new Triangle(new Point3D(-16.710159,-48.483818,
zOff+0.870998
), new Point3D(-5.599049,-48.483818,
zOff+0.870998
), new Point3D(-5.599049,-37.372707,
zOff+0.870998
));
object[7] = new Triangle(new Point3D(-5.599049,-37.372707,
zOff+0.870998
), new Point3D(-16.710159,-37.372707,
zOff+0.870998
), new Point3D(-16.710159,-48.483818,
zOff+0.870998
));
object[8] = new Triangle(new Point3D(-5.599049,-48.483818,
zOff+0.870998
), new Point3D(5.512065,-48.483818,
zOff+0.870998
), new Point3D(5.512065,-37.372707,
zOff+0.870998
));
object[9] = new Triangle(new Point3D(5.512065,-37.372707,
zOff+0.870998
), new Point3D(-5.599049,-37.372707,
zOff+0.870998
), new Point3D(-5.599049,-48.483818,
zOff+0.870998
));
object[10] = new Triangle(new Point3D(5.512065,-48.483818,
zOff+0.870998
), new Point3D(16.623175,-48.483818,
zOff+0.870998
), new Point3D(16.623175,-37.372707,
zOff+0.870998
));
object[11] = new Triangle(new Point3D(16.623175,-37.372707,
zOff+0.870998
), new Point3D(5.512065,-37.372707,
zOff+0.870998
), new Point3D(5.512065,-48.483818,
zOff+0.870998
));
object[12] = new Triangle(new Point3D(16.623175,-48.483818,
zOff+0.870998
), new Point3D(27.734285,-48.483818,
zOff+0.870998
), new Point3D(27.734285,-37.372707,
zOff+0.870998
));
object[13] = new Triangle(new Point3D(27.734285,-37.372707,
zOff+0.870998
), new Point3D(16.623175,-37.372707,
zOff+0.870998
), new Point3D(16.623175,-48.483818,
zOff+0.870998
));
object[14] = new Triangle(new Point3D(27.734285,-48.483818,
zOff+0.870998
), new Point3D(38.845398,-48.483818,
zOff+0.870998
), new Point3D(38.845398,-37.372707,
zOff+0.870998
));
object[15] = new Triangle(new Point3D(38.845398,-37.372707,
zOff+0.870998
), new Point3D(27.734285,-37.372707,
zOff+0.870998
), new Point3D(27.734285,-48.483818,
zOff+0.870998
));
object[16] = new Triangle(new Point3D(38.845398,-48.483818,
zOff+0.870998
), new Point3D(49.956509,-48.483818,
zOff+0.870998
), new Point3D(49.956509,-37.372707,
zOff+0.870998
));
object[17] = new Triangle(new Point3D(49.956509,-37.372707,
zOff+0.870998
), new Point3D(38.845398,-37.372707,
zOff+0.870998
), new Point3D(38.845398,-48.483818,
zOff+0.870998
));
object[18] = new Triangle(new Point3D(-50.043491,-37.372707,
zOff+0.870998
), new Point3D(-38.932381,-37.372707,
zOff+0.870998
), new Point3D(-38.932381,-26.261597,
zOff+0.870998
));
object[19] = new Triangle(new Point3D(-38.932381,-26.261597,
zOff+0.870998
), new Point3D(-50.043491,-26.261597,
zOff+0.870998
), new Point3D(-50.043491,-37.372707,
zOff+0.870998
));
object[20] = new Triangle(new Point3D(-38.932381,-37.372707,
zOff+0.870998
), new Point3D(-27.821272,-37.372707,
zOff+0.870998
), new Point3D(-27.821272,-26.261597,
zOff+0.870998
));
object[21] = new Triangle(new Point3D(-27.821272,-26.261597,
zOff+0.870998
), new Point3D(-38.932381,-26.261597,
zOff+0.870998
), new Point3D(-38.932381,-37.372707,
zOff+0.870998
));
object[22] = new Triangle(new Point3D(-27.821272,-37.372707,
zOff+0.870998
), new Point3D(-16.710159,-37.372707,
zOff+0.870998
), new Point3D(-16.710159,-26.261597,
zOff+0.870998
));
object[23] = new Triangle(new Point3D(-16.710159,-26.261597,
zOff+0.870998
), new Point3D(-27.821272,-26.261597,
zOff+0.870998
), new Point3D(-27.821272,-37.372707,
zOff+0.870998
));
object[24] = new Triangle(new Point3D(-16.710159,-37.372707,
zOff+0.870998
), new Point3D(-5.599049,-37.372707,
zOff+0.870998
), new Point3D(-5.599049,-26.261597,
zOff+0.870998
));
object[25] = new Triangle(new Point3D(-5.599049,-26.261597,
zOff+0.870998
), new Point3D(-16.710159,-26.261597,
zOff+0.870998
), new Point3D(-16.710159,-37.372707,
zOff+0.870998
));
object[26] = new Triangle(new Point3D(-5.599049,-37.372707,
zOff+0.870998
), new Point3D(5.512065,-37.372707,
zOff+0.870998
), new Point3D(5.512065,-26.261597,
zOff+0.870998
));
object[27] = new Triangle(new Point3D(5.512065,-26.261597,
zOff+0.870998
), new Point3D(-5.599049,-26.261597,
zOff+0.870998
), new Point3D(-5.599049,-37.372707,
zOff+0.870998
));
object[28] = new Triangle(new Point3D(5.512065,-37.372707,
zOff+0.870998
), new Point3D(16.623175,-37.372707,
zOff+0.870998
), new Point3D(16.623175,-26.261597,
zOff+0.870998
));
object[29] = new Triangle(new Point3D(16.623175,-26.261597,
zOff+0.870998
), new Point3D(5.512065,-26.261597,
zOff+0.870998
), new Point3D(5.512065,-37.372707,
zOff+0.870998
));
object[30] = new Triangle(new Point3D(16.623175,-37.372707,
zOff+0.870998
), new Point3D(27.734285,-37.372707,
zOff+0.870998
), new Point3D(27.734285,-26.261597,
zOff+0.870998
));
object[31] = new Triangle(new Point3D(27.734285,-26.261597,
zOff+0.870998
), new Point3D(16.623175,-26.261597,
zOff+0.870998
), new Point3D(16.623175,-37.372707,
zOff+0.870998
));
object[32] = new Triangle(new Point3D(27.734285,-37.372707,
zOff+0.870998
), new Point3D(38.845398,-37.372707,
zOff+0.870998
), new Point3D(38.845398,-26.261597,
zOff+0.870998
));
object[33] = new Triangle(new Point3D(38.845398,-26.261597,
zOff+0.870998
), new Point3D(27.734285,-26.261597,
zOff+0.870998
), new Point3D(27.734285,-37.372707,
zOff+0.870998
));
object[34] = new Triangle(new Point3D(38.845398,-37.372707,
zOff+0.870998
), new Point3D(49.956509,-37.372707,
zOff+0.870998
), new Point3D(49.956509,-26.261597,
zOff+0.870998
));
object[35] = new Triangle(new Point3D(49.956509,-26.261597,
zOff+0.870998
), new Point3D(38.845398,-26.261597,
zOff+0.870998
), new Point3D(38.845398,-37.372707,
zOff+0.870998
));
object[36] = new Triangle(new Point3D(-50.043491,-26.261597,
zOff+0.870998
), new Point3D(-38.932381,-26.261597,
zOff+0.870998
), new Point3D(-38.932381,-15.150485,
zOff+0.870998
));
object[37] = new Triangle(new Point3D(-38.932381,-15.150485,
zOff+0.870998
), new Point3D(-50.043491,-15.150485,
zOff+0.870998
), new Point3D(-50.043491,-26.261597,
zOff+0.870998
));
object[38] = new Triangle(new Point3D(-38.932381,-26.261597,
zOff+0.870998
), new Point3D(-27.821272,-26.261597,
zOff+0.870998
), new Point3D(-27.821272,-15.150485,
zOff+0.870998
));
object[39] = new Triangle(new Point3D(-27.821272,-15.150485,
zOff+0.870998
), new Point3D(-38.932381,-15.150485,
zOff+0.870998
), new Point3D(-38.932381,-26.261597,
zOff+0.870998
));
object[40] = new Triangle(new Point3D(-27.821272,-26.261597,
zOff+0.870998
), new Point3D(-16.710159,-26.261597,
zOff+0.870998
), new Point3D(-16.710159,-15.150485,
zOff+0.870998
));
object[41] = new Triangle(new Point3D(-16.710159,-15.150485,
zOff+0.870998
), new Point3D(-27.821272,-15.150485,
zOff+0.870998
), new Point3D(-27.821272,-26.261597,
zOff+0.870998
));
object[42] = new Triangle(new Point3D(-16.710159,-26.261597,
zOff+0.870998
), new Point3D(-5.599049,-26.261597,
zOff+0.870998
), new Point3D(-5.599049,-15.150485,
zOff+0.870998
));
object[43] = new Triangle(new Point3D(-5.599049,-15.150485,
zOff+0.870998
), new Point3D(-16.710159,-15.150485,
zOff+0.870998
), new Point3D(-16.710159,-26.261597,
zOff+0.870998
));
object[44] = new Triangle(new Point3D(-5.599049,-26.261597,
zOff+0.870998
), new Point3D(5.512065,-26.261597,
zOff+0.870998
), new Point3D(5.512065,-15.150485,
zOff+0.870998
));
object[45] = new Triangle(new Point3D(5.512065,-15.150485,
zOff+0.870998
), new Point3D(-5.599049,-15.150485,
zOff+0.870998
), new Point3D(-5.599049,-26.261597,
zOff+0.870998
));
object[46] = new Triangle(new Point3D(5.512065,-26.261597,
zOff+0.870998
), new Point3D(16.623175,-26.261597,
zOff+0.870998
), new Point3D(16.623175,-15.150485,
zOff+0.870998
));
object[47] = new Triangle(new Point3D(16.623175,-15.150485,
zOff+0.870998
), new Point3D(5.512065,-15.150485,
zOff+0.870998
), new Point3D(5.512065,-26.261597,
zOff+0.870998
));
object[48] = new Triangle(new Point3D(16.623175,-26.261597,
zOff+0.870998
), new Point3D(27.734285,-26.261597,
zOff+0.870998
), new Point3D(27.734285,-15.150485,
zOff+0.870998
));
object[49] = new Triangle(new Point3D(27.734285,-15.150485,
zOff+0.870998
), new Point3D(16.623175,-15.150485,
zOff+0.870998
), new Point3D(16.623175,-26.261597,
zOff+0.870998
));
object[50] = new Triangle(new Point3D(27.734285,-26.261597,
zOff+0.870998
), new Point3D(38.845398,-26.261597,
zOff+0.870998
), new Point3D(38.845398,-15.150485,
zOff+0.870998
));
object[51] = new Triangle(new Point3D(38.845398,-15.150485,
zOff+0.870998
), new Point3D(27.734285,-15.150485,
zOff+0.870998
), new Point3D(27.734285,-26.261597,
zOff+0.870998
));
object[52] = new Triangle(new Point3D(38.845398,-26.261597,
zOff+0.870998
), new Point3D(49.956509,-26.261597,
zOff+0.870998
), new Point3D(49.956509,-15.150485,
zOff+0.870998
));
object[53] = new Triangle(new Point3D(49.956509,-15.150485,
zOff+0.870998
), new Point3D(38.845398,-15.150485,
zOff+0.870998
), new Point3D(38.845398,-26.261597,
zOff+0.870998
));
object[54] = new Triangle(new Point3D(-50.043491,-15.150485,
zOff+0.870998
), new Point3D(-38.932381,-15.150485,
zOff+0.870998
), new Point3D(-38.932381,-4.039374,
zOff+0.870998
));
object[55] = new Triangle(new Point3D(-38.932381,-4.039374,
zOff+0.870998
), new Point3D(-50.043491,-4.039374,
zOff+0.870998
), new Point3D(-50.043491,-15.150485,
zOff+0.870998
));
object[56] = new Triangle(new Point3D(-38.932381,-15.150485,
zOff+0.870998
), new Point3D(-27.821272,-15.150485,
zOff+0.870998
), new Point3D(-27.821272,-4.039374,
zOff+0.870998
));
object[57] = new Triangle(new Point3D(-27.821272,-4.039374,
zOff+0.870998
), new Point3D(-38.932381,-4.039374,
zOff+0.870998
), new Point3D(-38.932381,-15.150485,
zOff+0.870998
));
object[58] = new Triangle(new Point3D(-27.821272,-15.150485,
zOff+0.870998
), new Point3D(-16.710159,-15.150485,
zOff+0.870998
), new Point3D(-16.710159,-4.039374,
zOff+0.870998
));
object[59] = new Triangle(new Point3D(-16.710159,-4.039374,
zOff+0.870998
), new Point3D(-27.821272,-4.039374,
zOff+0.870998
), new Point3D(-27.821272,-15.150485,
zOff+0.870998
));
object[60] = new Triangle(new Point3D(-16.710159,-15.150485,
zOff+0.870998
), new Point3D(-5.599049,-15.150485,
zOff+0.870998
), new Point3D(-5.599049,-4.039374,
zOff+0.870998
));
object[61] = new Triangle(new Point3D(-5.599049,-4.039374,
zOff+0.870998
), new Point3D(-16.710159,-4.039374,
zOff+0.870998
), new Point3D(-16.710159,-15.150485,
zOff+0.870998
));
object[62] = new Triangle(new Point3D(-5.599049,-15.150485,
zOff+0.870998
), new Point3D(5.512065,-15.150485,
zOff+0.870998
), new Point3D(5.512065,-4.039374,
zOff+0.870998
));
object[63] = new Triangle(new Point3D(5.512065,-4.039374,
zOff+0.870998
), new Point3D(-5.599049,-4.039374,
zOff+0.870998
), new Point3D(-5.599049,-15.150485,
zOff+0.870998
));
object[64] = new Triangle(new Point3D(5.512065,-15.150485,
zOff+0.870998
), new Point3D(16.623175,-15.150485,
zOff+0.870998
), new Point3D(16.623175,-4.039374,
zOff+0.870998
));
object[65] = new Triangle(new Point3D(16.623175,-4.039374,
zOff+0.870998
), new Point3D(5.512065,-4.039374,
zOff+0.870998
), new Point3D(5.512065,-15.150485,
zOff+0.870998
));
object[66] = new Triangle(new Point3D(16.623175,-15.150485,
zOff+0.870998
), new Point3D(27.734285,-15.150485,
zOff+0.870998
), new Point3D(27.734285,-4.039374,
zOff+0.870998
));
object[67] = new Triangle(new Point3D(27.734285,-4.039374,
zOff+0.870998
), new Point3D(16.623175,-4.039374,
zOff+0.870998
), new Point3D(16.623175,-15.150485,
zOff+0.870998
));
object[68] = new Triangle(new Point3D(27.734285,-15.150485,
zOff+0.870998
), new Point3D(38.845398,-15.150485,
zOff+0.870998
), new Point3D(38.845398,-4.039374,
zOff+0.870998
));
object[69] = new Triangle(new Point3D(38.845398,-4.039374,
zOff+0.870998
), new Point3D(27.734285,-4.039374,
zOff+0.870998
), new Point3D(27.734285,-15.150485,
zOff+0.870998
));
object[70] = new Triangle(new Point3D(38.845398,-15.150485,
zOff+0.870998
), new Point3D(49.956509,-15.150485,
zOff+0.870998
), new Point3D(49.956509,-4.039374,
zOff+0.870998
));
object[71] = new Triangle(new Point3D(49.956509,-4.039374,
zOff+0.870998
), new Point3D(38.845398,-4.039374,
zOff+0.870998
), new Point3D(38.845398,-15.150485,
zOff+0.870998
));
object[72] = new Triangle(new Point3D(-50.043491,-4.039374,
zOff+0.870998
), new Point3D(-38.932381,-4.039374,
zOff+0.870998
), new Point3D(-38.932381,7.071739,
zOff+0.870998
));
object[73] = new Triangle(new Point3D(-38.932381,7.071739,
zOff+0.870998
), new Point3D(-50.043491,7.071739,
zOff+0.870998
), new Point3D(-50.043491,-4.039374,
zOff+0.870998
));
object[74] = new Triangle(new Point3D(-38.932381,-4.039374,
zOff+0.870998
), new Point3D(-27.821272,-4.039374,
zOff+0.870998
), new Point3D(-27.821272,7.071739,
zOff+0.870998
));
object[75] = new Triangle(new Point3D(-27.821272,7.071739,
zOff+0.870998
), new Point3D(-38.932381,7.071739,
zOff+0.870998
), new Point3D(-38.932381,-4.039374,
zOff+0.870998
));
object[76] = new Triangle(new Point3D(-27.821272,-4.039374,
zOff+0.870998
), new Point3D(-16.710159,-4.039374,
zOff+0.870998
), new Point3D(-16.710159,7.071739,
zOff+0.870998
));
object[77] = new Triangle(new Point3D(-16.710159,7.071739,
zOff+0.870998
), new Point3D(-27.821272,7.071739,
zOff+0.870998
), new Point3D(-27.821272,-4.039374,
zOff+0.870998
));
object[78] = new Triangle(new Point3D(-16.710159,-4.039374,
zOff+0.870998
), new Point3D(-5.599049,-4.039374,
zOff+0.870998
), new Point3D(-5.599049,7.071739,
zOff+0.870998
));
object[79] = new Triangle(new Point3D(-5.599049,7.071739,
zOff+0.870998
), new Point3D(-16.710159,7.071739,
zOff+0.870998
), new Point3D(-16.710159,-4.039374,
zOff+0.870998
));
object[80] = new Triangle(new Point3D(-5.599049,-4.039374,
zOff+0.870998
), new Point3D(5.512065,-4.039374,
zOff+0.870998
), new Point3D(5.512065,7.071739,
zOff+0.870998
));
object[81] = new Triangle(new Point3D(5.512065,7.071739,
zOff+0.870998
), new Point3D(-5.599049,7.071739,
zOff+0.870998
), new Point3D(-5.599049,-4.039374,
zOff+0.870998
));
object[82] = new Triangle(new Point3D(5.512065,-4.039374,
zOff+0.870998
), new Point3D(16.623175,-4.039374,
zOff+0.870998
), new Point3D(16.623175,7.071739,
zOff+0.870998
));
object[83] = new Triangle(new Point3D(16.623175,7.071739,
zOff+0.870998
), new Point3D(5.512065,7.071739,
zOff+0.870998
), new Point3D(5.512065,-4.039374,
zOff+0.870998
));
object[84] = new Triangle(new Point3D(16.623175,-4.039374,
zOff+0.870998
), new Point3D(27.734285,-4.039374,
zOff+0.870998
), new Point3D(27.734285,7.071739,
zOff+0.870998
));
object[85] = new Triangle(new Point3D(27.734285,7.071739,
zOff+0.870998
), new Point3D(16.623175,7.071739,
zOff+0.870998
), new Point3D(16.623175,-4.039374,
zOff+0.870998
));
object[86] = new Triangle(new Point3D(27.734285,-4.039374,
zOff+0.870998
), new Point3D(38.845398,-4.039374,
zOff+0.870998
), new Point3D(38.845398,7.071739,
zOff+0.870998
));
object[87] = new Triangle(new Point3D(38.845398,7.071739,
zOff+0.870998
), new Point3D(27.734285,7.071739,
zOff+0.870998
), new Point3D(27.734285,-4.039374,
zOff+0.870998
));
object[88] = new Triangle(new Point3D(38.845398,-4.039374,
zOff+0.870998
), new Point3D(49.956509,-4.039374,
zOff+0.870998
), new Point3D(49.956509,7.071739,
zOff+0.870998
));
object[89] = new Triangle(new Point3D(49.956509,7.071739,
zOff+0.870998
), new Point3D(38.845398,7.071739,
zOff+0.870998
), new Point3D(38.845398,-4.039374,
zOff+0.870998
));
object[90] = new Triangle(new Point3D(-50.043491,7.071739,
zOff+0.870998
), new Point3D(-38.932381,7.071739,
zOff+0.870998
), new Point3D(-38.932381,18.182850,
zOff+0.870998
));
object[91] = new Triangle(new Point3D(-38.932381,18.182850,
zOff+0.870998
), new Point3D(-50.043491,18.182850,
zOff+0.870998
), new Point3D(-50.043491,7.071739,
zOff+0.870998
));
object[92] = new Triangle(new Point3D(-38.932381,7.071739,
zOff+0.870998
), new Point3D(-27.821272,7.071739,
zOff+0.870998
), new Point3D(-27.821272,18.182850,
zOff+0.870998
));
object[93] = new Triangle(new Point3D(-27.821272,18.182850,
zOff+0.870998
), new Point3D(-38.932381,18.182850,
zOff+0.870998
), new Point3D(-38.932381,7.071739,
zOff+0.870998
));
object[94] = new Triangle(new Point3D(-27.821272,7.071739,
zOff+0.870998
), new Point3D(-16.710159,7.071739,
zOff+0.870998
), new Point3D(-16.710159,18.182850,
zOff+0.870998
));
object[95] = new Triangle(new Point3D(-16.710159,18.182850,
zOff+0.870998
), new Point3D(-27.821272,18.182850,
zOff+0.870998
), new Point3D(-27.821272,7.071739,
zOff+0.870998
));
object[96] = new Triangle(new Point3D(-16.710159,7.071739,
zOff+0.870998
), new Point3D(-5.599049,7.071739,
zOff+0.870998
), new Point3D(-5.599049,18.182850,
zOff+0.870998
));
object[97] = new Triangle(new Point3D(-5.599049,18.182850,
zOff+0.870998
), new Point3D(-16.710159,18.182850,
zOff+0.870998
), new Point3D(-16.710159,7.071739,
zOff+0.870998
));
object[98] = new Triangle(new Point3D(-5.599049,7.071739,
zOff+0.870998
), new Point3D(5.512065,7.071739,
zOff+0.870998
), new Point3D(5.512065,18.182850,
zOff+0.870998
));
object[99] = new Triangle(new Point3D(5.512065,18.182850,
zOff+0.870998
), new Point3D(-5.599049,18.182850,
zOff+0.870998
), new Point3D(-5.599049,7.071739,
zOff+0.870998
));
object[100] = new Triangle(new Point3D(5.512065,7.071739,
zOff+0.870998
), new Point3D(16.623175,7.071739,
zOff+0.870998
), new Point3D(16.623175,18.182850,
zOff+0.870998
));
object[101] = new Triangle(new Point3D(16.623175,18.182850,
zOff+0.870998
), new Point3D(5.512065,18.182850,
zOff+0.870998
), new Point3D(5.512065,7.071739,
zOff+0.870998
));
object[102] = new Triangle(new Point3D(16.623175,7.071739,
zOff+0.870998
), new Point3D(27.734285,7.071739,
zOff+0.870998
), new Point3D(27.734285,18.182850,
zOff+0.870998
));
object[103] = new Triangle(new Point3D(27.734285,18.182850,
zOff+0.870998
), new Point3D(16.623175,18.182850,
zOff+0.870998
), new Point3D(16.623175,7.071739,
zOff+0.870998
));
object[104] = new Triangle(new Point3D(27.734285,7.071739,
zOff+0.870998
), new Point3D(38.845398,7.071739,
zOff+0.870998
), new Point3D(38.845398,18.182850,
zOff+0.870998
));
object[105] = new Triangle(new Point3D(38.845398,18.182850,
zOff+0.870998
), new Point3D(27.734285,18.182850,
zOff+0.870998
), new Point3D(27.734285,7.071739,
zOff+0.870998
));
object[106] = new Triangle(new Point3D(38.845398,7.071739,
zOff+0.870998
), new Point3D(49.956509,7.071739,
zOff+0.870998
), new Point3D(49.956509,18.182850,
zOff+0.870998
));
object[107] = new Triangle(new Point3D(49.956509,18.182850,
zOff+0.870998
), new Point3D(38.845398,18.182850,
zOff+0.870998
), new Point3D(38.845398,7.071739,
zOff+0.870998
));
object[108] = new Triangle(new Point3D(-50.043491,18.182850,
zOff+0.870998
), new Point3D(-38.932381,18.182850,
zOff+0.870998
), new Point3D(-38.932381,29.293961,
zOff+0.870998
));
object[109] = new Triangle(new Point3D(-38.932381,29.293961,
zOff+0.870998
), new Point3D(-50.043491,29.293961,
zOff+0.870998
), new Point3D(-50.043491,18.182850,
zOff+0.870998
));
object[110] = new Triangle(new Point3D(-38.932381,18.182850,
zOff+0.870998
), new Point3D(-27.821272,18.182850,
zOff+0.870998
), new Point3D(-27.821272,29.293961,
zOff+0.870998
));
object[111] = new Triangle(new Point3D(-27.821272,29.293961,
zOff+0.870998
), new Point3D(-38.932381,29.293961,
zOff+0.870998
), new Point3D(-38.932381,18.182850,
zOff+0.870998
));
object[112] = new Triangle(new Point3D(-27.821272,18.182850,
zOff+0.870998
), new Point3D(-16.710159,18.182850,
zOff+0.870998
), new Point3D(-16.710159,29.293961,
zOff+0.870998
));
object[113] = new Triangle(new Point3D(-16.710159,29.293961,
zOff+0.870998
), new Point3D(-27.821272,29.293961,
zOff+0.870998
), new Point3D(-27.821272,18.182850,
zOff+0.870998
));
object[114] = new Triangle(new Point3D(-16.710159,18.182850,
zOff+0.870998
), new Point3D(-5.599049,18.182850,
zOff+0.870998
), new Point3D(-5.599049,29.293961,
zOff+0.870998
));
object[115] = new Triangle(new Point3D(-5.599049,29.293961,
zOff+0.870998
), new Point3D(-16.710159,29.293961,
zOff+0.870998
), new Point3D(-16.710159,18.182850,
zOff+0.870998
));
object[116] = new Triangle(new Point3D(-5.599049,18.182850,
zOff+0.870998
), new Point3D(5.512065,18.182850,
zOff+0.870998
), new Point3D(5.512065,29.293961,
zOff+0.870998
));
object[117] = new Triangle(new Point3D(5.512065,29.293961,
zOff+0.870998
), new Point3D(-5.599049,29.293961,
zOff+0.870998
), new Point3D(-5.599049,18.182850,
zOff+0.870998
));
object[118] = new Triangle(new Point3D(5.512065,18.182850,
zOff+0.870998
), new Point3D(16.623175,18.182850,
zOff+0.870998
), new Point3D(16.623175,29.293961,
zOff+0.870998
));
object[119] = new Triangle(new Point3D(16.623175,29.293961,
zOff+0.870998
), new Point3D(5.512065,29.293961,
zOff+0.870998
), new Point3D(5.512065,18.182850,
zOff+0.870998
));
object[120] = new Triangle(new Point3D(16.623175,18.182850,
zOff+0.870998
), new Point3D(27.734285,18.182850,
zOff+0.870998
), new Point3D(27.734285,29.293961,
zOff+0.870998
));
object[121] = new Triangle(new Point3D(27.734285,29.293961,
zOff+0.870998
), new Point3D(16.623175,29.293961,
zOff+0.870998
), new Point3D(16.623175,18.182850,
zOff+0.870998
));
object[122] = new Triangle(new Point3D(27.734285,18.182850,
zOff+0.870998
), new Point3D(38.845398,18.182850,
zOff+0.870998
), new Point3D(38.845398,29.293961,
zOff+0.870998
));
object[123] = new Triangle(new Point3D(38.845398,29.293961,
zOff+0.870998
), new Point3D(27.734285,29.293961,
zOff+0.870998
), new Point3D(27.734285,18.182850,
zOff+0.870998
));
object[124] = new Triangle(new Point3D(38.845398,18.182850,
zOff+0.870998
), new Point3D(49.956509,18.182850,
zOff+0.870998
), new Point3D(49.956509,29.293961,
zOff+0.870998
));
object[125] = new Triangle(new Point3D(49.956509,29.293961,
zOff+0.870998
), new Point3D(38.845398,29.293961,
zOff+0.870998
), new Point3D(38.845398,18.182850,
zOff+0.870998
));
object[126] = new Triangle(new Point3D(-50.043491,29.293961,
zOff+0.870998
), new Point3D(-38.932381,29.293961,
zOff+0.870998
), new Point3D(-38.932381,40.405071,
zOff+0.870998
));
object[127] = new Triangle(new Point3D(-38.932381,40.405071,
zOff+0.870998
), new Point3D(-50.043491,40.405071,
zOff+0.870998
), new Point3D(-50.043491,29.293961,
zOff+0.870998
));
object[128] = new Triangle(new Point3D(-38.932381,29.293961,
zOff+0.870998
), new Point3D(-27.821272,29.293961,
zOff+0.870998
), new Point3D(-27.821272,40.405071,
zOff+0.870998
));
object[129] = new Triangle(new Point3D(-27.821272,40.405071,
zOff+0.870998
), new Point3D(-38.932381,40.405071,
zOff+0.870998
), new Point3D(-38.932381,29.293961,
zOff+0.870998
));
object[130] = new Triangle(new Point3D(-27.821272,29.293961,
zOff+0.870998
), new Point3D(-16.710159,29.293961,
zOff+0.870998
), new Point3D(-16.710159,40.405071,
zOff+0.870998
));
object[131] = new Triangle(new Point3D(-16.710159,40.405071,
zOff+0.870998
), new Point3D(-27.821272,40.405071,
zOff+0.870998
), new Point3D(-27.821272,29.293961,
zOff+0.870998
));
object[132] = new Triangle(new Point3D(-16.710159,29.293961,
zOff+0.870998
), new Point3D(-5.599049,29.293961,
zOff+0.870998
), new Point3D(-5.599049,40.405071,
zOff+0.870998
));
object[133] = new Triangle(new Point3D(-5.599049,40.405071,
zOff+0.870998
), new Point3D(-16.710159,40.405071,
zOff+0.870998
), new Point3D(-16.710159,29.293961,
zOff+0.870998
));
object[134] = new Triangle(new Point3D(-5.599049,29.293961,
zOff+0.870998
), new Point3D(5.512065,29.293961,
zOff+0.870998
), new Point3D(5.512065,40.405071,
zOff+0.870998
));
object[135] = new Triangle(new Point3D(5.512065,40.405071,
zOff+0.870998
), new Point3D(-5.599049,40.405071,
zOff+0.870998
), new Point3D(-5.599049,29.293961,
zOff+0.870998
));
object[136] = new Triangle(new Point3D(5.512065,29.293961,
zOff+0.870998
), new Point3D(16.623175,29.293961,
zOff+0.870998
), new Point3D(16.623175,40.405071,
zOff+0.870998
));
object[137] = new Triangle(new Point3D(16.623175,40.405071,
zOff+0.870998
), new Point3D(5.512065,40.405071,
zOff+0.870998
), new Point3D(5.512065,29.293961,
zOff+0.870998
));
object[138] = new Triangle(new Point3D(16.623175,29.293961,
zOff+0.870998
), new Point3D(27.734285,29.293961,
zOff+0.870998
), new Point3D(27.734285,40.405071,
zOff+0.870998
));
object[139] = new Triangle(new Point3D(27.734285,40.405071,
zOff+0.870998
), new Point3D(16.623175,40.405071,
zOff+0.870998
), new Point3D(16.623175,29.293961,
zOff+0.870998
));
object[140] = new Triangle(new Point3D(27.734285,29.293961,
zOff+0.870998
), new Point3D(38.845398,29.293961,
zOff+0.870998
), new Point3D(38.845398,40.405071,
zOff+0.870998
));
object[141] = new Triangle(new Point3D(38.845398,40.405071,
zOff+0.870998
), new Point3D(27.734285,40.405071,
zOff+0.870998
), new Point3D(27.734285,29.293961,
zOff+0.870998
));
object[142] = new Triangle(new Point3D(38.845398,29.293961,
zOff+0.870998
), new Point3D(49.956509,29.293961,
zOff+0.870998
), new Point3D(49.956509,40.405071,
zOff+0.870998
));
object[143] = new Triangle(new Point3D(49.956509,40.405071,
zOff+0.870998
), new Point3D(38.845398,40.405071,
zOff+0.870998
), new Point3D(38.845398,29.293961,
zOff+0.870998
));
object[144] = new Triangle(new Point3D(-50.043491,40.405071,
zOff+0.870998
), new Point3D(-38.932381,40.405071,
zOff+0.870998
), new Point3D(-38.932381,51.516182,
zOff+0.870998
));
object[145] = new Triangle(new Point3D(-38.932381,51.516182,
zOff+0.870998
), new Point3D(-50.043491,51.516182,
zOff+0.870998
), new Point3D(-50.043491,40.405071,
zOff+0.870998
));
object[146] = new Triangle(new Point3D(-38.932381,40.405071,
zOff+0.870998
), new Point3D(-27.821272,40.405071,
zOff+0.870998
), new Point3D(-27.821272,51.516182,
zOff+0.870998
));
object[147] = new Triangle(new Point3D(-27.821272,51.516182,
zOff+0.870998
), new Point3D(-38.932381,51.516182,
zOff+0.870998
), new Point3D(-38.932381,40.405071,
zOff+0.870998
));
object[148] = new Triangle(new Point3D(-27.821272,40.405071,
zOff+0.870998
), new Point3D(-16.710159,40.405071,
zOff+0.870998
), new Point3D(-16.710159,51.516182,
zOff+0.870998
));
object[149] = new Triangle(new Point3D(-16.710159,51.516182,
zOff+0.870998
), new Point3D(-27.821272,51.516182,
zOff+0.870998
), new Point3D(-27.821272,40.405071,
zOff+0.870998
));
object[150] = new Triangle(new Point3D(-16.710159,40.405071,
zOff+0.870998
), new Point3D(-5.599049,40.405071,
zOff+0.870998
), new Point3D(-5.599049,51.516182,
zOff+0.870998
));
object[151] = new Triangle(new Point3D(-5.599049,51.516182,
zOff+0.870998
), new Point3D(-16.710159,51.516182,
zOff+0.870998
), new Point3D(-16.710159,40.405071,
zOff+0.870998
));
object[152] = new Triangle(new Point3D(-5.599049,40.405071,
zOff+0.870998
), new Point3D(5.512065,40.405071,
zOff+0.870998
), new Point3D(5.512065,51.516182,
zOff+0.870998
));
object[153] = new Triangle(new Point3D(5.512065,51.516182,
zOff+0.870998
), new Point3D(-5.599049,51.516182,
zOff+0.870998
), new Point3D(-5.599049,40.405071,
zOff+0.870998
));
object[154] = new Triangle(new Point3D(5.512065,40.405071,
zOff+0.870998
), new Point3D(16.623175,40.405071,
zOff+0.870998
), new Point3D(16.623175,51.516182,
zOff+0.870998
));
object[155] = new Triangle(new Point3D(16.623175,51.516182,
zOff+0.870998
), new Point3D(5.512065,51.516182,
zOff+0.870998
), new Point3D(5.512065,40.405071,
zOff+0.870998
));
object[156] = new Triangle(new Point3D(16.623175,40.405071,
zOff+0.870998
), new Point3D(27.734285,40.405071,
zOff+0.870998
), new Point3D(27.734285,51.516182,
zOff+0.870998
));
object[157] = new Triangle(new Point3D(27.734285,51.516182,
zOff+0.870998
), new Point3D(16.623175,51.516182,
zOff+0.870998
), new Point3D(16.623175,40.405071,
zOff+0.870998
));
object[158] = new Triangle(new Point3D(27.734285,40.405071,
zOff+0.870998
), new Point3D(38.845398,40.405071,
zOff+0.870998
), new Point3D(38.845398,51.516182,
zOff+0.870998
));
object[159] = new Triangle(new Point3D(38.845398,51.516182,
zOff+0.870998
), new Point3D(27.734285,51.516182,
zOff+0.870998
), new Point3D(27.734285,40.405071,
zOff+0.870998
));
object[160] = new Triangle(new Point3D(38.845398,40.405071,
zOff+0.870998
), new Point3D(49.956509,40.405071,
zOff+0.870998
), new Point3D(49.956509,51.516182,
zOff+0.870998
));
object[161] = new Triangle(new Point3D(49.956509,51.516182,
zOff+0.870998
), new Point3D(38.845398,51.516182,
zOff+0.870998
), new Point3D(38.845398,40.405071,
zOff+0.870998
));
return object; });
