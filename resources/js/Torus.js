define(["Util", "Triangle", "Point3D"], function(Util, Triangle, Point3D) {
var object = Util.createArray(11), cubeWidth = 50.0, zOff = Util.zOff;
object[0] = new Triangle(new Point3D(1.250000,0.000000,
zOff+0.000000
), new Point3D(1.239306,0.163158,
zOff+0.000000
), new Point3D(1.206099,0.158786,
zOff+0.125000
));
object[1] = new Triangle(new Point3D(1.206099,0.158786,
zOff+0.125000
), new Point3D(1.216506,0.000000,
zOff+0.125000
), new Point3D(1.250000,0.000000,
zOff+0.000000
));
object[2] = new Triangle(new Point3D(1.216506,0.000000,
zOff+0.125000
), new Point3D(1.206099,0.158786,
zOff+0.125000
), new Point3D(1.115376,0.146842,
zOff+0.216506
));
object[3] = new Triangle(new Point3D(1.115376,0.146842,
zOff+0.216506
), new Point3D(1.125000,0.000000,
zOff+0.216506
), new Point3D(1.216506,0.000000,
zOff+0.125000
));
object[4] = new Triangle(new Point3D(1.125000,0.000000,
zOff+0.216506
), new Point3D(1.115376,0.146842,
zOff+0.216506
), new Point3D(0.991445,0.130526,
zOff+0.250000
));
object[5] = new Triangle(new Point3D(0.991445,0.130526,
zOff+0.250000
), new Point3D(1.000000,0.000000,
zOff+0.250000
), new Point3D(1.125000,0.000000,
zOff+0.216506
));
object[6] = new Triangle(new Point3D(1.000000,0.000000,
zOff+0.250000
), new Point3D(0.991445,0.130526,
zOff+0.250000
), new Point3D(0.867514,0.114210,
zOff+0.216506
));
object[7] = new Triangle(new Point3D(0.867514,0.114210,
zOff+0.216506
), new Point3D(0.875000,0.000000,
zOff+0.216506
), new Point3D(1.000000,0.000000,
zOff+0.250000
));
object[8] = new Triangle(new Point3D(0.875000,0.000000,
zOff+0.216506
), new Point3D(0.867514,0.114210,
zOff+0.216506
), new Point3D(0.776791,0.102266,
zOff+0.125000
));
object[9] = new Triangle(new Point3D(0.776791,0.102266,
zOff+0.125000
), new Point3D(0.783494,0.000000,
zOff+0.125000
), new Point3D(0.875000,0.000000,
zOff+0.216506
));
object[10] = new Triangle(new Point3D(0.783494,0.000000,
zOff+0.125000
), new Point3D(0.776791,0.102266,
zOff+0.125000
), new Point3D(0.743584,0.097895,
zOff+0.000000
));
object[11] = new Triangle(new Point3D(0.743584,0.097895,
zOff+0.000000
), new Point3D(0.750000,0.000000,
zOff+0.000000
), new Point3D(0.783494,0.000000,
zOff+0.125000
));
object[12] = new Triangle(new Point3D(0.750000,0.000000,
zOff+0.000000
), new Point3D(0.743584,0.097895,
zOff+0.000000
), new Point3D(0.776791,0.102266,
zOff-0.125000
));
object[13] = new Triangle(new Point3D(0.776791,0.102266,
zOff-0.125000
), new Point3D(0.783494,0.000000,
zOff-0.125000
), new Point3D(0.750000,0.000000,
zOff+0.000000
));
object[14] = new Triangle(new Point3D(0.783494,0.000000,
zOff-0.125000
), new Point3D(0.776791,0.102266,
zOff-0.125000
), new Point3D(0.867514,0.114210,
zOff-0.216506
));
object[15] = new Triangle(new Point3D(0.867514,0.114210,
zOff-0.216506
), new Point3D(0.875000,0.000000,
zOff-0.216506
), new Point3D(0.783494,0.000000,
zOff-0.125000
));
object[16] = new Triangle(new Point3D(0.875000,0.000000,
zOff-0.216506
), new Point3D(0.867514,0.114210,
zOff-0.216506
), new Point3D(0.991445,0.130526,
zOff-0.250000
));
object[17] = new Triangle(new Point3D(0.991445,0.130526,
zOff-0.250000
), new Point3D(1.000000,0.000000,
zOff-0.250000
), new Point3D(0.875000,0.000000,
zOff-0.216506
));
object[18] = new Triangle(new Point3D(1.000000,0.000000,
zOff-0.250000
), new Point3D(0.991445,0.130526,
zOff-0.250000
), new Point3D(1.115376,0.146842,
zOff-0.216506
));
object[19] = new Triangle(new Point3D(1.115376,0.146842,
zOff-0.216506
), new Point3D(1.125000,0.000000,
zOff-0.216506
), new Point3D(1.000000,0.000000,
zOff-0.250000
));
object[20] = new Triangle(new Point3D(1.125000,0.000000,
zOff-0.216506
), new Point3D(1.115376,0.146842,
zOff-0.216506
), new Point3D(1.206099,0.158786,
zOff-0.125000
));
object[21] = new Triangle(new Point3D(1.206099,0.158786,
zOff-0.125000
), new Point3D(1.216506,0.000000,
zOff-0.125000
), new Point3D(1.125000,0.000000,
zOff-0.216506
));
object[22] = new Triangle(new Point3D(1.239306,0.163158,
zOff+0.000000
), new Point3D(1.250000,0.000000,
zOff+0.000000
), new Point3D(1.216506,0.000000,
zOff-0.125000
));
object[23] = new Triangle(new Point3D(1.216506,0.000000,
zOff-0.125000
), new Point3D(1.206099,0.158786,
zOff-0.125000
), new Point3D(1.239306,0.163158,
zOff+0.000000
));
object[24] = new Triangle(new Point3D(1.239306,0.163158,
zOff+0.000000
), new Point3D(1.207407,0.323524,
zOff+0.000000
), new Point3D(1.175055,0.314855,
zOff+0.125000
));
object[25] = new Triangle(new Point3D(1.175055,0.314855,
zOff+0.125000
), new Point3D(1.206099,0.158786,
zOff+0.125000
), new Point3D(1.239306,0.163158,
zOff+0.000000
));
object[26] = new Triangle(new Point3D(1.206099,0.158786,
zOff+0.125000
), new Point3D(1.175055,0.314855,
zOff+0.125000
), new Point3D(1.086667,0.291171,
zOff+0.216506
));
object[27] = new Triangle(new Point3D(1.086667,0.291171,
zOff+0.216506
), new Point3D(1.115376,0.146842,
zOff+0.216506
), new Point3D(1.206099,0.158786,
zOff+0.125000
));
object[28] = new Triangle(new Point3D(1.115376,0.146842,
zOff+0.216506
), new Point3D(1.086667,0.291171,
zOff+0.216506
), new Point3D(0.965926,0.258819,
zOff+0.250000
));
object[29] = new Triangle(new Point3D(0.965926,0.258819,
zOff+0.250000
), new Point3D(0.991445,0.130526,
zOff+0.250000
), new Point3D(1.115376,0.146842,
zOff+0.216506
));
object[30] = new Triangle(new Point3D(0.991445,0.130526,
zOff+0.250000
), new Point3D(0.965926,0.258819,
zOff+0.250000
), new Point3D(0.845185,0.226467,
zOff+0.216506
));
object[31] = new Triangle(new Point3D(0.845185,0.226467,
zOff+0.216506
), new Point3D(0.867514,0.114210,
zOff+0.216506
), new Point3D(0.991445,0.130526,
zOff+0.250000
));
object[32] = new Triangle(new Point3D(0.867514,0.114210,
zOff+0.216506
), new Point3D(0.845185,0.226467,
zOff+0.216506
), new Point3D(0.756797,0.202783,
zOff+0.125000
));
object[33] = new Triangle(new Point3D(0.756797,0.202783,
zOff+0.125000
), new Point3D(0.776791,0.102266,
zOff+0.125000
), new Point3D(0.867514,0.114210,
zOff+0.216506
));
object[34] = new Triangle(new Point3D(0.776791,0.102266,
zOff+0.125000
), new Point3D(0.756797,0.202783,
zOff+0.125000
), new Point3D(0.724444,0.194114,
zOff+0.000000
));
object[35] = new Triangle(new Point3D(0.724444,0.194114,
zOff+0.000000
), new Point3D(0.743584,0.097895,
zOff+0.000000
), new Point3D(0.776791,0.102266,
zOff+0.125000
));
object[36] = new Triangle(new Point3D(0.743584,0.097895,
zOff+0.000000
), new Point3D(0.724444,0.194114,
zOff+0.000000
), new Point3D(0.756797,0.202783,
zOff-0.125000
));
object[37] = new Triangle(new Point3D(0.756797,0.202783,
zOff-0.125000
), new Point3D(0.776791,0.102266,
zOff-0.125000
), new Point3D(0.743584,0.097895,
zOff+0.000000
));
object[38] = new Triangle(new Point3D(0.776791,0.102266,
zOff-0.125000
), new Point3D(0.756797,0.202783,
zOff-0.125000
), new Point3D(0.845185,0.226467,
zOff-0.216506
));
object[39] = new Triangle(new Point3D(0.845185,0.226467,
zOff-0.216506
), new Point3D(0.867514,0.114210,
zOff-0.216506
), new Point3D(0.776791,0.102266,
zOff-0.125000
));
object[40] = new Triangle(new Point3D(0.867514,0.114210,
zOff-0.216506
), new Point3D(0.845185,0.226467,
zOff-0.216506
), new Point3D(0.965926,0.258819,
zOff-0.250000
));
object[41] = new Triangle(new Point3D(0.965926,0.258819,
zOff-0.250000
), new Point3D(0.991445,0.130526,
zOff-0.250000
), new Point3D(0.867514,0.114210,
zOff-0.216506
));
object[42] = new Triangle(new Point3D(0.991445,0.130526,
zOff-0.250000
), new Point3D(0.965926,0.258819,
zOff-0.250000
), new Point3D(1.086667,0.291171,
zOff-0.216506
));
object[43] = new Triangle(new Point3D(1.086667,0.291171,
zOff-0.216506
), new Point3D(1.115376,0.146842,
zOff-0.216506
), new Point3D(0.991445,0.130526,
zOff-0.250000
));
object[44] = new Triangle(new Point3D(1.115376,0.146842,
zOff-0.216506
), new Point3D(1.086667,0.291171,
zOff-0.216506
), new Point3D(1.175055,0.314855,
zOff-0.125000
));
object[45] = new Triangle(new Point3D(1.175055,0.314855,
zOff-0.125000
), new Point3D(1.206099,0.158786,
zOff-0.125000
), new Point3D(1.115376,0.146842,
zOff-0.216506
));
object[46] = new Triangle(new Point3D(1.206099,0.158786,
zOff-0.125000
), new Point3D(1.175055,0.314855,
zOff-0.125000
), new Point3D(1.207407,0.323524,
zOff+0.000000
));
object[47] = new Triangle(new Point3D(1.207407,0.323524,
zOff+0.000000
), new Point3D(1.239306,0.163158,
zOff+0.000000
), new Point3D(1.206099,0.158786,
zOff-0.125000
));
object[48] = new Triangle(new Point3D(1.207407,0.323524,
zOff+0.000000
), new Point3D(1.154849,0.478354,
zOff+0.000000
), new Point3D(1.123905,0.465537,
zOff+0.125000
));
object[49] = new Triangle(new Point3D(1.123905,0.465537,
zOff+0.125000
), new Point3D(1.175055,0.314855,
zOff+0.125000
), new Point3D(1.207407,0.323524,
zOff+0.000000
));
object[50] = new Triangle(new Point3D(1.175055,0.314855,
zOff+0.125000
), new Point3D(1.123905,0.465537,
zOff+0.125000
), new Point3D(1.039364,0.430519,
zOff+0.216506
));
object[51] = new Triangle(new Point3D(1.039364,0.430519,
zOff+0.216506
), new Point3D(1.086667,0.291171,
zOff+0.216506
), new Point3D(1.175055,0.314855,
zOff+0.125000
));
object[52] = new Triangle(new Point3D(1.086667,0.291171,
zOff+0.216506
), new Point3D(1.039364,0.430519,
zOff+0.216506
), new Point3D(0.923880,0.382683,
zOff+0.250000
));
object[53] = new Triangle(new Point3D(0.923880,0.382683,
zOff+0.250000
), new Point3D(0.965926,0.258819,
zOff+0.250000
), new Point3D(1.086667,0.291171,
zOff+0.216506
));
object[54] = new Triangle(new Point3D(0.965926,0.258819,
zOff+0.250000
), new Point3D(0.923880,0.382683,
zOff+0.250000
), new Point3D(0.808395,0.334848,
zOff+0.216506
));
object[55] = new Triangle(new Point3D(0.808395,0.334848,
zOff+0.216506
), new Point3D(0.845185,0.226467,
zOff+0.216506
), new Point3D(0.965926,0.258819,
zOff+0.250000
));
object[56] = new Triangle(new Point3D(0.845185,0.226467,
zOff+0.216506
), new Point3D(0.808395,0.334848,
zOff+0.216506
), new Point3D(0.723854,0.299830,
zOff+0.125000
));
object[57] = new Triangle(new Point3D(0.723854,0.299830,
zOff+0.125000
), new Point3D(0.756797,0.202783,
zOff+0.125000
), new Point3D(0.845185,0.226467,
zOff+0.216506
));
object[58] = new Triangle(new Point3D(0.756797,0.202783,
zOff+0.125000
), new Point3D(0.723854,0.299830,
zOff+0.125000
), new Point3D(0.692910,0.287013,
zOff+0.000000
));
object[59] = new Triangle(new Point3D(0.692910,0.287013,
zOff+0.000000
), new Point3D(0.724444,0.194114,
zOff+0.000000
), new Point3D(0.756797,0.202783,
zOff+0.125000
));
object[60] = new Triangle(new Point3D(0.724444,0.194114,
zOff+0.000000
), new Point3D(0.692910,0.287013,
zOff+0.000000
), new Point3D(0.723854,0.299830,
zOff-0.125000
));
object[61] = new Triangle(new Point3D(0.723854,0.299830,
zOff-0.125000
), new Point3D(0.756797,0.202783,
zOff-0.125000
), new Point3D(0.724444,0.194114,
zOff+0.000000
));
object[62] = new Triangle(new Point3D(0.756797,0.202783,
zOff-0.125000
), new Point3D(0.723854,0.299830,
zOff-0.125000
), new Point3D(0.808395,0.334848,
zOff-0.216506
));
object[63] = new Triangle(new Point3D(0.808395,0.334848,
zOff-0.216506
), new Point3D(0.845185,0.226467,
zOff-0.216506
), new Point3D(0.756797,0.202783,
zOff-0.125000
));
object[64] = new Triangle(new Point3D(0.845185,0.226467,
zOff-0.216506
), new Point3D(0.808395,0.334848,
zOff-0.216506
), new Point3D(0.923880,0.382683,
zOff-0.250000
));
object[65] = new Triangle(new Point3D(0.923880,0.382683,
zOff-0.250000
), new Point3D(0.965926,0.258819,
zOff-0.250000
), new Point3D(0.845185,0.226467,
zOff-0.216506
));
object[66] = new Triangle(new Point3D(0.965926,0.258819,
zOff-0.250000
), new Point3D(0.923880,0.382683,
zOff-0.250000
), new Point3D(1.039364,0.430519,
zOff-0.216506
));
object[67] = new Triangle(new Point3D(1.039364,0.430519,
zOff-0.216506
), new Point3D(1.086667,0.291171,
zOff-0.216506
), new Point3D(0.965926,0.258819,
zOff-0.250000
));
object[68] = new Triangle(new Point3D(1.086667,0.291171,
zOff-0.216506
), new Point3D(1.039364,0.430519,
zOff-0.216506
), new Point3D(1.123905,0.465537,
zOff-0.125000
));
object[69] = new Triangle(new Point3D(1.123905,0.465537,
zOff-0.125000
), new Point3D(1.175055,0.314855,
zOff-0.125000
), new Point3D(1.086667,0.291171,
zOff-0.216506
));
object[70] = new Triangle(new Point3D(1.175055,0.314855,
zOff-0.125000
), new Point3D(1.123905,0.465537,
zOff-0.125000
), new Point3D(1.154849,0.478354,
zOff+0.000000
));
object[71] = new Triangle(new Point3D(1.154849,0.478354,
zOff+0.000000
), new Point3D(1.207407,0.323524,
zOff+0.000000
), new Point3D(1.175055,0.314855,
zOff-0.125000
));
object[72] = new Triangle(new Point3D(1.154849,0.478354,
zOff+0.000000
), new Point3D(1.082532,0.625000,
zOff+0.000000
), new Point3D(1.053525,0.608253,
zOff+0.125000
));
object[73] = new Triangle(new Point3D(1.053525,0.608253,
zOff+0.125000
), new Point3D(1.123905,0.465537,
zOff+0.125000
), new Point3D(1.154849,0.478354,
zOff+0.000000
));
object[74] = new Triangle(new Point3D(1.123905,0.465537,
zOff+0.125000
), new Point3D(1.053525,0.608253,
zOff+0.125000
), new Point3D(0.974279,0.562500,
zOff+0.216506
));
object[75] = new Triangle(new Point3D(0.974279,0.562500,
zOff+0.216506
), new Point3D(1.039364,0.430519,
zOff+0.216506
), new Point3D(1.123905,0.465537,
zOff+0.125000
));
object[76] = new Triangle(new Point3D(1.039364,0.430519,
zOff+0.216506
), new Point3D(0.974279,0.562500,
zOff+0.216506
), new Point3D(0.866025,0.500000,
zOff+0.250000
));
object[77] = new Triangle(new Point3D(0.866025,0.500000,
zOff+0.250000
), new Point3D(0.923880,0.382683,
zOff+0.250000
), new Point3D(1.039364,0.430519,
zOff+0.216506
));
object[78] = new Triangle(new Point3D(0.923880,0.382683,
zOff+0.250000
), new Point3D(0.866025,0.500000,
zOff+0.250000
), new Point3D(0.757772,0.437500,
zOff+0.216506
));
object[79] = new Triangle(new Point3D(0.757772,0.437500,
zOff+0.216506
), new Point3D(0.808395,0.334848,
zOff+0.216506
), new Point3D(0.923880,0.382683,
zOff+0.250000
));
object[80] = new Triangle(new Point3D(0.808395,0.334848,
zOff+0.216506
), new Point3D(0.757772,0.437500,
zOff+0.216506
), new Point3D(0.678525,0.391747,
zOff+0.125000
));
object[81] = new Triangle(new Point3D(0.678525,0.391747,
zOff+0.125000
), new Point3D(0.723854,0.299830,
zOff+0.125000
), new Point3D(0.808395,0.334848,
zOff+0.216506
));
object[82] = new Triangle(new Point3D(0.723854,0.299830,
zOff+0.125000
), new Point3D(0.678525,0.391747,
zOff+0.125000
), new Point3D(0.649519,0.375000,
zOff+0.000000
));
object[83] = new Triangle(new Point3D(0.649519,0.375000,
zOff+0.000000
), new Point3D(0.692910,0.287013,
zOff+0.000000
), new Point3D(0.723854,0.299830,
zOff+0.125000
));
object[84] = new Triangle(new Point3D(0.692910,0.287013,
zOff+0.000000
), new Point3D(0.649519,0.375000,
zOff+0.000000
), new Point3D(0.678525,0.391747,
zOff-0.125000
));
object[85] = new Triangle(new Point3D(0.678525,0.391747,
zOff-0.125000
), new Point3D(0.723854,0.299830,
zOff-0.125000
), new Point3D(0.692910,0.287013,
zOff+0.000000
));
object[86] = new Triangle(new Point3D(0.723854,0.299830,
zOff-0.125000
), new Point3D(0.678525,0.391747,
zOff-0.125000
), new Point3D(0.757772,0.437500,
zOff-0.216506
));
object[87] = new Triangle(new Point3D(0.757772,0.437500,
zOff-0.216506
), new Point3D(0.808395,0.334848,
zOff-0.216506
), new Point3D(0.723854,0.299830,
zOff-0.125000
));
object[88] = new Triangle(new Point3D(0.808395,0.334848,
zOff-0.216506
), new Point3D(0.757772,0.437500,
zOff-0.216506
), new Point3D(0.866025,0.500000,
zOff-0.250000
));
object[89] = new Triangle(new Point3D(0.866025,0.500000,
zOff-0.250000
), new Point3D(0.923880,0.382683,
zOff-0.250000
), new Point3D(0.808395,0.334848,
zOff-0.216506
));
object[90] = new Triangle(new Point3D(0.923880,0.382683,
zOff-0.250000
), new Point3D(0.866025,0.500000,
zOff-0.250000
), new Point3D(0.974279,0.562500,
zOff-0.216506
));
object[91] = new Triangle(new Point3D(0.974279,0.562500,
zOff-0.216506
), new Point3D(1.039364,0.430519,
zOff-0.216506
), new Point3D(0.923880,0.382683,
zOff-0.250000
));
object[92] = new Triangle(new Point3D(1.039364,0.430519,
zOff-0.216506
), new Point3D(0.974279,0.562500,
zOff-0.216506
), new Point3D(1.053525,0.608253,
zOff-0.125000
));
object[93] = new Triangle(new Point3D(1.053525,0.608253,
zOff-0.125000
), new Point3D(1.123905,0.465537,
zOff-0.125000
), new Point3D(1.039364,0.430519,
zOff-0.216506
));
object[94] = new Triangle(new Point3D(1.123905,0.465537,
zOff-0.125000
), new Point3D(1.053525,0.608253,
zOff-0.125000
), new Point3D(1.082532,0.625000,
zOff+0.000000
));
object[95] = new Triangle(new Point3D(1.082532,0.625000,
zOff+0.000000
), new Point3D(1.154849,0.478354,
zOff+0.000000
), new Point3D(1.123905,0.465537,
zOff-0.125000
));
object[96] = new Triangle(new Point3D(1.082532,0.625000,
zOff+0.000000
), new Point3D(0.991692,0.760952,
zOff+0.000000
), new Point3D(0.965119,0.740562,
zOff+0.125000
));
object[97] = new Triangle(new Point3D(0.965119,0.740562,
zOff+0.125000
), new Point3D(1.053525,0.608253,
zOff+0.125000
), new Point3D(1.082532,0.625000,
zOff+0.000000
));
object[98] = new Triangle(new Point3D(1.053525,0.608253,
zOff+0.125000
), new Point3D(0.965119,0.740562,
zOff+0.125000
), new Point3D(0.892523,0.684856,
zOff+0.216506
));
object[99] = new Triangle(new Point3D(0.892523,0.684856,
zOff+0.216506
), new Point3D(0.974279,0.562500,
zOff+0.216506
), new Point3D(1.053525,0.608253,
zOff+0.125000
));
object[100] = new Triangle(new Point3D(0.974279,0.562500,
zOff+0.216506
), new Point3D(0.892523,0.684856,
zOff+0.216506
), new Point3D(0.793353,0.608761,
zOff+0.250000
));
object[101] = new Triangle(new Point3D(0.793353,0.608761,
zOff+0.250000
), new Point3D(0.866025,0.500000,
zOff+0.250000
), new Point3D(0.974279,0.562500,
zOff+0.216506
));
object[102] = new Triangle(new Point3D(0.866025,0.500000,
zOff+0.250000
), new Point3D(0.793353,0.608761,
zOff+0.250000
), new Point3D(0.694184,0.532666,
zOff+0.216506
));
object[103] = new Triangle(new Point3D(0.694184,0.532666,
zOff+0.216506
), new Point3D(0.757772,0.437500,
zOff+0.216506
), new Point3D(0.866025,0.500000,
zOff+0.250000
));
object[104] = new Triangle(new Point3D(0.757772,0.437500,
zOff+0.216506
), new Point3D(0.694184,0.532666,
zOff+0.216506
), new Point3D(0.621587,0.476961,
zOff+0.125000
));
object[105] = new Triangle(new Point3D(0.621587,0.476961,
zOff+0.125000
), new Point3D(0.678525,0.391747,
zOff+0.125000
), new Point3D(0.757772,0.437500,
zOff+0.216506
));
object[106] = new Triangle(new Point3D(0.678525,0.391747,
zOff+0.125000
), new Point3D(0.621587,0.476961,
zOff+0.125000
), new Point3D(0.595015,0.456571,
zOff+0.000000
));
object[107] = new Triangle(new Point3D(0.595015,0.456571,
zOff+0.000000
), new Point3D(0.649519,0.375000,
zOff+0.000000
), new Point3D(0.678525,0.391747,
zOff+0.125000
));
object[108] = new Triangle(new Point3D(0.649519,0.375000,
zOff+0.000000
), new Point3D(0.595015,0.456571,
zOff+0.000000
), new Point3D(0.621587,0.476961,
zOff-0.125000
));
object[109] = new Triangle(new Point3D(0.621587,0.476961,
zOff-0.125000
), new Point3D(0.678525,0.391747,
zOff-0.125000
), new Point3D(0.649519,0.375000,
zOff+0.000000
));
object[110] = new Triangle(new Point3D(0.678525,0.391747,
zOff-0.125000
), new Point3D(0.621587,0.476961,
zOff-0.125000
), new Point3D(0.694184,0.532666,
zOff-0.216506
));
object[111] = new Triangle(new Point3D(0.694184,0.532666,
zOff-0.216506
), new Point3D(0.757772,0.437500,
zOff-0.216506
), new Point3D(0.678525,0.391747,
zOff-0.125000
));
object[112] = new Triangle(new Point3D(0.757772,0.437500,
zOff-0.216506
), new Point3D(0.694184,0.532666,
zOff-0.216506
), new Point3D(0.793353,0.608761,
zOff-0.250000
));
object[113] = new Triangle(new Point3D(0.793353,0.608761,
zOff-0.250000
), new Point3D(0.866025,0.500000,
zOff-0.250000
), new Point3D(0.757772,0.437500,
zOff-0.216506
));
object[114] = new Triangle(new Point3D(0.866025,0.500000,
zOff-0.250000
), new Point3D(0.793353,0.608761,
zOff-0.250000
), new Point3D(0.892523,0.684856,
zOff-0.216506
));
object[115] = new Triangle(new Point3D(0.892523,0.684856,
zOff-0.216506
), new Point3D(0.974279,0.562500,
zOff-0.216506
), new Point3D(0.866025,0.500000,
zOff-0.250000
));
object[116] = new Triangle(new Point3D(0.974279,0.562500,
zOff-0.216506
), new Point3D(0.892523,0.684856,
zOff-0.216506
), new Point3D(0.965119,0.740562,
zOff-0.125000
));
object[117] = new Triangle(new Point3D(0.965119,0.740562,
zOff-0.125000
), new Point3D(1.053525,0.608253,
zOff-0.125000
), new Point3D(0.974279,0.562500,
zOff-0.216506
));
object[118] = new Triangle(new Point3D(1.053525,0.608253,
zOff-0.125000
), new Point3D(0.965119,0.740562,
zOff-0.125000
), new Point3D(0.991692,0.760952,
zOff+0.000000
));
object[119] = new Triangle(new Point3D(0.991692,0.760952,
zOff+0.000000
), new Point3D(1.082532,0.625000,
zOff+0.000000
), new Point3D(1.053525,0.608253,
zOff-0.125000
));
object[120] = new Triangle(new Point3D(0.991692,0.760952,
zOff+0.000000
), new Point3D(0.883883,0.883884,
zOff+0.000000
), new Point3D(0.860200,0.860200,
zOff+0.125000
));
object[121] = new Triangle(new Point3D(0.860200,0.860200,
zOff+0.125000
), new Point3D(0.965119,0.740562,
zOff+0.125000
), new Point3D(0.991692,0.760952,
zOff+0.000000
));
object[122] = new Triangle(new Point3D(0.965119,0.740562,
zOff+0.125000
), new Point3D(0.860200,0.860200,
zOff+0.125000
), new Point3D(0.795495,0.795495,
zOff+0.216506
));
object[123] = new Triangle(new Point3D(0.795495,0.795495,
zOff+0.216506
), new Point3D(0.892523,0.684856,
zOff+0.216506
), new Point3D(0.965119,0.740562,
zOff+0.125000
));
object[124] = new Triangle(new Point3D(0.892523,0.684856,
zOff+0.216506
), new Point3D(0.795495,0.795495,
zOff+0.216506
), new Point3D(0.707107,0.707107,
zOff+0.250000
));
object[125] = new Triangle(new Point3D(0.707107,0.707107,
zOff+0.250000
), new Point3D(0.793353,0.608761,
zOff+0.250000
), new Point3D(0.892523,0.684856,
zOff+0.216506
));
object[126] = new Triangle(new Point3D(0.793353,0.608761,
zOff+0.250000
), new Point3D(0.707107,0.707107,
zOff+0.250000
), new Point3D(0.618718,0.618719,
zOff+0.216506
));
object[127] = new Triangle(new Point3D(0.618718,0.618719,
zOff+0.216506
), new Point3D(0.694184,0.532666,
zOff+0.216506
), new Point3D(0.793353,0.608761,
zOff+0.250000
));
object[128] = new Triangle(new Point3D(0.694184,0.532666,
zOff+0.216506
), new Point3D(0.618718,0.618719,
zOff+0.216506
), new Point3D(0.554014,0.554014,
zOff+0.125000
));
object[129] = new Triangle(new Point3D(0.554014,0.554014,
zOff+0.125000
), new Point3D(0.621587,0.476961,
zOff+0.125000
), new Point3D(0.694184,0.532666,
zOff+0.216506
));
object[130] = new Triangle(new Point3D(0.621587,0.476961,
zOff+0.125000
), new Point3D(0.554014,0.554014,
zOff+0.125000
), new Point3D(0.530330,0.530330,
zOff+0.000000
));
object[131] = new Triangle(new Point3D(0.530330,0.530330,
zOff+0.000000
), new Point3D(0.595015,0.456571,
zOff+0.000000
), new Point3D(0.621587,0.476961,
zOff+0.125000
));
object[132] = new Triangle(new Point3D(0.595015,0.456571,
zOff+0.000000
), new Point3D(0.530330,0.530330,
zOff+0.000000
), new Point3D(0.554014,0.554014,
zOff-0.125000
));
object[133] = new Triangle(new Point3D(0.554014,0.554014,
zOff-0.125000
), new Point3D(0.621587,0.476961,
zOff-0.125000
), new Point3D(0.595015,0.456571,
zOff+0.000000
));
object[134] = new Triangle(new Point3D(0.621587,0.476961,
zOff-0.125000
), new Point3D(0.554014,0.554014,
zOff-0.125000
), new Point3D(0.618718,0.618719,
zOff-0.216506
));
object[135] = new Triangle(new Point3D(0.618718,0.618719,
zOff-0.216506
), new Point3D(0.694184,0.532666,
zOff-0.216506
), new Point3D(0.621587,0.476961,
zOff-0.125000
));
object[136] = new Triangle(new Point3D(0.694184,0.532666,
zOff-0.216506
), new Point3D(0.618718,0.618719,
zOff-0.216506
), new Point3D(0.707107,0.707107,
zOff-0.250000
));
object[137] = new Triangle(new Point3D(0.707107,0.707107,
zOff-0.250000
), new Point3D(0.793353,0.608761,
zOff-0.250000
), new Point3D(0.694184,0.532666,
zOff-0.216506
));
object[138] = new Triangle(new Point3D(0.793353,0.608761,
zOff-0.250000
), new Point3D(0.707107,0.707107,
zOff-0.250000
), new Point3D(0.795495,0.795495,
zOff-0.216506
));
object[139] = new Triangle(new Point3D(0.795495,0.795495,
zOff-0.216506
), new Point3D(0.892523,0.684856,
zOff-0.216506
), new Point3D(0.793353,0.608761,
zOff-0.250000
));
object[140] = new Triangle(new Point3D(0.892523,0.684856,
zOff-0.216506
), new Point3D(0.795495,0.795495,
zOff-0.216506
), new Point3D(0.860200,0.860200,
zOff-0.125000
));
object[141] = new Triangle(new Point3D(0.860200,0.860200,
zOff-0.125000
), new Point3D(0.965119,0.740562,
zOff-0.125000
), new Point3D(0.892523,0.684856,
zOff-0.216506
));
object[142] = new Triangle(new Point3D(0.965119,0.740562,
zOff-0.125000
), new Point3D(0.860200,0.860200,
zOff-0.125000
), new Point3D(0.883883,0.883884,
zOff+0.000000
));
object[143] = new Triangle(new Point3D(0.883883,0.883884,
zOff+0.000000
), new Point3D(0.991692,0.760952,
zOff+0.000000
), new Point3D(0.965119,0.740562,
zOff-0.125000
));
object[144] = new Triangle(new Point3D(0.883883,0.883884,
zOff+0.000000
), new Point3D(0.760952,0.991691,
zOff+0.000000
), new Point3D(0.740562,0.965119,
zOff+0.125000
));
object[145] = new Triangle(new Point3D(0.740562,0.965119,
zOff+0.125000
), new Point3D(0.860200,0.860200,
zOff+0.125000
), new Point3D(0.883883,0.883884,
zOff+0.000000
));
object[146] = new Triangle(new Point3D(0.860200,0.860200,
zOff+0.125000
), new Point3D(0.740562,0.965119,
zOff+0.125000
), new Point3D(0.684857,0.892522,
zOff+0.216506
));
object[147] = new Triangle(new Point3D(0.684857,0.892522,
zOff+0.216506
), new Point3D(0.795495,0.795495,
zOff+0.216506
), new Point3D(0.860200,0.860200,
zOff+0.125000
));
object[148] = new Triangle(new Point3D(0.795495,0.795495,
zOff+0.216506
), new Point3D(0.684857,0.892522,
zOff+0.216506
), new Point3D(0.608762,0.793353,
zOff+0.250000
));
object[149] = new Triangle(new Point3D(0.608762,0.793353,
zOff+0.250000
), new Point3D(0.707107,0.707107,
zOff+0.250000
), new Point3D(0.795495,0.795495,
zOff+0.216506
));
object[150] = new Triangle(new Point3D(0.707107,0.707107,
zOff+0.250000
), new Point3D(0.608762,0.793353,
zOff+0.250000
), new Point3D(0.532666,0.694184,
zOff+0.216506
));
object[151] = new Triangle(new Point3D(0.532666,0.694184,
zOff+0.216506
), new Point3D(0.618718,0.618719,
zOff+0.216506
), new Point3D(0.707107,0.707107,
zOff+0.250000
));
object[152] = new Triangle(new Point3D(0.618718,0.618719,
zOff+0.216506
), new Point3D(0.532666,0.694184,
zOff+0.216506
), new Point3D(0.476961,0.621587,
zOff+0.125000
));
object[153] = new Triangle(new Point3D(0.476961,0.621587,
zOff+0.125000
), new Point3D(0.554014,0.554014,
zOff+0.125000
), new Point3D(0.618718,0.618719,
zOff+0.216506
));
object[154] = new Triangle(new Point3D(0.554014,0.554014,
zOff+0.125000
), new Point3D(0.476961,0.621587,
zOff+0.125000
), new Point3D(0.456571,0.595015,
zOff+0.000000
));
object[155] = new Triangle(new Point3D(0.456571,0.595015,
zOff+0.000000
), new Point3D(0.530330,0.530330,
zOff+0.000000
), new Point3D(0.554014,0.554014,
zOff+0.125000
));
object[156] = new Triangle(new Point3D(0.530330,0.530330,
zOff+0.000000
), new Point3D(0.456571,0.595015,
zOff+0.000000
), new Point3D(0.476961,0.621587,
zOff-0.125000
));
object[157] = new Triangle(new Point3D(0.476961,0.621587,
zOff-0.125000
), new Point3D(0.554014,0.554014,
zOff-0.125000
), new Point3D(0.530330,0.530330,
zOff+0.000000
));
object[158] = new Triangle(new Point3D(0.554014,0.554014,
zOff-0.125000
), new Point3D(0.476961,0.621587,
zOff-0.125000
), new Point3D(0.532666,0.694184,
zOff-0.216506
));
object[159] = new Triangle(new Point3D(0.532666,0.694184,
zOff-0.216506
), new Point3D(0.618718,0.618719,
zOff-0.216506
), new Point3D(0.554014,0.554014,
zOff-0.125000
));
object[160] = new Triangle(new Point3D(0.618718,0.618719,
zOff-0.216506
), new Point3D(0.532666,0.694184,
zOff-0.216506
), new Point3D(0.608762,0.793353,
zOff-0.250000
));
object[161] = new Triangle(new Point3D(0.608762,0.793353,
zOff-0.250000
), new Point3D(0.707107,0.707107,
zOff-0.250000
), new Point3D(0.618718,0.618719,
zOff-0.216506
));
object[162] = new Triangle(new Point3D(0.707107,0.707107,
zOff-0.250000
), new Point3D(0.608762,0.793353,
zOff-0.250000
), new Point3D(0.684857,0.892522,
zOff-0.216506
));
object[163] = new Triangle(new Point3D(0.684857,0.892522,
zOff-0.216506
), new Point3D(0.795495,0.795495,
zOff-0.216506
), new Point3D(0.707107,0.707107,
zOff-0.250000
));
object[164] = new Triangle(new Point3D(0.795495,0.795495,
zOff-0.216506
), new Point3D(0.684857,0.892522,
zOff-0.216506
), new Point3D(0.740562,0.965119,
zOff-0.125000
));
object[165] = new Triangle(new Point3D(0.740562,0.965119,
zOff-0.125000
), new Point3D(0.860200,0.860200,
zOff-0.125000
), new Point3D(0.795495,0.795495,
zOff-0.216506
));
object[166] = new Triangle(new Point3D(0.860200,0.860200,
zOff-0.125000
), new Point3D(0.740562,0.965119,
zOff-0.125000
), new Point3D(0.760952,0.991691,
zOff+0.000000
));
object[167] = new Triangle(new Point3D(0.760952,0.991691,
zOff+0.000000
), new Point3D(0.883883,0.883884,
zOff+0.000000
), new Point3D(0.860200,0.860200,
zOff-0.125000
));
object[168] = new Triangle(new Point3D(0.760952,0.991691,
zOff+0.000000
), new Point3D(0.625000,1.082532,
zOff+0.000000
), new Point3D(0.608253,1.053525,
zOff+0.125000
));
object[169] = new Triangle(new Point3D(0.608253,1.053525,
zOff+0.125000
), new Point3D(0.740562,0.965119,
zOff+0.125000
), new Point3D(0.760952,0.991691,
zOff+0.000000
));
object[170] = new Triangle(new Point3D(0.740562,0.965119,
zOff+0.125000
), new Point3D(0.608253,1.053525,
zOff+0.125000
), new Point3D(0.562500,0.974279,
zOff+0.216506
));
object[171] = new Triangle(new Point3D(0.562500,0.974279,
zOff+0.216506
), new Point3D(0.684857,0.892522,
zOff+0.216506
), new Point3D(0.740562,0.965119,
zOff+0.125000
));
object[172] = new Triangle(new Point3D(0.684857,0.892522,
zOff+0.216506
), new Point3D(0.562500,0.974279,
zOff+0.216506
), new Point3D(0.500000,0.866025,
zOff+0.250000
));
object[173] = new Triangle(new Point3D(0.500000,0.866025,
zOff+0.250000
), new Point3D(0.608762,0.793353,
zOff+0.250000
), new Point3D(0.684857,0.892522,
zOff+0.216506
));
object[174] = new Triangle(new Point3D(0.608762,0.793353,
zOff+0.250000
), new Point3D(0.500000,0.866025,
zOff+0.250000
), new Point3D(0.437500,0.757772,
zOff+0.216506
));
object[175] = new Triangle(new Point3D(0.437500,0.757772,
zOff+0.216506
), new Point3D(0.532666,0.694184,
zOff+0.216506
), new Point3D(0.608762,0.793353,
zOff+0.250000
));
object[176] = new Triangle(new Point3D(0.532666,0.694184,
zOff+0.216506
), new Point3D(0.437500,0.757772,
zOff+0.216506
), new Point3D(0.391747,0.678525,
zOff+0.125000
));
object[177] = new Triangle(new Point3D(0.391747,0.678525,
zOff+0.125000
), new Point3D(0.476961,0.621587,
zOff+0.125000
), new Point3D(0.532666,0.694184,
zOff+0.216506
));
object[178] = new Triangle(new Point3D(0.476961,0.621587,
zOff+0.125000
), new Point3D(0.391747,0.678525,
zOff+0.125000
), new Point3D(0.375000,0.649519,
zOff+0.000000
));
object[179] = new Triangle(new Point3D(0.375000,0.649519,
zOff+0.000000
), new Point3D(0.456571,0.595015,
zOff+0.000000
), new Point3D(0.476961,0.621587,
zOff+0.125000
));
object[180] = new Triangle(new Point3D(0.456571,0.595015,
zOff+0.000000
), new Point3D(0.375000,0.649519,
zOff+0.000000
), new Point3D(0.391747,0.678525,
zOff-0.125000
));
object[181] = new Triangle(new Point3D(0.391747,0.678525,
zOff-0.125000
), new Point3D(0.476961,0.621587,
zOff-0.125000
), new Point3D(0.456571,0.595015,
zOff+0.000000
));
object[182] = new Triangle(new Point3D(0.476961,0.621587,
zOff-0.125000
), new Point3D(0.391747,0.678525,
zOff-0.125000
), new Point3D(0.437500,0.757772,
zOff-0.216506
));
object[183] = new Triangle(new Point3D(0.437500,0.757772,
zOff-0.216506
), new Point3D(0.532666,0.694184,
zOff-0.216506
), new Point3D(0.476961,0.621587,
zOff-0.125000
));
object[184] = new Triangle(new Point3D(0.532666,0.694184,
zOff-0.216506
), new Point3D(0.437500,0.757772,
zOff-0.216506
), new Point3D(0.500000,0.866025,
zOff-0.250000
));
object[185] = new Triangle(new Point3D(0.500000,0.866025,
zOff-0.250000
), new Point3D(0.608762,0.793353,
zOff-0.250000
), new Point3D(0.532666,0.694184,
zOff-0.216506
));
object[186] = new Triangle(new Point3D(0.608762,0.793353,
zOff-0.250000
), new Point3D(0.500000,0.866025,
zOff-0.250000
), new Point3D(0.562500,0.974279,
zOff-0.216506
));
object[187] = new Triangle(new Point3D(0.562500,0.974279,
zOff-0.216506
), new Point3D(0.684857,0.892522,
zOff-0.216506
), new Point3D(0.608762,0.793353,
zOff-0.250000
));
object[188] = new Triangle(new Point3D(0.684857,0.892522,
zOff-0.216506
), new Point3D(0.562500,0.974279,
zOff-0.216506
), new Point3D(0.608253,1.053525,
zOff-0.125000
));
object[189] = new Triangle(new Point3D(0.608253,1.053525,
zOff-0.125000
), new Point3D(0.740562,0.965119,
zOff-0.125000
), new Point3D(0.684857,0.892522,
zOff-0.216506
));
object[190] = new Triangle(new Point3D(0.740562,0.965119,
zOff-0.125000
), new Point3D(0.608253,1.053525,
zOff-0.125000
), new Point3D(0.625000,1.082532,
zOff+0.000000
));
object[191] = new Triangle(new Point3D(0.625000,1.082532,
zOff+0.000000
), new Point3D(0.760952,0.991691,
zOff+0.000000
), new Point3D(0.740562,0.965119,
zOff-0.125000
));
object[192] = new Triangle(new Point3D(0.625000,1.082532,
zOff+0.000000
), new Point3D(0.478355,1.154849,
zOff+0.000000
), new Point3D(0.465537,1.123905,
zOff+0.125000
));
object[193] = new Triangle(new Point3D(0.465537,1.123905,
zOff+0.125000
), new Point3D(0.608253,1.053525,
zOff+0.125000
), new Point3D(0.625000,1.082532,
zOff+0.000000
));
object[194] = new Triangle(new Point3D(0.608253,1.053525,
zOff+0.125000
), new Point3D(0.465537,1.123905,
zOff+0.125000
), new Point3D(0.430519,1.039364,
zOff+0.216506
));
object[195] = new Triangle(new Point3D(0.430519,1.039364,
zOff+0.216506
), new Point3D(0.562500,0.974279,
zOff+0.216506
), new Point3D(0.608253,1.053525,
zOff+0.125000
));
object[196] = new Triangle(new Point3D(0.562500,0.974279,
zOff+0.216506
), new Point3D(0.430519,1.039364,
zOff+0.216506
), new Point3D(0.382684,0.923879,
zOff+0.250000
));
object[197] = new Triangle(new Point3D(0.382684,0.923879,
zOff+0.250000
), new Point3D(0.500000,0.866025,
zOff+0.250000
), new Point3D(0.562500,0.974279,
zOff+0.216506
));
object[198] = new Triangle(new Point3D(0.500000,0.866025,
zOff+0.250000
), new Point3D(0.382684,0.923879,
zOff+0.250000
), new Point3D(0.334848,0.808394,
zOff+0.216506
));
object[199] = new Triangle(new Point3D(0.334848,0.808394,
zOff+0.216506
), new Point3D(0.437500,0.757772,
zOff+0.216506
), new Point3D(0.500000,0.866025,
zOff+0.250000
));
object[200] = new Triangle(new Point3D(0.437500,0.757772,
zOff+0.216506
), new Point3D(0.334848,0.808394,
zOff+0.216506
), new Point3D(0.299830,0.723854,
zOff+0.125000
));
object[201] = new Triangle(new Point3D(0.299830,0.723854,
zOff+0.125000
), new Point3D(0.391747,0.678525,
zOff+0.125000
), new Point3D(0.437500,0.757772,
zOff+0.216506
));
object[202] = new Triangle(new Point3D(0.391747,0.678525,
zOff+0.125000
), new Point3D(0.299830,0.723854,
zOff+0.125000
), new Point3D(0.287013,0.692910,
zOff+0.000000
));
object[203] = new Triangle(new Point3D(0.287013,0.692910,
zOff+0.000000
), new Point3D(0.375000,0.649519,
zOff+0.000000
), new Point3D(0.391747,0.678525,
zOff+0.125000
));
object[204] = new Triangle(new Point3D(0.375000,0.649519,
zOff+0.000000
), new Point3D(0.287013,0.692910,
zOff+0.000000
), new Point3D(0.299830,0.723854,
zOff-0.125000
));
object[205] = new Triangle(new Point3D(0.299830,0.723854,
zOff-0.125000
), new Point3D(0.391747,0.678525,
zOff-0.125000
), new Point3D(0.375000,0.649519,
zOff+0.000000
));
object[206] = new Triangle(new Point3D(0.391747,0.678525,
zOff-0.125000
), new Point3D(0.299830,0.723854,
zOff-0.125000
), new Point3D(0.334848,0.808394,
zOff-0.216506
));
object[207] = new Triangle(new Point3D(0.334848,0.808394,
zOff-0.216506
), new Point3D(0.437500,0.757772,
zOff-0.216506
), new Point3D(0.391747,0.678525,
zOff-0.125000
));
object[208] = new Triangle(new Point3D(0.437500,0.757772,
zOff-0.216506
), new Point3D(0.334848,0.808394,
zOff-0.216506
), new Point3D(0.382684,0.923879,
zOff-0.250000
));
object[209] = new Triangle(new Point3D(0.382684,0.923879,
zOff-0.250000
), new Point3D(0.500000,0.866025,
zOff-0.250000
), new Point3D(0.437500,0.757772,
zOff-0.216506
));
object[210] = new Triangle(new Point3D(0.500000,0.866025,
zOff-0.250000
), new Point3D(0.382684,0.923879,
zOff-0.250000
), new Point3D(0.430519,1.039364,
zOff-0.216506
));
object[211] = new Triangle(new Point3D(0.430519,1.039364,
zOff-0.216506
), new Point3D(0.562500,0.974279,
zOff-0.216506
), new Point3D(0.500000,0.866025,
zOff-0.250000
));
object[212] = new Triangle(new Point3D(0.562500,0.974279,
zOff-0.216506
), new Point3D(0.430519,1.039364,
zOff-0.216506
), new Point3D(0.465537,1.123905,
zOff-0.125000
));
object[213] = new Triangle(new Point3D(0.465537,1.123905,
zOff-0.125000
), new Point3D(0.608253,1.053525,
zOff-0.125000
), new Point3D(0.562500,0.974279,
zOff-0.216506
));
object[214] = new Triangle(new Point3D(0.608253,1.053525,
zOff-0.125000
), new Point3D(0.465537,1.123905,
zOff-0.125000
), new Point3D(0.478355,1.154849,
zOff+0.000000
));
object[215] = new Triangle(new Point3D(0.478355,1.154849,
zOff+0.000000
), new Point3D(0.625000,1.082532,
zOff+0.000000
), new Point3D(0.608253,1.053525,
zOff-0.125000
));
object[216] = new Triangle(new Point3D(0.478355,1.154849,
zOff+0.000000
), new Point3D(0.323524,1.207407,
zOff+0.000000
), new Point3D(0.314855,1.175055,
zOff+0.125000
));
object[217] = new Triangle(new Point3D(0.314855,1.175055,
zOff+0.125000
), new Point3D(0.465537,1.123905,
zOff+0.125000
), new Point3D(0.478355,1.154849,
zOff+0.000000
));
object[218] = new Triangle(new Point3D(0.465537,1.123905,
zOff+0.125000
), new Point3D(0.314855,1.175055,
zOff+0.125000
), new Point3D(0.291171,1.086667,
zOff+0.216506
));
object[219] = new Triangle(new Point3D(0.291171,1.086667,
zOff+0.216506
), new Point3D(0.430519,1.039364,
zOff+0.216506
), new Point3D(0.465537,1.123905,
zOff+0.125000
));
object[220] = new Triangle(new Point3D(0.430519,1.039364,
zOff+0.216506
), new Point3D(0.291171,1.086667,
zOff+0.216506
), new Point3D(0.258819,0.965926,
zOff+0.250000
));
object[221] = new Triangle(new Point3D(0.258819,0.965926,
zOff+0.250000
), new Point3D(0.382684,0.923879,
zOff+0.250000
), new Point3D(0.430519,1.039364,
zOff+0.216506
));
object[222] = new Triangle(new Point3D(0.382684,0.923879,
zOff+0.250000
), new Point3D(0.258819,0.965926,
zOff+0.250000
), new Point3D(0.226467,0.845185,
zOff+0.216506
));
object[223] = new Triangle(new Point3D(0.226467,0.845185,
zOff+0.216506
), new Point3D(0.334848,0.808394,
zOff+0.216506
), new Point3D(0.382684,0.923879,
zOff+0.250000
));
object[224] = new Triangle(new Point3D(0.334848,0.808394,
zOff+0.216506
), new Point3D(0.226467,0.845185,
zOff+0.216506
), new Point3D(0.202783,0.756797,
zOff+0.125000
));
object[225] = new Triangle(new Point3D(0.202783,0.756797,
zOff+0.125000
), new Point3D(0.299830,0.723854,
zOff+0.125000
), new Point3D(0.334848,0.808394,
zOff+0.216506
));
object[226] = new Triangle(new Point3D(0.299830,0.723854,
zOff+0.125000
), new Point3D(0.202783,0.756797,
zOff+0.125000
), new Point3D(0.194114,0.724444,
zOff+0.000000
));
object[227] = new Triangle(new Point3D(0.194114,0.724444,
zOff+0.000000
), new Point3D(0.287013,0.692910,
zOff+0.000000
), new Point3D(0.299830,0.723854,
zOff+0.125000
));
object[228] = new Triangle(new Point3D(0.287013,0.692910,
zOff+0.000000
), new Point3D(0.194114,0.724444,
zOff+0.000000
), new Point3D(0.202783,0.756797,
zOff-0.125000
));
object[229] = new Triangle(new Point3D(0.202783,0.756797,
zOff-0.125000
), new Point3D(0.299830,0.723854,
zOff-0.125000
), new Point3D(0.287013,0.692910,
zOff+0.000000
));
object[230] = new Triangle(new Point3D(0.299830,0.723854,
zOff-0.125000
), new Point3D(0.202783,0.756797,
zOff-0.125000
), new Point3D(0.226467,0.845185,
zOff-0.216506
));
object[231] = new Triangle(new Point3D(0.226467,0.845185,
zOff-0.216506
), new Point3D(0.334848,0.808394,
zOff-0.216506
), new Point3D(0.299830,0.723854,
zOff-0.125000
));
object[232] = new Triangle(new Point3D(0.334848,0.808394,
zOff-0.216506
), new Point3D(0.226467,0.845185,
zOff-0.216506
), new Point3D(0.258819,0.965926,
zOff-0.250000
));
object[233] = new Triangle(new Point3D(0.258819,0.965926,
zOff-0.250000
), new Point3D(0.382684,0.923879,
zOff-0.250000
), new Point3D(0.334848,0.808394,
zOff-0.216506
));
object[234] = new Triangle(new Point3D(0.382684,0.923879,
zOff-0.250000
), new Point3D(0.258819,0.965926,
zOff-0.250000
), new Point3D(0.291171,1.086667,
zOff-0.216506
));
object[235] = new Triangle(new Point3D(0.291171,1.086667,
zOff-0.216506
), new Point3D(0.430519,1.039364,
zOff-0.216506
), new Point3D(0.382684,0.923879,
zOff-0.250000
));
object[236] = new Triangle(new Point3D(0.430519,1.039364,
zOff-0.216506
), new Point3D(0.291171,1.086667,
zOff-0.216506
), new Point3D(0.314855,1.175055,
zOff-0.125000
));
object[237] = new Triangle(new Point3D(0.314855,1.175055,
zOff-0.125000
), new Point3D(0.465537,1.123905,
zOff-0.125000
), new Point3D(0.430519,1.039364,
zOff-0.216506
));
object[238] = new Triangle(new Point3D(0.465537,1.123905,
zOff-0.125000
), new Point3D(0.314855,1.175055,
zOff-0.125000
), new Point3D(0.323524,1.207407,
zOff+0.000000
));
object[239] = new Triangle(new Point3D(0.323524,1.207407,
zOff+0.000000
), new Point3D(0.478355,1.154849,
zOff+0.000000
), new Point3D(0.465537,1.123905,
zOff-0.125000
));
object[240] = new Triangle(new Point3D(0.323524,1.207407,
zOff+0.000000
), new Point3D(0.163158,1.239306,
zOff+0.000000
), new Point3D(0.158786,1.206099,
zOff+0.125000
));
object[241] = new Triangle(new Point3D(0.158786,1.206099,
zOff+0.125000
), new Point3D(0.314855,1.175055,
zOff+0.125000
), new Point3D(0.323524,1.207407,
zOff+0.000000
));
object[242] = new Triangle(new Point3D(0.314855,1.175055,
zOff+0.125000
), new Point3D(0.158786,1.206099,
zOff+0.125000
), new Point3D(0.146842,1.115376,
zOff+0.216506
));
object[243] = new Triangle(new Point3D(0.146842,1.115376,
zOff+0.216506
), new Point3D(0.291171,1.086667,
zOff+0.216506
), new Point3D(0.314855,1.175055,
zOff+0.125000
));
object[244] = new Triangle(new Point3D(0.291171,1.086667,
zOff+0.216506
), new Point3D(0.146842,1.115376,
zOff+0.216506
), new Point3D(0.130526,0.991445,
zOff+0.250000
));
object[245] = new Triangle(new Point3D(0.130526,0.991445,
zOff+0.250000
), new Point3D(0.258819,0.965926,
zOff+0.250000
), new Point3D(0.291171,1.086667,
zOff+0.216506
));
object[246] = new Triangle(new Point3D(0.258819,0.965926,
zOff+0.250000
), new Point3D(0.130526,0.991445,
zOff+0.250000
), new Point3D(0.114210,0.867514,
zOff+0.216506
));
object[247] = new Triangle(new Point3D(0.114210,0.867514,
zOff+0.216506
), new Point3D(0.226467,0.845185,
zOff+0.216506
), new Point3D(0.258819,0.965926,
zOff+0.250000
));
object[248] = new Triangle(new Point3D(0.226467,0.845185,
zOff+0.216506
), new Point3D(0.114210,0.867514,
zOff+0.216506
), new Point3D(0.102266,0.776791,
zOff+0.125000
));
object[249] = new Triangle(new Point3D(0.102266,0.776791,
zOff+0.125000
), new Point3D(0.202783,0.756797,
zOff+0.125000
), new Point3D(0.226467,0.845185,
zOff+0.216506
));
object[250] = new Triangle(new Point3D(0.202783,0.756797,
zOff+0.125000
), new Point3D(0.102266,0.776791,
zOff+0.125000
), new Point3D(0.097895,0.743584,
zOff+0.000000
));
object[251] = new Triangle(new Point3D(0.097895,0.743584,
zOff+0.000000
), new Point3D(0.194114,0.724444,
zOff+0.000000
), new Point3D(0.202783,0.756797,
zOff+0.125000
));
object[252] = new Triangle(new Point3D(0.194114,0.724444,
zOff+0.000000
), new Point3D(0.097895,0.743584,
zOff+0.000000
), new Point3D(0.102266,0.776791,
zOff-0.125000
));
object[253] = new Triangle(new Point3D(0.102266,0.776791,
zOff-0.125000
), new Point3D(0.202783,0.756797,
zOff-0.125000
), new Point3D(0.194114,0.724444,
zOff+0.000000
));
object[254] = new Triangle(new Point3D(0.202783,0.756797,
zOff-0.125000
), new Point3D(0.102266,0.776791,
zOff-0.125000
), new Point3D(0.114210,0.867514,
zOff-0.216506
));
object[255] = new Triangle(new Point3D(0.114210,0.867514,
zOff-0.216506
), new Point3D(0.226467,0.845185,
zOff-0.216506
), new Point3D(0.202783,0.756797,
zOff-0.125000
));
object[256] = new Triangle(new Point3D(0.226467,0.845185,
zOff-0.216506
), new Point3D(0.114210,0.867514,
zOff-0.216506
), new Point3D(0.130526,0.991445,
zOff-0.250000
));
object[257] = new Triangle(new Point3D(0.130526,0.991445,
zOff-0.250000
), new Point3D(0.258819,0.965926,
zOff-0.250000
), new Point3D(0.226467,0.845185,
zOff-0.216506
));
object[258] = new Triangle(new Point3D(0.258819,0.965926,
zOff-0.250000
), new Point3D(0.130526,0.991445,
zOff-0.250000
), new Point3D(0.146842,1.115376,
zOff-0.216506
));
object[259] = new Triangle(new Point3D(0.146842,1.115376,
zOff-0.216506
), new Point3D(0.291171,1.086667,
zOff-0.216506
), new Point3D(0.258819,0.965926,
zOff-0.250000
));
object[260] = new Triangle(new Point3D(0.291171,1.086667,
zOff-0.216506
), new Point3D(0.146842,1.115376,
zOff-0.216506
), new Point3D(0.158786,1.206099,
zOff-0.125000
));
object[261] = new Triangle(new Point3D(0.158786,1.206099,
zOff-0.125000
), new Point3D(0.314855,1.175055,
zOff-0.125000
), new Point3D(0.291171,1.086667,
zOff-0.216506
));
object[262] = new Triangle(new Point3D(0.314855,1.175055,
zOff-0.125000
), new Point3D(0.158786,1.206099,
zOff-0.125000
), new Point3D(0.163158,1.239306,
zOff+0.000000
));
object[263] = new Triangle(new Point3D(0.163158,1.239306,
zOff+0.000000
), new Point3D(0.323524,1.207407,
zOff+0.000000
), new Point3D(0.314855,1.175055,
zOff-0.125000
));
object[264] = new Triangle(new Point3D(0.163158,1.239306,
zOff+0.000000
), new Point3D(0.000000,1.250000,
zOff+0.000000
), new Point3D(0.000000,1.216506,
zOff+0.125000
));
object[265] = new Triangle(new Point3D(0.000000,1.216506,
zOff+0.125000
), new Point3D(0.158786,1.206099,
zOff+0.125000
), new Point3D(0.163158,1.239306,
zOff+0.000000
));
object[266] = new Triangle(new Point3D(0.158786,1.206099,
zOff+0.125000
), new Point3D(0.000000,1.216506,
zOff+0.125000
), new Point3D(0.000000,1.125000,
zOff+0.216506
));
object[267] = new Triangle(new Point3D(0.000000,1.125000,
zOff+0.216506
), new Point3D(0.146842,1.115376,
zOff+0.216506
), new Point3D(0.158786,1.206099,
zOff+0.125000
));
object[268] = new Triangle(new Point3D(0.146842,1.115376,
zOff+0.216506
), new Point3D(0.000000,1.125000,
zOff+0.216506
), new Point3D(0.000000,1.000000,
zOff+0.250000
));
object[269] = new Triangle(new Point3D(0.000000,1.000000,
zOff+0.250000
), new Point3D(0.130526,0.991445,
zOff+0.250000
), new Point3D(0.146842,1.115376,
zOff+0.216506
));
object[270] = new Triangle(new Point3D(0.130526,0.991445,
zOff+0.250000
), new Point3D(0.000000,1.000000,
zOff+0.250000
), new Point3D(0.000000,0.875000,
zOff+0.216506
));
object[271] = new Triangle(new Point3D(0.000000,0.875000,
zOff+0.216506
), new Point3D(0.114210,0.867514,
zOff+0.216506
), new Point3D(0.130526,0.991445,
zOff+0.250000
));
object[272] = new Triangle(new Point3D(0.114210,0.867514,
zOff+0.216506
), new Point3D(0.000000,0.875000,
zOff+0.216506
), new Point3D(0.000000,0.783494,
zOff+0.125000
));
object[273] = new Triangle(new Point3D(0.000000,0.783494,
zOff+0.125000
), new Point3D(0.102266,0.776791,
zOff+0.125000
), new Point3D(0.114210,0.867514,
zOff+0.216506
));
object[274] = new Triangle(new Point3D(0.102266,0.776791,
zOff+0.125000
), new Point3D(0.000000,0.783494,
zOff+0.125000
), new Point3D(0.000000,0.750000,
zOff+0.000000
));
object[275] = new Triangle(new Point3D(0.000000,0.750000,
zOff+0.000000
), new Point3D(0.097895,0.743584,
zOff+0.000000
), new Point3D(0.102266,0.776791,
zOff+0.125000
));
object[276] = new Triangle(new Point3D(0.097895,0.743584,
zOff+0.000000
), new Point3D(0.000000,0.750000,
zOff+0.000000
), new Point3D(0.000000,0.783494,
zOff-0.125000
));
object[277] = new Triangle(new Point3D(0.000000,0.783494,
zOff-0.125000
), new Point3D(0.102266,0.776791,
zOff-0.125000
), new Point3D(0.097895,0.743584,
zOff+0.000000
));
object[278] = new Triangle(new Point3D(0.102266,0.776791,
zOff-0.125000
), new Point3D(0.000000,0.783494,
zOff-0.125000
), new Point3D(0.000000,0.875000,
zOff-0.216506
));
object[279] = new Triangle(new Point3D(0.000000,0.875000,
zOff-0.216506
), new Point3D(0.114210,0.867514,
zOff-0.216506
), new Point3D(0.102266,0.776791,
zOff-0.125000
));
object[280] = new Triangle(new Point3D(0.114210,0.867514,
zOff-0.216506
), new Point3D(0.000000,0.875000,
zOff-0.216506
), new Point3D(0.000000,1.000000,
zOff-0.250000
));
object[281] = new Triangle(new Point3D(0.000000,1.000000,
zOff-0.250000
), new Point3D(0.130526,0.991445,
zOff-0.250000
), new Point3D(0.114210,0.867514,
zOff-0.216506
));
object[282] = new Triangle(new Point3D(0.130526,0.991445,
zOff-0.250000
), new Point3D(0.000000,1.000000,
zOff-0.250000
), new Point3D(0.000000,1.125000,
zOff-0.216506
));
object[283] = new Triangle(new Point3D(0.000000,1.125000,
zOff-0.216506
), new Point3D(0.146842,1.115376,
zOff-0.216506
), new Point3D(0.130526,0.991445,
zOff-0.250000
));
object[284] = new Triangle(new Point3D(0.146842,1.115376,
zOff-0.216506
), new Point3D(0.000000,1.125000,
zOff-0.216506
), new Point3D(0.000000,1.216506,
zOff-0.125000
));
object[285] = new Triangle(new Point3D(0.000000,1.216506,
zOff-0.125000
), new Point3D(0.158786,1.206099,
zOff-0.125000
), new Point3D(0.146842,1.115376,
zOff-0.216506
));
object[286] = new Triangle(new Point3D(0.158786,1.206099,
zOff-0.125000
), new Point3D(0.000000,1.216506,
zOff-0.125000
), new Point3D(0.000000,1.250000,
zOff+0.000000
));
object[287] = new Triangle(new Point3D(0.000000,1.250000,
zOff+0.000000
), new Point3D(0.163158,1.239306,
zOff+0.000000
), new Point3D(0.158786,1.206099,
zOff-0.125000
));
object[288] = new Triangle(new Point3D(0.000000,1.250000,
zOff+0.000000
), new Point3D(-0.163158,1.239306,
zOff+0.000000
), new Point3D(-0.158786,1.206099,
zOff+0.125000
));
object[289] = new Triangle(new Point3D(-0.158786,1.206099,
zOff+0.125000
), new Point3D(0.000000,1.216506,
zOff+0.125000
), new Point3D(0.000000,1.250000,
zOff+0.000000
));
object[290] = new Triangle(new Point3D(0.000000,1.216506,
zOff+0.125000
), new Point3D(-0.158786,1.206099,
zOff+0.125000
), new Point3D(-0.146842,1.115375,
zOff+0.216506
));
object[291] = new Triangle(new Point3D(-0.146842,1.115375,
zOff+0.216506
), new Point3D(0.000000,1.125000,
zOff+0.216506
), new Point3D(0.000000,1.216506,
zOff+0.125000
));
object[292] = new Triangle(new Point3D(0.000000,1.125000,
zOff+0.216506
), new Point3D(-0.146842,1.115375,
zOff+0.216506
), new Point3D(-0.130526,0.991445,
zOff+0.250000
));
object[293] = new Triangle(new Point3D(-0.130526,0.991445,
zOff+0.250000
), new Point3D(0.000000,1.000000,
zOff+0.250000
), new Point3D(0.000000,1.125000,
zOff+0.216506
));
object[294] = new Triangle(new Point3D(0.000000,1.000000,
zOff+0.250000
), new Point3D(-0.130526,0.991445,
zOff+0.250000
), new Point3D(-0.114211,0.867514,
zOff+0.216506
));
object[295] = new Triangle(new Point3D(-0.114211,0.867514,
zOff+0.216506
), new Point3D(0.000000,0.875000,
zOff+0.216506
), new Point3D(0.000000,1.000000,
zOff+0.250000
));
object[296] = new Triangle(new Point3D(0.000000,0.875000,
zOff+0.216506
), new Point3D(-0.114211,0.867514,
zOff+0.216506
), new Point3D(-0.102267,0.776791,
zOff+0.125000
));
object[297] = new Triangle(new Point3D(-0.102267,0.776791,
zOff+0.125000
), new Point3D(0.000000,0.783494,
zOff+0.125000
), new Point3D(0.000000,0.875000,
zOff+0.216506
));
object[298] = new Triangle(new Point3D(0.000000,0.783494,
zOff+0.125000
), new Point3D(-0.102267,0.776791,
zOff+0.125000
), new Point3D(-0.097895,0.743584,
zOff+0.000000
));
object[299] = new Triangle(new Point3D(-0.097895,0.743584,
zOff+0.000000
), new Point3D(0.000000,0.750000,
zOff+0.000000
), new Point3D(0.000000,0.783494,
zOff+0.125000
));
object[300] = new Triangle(new Point3D(0.000000,0.750000,
zOff+0.000000
), new Point3D(-0.097895,0.743584,
zOff+0.000000
), new Point3D(-0.102267,0.776791,
zOff-0.125000
));
object[301] = new Triangle(new Point3D(-0.102267,0.776791,
zOff-0.125000
), new Point3D(0.000000,0.783494,
zOff-0.125000
), new Point3D(0.000000,0.750000,
zOff+0.000000
));
object[302] = new Triangle(new Point3D(0.000000,0.783494,
zOff-0.125000
), new Point3D(-0.102267,0.776791,
zOff-0.125000
), new Point3D(-0.114211,0.867514,
zOff-0.216506
));
object[303] = new Triangle(new Point3D(-0.114211,0.867514,
zOff-0.216506
), new Point3D(0.000000,0.875000,
zOff-0.216506
), new Point3D(0.000000,0.783494,
zOff-0.125000
));
object[304] = new Triangle(new Point3D(0.000000,0.875000,
zOff-0.216506
), new Point3D(-0.114211,0.867514,
zOff-0.216506
), new Point3D(-0.130526,0.991445,
zOff-0.250000
));
object[305] = new Triangle(new Point3D(-0.130526,0.991445,
zOff-0.250000
), new Point3D(0.000000,1.000000,
zOff-0.250000
), new Point3D(0.000000,0.875000,
zOff-0.216506
));
object[306] = new Triangle(new Point3D(0.000000,1.000000,
zOff-0.250000
), new Point3D(-0.130526,0.991445,
zOff-0.250000
), new Point3D(-0.146842,1.115375,
zOff-0.216506
));
object[307] = new Triangle(new Point3D(-0.146842,1.115375,
zOff-0.216506
), new Point3D(0.000000,1.125000,
zOff-0.216506
), new Point3D(0.000000,1.000000,
zOff-0.250000
));
object[308] = new Triangle(new Point3D(0.000000,1.125000,
zOff-0.216506
), new Point3D(-0.146842,1.115375,
zOff-0.216506
), new Point3D(-0.158786,1.206099,
zOff-0.125000
));
object[309] = new Triangle(new Point3D(-0.158786,1.206099,
zOff-0.125000
), new Point3D(0.000000,1.216506,
zOff-0.125000
), new Point3D(0.000000,1.125000,
zOff-0.216506
));
object[310] = new Triangle(new Point3D(0.000000,1.216506,
zOff-0.125000
), new Point3D(-0.158786,1.206099,
zOff-0.125000
), new Point3D(-0.163158,1.239306,
zOff+0.000000
));
object[311] = new Triangle(new Point3D(-0.163158,1.239306,
zOff+0.000000
), new Point3D(0.000000,1.250000,
zOff+0.000000
), new Point3D(0.000000,1.216506,
zOff-0.125000
));
object[312] = new Triangle(new Point3D(-0.163158,1.239306,
zOff+0.000000
), new Point3D(-0.323524,1.207407,
zOff+0.000000
), new Point3D(-0.314855,1.175055,
zOff+0.125000
));
object[313] = new Triangle(new Point3D(-0.314855,1.175055,
zOff+0.125000
), new Point3D(-0.158786,1.206099,
zOff+0.125000
), new Point3D(-0.163158,1.239306,
zOff+0.000000
));
object[314] = new Triangle(new Point3D(-0.158786,1.206099,
zOff+0.125000
), new Point3D(-0.314855,1.175055,
zOff+0.125000
), new Point3D(-0.291171,1.086667,
zOff+0.216506
));
object[315] = new Triangle(new Point3D(-0.291171,1.086667,
zOff+0.216506
), new Point3D(-0.146842,1.115375,
zOff+0.216506
), new Point3D(-0.158786,1.206099,
zOff+0.125000
));
object[316] = new Triangle(new Point3D(-0.146842,1.115375,
zOff+0.216506
), new Point3D(-0.291171,1.086667,
zOff+0.216506
), new Point3D(-0.258819,0.965926,
zOff+0.250000
));
object[317] = new Triangle(new Point3D(-0.258819,0.965926,
zOff+0.250000
), new Point3D(-0.130526,0.991445,
zOff+0.250000
), new Point3D(-0.146842,1.115375,
zOff+0.216506
));
object[318] = new Triangle(new Point3D(-0.130526,0.991445,
zOff+0.250000
), new Point3D(-0.258819,0.965926,
zOff+0.250000
), new Point3D(-0.226467,0.845185,
zOff+0.216506
));
object[319] = new Triangle(new Point3D(-0.226467,0.845185,
zOff+0.216506
), new Point3D(-0.114211,0.867514,
zOff+0.216506
), new Point3D(-0.130526,0.991445,
zOff+0.250000
));
object[320] = new Triangle(new Point3D(-0.114211,0.867514,
zOff+0.216506
), new Point3D(-0.226467,0.845185,
zOff+0.216506
), new Point3D(-0.202783,0.756797,
zOff+0.125000
));
object[321] = new Triangle(new Point3D(-0.202783,0.756797,
zOff+0.125000
), new Point3D(-0.102267,0.776791,
zOff+0.125000
), new Point3D(-0.114211,0.867514,
zOff+0.216506
));
object[322] = new Triangle(new Point3D(-0.102267,0.776791,
zOff+0.125000
), new Point3D(-0.202783,0.756797,
zOff+0.125000
), new Point3D(-0.194114,0.724444,
zOff+0.000000
));
object[323] = new Triangle(new Point3D(-0.194114,0.724444,
zOff+0.000000
), new Point3D(-0.097895,0.743584,
zOff+0.000000
), new Point3D(-0.102267,0.776791,
zOff+0.125000
));
object[324] = new Triangle(new Point3D(-0.097895,0.743584,
zOff+0.000000
), new Point3D(-0.194114,0.724444,
zOff+0.000000
), new Point3D(-0.202783,0.756797,
zOff-0.125000
));
object[325] = new Triangle(new Point3D(-0.202783,0.756797,
zOff-0.125000
), new Point3D(-0.102267,0.776791,
zOff-0.125000
), new Point3D(-0.097895,0.743584,
zOff+0.000000
));
object[326] = new Triangle(new Point3D(-0.102267,0.776791,
zOff-0.125000
), new Point3D(-0.202783,0.756797,
zOff-0.125000
), new Point3D(-0.226467,0.845185,
zOff-0.216506
));
object[327] = new Triangle(new Point3D(-0.226467,0.845185,
zOff-0.216506
), new Point3D(-0.114211,0.867514,
zOff-0.216506
), new Point3D(-0.102267,0.776791,
zOff-0.125000
));
object[328] = new Triangle(new Point3D(-0.114211,0.867514,
zOff-0.216506
), new Point3D(-0.226467,0.845185,
zOff-0.216506
), new Point3D(-0.258819,0.965926,
zOff-0.250000
));
object[329] = new Triangle(new Point3D(-0.258819,0.965926,
zOff-0.250000
), new Point3D(-0.130526,0.991445,
zOff-0.250000
), new Point3D(-0.114211,0.867514,
zOff-0.216506
));
object[330] = new Triangle(new Point3D(-0.130526,0.991445,
zOff-0.250000
), new Point3D(-0.258819,0.965926,
zOff-0.250000
), new Point3D(-0.291171,1.086667,
zOff-0.216506
));
object[331] = new Triangle(new Point3D(-0.291171,1.086667,
zOff-0.216506
), new Point3D(-0.146842,1.115375,
zOff-0.216506
), new Point3D(-0.130526,0.991445,
zOff-0.250000
));
object[332] = new Triangle(new Point3D(-0.146842,1.115375,
zOff-0.216506
), new Point3D(-0.291171,1.086667,
zOff-0.216506
), new Point3D(-0.314855,1.175055,
zOff-0.125000
));
object[333] = new Triangle(new Point3D(-0.314855,1.175055,
zOff-0.125000
), new Point3D(-0.158786,1.206099,
zOff-0.125000
), new Point3D(-0.146842,1.115375,
zOff-0.216506
));
object[334] = new Triangle(new Point3D(-0.158786,1.206099,
zOff-0.125000
), new Point3D(-0.314855,1.175055,
zOff-0.125000
), new Point3D(-0.323524,1.207407,
zOff+0.000000
));
object[335] = new Triangle(new Point3D(-0.323524,1.207407,
zOff+0.000000
), new Point3D(-0.163158,1.239306,
zOff+0.000000
), new Point3D(-0.158786,1.206099,
zOff-0.125000
));
object[336] = new Triangle(new Point3D(-0.323524,1.207407,
zOff+0.000000
), new Point3D(-0.478354,1.154849,
zOff+0.000000
), new Point3D(-0.465537,1.123905,
zOff+0.125000
));
object[337] = new Triangle(new Point3D(-0.465537,1.123905,
zOff+0.125000
), new Point3D(-0.314855,1.175055,
zOff+0.125000
), new Point3D(-0.323524,1.207407,
zOff+0.000000
));
object[338] = new Triangle(new Point3D(-0.314855,1.175055,
zOff+0.125000
), new Point3D(-0.465537,1.123905,
zOff+0.125000
), new Point3D(-0.430519,1.039364,
zOff+0.216506
));
object[339] = new Triangle(new Point3D(-0.430519,1.039364,
zOff+0.216506
), new Point3D(-0.291171,1.086667,
zOff+0.216506
), new Point3D(-0.314855,1.175055,
zOff+0.125000
));
object[340] = new Triangle(new Point3D(-0.291171,1.086667,
zOff+0.216506
), new Point3D(-0.430519,1.039364,
zOff+0.216506
), new Point3D(-0.382684,0.923880,
zOff+0.250000
));
object[341] = new Triangle(new Point3D(-0.382684,0.923880,
zOff+0.250000
), new Point3D(-0.258819,0.965926,
zOff+0.250000
), new Point3D(-0.291171,1.086667,
zOff+0.216506
));
object[342] = new Triangle(new Point3D(-0.258819,0.965926,
zOff+0.250000
), new Point3D(-0.382684,0.923880,
zOff+0.250000
), new Point3D(-0.334848,0.808395,
zOff+0.216506
));
object[343] = new Triangle(new Point3D(-0.334848,0.808395,
zOff+0.216506
), new Point3D(-0.226467,0.845185,
zOff+0.216506
), new Point3D(-0.258819,0.965926,
zOff+0.250000
));
object[344] = new Triangle(new Point3D(-0.226467,0.845185,
zOff+0.216506
), new Point3D(-0.334848,0.808395,
zOff+0.216506
), new Point3D(-0.299830,0.723854,
zOff+0.125000
));
object[345] = new Triangle(new Point3D(-0.299830,0.723854,
zOff+0.125000
), new Point3D(-0.202783,0.756797,
zOff+0.125000
), new Point3D(-0.226467,0.845185,
zOff+0.216506
));
object[346] = new Triangle(new Point3D(-0.202783,0.756797,
zOff+0.125000
), new Point3D(-0.299830,0.723854,
zOff+0.125000
), new Point3D(-0.287013,0.692910,
zOff+0.000000
));
object[347] = new Triangle(new Point3D(-0.287013,0.692910,
zOff+0.000000
), new Point3D(-0.194114,0.724444,
zOff+0.000000
), new Point3D(-0.202783,0.756797,
zOff+0.125000
));
object[348] = new Triangle(new Point3D(-0.194114,0.724444,
zOff+0.000000
), new Point3D(-0.287013,0.692910,
zOff+0.000000
), new Point3D(-0.299830,0.723854,
zOff-0.125000
));
object[349] = new Triangle(new Point3D(-0.299830,0.723854,
zOff-0.125000
), new Point3D(-0.202783,0.756797,
zOff-0.125000
), new Point3D(-0.194114,0.724444,
zOff+0.000000
));
object[350] = new Triangle(new Point3D(-0.202783,0.756797,
zOff-0.125000
), new Point3D(-0.299830,0.723854,
zOff-0.125000
), new Point3D(-0.334848,0.808395,
zOff-0.216506
));
object[351] = new Triangle(new Point3D(-0.334848,0.808395,
zOff-0.216506
), new Point3D(-0.226467,0.845185,
zOff-0.216506
), new Point3D(-0.202783,0.756797,
zOff-0.125000
));
object[352] = new Triangle(new Point3D(-0.226467,0.845185,
zOff-0.216506
), new Point3D(-0.334848,0.808395,
zOff-0.216506
), new Point3D(-0.382684,0.923880,
zOff-0.250000
));
object[353] = new Triangle(new Point3D(-0.382684,0.923880,
zOff-0.250000
), new Point3D(-0.258819,0.965926,
zOff-0.250000
), new Point3D(-0.226467,0.845185,
zOff-0.216506
));
object[354] = new Triangle(new Point3D(-0.258819,0.965926,
zOff-0.250000
), new Point3D(-0.382684,0.923880,
zOff-0.250000
), new Point3D(-0.430519,1.039364,
zOff-0.216506
));
object[355] = new Triangle(new Point3D(-0.430519,1.039364,
zOff-0.216506
), new Point3D(-0.291171,1.086667,
zOff-0.216506
), new Point3D(-0.258819,0.965926,
zOff-0.250000
));
object[356] = new Triangle(new Point3D(-0.291171,1.086667,
zOff-0.216506
), new Point3D(-0.430519,1.039364,
zOff-0.216506
), new Point3D(-0.465537,1.123905,
zOff-0.125000
));
object[357] = new Triangle(new Point3D(-0.465537,1.123905,
zOff-0.125000
), new Point3D(-0.314855,1.175055,
zOff-0.125000
), new Point3D(-0.291171,1.086667,
zOff-0.216506
));
object[358] = new Triangle(new Point3D(-0.314855,1.175055,
zOff-0.125000
), new Point3D(-0.465537,1.123905,
zOff-0.125000
), new Point3D(-0.478354,1.154849,
zOff+0.000000
));
object[359] = new Triangle(new Point3D(-0.478354,1.154849,
zOff+0.000000
), new Point3D(-0.323524,1.207407,
zOff+0.000000
), new Point3D(-0.314855,1.175055,
zOff-0.125000
));
object[360] = new Triangle(new Point3D(-0.478354,1.154849,
zOff+0.000000
), new Point3D(-0.625000,1.082532,
zOff+0.000000
), new Point3D(-0.608253,1.053526,
zOff+0.125000
));
object[361] = new Triangle(new Point3D(-0.608253,1.053526,
zOff+0.125000
), new Point3D(-0.465537,1.123905,
zOff+0.125000
), new Point3D(-0.478354,1.154849,
zOff+0.000000
));
object[362] = new Triangle(new Point3D(-0.465537,1.123905,
zOff+0.125000
), new Point3D(-0.608253,1.053526,
zOff+0.125000
), new Point3D(-0.562500,0.974279,
zOff+0.216506
));
object[363] = new Triangle(new Point3D(-0.562500,0.974279,
zOff+0.216506
), new Point3D(-0.430519,1.039364,
zOff+0.216506
), new Point3D(-0.465537,1.123905,
zOff+0.125000
));
object[364] = new Triangle(new Point3D(-0.430519,1.039364,
zOff+0.216506
), new Point3D(-0.562500,0.974279,
zOff+0.216506
), new Point3D(-0.500000,0.866026,
zOff+0.250000
));
object[365] = new Triangle(new Point3D(-0.500000,0.866026,
zOff+0.250000
), new Point3D(-0.382684,0.923880,
zOff+0.250000
), new Point3D(-0.430519,1.039364,
zOff+0.216506
));
object[366] = new Triangle(new Point3D(-0.382684,0.923880,
zOff+0.250000
), new Point3D(-0.500000,0.866026,
zOff+0.250000
), new Point3D(-0.437500,0.757772,
zOff+0.216506
));
object[367] = new Triangle(new Point3D(-0.437500,0.757772,
zOff+0.216506
), new Point3D(-0.334848,0.808395,
zOff+0.216506
), new Point3D(-0.382684,0.923880,
zOff+0.250000
));
object[368] = new Triangle(new Point3D(-0.334848,0.808395,
zOff+0.216506
), new Point3D(-0.437500,0.757772,
zOff+0.216506
), new Point3D(-0.391747,0.678525,
zOff+0.125000
));
object[369] = new Triangle(new Point3D(-0.391747,0.678525,
zOff+0.125000
), new Point3D(-0.299830,0.723854,
zOff+0.125000
), new Point3D(-0.334848,0.808395,
zOff+0.216506
));
object[370] = new Triangle(new Point3D(-0.299830,0.723854,
zOff+0.125000
), new Point3D(-0.391747,0.678525,
zOff+0.125000
), new Point3D(-0.375000,0.649519,
zOff+0.000000
));
object[371] = new Triangle(new Point3D(-0.375000,0.649519,
zOff+0.000000
), new Point3D(-0.287013,0.692910,
zOff+0.000000
), new Point3D(-0.299830,0.723854,
zOff+0.125000
));
object[372] = new Triangle(new Point3D(-0.287013,0.692910,
zOff+0.000000
), new Point3D(-0.375000,0.649519,
zOff+0.000000
), new Point3D(-0.391747,0.678525,
zOff-0.125000
));
object[373] = new Triangle(new Point3D(-0.391747,0.678525,
zOff-0.125000
), new Point3D(-0.299830,0.723854,
zOff-0.125000
), new Point3D(-0.287013,0.692910,
zOff+0.000000
));
object[374] = new Triangle(new Point3D(-0.299830,0.723854,
zOff-0.125000
), new Point3D(-0.391747,0.678525,
zOff-0.125000
), new Point3D(-0.437500,0.757772,
zOff-0.216506
));
object[375] = new Triangle(new Point3D(-0.437500,0.757772,
zOff-0.216506
), new Point3D(-0.334848,0.808395,
zOff-0.216506
), new Point3D(-0.299830,0.723854,
zOff-0.125000
));
object[376] = new Triangle(new Point3D(-0.334848,0.808395,
zOff-0.216506
), new Point3D(-0.437500,0.757772,
zOff-0.216506
), new Point3D(-0.500000,0.866026,
zOff-0.250000
));
object[377] = new Triangle(new Point3D(-0.500000,0.866026,
zOff-0.250000
), new Point3D(-0.382684,0.923880,
zOff-0.250000
), new Point3D(-0.334848,0.808395,
zOff-0.216506
));
object[378] = new Triangle(new Point3D(-0.382684,0.923880,
zOff-0.250000
), new Point3D(-0.500000,0.866026,
zOff-0.250000
), new Point3D(-0.562500,0.974279,
zOff-0.216506
));
object[379] = new Triangle(new Point3D(-0.562500,0.974279,
zOff-0.216506
), new Point3D(-0.430519,1.039364,
zOff-0.216506
), new Point3D(-0.382684,0.923880,
zOff-0.250000
));
object[380] = new Triangle(new Point3D(-0.430519,1.039364,
zOff-0.216506
), new Point3D(-0.562500,0.974279,
zOff-0.216506
), new Point3D(-0.608253,1.053526,
zOff-0.125000
));
object[381] = new Triangle(new Point3D(-0.608253,1.053526,
zOff-0.125000
), new Point3D(-0.465537,1.123905,
zOff-0.125000
), new Point3D(-0.430519,1.039364,
zOff-0.216506
));
object[382] = new Triangle(new Point3D(-0.465537,1.123905,
zOff-0.125000
), new Point3D(-0.608253,1.053526,
zOff-0.125000
), new Point3D(-0.625000,1.082532,
zOff+0.000000
));
object[383] = new Triangle(new Point3D(-0.625000,1.082532,
zOff+0.000000
), new Point3D(-0.478354,1.154849,
zOff+0.000000
), new Point3D(-0.465537,1.123905,
zOff-0.125000
));
object[384] = new Triangle(new Point3D(-0.625000,1.082532,
zOff+0.000000
), new Point3D(-0.760952,0.991692,
zOff+0.000000
), new Point3D(-0.740562,0.965119,
zOff+0.125000
));
object[385] = new Triangle(new Point3D(-0.740562,0.965119,
zOff+0.125000
), new Point3D(-0.608253,1.053526,
zOff+0.125000
), new Point3D(-0.625000,1.082532,
zOff+0.000000
));
object[386] = new Triangle(new Point3D(-0.608253,1.053526,
zOff+0.125000
), new Point3D(-0.740562,0.965119,
zOff+0.125000
), new Point3D(-0.684857,0.892522,
zOff+0.216506
));
object[387] = new Triangle(new Point3D(-0.684857,0.892522,
zOff+0.216506
), new Point3D(-0.562500,0.974279,
zOff+0.216506
), new Point3D(-0.608253,1.053526,
zOff+0.125000
));
object[388] = new Triangle(new Point3D(-0.562500,0.974279,
zOff+0.216506
), new Point3D(-0.684857,0.892522,
zOff+0.216506
), new Point3D(-0.608761,0.793353,
zOff+0.250000
));
object[389] = new Triangle(new Point3D(-0.608761,0.793353,
zOff+0.250000
), new Point3D(-0.500000,0.866026,
zOff+0.250000
), new Point3D(-0.562500,0.974279,
zOff+0.216506
));
object[390] = new Triangle(new Point3D(-0.500000,0.866026,
zOff+0.250000
), new Point3D(-0.608761,0.793353,
zOff+0.250000
), new Point3D(-0.532666,0.694184,
zOff+0.216506
));
object[391] = new Triangle(new Point3D(-0.532666,0.694184,
zOff+0.216506
), new Point3D(-0.437500,0.757772,
zOff+0.216506
), new Point3D(-0.500000,0.866026,
zOff+0.250000
));
object[392] = new Triangle(new Point3D(-0.437500,0.757772,
zOff+0.216506
), new Point3D(-0.532666,0.694184,
zOff+0.216506
), new Point3D(-0.476961,0.621587,
zOff+0.125000
));
object[393] = new Triangle(new Point3D(-0.476961,0.621587,
zOff+0.125000
), new Point3D(-0.391747,0.678525,
zOff+0.125000
), new Point3D(-0.437500,0.757772,
zOff+0.216506
));
object[394] = new Triangle(new Point3D(-0.391747,0.678525,
zOff+0.125000
), new Point3D(-0.476961,0.621587,
zOff+0.125000
), new Point3D(-0.456571,0.595015,
zOff+0.000000
));
object[395] = new Triangle(new Point3D(-0.456571,0.595015,
zOff+0.000000
), new Point3D(-0.375000,0.649519,
zOff+0.000000
), new Point3D(-0.391747,0.678525,
zOff+0.125000
));
object[396] = new Triangle(new Point3D(-0.375000,0.649519,
zOff+0.000000
), new Point3D(-0.456571,0.595015,
zOff+0.000000
), new Point3D(-0.476961,0.621587,
zOff-0.125000
));
object[397] = new Triangle(new Point3D(-0.476961,0.621587,
zOff-0.125000
), new Point3D(-0.391747,0.678525,
zOff-0.125000
), new Point3D(-0.375000,0.649519,
zOff+0.000000
));
object[398] = new Triangle(new Point3D(-0.391747,0.678525,
zOff-0.125000
), new Point3D(-0.476961,0.621587,
zOff-0.125000
), new Point3D(-0.532666,0.694184,
zOff-0.216506
));
object[399] = new Triangle(new Point3D(-0.532666,0.694184,
zOff-0.216506
), new Point3D(-0.437500,0.757772,
zOff-0.216506
), new Point3D(-0.391747,0.678525,
zOff-0.125000
));
object[400] = new Triangle(new Point3D(-0.437500,0.757772,
zOff-0.216506
), new Point3D(-0.532666,0.694184,
zOff-0.216506
), new Point3D(-0.608761,0.793353,
zOff-0.250000
));
object[401] = new Triangle(new Point3D(-0.608761,0.793353,
zOff-0.250000
), new Point3D(-0.500000,0.866026,
zOff-0.250000
), new Point3D(-0.437500,0.757772,
zOff-0.216506
));
object[402] = new Triangle(new Point3D(-0.500000,0.866026,
zOff-0.250000
), new Point3D(-0.608761,0.793353,
zOff-0.250000
), new Point3D(-0.684857,0.892522,
zOff-0.216506
));
object[403] = new Triangle(new Point3D(-0.684857,0.892522,
zOff-0.216506
), new Point3D(-0.562500,0.974279,
zOff-0.216506
), new Point3D(-0.500000,0.866026,
zOff-0.250000
));
object[404] = new Triangle(new Point3D(-0.562500,0.974279,
zOff-0.216506
), new Point3D(-0.684857,0.892522,
zOff-0.216506
), new Point3D(-0.740562,0.965119,
zOff-0.125000
));
object[405] = new Triangle(new Point3D(-0.740562,0.965119,
zOff-0.125000
), new Point3D(-0.608253,1.053526,
zOff-0.125000
), new Point3D(-0.562500,0.974279,
zOff-0.216506
));
object[406] = new Triangle(new Point3D(-0.608253,1.053526,
zOff-0.125000
), new Point3D(-0.740562,0.965119,
zOff-0.125000
), new Point3D(-0.760952,0.991692,
zOff+0.000000
));
object[407] = new Triangle(new Point3D(-0.760952,0.991692,
zOff+0.000000
), new Point3D(-0.625000,1.082532,
zOff+0.000000
), new Point3D(-0.608253,1.053526,
zOff-0.125000
));
object[408] = new Triangle(new Point3D(-0.760952,0.991692,
zOff+0.000000
), new Point3D(-0.883884,0.883883,
zOff+0.000000
), new Point3D(-0.860200,0.860200,
zOff+0.125000
));
object[409] = new Triangle(new Point3D(-0.860200,0.860200,
zOff+0.125000
), new Point3D(-0.740562,0.965119,
zOff+0.125000
), new Point3D(-0.760952,0.991692,
zOff+0.000000
));
object[410] = new Triangle(new Point3D(-0.740562,0.965119,
zOff+0.125000
), new Point3D(-0.860200,0.860200,
zOff+0.125000
), new Point3D(-0.795495,0.795495,
zOff+0.216506
));
object[411] = new Triangle(new Point3D(-0.795495,0.795495,
zOff+0.216506
), new Point3D(-0.684857,0.892522,
zOff+0.216506
), new Point3D(-0.740562,0.965119,
zOff+0.125000
));
object[412] = new Triangle(new Point3D(-0.684857,0.892522,
zOff+0.216506
), new Point3D(-0.795495,0.795495,
zOff+0.216506
), new Point3D(-0.707107,0.707107,
zOff+0.250000
));
object[413] = new Triangle(new Point3D(-0.707107,0.707107,
zOff+0.250000
), new Point3D(-0.608761,0.793353,
zOff+0.250000
), new Point3D(-0.684857,0.892522,
zOff+0.216506
));
object[414] = new Triangle(new Point3D(-0.608761,0.793353,
zOff+0.250000
), new Point3D(-0.707107,0.707107,
zOff+0.250000
), new Point3D(-0.618719,0.618718,
zOff+0.216506
));
object[415] = new Triangle(new Point3D(-0.618719,0.618718,
zOff+0.216506
), new Point3D(-0.532666,0.694184,
zOff+0.216506
), new Point3D(-0.608761,0.793353,
zOff+0.250000
));
object[416] = new Triangle(new Point3D(-0.532666,0.694184,
zOff+0.216506
), new Point3D(-0.618719,0.618718,
zOff+0.216506
), new Point3D(-0.554014,0.554013,
zOff+0.125000
));
object[417] = new Triangle(new Point3D(-0.554014,0.554013,
zOff+0.125000
), new Point3D(-0.476961,0.621587,
zOff+0.125000
), new Point3D(-0.532666,0.694184,
zOff+0.216506
));
object[418] = new Triangle(new Point3D(-0.476961,0.621587,
zOff+0.125000
), new Point3D(-0.554014,0.554013,
zOff+0.125000
), new Point3D(-0.530330,0.530330,
zOff+0.000000
));
object[419] = new Triangle(new Point3D(-0.530330,0.530330,
zOff+0.000000
), new Point3D(-0.456571,0.595015,
zOff+0.000000
), new Point3D(-0.476961,0.621587,
zOff+0.125000
));
object[420] = new Triangle(new Point3D(-0.456571,0.595015,
zOff+0.000000
), new Point3D(-0.530330,0.530330,
zOff+0.000000
), new Point3D(-0.554014,0.554013,
zOff-0.125000
));
object[421] = new Triangle(new Point3D(-0.554014,0.554013,
zOff-0.125000
), new Point3D(-0.476961,0.621587,
zOff-0.125000
), new Point3D(-0.456571,0.595015,
zOff+0.000000
));
object[422] = new Triangle(new Point3D(-0.476961,0.621587,
zOff-0.125000
), new Point3D(-0.554014,0.554013,
zOff-0.125000
), new Point3D(-0.618719,0.618718,
zOff-0.216506
));
object[423] = new Triangle(new Point3D(-0.618719,0.618718,
zOff-0.216506
), new Point3D(-0.532666,0.694184,
zOff-0.216506
), new Point3D(-0.476961,0.621587,
zOff-0.125000
));
object[424] = new Triangle(new Point3D(-0.532666,0.694184,
zOff-0.216506
), new Point3D(-0.618719,0.618718,
zOff-0.216506
), new Point3D(-0.707107,0.707107,
zOff-0.250000
));
object[425] = new Triangle(new Point3D(-0.707107,0.707107,
zOff-0.250000
), new Point3D(-0.608761,0.793353,
zOff-0.250000
), new Point3D(-0.532666,0.694184,
zOff-0.216506
));
object[426] = new Triangle(new Point3D(-0.608761,0.793353,
zOff-0.250000
), new Point3D(-0.707107,0.707107,
zOff-0.250000
), new Point3D(-0.795495,0.795495,
zOff-0.216506
));
object[427] = new Triangle(new Point3D(-0.795495,0.795495,
zOff-0.216506
), new Point3D(-0.684857,0.892522,
zOff-0.216506
), new Point3D(-0.608761,0.793353,
zOff-0.250000
));
object[428] = new Triangle(new Point3D(-0.684857,0.892522,
zOff-0.216506
), new Point3D(-0.795495,0.795495,
zOff-0.216506
), new Point3D(-0.860200,0.860200,
zOff-0.125000
));
object[429] = new Triangle(new Point3D(-0.860200,0.860200,
zOff-0.125000
), new Point3D(-0.740562,0.965119,
zOff-0.125000
), new Point3D(-0.684857,0.892522,
zOff-0.216506
));
object[430] = new Triangle(new Point3D(-0.740562,0.965119,
zOff-0.125000
), new Point3D(-0.860200,0.860200,
zOff-0.125000
), new Point3D(-0.883884,0.883883,
zOff+0.000000
));
object[431] = new Triangle(new Point3D(-0.883884,0.883883,
zOff+0.000000
), new Point3D(-0.760952,0.991692,
zOff+0.000000
), new Point3D(-0.740562,0.965119,
zOff-0.125000
));
object[432] = new Triangle(new Point3D(-0.883884,0.883883,
zOff+0.000000
), new Point3D(-0.991692,0.760952,
zOff+0.000000
), new Point3D(-0.965119,0.740562,
zOff+0.125000
));
object[433] = new Triangle(new Point3D(-0.965119,0.740562,
zOff+0.125000
), new Point3D(-0.860200,0.860200,
zOff+0.125000
), new Point3D(-0.883884,0.883883,
zOff+0.000000
));
object[434] = new Triangle(new Point3D(-0.860200,0.860200,
zOff+0.125000
), new Point3D(-0.965119,0.740562,
zOff+0.125000
), new Point3D(-0.892522,0.684857,
zOff+0.216506
));
object[435] = new Triangle(new Point3D(-0.892522,0.684857,
zOff+0.216506
), new Point3D(-0.795495,0.795495,
zOff+0.216506
), new Point3D(-0.860200,0.860200,
zOff+0.125000
));
object[436] = new Triangle(new Point3D(-0.795495,0.795495,
zOff+0.216506
), new Point3D(-0.892522,0.684857,
zOff+0.216506
), new Point3D(-0.793353,0.608761,
zOff+0.250000
));
object[437] = new Triangle(new Point3D(-0.793353,0.608761,
zOff+0.250000
), new Point3D(-0.707107,0.707107,
zOff+0.250000
), new Point3D(-0.795495,0.795495,
zOff+0.216506
));
object[438] = new Triangle(new Point3D(-0.707107,0.707107,
zOff+0.250000
), new Point3D(-0.793353,0.608761,
zOff+0.250000
), new Point3D(-0.694184,0.532666,
zOff+0.216506
));
object[439] = new Triangle(new Point3D(-0.694184,0.532666,
zOff+0.216506
), new Point3D(-0.618719,0.618718,
zOff+0.216506
), new Point3D(-0.707107,0.707107,
zOff+0.250000
));
object[440] = new Triangle(new Point3D(-0.618719,0.618718,
zOff+0.216506
), new Point3D(-0.694184,0.532666,
zOff+0.216506
), new Point3D(-0.621587,0.476961,
zOff+0.125000
));
object[441] = new Triangle(new Point3D(-0.621587,0.476961,
zOff+0.125000
), new Point3D(-0.554014,0.554013,
zOff+0.125000
), new Point3D(-0.618719,0.618718,
zOff+0.216506
));
object[442] = new Triangle(new Point3D(-0.554014,0.554013,
zOff+0.125000
), new Point3D(-0.621587,0.476961,
zOff+0.125000
), new Point3D(-0.595015,0.456571,
zOff+0.000000
));
object[443] = new Triangle(new Point3D(-0.595015,0.456571,
zOff+0.000000
), new Point3D(-0.530330,0.530330,
zOff+0.000000
), new Point3D(-0.554014,0.554013,
zOff+0.125000
));
object[444] = new Triangle(new Point3D(-0.530330,0.530330,
zOff+0.000000
), new Point3D(-0.595015,0.456571,
zOff+0.000000
), new Point3D(-0.621587,0.476961,
zOff-0.125000
));
object[445] = new Triangle(new Point3D(-0.621587,0.476961,
zOff-0.125000
), new Point3D(-0.554014,0.554013,
zOff-0.125000
), new Point3D(-0.530330,0.530330,
zOff+0.000000
));
object[446] = new Triangle(new Point3D(-0.554014,0.554013,
zOff-0.125000
), new Point3D(-0.621587,0.476961,
zOff-0.125000
), new Point3D(-0.694184,0.532666,
zOff-0.216506
));
object[447] = new Triangle(new Point3D(-0.694184,0.532666,
zOff-0.216506
), new Point3D(-0.618719,0.618718,
zOff-0.216506
), new Point3D(-0.554014,0.554013,
zOff-0.125000
));
object[448] = new Triangle(new Point3D(-0.618719,0.618718,
zOff-0.216506
), new Point3D(-0.694184,0.532666,
zOff-0.216506
), new Point3D(-0.793353,0.608761,
zOff-0.250000
));
object[449] = new Triangle(new Point3D(-0.793353,0.608761,
zOff-0.250000
), new Point3D(-0.707107,0.707107,
zOff-0.250000
), new Point3D(-0.618719,0.618718,
zOff-0.216506
));
object[450] = new Triangle(new Point3D(-0.707107,0.707107,
zOff-0.250000
), new Point3D(-0.793353,0.608761,
zOff-0.250000
), new Point3D(-0.892522,0.684857,
zOff-0.216506
));
object[451] = new Triangle(new Point3D(-0.892522,0.684857,
zOff-0.216506
), new Point3D(-0.795495,0.795495,
zOff-0.216506
), new Point3D(-0.707107,0.707107,
zOff-0.250000
));
object[452] = new Triangle(new Point3D(-0.795495,0.795495,
zOff-0.216506
), new Point3D(-0.892522,0.684857,
zOff-0.216506
), new Point3D(-0.965119,0.740562,
zOff-0.125000
));
object[453] = new Triangle(new Point3D(-0.965119,0.740562,
zOff-0.125000
), new Point3D(-0.860200,0.860200,
zOff-0.125000
), new Point3D(-0.795495,0.795495,
zOff-0.216506
));
object[454] = new Triangle(new Point3D(-0.860200,0.860200,
zOff-0.125000
), new Point3D(-0.965119,0.740562,
zOff-0.125000
), new Point3D(-0.991692,0.760952,
zOff+0.000000
));
object[455] = new Triangle(new Point3D(-0.991692,0.760952,
zOff+0.000000
), new Point3D(-0.883884,0.883883,
zOff+0.000000
), new Point3D(-0.860200,0.860200,
zOff-0.125000
));
object[456] = new Triangle(new Point3D(-0.991692,0.760952,
zOff+0.000000
), new Point3D(-1.082532,0.625000,
zOff+0.000000
), new Point3D(-1.053525,0.608253,
zOff+0.125000
));
object[457] = new Triangle(new Point3D(-1.053525,0.608253,
zOff+0.125000
), new Point3D(-0.965119,0.740562,
zOff+0.125000
), new Point3D(-0.991692,0.760952,
zOff+0.000000
));
object[458] = new Triangle(new Point3D(-0.965119,0.740562,
zOff+0.125000
), new Point3D(-1.053525,0.608253,
zOff+0.125000
), new Point3D(-0.974278,0.562500,
zOff+0.216506
));
object[459] = new Triangle(new Point3D(-0.974278,0.562500,
zOff+0.216506
), new Point3D(-0.892522,0.684857,
zOff+0.216506
), new Point3D(-0.965119,0.740562,
zOff+0.125000
));
object[460] = new Triangle(new Point3D(-0.892522,0.684857,
zOff+0.216506
), new Point3D(-0.974278,0.562500,
zOff+0.216506
), new Point3D(-0.866025,0.500000,
zOff+0.250000
));
object[461] = new Triangle(new Point3D(-0.866025,0.500000,
zOff+0.250000
), new Point3D(-0.793353,0.608761,
zOff+0.250000
), new Point3D(-0.892522,0.684857,
zOff+0.216506
));
object[462] = new Triangle(new Point3D(-0.793353,0.608761,
zOff+0.250000
), new Point3D(-0.866025,0.500000,
zOff+0.250000
), new Point3D(-0.757772,0.437500,
zOff+0.216506
));
object[463] = new Triangle(new Point3D(-0.757772,0.437500,
zOff+0.216506
), new Point3D(-0.694184,0.532666,
zOff+0.216506
), new Point3D(-0.793353,0.608761,
zOff+0.250000
));
object[464] = new Triangle(new Point3D(-0.694184,0.532666,
zOff+0.216506
), new Point3D(-0.757772,0.437500,
zOff+0.216506
), new Point3D(-0.678525,0.391747,
zOff+0.125000
));
object[465] = new Triangle(new Point3D(-0.678525,0.391747,
zOff+0.125000
), new Point3D(-0.621587,0.476961,
zOff+0.125000
), new Point3D(-0.694184,0.532666,
zOff+0.216506
));
object[466] = new Triangle(new Point3D(-0.621587,0.476961,
zOff+0.125000
), new Point3D(-0.678525,0.391747,
zOff+0.125000
), new Point3D(-0.649519,0.375000,
zOff+0.000000
));
object[467] = new Triangle(new Point3D(-0.649519,0.375000,
zOff+0.000000
), new Point3D(-0.595015,0.456571,
zOff+0.000000
), new Point3D(-0.621587,0.476961,
zOff+0.125000
));
object[468] = new Triangle(new Point3D(-0.595015,0.456571,
zOff+0.000000
), new Point3D(-0.649519,0.375000,
zOff+0.000000
), new Point3D(-0.678525,0.391747,
zOff-0.125000
));
object[469] = new Triangle(new Point3D(-0.678525,0.391747,
zOff-0.125000
), new Point3D(-0.621587,0.476961,
zOff-0.125000
), new Point3D(-0.595015,0.456571,
zOff+0.000000
));
object[470] = new Triangle(new Point3D(-0.621587,0.476961,
zOff-0.125000
), new Point3D(-0.678525,0.391747,
zOff-0.125000
), new Point3D(-0.757772,0.437500,
zOff-0.216506
));
object[471] = new Triangle(new Point3D(-0.757772,0.437500,
zOff-0.216506
), new Point3D(-0.694184,0.532666,
zOff-0.216506
), new Point3D(-0.621587,0.476961,
zOff-0.125000
));
object[472] = new Triangle(new Point3D(-0.694184,0.532666,
zOff-0.216506
), new Point3D(-0.757772,0.437500,
zOff-0.216506
), new Point3D(-0.866025,0.500000,
zOff-0.250000
));
object[473] = new Triangle(new Point3D(-0.866025,0.500000,
zOff-0.250000
), new Point3D(-0.793353,0.608761,
zOff-0.250000
), new Point3D(-0.694184,0.532666,
zOff-0.216506
));
object[474] = new Triangle(new Point3D(-0.793353,0.608761,
zOff-0.250000
), new Point3D(-0.866025,0.500000,
zOff-0.250000
), new Point3D(-0.974278,0.562500,
zOff-0.216506
));
object[475] = new Triangle(new Point3D(-0.974278,0.562500,
zOff-0.216506
), new Point3D(-0.892522,0.684857,
zOff-0.216506
), new Point3D(-0.793353,0.608761,
zOff-0.250000
));
object[476] = new Triangle(new Point3D(-0.892522,0.684857,
zOff-0.216506
), new Point3D(-0.974278,0.562500,
zOff-0.216506
), new Point3D(-1.053525,0.608253,
zOff-0.125000
));
object[477] = new Triangle(new Point3D(-1.053525,0.608253,
zOff-0.125000
), new Point3D(-0.965119,0.740562,
zOff-0.125000
), new Point3D(-0.892522,0.684857,
zOff-0.216506
));
object[478] = new Triangle(new Point3D(-0.965119,0.740562,
zOff-0.125000
), new Point3D(-1.053525,0.608253,
zOff-0.125000
), new Point3D(-1.082532,0.625000,
zOff+0.000000
));
object[479] = new Triangle(new Point3D(-1.082532,0.625000,
zOff+0.000000
), new Point3D(-0.991692,0.760952,
zOff+0.000000
), new Point3D(-0.965119,0.740562,
zOff-0.125000
));
object[480] = new Triangle(new Point3D(-1.082532,0.625000,
zOff+0.000000
), new Point3D(-1.154849,0.478354,
zOff+0.000000
), new Point3D(-1.123905,0.465537,
zOff+0.125000
));
object[481] = new Triangle(new Point3D(-1.123905,0.465537,
zOff+0.125000
), new Point3D(-1.053525,0.608253,
zOff+0.125000
), new Point3D(-1.082532,0.625000,
zOff+0.000000
));
object[482] = new Triangle(new Point3D(-1.053525,0.608253,
zOff+0.125000
), new Point3D(-1.123905,0.465537,
zOff+0.125000
), new Point3D(-1.039364,0.430519,
zOff+0.216506
));
object[483] = new Triangle(new Point3D(-1.039364,0.430519,
zOff+0.216506
), new Point3D(-0.974278,0.562500,
zOff+0.216506
), new Point3D(-1.053525,0.608253,
zOff+0.125000
));
object[484] = new Triangle(new Point3D(-0.974278,0.562500,
zOff+0.216506
), new Point3D(-1.039364,0.430519,
zOff+0.216506
), new Point3D(-0.923880,0.382683,
zOff+0.250000
));
object[485] = new Triangle(new Point3D(-0.923880,0.382683,
zOff+0.250000
), new Point3D(-0.866025,0.500000,
zOff+0.250000
), new Point3D(-0.974278,0.562500,
zOff+0.216506
));
object[486] = new Triangle(new Point3D(-0.866025,0.500000,
zOff+0.250000
), new Point3D(-0.923880,0.382683,
zOff+0.250000
), new Point3D(-0.808395,0.334848,
zOff+0.216506
));
object[487] = new Triangle(new Point3D(-0.808395,0.334848,
zOff+0.216506
), new Point3D(-0.757772,0.437500,
zOff+0.216506
), new Point3D(-0.866025,0.500000,
zOff+0.250000
));
object[488] = new Triangle(new Point3D(-0.757772,0.437500,
zOff+0.216506
), new Point3D(-0.808395,0.334848,
zOff+0.216506
), new Point3D(-0.723854,0.299830,
zOff+0.125000
));
object[489] = new Triangle(new Point3D(-0.723854,0.299830,
zOff+0.125000
), new Point3D(-0.678525,0.391747,
zOff+0.125000
), new Point3D(-0.757772,0.437500,
zOff+0.216506
));
object[490] = new Triangle(new Point3D(-0.678525,0.391747,
zOff+0.125000
), new Point3D(-0.723854,0.299830,
zOff+0.125000
), new Point3D(-0.692910,0.287013,
zOff+0.000000
));
object[491] = new Triangle(new Point3D(-0.692910,0.287013,
zOff+0.000000
), new Point3D(-0.649519,0.375000,
zOff+0.000000
), new Point3D(-0.678525,0.391747,
zOff+0.125000
));
object[492] = new Triangle(new Point3D(-0.649519,0.375000,
zOff+0.000000
), new Point3D(-0.692910,0.287013,
zOff+0.000000
), new Point3D(-0.723854,0.299830,
zOff-0.125000
));
object[493] = new Triangle(new Point3D(-0.723854,0.299830,
zOff-0.125000
), new Point3D(-0.678525,0.391747,
zOff-0.125000
), new Point3D(-0.649519,0.375000,
zOff+0.000000
));
object[494] = new Triangle(new Point3D(-0.678525,0.391747,
zOff-0.125000
), new Point3D(-0.723854,0.299830,
zOff-0.125000
), new Point3D(-0.808395,0.334848,
zOff-0.216506
));
object[495] = new Triangle(new Point3D(-0.808395,0.334848,
zOff-0.216506
), new Point3D(-0.757772,0.437500,
zOff-0.216506
), new Point3D(-0.678525,0.391747,
zOff-0.125000
));
object[496] = new Triangle(new Point3D(-0.757772,0.437500,
zOff-0.216506
), new Point3D(-0.808395,0.334848,
zOff-0.216506
), new Point3D(-0.923880,0.382683,
zOff-0.250000
));
object[497] = new Triangle(new Point3D(-0.923880,0.382683,
zOff-0.250000
), new Point3D(-0.866025,0.500000,
zOff-0.250000
), new Point3D(-0.757772,0.437500,
zOff-0.216506
));
object[498] = new Triangle(new Point3D(-0.866025,0.500000,
zOff-0.250000
), new Point3D(-0.923880,0.382683,
zOff-0.250000
), new Point3D(-1.039364,0.430519,
zOff-0.216506
));
object[499] = new Triangle(new Point3D(-1.039364,0.430519,
zOff-0.216506
), new Point3D(-0.974278,0.562500,
zOff-0.216506
), new Point3D(-0.866025,0.500000,
zOff-0.250000
));
object[500] = new Triangle(new Point3D(-0.974278,0.562500,
zOff-0.216506
), new Point3D(-1.039364,0.430519,
zOff-0.216506
), new Point3D(-1.123905,0.465537,
zOff-0.125000
));
object[501] = new Triangle(new Point3D(-1.123905,0.465537,
zOff-0.125000
), new Point3D(-1.053525,0.608253,
zOff-0.125000
), new Point3D(-0.974278,0.562500,
zOff-0.216506
));
object[502] = new Triangle(new Point3D(-1.053525,0.608253,
zOff-0.125000
), new Point3D(-1.123905,0.465537,
zOff-0.125000
), new Point3D(-1.154849,0.478354,
zOff+0.000000
));
object[503] = new Triangle(new Point3D(-1.154849,0.478354,
zOff+0.000000
), new Point3D(-1.082532,0.625000,
zOff+0.000000
), new Point3D(-1.053525,0.608253,
zOff-0.125000
));
object[504] = new Triangle(new Point3D(-1.154849,0.478354,
zOff+0.000000
), new Point3D(-1.207407,0.323524,
zOff+0.000000
), new Point3D(-1.175055,0.314855,
zOff+0.125000
));
object[505] = new Triangle(new Point3D(-1.175055,0.314855,
zOff+0.125000
), new Point3D(-1.123905,0.465537,
zOff+0.125000
), new Point3D(-1.154849,0.478354,
zOff+0.000000
));
object[506] = new Triangle(new Point3D(-1.123905,0.465537,
zOff+0.125000
), new Point3D(-1.175055,0.314855,
zOff+0.125000
), new Point3D(-1.086667,0.291171,
zOff+0.216506
));
object[507] = new Triangle(new Point3D(-1.086667,0.291171,
zOff+0.216506
), new Point3D(-1.039364,0.430519,
zOff+0.216506
), new Point3D(-1.123905,0.465537,
zOff+0.125000
));
object[508] = new Triangle(new Point3D(-1.039364,0.430519,
zOff+0.216506
), new Point3D(-1.086667,0.291171,
zOff+0.216506
), new Point3D(-0.965926,0.258819,
zOff+0.250000
));
object[509] = new Triangle(new Point3D(-0.965926,0.258819,
zOff+0.250000
), new Point3D(-0.923880,0.382683,
zOff+0.250000
), new Point3D(-1.039364,0.430519,
zOff+0.216506
));
object[510] = new Triangle(new Point3D(-0.923880,0.382683,
zOff+0.250000
), new Point3D(-0.965926,0.258819,
zOff+0.250000
), new Point3D(-0.845185,0.226467,
zOff+0.216506
));
object[511] = new Triangle(new Point3D(-0.845185,0.226467,
zOff+0.216506
), new Point3D(-0.808395,0.334848,
zOff+0.216506
), new Point3D(-0.923880,0.382683,
zOff+0.250000
));
object[512] = new Triangle(new Point3D(-0.808395,0.334848,
zOff+0.216506
), new Point3D(-0.845185,0.226467,
zOff+0.216506
), new Point3D(-0.756797,0.202783,
zOff+0.125000
));
object[513] = new Triangle(new Point3D(-0.756797,0.202783,
zOff+0.125000
), new Point3D(-0.723854,0.299830,
zOff+0.125000
), new Point3D(-0.808395,0.334848,
zOff+0.216506
));
object[514] = new Triangle(new Point3D(-0.723854,0.299830,
zOff+0.125000
), new Point3D(-0.756797,0.202783,
zOff+0.125000
), new Point3D(-0.724444,0.194114,
zOff+0.000000
));
object[515] = new Triangle(new Point3D(-0.724444,0.194114,
zOff+0.000000
), new Point3D(-0.692910,0.287013,
zOff+0.000000
), new Point3D(-0.723854,0.299830,
zOff+0.125000
));
object[516] = new Triangle(new Point3D(-0.692910,0.287013,
zOff+0.000000
), new Point3D(-0.724444,0.194114,
zOff+0.000000
), new Point3D(-0.756797,0.202783,
zOff-0.125000
));
object[517] = new Triangle(new Point3D(-0.756797,0.202783,
zOff-0.125000
), new Point3D(-0.723854,0.299830,
zOff-0.125000
), new Point3D(-0.692910,0.287013,
zOff+0.000000
));
object[518] = new Triangle(new Point3D(-0.723854,0.299830,
zOff-0.125000
), new Point3D(-0.756797,0.202783,
zOff-0.125000
), new Point3D(-0.845185,0.226467,
zOff-0.216506
));
object[519] = new Triangle(new Point3D(-0.845185,0.226467,
zOff-0.216506
), new Point3D(-0.808395,0.334848,
zOff-0.216506
), new Point3D(-0.723854,0.299830,
zOff-0.125000
));
object[520] = new Triangle(new Point3D(-0.808395,0.334848,
zOff-0.216506
), new Point3D(-0.845185,0.226467,
zOff-0.216506
), new Point3D(-0.965926,0.258819,
zOff-0.250000
));
object[521] = new Triangle(new Point3D(-0.965926,0.258819,
zOff-0.250000
), new Point3D(-0.923880,0.382683,
zOff-0.250000
), new Point3D(-0.808395,0.334848,
zOff-0.216506
));
object[522] = new Triangle(new Point3D(-0.923880,0.382683,
zOff-0.250000
), new Point3D(-0.965926,0.258819,
zOff-0.250000
), new Point3D(-1.086667,0.291171,
zOff-0.216506
));
object[523] = new Triangle(new Point3D(-1.086667,0.291171,
zOff-0.216506
), new Point3D(-1.039364,0.430519,
zOff-0.216506
), new Point3D(-0.923880,0.382683,
zOff-0.250000
));
object[524] = new Triangle(new Point3D(-1.039364,0.430519,
zOff-0.216506
), new Point3D(-1.086667,0.291171,
zOff-0.216506
), new Point3D(-1.175055,0.314855,
zOff-0.125000
));
object[525] = new Triangle(new Point3D(-1.175055,0.314855,
zOff-0.125000
), new Point3D(-1.123905,0.465537,
zOff-0.125000
), new Point3D(-1.039364,0.430519,
zOff-0.216506
));
object[526] = new Triangle(new Point3D(-1.123905,0.465537,
zOff-0.125000
), new Point3D(-1.175055,0.314855,
zOff-0.125000
), new Point3D(-1.207407,0.323524,
zOff+0.000000
));
object[527] = new Triangle(new Point3D(-1.207407,0.323524,
zOff+0.000000
), new Point3D(-1.154849,0.478354,
zOff+0.000000
), new Point3D(-1.123905,0.465537,
zOff-0.125000
));
object[528] = new Triangle(new Point3D(-1.207407,0.323524,
zOff+0.000000
), new Point3D(-1.239306,0.163158,
zOff+0.000000
), new Point3D(-1.206099,0.158786,
zOff+0.125000
));
object[529] = new Triangle(new Point3D(-1.206099,0.158786,
zOff+0.125000
), new Point3D(-1.175055,0.314855,
zOff+0.125000
), new Point3D(-1.207407,0.323524,
zOff+0.000000
));
object[530] = new Triangle(new Point3D(-1.175055,0.314855,
zOff+0.125000
), new Point3D(-1.206099,0.158786,
zOff+0.125000
), new Point3D(-1.115375,0.146842,
zOff+0.216506
));
object[531] = new Triangle(new Point3D(-1.115375,0.146842,
zOff+0.216506
), new Point3D(-1.086667,0.291171,
zOff+0.216506
), new Point3D(-1.175055,0.314855,
zOff+0.125000
));
object[532] = new Triangle(new Point3D(-1.086667,0.291171,
zOff+0.216506
), new Point3D(-1.115375,0.146842,
zOff+0.216506
), new Point3D(-0.991445,0.130526,
zOff+0.250000
));
object[533] = new Triangle(new Point3D(-0.991445,0.130526,
zOff+0.250000
), new Point3D(-0.965926,0.258819,
zOff+0.250000
), new Point3D(-1.086667,0.291171,
zOff+0.216506
));
object[534] = new Triangle(new Point3D(-0.965926,0.258819,
zOff+0.250000
), new Point3D(-0.991445,0.130526,
zOff+0.250000
), new Point3D(-0.867514,0.114211,
zOff+0.216506
));
object[535] = new Triangle(new Point3D(-0.867514,0.114211,
zOff+0.216506
), new Point3D(-0.845185,0.226467,
zOff+0.216506
), new Point3D(-0.965926,0.258819,
zOff+0.250000
));
object[536] = new Triangle(new Point3D(-0.845185,0.226467,
zOff+0.216506
), new Point3D(-0.867514,0.114211,
zOff+0.216506
), new Point3D(-0.776791,0.102267,
zOff+0.125000
));
object[537] = new Triangle(new Point3D(-0.776791,0.102267,
zOff+0.125000
), new Point3D(-0.756797,0.202783,
zOff+0.125000
), new Point3D(-0.845185,0.226467,
zOff+0.216506
));
object[538] = new Triangle(new Point3D(-0.756797,0.202783,
zOff+0.125000
), new Point3D(-0.776791,0.102267,
zOff+0.125000
), new Point3D(-0.743584,0.097895,
zOff+0.000000
));
object[539] = new Triangle(new Point3D(-0.743584,0.097895,
zOff+0.000000
), new Point3D(-0.724444,0.194114,
zOff+0.000000
), new Point3D(-0.756797,0.202783,
zOff+0.125000
));
object[540] = new Triangle(new Point3D(-0.724444,0.194114,
zOff+0.000000
), new Point3D(-0.743584,0.097895,
zOff+0.000000
), new Point3D(-0.776791,0.102267,
zOff-0.125000
));
object[541] = new Triangle(new Point3D(-0.776791,0.102267,
zOff-0.125000
), new Point3D(-0.756797,0.202783,
zOff-0.125000
), new Point3D(-0.724444,0.194114,
zOff+0.000000
));
object[542] = new Triangle(new Point3D(-0.756797,0.202783,
zOff-0.125000
), new Point3D(-0.776791,0.102267,
zOff-0.125000
), new Point3D(-0.867514,0.114211,
zOff-0.216506
));
object[543] = new Triangle(new Point3D(-0.867514,0.114211,
zOff-0.216506
), new Point3D(-0.845185,0.226467,
zOff-0.216506
), new Point3D(-0.756797,0.202783,
zOff-0.125000
));
object[544] = new Triangle(new Point3D(-0.845185,0.226467,
zOff-0.216506
), new Point3D(-0.867514,0.114211,
zOff-0.216506
), new Point3D(-0.991445,0.130526,
zOff-0.250000
));
object[545] = new Triangle(new Point3D(-0.991445,0.130526,
zOff-0.250000
), new Point3D(-0.965926,0.258819,
zOff-0.250000
), new Point3D(-0.845185,0.226467,
zOff-0.216506
));
object[546] = new Triangle(new Point3D(-0.965926,0.258819,
zOff-0.250000
), new Point3D(-0.991445,0.130526,
zOff-0.250000
), new Point3D(-1.115375,0.146842,
zOff-0.216506
));
object[547] = new Triangle(new Point3D(-1.115375,0.146842,
zOff-0.216506
), new Point3D(-1.086667,0.291171,
zOff-0.216506
), new Point3D(-0.965926,0.258819,
zOff-0.250000
));
object[548] = new Triangle(new Point3D(-1.086667,0.291171,
zOff-0.216506
), new Point3D(-1.115375,0.146842,
zOff-0.216506
), new Point3D(-1.206099,0.158786,
zOff-0.125000
));
object[549] = new Triangle(new Point3D(-1.206099,0.158786,
zOff-0.125000
), new Point3D(-1.175055,0.314855,
zOff-0.125000
), new Point3D(-1.086667,0.291171,
zOff-0.216506
));
object[550] = new Triangle(new Point3D(-1.175055,0.314855,
zOff-0.125000
), new Point3D(-1.206099,0.158786,
zOff-0.125000
), new Point3D(-1.239306,0.163158,
zOff+0.000000
));
object[551] = new Triangle(new Point3D(-1.239306,0.163158,
zOff+0.000000
), new Point3D(-1.207407,0.323524,
zOff+0.000000
), new Point3D(-1.175055,0.314855,
zOff-0.125000
));
object[552] = new Triangle(new Point3D(-1.239306,0.163158,
zOff+0.000000
), new Point3D(-1.250000,0.000000,
zOff+0.000000
), new Point3D(-1.216506,0.000000,
zOff+0.125000
));
object[553] = new Triangle(new Point3D(-1.216506,0.000000,
zOff+0.125000
), new Point3D(-1.206099,0.158786,
zOff+0.125000
), new Point3D(-1.239306,0.163158,
zOff+0.000000
));
object[554] = new Triangle(new Point3D(-1.206099,0.158786,
zOff+0.125000
), new Point3D(-1.216506,0.000000,
zOff+0.125000
), new Point3D(-1.125000,0.000000,
zOff+0.216506
));
object[555] = new Triangle(new Point3D(-1.125000,0.000000,
zOff+0.216506
), new Point3D(-1.115375,0.146842,
zOff+0.216506
), new Point3D(-1.206099,0.158786,
zOff+0.125000
));
object[556] = new Triangle(new Point3D(-1.115375,0.146842,
zOff+0.216506
), new Point3D(-1.125000,0.000000,
zOff+0.216506
), new Point3D(-1.000000,0.000000,
zOff+0.250000
));
object[557] = new Triangle(new Point3D(-1.000000,0.000000,
zOff+0.250000
), new Point3D(-0.991445,0.130526,
zOff+0.250000
), new Point3D(-1.115375,0.146842,
zOff+0.216506
));
object[558] = new Triangle(new Point3D(-0.991445,0.130526,
zOff+0.250000
), new Point3D(-1.000000,0.000000,
zOff+0.250000
), new Point3D(-0.875000,0.000000,
zOff+0.216506
));
object[559] = new Triangle(new Point3D(-0.875000,0.000000,
zOff+0.216506
), new Point3D(-0.867514,0.114211,
zOff+0.216506
), new Point3D(-0.991445,0.130526,
zOff+0.250000
));
object[560] = new Triangle(new Point3D(-0.867514,0.114211,
zOff+0.216506
), new Point3D(-0.875000,0.000000,
zOff+0.216506
), new Point3D(-0.783494,0.000000,
zOff+0.125000
));
object[561] = new Triangle(new Point3D(-0.783494,0.000000,
zOff+0.125000
), new Point3D(-0.776791,0.102267,
zOff+0.125000
), new Point3D(-0.867514,0.114211,
zOff+0.216506
));
object[562] = new Triangle(new Point3D(-0.776791,0.102267,
zOff+0.125000
), new Point3D(-0.783494,0.000000,
zOff+0.125000
), new Point3D(-0.750000,0.000000,
zOff+0.000000
));
object[563] = new Triangle(new Point3D(-0.750000,0.000000,
zOff+0.000000
), new Point3D(-0.743584,0.097895,
zOff+0.000000
), new Point3D(-0.776791,0.102267,
zOff+0.125000
));
object[564] = new Triangle(new Point3D(-0.743584,0.097895,
zOff+0.000000
), new Point3D(-0.750000,0.000000,
zOff+0.000000
), new Point3D(-0.783494,0.000000,
zOff-0.125000
));
object[565] = new Triangle(new Point3D(-0.783494,0.000000,
zOff-0.125000
), new Point3D(-0.776791,0.102267,
zOff-0.125000
), new Point3D(-0.743584,0.097895,
zOff+0.000000
));
object[566] = new Triangle(new Point3D(-0.776791,0.102267,
zOff-0.125000
), new Point3D(-0.783494,0.000000,
zOff-0.125000
), new Point3D(-0.875000,0.000000,
zOff-0.216506
));
object[567] = new Triangle(new Point3D(-0.875000,0.000000,
zOff-0.216506
), new Point3D(-0.867514,0.114211,
zOff-0.216506
), new Point3D(-0.776791,0.102267,
zOff-0.125000
));
object[568] = new Triangle(new Point3D(-0.867514,0.114211,
zOff-0.216506
), new Point3D(-0.875000,0.000000,
zOff-0.216506
), new Point3D(-1.000000,0.000000,
zOff-0.250000
));
object[569] = new Triangle(new Point3D(-1.000000,0.000000,
zOff-0.250000
), new Point3D(-0.991445,0.130526,
zOff-0.250000
), new Point3D(-0.867514,0.114211,
zOff-0.216506
));
object[570] = new Triangle(new Point3D(-0.991445,0.130526,
zOff-0.250000
), new Point3D(-1.000000,0.000000,
zOff-0.250000
), new Point3D(-1.125000,0.000000,
zOff-0.216506
));
object[571] = new Triangle(new Point3D(-1.125000,0.000000,
zOff-0.216506
), new Point3D(-1.115375,0.146842,
zOff-0.216506
), new Point3D(-0.991445,0.130526,
zOff-0.250000
));
object[572] = new Triangle(new Point3D(-1.115375,0.146842,
zOff-0.216506
), new Point3D(-1.125000,0.000000,
zOff-0.216506
), new Point3D(-1.216506,0.000000,
zOff-0.125000
));
object[573] = new Triangle(new Point3D(-1.216506,0.000000,
zOff-0.125000
), new Point3D(-1.206099,0.158786,
zOff-0.125000
), new Point3D(-1.115375,0.146842,
zOff-0.216506
));
object[574] = new Triangle(new Point3D(-1.206099,0.158786,
zOff-0.125000
), new Point3D(-1.216506,0.000000,
zOff-0.125000
), new Point3D(-1.250000,0.000000,
zOff+0.000000
));
object[575] = new Triangle(new Point3D(-1.250000,0.000000,
zOff+0.000000
), new Point3D(-1.239306,0.163158,
zOff+0.000000
), new Point3D(-1.206099,0.158786,
zOff-0.125000
));
object[576] = new Triangle(new Point3D(-1.250000,0.000000,
zOff+0.000000
), new Point3D(-1.239306,-0.163158,
zOff+0.000000
), new Point3D(-1.206099,-0.158786,
zOff+0.125000
));
object[577] = new Triangle(new Point3D(-1.206099,-0.158786,
zOff+0.125000
), new Point3D(-1.216506,0.000000,
zOff+0.125000
), new Point3D(-1.250000,0.000000,
zOff+0.000000
));
object[578] = new Triangle(new Point3D(-1.216506,0.000000,
zOff+0.125000
), new Point3D(-1.206099,-0.158786,
zOff+0.125000
), new Point3D(-1.115375,-0.146842,
zOff+0.216506
));
object[579] = new Triangle(new Point3D(-1.115375,-0.146842,
zOff+0.216506
), new Point3D(-1.125000,0.000000,
zOff+0.216506
), new Point3D(-1.216506,0.000000,
zOff+0.125000
));
object[580] = new Triangle(new Point3D(-1.125000,0.000000,
zOff+0.216506
), new Point3D(-1.115375,-0.146842,
zOff+0.216506
), new Point3D(-0.991445,-0.130526,
zOff+0.250000
));
object[581] = new Triangle(new Point3D(-0.991445,-0.130526,
zOff+0.250000
), new Point3D(-1.000000,0.000000,
zOff+0.250000
), new Point3D(-1.125000,0.000000,
zOff+0.216506
));
object[582] = new Triangle(new Point3D(-1.000000,0.000000,
zOff+0.250000
), new Point3D(-0.991445,-0.130526,
zOff+0.250000
), new Point3D(-0.867514,-0.114211,
zOff+0.216506
));
object[583] = new Triangle(new Point3D(-0.867514,-0.114211,
zOff+0.216506
), new Point3D(-0.875000,0.000000,
zOff+0.216506
), new Point3D(-1.000000,0.000000,
zOff+0.250000
));
object[584] = new Triangle(new Point3D(-0.875000,0.000000,
zOff+0.216506
), new Point3D(-0.867514,-0.114211,
zOff+0.216506
), new Point3D(-0.776791,-0.102267,
zOff+0.125000
));
object[585] = new Triangle(new Point3D(-0.776791,-0.102267,
zOff+0.125000
), new Point3D(-0.783494,0.000000,
zOff+0.125000
), new Point3D(-0.875000,0.000000,
zOff+0.216506
));
object[586] = new Triangle(new Point3D(-0.783494,0.000000,
zOff+0.125000
), new Point3D(-0.776791,-0.102267,
zOff+0.125000
), new Point3D(-0.743584,-0.097895,
zOff+0.000000
));
object[587] = new Triangle(new Point3D(-0.743584,-0.097895,
zOff+0.000000
), new Point3D(-0.750000,0.000000,
zOff+0.000000
), new Point3D(-0.783494,0.000000,
zOff+0.125000
));
object[588] = new Triangle(new Point3D(-0.750000,0.000000,
zOff+0.000000
), new Point3D(-0.743584,-0.097895,
zOff+0.000000
), new Point3D(-0.776791,-0.102267,
zOff-0.125000
));
object[589] = new Triangle(new Point3D(-0.776791,-0.102267,
zOff-0.125000
), new Point3D(-0.783494,0.000000,
zOff-0.125000
), new Point3D(-0.750000,0.000000,
zOff+0.000000
));
object[590] = new Triangle(new Point3D(-0.783494,0.000000,
zOff-0.125000
), new Point3D(-0.776791,-0.102267,
zOff-0.125000
), new Point3D(-0.867514,-0.114211,
zOff-0.216506
));
object[591] = new Triangle(new Point3D(-0.867514,-0.114211,
zOff-0.216506
), new Point3D(-0.875000,0.000000,
zOff-0.216506
), new Point3D(-0.783494,0.000000,
zOff-0.125000
));
object[592] = new Triangle(new Point3D(-0.875000,0.000000,
zOff-0.216506
), new Point3D(-0.867514,-0.114211,
zOff-0.216506
), new Point3D(-0.991445,-0.130526,
zOff-0.250000
));
object[593] = new Triangle(new Point3D(-0.991445,-0.130526,
zOff-0.250000
), new Point3D(-1.000000,0.000000,
zOff-0.250000
), new Point3D(-0.875000,0.000000,
zOff-0.216506
));
object[594] = new Triangle(new Point3D(-1.000000,0.000000,
zOff-0.250000
), new Point3D(-0.991445,-0.130526,
zOff-0.250000
), new Point3D(-1.115375,-0.146842,
zOff-0.216506
));
object[595] = new Triangle(new Point3D(-1.115375,-0.146842,
zOff-0.216506
), new Point3D(-1.125000,0.000000,
zOff-0.216506
), new Point3D(-1.000000,0.000000,
zOff-0.250000
));
object[596] = new Triangle(new Point3D(-1.125000,0.000000,
zOff-0.216506
), new Point3D(-1.115375,-0.146842,
zOff-0.216506
), new Point3D(-1.206099,-0.158786,
zOff-0.125000
));
object[597] = new Triangle(new Point3D(-1.206099,-0.158786,
zOff-0.125000
), new Point3D(-1.216506,0.000000,
zOff-0.125000
), new Point3D(-1.125000,0.000000,
zOff-0.216506
));
object[598] = new Triangle(new Point3D(-1.216506,0.000000,
zOff-0.125000
), new Point3D(-1.206099,-0.158786,
zOff-0.125000
), new Point3D(-1.239306,-0.163158,
zOff+0.000000
));
object[599] = new Triangle(new Point3D(-1.239306,-0.163158,
zOff+0.000000
), new Point3D(-1.250000,0.000000,
zOff+0.000000
), new Point3D(-1.216506,0.000000,
zOff-0.125000
));
object[600] = new Triangle(new Point3D(-1.239306,-0.163158,
zOff+0.000000
), new Point3D(-1.207407,-0.323524,
zOff+0.000000
), new Point3D(-1.175055,-0.314855,
zOff+0.125000
));
object[601] = new Triangle(new Point3D(-1.175055,-0.314855,
zOff+0.125000
), new Point3D(-1.206099,-0.158786,
zOff+0.125000
), new Point3D(-1.239306,-0.163158,
zOff+0.000000
));
object[602] = new Triangle(new Point3D(-1.206099,-0.158786,
zOff+0.125000
), new Point3D(-1.175055,-0.314855,
zOff+0.125000
), new Point3D(-1.086667,-0.291171,
zOff+0.216506
));
object[603] = new Triangle(new Point3D(-1.086667,-0.291171,
zOff+0.216506
), new Point3D(-1.115375,-0.146842,
zOff+0.216506
), new Point3D(-1.206099,-0.158786,
zOff+0.125000
));
object[604] = new Triangle(new Point3D(-1.115375,-0.146842,
zOff+0.216506
), new Point3D(-1.086667,-0.291171,
zOff+0.216506
), new Point3D(-0.965926,-0.258819,
zOff+0.250000
));
object[605] = new Triangle(new Point3D(-0.965926,-0.258819,
zOff+0.250000
), new Point3D(-0.991445,-0.130526,
zOff+0.250000
), new Point3D(-1.115375,-0.146842,
zOff+0.216506
));
object[606] = new Triangle(new Point3D(-0.991445,-0.130526,
zOff+0.250000
), new Point3D(-0.965926,-0.258819,
zOff+0.250000
), new Point3D(-0.845185,-0.226467,
zOff+0.216506
));
object[607] = new Triangle(new Point3D(-0.845185,-0.226467,
zOff+0.216506
), new Point3D(-0.867514,-0.114211,
zOff+0.216506
), new Point3D(-0.991445,-0.130526,
zOff+0.250000
));
object[608] = new Triangle(new Point3D(-0.867514,-0.114211,
zOff+0.216506
), new Point3D(-0.845185,-0.226467,
zOff+0.216506
), new Point3D(-0.756797,-0.202783,
zOff+0.125000
));
object[609] = new Triangle(new Point3D(-0.756797,-0.202783,
zOff+0.125000
), new Point3D(-0.776791,-0.102267,
zOff+0.125000
), new Point3D(-0.867514,-0.114211,
zOff+0.216506
));
object[610] = new Triangle(new Point3D(-0.776791,-0.102267,
zOff+0.125000
), new Point3D(-0.756797,-0.202783,
zOff+0.125000
), new Point3D(-0.724444,-0.194114,
zOff+0.000000
));
object[611] = new Triangle(new Point3D(-0.724444,-0.194114,
zOff+0.000000
), new Point3D(-0.743584,-0.097895,
zOff+0.000000
), new Point3D(-0.776791,-0.102267,
zOff+0.125000
));
object[612] = new Triangle(new Point3D(-0.743584,-0.097895,
zOff+0.000000
), new Point3D(-0.724444,-0.194114,
zOff+0.000000
), new Point3D(-0.756797,-0.202783,
zOff-0.125000
));
object[613] = new Triangle(new Point3D(-0.756797,-0.202783,
zOff-0.125000
), new Point3D(-0.776791,-0.102267,
zOff-0.125000
), new Point3D(-0.743584,-0.097895,
zOff+0.000000
));
object[614] = new Triangle(new Point3D(-0.776791,-0.102267,
zOff-0.125000
), new Point3D(-0.756797,-0.202783,
zOff-0.125000
), new Point3D(-0.845185,-0.226467,
zOff-0.216506
));
object[615] = new Triangle(new Point3D(-0.845185,-0.226467,
zOff-0.216506
), new Point3D(-0.867514,-0.114211,
zOff-0.216506
), new Point3D(-0.776791,-0.102267,
zOff-0.125000
));
object[616] = new Triangle(new Point3D(-0.867514,-0.114211,
zOff-0.216506
), new Point3D(-0.845185,-0.226467,
zOff-0.216506
), new Point3D(-0.965926,-0.258819,
zOff-0.250000
));
object[617] = new Triangle(new Point3D(-0.965926,-0.258819,
zOff-0.250000
), new Point3D(-0.991445,-0.130526,
zOff-0.250000
), new Point3D(-0.867514,-0.114211,
zOff-0.216506
));
object[618] = new Triangle(new Point3D(-0.991445,-0.130526,
zOff-0.250000
), new Point3D(-0.965926,-0.258819,
zOff-0.250000
), new Point3D(-1.086667,-0.291171,
zOff-0.216506
));
object[619] = new Triangle(new Point3D(-1.086667,-0.291171,
zOff-0.216506
), new Point3D(-1.115375,-0.146842,
zOff-0.216506
), new Point3D(-0.991445,-0.130526,
zOff-0.250000
));
object[620] = new Triangle(new Point3D(-1.115375,-0.146842,
zOff-0.216506
), new Point3D(-1.086667,-0.291171,
zOff-0.216506
), new Point3D(-1.175055,-0.314855,
zOff-0.125000
));
object[621] = new Triangle(new Point3D(-1.175055,-0.314855,
zOff-0.125000
), new Point3D(-1.206099,-0.158786,
zOff-0.125000
), new Point3D(-1.115375,-0.146842,
zOff-0.216506
));
object[622] = new Triangle(new Point3D(-1.206099,-0.158786,
zOff-0.125000
), new Point3D(-1.175055,-0.314855,
zOff-0.125000
), new Point3D(-1.207407,-0.323524,
zOff+0.000000
));
object[623] = new Triangle(new Point3D(-1.207407,-0.323524,
zOff+0.000000
), new Point3D(-1.239306,-0.163158,
zOff+0.000000
), new Point3D(-1.206099,-0.158786,
zOff-0.125000
));
object[624] = new Triangle(new Point3D(-1.207407,-0.323524,
zOff+0.000000
), new Point3D(-1.154850,-0.478354,
zOff+0.000000
), new Point3D(-1.123906,-0.465536,
zOff+0.125000
));
object[625] = new Triangle(new Point3D(-1.123906,-0.465536,
zOff+0.125000
), new Point3D(-1.175055,-0.314855,
zOff+0.125000
), new Point3D(-1.207407,-0.323524,
zOff+0.000000
));
object[626] = new Triangle(new Point3D(-1.175055,-0.314855,
zOff+0.125000
), new Point3D(-1.123906,-0.465536,
zOff+0.125000
), new Point3D(-1.039365,-0.430518,
zOff+0.216506
));
object[627] = new Triangle(new Point3D(-1.039365,-0.430518,
zOff+0.216506
), new Point3D(-1.086667,-0.291171,
zOff+0.216506
), new Point3D(-1.175055,-0.314855,
zOff+0.125000
));
object[628] = new Triangle(new Point3D(-1.086667,-0.291171,
zOff+0.216506
), new Point3D(-1.039365,-0.430518,
zOff+0.216506
), new Point3D(-0.923880,-0.382683,
zOff+0.250000
));
object[629] = new Triangle(new Point3D(-0.923880,-0.382683,
zOff+0.250000
), new Point3D(-0.965926,-0.258819,
zOff+0.250000
), new Point3D(-1.086667,-0.291171,
zOff+0.216506
));
object[630] = new Triangle(new Point3D(-0.965926,-0.258819,
zOff+0.250000
), new Point3D(-0.923880,-0.382683,
zOff+0.250000
), new Point3D(-0.808395,-0.334848,
zOff+0.216506
));
object[631] = new Triangle(new Point3D(-0.808395,-0.334848,
zOff+0.216506
), new Point3D(-0.845185,-0.226467,
zOff+0.216506
), new Point3D(-0.965926,-0.258819,
zOff+0.250000
));
object[632] = new Triangle(new Point3D(-0.845185,-0.226467,
zOff+0.216506
), new Point3D(-0.808395,-0.334848,
zOff+0.216506
), new Point3D(-0.723854,-0.299830,
zOff+0.125000
));
object[633] = new Triangle(new Point3D(-0.723854,-0.299830,
zOff+0.125000
), new Point3D(-0.756797,-0.202783,
zOff+0.125000
), new Point3D(-0.845185,-0.226467,
zOff+0.216506
));
object[634] = new Triangle(new Point3D(-0.756797,-0.202783,
zOff+0.125000
), new Point3D(-0.723854,-0.299830,
zOff+0.125000
), new Point3D(-0.692910,-0.287012,
zOff+0.000000
));
object[635] = new Triangle(new Point3D(-0.692910,-0.287012,
zOff+0.000000
), new Point3D(-0.724444,-0.194114,
zOff+0.000000
), new Point3D(-0.756797,-0.202783,
zOff+0.125000
));
object[636] = new Triangle(new Point3D(-0.724444,-0.194114,
zOff+0.000000
), new Point3D(-0.692910,-0.287012,
zOff+0.000000
), new Point3D(-0.723854,-0.299830,
zOff-0.125000
));
object[637] = new Triangle(new Point3D(-0.723854,-0.299830,
zOff-0.125000
), new Point3D(-0.756797,-0.202783,
zOff-0.125000
), new Point3D(-0.724444,-0.194114,
zOff+0.000000
));
object[638] = new Triangle(new Point3D(-0.756797,-0.202783,
zOff-0.125000
), new Point3D(-0.723854,-0.299830,
zOff-0.125000
), new Point3D(-0.808395,-0.334848,
zOff-0.216506
));
object[639] = new Triangle(new Point3D(-0.808395,-0.334848,
zOff-0.216506
), new Point3D(-0.845185,-0.226467,
zOff-0.216506
), new Point3D(-0.756797,-0.202783,
zOff-0.125000
));
object[640] = new Triangle(new Point3D(-0.845185,-0.226467,
zOff-0.216506
), new Point3D(-0.808395,-0.334848,
zOff-0.216506
), new Point3D(-0.923880,-0.382683,
zOff-0.250000
));
object[641] = new Triangle(new Point3D(-0.923880,-0.382683,
zOff-0.250000
), new Point3D(-0.965926,-0.258819,
zOff-0.250000
), new Point3D(-0.845185,-0.226467,
zOff-0.216506
));
object[642] = new Triangle(new Point3D(-0.965926,-0.258819,
zOff-0.250000
), new Point3D(-0.923880,-0.382683,
zOff-0.250000
), new Point3D(-1.039365,-0.430518,
zOff-0.216506
));
object[643] = new Triangle(new Point3D(-1.039365,-0.430518,
zOff-0.216506
), new Point3D(-1.086667,-0.291171,
zOff-0.216506
), new Point3D(-0.965926,-0.258819,
zOff-0.250000
));
object[644] = new Triangle(new Point3D(-1.086667,-0.291171,
zOff-0.216506
), new Point3D(-1.039365,-0.430518,
zOff-0.216506
), new Point3D(-1.123906,-0.465536,
zOff-0.125000
));
object[645] = new Triangle(new Point3D(-1.123906,-0.465536,
zOff-0.125000
), new Point3D(-1.175055,-0.314855,
zOff-0.125000
), new Point3D(-1.086667,-0.291171,
zOff-0.216506
));
object[646] = new Triangle(new Point3D(-1.175055,-0.314855,
zOff-0.125000
), new Point3D(-1.123906,-0.465536,
zOff-0.125000
), new Point3D(-1.154850,-0.478354,
zOff+0.000000
));
object[647] = new Triangle(new Point3D(-1.154850,-0.478354,
zOff+0.000000
), new Point3D(-1.207407,-0.323524,
zOff+0.000000
), new Point3D(-1.175055,-0.314855,
zOff-0.125000
));
object[648] = new Triangle(new Point3D(-1.154850,-0.478354,
zOff+0.000000
), new Point3D(-1.082532,-0.625000,
zOff+0.000000
), new Point3D(-1.053526,-0.608253,
zOff+0.125000
));
object[649] = new Triangle(new Point3D(-1.053526,-0.608253,
zOff+0.125000
), new Point3D(-1.123906,-0.465536,
zOff+0.125000
), new Point3D(-1.154850,-0.478354,
zOff+0.000000
));
object[650] = new Triangle(new Point3D(-1.123906,-0.465536,
zOff+0.125000
), new Point3D(-1.053526,-0.608253,
zOff+0.125000
), new Point3D(-0.974279,-0.562500,
zOff+0.216506
));
object[651] = new Triangle(new Point3D(-0.974279,-0.562500,
zOff+0.216506
), new Point3D(-1.039365,-0.430518,
zOff+0.216506
), new Point3D(-1.123906,-0.465536,
zOff+0.125000
));
object[652] = new Triangle(new Point3D(-1.039365,-0.430518,
zOff+0.216506
), new Point3D(-0.974279,-0.562500,
zOff+0.216506
), new Point3D(-0.866026,-0.500000,
zOff+0.250000
));
object[653] = new Triangle(new Point3D(-0.866026,-0.500000,
zOff+0.250000
), new Point3D(-0.923880,-0.382683,
zOff+0.250000
), new Point3D(-1.039365,-0.430518,
zOff+0.216506
));
object[654] = new Triangle(new Point3D(-0.923880,-0.382683,
zOff+0.250000
), new Point3D(-0.866026,-0.500000,
zOff+0.250000
), new Point3D(-0.757772,-0.437500,
zOff+0.216506
));
object[655] = new Triangle(new Point3D(-0.757772,-0.437500,
zOff+0.216506
), new Point3D(-0.808395,-0.334848,
zOff+0.216506
), new Point3D(-0.923880,-0.382683,
zOff+0.250000
));
object[656] = new Triangle(new Point3D(-0.808395,-0.334848,
zOff+0.216506
), new Point3D(-0.757772,-0.437500,
zOff+0.216506
), new Point3D(-0.678525,-0.391747,
zOff+0.125000
));
object[657] = new Triangle(new Point3D(-0.678525,-0.391747,
zOff+0.125000
), new Point3D(-0.723854,-0.299830,
zOff+0.125000
), new Point3D(-0.808395,-0.334848,
zOff+0.216506
));
object[658] = new Triangle(new Point3D(-0.723854,-0.299830,
zOff+0.125000
), new Point3D(-0.678525,-0.391747,
zOff+0.125000
), new Point3D(-0.649519,-0.375000,
zOff+0.000000
));
object[659] = new Triangle(new Point3D(-0.649519,-0.375000,
zOff+0.000000
), new Point3D(-0.692910,-0.287012,
zOff+0.000000
), new Point3D(-0.723854,-0.299830,
zOff+0.125000
));
object[660] = new Triangle(new Point3D(-0.692910,-0.287012,
zOff+0.000000
), new Point3D(-0.649519,-0.375000,
zOff+0.000000
), new Point3D(-0.678525,-0.391747,
zOff-0.125000
));
object[661] = new Triangle(new Point3D(-0.678525,-0.391747,
zOff-0.125000
), new Point3D(-0.723854,-0.299830,
zOff-0.125000
), new Point3D(-0.692910,-0.287012,
zOff+0.000000
));
object[662] = new Triangle(new Point3D(-0.723854,-0.299830,
zOff-0.125000
), new Point3D(-0.678525,-0.391747,
zOff-0.125000
), new Point3D(-0.757772,-0.437500,
zOff-0.216506
));
object[663] = new Triangle(new Point3D(-0.757772,-0.437500,
zOff-0.216506
), new Point3D(-0.808395,-0.334848,
zOff-0.216506
), new Point3D(-0.723854,-0.299830,
zOff-0.125000
));
object[664] = new Triangle(new Point3D(-0.808395,-0.334848,
zOff-0.216506
), new Point3D(-0.757772,-0.437500,
zOff-0.216506
), new Point3D(-0.866026,-0.500000,
zOff-0.250000
));
object[665] = new Triangle(new Point3D(-0.866026,-0.500000,
zOff-0.250000
), new Point3D(-0.923880,-0.382683,
zOff-0.250000
), new Point3D(-0.808395,-0.334848,
zOff-0.216506
));
object[666] = new Triangle(new Point3D(-0.923880,-0.382683,
zOff-0.250000
), new Point3D(-0.866026,-0.500000,
zOff-0.250000
), new Point3D(-0.974279,-0.562500,
zOff-0.216506
));
object[667] = new Triangle(new Point3D(-0.974279,-0.562500,
zOff-0.216506
), new Point3D(-1.039365,-0.430518,
zOff-0.216506
), new Point3D(-0.923880,-0.382683,
zOff-0.250000
));
object[668] = new Triangle(new Point3D(-1.039365,-0.430518,
zOff-0.216506
), new Point3D(-0.974279,-0.562500,
zOff-0.216506
), new Point3D(-1.053526,-0.608253,
zOff-0.125000
));
object[669] = new Triangle(new Point3D(-1.053526,-0.608253,
zOff-0.125000
), new Point3D(-1.123906,-0.465536,
zOff-0.125000
), new Point3D(-1.039365,-0.430518,
zOff-0.216506
));
object[670] = new Triangle(new Point3D(-1.123906,-0.465536,
zOff-0.125000
), new Point3D(-1.053526,-0.608253,
zOff-0.125000
), new Point3D(-1.082532,-0.625000,
zOff+0.000000
));
object[671] = new Triangle(new Point3D(-1.082532,-0.625000,
zOff+0.000000
), new Point3D(-1.154850,-0.478354,
zOff+0.000000
), new Point3D(-1.123906,-0.465536,
zOff-0.125000
));
object[672] = new Triangle(new Point3D(-1.082532,-0.625000,
zOff+0.000000
), new Point3D(-0.991692,-0.760952,
zOff+0.000000
), new Point3D(-0.965119,-0.740562,
zOff+0.125000
));
object[673] = new Triangle(new Point3D(-0.965119,-0.740562,
zOff+0.125000
), new Point3D(-1.053526,-0.608253,
zOff+0.125000
), new Point3D(-1.082532,-0.625000,
zOff+0.000000
));
object[674] = new Triangle(new Point3D(-1.053526,-0.608253,
zOff+0.125000
), new Point3D(-0.965119,-0.740562,
zOff+0.125000
), new Point3D(-0.892522,-0.684857,
zOff+0.216506
));
object[675] = new Triangle(new Point3D(-0.892522,-0.684857,
zOff+0.216506
), new Point3D(-0.974279,-0.562500,
zOff+0.216506
), new Point3D(-1.053526,-0.608253,
zOff+0.125000
));
object[676] = new Triangle(new Point3D(-0.974279,-0.562500,
zOff+0.216506
), new Point3D(-0.892522,-0.684857,
zOff+0.216506
), new Point3D(-0.793353,-0.608761,
zOff+0.250000
));
object[677] = new Triangle(new Point3D(-0.793353,-0.608761,
zOff+0.250000
), new Point3D(-0.866026,-0.500000,
zOff+0.250000
), new Point3D(-0.974279,-0.562500,
zOff+0.216506
));
object[678] = new Triangle(new Point3D(-0.866026,-0.500000,
zOff+0.250000
), new Point3D(-0.793353,-0.608761,
zOff+0.250000
), new Point3D(-0.694184,-0.532666,
zOff+0.216506
));
object[679] = new Triangle(new Point3D(-0.694184,-0.532666,
zOff+0.216506
), new Point3D(-0.757772,-0.437500,
zOff+0.216506
), new Point3D(-0.866026,-0.500000,
zOff+0.250000
));
object[680] = new Triangle(new Point3D(-0.757772,-0.437500,
zOff+0.216506
), new Point3D(-0.694184,-0.532666,
zOff+0.216506
), new Point3D(-0.621587,-0.476961,
zOff+0.125000
));
object[681] = new Triangle(new Point3D(-0.621587,-0.476961,
zOff+0.125000
), new Point3D(-0.678525,-0.391747,
zOff+0.125000
), new Point3D(-0.757772,-0.437500,
zOff+0.216506
));
object[682] = new Triangle(new Point3D(-0.678525,-0.391747,
zOff+0.125000
), new Point3D(-0.621587,-0.476961,
zOff+0.125000
), new Point3D(-0.595015,-0.456571,
zOff+0.000000
));
object[683] = new Triangle(new Point3D(-0.595015,-0.456571,
zOff+0.000000
), new Point3D(-0.649519,-0.375000,
zOff+0.000000
), new Point3D(-0.678525,-0.391747,
zOff+0.125000
));
object[684] = new Triangle(new Point3D(-0.649519,-0.375000,
zOff+0.000000
), new Point3D(-0.595015,-0.456571,
zOff+0.000000
), new Point3D(-0.621587,-0.476961,
zOff-0.125000
));
object[685] = new Triangle(new Point3D(-0.621587,-0.476961,
zOff-0.125000
), new Point3D(-0.678525,-0.391747,
zOff-0.125000
), new Point3D(-0.649519,-0.375000,
zOff+0.000000
));
object[686] = new Triangle(new Point3D(-0.678525,-0.391747,
zOff-0.125000
), new Point3D(-0.621587,-0.476961,
zOff-0.125000
), new Point3D(-0.694184,-0.532666,
zOff-0.216506
));
object[687] = new Triangle(new Point3D(-0.694184,-0.532666,
zOff-0.216506
), new Point3D(-0.757772,-0.437500,
zOff-0.216506
), new Point3D(-0.678525,-0.391747,
zOff-0.125000
));
object[688] = new Triangle(new Point3D(-0.757772,-0.437500,
zOff-0.216506
), new Point3D(-0.694184,-0.532666,
zOff-0.216506
), new Point3D(-0.793353,-0.608761,
zOff-0.250000
));
object[689] = new Triangle(new Point3D(-0.793353,-0.608761,
zOff-0.250000
), new Point3D(-0.866026,-0.500000,
zOff-0.250000
), new Point3D(-0.757772,-0.437500,
zOff-0.216506
));
object[690] = new Triangle(new Point3D(-0.866026,-0.500000,
zOff-0.250000
), new Point3D(-0.793353,-0.608761,
zOff-0.250000
), new Point3D(-0.892522,-0.684857,
zOff-0.216506
));
object[691] = new Triangle(new Point3D(-0.892522,-0.684857,
zOff-0.216506
), new Point3D(-0.974279,-0.562500,
zOff-0.216506
), new Point3D(-0.866026,-0.500000,
zOff-0.250000
));
object[692] = new Triangle(new Point3D(-0.974279,-0.562500,
zOff-0.216506
), new Point3D(-0.892522,-0.684857,
zOff-0.216506
), new Point3D(-0.965119,-0.740562,
zOff-0.125000
));
object[693] = new Triangle(new Point3D(-0.965119,-0.740562,
zOff-0.125000
), new Point3D(-1.053526,-0.608253,
zOff-0.125000
), new Point3D(-0.974279,-0.562500,
zOff-0.216506
));
object[694] = new Triangle(new Point3D(-1.053526,-0.608253,
zOff-0.125000
), new Point3D(-0.965119,-0.740562,
zOff-0.125000
), new Point3D(-0.991692,-0.760952,
zOff+0.000000
));
object[695] = new Triangle(new Point3D(-0.991692,-0.760952,
zOff+0.000000
), new Point3D(-1.082532,-0.625000,
zOff+0.000000
), new Point3D(-1.053526,-0.608253,
zOff-0.125000
));
object[696] = new Triangle(new Point3D(-0.991692,-0.760952,
zOff+0.000000
), new Point3D(-0.883884,-0.883883,
zOff+0.000000
), new Point3D(-0.860200,-0.860200,
zOff+0.125000
));
object[697] = new Triangle(new Point3D(-0.860200,-0.860200,
zOff+0.125000
), new Point3D(-0.965119,-0.740562,
zOff+0.125000
), new Point3D(-0.991692,-0.760952,
zOff+0.000000
));
object[698] = new Triangle(new Point3D(-0.965119,-0.740562,
zOff+0.125000
), new Point3D(-0.860200,-0.860200,
zOff+0.125000
), new Point3D(-0.795495,-0.795495,
zOff+0.216506
));
object[699] = new Triangle(new Point3D(-0.795495,-0.795495,
zOff+0.216506
), new Point3D(-0.892522,-0.684857,
zOff+0.216506
), new Point3D(-0.965119,-0.740562,
zOff+0.125000
));
object[700] = new Triangle(new Point3D(-0.892522,-0.684857,
zOff+0.216506
), new Point3D(-0.795495,-0.795495,
zOff+0.216506
), new Point3D(-0.707107,-0.707107,
zOff+0.250000
));
object[701] = new Triangle(new Point3D(-0.707107,-0.707107,
zOff+0.250000
), new Point3D(-0.793353,-0.608761,
zOff+0.250000
), new Point3D(-0.892522,-0.684857,
zOff+0.216506
));
object[702] = new Triangle(new Point3D(-0.793353,-0.608761,
zOff+0.250000
), new Point3D(-0.707107,-0.707107,
zOff+0.250000
), new Point3D(-0.618719,-0.618718,
zOff+0.216506
));
object[703] = new Triangle(new Point3D(-0.618719,-0.618718,
zOff+0.216506
), new Point3D(-0.694184,-0.532666,
zOff+0.216506
), new Point3D(-0.793353,-0.608761,
zOff+0.250000
));
object[704] = new Triangle(new Point3D(-0.694184,-0.532666,
zOff+0.216506
), new Point3D(-0.618719,-0.618718,
zOff+0.216506
), new Point3D(-0.554014,-0.554013,
zOff+0.125000
));
object[705] = new Triangle(new Point3D(-0.554014,-0.554013,
zOff+0.125000
), new Point3D(-0.621587,-0.476961,
zOff+0.125000
), new Point3D(-0.694184,-0.532666,
zOff+0.216506
));
object[706] = new Triangle(new Point3D(-0.621587,-0.476961,
zOff+0.125000
), new Point3D(-0.554014,-0.554013,
zOff+0.125000
), new Point3D(-0.530330,-0.530330,
zOff+0.000000
));
object[707] = new Triangle(new Point3D(-0.530330,-0.530330,
zOff+0.000000
), new Point3D(-0.595015,-0.456571,
zOff+0.000000
), new Point3D(-0.621587,-0.476961,
zOff+0.125000
));
object[708] = new Triangle(new Point3D(-0.595015,-0.456571,
zOff+0.000000
), new Point3D(-0.530330,-0.530330,
zOff+0.000000
), new Point3D(-0.554014,-0.554013,
zOff-0.125000
));
object[709] = new Triangle(new Point3D(-0.554014,-0.554013,
zOff-0.125000
), new Point3D(-0.621587,-0.476961,
zOff-0.125000
), new Point3D(-0.595015,-0.456571,
zOff+0.000000
));
object[710] = new Triangle(new Point3D(-0.621587,-0.476961,
zOff-0.125000
), new Point3D(-0.554014,-0.554013,
zOff-0.125000
), new Point3D(-0.618719,-0.618718,
zOff-0.216506
));
object[711] = new Triangle(new Point3D(-0.618719,-0.618718,
zOff-0.216506
), new Point3D(-0.694184,-0.532666,
zOff-0.216506
), new Point3D(-0.621587,-0.476961,
zOff-0.125000
));
object[712] = new Triangle(new Point3D(-0.694184,-0.532666,
zOff-0.216506
), new Point3D(-0.618719,-0.618718,
zOff-0.216506
), new Point3D(-0.707107,-0.707107,
zOff-0.250000
));
object[713] = new Triangle(new Point3D(-0.707107,-0.707107,
zOff-0.250000
), new Point3D(-0.793353,-0.608761,
zOff-0.250000
), new Point3D(-0.694184,-0.532666,
zOff-0.216506
));
object[714] = new Triangle(new Point3D(-0.793353,-0.608761,
zOff-0.250000
), new Point3D(-0.707107,-0.707107,
zOff-0.250000
), new Point3D(-0.795495,-0.795495,
zOff-0.216506
));
object[715] = new Triangle(new Point3D(-0.795495,-0.795495,
zOff-0.216506
), new Point3D(-0.892522,-0.684857,
zOff-0.216506
), new Point3D(-0.793353,-0.608761,
zOff-0.250000
));
object[716] = new Triangle(new Point3D(-0.892522,-0.684857,
zOff-0.216506
), new Point3D(-0.795495,-0.795495,
zOff-0.216506
), new Point3D(-0.860200,-0.860200,
zOff-0.125000
));
object[717] = new Triangle(new Point3D(-0.860200,-0.860200,
zOff-0.125000
), new Point3D(-0.965119,-0.740562,
zOff-0.125000
), new Point3D(-0.892522,-0.684857,
zOff-0.216506
));
object[718] = new Triangle(new Point3D(-0.965119,-0.740562,
zOff-0.125000
), new Point3D(-0.860200,-0.860200,
zOff-0.125000
), new Point3D(-0.883884,-0.883883,
zOff+0.000000
));
object[719] = new Triangle(new Point3D(-0.883884,-0.883883,
zOff+0.000000
), new Point3D(-0.991692,-0.760952,
zOff+0.000000
), new Point3D(-0.965119,-0.740562,
zOff-0.125000
));
object[720] = new Triangle(new Point3D(-0.883884,-0.883883,
zOff+0.000000
), new Point3D(-0.760952,-0.991691,
zOff+0.000000
), new Point3D(-0.740563,-0.965119,
zOff+0.125000
));
object[721] = new Triangle(new Point3D(-0.740563,-0.965119,
zOff+0.125000
), new Point3D(-0.860200,-0.860200,
zOff+0.125000
), new Point3D(-0.883884,-0.883883,
zOff+0.000000
));
object[722] = new Triangle(new Point3D(-0.860200,-0.860200,
zOff+0.125000
), new Point3D(-0.740563,-0.965119,
zOff+0.125000
), new Point3D(-0.684857,-0.892522,
zOff+0.216506
));
object[723] = new Triangle(new Point3D(-0.684857,-0.892522,
zOff+0.216506
), new Point3D(-0.795495,-0.795495,
zOff+0.216506
), new Point3D(-0.860200,-0.860200,
zOff+0.125000
));
object[724] = new Triangle(new Point3D(-0.795495,-0.795495,
zOff+0.216506
), new Point3D(-0.684857,-0.892522,
zOff+0.216506
), new Point3D(-0.608762,-0.793353,
zOff+0.250000
));
object[725] = new Triangle(new Point3D(-0.608762,-0.793353,
zOff+0.250000
), new Point3D(-0.707107,-0.707107,
zOff+0.250000
), new Point3D(-0.795495,-0.795495,
zOff+0.216506
));
object[726] = new Triangle(new Point3D(-0.707107,-0.707107,
zOff+0.250000
), new Point3D(-0.608762,-0.793353,
zOff+0.250000
), new Point3D(-0.532667,-0.694184,
zOff+0.216506
));
object[727] = new Triangle(new Point3D(-0.532667,-0.694184,
zOff+0.216506
), new Point3D(-0.618719,-0.618718,
zOff+0.216506
), new Point3D(-0.707107,-0.707107,
zOff+0.250000
));
object[728] = new Triangle(new Point3D(-0.618719,-0.618718,
zOff+0.216506
), new Point3D(-0.532667,-0.694184,
zOff+0.216506
), new Point3D(-0.476961,-0.621587,
zOff+0.125000
));
object[729] = new Triangle(new Point3D(-0.476961,-0.621587,
zOff+0.125000
), new Point3D(-0.554014,-0.554013,
zOff+0.125000
), new Point3D(-0.618719,-0.618718,
zOff+0.216506
));
object[730] = new Triangle(new Point3D(-0.554014,-0.554013,
zOff+0.125000
), new Point3D(-0.476961,-0.621587,
zOff+0.125000
), new Point3D(-0.456571,-0.595015,
zOff+0.000000
));
object[731] = new Triangle(new Point3D(-0.456571,-0.595015,
zOff+0.000000
), new Point3D(-0.530330,-0.530330,
zOff+0.000000
), new Point3D(-0.554014,-0.554013,
zOff+0.125000
));
object[732] = new Triangle(new Point3D(-0.530330,-0.530330,
zOff+0.000000
), new Point3D(-0.456571,-0.595015,
zOff+0.000000
), new Point3D(-0.476961,-0.621587,
zOff-0.125000
));
object[733] = new Triangle(new Point3D(-0.476961,-0.621587,
zOff-0.125000
), new Point3D(-0.554014,-0.554013,
zOff-0.125000
), new Point3D(-0.530330,-0.530330,
zOff+0.000000
));
object[734] = new Triangle(new Point3D(-0.554014,-0.554013,
zOff-0.125000
), new Point3D(-0.476961,-0.621587,
zOff-0.125000
), new Point3D(-0.532667,-0.694184,
zOff-0.216506
));
object[735] = new Triangle(new Point3D(-0.532667,-0.694184,
zOff-0.216506
), new Point3D(-0.618719,-0.618718,
zOff-0.216506
), new Point3D(-0.554014,-0.554013,
zOff-0.125000
));
object[736] = new Triangle(new Point3D(-0.618719,-0.618718,
zOff-0.216506
), new Point3D(-0.532667,-0.694184,
zOff-0.216506
), new Point3D(-0.608762,-0.793353,
zOff-0.250000
));
object[737] = new Triangle(new Point3D(-0.608762,-0.793353,
zOff-0.250000
), new Point3D(-0.707107,-0.707107,
zOff-0.250000
), new Point3D(-0.618719,-0.618718,
zOff-0.216506
));
object[738] = new Triangle(new Point3D(-0.707107,-0.707107,
zOff-0.250000
), new Point3D(-0.608762,-0.793353,
zOff-0.250000
), new Point3D(-0.684857,-0.892522,
zOff-0.216506
));
object[739] = new Triangle(new Point3D(-0.684857,-0.892522,
zOff-0.216506
), new Point3D(-0.795495,-0.795495,
zOff-0.216506
), new Point3D(-0.707107,-0.707107,
zOff-0.250000
));
object[740] = new Triangle(new Point3D(-0.795495,-0.795495,
zOff-0.216506
), new Point3D(-0.684857,-0.892522,
zOff-0.216506
), new Point3D(-0.740563,-0.965119,
zOff-0.125000
));
object[741] = new Triangle(new Point3D(-0.740563,-0.965119,
zOff-0.125000
), new Point3D(-0.860200,-0.860200,
zOff-0.125000
), new Point3D(-0.795495,-0.795495,
zOff-0.216506
));
object[742] = new Triangle(new Point3D(-0.860200,-0.860200,
zOff-0.125000
), new Point3D(-0.740563,-0.965119,
zOff-0.125000
), new Point3D(-0.760952,-0.991691,
zOff+0.000000
));
object[743] = new Triangle(new Point3D(-0.760952,-0.991691,
zOff+0.000000
), new Point3D(-0.883884,-0.883883,
zOff+0.000000
), new Point3D(-0.860200,-0.860200,
zOff-0.125000
));
object[744] = new Triangle(new Point3D(-0.760952,-0.991691,
zOff+0.000000
), new Point3D(-0.625000,-1.082532,
zOff+0.000000
), new Point3D(-0.608253,-1.053526,
zOff+0.125000
));
object[745] = new Triangle(new Point3D(-0.608253,-1.053526,
zOff+0.125000
), new Point3D(-0.740563,-0.965119,
zOff+0.125000
), new Point3D(-0.760952,-0.991691,
zOff+0.000000
));
object[746] = new Triangle(new Point3D(-0.740563,-0.965119,
zOff+0.125000
), new Point3D(-0.608253,-1.053526,
zOff+0.125000
), new Point3D(-0.562500,-0.974279,
zOff+0.216506
));
object[747] = new Triangle(new Point3D(-0.562500,-0.974279,
zOff+0.216506
), new Point3D(-0.684857,-0.892522,
zOff+0.216506
), new Point3D(-0.740563,-0.965119,
zOff+0.125000
));
object[748] = new Triangle(new Point3D(-0.684857,-0.892522,
zOff+0.216506
), new Point3D(-0.562500,-0.974279,
zOff+0.216506
), new Point3D(-0.500000,-0.866026,
zOff+0.250000
));
object[749] = new Triangle(new Point3D(-0.500000,-0.866026,
zOff+0.250000
), new Point3D(-0.608762,-0.793353,
zOff+0.250000
), new Point3D(-0.684857,-0.892522,
zOff+0.216506
));
object[750] = new Triangle(new Point3D(-0.608762,-0.793353,
zOff+0.250000
), new Point3D(-0.500000,-0.866026,
zOff+0.250000
), new Point3D(-0.437500,-0.757772,
zOff+0.216506
));
object[751] = new Triangle(new Point3D(-0.437500,-0.757772,
zOff+0.216506
), new Point3D(-0.532667,-0.694184,
zOff+0.216506
), new Point3D(-0.608762,-0.793353,
zOff+0.250000
));
object[752] = new Triangle(new Point3D(-0.532667,-0.694184,
zOff+0.216506
), new Point3D(-0.437500,-0.757772,
zOff+0.216506
), new Point3D(-0.391747,-0.678525,
zOff+0.125000
));
object[753] = new Triangle(new Point3D(-0.391747,-0.678525,
zOff+0.125000
), new Point3D(-0.476961,-0.621587,
zOff+0.125000
), new Point3D(-0.532667,-0.694184,
zOff+0.216506
));
object[754] = new Triangle(new Point3D(-0.476961,-0.621587,
zOff+0.125000
), new Point3D(-0.391747,-0.678525,
zOff+0.125000
), new Point3D(-0.375000,-0.649519,
zOff+0.000000
));
object[755] = new Triangle(new Point3D(-0.375000,-0.649519,
zOff+0.000000
), new Point3D(-0.456571,-0.595015,
zOff+0.000000
), new Point3D(-0.476961,-0.621587,
zOff+0.125000
));
object[756] = new Triangle(new Point3D(-0.456571,-0.595015,
zOff+0.000000
), new Point3D(-0.375000,-0.649519,
zOff+0.000000
), new Point3D(-0.391747,-0.678525,
zOff-0.125000
));
object[757] = new Triangle(new Point3D(-0.391747,-0.678525,
zOff-0.125000
), new Point3D(-0.476961,-0.621587,
zOff-0.125000
), new Point3D(-0.456571,-0.595015,
zOff+0.000000
));
object[758] = new Triangle(new Point3D(-0.476961,-0.621587,
zOff-0.125000
), new Point3D(-0.391747,-0.678525,
zOff-0.125000
), new Point3D(-0.437500,-0.757772,
zOff-0.216506
));
object[759] = new Triangle(new Point3D(-0.437500,-0.757772,
zOff-0.216506
), new Point3D(-0.532667,-0.694184,
zOff-0.216506
), new Point3D(-0.476961,-0.621587,
zOff-0.125000
));
object[760] = new Triangle(new Point3D(-0.532667,-0.694184,
zOff-0.216506
), new Point3D(-0.437500,-0.757772,
zOff-0.216506
), new Point3D(-0.500000,-0.866026,
zOff-0.250000
));
object[761] = new Triangle(new Point3D(-0.500000,-0.866026,
zOff-0.250000
), new Point3D(-0.608762,-0.793353,
zOff-0.250000
), new Point3D(-0.532667,-0.694184,
zOff-0.216506
));
object[762] = new Triangle(new Point3D(-0.608762,-0.793353,
zOff-0.250000
), new Point3D(-0.500000,-0.866026,
zOff-0.250000
), new Point3D(-0.562500,-0.974279,
zOff-0.216506
));
object[763] = new Triangle(new Point3D(-0.562500,-0.974279,
zOff-0.216506
), new Point3D(-0.684857,-0.892522,
zOff-0.216506
), new Point3D(-0.608762,-0.793353,
zOff-0.250000
));
object[764] = new Triangle(new Point3D(-0.684857,-0.892522,
zOff-0.216506
), new Point3D(-0.562500,-0.974279,
zOff-0.216506
), new Point3D(-0.608253,-1.053526,
zOff-0.125000
));
object[765] = new Triangle(new Point3D(-0.608253,-1.053526,
zOff-0.125000
), new Point3D(-0.740563,-0.965119,
zOff-0.125000
), new Point3D(-0.684857,-0.892522,
zOff-0.216506
));
object[766] = new Triangle(new Point3D(-0.740563,-0.965119,
zOff-0.125000
), new Point3D(-0.608253,-1.053526,
zOff-0.125000
), new Point3D(-0.625000,-1.082532,
zOff+0.000000
));
object[767] = new Triangle(new Point3D(-0.625000,-1.082532,
zOff+0.000000
), new Point3D(-0.760952,-0.991691,
zOff+0.000000
), new Point3D(-0.740563,-0.965119,
zOff-0.125000
));
object[768] = new Triangle(new Point3D(-0.625000,-1.082532,
zOff+0.000000
), new Point3D(-0.478354,-1.154849,
zOff+0.000000
), new Point3D(-0.465537,-1.123905,
zOff+0.125000
));
object[769] = new Triangle(new Point3D(-0.465537,-1.123905,
zOff+0.125000
), new Point3D(-0.608253,-1.053526,
zOff+0.125000
), new Point3D(-0.625000,-1.082532,
zOff+0.000000
));
object[770] = new Triangle(new Point3D(-0.608253,-1.053526,
zOff+0.125000
), new Point3D(-0.465537,-1.123905,
zOff+0.125000
), new Point3D(-0.430519,-1.039364,
zOff+0.216506
));
object[771] = new Triangle(new Point3D(-0.430519,-1.039364,
zOff+0.216506
), new Point3D(-0.562500,-0.974279,
zOff+0.216506
), new Point3D(-0.608253,-1.053526,
zOff+0.125000
));
object[772] = new Triangle(new Point3D(-0.562500,-0.974279,
zOff+0.216506
), new Point3D(-0.430519,-1.039364,
zOff+0.216506
), new Point3D(-0.382684,-0.923880,
zOff+0.250000
));
object[773] = new Triangle(new Point3D(-0.382684,-0.923880,
zOff+0.250000
), new Point3D(-0.500000,-0.866026,
zOff+0.250000
), new Point3D(-0.562500,-0.974279,
zOff+0.216506
));
object[774] = new Triangle(new Point3D(-0.500000,-0.866026,
zOff+0.250000
), new Point3D(-0.382684,-0.923880,
zOff+0.250000
), new Point3D(-0.334848,-0.808395,
zOff+0.216506
));
object[775] = new Triangle(new Point3D(-0.334848,-0.808395,
zOff+0.216506
), new Point3D(-0.437500,-0.757772,
zOff+0.216506
), new Point3D(-0.500000,-0.866026,
zOff+0.250000
));
object[776] = new Triangle(new Point3D(-0.437500,-0.757772,
zOff+0.216506
), new Point3D(-0.334848,-0.808395,
zOff+0.216506
), new Point3D(-0.299830,-0.723854,
zOff+0.125000
));
object[777] = new Triangle(new Point3D(-0.299830,-0.723854,
zOff+0.125000
), new Point3D(-0.391747,-0.678525,
zOff+0.125000
), new Point3D(-0.437500,-0.757772,
zOff+0.216506
));
object[778] = new Triangle(new Point3D(-0.391747,-0.678525,
zOff+0.125000
), new Point3D(-0.299830,-0.723854,
zOff+0.125000
), new Point3D(-0.287013,-0.692910,
zOff+0.000000
));
object[779] = new Triangle(new Point3D(-0.287013,-0.692910,
zOff+0.000000
), new Point3D(-0.375000,-0.649519,
zOff+0.000000
), new Point3D(-0.391747,-0.678525,
zOff+0.125000
));
object[780] = new Triangle(new Point3D(-0.375000,-0.649519,
zOff+0.000000
), new Point3D(-0.287013,-0.692910,
zOff+0.000000
), new Point3D(-0.299830,-0.723854,
zOff-0.125000
));
object[781] = new Triangle(new Point3D(-0.299830,-0.723854,
zOff-0.125000
), new Point3D(-0.391747,-0.678525,
zOff-0.125000
), new Point3D(-0.375000,-0.649519,
zOff+0.000000
));
object[782] = new Triangle(new Point3D(-0.391747,-0.678525,
zOff-0.125000
), new Point3D(-0.299830,-0.723854,
zOff-0.125000
), new Point3D(-0.334848,-0.808395,
zOff-0.216506
));
object[783] = new Triangle(new Point3D(-0.334848,-0.808395,
zOff-0.216506
), new Point3D(-0.437500,-0.757772,
zOff-0.216506
), new Point3D(-0.391747,-0.678525,
zOff-0.125000
));
object[784] = new Triangle(new Point3D(-0.437500,-0.757772,
zOff-0.216506
), new Point3D(-0.334848,-0.808395,
zOff-0.216506
), new Point3D(-0.382684,-0.923880,
zOff-0.250000
));
object[785] = new Triangle(new Point3D(-0.382684,-0.923880,
zOff-0.250000
), new Point3D(-0.500000,-0.866026,
zOff-0.250000
), new Point3D(-0.437500,-0.757772,
zOff-0.216506
));
object[786] = new Triangle(new Point3D(-0.500000,-0.866026,
zOff-0.250000
), new Point3D(-0.382684,-0.923880,
zOff-0.250000
), new Point3D(-0.430519,-1.039364,
zOff-0.216506
));
object[787] = new Triangle(new Point3D(-0.430519,-1.039364,
zOff-0.216506
), new Point3D(-0.562500,-0.974279,
zOff-0.216506
), new Point3D(-0.500000,-0.866026,
zOff-0.250000
));
object[788] = new Triangle(new Point3D(-0.562500,-0.974279,
zOff-0.216506
), new Point3D(-0.430519,-1.039364,
zOff-0.216506
), new Point3D(-0.465537,-1.123905,
zOff-0.125000
));
object[789] = new Triangle(new Point3D(-0.465537,-1.123905,
zOff-0.125000
), new Point3D(-0.608253,-1.053526,
zOff-0.125000
), new Point3D(-0.562500,-0.974279,
zOff-0.216506
));
object[790] = new Triangle(new Point3D(-0.608253,-1.053526,
zOff-0.125000
), new Point3D(-0.465537,-1.123905,
zOff-0.125000
), new Point3D(-0.478354,-1.154849,
zOff+0.000000
));
object[791] = new Triangle(new Point3D(-0.478354,-1.154849,
zOff+0.000000
), new Point3D(-0.625000,-1.082532,
zOff+0.000000
), new Point3D(-0.608253,-1.053526,
zOff-0.125000
));
object[792] = new Triangle(new Point3D(-0.478354,-1.154849,
zOff+0.000000
), new Point3D(-0.323524,-1.207407,
zOff+0.000000
), new Point3D(-0.314855,-1.175055,
zOff+0.125000
));
object[793] = new Triangle(new Point3D(-0.314855,-1.175055,
zOff+0.125000
), new Point3D(-0.465537,-1.123905,
zOff+0.125000
), new Point3D(-0.478354,-1.154849,
zOff+0.000000
));
object[794] = new Triangle(new Point3D(-0.465537,-1.123905,
zOff+0.125000
), new Point3D(-0.314855,-1.175055,
zOff+0.125000
), new Point3D(-0.291172,-1.086666,
zOff+0.216506
));
object[795] = new Triangle(new Point3D(-0.291172,-1.086666,
zOff+0.216506
), new Point3D(-0.430519,-1.039364,
zOff+0.216506
), new Point3D(-0.465537,-1.123905,
zOff+0.125000
));
object[796] = new Triangle(new Point3D(-0.430519,-1.039364,
zOff+0.216506
), new Point3D(-0.291172,-1.086666,
zOff+0.216506
), new Point3D(-0.258819,-0.965926,
zOff+0.250000
));
object[797] = new Triangle(new Point3D(-0.258819,-0.965926,
zOff+0.250000
), new Point3D(-0.382684,-0.923880,
zOff+0.250000
), new Point3D(-0.430519,-1.039364,
zOff+0.216506
));
object[798] = new Triangle(new Point3D(-0.382684,-0.923880,
zOff+0.250000
), new Point3D(-0.258819,-0.965926,
zOff+0.250000
), new Point3D(-0.226467,-0.845185,
zOff+0.216506
));
object[799] = new Triangle(new Point3D(-0.226467,-0.845185,
zOff+0.216506
), new Point3D(-0.334848,-0.808395,
zOff+0.216506
), new Point3D(-0.382684,-0.923880,
zOff+0.250000
));
object[800] = new Triangle(new Point3D(-0.334848,-0.808395,
zOff+0.216506
), new Point3D(-0.226467,-0.845185,
zOff+0.216506
), new Point3D(-0.202783,-0.756797,
zOff+0.125000
));
object[801] = new Triangle(new Point3D(-0.202783,-0.756797,
zOff+0.125000
), new Point3D(-0.299830,-0.723854,
zOff+0.125000
), new Point3D(-0.334848,-0.808395,
zOff+0.216506
));
object[802] = new Triangle(new Point3D(-0.299830,-0.723854,
zOff+0.125000
), new Point3D(-0.202783,-0.756797,
zOff+0.125000
), new Point3D(-0.194115,-0.724444,
zOff+0.000000
));
object[803] = new Triangle(new Point3D(-0.194115,-0.724444,
zOff+0.000000
), new Point3D(-0.287013,-0.692910,
zOff+0.000000
), new Point3D(-0.299830,-0.723854,
zOff+0.125000
));
object[804] = new Triangle(new Point3D(-0.287013,-0.692910,
zOff+0.000000
), new Point3D(-0.194115,-0.724444,
zOff+0.000000
), new Point3D(-0.202783,-0.756797,
zOff-0.125000
));
object[805] = new Triangle(new Point3D(-0.202783,-0.756797,
zOff-0.125000
), new Point3D(-0.299830,-0.723854,
zOff-0.125000
), new Point3D(-0.287013,-0.692910,
zOff+0.000000
));
object[806] = new Triangle(new Point3D(-0.299830,-0.723854,
zOff-0.125000
), new Point3D(-0.202783,-0.756797,
zOff-0.125000
), new Point3D(-0.226467,-0.845185,
zOff-0.216506
));
object[807] = new Triangle(new Point3D(-0.226467,-0.845185,
zOff-0.216506
), new Point3D(-0.334848,-0.808395,
zOff-0.216506
), new Point3D(-0.299830,-0.723854,
zOff-0.125000
));
object[808] = new Triangle(new Point3D(-0.334848,-0.808395,
zOff-0.216506
), new Point3D(-0.226467,-0.845185,
zOff-0.216506
), new Point3D(-0.258819,-0.965926,
zOff-0.250000
));
object[809] = new Triangle(new Point3D(-0.258819,-0.965926,
zOff-0.250000
), new Point3D(-0.382684,-0.923880,
zOff-0.250000
), new Point3D(-0.334848,-0.808395,
zOff-0.216506
));
object[810] = new Triangle(new Point3D(-0.382684,-0.923880,
zOff-0.250000
), new Point3D(-0.258819,-0.965926,
zOff-0.250000
), new Point3D(-0.291172,-1.086666,
zOff-0.216506
));
object[811] = new Triangle(new Point3D(-0.291172,-1.086666,
zOff-0.216506
), new Point3D(-0.430519,-1.039364,
zOff-0.216506
), new Point3D(-0.382684,-0.923880,
zOff-0.250000
));
object[812] = new Triangle(new Point3D(-0.430519,-1.039364,
zOff-0.216506
), new Point3D(-0.291172,-1.086666,
zOff-0.216506
), new Point3D(-0.314855,-1.175055,
zOff-0.125000
));
object[813] = new Triangle(new Point3D(-0.314855,-1.175055,
zOff-0.125000
), new Point3D(-0.465537,-1.123905,
zOff-0.125000
), new Point3D(-0.430519,-1.039364,
zOff-0.216506
));
object[814] = new Triangle(new Point3D(-0.465537,-1.123905,
zOff-0.125000
), new Point3D(-0.314855,-1.175055,
zOff-0.125000
), new Point3D(-0.323524,-1.207407,
zOff+0.000000
));
object[815] = new Triangle(new Point3D(-0.323524,-1.207407,
zOff+0.000000
), new Point3D(-0.478354,-1.154849,
zOff+0.000000
), new Point3D(-0.465537,-1.123905,
zOff-0.125000
));
object[816] = new Triangle(new Point3D(-0.323524,-1.207407,
zOff+0.000000
), new Point3D(-0.163158,-1.239306,
zOff+0.000000
), new Point3D(-0.158787,-1.206099,
zOff+0.125000
));
object[817] = new Triangle(new Point3D(-0.158787,-1.206099,
zOff+0.125000
), new Point3D(-0.314855,-1.175055,
zOff+0.125000
), new Point3D(-0.323524,-1.207407,
zOff+0.000000
));
object[818] = new Triangle(new Point3D(-0.314855,-1.175055,
zOff+0.125000
), new Point3D(-0.158787,-1.206099,
zOff+0.125000
), new Point3D(-0.146843,-1.115375,
zOff+0.216506
));
object[819] = new Triangle(new Point3D(-0.146843,-1.115375,
zOff+0.216506
), new Point3D(-0.291172,-1.086666,
zOff+0.216506
), new Point3D(-0.314855,-1.175055,
zOff+0.125000
));
object[820] = new Triangle(new Point3D(-0.291172,-1.086666,
zOff+0.216506
), new Point3D(-0.146843,-1.115375,
zOff+0.216506
), new Point3D(-0.130527,-0.991445,
zOff+0.250000
));
object[821] = new Triangle(new Point3D(-0.130527,-0.991445,
zOff+0.250000
), new Point3D(-0.258819,-0.965926,
zOff+0.250000
), new Point3D(-0.291172,-1.086666,
zOff+0.216506
));
object[822] = new Triangle(new Point3D(-0.258819,-0.965926,
zOff+0.250000
), new Point3D(-0.130527,-0.991445,
zOff+0.250000
), new Point3D(-0.114211,-0.867514,
zOff+0.216506
));
object[823] = new Triangle(new Point3D(-0.114211,-0.867514,
zOff+0.216506
), new Point3D(-0.226467,-0.845185,
zOff+0.216506
), new Point3D(-0.258819,-0.965926,
zOff+0.250000
));
object[824] = new Triangle(new Point3D(-0.226467,-0.845185,
zOff+0.216506
), new Point3D(-0.114211,-0.867514,
zOff+0.216506
), new Point3D(-0.102267,-0.776791,
zOff+0.125000
));
object[825] = new Triangle(new Point3D(-0.102267,-0.776791,
zOff+0.125000
), new Point3D(-0.202783,-0.756797,
zOff+0.125000
), new Point3D(-0.226467,-0.845185,
zOff+0.216506
));
object[826] = new Triangle(new Point3D(-0.202783,-0.756797,
zOff+0.125000
), new Point3D(-0.102267,-0.776791,
zOff+0.125000
), new Point3D(-0.097895,-0.743584,
zOff+0.000000
));
object[827] = new Triangle(new Point3D(-0.097895,-0.743584,
zOff+0.000000
), new Point3D(-0.194115,-0.724444,
zOff+0.000000
), new Point3D(-0.202783,-0.756797,
zOff+0.125000
));
object[828] = new Triangle(new Point3D(-0.194115,-0.724444,
zOff+0.000000
), new Point3D(-0.097895,-0.743584,
zOff+0.000000
), new Point3D(-0.102267,-0.776791,
zOff-0.125000
));
object[829] = new Triangle(new Point3D(-0.102267,-0.776791,
zOff-0.125000
), new Point3D(-0.202783,-0.756797,
zOff-0.125000
), new Point3D(-0.194115,-0.724444,
zOff+0.000000
));
object[830] = new Triangle(new Point3D(-0.202783,-0.756797,
zOff-0.125000
), new Point3D(-0.102267,-0.776791,
zOff-0.125000
), new Point3D(-0.114211,-0.867514,
zOff-0.216506
));
object[831] = new Triangle(new Point3D(-0.114211,-0.867514,
zOff-0.216506
), new Point3D(-0.226467,-0.845185,
zOff-0.216506
), new Point3D(-0.202783,-0.756797,
zOff-0.125000
));
object[832] = new Triangle(new Point3D(-0.226467,-0.845185,
zOff-0.216506
), new Point3D(-0.114211,-0.867514,
zOff-0.216506
), new Point3D(-0.130527,-0.991445,
zOff-0.250000
));
object[833] = new Triangle(new Point3D(-0.130527,-0.991445,
zOff-0.250000
), new Point3D(-0.258819,-0.965926,
zOff-0.250000
), new Point3D(-0.226467,-0.845185,
zOff-0.216506
));
object[834] = new Triangle(new Point3D(-0.258819,-0.965926,
zOff-0.250000
), new Point3D(-0.130527,-0.991445,
zOff-0.250000
), new Point3D(-0.146843,-1.115375,
zOff-0.216506
));
object[835] = new Triangle(new Point3D(-0.146843,-1.115375,
zOff-0.216506
), new Point3D(-0.291172,-1.086666,
zOff-0.216506
), new Point3D(-0.258819,-0.965926,
zOff-0.250000
));
object[836] = new Triangle(new Point3D(-0.291172,-1.086666,
zOff-0.216506
), new Point3D(-0.146843,-1.115375,
zOff-0.216506
), new Point3D(-0.158787,-1.206099,
zOff-0.125000
));
object[837] = new Triangle(new Point3D(-0.158787,-1.206099,
zOff-0.125000
), new Point3D(-0.314855,-1.175055,
zOff-0.125000
), new Point3D(-0.291172,-1.086666,
zOff-0.216506
));
object[838] = new Triangle(new Point3D(-0.314855,-1.175055,
zOff-0.125000
), new Point3D(-0.158787,-1.206099,
zOff-0.125000
), new Point3D(-0.163158,-1.239306,
zOff+0.000000
));
object[839] = new Triangle(new Point3D(-0.163158,-1.239306,
zOff+0.000000
), new Point3D(-0.323524,-1.207407,
zOff+0.000000
), new Point3D(-0.314855,-1.175055,
zOff-0.125000
));
object[840] = new Triangle(new Point3D(-0.163158,-1.239306,
zOff+0.000000
), new Point3D(0.000000,-1.250000,
zOff+0.000000
), new Point3D(0.000000,-1.216506,
zOff+0.125000
));
object[841] = new Triangle(new Point3D(0.000000,-1.216506,
zOff+0.125000
), new Point3D(-0.158787,-1.206099,
zOff+0.125000
), new Point3D(-0.163158,-1.239306,
zOff+0.000000
));
object[842] = new Triangle(new Point3D(-0.158787,-1.206099,
zOff+0.125000
), new Point3D(0.000000,-1.216506,
zOff+0.125000
), new Point3D(0.000000,-1.125000,
zOff+0.216506
));
object[843] = new Triangle(new Point3D(0.000000,-1.125000,
zOff+0.216506
), new Point3D(-0.146843,-1.115375,
zOff+0.216506
), new Point3D(-0.158787,-1.206099,
zOff+0.125000
));
object[844] = new Triangle(new Point3D(-0.146843,-1.115375,
zOff+0.216506
), new Point3D(0.000000,-1.125000,
zOff+0.216506
), new Point3D(0.000000,-1.000000,
zOff+0.250000
));
object[845] = new Triangle(new Point3D(0.000000,-1.000000,
zOff+0.250000
), new Point3D(-0.130527,-0.991445,
zOff+0.250000
), new Point3D(-0.146843,-1.115375,
zOff+0.216506
));
object[846] = new Triangle(new Point3D(-0.130527,-0.991445,
zOff+0.250000
), new Point3D(0.000000,-1.000000,
zOff+0.250000
), new Point3D(0.000000,-0.875000,
zOff+0.216506
));
object[847] = new Triangle(new Point3D(0.000000,-0.875000,
zOff+0.216506
), new Point3D(-0.114211,-0.867514,
zOff+0.216506
), new Point3D(-0.130527,-0.991445,
zOff+0.250000
));
object[848] = new Triangle(new Point3D(-0.114211,-0.867514,
zOff+0.216506
), new Point3D(0.000000,-0.875000,
zOff+0.216506
), new Point3D(0.000000,-0.783494,
zOff+0.125000
));
object[849] = new Triangle(new Point3D(0.000000,-0.783494,
zOff+0.125000
), new Point3D(-0.102267,-0.776791,
zOff+0.125000
), new Point3D(-0.114211,-0.867514,
zOff+0.216506
));
object[850] = new Triangle(new Point3D(-0.102267,-0.776791,
zOff+0.125000
), new Point3D(0.000000,-0.783494,
zOff+0.125000
), new Point3D(0.000000,-0.750000,
zOff+0.000000
));
object[851] = new Triangle(new Point3D(0.000000,-0.750000,
zOff+0.000000
), new Point3D(-0.097895,-0.743584,
zOff+0.000000
), new Point3D(-0.102267,-0.776791,
zOff+0.125000
));
object[852] = new Triangle(new Point3D(-0.097895,-0.743584,
zOff+0.000000
), new Point3D(0.000000,-0.750000,
zOff+0.000000
), new Point3D(0.000000,-0.783494,
zOff-0.125000
));
object[853] = new Triangle(new Point3D(0.000000,-0.783494,
zOff-0.125000
), new Point3D(-0.102267,-0.776791,
zOff-0.125000
), new Point3D(-0.097895,-0.743584,
zOff+0.000000
));
object[854] = new Triangle(new Point3D(-0.102267,-0.776791,
zOff-0.125000
), new Point3D(0.000000,-0.783494,
zOff-0.125000
), new Point3D(0.000000,-0.875000,
zOff-0.216506
));
object[855] = new Triangle(new Point3D(0.000000,-0.875000,
zOff-0.216506
), new Point3D(-0.114211,-0.867514,
zOff-0.216506
), new Point3D(-0.102267,-0.776791,
zOff-0.125000
));
object[856] = new Triangle(new Point3D(-0.114211,-0.867514,
zOff-0.216506
), new Point3D(0.000000,-0.875000,
zOff-0.216506
), new Point3D(0.000000,-1.000000,
zOff-0.250000
));
object[857] = new Triangle(new Point3D(0.000000,-1.000000,
zOff-0.250000
), new Point3D(-0.130527,-0.991445,
zOff-0.250000
), new Point3D(-0.114211,-0.867514,
zOff-0.216506
));
object[858] = new Triangle(new Point3D(-0.130527,-0.991445,
zOff-0.250000
), new Point3D(0.000000,-1.000000,
zOff-0.250000
), new Point3D(0.000000,-1.125000,
zOff-0.216506
));
object[859] = new Triangle(new Point3D(0.000000,-1.125000,
zOff-0.216506
), new Point3D(-0.146843,-1.115375,
zOff-0.216506
), new Point3D(-0.130527,-0.991445,
zOff-0.250000
));
object[860] = new Triangle(new Point3D(-0.146843,-1.115375,
zOff-0.216506
), new Point3D(0.000000,-1.125000,
zOff-0.216506
), new Point3D(0.000000,-1.216506,
zOff-0.125000
));
object[861] = new Triangle(new Point3D(0.000000,-1.216506,
zOff-0.125000
), new Point3D(-0.158787,-1.206099,
zOff-0.125000
), new Point3D(-0.146843,-1.115375,
zOff-0.216506
));
object[862] = new Triangle(new Point3D(-0.158787,-1.206099,
zOff-0.125000
), new Point3D(0.000000,-1.216506,
zOff-0.125000
), new Point3D(0.000000,-1.250000,
zOff+0.000000
));
object[863] = new Triangle(new Point3D(0.000000,-1.250000,
zOff+0.000000
), new Point3D(-0.163158,-1.239306,
zOff+0.000000
), new Point3D(-0.158787,-1.206099,
zOff-0.125000
));
object[864] = new Triangle(new Point3D(0.000000,-1.250000,
zOff+0.000000
), new Point3D(0.163158,-1.239306,
zOff+0.000000
), new Point3D(0.158786,-1.206099,
zOff+0.125000
));
object[865] = new Triangle(new Point3D(0.158786,-1.206099,
zOff+0.125000
), new Point3D(0.000000,-1.216506,
zOff+0.125000
), new Point3D(0.000000,-1.250000,
zOff+0.000000
));
object[866] = new Triangle(new Point3D(0.000000,-1.216506,
zOff+0.125000
), new Point3D(0.158786,-1.206099,
zOff+0.125000
), new Point3D(0.146842,-1.115376,
zOff+0.216506
));
object[867] = new Triangle(new Point3D(0.146842,-1.115376,
zOff+0.216506
), new Point3D(0.000000,-1.125000,
zOff+0.216506
), new Point3D(0.000000,-1.216506,
zOff+0.125000
));
object[868] = new Triangle(new Point3D(0.000000,-1.125000,
zOff+0.216506
), new Point3D(0.146842,-1.115376,
zOff+0.216506
), new Point3D(0.130526,-0.991445,
zOff+0.250000
));
object[869] = new Triangle(new Point3D(0.130526,-0.991445,
zOff+0.250000
), new Point3D(0.000000,-1.000000,
zOff+0.250000
), new Point3D(0.000000,-1.125000,
zOff+0.216506
));
object[870] = new Triangle(new Point3D(0.000000,-1.000000,
zOff+0.250000
), new Point3D(0.130526,-0.991445,
zOff+0.250000
), new Point3D(0.114210,-0.867514,
zOff+0.216506
));
object[871] = new Triangle(new Point3D(0.114210,-0.867514,
zOff+0.216506
), new Point3D(0.000000,-0.875000,
zOff+0.216506
), new Point3D(0.000000,-1.000000,
zOff+0.250000
));
object[872] = new Triangle(new Point3D(0.000000,-0.875000,
zOff+0.216506
), new Point3D(0.114210,-0.867514,
zOff+0.216506
), new Point3D(0.102266,-0.776791,
zOff+0.125000
));
object[873] = new Triangle(new Point3D(0.102266,-0.776791,
zOff+0.125000
), new Point3D(0.000000,-0.783494,
zOff+0.125000
), new Point3D(0.000000,-0.875000,
zOff+0.216506
));
object[874] = new Triangle(new Point3D(0.000000,-0.783494,
zOff+0.125000
), new Point3D(0.102266,-0.776791,
zOff+0.125000
), new Point3D(0.097895,-0.743584,
zOff+0.000000
));
object[875] = new Triangle(new Point3D(0.097895,-0.743584,
zOff+0.000000
), new Point3D(0.000000,-0.750000,
zOff+0.000000
), new Point3D(0.000000,-0.783494,
zOff+0.125000
));
object[876] = new Triangle(new Point3D(0.000000,-0.750000,
zOff+0.000000
), new Point3D(0.097895,-0.743584,
zOff+0.000000
), new Point3D(0.102266,-0.776791,
zOff-0.125000
));
object[877] = new Triangle(new Point3D(0.102266,-0.776791,
zOff-0.125000
), new Point3D(0.000000,-0.783494,
zOff-0.125000
), new Point3D(0.000000,-0.750000,
zOff+0.000000
));
object[878] = new Triangle(new Point3D(0.000000,-0.783494,
zOff-0.125000
), new Point3D(0.102266,-0.776791,
zOff-0.125000
), new Point3D(0.114210,-0.867514,
zOff-0.216506
));
object[879] = new Triangle(new Point3D(0.114210,-0.867514,
zOff-0.216506
), new Point3D(0.000000,-0.875000,
zOff-0.216506
), new Point3D(0.000000,-0.783494,
zOff-0.125000
));
object[880] = new Triangle(new Point3D(0.000000,-0.875000,
zOff-0.216506
), new Point3D(0.114210,-0.867514,
zOff-0.216506
), new Point3D(0.130526,-0.991445,
zOff-0.250000
));
object[881] = new Triangle(new Point3D(0.130526,-0.991445,
zOff-0.250000
), new Point3D(0.000000,-1.000000,
zOff-0.250000
), new Point3D(0.000000,-0.875000,
zOff-0.216506
));
object[882] = new Triangle(new Point3D(0.000000,-1.000000,
zOff-0.250000
), new Point3D(0.130526,-0.991445,
zOff-0.250000
), new Point3D(0.146842,-1.115376,
zOff-0.216506
));
object[883] = new Triangle(new Point3D(0.146842,-1.115376,
zOff-0.216506
), new Point3D(0.000000,-1.125000,
zOff-0.216506
), new Point3D(0.000000,-1.000000,
zOff-0.250000
));
object[884] = new Triangle(new Point3D(0.000000,-1.125000,
zOff-0.216506
), new Point3D(0.146842,-1.115376,
zOff-0.216506
), new Point3D(0.158786,-1.206099,
zOff-0.125000
));
object[885] = new Triangle(new Point3D(0.158786,-1.206099,
zOff-0.125000
), new Point3D(0.000000,-1.216506,
zOff-0.125000
), new Point3D(0.000000,-1.125000,
zOff-0.216506
));
object[886] = new Triangle(new Point3D(0.000000,-1.216506,
zOff-0.125000
), new Point3D(0.158786,-1.206099,
zOff-0.125000
), new Point3D(0.163158,-1.239306,
zOff+0.000000
));
object[887] = new Triangle(new Point3D(0.163158,-1.239306,
zOff+0.000000
), new Point3D(0.000000,-1.250000,
zOff+0.000000
), new Point3D(0.000000,-1.216506,
zOff-0.125000
));
object[888] = new Triangle(new Point3D(0.163158,-1.239306,
zOff+0.000000
), new Point3D(0.323523,-1.207407,
zOff+0.000000
), new Point3D(0.314854,-1.175055,
zOff+0.125000
));
object[889] = new Triangle(new Point3D(0.314854,-1.175055,
zOff+0.125000
), new Point3D(0.158786,-1.206099,
zOff+0.125000
), new Point3D(0.163158,-1.239306,
zOff+0.000000
));
object[890] = new Triangle(new Point3D(0.158786,-1.206099,
zOff+0.125000
), new Point3D(0.314854,-1.175055,
zOff+0.125000
), new Point3D(0.291171,-1.086667,
zOff+0.216506
));
object[891] = new Triangle(new Point3D(0.291171,-1.086667,
zOff+0.216506
), new Point3D(0.146842,-1.115376,
zOff+0.216506
), new Point3D(0.158786,-1.206099,
zOff+0.125000
));
object[892] = new Triangle(new Point3D(0.146842,-1.115376,
zOff+0.216506
), new Point3D(0.291171,-1.086667,
zOff+0.216506
), new Point3D(0.258819,-0.965926,
zOff+0.250000
));
object[893] = new Triangle(new Point3D(0.258819,-0.965926,
zOff+0.250000
), new Point3D(0.130526,-0.991445,
zOff+0.250000
), new Point3D(0.146842,-1.115376,
zOff+0.216506
));
object[894] = new Triangle(new Point3D(0.130526,-0.991445,
zOff+0.250000
), new Point3D(0.258819,-0.965926,
zOff+0.250000
), new Point3D(0.226466,-0.845185,
zOff+0.216506
));
object[895] = new Triangle(new Point3D(0.226466,-0.845185,
zOff+0.216506
), new Point3D(0.114210,-0.867514,
zOff+0.216506
), new Point3D(0.130526,-0.991445,
zOff+0.250000
));
object[896] = new Triangle(new Point3D(0.114210,-0.867514,
zOff+0.216506
), new Point3D(0.226466,-0.845185,
zOff+0.216506
), new Point3D(0.202783,-0.756797,
zOff+0.125000
));
object[897] = new Triangle(new Point3D(0.202783,-0.756797,
zOff+0.125000
), new Point3D(0.102266,-0.776791,
zOff+0.125000
), new Point3D(0.114210,-0.867514,
zOff+0.216506
));
object[898] = new Triangle(new Point3D(0.102266,-0.776791,
zOff+0.125000
), new Point3D(0.202783,-0.756797,
zOff+0.125000
), new Point3D(0.194114,-0.724444,
zOff+0.000000
));
object[899] = new Triangle(new Point3D(0.194114,-0.724444,
zOff+0.000000
), new Point3D(0.097895,-0.743584,
zOff+0.000000
), new Point3D(0.102266,-0.776791,
zOff+0.125000
));
object[900] = new Triangle(new Point3D(0.097895,-0.743584,
zOff+0.000000
), new Point3D(0.194114,-0.724444,
zOff+0.000000
), new Point3D(0.202783,-0.756797,
zOff-0.125000
));
object[901] = new Triangle(new Point3D(0.202783,-0.756797,
zOff-0.125000
), new Point3D(0.102266,-0.776791,
zOff-0.125000
), new Point3D(0.097895,-0.743584,
zOff+0.000000
));
object[902] = new Triangle(new Point3D(0.102266,-0.776791,
zOff-0.125000
), new Point3D(0.202783,-0.756797,
zOff-0.125000
), new Point3D(0.226466,-0.845185,
zOff-0.216506
));
object[903] = new Triangle(new Point3D(0.226466,-0.845185,
zOff-0.216506
), new Point3D(0.114210,-0.867514,
zOff-0.216506
), new Point3D(0.102266,-0.776791,
zOff-0.125000
));
object[904] = new Triangle(new Point3D(0.114210,-0.867514,
zOff-0.216506
), new Point3D(0.226466,-0.845185,
zOff-0.216506
), new Point3D(0.258819,-0.965926,
zOff-0.250000
));
object[905] = new Triangle(new Point3D(0.258819,-0.965926,
zOff-0.250000
), new Point3D(0.130526,-0.991445,
zOff-0.250000
), new Point3D(0.114210,-0.867514,
zOff-0.216506
));
object[906] = new Triangle(new Point3D(0.130526,-0.991445,
zOff-0.250000
), new Point3D(0.258819,-0.965926,
zOff-0.250000
), new Point3D(0.291171,-1.086667,
zOff-0.216506
));
object[907] = new Triangle(new Point3D(0.291171,-1.086667,
zOff-0.216506
), new Point3D(0.146842,-1.115376,
zOff-0.216506
), new Point3D(0.130526,-0.991445,
zOff-0.250000
));
object[908] = new Triangle(new Point3D(0.146842,-1.115376,
zOff-0.216506
), new Point3D(0.291171,-1.086667,
zOff-0.216506
), new Point3D(0.314854,-1.175055,
zOff-0.125000
));
object[909] = new Triangle(new Point3D(0.314854,-1.175055,
zOff-0.125000
), new Point3D(0.158786,-1.206099,
zOff-0.125000
), new Point3D(0.146842,-1.115376,
zOff-0.216506
));
object[910] = new Triangle(new Point3D(0.158786,-1.206099,
zOff-0.125000
), new Point3D(0.314854,-1.175055,
zOff-0.125000
), new Point3D(0.323523,-1.207407,
zOff+0.000000
));
object[911] = new Triangle(new Point3D(0.323523,-1.207407,
zOff+0.000000
), new Point3D(0.163158,-1.239306,
zOff+0.000000
), new Point3D(0.158786,-1.206099,
zOff-0.125000
));
object[912] = new Triangle(new Point3D(0.323523,-1.207407,
zOff+0.000000
), new Point3D(0.478355,-1.154849,
zOff+0.000000
), new Point3D(0.465537,-1.123905,
zOff+0.125000
));
object[913] = new Triangle(new Point3D(0.465537,-1.123905,
zOff+0.125000
), new Point3D(0.314854,-1.175055,
zOff+0.125000
), new Point3D(0.323523,-1.207407,
zOff+0.000000
));
object[914] = new Triangle(new Point3D(0.314854,-1.175055,
zOff+0.125000
), new Point3D(0.465537,-1.123905,
zOff+0.125000
), new Point3D(0.430519,-1.039364,
zOff+0.216506
));
object[915] = new Triangle(new Point3D(0.430519,-1.039364,
zOff+0.216506
), new Point3D(0.291171,-1.086667,
zOff+0.216506
), new Point3D(0.314854,-1.175055,
zOff+0.125000
));
object[916] = new Triangle(new Point3D(0.291171,-1.086667,
zOff+0.216506
), new Point3D(0.430519,-1.039364,
zOff+0.216506
), new Point3D(0.382684,-0.923879,
zOff+0.250000
));
object[917] = new Triangle(new Point3D(0.382684,-0.923879,
zOff+0.250000
), new Point3D(0.258819,-0.965926,
zOff+0.250000
), new Point3D(0.291171,-1.086667,
zOff+0.216506
));
object[918] = new Triangle(new Point3D(0.258819,-0.965926,
zOff+0.250000
), new Point3D(0.382684,-0.923879,
zOff+0.250000
), new Point3D(0.334848,-0.808394,
zOff+0.216506
));
object[919] = new Triangle(new Point3D(0.334848,-0.808394,
zOff+0.216506
), new Point3D(0.226466,-0.845185,
zOff+0.216506
), new Point3D(0.258819,-0.965926,
zOff+0.250000
));
object[920] = new Triangle(new Point3D(0.226466,-0.845185,
zOff+0.216506
), new Point3D(0.334848,-0.808394,
zOff+0.216506
), new Point3D(0.299830,-0.723854,
zOff+0.125000
));
object[921] = new Triangle(new Point3D(0.299830,-0.723854,
zOff+0.125000
), new Point3D(0.202783,-0.756797,
zOff+0.125000
), new Point3D(0.226466,-0.845185,
zOff+0.216506
));
object[922] = new Triangle(new Point3D(0.202783,-0.756797,
zOff+0.125000
), new Point3D(0.299830,-0.723854,
zOff+0.125000
), new Point3D(0.287013,-0.692910,
zOff+0.000000
));
object[923] = new Triangle(new Point3D(0.287013,-0.692910,
zOff+0.000000
), new Point3D(0.194114,-0.724444,
zOff+0.000000
), new Point3D(0.202783,-0.756797,
zOff+0.125000
));
object[924] = new Triangle(new Point3D(0.194114,-0.724444,
zOff+0.000000
), new Point3D(0.287013,-0.692910,
zOff+0.000000
), new Point3D(0.299830,-0.723854,
zOff-0.125000
));
object[925] = new Triangle(new Point3D(0.299830,-0.723854,
zOff-0.125000
), new Point3D(0.202783,-0.756797,
zOff-0.125000
), new Point3D(0.194114,-0.724444,
zOff+0.000000
));
object[926] = new Triangle(new Point3D(0.202783,-0.756797,
zOff-0.125000
), new Point3D(0.299830,-0.723854,
zOff-0.125000
), new Point3D(0.334848,-0.808394,
zOff-0.216506
));
object[927] = new Triangle(new Point3D(0.334848,-0.808394,
zOff-0.216506
), new Point3D(0.226466,-0.845185,
zOff-0.216506
), new Point3D(0.202783,-0.756797,
zOff-0.125000
));
object[928] = new Triangle(new Point3D(0.226466,-0.845185,
zOff-0.216506
), new Point3D(0.334848,-0.808394,
zOff-0.216506
), new Point3D(0.382684,-0.923879,
zOff-0.250000
));
object[929] = new Triangle(new Point3D(0.382684,-0.923879,
zOff-0.250000
), new Point3D(0.258819,-0.965926,
zOff-0.250000
), new Point3D(0.226466,-0.845185,
zOff-0.216506
));
object[930] = new Triangle(new Point3D(0.258819,-0.965926,
zOff-0.250000
), new Point3D(0.382684,-0.923879,
zOff-0.250000
), new Point3D(0.430519,-1.039364,
zOff-0.216506
));
object[931] = new Triangle(new Point3D(0.430519,-1.039364,
zOff-0.216506
), new Point3D(0.291171,-1.086667,
zOff-0.216506
), new Point3D(0.258819,-0.965926,
zOff-0.250000
));
object[932] = new Triangle(new Point3D(0.291171,-1.086667,
zOff-0.216506
), new Point3D(0.430519,-1.039364,
zOff-0.216506
), new Point3D(0.465537,-1.123905,
zOff-0.125000
));
object[933] = new Triangle(new Point3D(0.465537,-1.123905,
zOff-0.125000
), new Point3D(0.314854,-1.175055,
zOff-0.125000
), new Point3D(0.291171,-1.086667,
zOff-0.216506
));
object[934] = new Triangle(new Point3D(0.314854,-1.175055,
zOff-0.125000
), new Point3D(0.465537,-1.123905,
zOff-0.125000
), new Point3D(0.478355,-1.154849,
zOff+0.000000
));
object[935] = new Triangle(new Point3D(0.478355,-1.154849,
zOff+0.000000
), new Point3D(0.323523,-1.207407,
zOff+0.000000
), new Point3D(0.314854,-1.175055,
zOff-0.125000
));
object[936] = new Triangle(new Point3D(0.478355,-1.154849,
zOff+0.000000
), new Point3D(0.625000,-1.082532,
zOff+0.000000
), new Point3D(0.608253,-1.053525,
zOff+0.125000
));
object[937] = new Triangle(new Point3D(0.608253,-1.053525,
zOff+0.125000
), new Point3D(0.465537,-1.123905,
zOff+0.125000
), new Point3D(0.478355,-1.154849,
zOff+0.000000
));
object[938] = new Triangle(new Point3D(0.465537,-1.123905,
zOff+0.125000
), new Point3D(0.608253,-1.053525,
zOff+0.125000
), new Point3D(0.562500,-0.974279,
zOff+0.216506
));
object[939] = new Triangle(new Point3D(0.562500,-0.974279,
zOff+0.216506
), new Point3D(0.430519,-1.039364,
zOff+0.216506
), new Point3D(0.465537,-1.123905,
zOff+0.125000
));
object[940] = new Triangle(new Point3D(0.430519,-1.039364,
zOff+0.216506
), new Point3D(0.562500,-0.974279,
zOff+0.216506
), new Point3D(0.500000,-0.866025,
zOff+0.250000
));
object[941] = new Triangle(new Point3D(0.500000,-0.866025,
zOff+0.250000
), new Point3D(0.382684,-0.923879,
zOff+0.250000
), new Point3D(0.430519,-1.039364,
zOff+0.216506
));
object[942] = new Triangle(new Point3D(0.382684,-0.923879,
zOff+0.250000
), new Point3D(0.500000,-0.866025,
zOff+0.250000
), new Point3D(0.437500,-0.757772,
zOff+0.216506
));
object[943] = new Triangle(new Point3D(0.437500,-0.757772,
zOff+0.216506
), new Point3D(0.334848,-0.808394,
zOff+0.216506
), new Point3D(0.382684,-0.923879,
zOff+0.250000
));
object[944] = new Triangle(new Point3D(0.334848,-0.808394,
zOff+0.216506
), new Point3D(0.437500,-0.757772,
zOff+0.216506
), new Point3D(0.391747,-0.678525,
zOff+0.125000
));
object[945] = new Triangle(new Point3D(0.391747,-0.678525,
zOff+0.125000
), new Point3D(0.299830,-0.723854,
zOff+0.125000
), new Point3D(0.334848,-0.808394,
zOff+0.216506
));
object[946] = new Triangle(new Point3D(0.299830,-0.723854,
zOff+0.125000
), new Point3D(0.391747,-0.678525,
zOff+0.125000
), new Point3D(0.375000,-0.649519,
zOff+0.000000
));
object[947] = new Triangle(new Point3D(0.375000,-0.649519,
zOff+0.000000
), new Point3D(0.287013,-0.692910,
zOff+0.000000
), new Point3D(0.299830,-0.723854,
zOff+0.125000
));
object[948] = new Triangle(new Point3D(0.287013,-0.692910,
zOff+0.000000
), new Point3D(0.375000,-0.649519,
zOff+0.000000
), new Point3D(0.391747,-0.678525,
zOff-0.125000
));
object[949] = new Triangle(new Point3D(0.391747,-0.678525,
zOff-0.125000
), new Point3D(0.299830,-0.723854,
zOff-0.125000
), new Point3D(0.287013,-0.692910,
zOff+0.000000
));
object[950] = new Triangle(new Point3D(0.299830,-0.723854,
zOff-0.125000
), new Point3D(0.391747,-0.678525,
zOff-0.125000
), new Point3D(0.437500,-0.757772,
zOff-0.216506
));
object[951] = new Triangle(new Point3D(0.437500,-0.757772,
zOff-0.216506
), new Point3D(0.334848,-0.808394,
zOff-0.216506
), new Point3D(0.299830,-0.723854,
zOff-0.125000
));
object[952] = new Triangle(new Point3D(0.334848,-0.808394,
zOff-0.216506
), new Point3D(0.437500,-0.757772,
zOff-0.216506
), new Point3D(0.500000,-0.866025,
zOff-0.250000
));
object[953] = new Triangle(new Point3D(0.500000,-0.866025,
zOff-0.250000
), new Point3D(0.382684,-0.923879,
zOff-0.250000
), new Point3D(0.334848,-0.808394,
zOff-0.216506
));
object[954] = new Triangle(new Point3D(0.382684,-0.923879,
zOff-0.250000
), new Point3D(0.500000,-0.866025,
zOff-0.250000
), new Point3D(0.562500,-0.974279,
zOff-0.216506
));
object[955] = new Triangle(new Point3D(0.562500,-0.974279,
zOff-0.216506
), new Point3D(0.430519,-1.039364,
zOff-0.216506
), new Point3D(0.382684,-0.923879,
zOff-0.250000
));
object[956] = new Triangle(new Point3D(0.430519,-1.039364,
zOff-0.216506
), new Point3D(0.562500,-0.974279,
zOff-0.216506
), new Point3D(0.608253,-1.053525,
zOff-0.125000
));
object[957] = new Triangle(new Point3D(0.608253,-1.053525,
zOff-0.125000
), new Point3D(0.465537,-1.123905,
zOff-0.125000
), new Point3D(0.430519,-1.039364,
zOff-0.216506
));
object[958] = new Triangle(new Point3D(0.465537,-1.123905,
zOff-0.125000
), new Point3D(0.608253,-1.053525,
zOff-0.125000
), new Point3D(0.625000,-1.082532,
zOff+0.000000
));
object[959] = new Triangle(new Point3D(0.625000,-1.082532,
zOff+0.000000
), new Point3D(0.478355,-1.154849,
zOff+0.000000
), new Point3D(0.465537,-1.123905,
zOff-0.125000
));
object[960] = new Triangle(new Point3D(0.625000,-1.082532,
zOff+0.000000
), new Point3D(0.760952,-0.991692,
zOff+0.000000
), new Point3D(0.740562,-0.965120,
zOff+0.125000
));
object[961] = new Triangle(new Point3D(0.740562,-0.965120,
zOff+0.125000
), new Point3D(0.608253,-1.053525,
zOff+0.125000
), new Point3D(0.625000,-1.082532,
zOff+0.000000
));
object[962] = new Triangle(new Point3D(0.608253,-1.053525,
zOff+0.125000
), new Point3D(0.740562,-0.965120,
zOff+0.125000
), new Point3D(0.684856,-0.892523,
zOff+0.216506
));
object[963] = new Triangle(new Point3D(0.684856,-0.892523,
zOff+0.216506
), new Point3D(0.562500,-0.974279,
zOff+0.216506
), new Point3D(0.608253,-1.053525,
zOff+0.125000
));
object[964] = new Triangle(new Point3D(0.562500,-0.974279,
zOff+0.216506
), new Point3D(0.684856,-0.892523,
zOff+0.216506
), new Point3D(0.608761,-0.793353,
zOff+0.250000
));
object[965] = new Triangle(new Point3D(0.608761,-0.793353,
zOff+0.250000
), new Point3D(0.500000,-0.866025,
zOff+0.250000
), new Point3D(0.562500,-0.974279,
zOff+0.216506
));
object[966] = new Triangle(new Point3D(0.500000,-0.866025,
zOff+0.250000
), new Point3D(0.608761,-0.793353,
zOff+0.250000
), new Point3D(0.532666,-0.694184,
zOff+0.216506
));
object[967] = new Triangle(new Point3D(0.532666,-0.694184,
zOff+0.216506
), new Point3D(0.437500,-0.757772,
zOff+0.216506
), new Point3D(0.500000,-0.866025,
zOff+0.250000
));
object[968] = new Triangle(new Point3D(0.437500,-0.757772,
zOff+0.216506
), new Point3D(0.532666,-0.694184,
zOff+0.216506
), new Point3D(0.476961,-0.621587,
zOff+0.125000
));
object[969] = new Triangle(new Point3D(0.476961,-0.621587,
zOff+0.125000
), new Point3D(0.391747,-0.678525,
zOff+0.125000
), new Point3D(0.437500,-0.757772,
zOff+0.216506
));
object[970] = new Triangle(new Point3D(0.391747,-0.678525,
zOff+0.125000
), new Point3D(0.476961,-0.621587,
zOff+0.125000
), new Point3D(0.456571,-0.595015,
zOff+0.000000
));
object[971] = new Triangle(new Point3D(0.456571,-0.595015,
zOff+0.000000
), new Point3D(0.375000,-0.649519,
zOff+0.000000
), new Point3D(0.391747,-0.678525,
zOff+0.125000
));
object[972] = new Triangle(new Point3D(0.375000,-0.649519,
zOff+0.000000
), new Point3D(0.456571,-0.595015,
zOff+0.000000
), new Point3D(0.476961,-0.621587,
zOff-0.125000
));
object[973] = new Triangle(new Point3D(0.476961,-0.621587,
zOff-0.125000
), new Point3D(0.391747,-0.678525,
zOff-0.125000
), new Point3D(0.375000,-0.649519,
zOff+0.000000
));
object[974] = new Triangle(new Point3D(0.391747,-0.678525,
zOff-0.125000
), new Point3D(0.476961,-0.621587,
zOff-0.125000
), new Point3D(0.532666,-0.694184,
zOff-0.216506
));
object[975] = new Triangle(new Point3D(0.532666,-0.694184,
zOff-0.216506
), new Point3D(0.437500,-0.757772,
zOff-0.216506
), new Point3D(0.391747,-0.678525,
zOff-0.125000
));
object[976] = new Triangle(new Point3D(0.437500,-0.757772,
zOff-0.216506
), new Point3D(0.532666,-0.694184,
zOff-0.216506
), new Point3D(0.608761,-0.793353,
zOff-0.250000
));
object[977] = new Triangle(new Point3D(0.608761,-0.793353,
zOff-0.250000
), new Point3D(0.500000,-0.866025,
zOff-0.250000
), new Point3D(0.437500,-0.757772,
zOff-0.216506
));
object[978] = new Triangle(new Point3D(0.500000,-0.866025,
zOff-0.250000
), new Point3D(0.608761,-0.793353,
zOff-0.250000
), new Point3D(0.684856,-0.892523,
zOff-0.216506
));
object[979] = new Triangle(new Point3D(0.684856,-0.892523,
zOff-0.216506
), new Point3D(0.562500,-0.974279,
zOff-0.216506
), new Point3D(0.500000,-0.866025,
zOff-0.250000
));
object[980] = new Triangle(new Point3D(0.562500,-0.974279,
zOff-0.216506
), new Point3D(0.684856,-0.892523,
zOff-0.216506
), new Point3D(0.740562,-0.965120,
zOff-0.125000
));
object[981] = new Triangle(new Point3D(0.740562,-0.965120,
zOff-0.125000
), new Point3D(0.608253,-1.053525,
zOff-0.125000
), new Point3D(0.562500,-0.974279,
zOff-0.216506
));
object[982] = new Triangle(new Point3D(0.608253,-1.053525,
zOff-0.125000
), new Point3D(0.740562,-0.965120,
zOff-0.125000
), new Point3D(0.760952,-0.991692,
zOff+0.000000
));
object[983] = new Triangle(new Point3D(0.760952,-0.991692,
zOff+0.000000
), new Point3D(0.625000,-1.082532,
zOff+0.000000
), new Point3D(0.608253,-1.053525,
zOff-0.125000
));
object[984] = new Triangle(new Point3D(0.760952,-0.991692,
zOff+0.000000
), new Point3D(0.883883,-0.883884,
zOff+0.000000
), new Point3D(0.860199,-0.860200,
zOff+0.125000
));
object[985] = new Triangle(new Point3D(0.860199,-0.860200,
zOff+0.125000
), new Point3D(0.740562,-0.965120,
zOff+0.125000
), new Point3D(0.760952,-0.991692,
zOff+0.000000
));
object[986] = new Triangle(new Point3D(0.740562,-0.965120,
zOff+0.125000
), new Point3D(0.860199,-0.860200,
zOff+0.125000
), new Point3D(0.795495,-0.795496,
zOff+0.216506
));
object[987] = new Triangle(new Point3D(0.795495,-0.795496,
zOff+0.216506
), new Point3D(0.684856,-0.892523,
zOff+0.216506
), new Point3D(0.740562,-0.965120,
zOff+0.125000
));
object[988] = new Triangle(new Point3D(0.684856,-0.892523,
zOff+0.216506
), new Point3D(0.795495,-0.795496,
zOff+0.216506
), new Point3D(0.707106,-0.707107,
zOff+0.250000
));
object[989] = new Triangle(new Point3D(0.707106,-0.707107,
zOff+0.250000
), new Point3D(0.608761,-0.793353,
zOff+0.250000
), new Point3D(0.684856,-0.892523,
zOff+0.216506
));
object[990] = new Triangle(new Point3D(0.608761,-0.793353,
zOff+0.250000
), new Point3D(0.707106,-0.707107,
zOff+0.250000
), new Point3D(0.618718,-0.618719,
zOff+0.216506
));
object[991] = new Triangle(new Point3D(0.618718,-0.618719,
zOff+0.216506
), new Point3D(0.532666,-0.694184,
zOff+0.216506
), new Point3D(0.608761,-0.793353,
zOff+0.250000
));
object[992] = new Triangle(new Point3D(0.532666,-0.694184,
zOff+0.216506
), new Point3D(0.618718,-0.618719,
zOff+0.216506
), new Point3D(0.554013,-0.554014,
zOff+0.125000
));
object[993] = new Triangle(new Point3D(0.554013,-0.554014,
zOff+0.125000
), new Point3D(0.476961,-0.621587,
zOff+0.125000
), new Point3D(0.532666,-0.694184,
zOff+0.216506
));
object[994] = new Triangle(new Point3D(0.476961,-0.621587,
zOff+0.125000
), new Point3D(0.554013,-0.554014,
zOff+0.125000
), new Point3D(0.530330,-0.530330,
zOff+0.000000
));
object[995] = new Triangle(new Point3D(0.530330,-0.530330,
zOff+0.000000
), new Point3D(0.456571,-0.595015,
zOff+0.000000
), new Point3D(0.476961,-0.621587,
zOff+0.125000
));
object[996] = new Triangle(new Point3D(0.456571,-0.595015,
zOff+0.000000
), new Point3D(0.530330,-0.530330,
zOff+0.000000
), new Point3D(0.554013,-0.554014,
zOff-0.125000
));
object[997] = new Triangle(new Point3D(0.554013,-0.554014,
zOff-0.125000
), new Point3D(0.476961,-0.621587,
zOff-0.125000
), new Point3D(0.456571,-0.595015,
zOff+0.000000
));
object[998] = new Triangle(new Point3D(0.476961,-0.621587,
zOff-0.125000
), new Point3D(0.554013,-0.554014,
zOff-0.125000
), new Point3D(0.618718,-0.618719,
zOff-0.216506
));
object[999] = new Triangle(new Point3D(0.618718,-0.618719,
zOff-0.216506
), new Point3D(0.532666,-0.694184,
zOff-0.216506
), new Point3D(0.476961,-0.621587,
zOff-0.125000
));
object[1000] = new Triangle(new Point3D(0.532666,-0.694184,
zOff-0.216506
), new Point3D(0.618718,-0.618719,
zOff-0.216506
), new Point3D(0.707106,-0.707107,
zOff-0.250000
));
object[1001] = new Triangle(new Point3D(0.707106,-0.707107,
zOff-0.250000
), new Point3D(0.608761,-0.793353,
zOff-0.250000
), new Point3D(0.532666,-0.694184,
zOff-0.216506
));
object[1002] = new Triangle(new Point3D(0.608761,-0.793353,
zOff-0.250000
), new Point3D(0.707106,-0.707107,
zOff-0.250000
), new Point3D(0.795495,-0.795496,
zOff-0.216506
));
object[1003] = new Triangle(new Point3D(0.795495,-0.795496,
zOff-0.216506
), new Point3D(0.684856,-0.892523,
zOff-0.216506
), new Point3D(0.608761,-0.793353,
zOff-0.250000
));
object[1004] = new Triangle(new Point3D(0.684856,-0.892523,
zOff-0.216506
), new Point3D(0.795495,-0.795496,
zOff-0.216506
), new Point3D(0.860199,-0.860200,
zOff-0.125000
));
object[1005] = new Triangle(new Point3D(0.860199,-0.860200,
zOff-0.125000
), new Point3D(0.740562,-0.965120,
zOff-0.125000
), new Point3D(0.684856,-0.892523,
zOff-0.216506
));
object[1006] = new Triangle(new Point3D(0.740562,-0.965120,
zOff-0.125000
), new Point3D(0.860199,-0.860200,
zOff-0.125000
), new Point3D(0.883883,-0.883884,
zOff+0.000000
));
object[1007] = new Triangle(new Point3D(0.883883,-0.883884,
zOff+0.000000
), new Point3D(0.760952,-0.991692,
zOff+0.000000
), new Point3D(0.740562,-0.965120,
zOff-0.125000
));
object[1008] = new Triangle(new Point3D(0.883883,-0.883884,
zOff+0.000000
), new Point3D(0.991692,-0.760952,
zOff+0.000000
), new Point3D(0.965119,-0.740562,
zOff+0.125000
));
object[1009] = new Triangle(new Point3D(0.965119,-0.740562,
zOff+0.125000
), new Point3D(0.860199,-0.860200,
zOff+0.125000
), new Point3D(0.883883,-0.883884,
zOff+0.000000
));
object[1010] = new Triangle(new Point3D(0.860199,-0.860200,
zOff+0.125000
), new Point3D(0.965119,-0.740562,
zOff+0.125000
), new Point3D(0.892523,-0.684856,
zOff+0.216506
));
object[1011] = new Triangle(new Point3D(0.892523,-0.684856,
zOff+0.216506
), new Point3D(0.795495,-0.795496,
zOff+0.216506
), new Point3D(0.860199,-0.860200,
zOff+0.125000
));
object[1012] = new Triangle(new Point3D(0.795495,-0.795496,
zOff+0.216506
), new Point3D(0.892523,-0.684856,
zOff+0.216506
), new Point3D(0.793353,-0.608761,
zOff+0.250000
));
object[1013] = new Triangle(new Point3D(0.793353,-0.608761,
zOff+0.250000
), new Point3D(0.707106,-0.707107,
zOff+0.250000
), new Point3D(0.795495,-0.795496,
zOff+0.216506
));
object[1014] = new Triangle(new Point3D(0.707106,-0.707107,
zOff+0.250000
), new Point3D(0.793353,-0.608761,
zOff+0.250000
), new Point3D(0.694184,-0.532666,
zOff+0.216506
));
object[1015] = new Triangle(new Point3D(0.694184,-0.532666,
zOff+0.216506
), new Point3D(0.618718,-0.618719,
zOff+0.216506
), new Point3D(0.707106,-0.707107,
zOff+0.250000
));
object[1016] = new Triangle(new Point3D(0.618718,-0.618719,
zOff+0.216506
), new Point3D(0.694184,-0.532666,
zOff+0.216506
), new Point3D(0.621587,-0.476961,
zOff+0.125000
));
object[1017] = new Triangle(new Point3D(0.621587,-0.476961,
zOff+0.125000
), new Point3D(0.554013,-0.554014,
zOff+0.125000
), new Point3D(0.618718,-0.618719,
zOff+0.216506
));
object[1018] = new Triangle(new Point3D(0.554013,-0.554014,
zOff+0.125000
), new Point3D(0.621587,-0.476961,
zOff+0.125000
), new Point3D(0.595015,-0.456571,
zOff+0.000000
));
object[1019] = new Triangle(new Point3D(0.595015,-0.456571,
zOff+0.000000
), new Point3D(0.530330,-0.530330,
zOff+0.000000
), new Point3D(0.554013,-0.554014,
zOff+0.125000
));
object[1020] = new Triangle(new Point3D(0.530330,-0.530330,
zOff+0.000000
), new Point3D(0.595015,-0.456571,
zOff+0.000000
), new Point3D(0.621587,-0.476961,
zOff-0.125000
));
object[1021] = new Triangle(new Point3D(0.621587,-0.476961,
zOff-0.125000
), new Point3D(0.554013,-0.554014,
zOff-0.125000
), new Point3D(0.530330,-0.530330,
zOff+0.000000
));
object[1022] = new Triangle(new Point3D(0.554013,-0.554014,
zOff-0.125000
), new Point3D(0.621587,-0.476961,
zOff-0.125000
), new Point3D(0.694184,-0.532666,
zOff-0.216506
));
object[1023] = new Triangle(new Point3D(0.694184,-0.532666,
zOff-0.216506
), new Point3D(0.618718,-0.618719,
zOff-0.216506
), new Point3D(0.554013,-0.554014,
zOff-0.125000
));
object[1024] = new Triangle(new Point3D(0.618718,-0.618719,
zOff-0.216506
), new Point3D(0.694184,-0.532666,
zOff-0.216506
), new Point3D(0.793353,-0.608761,
zOff-0.250000
));
object[1025] = new Triangle(new Point3D(0.793353,-0.608761,
zOff-0.250000
), new Point3D(0.707106,-0.707107,
zOff-0.250000
), new Point3D(0.618718,-0.618719,
zOff-0.216506
));
object[1026] = new Triangle(new Point3D(0.707106,-0.707107,
zOff-0.250000
), new Point3D(0.793353,-0.608761,
zOff-0.250000
), new Point3D(0.892523,-0.684856,
zOff-0.216506
));
object[1027] = new Triangle(new Point3D(0.892523,-0.684856,
zOff-0.216506
), new Point3D(0.795495,-0.795496,
zOff-0.216506
), new Point3D(0.707106,-0.707107,
zOff-0.250000
));
object[1028] = new Triangle(new Point3D(0.795495,-0.795496,
zOff-0.216506
), new Point3D(0.892523,-0.684856,
zOff-0.216506
), new Point3D(0.965119,-0.740562,
zOff-0.125000
));
object[1029] = new Triangle(new Point3D(0.965119,-0.740562,
zOff-0.125000
), new Point3D(0.860199,-0.860200,
zOff-0.125000
), new Point3D(0.795495,-0.795496,
zOff-0.216506
));
object[1030] = new Triangle(new Point3D(0.860199,-0.860200,
zOff-0.125000
), new Point3D(0.965119,-0.740562,
zOff-0.125000
), new Point3D(0.991692,-0.760952,
zOff+0.000000
));
object[1031] = new Triangle(new Point3D(0.991692,-0.760952,
zOff+0.000000
), new Point3D(0.883883,-0.883884,
zOff+0.000000
), new Point3D(0.860199,-0.860200,
zOff-0.125000
));
object[1032] = new Triangle(new Point3D(0.991692,-0.760952,
zOff+0.000000
), new Point3D(1.082532,-0.625000,
zOff+0.000000
), new Point3D(1.053525,-0.608253,
zOff+0.125000
));
object[1033] = new Triangle(new Point3D(1.053525,-0.608253,
zOff+0.125000
), new Point3D(0.965119,-0.740562,
zOff+0.125000
), new Point3D(0.991692,-0.760952,
zOff+0.000000
));
object[1034] = new Triangle(new Point3D(0.965119,-0.740562,
zOff+0.125000
), new Point3D(1.053525,-0.608253,
zOff+0.125000
), new Point3D(0.974279,-0.562500,
zOff+0.216506
));
object[1035] = new Triangle(new Point3D(0.974279,-0.562500,
zOff+0.216506
), new Point3D(0.892523,-0.684856,
zOff+0.216506
), new Point3D(0.965119,-0.740562,
zOff+0.125000
));
object[1036] = new Triangle(new Point3D(0.892523,-0.684856,
zOff+0.216506
), new Point3D(0.974279,-0.562500,
zOff+0.216506
), new Point3D(0.866025,-0.500000,
zOff+0.250000
));
object[1037] = new Triangle(new Point3D(0.866025,-0.500000,
zOff+0.250000
), new Point3D(0.793353,-0.608761,
zOff+0.250000
), new Point3D(0.892523,-0.684856,
zOff+0.216506
));
object[1038] = new Triangle(new Point3D(0.793353,-0.608761,
zOff+0.250000
), new Point3D(0.866025,-0.500000,
zOff+0.250000
), new Point3D(0.757772,-0.437500,
zOff+0.216506
));
object[1039] = new Triangle(new Point3D(0.757772,-0.437500,
zOff+0.216506
), new Point3D(0.694184,-0.532666,
zOff+0.216506
), new Point3D(0.793353,-0.608761,
zOff+0.250000
));
object[1040] = new Triangle(new Point3D(0.694184,-0.532666,
zOff+0.216506
), new Point3D(0.757772,-0.437500,
zOff+0.216506
), new Point3D(0.678525,-0.391747,
zOff+0.125000
));
object[1041] = new Triangle(new Point3D(0.678525,-0.391747,
zOff+0.125000
), new Point3D(0.621587,-0.476961,
zOff+0.125000
), new Point3D(0.694184,-0.532666,
zOff+0.216506
));
object[1042] = new Triangle(new Point3D(0.621587,-0.476961,
zOff+0.125000
), new Point3D(0.678525,-0.391747,
zOff+0.125000
), new Point3D(0.649519,-0.375000,
zOff+0.000000
));
object[1043] = new Triangle(new Point3D(0.649519,-0.375000,
zOff+0.000000
), new Point3D(0.595015,-0.456571,
zOff+0.000000
), new Point3D(0.621587,-0.476961,
zOff+0.125000
));
object[1044] = new Triangle(new Point3D(0.595015,-0.456571,
zOff+0.000000
), new Point3D(0.649519,-0.375000,
zOff+0.000000
), new Point3D(0.678525,-0.391747,
zOff-0.125000
));
object[1045] = new Triangle(new Point3D(0.678525,-0.391747,
zOff-0.125000
), new Point3D(0.621587,-0.476961,
zOff-0.125000
), new Point3D(0.595015,-0.456571,
zOff+0.000000
));
object[1046] = new Triangle(new Point3D(0.621587,-0.476961,
zOff-0.125000
), new Point3D(0.678525,-0.391747,
zOff-0.125000
), new Point3D(0.757772,-0.437500,
zOff-0.216506
));
object[1047] = new Triangle(new Point3D(0.757772,-0.437500,
zOff-0.216506
), new Point3D(0.694184,-0.532666,
zOff-0.216506
), new Point3D(0.621587,-0.476961,
zOff-0.125000
));
object[1048] = new Triangle(new Point3D(0.694184,-0.532666,
zOff-0.216506
), new Point3D(0.757772,-0.437500,
zOff-0.216506
), new Point3D(0.866025,-0.500000,
zOff-0.250000
));
object[1049] = new Triangle(new Point3D(0.866025,-0.500000,
zOff-0.250000
), new Point3D(0.793353,-0.608761,
zOff-0.250000
), new Point3D(0.694184,-0.532666,
zOff-0.216506
));
object[1050] = new Triangle(new Point3D(0.793353,-0.608761,
zOff-0.250000
), new Point3D(0.866025,-0.500000,
zOff-0.250000
), new Point3D(0.974279,-0.562500,
zOff-0.216506
));
object[1051] = new Triangle(new Point3D(0.974279,-0.562500,
zOff-0.216506
), new Point3D(0.892523,-0.684856,
zOff-0.216506
), new Point3D(0.793353,-0.608761,
zOff-0.250000
));
object[1052] = new Triangle(new Point3D(0.892523,-0.684856,
zOff-0.216506
), new Point3D(0.974279,-0.562500,
zOff-0.216506
), new Point3D(1.053525,-0.608253,
zOff-0.125000
));
object[1053] = new Triangle(new Point3D(1.053525,-0.608253,
zOff-0.125000
), new Point3D(0.965119,-0.740562,
zOff-0.125000
), new Point3D(0.892523,-0.684856,
zOff-0.216506
));
object[1054] = new Triangle(new Point3D(0.965119,-0.740562,
zOff-0.125000
), new Point3D(1.053525,-0.608253,
zOff-0.125000
), new Point3D(1.082532,-0.625000,
zOff+0.000000
));
object[1055] = new Triangle(new Point3D(1.082532,-0.625000,
zOff+0.000000
), new Point3D(0.991692,-0.760952,
zOff+0.000000
), new Point3D(0.965119,-0.740562,
zOff-0.125000
));
object[1056] = new Triangle(new Point3D(1.082532,-0.625000,
zOff+0.000000
), new Point3D(1.154849,-0.478355,
zOff+0.000000
), new Point3D(1.123905,-0.465537,
zOff+0.125000
));
object[1057] = new Triangle(new Point3D(1.123905,-0.465537,
zOff+0.125000
), new Point3D(1.053525,-0.608253,
zOff+0.125000
), new Point3D(1.082532,-0.625000,
zOff+0.000000
));
object[1058] = new Triangle(new Point3D(1.053525,-0.608253,
zOff+0.125000
), new Point3D(1.123905,-0.465537,
zOff+0.125000
), new Point3D(1.039364,-0.430519,
zOff+0.216506
));
object[1059] = new Triangle(new Point3D(1.039364,-0.430519,
zOff+0.216506
), new Point3D(0.974279,-0.562500,
zOff+0.216506
), new Point3D(1.053525,-0.608253,
zOff+0.125000
));
object[1060] = new Triangle(new Point3D(0.974279,-0.562500,
zOff+0.216506
), new Point3D(1.039364,-0.430519,
zOff+0.216506
), new Point3D(0.923879,-0.382684,
zOff+0.250000
));
object[1061] = new Triangle(new Point3D(0.923879,-0.382684,
zOff+0.250000
), new Point3D(0.866025,-0.500000,
zOff+0.250000
), new Point3D(0.974279,-0.562500,
zOff+0.216506
));
object[1062] = new Triangle(new Point3D(0.866025,-0.500000,
zOff+0.250000
), new Point3D(0.923879,-0.382684,
zOff+0.250000
), new Point3D(0.808394,-0.334848,
zOff+0.216506
));
object[1063] = new Triangle(new Point3D(0.808394,-0.334848,
zOff+0.216506
), new Point3D(0.757772,-0.437500,
zOff+0.216506
), new Point3D(0.866025,-0.500000,
zOff+0.250000
));
object[1064] = new Triangle(new Point3D(0.757772,-0.437500,
zOff+0.216506
), new Point3D(0.808394,-0.334848,
zOff+0.216506
), new Point3D(0.723854,-0.299830,
zOff+0.125000
));
object[1065] = new Triangle(new Point3D(0.723854,-0.299830,
zOff+0.125000
), new Point3D(0.678525,-0.391747,
zOff+0.125000
), new Point3D(0.757772,-0.437500,
zOff+0.216506
));
object[1066] = new Triangle(new Point3D(0.678525,-0.391747,
zOff+0.125000
), new Point3D(0.723854,-0.299830,
zOff+0.125000
), new Point3D(0.692910,-0.287013,
zOff+0.000000
));
object[1067] = new Triangle(new Point3D(0.692910,-0.287013,
zOff+0.000000
), new Point3D(0.649519,-0.375000,
zOff+0.000000
), new Point3D(0.678525,-0.391747,
zOff+0.125000
));
object[1068] = new Triangle(new Point3D(0.649519,-0.375000,
zOff+0.000000
), new Point3D(0.692910,-0.287013,
zOff+0.000000
), new Point3D(0.723854,-0.299830,
zOff-0.125000
));
object[1069] = new Triangle(new Point3D(0.723854,-0.299830,
zOff-0.125000
), new Point3D(0.678525,-0.391747,
zOff-0.125000
), new Point3D(0.649519,-0.375000,
zOff+0.000000
));
object[1070] = new Triangle(new Point3D(0.678525,-0.391747,
zOff-0.125000
), new Point3D(0.723854,-0.299830,
zOff-0.125000
), new Point3D(0.808394,-0.334848,
zOff-0.216506
));
object[1071] = new Triangle(new Point3D(0.808394,-0.334848,
zOff-0.216506
), new Point3D(0.757772,-0.437500,
zOff-0.216506
), new Point3D(0.678525,-0.391747,
zOff-0.125000
));
object[1072] = new Triangle(new Point3D(0.757772,-0.437500,
zOff-0.216506
), new Point3D(0.808394,-0.334848,
zOff-0.216506
), new Point3D(0.923879,-0.382684,
zOff-0.250000
));
object[1073] = new Triangle(new Point3D(0.923879,-0.382684,
zOff-0.250000
), new Point3D(0.866025,-0.500000,
zOff-0.250000
), new Point3D(0.757772,-0.437500,
zOff-0.216506
));
object[1074] = new Triangle(new Point3D(0.866025,-0.500000,
zOff-0.250000
), new Point3D(0.923879,-0.382684,
zOff-0.250000
), new Point3D(1.039364,-0.430519,
zOff-0.216506
));
object[1075] = new Triangle(new Point3D(1.039364,-0.430519,
zOff-0.216506
), new Point3D(0.974279,-0.562500,
zOff-0.216506
), new Point3D(0.866025,-0.500000,
zOff-0.250000
));
object[1076] = new Triangle(new Point3D(0.974279,-0.562500,
zOff-0.216506
), new Point3D(1.039364,-0.430519,
zOff-0.216506
), new Point3D(1.123905,-0.465537,
zOff-0.125000
));
object[1077] = new Triangle(new Point3D(1.123905,-0.465537,
zOff-0.125000
), new Point3D(1.053525,-0.608253,
zOff-0.125000
), new Point3D(0.974279,-0.562500,
zOff-0.216506
));
object[1078] = new Triangle(new Point3D(1.053525,-0.608253,
zOff-0.125000
), new Point3D(1.123905,-0.465537,
zOff-0.125000
), new Point3D(1.154849,-0.478355,
zOff+0.000000
));
object[1079] = new Triangle(new Point3D(1.154849,-0.478355,
zOff+0.000000
), new Point3D(1.082532,-0.625000,
zOff+0.000000
), new Point3D(1.053525,-0.608253,
zOff-0.125000
));
object[1080] = new Triangle(new Point3D(1.154849,-0.478355,
zOff+0.000000
), new Point3D(1.207407,-0.323523,
zOff+0.000000
), new Point3D(1.175055,-0.314855,
zOff+0.125000
));
object[1081] = new Triangle(new Point3D(1.175055,-0.314855,
zOff+0.125000
), new Point3D(1.123905,-0.465537,
zOff+0.125000
), new Point3D(1.154849,-0.478355,
zOff+0.000000
));
object[1082] = new Triangle(new Point3D(1.123905,-0.465537,
zOff+0.125000
), new Point3D(1.175055,-0.314855,
zOff+0.125000
), new Point3D(1.086667,-0.291171,
zOff+0.216506
));
object[1083] = new Triangle(new Point3D(1.086667,-0.291171,
zOff+0.216506
), new Point3D(1.039364,-0.430519,
zOff+0.216506
), new Point3D(1.123905,-0.465537,
zOff+0.125000
));
object[1084] = new Triangle(new Point3D(1.039364,-0.430519,
zOff+0.216506
), new Point3D(1.086667,-0.291171,
zOff+0.216506
), new Point3D(0.965926,-0.258819,
zOff+0.250000
));
object[1085] = new Triangle(new Point3D(0.965926,-0.258819,
zOff+0.250000
), new Point3D(0.923879,-0.382684,
zOff+0.250000
), new Point3D(1.039364,-0.430519,
zOff+0.216506
));
object[1086] = new Triangle(new Point3D(0.923879,-0.382684,
zOff+0.250000
), new Point3D(0.965926,-0.258819,
zOff+0.250000
), new Point3D(0.845185,-0.226466,
zOff+0.216506
));
object[1087] = new Triangle(new Point3D(0.845185,-0.226466,
zOff+0.216506
), new Point3D(0.808394,-0.334848,
zOff+0.216506
), new Point3D(0.923879,-0.382684,
zOff+0.250000
));
object[1088] = new Triangle(new Point3D(0.808394,-0.334848,
zOff+0.216506
), new Point3D(0.845185,-0.226466,
zOff+0.216506
), new Point3D(0.756797,-0.202783,
zOff+0.125000
));
object[1089] = new Triangle(new Point3D(0.756797,-0.202783,
zOff+0.125000
), new Point3D(0.723854,-0.299830,
zOff+0.125000
), new Point3D(0.808394,-0.334848,
zOff+0.216506
));
object[1090] = new Triangle(new Point3D(0.723854,-0.299830,
zOff+0.125000
), new Point3D(0.756797,-0.202783,
zOff+0.125000
), new Point3D(0.724444,-0.194114,
zOff+0.000000
));
object[1091] = new Triangle(new Point3D(0.724444,-0.194114,
zOff+0.000000
), new Point3D(0.692910,-0.287013,
zOff+0.000000
), new Point3D(0.723854,-0.299830,
zOff+0.125000
));
object[1092] = new Triangle(new Point3D(0.692910,-0.287013,
zOff+0.000000
), new Point3D(0.724444,-0.194114,
zOff+0.000000
), new Point3D(0.756797,-0.202783,
zOff-0.125000
));
object[1093] = new Triangle(new Point3D(0.756797,-0.202783,
zOff-0.125000
), new Point3D(0.723854,-0.299830,
zOff-0.125000
), new Point3D(0.692910,-0.287013,
zOff+0.000000
));
object[1094] = new Triangle(new Point3D(0.723854,-0.299830,
zOff-0.125000
), new Point3D(0.756797,-0.202783,
zOff-0.125000
), new Point3D(0.845185,-0.226466,
zOff-0.216506
));
object[1095] = new Triangle(new Point3D(0.845185,-0.226466,
zOff-0.216506
), new Point3D(0.808394,-0.334848,
zOff-0.216506
), new Point3D(0.723854,-0.299830,
zOff-0.125000
));
object[1096] = new Triangle(new Point3D(0.808394,-0.334848,
zOff-0.216506
), new Point3D(0.845185,-0.226466,
zOff-0.216506
), new Point3D(0.965926,-0.258819,
zOff-0.250000
));
object[1097] = new Triangle(new Point3D(0.965926,-0.258819,
zOff-0.250000
), new Point3D(0.923879,-0.382684,
zOff-0.250000
), new Point3D(0.808394,-0.334848,
zOff-0.216506
));
object[1098] = new Triangle(new Point3D(0.923879,-0.382684,
zOff-0.250000
), new Point3D(0.965926,-0.258819,
zOff-0.250000
), new Point3D(1.086667,-0.291171,
zOff-0.216506
));
object[1099] = new Triangle(new Point3D(1.086667,-0.291171,
zOff-0.216506
), new Point3D(1.039364,-0.430519,
zOff-0.216506
), new Point3D(0.923879,-0.382684,
zOff-0.250000
));
object[1100] = new Triangle(new Point3D(1.039364,-0.430519,
zOff-0.216506
), new Point3D(1.086667,-0.291171,
zOff-0.216506
), new Point3D(1.175055,-0.314855,
zOff-0.125000
));
object[1101] = new Triangle(new Point3D(1.175055,-0.314855,
zOff-0.125000
), new Point3D(1.123905,-0.465537,
zOff-0.125000
), new Point3D(1.039364,-0.430519,
zOff-0.216506
));
object[1102] = new Triangle(new Point3D(1.123905,-0.465537,
zOff-0.125000
), new Point3D(1.175055,-0.314855,
zOff-0.125000
), new Point3D(1.207407,-0.323523,
zOff+0.000000
));
object[1103] = new Triangle(new Point3D(1.207407,-0.323523,
zOff+0.000000
), new Point3D(1.154849,-0.478355,
zOff+0.000000
), new Point3D(1.123905,-0.465537,
zOff-0.125000
));
object[1104] = new Triangle(new Point3D(1.207407,-0.323523,
zOff+0.000000
), new Point3D(1.239306,-0.163158,
zOff+0.000000
), new Point3D(1.206099,-0.158786,
zOff+0.125000
));
object[1105] = new Triangle(new Point3D(1.206099,-0.158786,
zOff+0.125000
), new Point3D(1.175055,-0.314855,
zOff+0.125000
), new Point3D(1.207407,-0.323523,
zOff+0.000000
));
object[1106] = new Triangle(new Point3D(1.175055,-0.314855,
zOff+0.125000
), new Point3D(1.206099,-0.158786,
zOff+0.125000
), new Point3D(1.115376,-0.146842,
zOff+0.216506
));
object[1107] = new Triangle(new Point3D(1.115376,-0.146842,
zOff+0.216506
), new Point3D(1.086667,-0.291171,
zOff+0.216506
), new Point3D(1.175055,-0.314855,
zOff+0.125000
));
object[1108] = new Triangle(new Point3D(1.086667,-0.291171,
zOff+0.216506
), new Point3D(1.115376,-0.146842,
zOff+0.216506
), new Point3D(0.991445,-0.130526,
zOff+0.250000
));
object[1109] = new Triangle(new Point3D(0.991445,-0.130526,
zOff+0.250000
), new Point3D(0.965926,-0.258819,
zOff+0.250000
), new Point3D(1.086667,-0.291171,
zOff+0.216506
));
object[1110] = new Triangle(new Point3D(0.965926,-0.258819,
zOff+0.250000
), new Point3D(0.991445,-0.130526,
zOff+0.250000
), new Point3D(0.867514,-0.114210,
zOff+0.216506
));
object[1111] = new Triangle(new Point3D(0.867514,-0.114210,
zOff+0.216506
), new Point3D(0.845185,-0.226466,
zOff+0.216506
), new Point3D(0.965926,-0.258819,
zOff+0.250000
));
object[1112] = new Triangle(new Point3D(0.845185,-0.226466,
zOff+0.216506
), new Point3D(0.867514,-0.114210,
zOff+0.216506
), new Point3D(0.776791,-0.102266,
zOff+0.125000
));
object[1113] = new Triangle(new Point3D(0.776791,-0.102266,
zOff+0.125000
), new Point3D(0.756797,-0.202783,
zOff+0.125000
), new Point3D(0.845185,-0.226466,
zOff+0.216506
));
object[1114] = new Triangle(new Point3D(0.756797,-0.202783,
zOff+0.125000
), new Point3D(0.776791,-0.102266,
zOff+0.125000
), new Point3D(0.743584,-0.097895,
zOff+0.000000
));
object[1115] = new Triangle(new Point3D(0.743584,-0.097895,
zOff+0.000000
), new Point3D(0.724444,-0.194114,
zOff+0.000000
), new Point3D(0.756797,-0.202783,
zOff+0.125000
));
object[1116] = new Triangle(new Point3D(0.724444,-0.194114,
zOff+0.000000
), new Point3D(0.743584,-0.097895,
zOff+0.000000
), new Point3D(0.776791,-0.102266,
zOff-0.125000
));
object[1117] = new Triangle(new Point3D(0.776791,-0.102266,
zOff-0.125000
), new Point3D(0.756797,-0.202783,
zOff-0.125000
), new Point3D(0.724444,-0.194114,
zOff+0.000000
));
object[1118] = new Triangle(new Point3D(0.756797,-0.202783,
zOff-0.125000
), new Point3D(0.776791,-0.102266,
zOff-0.125000
), new Point3D(0.867514,-0.114210,
zOff-0.216506
));
object[1119] = new Triangle(new Point3D(0.867514,-0.114210,
zOff-0.216506
), new Point3D(0.845185,-0.226466,
zOff-0.216506
), new Point3D(0.756797,-0.202783,
zOff-0.125000
));
object[1120] = new Triangle(new Point3D(0.845185,-0.226466,
zOff-0.216506
), new Point3D(0.867514,-0.114210,
zOff-0.216506
), new Point3D(0.991445,-0.130526,
zOff-0.250000
));
object[1121] = new Triangle(new Point3D(0.991445,-0.130526,
zOff-0.250000
), new Point3D(0.965926,-0.258819,
zOff-0.250000
), new Point3D(0.845185,-0.226466,
zOff-0.216506
));
object[1122] = new Triangle(new Point3D(0.965926,-0.258819,
zOff-0.250000
), new Point3D(0.991445,-0.130526,
zOff-0.250000
), new Point3D(1.115376,-0.146842,
zOff-0.216506
));
object[1123] = new Triangle(new Point3D(1.115376,-0.146842,
zOff-0.216506
), new Point3D(1.086667,-0.291171,
zOff-0.216506
), new Point3D(0.965926,-0.258819,
zOff-0.250000
));
object[1124] = new Triangle(new Point3D(1.086667,-0.291171,
zOff-0.216506
), new Point3D(1.115376,-0.146842,
zOff-0.216506
), new Point3D(1.206099,-0.158786,
zOff-0.125000
));
object[1125] = new Triangle(new Point3D(1.206099,-0.158786,
zOff-0.125000
), new Point3D(1.175055,-0.314855,
zOff-0.125000
), new Point3D(1.086667,-0.291171,
zOff-0.216506
));
object[1126] = new Triangle(new Point3D(1.175055,-0.314855,
zOff-0.125000
), new Point3D(1.206099,-0.158786,
zOff-0.125000
), new Point3D(1.239306,-0.163158,
zOff+0.000000
));
object[1127] = new Triangle(new Point3D(1.239306,-0.163158,
zOff+0.000000
), new Point3D(1.207407,-0.323523,
zOff+0.000000
), new Point3D(1.175055,-0.314855,
zOff-0.125000
));
object[1128] = new Triangle(new Point3D(1.239306,-0.163158,
zOff+0.000000
), new Point3D(1.250000,0.000000,
zOff+0.000000
), new Point3D(1.216506,0.000000,
zOff+0.125000
));
object[1129] = new Triangle(new Point3D(1.216506,0.000000,
zOff+0.125000
), new Point3D(1.206099,-0.158786,
zOff+0.125000
), new Point3D(1.239306,-0.163158,
zOff+0.000000
));
object[1130] = new Triangle(new Point3D(1.206099,-0.158786,
zOff+0.125000
), new Point3D(1.216506,0.000000,
zOff+0.125000
), new Point3D(1.125000,0.000000,
zOff+0.216506
));
object[1131] = new Triangle(new Point3D(1.125000,0.000000,
zOff+0.216506
), new Point3D(1.115376,-0.146842,
zOff+0.216506
), new Point3D(1.206099,-0.158786,
zOff+0.125000
));
object[1132] = new Triangle(new Point3D(1.115376,-0.146842,
zOff+0.216506
), new Point3D(1.125000,0.000000,
zOff+0.216506
), new Point3D(1.000000,0.000000,
zOff+0.250000
));
object[1133] = new Triangle(new Point3D(1.000000,0.000000,
zOff+0.250000
), new Point3D(0.991445,-0.130526,
zOff+0.250000
), new Point3D(1.115376,-0.146842,
zOff+0.216506
));
object[1134] = new Triangle(new Point3D(0.991445,-0.130526,
zOff+0.250000
), new Point3D(1.000000,0.000000,
zOff+0.250000
), new Point3D(0.875000,0.000000,
zOff+0.216506
));
object[1135] = new Triangle(new Point3D(0.875000,0.000000,
zOff+0.216506
), new Point3D(0.867514,-0.114210,
zOff+0.216506
), new Point3D(0.991445,-0.130526,
zOff+0.250000
));
object[1136] = new Triangle(new Point3D(0.867514,-0.114210,
zOff+0.216506
), new Point3D(0.875000,0.000000,
zOff+0.216506
), new Point3D(0.783494,0.000000,
zOff+0.125000
));
object[1137] = new Triangle(new Point3D(0.783494,0.000000,
zOff+0.125000
), new Point3D(0.776791,-0.102266,
zOff+0.125000
), new Point3D(0.867514,-0.114210,
zOff+0.216506
));
object[1138] = new Triangle(new Point3D(0.776791,-0.102266,
zOff+0.125000
), new Point3D(0.783494,0.000000,
zOff+0.125000
), new Point3D(0.750000,0.000000,
zOff+0.000000
));
object[1139] = new Triangle(new Point3D(0.750000,0.000000,
zOff+0.000000
), new Point3D(0.743584,-0.097895,
zOff+0.000000
), new Point3D(0.776791,-0.102266,
zOff+0.125000
));
object[1140] = new Triangle(new Point3D(0.743584,-0.097895,
zOff+0.000000
), new Point3D(0.750000,0.000000,
zOff+0.000000
), new Point3D(0.783494,0.000000,
zOff-0.125000
));
object[1141] = new Triangle(new Point3D(0.783494,0.000000,
zOff-0.125000
), new Point3D(0.776791,-0.102266,
zOff-0.125000
), new Point3D(0.743584,-0.097895,
zOff+0.000000
));
object[1142] = new Triangle(new Point3D(0.776791,-0.102266,
zOff-0.125000
), new Point3D(0.783494,0.000000,
zOff-0.125000
), new Point3D(0.875000,0.000000,
zOff-0.216506
));
object[1143] = new Triangle(new Point3D(0.875000,0.000000,
zOff-0.216506
), new Point3D(0.867514,-0.114210,
zOff-0.216506
), new Point3D(0.776791,-0.102266,
zOff-0.125000
));
object[1144] = new Triangle(new Point3D(0.867514,-0.114210,
zOff-0.216506
), new Point3D(0.875000,0.000000,
zOff-0.216506
), new Point3D(1.000000,0.000000,
zOff-0.250000
));
object[1145] = new Triangle(new Point3D(1.000000,0.000000,
zOff-0.250000
), new Point3D(0.991445,-0.130526,
zOff-0.250000
), new Point3D(0.867514,-0.114210,
zOff-0.216506
));
object[1146] = new Triangle(new Point3D(0.991445,-0.130526,
zOff-0.250000
), new Point3D(1.000000,0.000000,
zOff-0.250000
), new Point3D(1.125000,0.000000,
zOff-0.216506
));
object[1147] = new Triangle(new Point3D(1.125000,0.000000,
zOff-0.216506
), new Point3D(1.115376,-0.146842,
zOff-0.216506
), new Point3D(0.991445,-0.130526,
zOff-0.250000
));
object[1148] = new Triangle(new Point3D(1.115376,-0.146842,
zOff-0.216506
), new Point3D(1.125000,0.000000,
zOff-0.216506
), new Point3D(1.216506,0.000000,
zOff-0.125000
));
object[1149] = new Triangle(new Point3D(1.216506,0.000000,
zOff-0.125000
), new Point3D(1.206099,-0.158786,
zOff-0.125000
), new Point3D(1.115376,-0.146842,
zOff-0.216506
));
object[1150] = new Triangle(new Point3D(1.250000,0.000000,
zOff+0.000000
), new Point3D(1.239306,-0.163158,
zOff+0.000000
), new Point3D(1.206099,-0.158786,
zOff-0.125000
));
object[1151] = new Triangle(new Point3D(1.206099,-0.158786,
zOff-0.125000
), new Point3D(1.216506,0.000000,
zOff-0.125000
), new Point3D(1.250000,0.000000,
zOff+0.000000
));
return object; });
