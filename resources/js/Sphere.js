define(["Util", "Triangle", "Point3D"], function(Util, Triangle, Point3D) {
var object = Util.createArray(11), cubeWidth = 50.0, zOff = Util.zOff;
object[0] = new Triangle(new Point3D(0.000000,0.000000,
zOff-1.000000
), new Point3D(0.425323,-0.309011,
zOff-0.850654
), new Point3D(-0.162456,-0.499995,
zOff-0.850654
));
object[1] = new Triangle(new Point3D(0.723607,-0.525725,
zOff-0.447220
), new Point3D(0.425323,-0.309011,
zOff-0.850654
), new Point3D(0.850648,0.000000,
zOff-0.525736
));
object[2] = new Triangle(new Point3D(0.000000,0.000000,
zOff-1.000000
), new Point3D(-0.162456,-0.499995,
zOff-0.850654
), new Point3D(-0.525730,0.000000,
zOff-0.850652
));
object[3] = new Triangle(new Point3D(0.000000,0.000000,
zOff-1.000000
), new Point3D(-0.525730,0.000000,
zOff-0.850652
), new Point3D(-0.162456,0.499995,
zOff-0.850654
));
object[4] = new Triangle(new Point3D(0.000000,0.000000,
zOff-1.000000
), new Point3D(-0.162456,0.499995,
zOff-0.850654
), new Point3D(0.425323,0.309011,
zOff-0.850654
));
object[5] = new Triangle(new Point3D(0.723607,-0.525725,
zOff-0.447220
), new Point3D(0.850648,0.000000,
zOff-0.525736
), new Point3D(0.951058,-0.309013,
zOff+0.000000
));
object[6] = new Triangle(new Point3D(-0.276388,-0.850649,
zOff-0.447220
), new Point3D(0.262869,-0.809012,
zOff-0.525738
), new Point3D(0.000000,-1.000000,
zOff+0.000000
));
object[7] = new Triangle(new Point3D(-0.894426,0.000000,
zOff-0.447216
), new Point3D(-0.688189,-0.499997,
zOff-0.525736
), new Point3D(-0.951058,-0.309013,
zOff+0.000000
));
object[8] = new Triangle(new Point3D(-0.276388,0.850649,
zOff-0.447220
), new Point3D(-0.688189,0.499997,
zOff-0.525736
), new Point3D(-0.587786,0.809017,
zOff+0.000000
));
object[9] = new Triangle(new Point3D(0.723607,0.525725,
zOff-0.447220
), new Point3D(0.262869,0.809012,
zOff-0.525738
), new Point3D(0.587786,0.809017,
zOff+0.000000
));
object[10] = new Triangle(new Point3D(0.723607,-0.525725,
zOff-0.447220
), new Point3D(0.951058,-0.309013,
zOff+0.000000
), new Point3D(0.587786,-0.809017,
zOff+0.000000
));
object[11] = new Triangle(new Point3D(-0.276388,-0.850649,
zOff-0.447220
), new Point3D(0.000000,-1.000000,
zOff+0.000000
), new Point3D(-0.587786,-0.809017,
zOff+0.000000
));
object[12] = new Triangle(new Point3D(-0.894426,0.000000,
zOff-0.447216
), new Point3D(-0.951058,-0.309013,
zOff+0.000000
), new Point3D(-0.951058,0.309013,
zOff+0.000000
));
object[13] = new Triangle(new Point3D(-0.276388,0.850649,
zOff-0.447220
), new Point3D(-0.587786,0.809017,
zOff+0.000000
), new Point3D(0.000000,1.000000,
zOff+0.000000
));
object[14] = new Triangle(new Point3D(0.723607,0.525725,
zOff-0.447220
), new Point3D(0.587786,0.809017,
zOff+0.000000
), new Point3D(0.951058,0.309013,
zOff+0.000000
));
object[15] = new Triangle(new Point3D(0.276388,-0.850649,
zOff+0.447220
), new Point3D(0.688189,-0.499997,
zOff+0.525736
), new Point3D(0.162456,-0.499995,
zOff+0.850654
));
object[16] = new Triangle(new Point3D(-0.723607,-0.525725,
zOff+0.447220
), new Point3D(-0.262869,-0.809012,
zOff+0.525738
), new Point3D(-0.425323,-0.309011,
zOff+0.850654
));
object[17] = new Triangle(new Point3D(-0.723607,0.525725,
zOff+0.447220
), new Point3D(-0.850648,0.000000,
zOff+0.525736
), new Point3D(-0.425323,0.309011,
zOff+0.850654
));
object[18] = new Triangle(new Point3D(0.276388,0.850649,
zOff+0.447220
), new Point3D(-0.262869,0.809012,
zOff+0.525738
), new Point3D(0.162456,0.499995,
zOff+0.850654
));
object[19] = new Triangle(new Point3D(0.894426,0.000000,
zOff+0.447216
), new Point3D(0.688189,0.499997,
zOff+0.525736
), new Point3D(0.525730,0.000000,
zOff+0.850652
));
object[20] = new Triangle(new Point3D(0.525730,0.000000,
zOff+0.850652
), new Point3D(0.162456,0.499995,
zOff+0.850654
), new Point3D(0.000000,0.000000,
zOff+1.000000
));
object[21] = new Triangle(new Point3D(0.525730,0.000000,
zOff+0.850652
), new Point3D(0.688189,0.499997,
zOff+0.525736
), new Point3D(0.162456,0.499995,
zOff+0.850654
));
object[22] = new Triangle(new Point3D(0.688189,0.499997,
zOff+0.525736
), new Point3D(0.276388,0.850649,
zOff+0.447220
), new Point3D(0.162456,0.499995,
zOff+0.850654
));
object[23] = new Triangle(new Point3D(0.162456,0.499995,
zOff+0.850654
), new Point3D(-0.425323,0.309011,
zOff+0.850654
), new Point3D(0.000000,0.000000,
zOff+1.000000
));
object[24] = new Triangle(new Point3D(0.162456,0.499995,
zOff+0.850654
), new Point3D(-0.262869,0.809012,
zOff+0.525738
), new Point3D(-0.425323,0.309011,
zOff+0.850654
));
object[25] = new Triangle(new Point3D(-0.262869,0.809012,
zOff+0.525738
), new Point3D(-0.723607,0.525725,
zOff+0.447220
), new Point3D(-0.425323,0.309011,
zOff+0.850654
));
object[26] = new Triangle(new Point3D(-0.425323,0.309011,
zOff+0.850654
), new Point3D(-0.425323,-0.309011,
zOff+0.850654
), new Point3D(0.000000,0.000000,
zOff+1.000000
));
object[27] = new Triangle(new Point3D(-0.425323,0.309011,
zOff+0.850654
), new Point3D(-0.850648,0.000000,
zOff+0.525736
), new Point3D(-0.425323,-0.309011,
zOff+0.850654
));
object[28] = new Triangle(new Point3D(-0.850648,0.000000,
zOff+0.525736
), new Point3D(-0.723607,-0.525725,
zOff+0.447220
), new Point3D(-0.425323,-0.309011,
zOff+0.850654
));
object[29] = new Triangle(new Point3D(-0.425323,-0.309011,
zOff+0.850654
), new Point3D(0.162456,-0.499995,
zOff+0.850654
), new Point3D(0.000000,0.000000,
zOff+1.000000
));
object[30] = new Triangle(new Point3D(-0.425323,-0.309011,
zOff+0.850654
), new Point3D(-0.262869,-0.809012,
zOff+0.525738
), new Point3D(0.162456,-0.499995,
zOff+0.850654
));
object[31] = new Triangle(new Point3D(-0.262869,-0.809012,
zOff+0.525738
), new Point3D(0.276388,-0.850649,
zOff+0.447220
), new Point3D(0.162456,-0.499995,
zOff+0.850654
));
object[32] = new Triangle(new Point3D(0.162456,-0.499995,
zOff+0.850654
), new Point3D(0.525730,0.000000,
zOff+0.850652
), new Point3D(0.000000,0.000000,
zOff+1.000000
));
object[33] = new Triangle(new Point3D(0.162456,-0.499995,
zOff+0.850654
), new Point3D(0.688189,-0.499997,
zOff+0.525736
), new Point3D(0.525730,0.000000,
zOff+0.850652
));
object[34] = new Triangle(new Point3D(0.688189,-0.499997,
zOff+0.525736
), new Point3D(0.894426,0.000000,
zOff+0.447216
), new Point3D(0.525730,0.000000,
zOff+0.850652
));
object[35] = new Triangle(new Point3D(0.951058,0.309013,
zOff+0.000000
), new Point3D(0.688189,0.499997,
zOff+0.525736
), new Point3D(0.894426,0.000000,
zOff+0.447216
));
object[36] = new Triangle(new Point3D(0.951058,0.309013,
zOff+0.000000
), new Point3D(0.587786,0.809017,
zOff+0.000000
), new Point3D(0.688189,0.499997,
zOff+0.525736
));
object[37] = new Triangle(new Point3D(0.587786,0.809017,
zOff+0.000000
), new Point3D(0.276388,0.850649,
zOff+0.447220
), new Point3D(0.688189,0.499997,
zOff+0.525736
));
object[38] = new Triangle(new Point3D(0.000000,1.000000,
zOff+0.000000
), new Point3D(-0.262869,0.809012,
zOff+0.525738
), new Point3D(0.276388,0.850649,
zOff+0.447220
));
object[39] = new Triangle(new Point3D(0.000000,1.000000,
zOff+0.000000
), new Point3D(-0.587786,0.809017,
zOff+0.000000
), new Point3D(-0.262869,0.809012,
zOff+0.525738
));
object[40] = new Triangle(new Point3D(-0.587786,0.809017,
zOff+0.000000
), new Point3D(-0.723607,0.525725,
zOff+0.447220
), new Point3D(-0.262869,0.809012,
zOff+0.525738
));
object[41] = new Triangle(new Point3D(-0.951058,0.309013,
zOff+0.000000
), new Point3D(-0.850648,0.000000,
zOff+0.525736
), new Point3D(-0.723607,0.525725,
zOff+0.447220
));
object[42] = new Triangle(new Point3D(-0.951058,0.309013,
zOff+0.000000
), new Point3D(-0.951058,-0.309013,
zOff+0.000000
), new Point3D(-0.850648,0.000000,
zOff+0.525736
));
object[43] = new Triangle(new Point3D(-0.951058,-0.309013,
zOff+0.000000
), new Point3D(-0.723607,-0.525725,
zOff+0.447220
), new Point3D(-0.850648,0.000000,
zOff+0.525736
));
object[44] = new Triangle(new Point3D(-0.587786,-0.809017,
zOff+0.000000
), new Point3D(-0.262869,-0.809012,
zOff+0.525738
), new Point3D(-0.723607,-0.525725,
zOff+0.447220
));
object[45] = new Triangle(new Point3D(-0.587786,-0.809017,
zOff+0.000000
), new Point3D(0.000000,-1.000000,
zOff+0.000000
), new Point3D(-0.262869,-0.809012,
zOff+0.525738
));
object[46] = new Triangle(new Point3D(0.000000,-1.000000,
zOff+0.000000
), new Point3D(0.276388,-0.850649,
zOff+0.447220
), new Point3D(-0.262869,-0.809012,
zOff+0.525738
));
object[47] = new Triangle(new Point3D(0.587786,-0.809017,
zOff+0.000000
), new Point3D(0.688189,-0.499997,
zOff+0.525736
), new Point3D(0.276388,-0.850649,
zOff+0.447220
));
object[48] = new Triangle(new Point3D(0.587786,-0.809017,
zOff+0.000000
), new Point3D(0.951058,-0.309013,
zOff+0.000000
), new Point3D(0.688189,-0.499997,
zOff+0.525736
));
object[49] = new Triangle(new Point3D(0.951058,-0.309013,
zOff+0.000000
), new Point3D(0.894426,0.000000,
zOff+0.447216
), new Point3D(0.688189,-0.499997,
zOff+0.525736
));
object[50] = new Triangle(new Point3D(0.587786,0.809017,
zOff+0.000000
), new Point3D(0.000000,1.000000,
zOff+0.000000
), new Point3D(0.276388,0.850649,
zOff+0.447220
));
object[51] = new Triangle(new Point3D(0.587786,0.809017,
zOff+0.000000
), new Point3D(0.262869,0.809012,
zOff-0.525738
), new Point3D(0.000000,1.000000,
zOff+0.000000
));
object[52] = new Triangle(new Point3D(0.262869,0.809012,
zOff-0.525738
), new Point3D(-0.276388,0.850649,
zOff-0.447220
), new Point3D(0.000000,1.000000,
zOff+0.000000
));
object[53] = new Triangle(new Point3D(-0.587786,0.809017,
zOff+0.000000
), new Point3D(-0.951058,0.309013,
zOff+0.000000
), new Point3D(-0.723607,0.525725,
zOff+0.447220
));
object[54] = new Triangle(new Point3D(-0.587786,0.809017,
zOff+0.000000
), new Point3D(-0.688189,0.499997,
zOff-0.525736
), new Point3D(-0.951058,0.309013,
zOff+0.000000
));
object[55] = new Triangle(new Point3D(-0.688189,0.499997,
zOff-0.525736
), new Point3D(-0.894426,0.000000,
zOff-0.447216
), new Point3D(-0.951058,0.309013,
zOff+0.000000
));
object[56] = new Triangle(new Point3D(-0.951058,-0.309013,
zOff+0.000000
), new Point3D(-0.587786,-0.809017,
zOff+0.000000
), new Point3D(-0.723607,-0.525725,
zOff+0.447220
));
object[57] = new Triangle(new Point3D(-0.951058,-0.309013,
zOff+0.000000
), new Point3D(-0.688189,-0.499997,
zOff-0.525736
), new Point3D(-0.587786,-0.809017,
zOff+0.000000
));
object[58] = new Triangle(new Point3D(-0.688189,-0.499997,
zOff-0.525736
), new Point3D(-0.276388,-0.850649,
zOff-0.447220
), new Point3D(-0.587786,-0.809017,
zOff+0.000000
));
object[59] = new Triangle(new Point3D(0.000000,-1.000000,
zOff+0.000000
), new Point3D(0.587786,-0.809017,
zOff+0.000000
), new Point3D(0.276388,-0.850649,
zOff+0.447220
));
object[60] = new Triangle(new Point3D(0.000000,-1.000000,
zOff+0.000000
), new Point3D(0.262869,-0.809012,
zOff-0.525738
), new Point3D(0.587786,-0.809017,
zOff+0.000000
));
object[61] = new Triangle(new Point3D(0.262869,-0.809012,
zOff-0.525738
), new Point3D(0.723607,-0.525725,
zOff-0.447220
), new Point3D(0.587786,-0.809017,
zOff+0.000000
));
object[62] = new Triangle(new Point3D(0.951058,-0.309013,
zOff+0.000000
), new Point3D(0.951058,0.309013,
zOff+0.000000
), new Point3D(0.894426,0.000000,
zOff+0.447216
));
object[63] = new Triangle(new Point3D(0.951058,-0.309013,
zOff+0.000000
), new Point3D(0.850648,0.000000,
zOff-0.525736
), new Point3D(0.951058,0.309013,
zOff+0.000000
));
object[64] = new Triangle(new Point3D(0.850648,0.000000,
zOff-0.525736
), new Point3D(0.723607,0.525725,
zOff-0.447220
), new Point3D(0.951058,0.309013,
zOff+0.000000
));
object[65] = new Triangle(new Point3D(0.425323,0.309011,
zOff-0.850654
), new Point3D(0.262869,0.809012,
zOff-0.525738
), new Point3D(0.723607,0.525725,
zOff-0.447220
));
object[66] = new Triangle(new Point3D(0.425323,0.309011,
zOff-0.850654
), new Point3D(-0.162456,0.499995,
zOff-0.850654
), new Point3D(0.262869,0.809012,
zOff-0.525738
));
object[67] = new Triangle(new Point3D(-0.162456,0.499995,
zOff-0.850654
), new Point3D(-0.276388,0.850649,
zOff-0.447220
), new Point3D(0.262869,0.809012,
zOff-0.525738
));
object[68] = new Triangle(new Point3D(-0.162456,0.499995,
zOff-0.850654
), new Point3D(-0.688189,0.499997,
zOff-0.525736
), new Point3D(-0.276388,0.850649,
zOff-0.447220
));
object[69] = new Triangle(new Point3D(-0.162456,0.499995,
zOff-0.850654
), new Point3D(-0.525730,0.000000,
zOff-0.850652
), new Point3D(-0.688189,0.499997,
zOff-0.525736
));
object[70] = new Triangle(new Point3D(-0.525730,0.000000,
zOff-0.850652
), new Point3D(-0.894426,0.000000,
zOff-0.447216
), new Point3D(-0.688189,0.499997,
zOff-0.525736
));
object[71] = new Triangle(new Point3D(-0.525730,0.000000,
zOff-0.850652
), new Point3D(-0.688189,-0.499997,
zOff-0.525736
), new Point3D(-0.894426,0.000000,
zOff-0.447216
));
object[72] = new Triangle(new Point3D(-0.525730,0.000000,
zOff-0.850652
), new Point3D(-0.162456,-0.499995,
zOff-0.850654
), new Point3D(-0.688189,-0.499997,
zOff-0.525736
));
object[73] = new Triangle(new Point3D(-0.162456,-0.499995,
zOff-0.850654
), new Point3D(-0.276388,-0.850649,
zOff-0.447220
), new Point3D(-0.688189,-0.499997,
zOff-0.525736
));
object[74] = new Triangle(new Point3D(0.850648,0.000000,
zOff-0.525736
), new Point3D(0.425323,0.309011,
zOff-0.850654
), new Point3D(0.723607,0.525725,
zOff-0.447220
));
object[75] = new Triangle(new Point3D(0.850648,0.000000,
zOff-0.525736
), new Point3D(0.425323,-0.309011,
zOff-0.850654
), new Point3D(0.425323,0.309011,
zOff-0.850654
));
object[76] = new Triangle(new Point3D(0.425323,-0.309011,
zOff-0.850654
), new Point3D(0.000000,0.000000,
zOff-1.000000
), new Point3D(0.425323,0.309011,
zOff-0.850654
));
object[77] = new Triangle(new Point3D(-0.162456,-0.499995,
zOff-0.850654
), new Point3D(0.262869,-0.809012,
zOff-0.525738
), new Point3D(-0.276388,-0.850649,
zOff-0.447220
));
object[78] = new Triangle(new Point3D(-0.162456,-0.499995,
zOff-0.850654
), new Point3D(0.425323,-0.309011,
zOff-0.850654
), new Point3D(0.262869,-0.809012,
zOff-0.525738
));
object[79] = new Triangle(new Point3D(0.425323,-0.309011,
zOff-0.850654
), new Point3D(0.723607,-0.525725,
zOff-0.447220
), new Point3D(0.262869,-0.809012,
zOff-0.525738
));
return object; });
