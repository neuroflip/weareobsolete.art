define(["Util", "Triangle", "Point3D"], function(Util, Triangle, Point3D) {
var object = Util.createArray(11), cubeWidth = 50.0, zOff = Util.zOff;
object[0] = new Triangle(new Point3D(0.449303,0.143151,
zOff+0.486067
), new Point3D(0.474763,0.153635,
zOff+0.460228
), new Point3D(0.471098,0.074085,
zOff+0.468421
));
object[1] = new Triangle(new Point3D(-0.471098,0.074085,
zOff+0.468420
), new Point3D(-0.474763,0.153635,
zOff+0.460227
), new Point3D(-0.449303,0.143151,
zOff+0.486066
));
object[2] = new Triangle(new Point3D(0.518241,0.173021,
zOff+0.544459
), new Point3D(0.553873,0.122766,
zOff+0.538819
), new Point3D(0.542459,0.182899,
zOff+0.518922
));
object[3] = new Triangle(new Point3D(-0.542459,0.182899,
zOff+0.518921
), new Point3D(-0.553873,0.122766,
zOff+0.538818
), new Point3D(-0.518241,0.173021,
zOff+0.544459
));
object[4] = new Triangle(new Point3D(0.474763,0.153635,
zOff+0.460228
), new Point3D(0.449303,0.143151,
zOff+0.486067
), new Point3D(0.470429,0.177282,
zOff+0.519909
));
object[5] = new Triangle(new Point3D(0.470429,0.177282,
zOff+0.519909
), new Point3D(0.509059,0.182912,
zOff+0.473414
), new Point3D(0.474763,0.153635,
zOff+0.460228
));
object[6] = new Triangle(new Point3D(-0.474763,0.153635,
zOff+0.460227
), new Point3D(-0.509059,0.182912,
zOff+0.473414
), new Point3D(-0.470429,0.177282,
zOff+0.519909
));
object[7] = new Triangle(new Point3D(-0.470429,0.177282,
zOff+0.519909
), new Point3D(-0.449303,0.143151,
zOff+0.486066
), new Point3D(-0.474763,0.153635,
zOff+0.460227
));
object[8] = new Triangle(new Point3D(0.518241,0.173021,
zOff+0.544459
), new Point3D(0.542459,0.182899,
zOff+0.518922
), new Point3D(0.509059,0.182912,
zOff+0.473414
));
object[9] = new Triangle(new Point3D(0.509059,0.182912,
zOff+0.473414
), new Point3D(0.470429,0.177282,
zOff+0.519909
), new Point3D(0.518241,0.173021,
zOff+0.544459
));
object[10] = new Triangle(new Point3D(-0.509059,0.182912,
zOff+0.473414
), new Point3D(-0.542459,0.182899,
zOff+0.518921
), new Point3D(-0.518241,0.173021,
zOff+0.544459
));
object[11] = new Triangle(new Point3D(-0.518241,0.173021,
zOff+0.544459
), new Point3D(-0.470429,0.177282,
zOff+0.519909
), new Point3D(-0.509059,0.182912,
zOff+0.473414
));
object[12] = new Triangle(new Point3D(0.542459,0.182899,
zOff+0.518922
), new Point3D(0.553873,0.122766,
zOff+0.538819
), new Point3D(0.655824,0.084579,
zOff+0.468911
));
object[13] = new Triangle(new Point3D(0.655824,0.084579,
zOff+0.468911
), new Point3D(0.632646,0.171060,
zOff+0.436373
), new Point3D(0.542459,0.182899,
zOff+0.518922
));
object[14] = new Triangle(new Point3D(-0.655824,0.084579,
zOff+0.468910
), new Point3D(-0.553873,0.122766,
zOff+0.538818
), new Point3D(-0.542459,0.182899,
zOff+0.518921
));
object[15] = new Triangle(new Point3D(-0.542459,0.182899,
zOff+0.518921
), new Point3D(-0.632646,0.171060,
zOff+0.436372
), new Point3D(-0.655824,0.084579,
zOff+0.468910
));
object[16] = new Triangle(new Point3D(0.509059,0.182912,
zOff+0.473414
), new Point3D(0.542459,0.182899,
zOff+0.518922
), new Point3D(0.632646,0.171060,
zOff+0.436373
));
object[17] = new Triangle(new Point3D(0.632646,0.171060,
zOff+0.436373
), new Point3D(0.576704,0.185186,
zOff+0.393133
), new Point3D(0.509059,0.182912,
zOff+0.473414
));
object[18] = new Triangle(new Point3D(-0.632646,0.171060,
zOff+0.436372
), new Point3D(-0.542459,0.182899,
zOff+0.518921
), new Point3D(-0.509059,0.182912,
zOff+0.473414
));
object[19] = new Triangle(new Point3D(-0.509059,0.182912,
zOff+0.473414
), new Point3D(-0.576704,0.185186,
zOff+0.393132
), new Point3D(-0.632646,0.171060,
zOff+0.436372
));
object[20] = new Triangle(new Point3D(0.553873,0.122766,
zOff+0.538819
), new Point3D(0.559667,0.066884,
zOff+0.535216
), new Point3D(0.645634,0.016372,
zOff+0.436656
));
object[21] = new Triangle(new Point3D(0.645634,0.016372,
zOff+0.436656
), new Point3D(0.655824,0.084579,
zOff+0.468911
), new Point3D(0.553873,0.122766,
zOff+0.538819
));
object[22] = new Triangle(new Point3D(-0.645634,0.016372,
zOff+0.436656
), new Point3D(-0.559667,0.066884,
zOff+0.535215
), new Point3D(-0.553873,0.122766,
zOff+0.538818
));
object[23] = new Triangle(new Point3D(-0.553873,0.122766,
zOff+0.538818
), new Point3D(-0.655824,0.084579,
zOff+0.468910
), new Point3D(-0.645634,0.016372,
zOff+0.436656
));
object[24] = new Triangle(new Point3D(0.559667,0.066884,
zOff+0.535216
), new Point3D(0.532274,0.034446,
zOff+0.506714
), new Point3D(0.600061,0.004501,
zOff+0.376837
));
object[25] = new Triangle(new Point3D(0.600061,0.004501,
zOff+0.376837
), new Point3D(0.645634,0.016372,
zOff+0.436656
), new Point3D(0.559667,0.066884,
zOff+0.535216
));
object[26] = new Triangle(new Point3D(-0.600061,0.004501,
zOff+0.376836
), new Point3D(-0.532274,0.034446,
zOff+0.506714
), new Point3D(-0.559667,0.066884,
zOff+0.535215
));
object[27] = new Triangle(new Point3D(-0.559667,0.066884,
zOff+0.535215
), new Point3D(-0.645634,0.016372,
zOff+0.436656
), new Point3D(-0.600061,0.004501,
zOff+0.376836
));
object[28] = new Triangle(new Point3D(0.474763,0.153635,
zOff+0.460228
), new Point3D(0.509059,0.182912,
zOff+0.473414
), new Point3D(0.576704,0.185186,
zOff+0.393133
));
object[29] = new Triangle(new Point3D(0.576704,0.185186,
zOff+0.393133
), new Point3D(0.527865,0.155713,
zOff+0.359143
), new Point3D(0.474763,0.153635,
zOff+0.460228
));
object[30] = new Triangle(new Point3D(-0.576704,0.185186,
zOff+0.393132
), new Point3D(-0.509059,0.182912,
zOff+0.473414
), new Point3D(-0.474763,0.153635,
zOff+0.460227
));
object[31] = new Triangle(new Point3D(-0.474763,0.153635,
zOff+0.460227
), new Point3D(-0.527865,0.155713,
zOff+0.359142
), new Point3D(-0.576704,0.185186,
zOff+0.393132
));
object[32] = new Triangle(new Point3D(0.498346,0.035065,
zOff+0.481999
), new Point3D(0.471098,0.074085,
zOff+0.468421
), new Point3D(0.531700,0.099899,
zOff+0.335270
));
object[33] = new Triangle(new Point3D(0.531700,0.099899,
zOff+0.335270
), new Point3D(0.555445,0.033435,
zOff+0.338206
), new Point3D(0.498346,0.035065,
zOff+0.481999
));
object[34] = new Triangle(new Point3D(-0.531700,0.099899,
zOff+0.335269
), new Point3D(-0.471098,0.074085,
zOff+0.468420
), new Point3D(-0.498346,0.035065,
zOff+0.481999
));
object[35] = new Triangle(new Point3D(-0.498346,0.035065,
zOff+0.481999
), new Point3D(-0.555445,0.033435,
zOff+0.338205
), new Point3D(-0.531700,0.099899,
zOff+0.335269
));
object[36] = new Triangle(new Point3D(0.532274,0.034446,
zOff+0.506714
), new Point3D(0.498346,0.035065,
zOff+0.481999
), new Point3D(0.555445,0.033435,
zOff+0.338206
));
object[37] = new Triangle(new Point3D(0.555445,0.033435,
zOff+0.338206
), new Point3D(0.600061,0.004501,
zOff+0.376837
), new Point3D(0.532274,0.034446,
zOff+0.506714
));
object[38] = new Triangle(new Point3D(-0.555445,0.033435,
zOff+0.338205
), new Point3D(-0.498346,0.035065,
zOff+0.481999
), new Point3D(-0.532274,0.034446,
zOff+0.506714
));
object[39] = new Triangle(new Point3D(-0.532274,0.034446,
zOff+0.506714
), new Point3D(-0.600061,0.004501,
zOff+0.376836
), new Point3D(-0.555445,0.033435,
zOff+0.338205
));
object[40] = new Triangle(new Point3D(0.471098,0.074085,
zOff+0.468421
), new Point3D(0.474763,0.153635,
zOff+0.460228
), new Point3D(0.527865,0.155713,
zOff+0.359143
));
object[41] = new Triangle(new Point3D(0.527865,0.155713,
zOff+0.359143
), new Point3D(0.531700,0.099899,
zOff+0.335270
), new Point3D(0.471098,0.074085,
zOff+0.468421
));
object[42] = new Triangle(new Point3D(-0.527865,0.155713,
zOff+0.359142
), new Point3D(-0.474763,0.153635,
zOff+0.460227
), new Point3D(-0.471098,0.074085,
zOff+0.468420
));
object[43] = new Triangle(new Point3D(-0.471098,0.074085,
zOff+0.468420
), new Point3D(-0.531700,0.099899,
zOff+0.335269
), new Point3D(-0.527865,0.155713,
zOff+0.359142
));
object[44] = new Triangle(new Point3D(0.393520,0.113739,
zOff+0.531108
), new Point3D(0.449303,0.143151,
zOff+0.486067
), new Point3D(0.471098,0.074085,
zOff+0.468421
));
object[45] = new Triangle(new Point3D(0.471098,0.074085,
zOff+0.468421
), new Point3D(0.404221,0.031526,
zOff+0.530328
), new Point3D(0.393520,0.113739,
zOff+0.531108
));
object[46] = new Triangle(new Point3D(-0.471098,0.074085,
zOff+0.468420
), new Point3D(-0.449303,0.143151,
zOff+0.486066
), new Point3D(-0.393520,0.113739,
zOff+0.531108
));
object[47] = new Triangle(new Point3D(-0.393520,0.113739,
zOff+0.531108
), new Point3D(-0.404221,0.031526,
zOff+0.530327
), new Point3D(-0.471098,0.074085,
zOff+0.468420
));
object[48] = new Triangle(new Point3D(0.439654,-0.014020,
zOff+0.552722
), new Point3D(0.498346,0.035065,
zOff+0.481999
), new Point3D(0.532274,0.034446,
zOff+0.506714
));
object[49] = new Triangle(new Point3D(0.532274,0.034446,
zOff+0.506714
), new Point3D(0.492976,0.003544,
zOff+0.590183
), new Point3D(0.439654,-0.014020,
zOff+0.552722
));
object[50] = new Triangle(new Point3D(-0.532274,0.034446,
zOff+0.506714
), new Point3D(-0.498346,0.035065,
zOff+0.481999
), new Point3D(-0.439654,-0.014020,
zOff+0.552721
));
object[51] = new Triangle(new Point3D(-0.439654,-0.014020,
zOff+0.552721
), new Point3D(-0.492976,0.003544,
zOff+0.590183
), new Point3D(-0.532274,0.034446,
zOff+0.506714
));
object[52] = new Triangle(new Point3D(0.404221,0.031526,
zOff+0.530328
), new Point3D(0.471098,0.074085,
zOff+0.468421
), new Point3D(0.498346,0.035065,
zOff+0.481999
));
object[53] = new Triangle(new Point3D(0.498346,0.035065,
zOff+0.481999
), new Point3D(0.439654,-0.014020,
zOff+0.552722
), new Point3D(0.404221,0.031526,
zOff+0.530328
));
object[54] = new Triangle(new Point3D(-0.498346,0.035065,
zOff+0.481999
), new Point3D(-0.471098,0.074085,
zOff+0.468420
), new Point3D(-0.404221,0.031526,
zOff+0.530327
));
object[55] = new Triangle(new Point3D(-0.404221,0.031526,
zOff+0.530327
), new Point3D(-0.439654,-0.014020,
zOff+0.552721
), new Point3D(-0.498346,0.035065,
zOff+0.481999
));
object[56] = new Triangle(new Point3D(0.449303,0.143151,
zOff+0.486067
), new Point3D(0.393520,0.113739,
zOff+0.531108
), new Point3D(0.421928,0.179342,
zOff+0.565824
));
object[57] = new Triangle(new Point3D(0.421928,0.179342,
zOff+0.565824
), new Point3D(0.470429,0.177282,
zOff+0.519909
), new Point3D(0.449303,0.143151,
zOff+0.486067
));
object[58] = new Triangle(new Point3D(-0.449303,0.143151,
zOff+0.486066
), new Point3D(-0.470429,0.177282,
zOff+0.519909
), new Point3D(-0.421928,0.179342,
zOff+0.565823
));
object[59] = new Triangle(new Point3D(-0.421928,0.179342,
zOff+0.565823
), new Point3D(-0.393520,0.113739,
zOff+0.531108
), new Point3D(-0.449303,0.143151,
zOff+0.486066
));
object[60] = new Triangle(new Point3D(0.492976,0.003544,
zOff+0.590183
), new Point3D(0.532274,0.034446,
zOff+0.506714
), new Point3D(0.559667,0.066884,
zOff+0.535216
));
object[61] = new Triangle(new Point3D(0.559667,0.066884,
zOff+0.535216
), new Point3D(0.509757,0.067456,
zOff+0.618649
), new Point3D(0.492976,0.003544,
zOff+0.590183
));
object[62] = new Triangle(new Point3D(-0.559667,0.066884,
zOff+0.535215
), new Point3D(-0.532274,0.034446,
zOff+0.506714
), new Point3D(-0.492976,0.003544,
zOff+0.590183
));
object[63] = new Triangle(new Point3D(-0.492976,0.003544,
zOff+0.590183
), new Point3D(-0.509757,0.067456,
zOff+0.618649
), new Point3D(-0.559667,0.066884,
zOff+0.535215
));
object[64] = new Triangle(new Point3D(0.509757,0.067456,
zOff+0.618649
), new Point3D(0.559667,0.066884,
zOff+0.535216
), new Point3D(0.553873,0.122766,
zOff+0.538819
));
object[65] = new Triangle(new Point3D(0.553873,0.122766,
zOff+0.538819
), new Point3D(0.498835,0.148736,
zOff+0.621847
), new Point3D(0.509757,0.067456,
zOff+0.618649
));
object[66] = new Triangle(new Point3D(-0.553873,0.122766,
zOff+0.538818
), new Point3D(-0.559667,0.066884,
zOff+0.535215
), new Point3D(-0.509757,0.067456,
zOff+0.618649
));
object[67] = new Triangle(new Point3D(-0.509757,0.067456,
zOff+0.618649
), new Point3D(-0.498835,0.148736,
zOff+0.621847
), new Point3D(-0.553873,0.122766,
zOff+0.538818
));
object[68] = new Triangle(new Point3D(0.464960,0.194208,
zOff+0.602734
), new Point3D(0.518241,0.173021,
zOff+0.544459
), new Point3D(0.470429,0.177282,
zOff+0.519909
));
object[69] = new Triangle(new Point3D(0.470429,0.177282,
zOff+0.519909
), new Point3D(0.421928,0.179342,
zOff+0.565824
), new Point3D(0.464960,0.194208,
zOff+0.602734
));
object[70] = new Triangle(new Point3D(-0.470429,0.177282,
zOff+0.519909
), new Point3D(-0.518241,0.173021,
zOff+0.544459
), new Point3D(-0.464960,0.194208,
zOff+0.602734
));
object[71] = new Triangle(new Point3D(-0.464960,0.194208,
zOff+0.602734
), new Point3D(-0.421928,0.179342,
zOff+0.565823
), new Point3D(-0.470429,0.177282,
zOff+0.519909
));
object[72] = new Triangle(new Point3D(0.498835,0.148736,
zOff+0.621847
), new Point3D(0.553873,0.122766,
zOff+0.538819
), new Point3D(0.518241,0.173021,
zOff+0.544459
));
object[73] = new Triangle(new Point3D(0.518241,0.173021,
zOff+0.544459
), new Point3D(0.464960,0.194208,
zOff+0.602734
), new Point3D(0.498835,0.148736,
zOff+0.621847
));
object[74] = new Triangle(new Point3D(-0.518241,0.173021,
zOff+0.544459
), new Point3D(-0.553873,0.122766,
zOff+0.538818
), new Point3D(-0.498835,0.148736,
zOff+0.621847
));
object[75] = new Triangle(new Point3D(-0.498835,0.148736,
zOff+0.621847
), new Point3D(-0.464960,0.194208,
zOff+0.602734
), new Point3D(-0.518241,0.173021,
zOff+0.544459
));
object[76] = new Triangle(new Point3D(0.289437,0.175479,
zOff+0.742733
), new Point3D(0.320036,0.142219,
zOff+0.849765
), new Point3D(0.373728,0.136713,
zOff+0.790792
));
object[77] = new Triangle(new Point3D(0.373728,0.136713,
zOff+0.790792
), new Point3D(0.345062,0.174179,
zOff+0.719608
), new Point3D(0.289437,0.175479,
zOff+0.742733
));
object[78] = new Triangle(new Point3D(-0.373728,0.136713,
zOff+0.790792
), new Point3D(-0.320036,0.142219,
zOff+0.849765
), new Point3D(-0.289437,0.175479,
zOff+0.742733
));
object[79] = new Triangle(new Point3D(-0.289437,0.175479,
zOff+0.742733
), new Point3D(-0.345062,0.174179,
zOff+0.719608
), new Point3D(-0.373728,0.136713,
zOff+0.790792
));
object[80] = new Triangle(new Point3D(0.295935,0.142219,
zOff+0.665340
), new Point3D(0.289437,0.175479,
zOff+0.742733
), new Point3D(0.345062,0.174179,
zOff+0.719608
));
object[81] = new Triangle(new Point3D(0.345062,0.174179,
zOff+0.719608
), new Point3D(0.321812,0.144385,
zOff+0.648789
), new Point3D(0.295935,0.142219,
zOff+0.665340
));
object[82] = new Triangle(new Point3D(-0.345062,0.174179,
zOff+0.719608
), new Point3D(-0.289437,0.175479,
zOff+0.742733
), new Point3D(-0.295935,0.142219,
zOff+0.665340
));
object[83] = new Triangle(new Point3D(-0.295935,0.142219,
zOff+0.665340
), new Point3D(-0.321812,0.144385,
zOff+0.648789
), new Point3D(-0.345062,0.174179,
zOff+0.719608
));
object[84] = new Triangle(new Point3D(0.320036,0.142219,
zOff+0.849765
), new Point3D(0.349057,0.061923,
zOff+0.880117
), new Point3D(0.394331,0.053440,
zOff+0.791861
));
object[85] = new Triangle(new Point3D(0.394331,0.053440,
zOff+0.791861
), new Point3D(0.373728,0.136713,
zOff+0.790792
), new Point3D(0.320036,0.142219,
zOff+0.849765
));
object[86] = new Triangle(new Point3D(-0.394331,0.053440,
zOff+0.791861
), new Point3D(-0.349057,0.061923,
zOff+0.880117
), new Point3D(-0.320036,0.142219,
zOff+0.849765
));
object[87] = new Triangle(new Point3D(-0.320036,0.142219,
zOff+0.849765
), new Point3D(-0.373728,0.136713,
zOff+0.790792
), new Point3D(-0.394331,0.053440,
zOff+0.791861
));
object[88] = new Triangle(new Point3D(0.349057,0.061923,
zOff+0.880117
), new Point3D(0.320036,-0.018373,
zOff+0.849765
), new Point3D(0.367449,-0.018489,
zOff+0.797669
));
object[89] = new Triangle(new Point3D(0.367449,-0.018489,
zOff+0.797669
), new Point3D(0.394331,0.053440,
zOff+0.791861
), new Point3D(0.349057,0.061923,
zOff+0.880117
));
object[90] = new Triangle(new Point3D(-0.367449,-0.018489,
zOff+0.797669
), new Point3D(-0.320036,-0.018373,
zOff+0.849765
), new Point3D(-0.349057,0.061923,
zOff+0.880117
));
object[91] = new Triangle(new Point3D(-0.349057,0.061923,
zOff+0.880117
), new Point3D(-0.394331,0.053440,
zOff+0.791861
), new Point3D(-0.367449,-0.018489,
zOff+0.797669
));
object[92] = new Triangle(new Point3D(0.297269,0.061923,
zOff+0.623191
), new Point3D(0.295935,0.142219,
zOff+0.665340
), new Point3D(0.321812,0.144385,
zOff+0.648789
));
object[93] = new Triangle(new Point3D(0.321812,0.144385,
zOff+0.648789
), new Point3D(0.312324,0.053440,
zOff+0.620866
), new Point3D(0.297269,0.061923,
zOff+0.623191
));
object[94] = new Triangle(new Point3D(-0.321812,0.144385,
zOff+0.648789
), new Point3D(-0.295935,0.142219,
zOff+0.665340
), new Point3D(-0.297269,0.061923,
zOff+0.623191
));
object[95] = new Triangle(new Point3D(-0.297269,0.061923,
zOff+0.623191
), new Point3D(-0.312324,0.053440,
zOff+0.620865
), new Point3D(-0.321812,0.144385,
zOff+0.648789
));
object[96] = new Triangle(new Point3D(0.289437,-0.051633,
zOff+0.742733
), new Point3D(0.295935,-0.018373,
zOff+0.665340
), new Point3D(0.315312,-0.018489,
zOff+0.648782
));
object[97] = new Triangle(new Point3D(0.315312,-0.018489,
zOff+0.648782
), new Point3D(0.331472,-0.048284,
zOff+0.703058
), new Point3D(0.289437,-0.051633,
zOff+0.742733
));
object[98] = new Triangle(new Point3D(-0.315312,-0.018489,
zOff+0.648782
), new Point3D(-0.295935,-0.018373,
zOff+0.665340
), new Point3D(-0.289437,-0.051633,
zOff+0.742733
));
object[99] = new Triangle(new Point3D(-0.289437,-0.051633,
zOff+0.742733
), new Point3D(-0.331472,-0.048284,
zOff+0.703058
), new Point3D(-0.315312,-0.018489,
zOff+0.648782
));
object[100] = new Triangle(new Point3D(0.320036,-0.018373,
zOff+0.849765
), new Point3D(0.289437,-0.051633,
zOff+0.742733
), new Point3D(0.331472,-0.048284,
zOff+0.703058
));
object[101] = new Triangle(new Point3D(0.331472,-0.048284,
zOff+0.703058
), new Point3D(0.367449,-0.018489,
zOff+0.797669
), new Point3D(0.320036,-0.018373,
zOff+0.849765
));
object[102] = new Triangle(new Point3D(-0.331472,-0.048284,
zOff+0.703058
), new Point3D(-0.289437,-0.051633,
zOff+0.742733
), new Point3D(-0.320036,-0.018373,
zOff+0.849765
));
object[103] = new Triangle(new Point3D(-0.320036,-0.018373,
zOff+0.849765
), new Point3D(-0.367449,-0.018489,
zOff+0.797669
), new Point3D(-0.331472,-0.048284,
zOff+0.703058
));
object[104] = new Triangle(new Point3D(0.295935,-0.018373,
zOff+0.665340
), new Point3D(0.297269,0.061923,
zOff+0.623191
), new Point3D(0.312324,0.053440,
zOff+0.620866
));
object[105] = new Triangle(new Point3D(0.312324,0.053440,
zOff+0.620866
), new Point3D(0.315312,-0.018489,
zOff+0.648782
), new Point3D(0.295935,-0.018373,
zOff+0.665340
));
object[106] = new Triangle(new Point3D(-0.312324,0.053440,
zOff+0.620865
), new Point3D(-0.297269,0.061923,
zOff+0.623191
), new Point3D(-0.295935,-0.018373,
zOff+0.665340
));
object[107] = new Triangle(new Point3D(-0.295935,-0.018373,
zOff+0.665340
), new Point3D(-0.315312,-0.018489,
zOff+0.648782
), new Point3D(-0.312324,0.053440,
zOff+0.620865
));
object[108] = new Triangle(new Point3D(0.295935,-0.018373,
zOff+0.665340
), new Point3D(0.289437,-0.051633,
zOff+0.742733
), new Point3D(0.260063,-0.073612,
zOff+0.744193
));
object[109] = new Triangle(new Point3D(0.260063,-0.073612,
zOff+0.744193
), new Point3D(0.272339,-0.069004,
zOff+0.650844
), new Point3D(0.295935,-0.018373,
zOff+0.665340
));
object[110] = new Triangle(new Point3D(-0.260063,-0.073612,
zOff+0.744193
), new Point3D(-0.289437,-0.051633,
zOff+0.742733
), new Point3D(-0.295935,-0.018373,
zOff+0.665340
));
object[111] = new Triangle(new Point3D(-0.295935,-0.018373,
zOff+0.665340
), new Point3D(-0.272339,-0.069004,
zOff+0.650844
), new Point3D(-0.260063,-0.073612,
zOff+0.744193
));
object[112] = new Triangle(new Point3D(0.297269,0.061923,
zOff+0.623191
), new Point3D(0.295935,-0.018373,
zOff+0.665340
), new Point3D(0.272339,-0.069004,
zOff+0.650844
));
object[113] = new Triangle(new Point3D(0.272339,-0.069004,
zOff+0.650844
), new Point3D(0.286787,0.056451,
zOff+0.606789
), new Point3D(0.297269,0.061923,
zOff+0.623191
));
object[114] = new Triangle(new Point3D(-0.272339,-0.069004,
zOff+0.650844
), new Point3D(-0.295935,-0.018373,
zOff+0.665340
), new Point3D(-0.297269,0.061923,
zOff+0.623191
));
object[115] = new Triangle(new Point3D(-0.297269,0.061923,
zOff+0.623191
), new Point3D(-0.286787,0.056451,
zOff+0.606789
), new Point3D(-0.272339,-0.069004,
zOff+0.650844
));
object[116] = new Triangle(new Point3D(0.295935,0.142219,
zOff+0.665340
), new Point3D(0.297269,0.061923,
zOff+0.623191
), new Point3D(0.286787,0.056451,
zOff+0.606789
));
object[117] = new Triangle(new Point3D(0.286787,0.056451,
zOff+0.606789
), new Point3D(0.265454,0.172892,
zOff+0.653461
), new Point3D(0.295935,0.142219,
zOff+0.665340
));
object[118] = new Triangle(new Point3D(-0.286787,0.056451,
zOff+0.606789
), new Point3D(-0.297269,0.061923,
zOff+0.623191
), new Point3D(-0.295935,0.142219,
zOff+0.665340
));
object[119] = new Triangle(new Point3D(-0.295935,0.142219,
zOff+0.665340
), new Point3D(-0.265454,0.172892,
zOff+0.653460
), new Point3D(-0.286787,0.056451,
zOff+0.606789
));
object[120] = new Triangle(new Point3D(0.289437,0.175479,
zOff+0.742733
), new Point3D(0.295935,0.142219,
zOff+0.665340
), new Point3D(0.265454,0.172892,
zOff+0.653461
));
object[121] = new Triangle(new Point3D(0.265454,0.172892,
zOff+0.653461
), new Point3D(0.247319,0.192851,
zOff+0.747069
), new Point3D(0.289437,0.175479,
zOff+0.742733
));
object[122] = new Triangle(new Point3D(-0.265454,0.172892,
zOff+0.653460
), new Point3D(-0.295935,0.142219,
zOff+0.665340
), new Point3D(-0.289437,0.175479,
zOff+0.742733
));
object[123] = new Triangle(new Point3D(-0.289437,0.175479,
zOff+0.742733
), new Point3D(-0.247319,0.192851,
zOff+0.747069
), new Point3D(-0.265454,0.172892,
zOff+0.653460
));
object[124] = new Triangle(new Point3D(0.320036,0.142219,
zOff+0.849765
), new Point3D(0.289437,0.175479,
zOff+0.742733
), new Point3D(0.247319,0.192851,
zOff+0.747069
));
object[125] = new Triangle(new Point3D(0.247319,0.192851,
zOff+0.747069
), new Point3D(0.220894,0.166538,
zOff+0.866179
), new Point3D(0.320036,0.142219,
zOff+0.849765
));
object[126] = new Triangle(new Point3D(-0.247319,0.192851,
zOff+0.747069
), new Point3D(-0.289437,0.175479,
zOff+0.742733
), new Point3D(-0.320036,0.142219,
zOff+0.849765
));
object[127] = new Triangle(new Point3D(-0.320036,0.142219,
zOff+0.849765
), new Point3D(-0.220894,0.166538,
zOff+0.866180
), new Point3D(-0.247319,0.192851,
zOff+0.747069
));
object[128] = new Triangle(new Point3D(0.349057,0.061923,
zOff+0.880117
), new Point3D(0.320036,0.142219,
zOff+0.849765
), new Point3D(0.220894,0.166538,
zOff+0.866179
));
object[129] = new Triangle(new Point3D(0.220894,0.166538,
zOff+0.866179
), new Point3D(0.237259,0.066005,
zOff+0.895581
), new Point3D(0.349057,0.061923,
zOff+0.880117
));
object[130] = new Triangle(new Point3D(-0.220894,0.166538,
zOff+0.866180
), new Point3D(-0.320036,0.142219,
zOff+0.849765
), new Point3D(-0.349057,0.061923,
zOff+0.880117
));
object[131] = new Triangle(new Point3D(-0.349057,0.061923,
zOff+0.880117
), new Point3D(-0.237259,0.066005,
zOff+0.895581
), new Point3D(-0.220894,0.166538,
zOff+0.866180
));
object[132] = new Triangle(new Point3D(0.320036,-0.018373,
zOff+0.849765
), new Point3D(0.349057,0.061923,
zOff+0.880117
), new Point3D(0.237259,0.066005,
zOff+0.895581
));
object[133] = new Triangle(new Point3D(0.237259,0.066005,
zOff+0.895581
), new Point3D(0.222199,-0.028984,
zOff+0.867799
), new Point3D(0.320036,-0.018373,
zOff+0.849765
));
object[134] = new Triangle(new Point3D(-0.237259,0.066005,
zOff+0.895581
), new Point3D(-0.349057,0.061923,
zOff+0.880117
), new Point3D(-0.320036,-0.018373,
zOff+0.849765
));
object[135] = new Triangle(new Point3D(-0.320036,-0.018373,
zOff+0.849765
), new Point3D(-0.222199,-0.028984,
zOff+0.867800
), new Point3D(-0.237259,0.066005,
zOff+0.895581
));
object[136] = new Triangle(new Point3D(0.289437,-0.051633,
zOff+0.742733
), new Point3D(0.320036,-0.018373,
zOff+0.849765
), new Point3D(0.222199,-0.028984,
zOff+0.867799
));
object[137] = new Triangle(new Point3D(0.222199,-0.028984,
zOff+0.867799
), new Point3D(0.260063,-0.073612,
zOff+0.744193
), new Point3D(0.289437,-0.051633,
zOff+0.742733
));
object[138] = new Triangle(new Point3D(-0.222199,-0.028984,
zOff+0.867800
), new Point3D(-0.320036,-0.018373,
zOff+0.849765
), new Point3D(-0.289437,-0.051633,
zOff+0.742733
));
object[139] = new Triangle(new Point3D(-0.289437,-0.051633,
zOff+0.742733
), new Point3D(-0.260063,-0.073612,
zOff+0.744193
), new Point3D(-0.222199,-0.028984,
zOff+0.867800
));
object[140] = new Triangle(new Point3D(0.231922,-0.059043,
zOff+0.347373
), new Point3D(0.259219,-0.001773,
zOff+0.485072
), new Point3D(0.221305,-0.118673,
zOff+0.512953
));
object[141] = new Triangle(new Point3D(0.221305,-0.118673,
zOff+0.512953
), new Point3D(0.205417,-0.149343,
zOff+0.370571
), new Point3D(0.231922,-0.059043,
zOff+0.347373
));
object[142] = new Triangle(new Point3D(-0.221305,-0.118673,
zOff+0.512953
), new Point3D(-0.259219,-0.001773,
zOff+0.485072
), new Point3D(-0.231922,-0.059043,
zOff+0.347373
));
object[143] = new Triangle(new Point3D(-0.231922,-0.059043,
zOff+0.347373
), new Point3D(-0.205417,-0.149343,
zOff+0.370571
), new Point3D(-0.221305,-0.118673,
zOff+0.512953
));
object[144] = new Triangle(new Point3D(0.259219,-0.001773,
zOff+0.485072
), new Point3D(0.279514,0.028385,
zOff+0.553474
), new Point3D(0.238867,-0.075745,
zOff+0.602589
));
object[145] = new Triangle(new Point3D(0.238867,-0.075745,
zOff+0.602589
), new Point3D(0.221305,-0.118673,
zOff+0.512953
), new Point3D(0.259219,-0.001773,
zOff+0.485072
));
object[146] = new Triangle(new Point3D(-0.238867,-0.075745,
zOff+0.602589
), new Point3D(-0.279514,0.028385,
zOff+0.553474
), new Point3D(-0.259219,-0.001773,
zOff+0.485072
));
object[147] = new Triangle(new Point3D(-0.259219,-0.001773,
zOff+0.485072
), new Point3D(-0.221305,-0.118673,
zOff+0.512953
), new Point3D(-0.238867,-0.075745,
zOff+0.602589
));
object[148] = new Triangle(new Point3D(0.205417,0.042101,
zOff+0.341741
), new Point3D(0.213725,0.092629,
zOff+0.459198
), new Point3D(0.259219,-0.001773,
zOff+0.485072
));
object[149] = new Triangle(new Point3D(0.259219,-0.001773,
zOff+0.485072
), new Point3D(0.231922,-0.059043,
zOff+0.347373
), new Point3D(0.205417,0.042101,
zOff+0.341741
));
object[150] = new Triangle(new Point3D(-0.259219,-0.001773,
zOff+0.485072
), new Point3D(-0.213725,0.092629,
zOff+0.459198
), new Point3D(-0.205417,0.042101,
zOff+0.341741
));
object[151] = new Triangle(new Point3D(-0.205417,0.042101,
zOff+0.341741
), new Point3D(-0.231922,-0.059043,
zOff+0.347373
), new Point3D(-0.259219,-0.001773,
zOff+0.485072
));
object[152] = new Triangle(new Point3D(0.213725,0.092629,
zOff+0.459198
), new Point3D(0.224457,0.145006,
zOff+0.539115
), new Point3D(0.279514,0.028385,
zOff+0.553474
));
object[153] = new Triangle(new Point3D(0.279514,0.028385,
zOff+0.553474
), new Point3D(0.259219,-0.001773,
zOff+0.485072
), new Point3D(0.213725,0.092629,
zOff+0.459198
));
object[154] = new Triangle(new Point3D(-0.279514,0.028385,
zOff+0.553474
), new Point3D(-0.224457,0.145006,
zOff+0.539115
), new Point3D(-0.213725,0.092629,
zOff+0.459198
));
object[155] = new Triangle(new Point3D(-0.213725,0.092629,
zOff+0.459198
), new Point3D(-0.259219,-0.001773,
zOff+0.485072
), new Point3D(-0.279514,0.028385,
zOff+0.553474
));
object[156] = new Triangle(new Point3D(0.124466,-0.202590,
zOff+0.418053
), new Point3D(0.136510,-0.200787,
zOff+0.546834
), new Point3D(0.000000,-0.227155,
zOff+0.567245
));
object[157] = new Triangle(new Point3D(0.000000,-0.227155,
zOff+0.567245
), new Point3D(0.000000,-0.217341,
zOff+0.434806
), new Point3D(0.124466,-0.202590,
zOff+0.418053
));
object[158] = new Triangle(new Point3D(0.000000,-0.227155,
zOff+0.567245
), new Point3D(-0.136510,-0.200787,
zOff+0.546834
), new Point3D(-0.124466,-0.202590,
zOff+0.418053
));
object[159] = new Triangle(new Point3D(-0.124466,-0.202590,
zOff+0.418053
), new Point3D(0.000000,-0.217341,
zOff+0.434806
), new Point3D(0.000000,-0.227155,
zOff+0.567245
));
object[160] = new Triangle(new Point3D(0.136510,-0.200787,
zOff+0.546834
), new Point3D(0.144425,-0.170178,
zOff+0.593284
), new Point3D(0.000000,-0.221539,
zOff+0.620726
));
object[161] = new Triangle(new Point3D(0.000000,-0.221539,
zOff+0.620726
), new Point3D(0.000000,-0.227155,
zOff+0.567245
), new Point3D(0.136510,-0.200787,
zOff+0.546834
));
object[162] = new Triangle(new Point3D(0.000000,-0.221539,
zOff+0.620726
), new Point3D(-0.144425,-0.170178,
zOff+0.593284
), new Point3D(-0.136510,-0.200787,
zOff+0.546834
));
object[163] = new Triangle(new Point3D(-0.136510,-0.200787,
zOff+0.546834
), new Point3D(0.000000,-0.227155,
zOff+0.567245
), new Point3D(0.000000,-0.221539,
zOff+0.620726
));
object[164] = new Triangle(new Point3D(0.205417,-0.149343,
zOff+0.370571
), new Point3D(0.221305,-0.118673,
zOff+0.512953
), new Point3D(0.136510,-0.200787,
zOff+0.546834
));
object[165] = new Triangle(new Point3D(0.136510,-0.200787,
zOff+0.546834
), new Point3D(0.124466,-0.202590,
zOff+0.418053
), new Point3D(0.205417,-0.149343,
zOff+0.370571
));
object[166] = new Triangle(new Point3D(-0.136510,-0.200787,
zOff+0.546834
), new Point3D(-0.221305,-0.118673,
zOff+0.512953
), new Point3D(-0.205417,-0.149343,
zOff+0.370571
));
object[167] = new Triangle(new Point3D(-0.205417,-0.149343,
zOff+0.370571
), new Point3D(-0.124466,-0.202590,
zOff+0.418053
), new Point3D(-0.136510,-0.200787,
zOff+0.546834
));
object[168] = new Triangle(new Point3D(0.221305,-0.118673,
zOff+0.512953
), new Point3D(0.238867,-0.075745,
zOff+0.602589
), new Point3D(0.144425,-0.170178,
zOff+0.593284
));
object[169] = new Triangle(new Point3D(0.144425,-0.170178,
zOff+0.593284
), new Point3D(0.136510,-0.200787,
zOff+0.546834
), new Point3D(0.221305,-0.118673,
zOff+0.512953
));
object[170] = new Triangle(new Point3D(-0.144425,-0.170178,
zOff+0.593284
), new Point3D(-0.238867,-0.075745,
zOff+0.602589
), new Point3D(-0.221305,-0.118673,
zOff+0.512953
));
object[171] = new Triangle(new Point3D(-0.221305,-0.118673,
zOff+0.512953
), new Point3D(-0.136510,-0.200787,
zOff+0.546834
), new Point3D(-0.144425,-0.170178,
zOff+0.593284
));
object[172] = new Triangle(new Point3D(0.106145,0.113527,
zOff+0.351936
), new Point3D(0.118857,0.169990,
zOff+0.443376
), new Point3D(0.213725,0.092629,
zOff+0.459198
));
object[173] = new Triangle(new Point3D(0.213725,0.092629,
zOff+0.459198
), new Point3D(0.205417,0.042101,
zOff+0.341741
), new Point3D(0.106145,0.113527,
zOff+0.351936
));
object[174] = new Triangle(new Point3D(-0.213725,0.092629,
zOff+0.459198
), new Point3D(-0.118857,0.169990,
zOff+0.443376
), new Point3D(-0.106145,0.113527,
zOff+0.351936
));
object[175] = new Triangle(new Point3D(-0.106145,0.113527,
zOff+0.351936
), new Point3D(-0.205417,0.042101,
zOff+0.341741
), new Point3D(-0.213725,0.092629,
zOff+0.459198
));
object[176] = new Triangle(new Point3D(0.118857,0.169990,
zOff+0.443376
), new Point3D(0.125453,0.201016,
zOff+0.520909
), new Point3D(0.224457,0.145006,
zOff+0.539115
));
object[177] = new Triangle(new Point3D(0.224457,0.145006,
zOff+0.539115
), new Point3D(0.213725,0.092629,
zOff+0.459198
), new Point3D(0.118857,0.169990,
zOff+0.443376
));
object[178] = new Triangle(new Point3D(-0.224457,0.145006,
zOff+0.539115
), new Point3D(-0.125453,0.201016,
zOff+0.520909
), new Point3D(-0.118857,0.169990,
zOff+0.443376
));
object[179] = new Triangle(new Point3D(-0.118857,0.169990,
zOff+0.443376
), new Point3D(-0.213725,0.092629,
zOff+0.459198
), new Point3D(-0.224457,0.145006,
zOff+0.539115
));
object[180] = new Triangle(new Point3D(0.000000,0.114452,
zOff+0.366447
), new Point3D(0.000000,0.156222,
zOff+0.436902
), new Point3D(0.118857,0.169990,
zOff+0.443376
));
object[181] = new Triangle(new Point3D(0.118857,0.169990,
zOff+0.443376
), new Point3D(0.106145,0.113527,
zOff+0.351936
), new Point3D(0.000000,0.114452,
zOff+0.366447
));
object[182] = new Triangle(new Point3D(-0.118857,0.169990,
zOff+0.443376
), new Point3D(0.000000,0.156222,
zOff+0.436902
), new Point3D(0.000000,0.114452,
zOff+0.366447
));
object[183] = new Triangle(new Point3D(0.000000,0.114452,
zOff+0.366447
), new Point3D(-0.106145,0.113527,
zOff+0.351936
), new Point3D(-0.118857,0.169990,
zOff+0.443376
));
object[184] = new Triangle(new Point3D(0.000000,0.156222,
zOff+0.436902
), new Point3D(-0.000000,0.209151,
zOff+0.519980
), new Point3D(0.125453,0.201016,
zOff+0.520909
));
object[185] = new Triangle(new Point3D(0.125453,0.201016,
zOff+0.520909
), new Point3D(0.118857,0.169990,
zOff+0.443376
), new Point3D(0.000000,0.156222,
zOff+0.436902
));
object[186] = new Triangle(new Point3D(-0.125453,0.201016,
zOff+0.520909
), new Point3D(-0.000000,0.209151,
zOff+0.519980
), new Point3D(0.000000,0.156222,
zOff+0.436902
));
object[187] = new Triangle(new Point3D(0.000000,0.156222,
zOff+0.436902
), new Point3D(-0.118857,0.169990,
zOff+0.443376
), new Point3D(-0.125453,0.201016,
zOff+0.520909
));
object[188] = new Triangle(new Point3D(0.203492,0.053164,
zOff+0.184866
), new Point3D(0.197750,0.037766,
zOff+0.261136
), new Point3D(0.232359,-0.054908,
zOff+0.253671
));
object[189] = new Triangle(new Point3D(0.232359,-0.054908,
zOff+0.253671
), new Point3D(0.241692,-0.052375,
zOff+0.188382
), new Point3D(0.203492,0.053164,
zOff+0.184866
));
object[190] = new Triangle(new Point3D(-0.232359,-0.054908,
zOff+0.253671
), new Point3D(-0.197750,0.037766,
zOff+0.261136
), new Point3D(-0.203492,0.053164,
zOff+0.184866
));
object[191] = new Triangle(new Point3D(-0.203492,0.053164,
zOff+0.184866
), new Point3D(-0.241692,-0.052375,
zOff+0.188382
), new Point3D(-0.232359,-0.054908,
zOff+0.253671
));
object[192] = new Triangle(new Point3D(0.197750,0.037766,
zOff+0.261136
), new Point3D(0.205417,0.042101,
zOff+0.341741
), new Point3D(0.231922,-0.059043,
zOff+0.347373
));
object[193] = new Triangle(new Point3D(0.231922,-0.059043,
zOff+0.347373
), new Point3D(0.232359,-0.054908,
zOff+0.253671
), new Point3D(0.197750,0.037766,
zOff+0.261136
));
object[194] = new Triangle(new Point3D(-0.231922,-0.059043,
zOff+0.347373
), new Point3D(-0.205417,0.042101,
zOff+0.341741
), new Point3D(-0.197750,0.037766,
zOff+0.261136
));
object[195] = new Triangle(new Point3D(-0.197750,0.037766,
zOff+0.261136
), new Point3D(-0.232359,-0.054908,
zOff+0.253671
), new Point3D(-0.231922,-0.059043,
zOff+0.347373
));
object[196] = new Triangle(new Point3D(0.205417,-0.149343,
zOff+0.370571
), new Point3D(0.197750,-0.148776,
zOff+0.254988
), new Point3D(0.232359,-0.054908,
zOff+0.253671
));
object[197] = new Triangle(new Point3D(0.232359,-0.054908,
zOff+0.253671
), new Point3D(0.231922,-0.059043,
zOff+0.347373
), new Point3D(0.205417,-0.149343,
zOff+0.370571
));
object[198] = new Triangle(new Point3D(-0.232359,-0.054908,
zOff+0.253671
), new Point3D(-0.197750,-0.148776,
zOff+0.254988
), new Point3D(-0.205417,-0.149343,
zOff+0.370571
));
object[199] = new Triangle(new Point3D(-0.205417,-0.149343,
zOff+0.370571
), new Point3D(-0.231922,-0.059043,
zOff+0.347373
), new Point3D(-0.232359,-0.054908,
zOff+0.253671
));
object[200] = new Triangle(new Point3D(0.197750,-0.148776,
zOff+0.254988
), new Point3D(0.195054,-0.149905,
zOff+0.158359
), new Point3D(0.241692,-0.052375,
zOff+0.188382
));
object[201] = new Triangle(new Point3D(0.241692,-0.052375,
zOff+0.188382
), new Point3D(0.232359,-0.054908,
zOff+0.253671
), new Point3D(0.197750,-0.148776,
zOff+0.254988
));
object[202] = new Triangle(new Point3D(-0.241692,-0.052375,
zOff+0.188382
), new Point3D(-0.195054,-0.149905,
zOff+0.158359
), new Point3D(-0.197750,-0.148776,
zOff+0.254988
));
object[203] = new Triangle(new Point3D(-0.197750,-0.148776,
zOff+0.254988
), new Point3D(-0.232359,-0.054908,
zOff+0.253671
), new Point3D(-0.241692,-0.052375,
zOff+0.188382
));
object[204] = new Triangle(new Point3D(0.124466,-0.202590,
zOff+0.418053
), new Point3D(0.111331,-0.199993,
zOff+0.262665
), new Point3D(0.197750,-0.148776,
zOff+0.254988
));
object[205] = new Triangle(new Point3D(0.197750,-0.148776,
zOff+0.254988
), new Point3D(0.205417,-0.149343,
zOff+0.370571
), new Point3D(0.124466,-0.202590,
zOff+0.418053
));
object[206] = new Triangle(new Point3D(-0.197750,-0.148776,
zOff+0.254988
), new Point3D(-0.111331,-0.199993,
zOff+0.262665
), new Point3D(-0.124466,-0.202590,
zOff+0.418053
));
object[207] = new Triangle(new Point3D(-0.124466,-0.202590,
zOff+0.418053
), new Point3D(-0.205417,-0.149343,
zOff+0.370571
), new Point3D(-0.197750,-0.148776,
zOff+0.254988
));
object[208] = new Triangle(new Point3D(0.111331,-0.199993,
zOff+0.262665
), new Point3D(0.104881,-0.199859,
zOff+0.131371
), new Point3D(0.195054,-0.149905,
zOff+0.158359
));
object[209] = new Triangle(new Point3D(0.195054,-0.149905,
zOff+0.158359
), new Point3D(0.197750,-0.148776,
zOff+0.254988
), new Point3D(0.111331,-0.199993,
zOff+0.262665
));
object[210] = new Triangle(new Point3D(-0.195054,-0.149905,
zOff+0.158359
), new Point3D(-0.104881,-0.199859,
zOff+0.131371
), new Point3D(-0.111331,-0.199993,
zOff+0.262665
));
object[211] = new Triangle(new Point3D(-0.111331,-0.199993,
zOff+0.262665
), new Point3D(-0.197750,-0.148776,
zOff+0.254988
), new Point3D(-0.195054,-0.149905,
zOff+0.158359
));
object[212] = new Triangle(new Point3D(0.000000,-0.217341,
zOff+0.434806
), new Point3D(0.000000,-0.226703,
zOff+0.263879
), new Point3D(0.111331,-0.199993,
zOff+0.262665
));
object[213] = new Triangle(new Point3D(0.111331,-0.199993,
zOff+0.262665
), new Point3D(0.124466,-0.202590,
zOff+0.418053
), new Point3D(0.000000,-0.217341,
zOff+0.434806
));
object[214] = new Triangle(new Point3D(-0.111331,-0.199993,
zOff+0.262665
), new Point3D(0.000000,-0.226703,
zOff+0.263879
), new Point3D(0.000000,-0.217341,
zOff+0.434806
));
object[215] = new Triangle(new Point3D(0.000000,-0.217341,
zOff+0.434806
), new Point3D(-0.124466,-0.202590,
zOff+0.418053
), new Point3D(-0.111331,-0.199993,
zOff+0.262665
));
object[216] = new Triangle(new Point3D(0.000000,-0.226703,
zOff+0.263879
), new Point3D(-0.000000,-0.218894,
zOff+0.122312
), new Point3D(0.104881,-0.199859,
zOff+0.131371
));
object[217] = new Triangle(new Point3D(0.104881,-0.199859,
zOff+0.131371
), new Point3D(0.111331,-0.199993,
zOff+0.262665
), new Point3D(0.000000,-0.226703,
zOff+0.263879
));
object[218] = new Triangle(new Point3D(-0.104881,-0.199859,
zOff+0.131371
), new Point3D(-0.000000,-0.218894,
zOff+0.122312
), new Point3D(0.000000,-0.226703,
zOff+0.263879
));
object[219] = new Triangle(new Point3D(0.000000,-0.226703,
zOff+0.263879
), new Point3D(-0.111331,-0.199993,
zOff+0.262665
), new Point3D(-0.104881,-0.199859,
zOff+0.131371
));
object[220] = new Triangle(new Point3D(0.197750,0.037766,
zOff+0.261136
), new Point3D(0.203492,0.053164,
zOff+0.184866
), new Point3D(0.087011,0.096453,
zOff+0.209792
));
object[221] = new Triangle(new Point3D(0.087011,0.096453,
zOff+0.209792
), new Point3D(0.094685,0.095673,
zOff+0.273049
), new Point3D(0.197750,0.037766,
zOff+0.261136
));
object[222] = new Triangle(new Point3D(-0.087011,0.096453,
zOff+0.209792
), new Point3D(-0.203492,0.053164,
zOff+0.184866
), new Point3D(-0.197750,0.037766,
zOff+0.261136
));
object[223] = new Triangle(new Point3D(-0.197750,0.037766,
zOff+0.261136
), new Point3D(-0.094685,0.095673,
zOff+0.273049
), new Point3D(-0.087011,0.096453,
zOff+0.209792
));
object[224] = new Triangle(new Point3D(0.094685,0.095673,
zOff+0.273049
), new Point3D(0.106145,0.113527,
zOff+0.351936
), new Point3D(0.205417,0.042101,
zOff+0.341741
));
object[225] = new Triangle(new Point3D(0.205417,0.042101,
zOff+0.341741
), new Point3D(0.197750,0.037766,
zOff+0.261136
), new Point3D(0.094685,0.095673,
zOff+0.273049
));
object[226] = new Triangle(new Point3D(-0.205417,0.042101,
zOff+0.341741
), new Point3D(-0.106145,0.113527,
zOff+0.351936
), new Point3D(-0.094685,0.095673,
zOff+0.273049
));
object[227] = new Triangle(new Point3D(-0.094685,0.095673,
zOff+0.273049
), new Point3D(-0.197750,0.037766,
zOff+0.261136
), new Point3D(-0.205417,0.042101,
zOff+0.341741
));
object[228] = new Triangle(new Point3D(0.000000,0.109094,
zOff+0.215496
), new Point3D(0.000000,0.096188,
zOff+0.283160
), new Point3D(0.094685,0.095673,
zOff+0.273049
));
object[229] = new Triangle(new Point3D(0.094685,0.095673,
zOff+0.273049
), new Point3D(0.087011,0.096453,
zOff+0.209792
), new Point3D(0.000000,0.109094,
zOff+0.215496
));
object[230] = new Triangle(new Point3D(-0.094685,0.095673,
zOff+0.273049
), new Point3D(0.000000,0.096188,
zOff+0.283160
), new Point3D(0.000000,0.109094,
zOff+0.215496
));
object[231] = new Triangle(new Point3D(0.000000,0.109094,
zOff+0.215496
), new Point3D(-0.087011,0.096453,
zOff+0.209792
), new Point3D(-0.094685,0.095673,
zOff+0.273049
));
object[232] = new Triangle(new Point3D(0.000000,0.096188,
zOff+0.283160
), new Point3D(0.000000,0.114452,
zOff+0.366447
), new Point3D(0.106145,0.113527,
zOff+0.351936
));
object[233] = new Triangle(new Point3D(0.106145,0.113527,
zOff+0.351936
), new Point3D(0.094685,0.095673,
zOff+0.273049
), new Point3D(0.000000,0.096188,
zOff+0.283160
));
object[234] = new Triangle(new Point3D(-0.106145,0.113527,
zOff+0.351936
), new Point3D(0.000000,0.114452,
zOff+0.366447
), new Point3D(0.000000,0.096188,
zOff+0.283160
));
object[235] = new Triangle(new Point3D(0.000000,0.096188,
zOff+0.283160
), new Point3D(-0.094685,0.095673,
zOff+0.273049
), new Point3D(-0.106145,0.113527,
zOff+0.351936
));
object[236] = new Triangle(new Point3D(0.000000,-0.221539,
zOff+0.620726
), new Point3D(0.144425,-0.170178,
zOff+0.593284
), new Point3D(0.144425,-0.179639,
zOff+0.657400
));
object[237] = new Triangle(new Point3D(0.144425,-0.179639,
zOff+0.657400
), new Point3D(0.000000,-0.232992,
zOff+0.674480
), new Point3D(0.000000,-0.221539,
zOff+0.620726
));
object[238] = new Triangle(new Point3D(-0.144425,-0.179639,
zOff+0.657400
), new Point3D(-0.144425,-0.170178,
zOff+0.593284
), new Point3D(0.000000,-0.221539,
zOff+0.620726
));
object[239] = new Triangle(new Point3D(0.000000,-0.221539,
zOff+0.620726
), new Point3D(0.000000,-0.232992,
zOff+0.674480
), new Point3D(-0.144425,-0.179639,
zOff+0.657400
));
object[240] = new Triangle(new Point3D(0.144425,-0.170178,
zOff+0.593284
), new Point3D(0.238867,-0.075745,
zOff+0.602589
), new Point3D(0.272339,-0.069004,
zOff+0.650844
));
object[241] = new Triangle(new Point3D(0.272339,-0.069004,
zOff+0.650844
), new Point3D(0.144425,-0.179639,
zOff+0.657400
), new Point3D(0.144425,-0.170178,
zOff+0.593284
));
object[242] = new Triangle(new Point3D(-0.272339,-0.069004,
zOff+0.650844
), new Point3D(-0.238867,-0.075745,
zOff+0.602589
), new Point3D(-0.144425,-0.170178,
zOff+0.593284
));
object[243] = new Triangle(new Point3D(-0.144425,-0.170178,
zOff+0.593284
), new Point3D(-0.144425,-0.179639,
zOff+0.657400
), new Point3D(-0.272339,-0.069004,
zOff+0.650844
));
object[244] = new Triangle(new Point3D(0.125453,0.201016,
zOff+0.520909
), new Point3D(-0.000000,0.209151,
zOff+0.519980
), new Point3D(-0.000000,0.232342,
zOff+0.613242
));
object[245] = new Triangle(new Point3D(-0.000000,0.232342,
zOff+0.613242
), new Point3D(0.132712,0.224161,
zOff+0.612909
), new Point3D(0.125453,0.201016,
zOff+0.520909
));
object[246] = new Triangle(new Point3D(-0.000000,0.232342,
zOff+0.613242
), new Point3D(-0.000000,0.209151,
zOff+0.519980
), new Point3D(-0.125453,0.201016,
zOff+0.520909
));
object[247] = new Triangle(new Point3D(-0.125453,0.201016,
zOff+0.520909
), new Point3D(-0.132712,0.224161,
zOff+0.612909
), new Point3D(-0.000000,0.232342,
zOff+0.613242
));
object[248] = new Triangle(new Point3D(0.224457,0.145006,
zOff+0.539115
), new Point3D(0.125453,0.201016,
zOff+0.520909
), new Point3D(0.132712,0.224161,
zOff+0.612909
));
object[249] = new Triangle(new Point3D(0.132712,0.224161,
zOff+0.612909
), new Point3D(0.265454,0.172892,
zOff+0.653461
), new Point3D(0.224457,0.145006,
zOff+0.539115
));
object[250] = new Triangle(new Point3D(-0.132712,0.224161,
zOff+0.612909
), new Point3D(-0.125453,0.201016,
zOff+0.520909
), new Point3D(-0.224457,0.145006,
zOff+0.539115
));
object[251] = new Triangle(new Point3D(-0.224457,0.145006,
zOff+0.539115
), new Point3D(-0.265454,0.172892,
zOff+0.653460
), new Point3D(-0.132712,0.224161,
zOff+0.612909
));
object[252] = new Triangle(new Point3D(0.279514,0.028385,
zOff+0.553474
), new Point3D(0.224457,0.145006,
zOff+0.539115
), new Point3D(0.265454,0.172892,
zOff+0.653461
));
object[253] = new Triangle(new Point3D(0.265454,0.172892,
zOff+0.653461
), new Point3D(0.286787,0.056451,
zOff+0.606789
), new Point3D(0.279514,0.028385,
zOff+0.553474
));
object[254] = new Triangle(new Point3D(-0.265454,0.172892,
zOff+0.653460
), new Point3D(-0.224457,0.145006,
zOff+0.539115
), new Point3D(-0.279514,0.028385,
zOff+0.553474
));
object[255] = new Triangle(new Point3D(-0.279514,0.028385,
zOff+0.553474
), new Point3D(-0.286787,0.056451,
zOff+0.606789
), new Point3D(-0.265454,0.172892,
zOff+0.653460
));
object[256] = new Triangle(new Point3D(0.238867,-0.075745,
zOff+0.602589
), new Point3D(0.279514,0.028385,
zOff+0.553474
), new Point3D(0.286787,0.056451,
zOff+0.606789
));
object[257] = new Triangle(new Point3D(0.286787,0.056451,
zOff+0.606789
), new Point3D(0.272339,-0.069004,
zOff+0.650844
), new Point3D(0.238867,-0.075745,
zOff+0.602589
));
object[258] = new Triangle(new Point3D(-0.286787,0.056451,
zOff+0.606789
), new Point3D(-0.279514,0.028385,
zOff+0.553474
), new Point3D(-0.238867,-0.075745,
zOff+0.602589
));
object[259] = new Triangle(new Point3D(-0.238867,-0.075745,
zOff+0.602589
), new Point3D(-0.272339,-0.069004,
zOff+0.650844
), new Point3D(-0.286787,0.056451,
zOff+0.606789
));
object[260] = new Triangle(new Point3D(0.222199,-0.028984,
zOff+0.867799
), new Point3D(0.159847,-0.019315,
zOff+0.905665
), new Point3D(0.091337,-0.058446,
zOff+0.878949
));
object[261] = new Triangle(new Point3D(0.091337,-0.058446,
zOff+0.878949
), new Point3D(0.122862,-0.100931,
zOff+0.824217
), new Point3D(0.222199,-0.028984,
zOff+0.867799
));
object[262] = new Triangle(new Point3D(-0.091337,-0.058446,
zOff+0.878950
), new Point3D(-0.159847,-0.019315,
zOff+0.905666
), new Point3D(-0.222199,-0.028984,
zOff+0.867800
));
object[263] = new Triangle(new Point3D(-0.222199,-0.028984,
zOff+0.867800
), new Point3D(-0.122862,-0.100931,
zOff+0.824217
), new Point3D(-0.091337,-0.058446,
zOff+0.878950
));
object[264] = new Triangle(new Point3D(0.122862,-0.100931,
zOff+0.824217
), new Point3D(0.091337,-0.058446,
zOff+0.878949
), new Point3D(0.000000,-0.078675,
zOff+0.868507
));
object[265] = new Triangle(new Point3D(0.000000,-0.078675,
zOff+0.868507
), new Point3D(0.000000,-0.126292,
zOff+0.818248
), new Point3D(0.122862,-0.100931,
zOff+0.824217
));
object[266] = new Triangle(new Point3D(0.000000,-0.078675,
zOff+0.868507
), new Point3D(-0.091337,-0.058446,
zOff+0.878950
), new Point3D(-0.122862,-0.100931,
zOff+0.824217
));
object[267] = new Triangle(new Point3D(-0.122862,-0.100931,
zOff+0.824217
), new Point3D(0.000000,-0.126292,
zOff+0.818248
), new Point3D(0.000000,-0.078675,
zOff+0.868507
));
object[268] = new Triangle(new Point3D(0.159847,-0.019315,
zOff+0.905665
), new Point3D(0.222199,-0.028984,
zOff+0.867799
), new Point3D(0.237259,0.066005,
zOff+0.895581
));
object[269] = new Triangle(new Point3D(0.237259,0.066005,
zOff+0.895581
), new Point3D(0.187253,0.067957,
zOff+0.921408
), new Point3D(0.159847,-0.019315,
zOff+0.905665
));
object[270] = new Triangle(new Point3D(-0.237259,0.066005,
zOff+0.895581
), new Point3D(-0.222199,-0.028984,
zOff+0.867800
), new Point3D(-0.159847,-0.019315,
zOff+0.905666
));
object[271] = new Triangle(new Point3D(-0.159847,-0.019315,
zOff+0.905666
), new Point3D(-0.187253,0.067957,
zOff+0.921408
), new Point3D(-0.237259,0.066005,
zOff+0.895581
));
object[272] = new Triangle(new Point3D(0.272339,-0.069004,
zOff+0.650844
), new Point3D(0.260063,-0.073612,
zOff+0.744193
), new Point3D(0.140877,-0.143847,
zOff+0.745493
));
object[273] = new Triangle(new Point3D(0.140877,-0.143847,
zOff+0.745493
), new Point3D(0.144425,-0.179639,
zOff+0.657400
), new Point3D(0.272339,-0.069004,
zOff+0.650844
));
object[274] = new Triangle(new Point3D(-0.140877,-0.143847,
zOff+0.745493
), new Point3D(-0.260063,-0.073612,
zOff+0.744193
), new Point3D(-0.272339,-0.069004,
zOff+0.650844
));
object[275] = new Triangle(new Point3D(-0.272339,-0.069004,
zOff+0.650844
), new Point3D(-0.144425,-0.179639,
zOff+0.657400
), new Point3D(-0.140877,-0.143847,
zOff+0.745493
));
object[276] = new Triangle(new Point3D(0.260063,-0.073612,
zOff+0.744193
), new Point3D(0.222199,-0.028984,
zOff+0.867799
), new Point3D(0.122862,-0.100931,
zOff+0.824217
));
object[277] = new Triangle(new Point3D(0.122862,-0.100931,
zOff+0.824217
), new Point3D(0.140877,-0.143847,
zOff+0.745493
), new Point3D(0.260063,-0.073612,
zOff+0.744193
));
object[278] = new Triangle(new Point3D(-0.122862,-0.100931,
zOff+0.824217
), new Point3D(-0.222199,-0.028984,
zOff+0.867800
), new Point3D(-0.260063,-0.073612,
zOff+0.744193
));
object[279] = new Triangle(new Point3D(-0.260063,-0.073612,
zOff+0.744193
), new Point3D(-0.140877,-0.143847,
zOff+0.745493
), new Point3D(-0.122862,-0.100931,
zOff+0.824217
));
object[280] = new Triangle(new Point3D(0.144425,-0.179639,
zOff+0.657400
), new Point3D(0.140877,-0.143847,
zOff+0.745493
), new Point3D(0.000000,-0.184504,
zOff+0.750096
));
object[281] = new Triangle(new Point3D(0.000000,-0.184504,
zOff+0.750096
), new Point3D(0.000000,-0.232992,
zOff+0.674480
), new Point3D(0.144425,-0.179639,
zOff+0.657400
));
object[282] = new Triangle(new Point3D(0.000000,-0.184504,
zOff+0.750096
), new Point3D(-0.140877,-0.143847,
zOff+0.745493
), new Point3D(-0.144425,-0.179639,
zOff+0.657400
));
object[283] = new Triangle(new Point3D(-0.144425,-0.179639,
zOff+0.657400
), new Point3D(0.000000,-0.232992,
zOff+0.674480
), new Point3D(0.000000,-0.184504,
zOff+0.750096
));
object[284] = new Triangle(new Point3D(0.140877,-0.143847,
zOff+0.745493
), new Point3D(0.122862,-0.100931,
zOff+0.824217
), new Point3D(0.000000,-0.126292,
zOff+0.818248
));
object[285] = new Triangle(new Point3D(0.000000,-0.126292,
zOff+0.818248
), new Point3D(0.000000,-0.184504,
zOff+0.750096
), new Point3D(0.140877,-0.143847,
zOff+0.745493
));
object[286] = new Triangle(new Point3D(0.000000,-0.126292,
zOff+0.818248
), new Point3D(-0.122862,-0.100931,
zOff+0.824217
), new Point3D(-0.140877,-0.143847,
zOff+0.745493
));
object[287] = new Triangle(new Point3D(-0.140877,-0.143847,
zOff+0.745493
), new Point3D(0.000000,-0.184504,
zOff+0.750096
), new Point3D(0.000000,-0.126292,
zOff+0.818248
));
object[288] = new Triangle(new Point3D(0.187253,0.067957,
zOff+0.921408
), new Point3D(0.237259,0.066005,
zOff+0.895581
), new Point3D(0.220894,0.166538,
zOff+0.866179
));
object[289] = new Triangle(new Point3D(0.220894,0.166538,
zOff+0.866179
), new Point3D(0.158888,0.128090,
zOff+0.921900
), new Point3D(0.187253,0.067957,
zOff+0.921408
));
object[290] = new Triangle(new Point3D(-0.220894,0.166538,
zOff+0.866180
), new Point3D(-0.237259,0.066005,
zOff+0.895581
), new Point3D(-0.187253,0.067957,
zOff+0.921408
));
object[291] = new Triangle(new Point3D(-0.187253,0.067957,
zOff+0.921408
), new Point3D(-0.158888,0.128090,
zOff+0.921901
), new Point3D(-0.220894,0.166538,
zOff+0.866180
));
object[292] = new Triangle(new Point3D(0.220894,0.166538,
zOff+0.866179
), new Point3D(0.121876,0.188478,
zOff+0.851130
), new Point3D(0.083004,0.149293,
zOff+0.916168
));
object[293] = new Triangle(new Point3D(0.083004,0.149293,
zOff+0.916168
), new Point3D(0.158888,0.128090,
zOff+0.921900
), new Point3D(0.220894,0.166538,
zOff+0.866179
));
object[294] = new Triangle(new Point3D(-0.083004,0.149293,
zOff+0.916168
), new Point3D(-0.121876,0.188478,
zOff+0.851131
), new Point3D(-0.220894,0.166538,
zOff+0.866180
));
object[295] = new Triangle(new Point3D(-0.220894,0.166538,
zOff+0.866180
), new Point3D(-0.158888,0.128090,
zOff+0.921901
), new Point3D(-0.083004,0.149293,
zOff+0.916168
));
object[296] = new Triangle(new Point3D(0.121876,0.188478,
zOff+0.851130
), new Point3D(0.000000,0.203591,
zOff+0.838633
), new Point3D(0.000000,0.156575,
zOff+0.911360
));
object[297] = new Triangle(new Point3D(0.000000,0.156575,
zOff+0.911360
), new Point3D(0.083004,0.149293,
zOff+0.916168
), new Point3D(0.121876,0.188478,
zOff+0.851130
));
object[298] = new Triangle(new Point3D(0.000000,0.156575,
zOff+0.911360
), new Point3D(0.000000,0.203591,
zOff+0.838633
), new Point3D(-0.121876,0.188478,
zOff+0.851131
));
object[299] = new Triangle(new Point3D(-0.121876,0.188478,
zOff+0.851131
), new Point3D(-0.083004,0.149293,
zOff+0.916168
), new Point3D(0.000000,0.156575,
zOff+0.911360
));
object[300] = new Triangle(new Point3D(-0.000000,0.232342,
zOff+0.613242
), new Point3D(-0.000000,0.221676,
zOff+0.745766
), new Point3D(0.130089,0.214408,
zOff+0.748854
));
object[301] = new Triangle(new Point3D(0.130089,0.214408,
zOff+0.748854
), new Point3D(0.132712,0.224161,
zOff+0.612909
), new Point3D(-0.000000,0.232342,
zOff+0.613242
));
object[302] = new Triangle(new Point3D(-0.130089,0.214408,
zOff+0.748854
), new Point3D(-0.000000,0.221676,
zOff+0.745766
), new Point3D(-0.000000,0.232342,
zOff+0.613242
));
object[303] = new Triangle(new Point3D(-0.000000,0.232342,
zOff+0.613242
), new Point3D(-0.132712,0.224161,
zOff+0.612909
), new Point3D(-0.130089,0.214408,
zOff+0.748854
));
object[304] = new Triangle(new Point3D(-0.000000,0.221676,
zOff+0.745766
), new Point3D(0.000000,0.203591,
zOff+0.838633
), new Point3D(0.121876,0.188478,
zOff+0.851130
));
object[305] = new Triangle(new Point3D(0.121876,0.188478,
zOff+0.851130
), new Point3D(0.130089,0.214408,
zOff+0.748854
), new Point3D(-0.000000,0.221676,
zOff+0.745766
));
object[306] = new Triangle(new Point3D(-0.121876,0.188478,
zOff+0.851131
), new Point3D(0.000000,0.203591,
zOff+0.838633
), new Point3D(-0.000000,0.221676,
zOff+0.745766
));
object[307] = new Triangle(new Point3D(-0.000000,0.221676,
zOff+0.745766
), new Point3D(-0.130089,0.214408,
zOff+0.748854
), new Point3D(-0.121876,0.188478,
zOff+0.851131
));
object[308] = new Triangle(new Point3D(0.132712,0.224161,
zOff+0.612909
), new Point3D(0.130089,0.214408,
zOff+0.748854
), new Point3D(0.247319,0.192851,
zOff+0.747069
));
object[309] = new Triangle(new Point3D(0.247319,0.192851,
zOff+0.747069
), new Point3D(0.265454,0.172892,
zOff+0.653461
), new Point3D(0.132712,0.224161,
zOff+0.612909
));
object[310] = new Triangle(new Point3D(-0.247319,0.192851,
zOff+0.747069
), new Point3D(-0.130089,0.214408,
zOff+0.748854
), new Point3D(-0.132712,0.224161,
zOff+0.612909
));
object[311] = new Triangle(new Point3D(-0.132712,0.224161,
zOff+0.612909
), new Point3D(-0.265454,0.172892,
zOff+0.653460
), new Point3D(-0.247319,0.192851,
zOff+0.747069
));
object[312] = new Triangle(new Point3D(0.130089,0.214408,
zOff+0.748854
), new Point3D(0.121876,0.188478,
zOff+0.851130
), new Point3D(0.220894,0.166538,
zOff+0.866179
));
object[313] = new Triangle(new Point3D(0.220894,0.166538,
zOff+0.866179
), new Point3D(0.247319,0.192851,
zOff+0.747069
), new Point3D(0.130089,0.214408,
zOff+0.748854
));
object[314] = new Triangle(new Point3D(-0.220894,0.166538,
zOff+0.866180
), new Point3D(-0.121876,0.188478,
zOff+0.851131
), new Point3D(-0.130089,0.214408,
zOff+0.748854
));
object[315] = new Triangle(new Point3D(-0.130089,0.214408,
zOff+0.748854
), new Point3D(-0.247319,0.192851,
zOff+0.747069
), new Point3D(-0.220894,0.166538,
zOff+0.866180
));
object[316] = new Triangle(new Point3D(0.724172,-0.073470,
zOff+0.117582
), new Point3D(0.704111,-0.027508,
zOff+0.108221
), new Point3D(0.695758,-0.056360,
zOff+0.042125
));
object[317] = new Triangle(new Point3D(0.695758,-0.056360,
zOff+0.042125
), new Point3D(0.702964,-0.104362,
zOff+0.046052
), new Point3D(0.724172,-0.073470,
zOff+0.117582
));
object[318] = new Triangle(new Point3D(-0.695758,-0.056360,
zOff+0.042125
), new Point3D(-0.704111,-0.027508,
zOff+0.108221
), new Point3D(-0.724172,-0.073470,
zOff+0.117582
));
object[319] = new Triangle(new Point3D(-0.724172,-0.073470,
zOff+0.117582
), new Point3D(-0.702964,-0.104362,
zOff+0.046052
), new Point3D(-0.695758,-0.056360,
zOff+0.042125
));
object[320] = new Triangle(new Point3D(0.705832,-0.087142,
zOff-0.099183
), new Point3D(0.737994,-0.082963,
zOff-0.094737
), new Point3D(0.743600,-0.117185,
zOff-0.094089
));
object[321] = new Triangle(new Point3D(0.743600,-0.117185,
zOff-0.094089
), new Point3D(0.709838,-0.122859,
zOff-0.100474
), new Point3D(0.705832,-0.087142,
zOff-0.099183
));
object[322] = new Triangle(new Point3D(-0.743600,-0.117185,
zOff-0.094088
), new Point3D(-0.737994,-0.082963,
zOff-0.094736
), new Point3D(-0.705832,-0.087142,
zOff-0.099183
));
object[323] = new Triangle(new Point3D(-0.705832,-0.087142,
zOff-0.099183
), new Point3D(-0.709838,-0.122859,
zOff-0.100473
), new Point3D(-0.743600,-0.117185,
zOff-0.094088
));
object[324] = new Triangle(new Point3D(0.758566,-0.107604,
zOff+0.020180
), new Point3D(0.774291,-0.096192,
zOff+0.076686
), new Point3D(0.724172,-0.073470,
zOff+0.117582
));
object[325] = new Triangle(new Point3D(0.724172,-0.073470,
zOff+0.117582
), new Point3D(0.702964,-0.104362,
zOff+0.046052
), new Point3D(0.758566,-0.107604,
zOff+0.020180
));
object[326] = new Triangle(new Point3D(-0.724172,-0.073470,
zOff+0.117582
), new Point3D(-0.774291,-0.096192,
zOff+0.076686
), new Point3D(-0.758566,-0.107604,
zOff+0.020180
));
object[327] = new Triangle(new Point3D(-0.758566,-0.107604,
zOff+0.020180
), new Point3D(-0.702964,-0.104362,
zOff+0.046052
), new Point3D(-0.724172,-0.073470,
zOff+0.117582
));
object[328] = new Triangle(new Point3D(0.797960,0.070879,
zOff+0.137397
), new Point3D(0.822220,0.025730,
zOff+0.144237
), new Point3D(0.846551,0.030319,
zOff+0.113044
));
object[329] = new Triangle(new Point3D(0.846551,0.030319,
zOff+0.113044
), new Point3D(0.832006,0.069664,
zOff+0.113745
), new Point3D(0.797960,0.070879,
zOff+0.137397
));
object[330] = new Triangle(new Point3D(-0.846551,0.030319,
zOff+0.113044
), new Point3D(-0.822220,0.025730,
zOff+0.144237
), new Point3D(-0.797960,0.070879,
zOff+0.137397
));
object[331] = new Triangle(new Point3D(-0.797960,0.070879,
zOff+0.137397
), new Point3D(-0.832006,0.069664,
zOff+0.113745
), new Point3D(-0.846551,0.030319,
zOff+0.113044
));
object[332] = new Triangle(new Point3D(0.746921,0.086392,
zOff+0.115393
), new Point3D(0.797960,0.070879,
zOff+0.137397
), new Point3D(0.832006,0.069664,
zOff+0.113745
));
object[333] = new Triangle(new Point3D(0.832006,0.069664,
zOff+0.113745
), new Point3D(0.798564,0.078169,
zOff+0.081726
), new Point3D(0.746921,0.086392,
zOff+0.115393
));
object[334] = new Triangle(new Point3D(-0.832006,0.069664,
zOff+0.113745
), new Point3D(-0.797960,0.070879,
zOff+0.137397
), new Point3D(-0.746921,0.086392,
zOff+0.115392
));
object[335] = new Triangle(new Point3D(-0.746921,0.086392,
zOff+0.115392
), new Point3D(-0.798564,0.078169,
zOff+0.081726
), new Point3D(-0.832006,0.069664,
zOff+0.113745
));
object[336] = new Triangle(new Point3D(0.822220,0.025730,
zOff+0.144237
), new Point3D(0.811726,-0.029668,
zOff+0.148840
), new Point3D(0.831718,-0.027869,
zOff+0.113671
));
object[337] = new Triangle(new Point3D(0.831718,-0.027869,
zOff+0.113671
), new Point3D(0.846551,0.030319,
zOff+0.113044
), new Point3D(0.822220,0.025730,
zOff+0.144237
));
object[338] = new Triangle(new Point3D(-0.831718,-0.027869,
zOff+0.113671
), new Point3D(-0.811726,-0.029668,
zOff+0.148840
), new Point3D(-0.822220,0.025730,
zOff+0.144237
));
object[339] = new Triangle(new Point3D(-0.822220,0.025730,
zOff+0.144237
), new Point3D(-0.846551,0.030319,
zOff+0.113044
), new Point3D(-0.831718,-0.027869,
zOff+0.113671
));
object[340] = new Triangle(new Point3D(0.811726,-0.029668,
zOff+0.148840
), new Point3D(0.777874,-0.075458,
zOff+0.142467
), new Point3D(0.808679,-0.073118,
zOff+0.109065
));
object[341] = new Triangle(new Point3D(0.808679,-0.073118,
zOff+0.109065
), new Point3D(0.831718,-0.027869,
zOff+0.113671
), new Point3D(0.811726,-0.029668,
zOff+0.148840
));
object[342] = new Triangle(new Point3D(-0.808679,-0.073118,
zOff+0.109065
), new Point3D(-0.777874,-0.075458,
zOff+0.142467
), new Point3D(-0.811726,-0.029668,
zOff+0.148840
));
object[343] = new Triangle(new Point3D(-0.811726,-0.029668,
zOff+0.148840
), new Point3D(-0.831718,-0.027869,
zOff+0.113671
), new Point3D(-0.808679,-0.073118,
zOff+0.109065
));
object[344] = new Triangle(new Point3D(0.711550,0.055822,
zOff+0.109432
), new Point3D(0.746921,0.086392,
zOff+0.115393
), new Point3D(0.798564,0.078169,
zOff+0.081726
));
object[345] = new Triangle(new Point3D(0.798564,0.078169,
zOff+0.081726
), new Point3D(0.781012,0.061007,
zOff+0.060964
), new Point3D(0.711550,0.055822,
zOff+0.109432
));
object[346] = new Triangle(new Point3D(-0.798564,0.078169,
zOff+0.081726
), new Point3D(-0.746921,0.086392,
zOff+0.115392
), new Point3D(-0.711550,0.055822,
zOff+0.109431
));
object[347] = new Triangle(new Point3D(-0.711550,0.055822,
zOff+0.109431
), new Point3D(-0.781012,0.061007,
zOff+0.060964
), new Point3D(-0.798564,0.078169,
zOff+0.081726
));
object[348] = new Triangle(new Point3D(0.777874,-0.075458,
zOff+0.142467
), new Point3D(0.724172,-0.073470,
zOff+0.117582
), new Point3D(0.774291,-0.096192,
zOff+0.076686
));
object[349] = new Triangle(new Point3D(0.774291,-0.096192,
zOff+0.076686
), new Point3D(0.808679,-0.073118,
zOff+0.109065
), new Point3D(0.777874,-0.075458,
zOff+0.142467
));
object[350] = new Triangle(new Point3D(-0.774291,-0.096192,
zOff+0.076686
), new Point3D(-0.724172,-0.073470,
zOff+0.117582
), new Point3D(-0.777874,-0.075458,
zOff+0.142467
));
object[351] = new Triangle(new Point3D(-0.777874,-0.075458,
zOff+0.142467
), new Point3D(-0.808679,-0.073118,
zOff+0.109065
), new Point3D(-0.774291,-0.096192,
zOff+0.076686
));
object[352] = new Triangle(new Point3D(0.904082,-0.125783,
zOff-0.173402
), new Point3D(0.868893,-0.103476,
zOff-0.170003
), new Point3D(0.893329,-0.069984,
zOff-0.164387
));
object[353] = new Triangle(new Point3D(0.893329,-0.069984,
zOff-0.164387
), new Point3D(0.928842,-0.090227,
zOff-0.168959
), new Point3D(0.904082,-0.125783,
zOff-0.173402
));
object[354] = new Triangle(new Point3D(-0.893329,-0.069984,
zOff-0.164387
), new Point3D(-0.868893,-0.103476,
zOff-0.170002
), new Point3D(-0.904082,-0.125783,
zOff-0.173401
));
object[355] = new Triangle(new Point3D(-0.904082,-0.125783,
zOff-0.173401
), new Point3D(-0.928842,-0.090227,
zOff-0.168958
), new Point3D(-0.893329,-0.069984,
zOff-0.164387
));
object[356] = new Triangle(new Point3D(0.709838,-0.122859,
zOff-0.100474
), new Point3D(0.743600,-0.117185,
zOff-0.094089
), new Point3D(0.748293,-0.115941,
zOff-0.028689
));
object[357] = new Triangle(new Point3D(0.748293,-0.115941,
zOff-0.028689
), new Point3D(0.700058,-0.121341,
zOff-0.029269
), new Point3D(0.709838,-0.122859,
zOff-0.100474
));
object[358] = new Triangle(new Point3D(-0.748293,-0.115941,
zOff-0.028689
), new Point3D(-0.743600,-0.117185,
zOff-0.094088
), new Point3D(-0.709838,-0.122859,
zOff-0.100473
));
object[359] = new Triangle(new Point3D(-0.709838,-0.122859,
zOff-0.100473
), new Point3D(-0.700058,-0.121341,
zOff-0.029269
), new Point3D(-0.748293,-0.115941,
zOff-0.028689
));
object[360] = new Triangle(new Point3D(0.700058,-0.121341,
zOff-0.029269
), new Point3D(0.748293,-0.115941,
zOff-0.028689
), new Point3D(0.758566,-0.107604,
zOff+0.020180
));
object[361] = new Triangle(new Point3D(0.758566,-0.107604,
zOff+0.020180
), new Point3D(0.702964,-0.104362,
zOff+0.046052
), new Point3D(0.700058,-0.121341,
zOff-0.029269
));
object[362] = new Triangle(new Point3D(-0.758566,-0.107604,
zOff+0.020180
), new Point3D(-0.748293,-0.115941,
zOff-0.028689
), new Point3D(-0.700058,-0.121341,
zOff-0.029269
));
object[363] = new Triangle(new Point3D(-0.700058,-0.121341,
zOff-0.029269
), new Point3D(-0.702964,-0.104362,
zOff+0.046052
), new Point3D(-0.758566,-0.107604,
zOff+0.020180
));
object[364] = new Triangle(new Point3D(0.695758,-0.056360,
zOff+0.042125
), new Point3D(0.748962,-0.048603,
zOff+0.019522
), new Point3D(0.741353,-0.082531,
zOff-0.034902
));
object[365] = new Triangle(new Point3D(0.741353,-0.082531,
zOff-0.034902
), new Point3D(0.694780,-0.087891,
zOff-0.036767
), new Point3D(0.695758,-0.056360,
zOff+0.042125
));
object[366] = new Triangle(new Point3D(-0.741353,-0.082531,
zOff-0.034902
), new Point3D(-0.748962,-0.048603,
zOff+0.019522
), new Point3D(-0.695758,-0.056360,
zOff+0.042125
));
object[367] = new Triangle(new Point3D(-0.695758,-0.056360,
zOff+0.042125
), new Point3D(-0.694780,-0.087891,
zOff-0.036766
), new Point3D(-0.741353,-0.082531,
zOff-0.034902
));
object[368] = new Triangle(new Point3D(0.694780,-0.087891,
zOff-0.036767
), new Point3D(0.741353,-0.082531,
zOff-0.034902
), new Point3D(0.737994,-0.082963,
zOff-0.094737
));
object[369] = new Triangle(new Point3D(0.737994,-0.082963,
zOff-0.094737
), new Point3D(0.705832,-0.087142,
zOff-0.099183
), new Point3D(0.694780,-0.087891,
zOff-0.036767
));
object[370] = new Triangle(new Point3D(-0.737994,-0.082963,
zOff-0.094736
), new Point3D(-0.741353,-0.082531,
zOff-0.034902
), new Point3D(-0.694780,-0.087891,
zOff-0.036766
));
object[371] = new Triangle(new Point3D(-0.694780,-0.087891,
zOff-0.036766
), new Point3D(-0.705832,-0.087142,
zOff-0.099183
), new Point3D(-0.737994,-0.082963,
zOff-0.094736
));
object[372] = new Triangle(new Point3D(0.748962,-0.048603,
zOff+0.019522
), new Point3D(0.758566,-0.107604,
zOff+0.020180
), new Point3D(0.748293,-0.115941,
zOff-0.028689
));
object[373] = new Triangle(new Point3D(0.748293,-0.115941,
zOff-0.028689
), new Point3D(0.741353,-0.082531,
zOff-0.034902
), new Point3D(0.748962,-0.048603,
zOff+0.019522
));
object[374] = new Triangle(new Point3D(-0.748293,-0.115941,
zOff-0.028689
), new Point3D(-0.758566,-0.107604,
zOff+0.020180
), new Point3D(-0.748962,-0.048603,
zOff+0.019522
));
object[375] = new Triangle(new Point3D(-0.748962,-0.048603,
zOff+0.019522
), new Point3D(-0.741353,-0.082531,
zOff-0.034902
), new Point3D(-0.748293,-0.115941,
zOff-0.028689
));
object[376] = new Triangle(new Point3D(0.741353,-0.082531,
zOff-0.034902
), new Point3D(0.748293,-0.115941,
zOff-0.028689
), new Point3D(0.743600,-0.117185,
zOff-0.094089
));
object[377] = new Triangle(new Point3D(0.743600,-0.117185,
zOff-0.094089
), new Point3D(0.737994,-0.082963,
zOff-0.094737
), new Point3D(0.741353,-0.082531,
zOff-0.034902
));
object[378] = new Triangle(new Point3D(-0.743600,-0.117185,
zOff-0.094088
), new Point3D(-0.748293,-0.115941,
zOff-0.028689
), new Point3D(-0.741353,-0.082531,
zOff-0.034902
));
object[379] = new Triangle(new Point3D(-0.741353,-0.082531,
zOff-0.034902
), new Point3D(-0.737994,-0.082963,
zOff-0.094736
), new Point3D(-0.743600,-0.117185,
zOff-0.094088
));
object[380] = new Triangle(new Point3D(0.702964,-0.104362,
zOff+0.046052
), new Point3D(0.695758,-0.056360,
zOff+0.042125
), new Point3D(0.694780,-0.087891,
zOff-0.036767
));
object[381] = new Triangle(new Point3D(0.694780,-0.087891,
zOff-0.036767
), new Point3D(0.700058,-0.121341,
zOff-0.029269
), new Point3D(0.702964,-0.104362,
zOff+0.046052
));
object[382] = new Triangle(new Point3D(-0.694780,-0.087891,
zOff-0.036766
), new Point3D(-0.695758,-0.056360,
zOff+0.042125
), new Point3D(-0.702964,-0.104362,
zOff+0.046052
));
object[383] = new Triangle(new Point3D(-0.702964,-0.104362,
zOff+0.046052
), new Point3D(-0.700058,-0.121341,
zOff-0.029269
), new Point3D(-0.694780,-0.087891,
zOff-0.036766
));
object[384] = new Triangle(new Point3D(0.700058,-0.121341,
zOff-0.029269
), new Point3D(0.694780,-0.087891,
zOff-0.036767
), new Point3D(0.705832,-0.087142,
zOff-0.099183
));
object[385] = new Triangle(new Point3D(0.705832,-0.087142,
zOff-0.099183
), new Point3D(0.709838,-0.122859,
zOff-0.100474
), new Point3D(0.700058,-0.121341,
zOff-0.029269
));
object[386] = new Triangle(new Point3D(-0.705832,-0.087142,
zOff-0.099183
), new Point3D(-0.694780,-0.087891,
zOff-0.036766
), new Point3D(-0.700058,-0.121341,
zOff-0.029269
));
object[387] = new Triangle(new Point3D(-0.700058,-0.121341,
zOff-0.029269
), new Point3D(-0.709838,-0.122859,
zOff-0.100473
), new Point3D(-0.705832,-0.087142,
zOff-0.099183
));
object[388] = new Triangle(new Point3D(0.704111,-0.027508,
zOff+0.108221
), new Point3D(0.767940,0.007944,
zOff+0.051643
), new Point3D(0.748962,-0.048603,
zOff+0.019522
));
object[389] = new Triangle(new Point3D(0.748962,-0.048603,
zOff+0.019522
), new Point3D(0.695758,-0.056360,
zOff+0.042125
), new Point3D(0.704111,-0.027508,
zOff+0.108221
));
object[390] = new Triangle(new Point3D(-0.748962,-0.048603,
zOff+0.019522
), new Point3D(-0.767940,0.007944,
zOff+0.051643
), new Point3D(-0.704111,-0.027508,
zOff+0.108221
));
object[391] = new Triangle(new Point3D(-0.704111,-0.027508,
zOff+0.108221
), new Point3D(-0.695758,-0.056360,
zOff+0.042125
), new Point3D(-0.748962,-0.048603,
zOff+0.019522
));
object[392] = new Triangle(new Point3D(0.704111,-0.027508,
zOff+0.108221
), new Point3D(0.711550,0.055822,
zOff+0.109432
), new Point3D(0.781012,0.061007,
zOff+0.060964
));
object[393] = new Triangle(new Point3D(0.781012,0.061007,
zOff+0.060964
), new Point3D(0.767940,0.007944,
zOff+0.051643
), new Point3D(0.704111,-0.027508,
zOff+0.108221
));
object[394] = new Triangle(new Point3D(-0.781012,0.061007,
zOff+0.060964
), new Point3D(-0.711550,0.055822,
zOff+0.109431
), new Point3D(-0.704111,-0.027508,
zOff+0.108221
));
object[395] = new Triangle(new Point3D(-0.704111,-0.027508,
zOff+0.108221
), new Point3D(-0.767940,0.007944,
zOff+0.051643
), new Point3D(-0.781012,0.061007,
zOff+0.060964
));
object[396] = new Triangle(new Point3D(0.774291,-0.096192,
zOff+0.076686
), new Point3D(0.758566,-0.107604,
zOff+0.020180
), new Point3D(0.787285,-0.105099,
zOff-0.005052
));
object[397] = new Triangle(new Point3D(0.787285,-0.105099,
zOff-0.005052
), new Point3D(0.815905,-0.111452,
zOff+0.039247
), new Point3D(0.774291,-0.096192,
zOff+0.076686
));
object[398] = new Triangle(new Point3D(-0.787285,-0.105099,
zOff-0.005052
), new Point3D(-0.758566,-0.107604,
zOff+0.020180
), new Point3D(-0.774291,-0.096192,
zOff+0.076686
));
object[399] = new Triangle(new Point3D(-0.774291,-0.096192,
zOff+0.076686
), new Point3D(-0.815905,-0.111452,
zOff+0.039247
), new Point3D(-0.787285,-0.105099,
zOff-0.005052
));
object[400] = new Triangle(new Point3D(0.815905,-0.111452,
zOff+0.039247
), new Point3D(0.787285,-0.105099,
zOff-0.005052
), new Point3D(0.816005,-0.102595,
zOff-0.030284
));
object[401] = new Triangle(new Point3D(0.816005,-0.102595,
zOff-0.030284
), new Point3D(0.857520,-0.126712,
zOff+0.001809
), new Point3D(0.815905,-0.111452,
zOff+0.039247
));
object[402] = new Triangle(new Point3D(-0.816005,-0.102595,
zOff-0.030284
), new Point3D(-0.787285,-0.105099,
zOff-0.005052
), new Point3D(-0.815905,-0.111452,
zOff+0.039247
));
object[403] = new Triangle(new Point3D(-0.815905,-0.111452,
zOff+0.039247
), new Point3D(-0.857520,-0.126712,
zOff+0.001809
), new Point3D(-0.816005,-0.102595,
zOff-0.030284
));
object[404] = new Triangle(new Point3D(0.808679,-0.073118,
zOff+0.109065
), new Point3D(0.774291,-0.096192,
zOff+0.076686
), new Point3D(0.815905,-0.111452,
zOff+0.039247
));
object[405] = new Triangle(new Point3D(0.815905,-0.111452,
zOff+0.039247
), new Point3D(0.849731,-0.074827,
zOff+0.055618
), new Point3D(0.808679,-0.073118,
zOff+0.109065
));
object[406] = new Triangle(new Point3D(-0.815905,-0.111452,
zOff+0.039247
), new Point3D(-0.774291,-0.096192,
zOff+0.076686
), new Point3D(-0.808679,-0.073118,
zOff+0.109065
));
object[407] = new Triangle(new Point3D(-0.808679,-0.073118,
zOff+0.109065
), new Point3D(-0.849731,-0.074827,
zOff+0.055618
), new Point3D(-0.815905,-0.111452,
zOff+0.039247
));
object[408] = new Triangle(new Point3D(0.849731,-0.074827,
zOff+0.055618
), new Point3D(0.815905,-0.111452,
zOff+0.039247
), new Point3D(0.857520,-0.126712,
zOff+0.001809
));
object[409] = new Triangle(new Point3D(0.857520,-0.126712,
zOff+0.001809
), new Point3D(0.890783,-0.076535,
zOff+0.002172
), new Point3D(0.849731,-0.074827,
zOff+0.055618
));
object[410] = new Triangle(new Point3D(-0.857520,-0.126712,
zOff+0.001809
), new Point3D(-0.815905,-0.111452,
zOff+0.039247
), new Point3D(-0.849731,-0.074827,
zOff+0.055618
));
object[411] = new Triangle(new Point3D(-0.849731,-0.074827,
zOff+0.055618
), new Point3D(-0.890783,-0.076535,
zOff+0.002173
), new Point3D(-0.857520,-0.126712,
zOff+0.001809
));
object[412] = new Triangle(new Point3D(0.831718,-0.027869,
zOff+0.113671
), new Point3D(0.808679,-0.073118,
zOff+0.109065
), new Point3D(0.849731,-0.074827,
zOff+0.055618
));
object[413] = new Triangle(new Point3D(0.849731,-0.074827,
zOff+0.055618
), new Point3D(0.872635,-0.027104,
zOff+0.061502
), new Point3D(0.831718,-0.027869,
zOff+0.113671
));
object[414] = new Triangle(new Point3D(-0.849731,-0.074827,
zOff+0.055618
), new Point3D(-0.808679,-0.073118,
zOff+0.109065
), new Point3D(-0.831718,-0.027869,
zOff+0.113671
));
object[415] = new Triangle(new Point3D(-0.831718,-0.027869,
zOff+0.113671
), new Point3D(-0.872635,-0.027104,
zOff+0.061502
), new Point3D(-0.849731,-0.074827,
zOff+0.055618
));
object[416] = new Triangle(new Point3D(0.872635,-0.027104,
zOff+0.061502
), new Point3D(0.849731,-0.074827,
zOff+0.055618
), new Point3D(0.890783,-0.076535,
zOff+0.002172
));
object[417] = new Triangle(new Point3D(0.890783,-0.076535,
zOff+0.002172
), new Point3D(0.913551,-0.026340,
zOff+0.009332
), new Point3D(0.872635,-0.027104,
zOff+0.061502
));
object[418] = new Triangle(new Point3D(-0.890783,-0.076535,
zOff+0.002173
), new Point3D(-0.849731,-0.074827,
zOff+0.055618
), new Point3D(-0.872635,-0.027104,
zOff+0.061502
));
object[419] = new Triangle(new Point3D(-0.872635,-0.027104,
zOff+0.061502
), new Point3D(-0.913551,-0.026340,
zOff+0.009333
), new Point3D(-0.890783,-0.076535,
zOff+0.002173
));
object[420] = new Triangle(new Point3D(0.758566,-0.107604,
zOff+0.020180
), new Point3D(0.748962,-0.048603,
zOff+0.019522
), new Point3D(0.800194,-0.051259,
zOff-0.006114
));
object[421] = new Triangle(new Point3D(0.800194,-0.051259,
zOff-0.006114
), new Point3D(0.787285,-0.105099,
zOff-0.005052
), new Point3D(0.758566,-0.107604,
zOff+0.020180
));
object[422] = new Triangle(new Point3D(-0.800194,-0.051259,
zOff-0.006114
), new Point3D(-0.748962,-0.048603,
zOff+0.019522
), new Point3D(-0.758566,-0.107604,
zOff+0.020180
));
object[423] = new Triangle(new Point3D(-0.758566,-0.107604,
zOff+0.020180
), new Point3D(-0.787285,-0.105099,
zOff-0.005052
), new Point3D(-0.800194,-0.051259,
zOff-0.006114
));
object[424] = new Triangle(new Point3D(0.787285,-0.105099,
zOff-0.005052
), new Point3D(0.800194,-0.051259,
zOff-0.006114
), new Point3D(0.851425,-0.053916,
zOff-0.031750
));
object[425] = new Triangle(new Point3D(0.851425,-0.053916,
zOff-0.031750
), new Point3D(0.816005,-0.102595,
zOff-0.030284
), new Point3D(0.787285,-0.105099,
zOff-0.005052
));
object[426] = new Triangle(new Point3D(-0.851425,-0.053916,
zOff-0.031749
), new Point3D(-0.800194,-0.051259,
zOff-0.006114
), new Point3D(-0.787285,-0.105099,
zOff-0.005052
));
object[427] = new Triangle(new Point3D(-0.787285,-0.105099,
zOff-0.005052
), new Point3D(-0.816005,-0.102595,
zOff-0.030284
), new Point3D(-0.851425,-0.053916,
zOff-0.031749
));
object[428] = new Triangle(new Point3D(0.748962,-0.048603,
zOff+0.019522
), new Point3D(0.767940,0.007944,
zOff+0.051643
), new Point3D(0.813643,-0.007493,
zOff+0.017703
));
object[429] = new Triangle(new Point3D(0.813643,-0.007493,
zOff+0.017703
), new Point3D(0.800194,-0.051259,
zOff-0.006114
), new Point3D(0.748962,-0.048603,
zOff+0.019522
));
object[430] = new Triangle(new Point3D(-0.813643,-0.007493,
zOff+0.017703
), new Point3D(-0.767940,0.007944,
zOff+0.051643
), new Point3D(-0.748962,-0.048603,
zOff+0.019522
));
object[431] = new Triangle(new Point3D(-0.748962,-0.048603,
zOff+0.019522
), new Point3D(-0.800194,-0.051259,
zOff-0.006114
), new Point3D(-0.813643,-0.007493,
zOff+0.017703
));
object[432] = new Triangle(new Point3D(0.800194,-0.051259,
zOff-0.006114
), new Point3D(0.813643,-0.007493,
zOff+0.017703
), new Point3D(0.869531,-0.002747,
zOff-0.026810
));
object[433] = new Triangle(new Point3D(0.869531,-0.002747,
zOff-0.026810
), new Point3D(0.851425,-0.053916,
zOff-0.031750
), new Point3D(0.800194,-0.051259,
zOff-0.006114
));
object[434] = new Triangle(new Point3D(-0.869531,-0.002747,
zOff-0.026810
), new Point3D(-0.813643,-0.007493,
zOff+0.017703
), new Point3D(-0.800194,-0.051259,
zOff-0.006114
));
object[435] = new Triangle(new Point3D(-0.800194,-0.051259,
zOff-0.006114
), new Point3D(-0.851425,-0.053916,
zOff-0.031749
), new Point3D(-0.869531,-0.002747,
zOff-0.026810
));
object[436] = new Triangle(new Point3D(0.798564,0.078169,
zOff+0.081726
), new Point3D(0.836357,0.085627,
zOff+0.042977
), new Point3D(0.832743,0.058695,
zOff+0.020175
));
object[437] = new Triangle(new Point3D(0.832743,0.058695,
zOff+0.020175
), new Point3D(0.781012,0.061007,
zOff+0.060964
), new Point3D(0.798564,0.078169,
zOff+0.081726
));
object[438] = new Triangle(new Point3D(-0.832743,0.058695,
zOff+0.020175
), new Point3D(-0.836357,0.085627,
zOff+0.042977
), new Point3D(-0.798564,0.078169,
zOff+0.081726
));
object[439] = new Triangle(new Point3D(-0.798564,0.078169,
zOff+0.081726
), new Point3D(-0.781012,0.061007,
zOff+0.060964
), new Point3D(-0.832743,0.058695,
zOff+0.020175
));
object[440] = new Triangle(new Point3D(0.836357,0.085627,
zOff+0.042977
), new Point3D(0.871623,0.084404,
zOff+0.004520
), new Point3D(0.876585,0.049663,
zOff-0.014039
));
object[441] = new Triangle(new Point3D(0.876585,0.049663,
zOff-0.014039
), new Point3D(0.832743,0.058695,
zOff+0.020175
), new Point3D(0.836357,0.085627,
zOff+0.042977
));
object[442] = new Triangle(new Point3D(-0.876585,0.049663,
zOff-0.014039
), new Point3D(-0.871623,0.084404,
zOff+0.004520
), new Point3D(-0.836357,0.085627,
zOff+0.042977
));
object[443] = new Triangle(new Point3D(-0.836357,0.085627,
zOff+0.042977
), new Point3D(-0.832743,0.058695,
zOff+0.020175
), new Point3D(-0.876585,0.049663,
zOff-0.014039
));
object[444] = new Triangle(new Point3D(0.832006,0.069664,
zOff+0.113745
), new Point3D(0.867685,0.078818,
zOff+0.073542
), new Point3D(0.836357,0.085627,
zOff+0.042977
));
object[445] = new Triangle(new Point3D(0.836357,0.085627,
zOff+0.042977
), new Point3D(0.798564,0.078169,
zOff+0.081726
), new Point3D(0.832006,0.069664,
zOff+0.113745
));
object[446] = new Triangle(new Point3D(-0.836357,0.085627,
zOff+0.042977
), new Point3D(-0.867685,0.078818,
zOff+0.073542
), new Point3D(-0.832006,0.069664,
zOff+0.113745
));
object[447] = new Triangle(new Point3D(-0.832006,0.069664,
zOff+0.113745
), new Point3D(-0.798564,0.078169,
zOff+0.081726
), new Point3D(-0.836357,0.085627,
zOff+0.042977
));
object[448] = new Triangle(new Point3D(0.867685,0.078818,
zOff+0.073542
), new Point3D(0.898914,0.079733,
zOff+0.029920
), new Point3D(0.871623,0.084404,
zOff+0.004520
));
object[449] = new Triangle(new Point3D(0.871623,0.084404,
zOff+0.004520
), new Point3D(0.836357,0.085627,
zOff+0.042977
), new Point3D(0.867685,0.078818,
zOff+0.073542
));
object[450] = new Triangle(new Point3D(-0.871623,0.084404,
zOff+0.004520
), new Point3D(-0.898914,0.079733,
zOff+0.029920
), new Point3D(-0.867685,0.078818,
zOff+0.073542
));
object[451] = new Triangle(new Point3D(-0.867685,0.078818,
zOff+0.073542
), new Point3D(-0.836357,0.085627,
zOff+0.042977
), new Point3D(-0.871623,0.084404,
zOff+0.004520
));
object[452] = new Triangle(new Point3D(0.846551,0.030319,
zOff+0.113044
), new Point3D(0.881594,0.034667,
zOff+0.067512
), new Point3D(0.867685,0.078818,
zOff+0.073542
));
object[453] = new Triangle(new Point3D(0.867685,0.078818,
zOff+0.073542
), new Point3D(0.832006,0.069664,
zOff+0.113745
), new Point3D(0.846551,0.030319,
zOff+0.113044
));
object[454] = new Triangle(new Point3D(-0.867685,0.078818,
zOff+0.073542
), new Point3D(-0.881594,0.034667,
zOff+0.067512
), new Point3D(-0.846551,0.030319,
zOff+0.113044
));
object[455] = new Triangle(new Point3D(-0.846551,0.030319,
zOff+0.113044
), new Point3D(-0.832006,0.069664,
zOff+0.113745
), new Point3D(-0.867685,0.078818,
zOff+0.073542
));
object[456] = new Triangle(new Point3D(0.881594,0.034667,
zOff+0.067512
), new Point3D(0.913883,0.041131,
zOff+0.020477
), new Point3D(0.898914,0.079733,
zOff+0.029920
));
object[457] = new Triangle(new Point3D(0.898914,0.079733,
zOff+0.029920
), new Point3D(0.867685,0.078818,
zOff+0.073542
), new Point3D(0.881594,0.034667,
zOff+0.067512
));
object[458] = new Triangle(new Point3D(-0.898914,0.079733,
zOff+0.029920
), new Point3D(-0.913883,0.041131,
zOff+0.020477
), new Point3D(-0.881594,0.034667,
zOff+0.067512
));
object[459] = new Triangle(new Point3D(-0.881594,0.034667,
zOff+0.067512
), new Point3D(-0.867685,0.078818,
zOff+0.073542
), new Point3D(-0.898914,0.079733,
zOff+0.029920
));
object[460] = new Triangle(new Point3D(0.831718,-0.027869,
zOff+0.113671
), new Point3D(0.872635,-0.027104,
zOff+0.061502
), new Point3D(0.881594,0.034667,
zOff+0.067512
));
object[461] = new Triangle(new Point3D(0.881594,0.034667,
zOff+0.067512
), new Point3D(0.846551,0.030319,
zOff+0.113044
), new Point3D(0.831718,-0.027869,
zOff+0.113671
));
object[462] = new Triangle(new Point3D(-0.881594,0.034667,
zOff+0.067512
), new Point3D(-0.872635,-0.027104,
zOff+0.061502
), new Point3D(-0.831718,-0.027869,
zOff+0.113671
));
object[463] = new Triangle(new Point3D(-0.831718,-0.027869,
zOff+0.113671
), new Point3D(-0.846551,0.030319,
zOff+0.113044
), new Point3D(-0.881594,0.034667,
zOff+0.067512
));
object[464] = new Triangle(new Point3D(0.872635,-0.027104,
zOff+0.061502
), new Point3D(0.913551,-0.026340,
zOff+0.009332
), new Point3D(0.913883,0.041131,
zOff+0.020477
));
object[465] = new Triangle(new Point3D(0.913883,0.041131,
zOff+0.020477
), new Point3D(0.881594,0.034667,
zOff+0.067512
), new Point3D(0.872635,-0.027104,
zOff+0.061502
));
object[466] = new Triangle(new Point3D(-0.913883,0.041131,
zOff+0.020477
), new Point3D(-0.913551,-0.026340,
zOff+0.009333
), new Point3D(-0.872635,-0.027104,
zOff+0.061502
));
object[467] = new Triangle(new Point3D(-0.872635,-0.027104,
zOff+0.061502
), new Point3D(-0.881594,0.034667,
zOff+0.067512
), new Point3D(-0.913883,0.041131,
zOff+0.020477
));
object[468] = new Triangle(new Point3D(0.781012,0.061007,
zOff+0.060964
), new Point3D(0.832743,0.058695,
zOff+0.020175
), new Point3D(0.813643,-0.007493,
zOff+0.017703
));
object[469] = new Triangle(new Point3D(0.813643,-0.007493,
zOff+0.017703
), new Point3D(0.767940,0.007944,
zOff+0.051643
), new Point3D(0.781012,0.061007,
zOff+0.060964
));
object[470] = new Triangle(new Point3D(-0.813643,-0.007493,
zOff+0.017703
), new Point3D(-0.832743,0.058695,
zOff+0.020175
), new Point3D(-0.781012,0.061007,
zOff+0.060964
));
object[471] = new Triangle(new Point3D(-0.781012,0.061007,
zOff+0.060964
), new Point3D(-0.767940,0.007944,
zOff+0.051643
), new Point3D(-0.813643,-0.007493,
zOff+0.017703
));
object[472] = new Triangle(new Point3D(0.832743,0.058695,
zOff+0.020175
), new Point3D(0.876585,0.049663,
zOff-0.014039
), new Point3D(0.869531,-0.002747,
zOff-0.026810
));
object[473] = new Triangle(new Point3D(0.869531,-0.002747,
zOff-0.026810
), new Point3D(0.813643,-0.007493,
zOff+0.017703
), new Point3D(0.832743,0.058695,
zOff+0.020175
));
object[474] = new Triangle(new Point3D(-0.869531,-0.002747,
zOff-0.026810
), new Point3D(-0.876585,0.049663,
zOff-0.014039
), new Point3D(-0.832743,0.058695,
zOff+0.020175
));
object[475] = new Triangle(new Point3D(-0.832743,0.058695,
zOff+0.020175
), new Point3D(-0.813643,-0.007493,
zOff+0.017703
), new Point3D(-0.869531,-0.002747,
zOff-0.026810
));
object[476] = new Triangle(new Point3D(0.928842,-0.090227,
zOff-0.168959
), new Point3D(0.893329,-0.069984,
zOff-0.164387
), new Point3D(0.886061,-0.070038,
zOff-0.114427
));
object[477] = new Triangle(new Point3D(0.886061,-0.070038,
zOff-0.114427
), new Point3D(0.924657,-0.092679,
zOff-0.119837
), new Point3D(0.928842,-0.090227,
zOff-0.168959
));
object[478] = new Triangle(new Point3D(-0.886061,-0.070038,
zOff-0.114427
), new Point3D(-0.893329,-0.069984,
zOff-0.164387
), new Point3D(-0.928842,-0.090227,
zOff-0.168958
));
object[479] = new Triangle(new Point3D(-0.928842,-0.090227,
zOff-0.168958
), new Point3D(-0.924657,-0.092679,
zOff-0.119836
), new Point3D(-0.886061,-0.070038,
zOff-0.114427
));
object[480] = new Triangle(new Point3D(0.923196,-0.093532,
zOff-0.104461
), new Point3D(0.886061,-0.070038,
zOff-0.114427
), new Point3D(0.872470,-0.069004,
zOff-0.073281
));
object[481] = new Triangle(new Point3D(0.872470,-0.069004,
zOff-0.073281
), new Point3D(0.914784,-0.091375,
zOff-0.065062
), new Point3D(0.923196,-0.093532,
zOff-0.104461
));
object[482] = new Triangle(new Point3D(-0.872470,-0.069004,
zOff-0.073281
), new Point3D(-0.886061,-0.070038,
zOff-0.114427
), new Point3D(-0.923196,-0.093532,
zOff-0.104461
));
object[483] = new Triangle(new Point3D(-0.923196,-0.093532,
zOff-0.104461
), new Point3D(-0.914784,-0.091375,
zOff-0.065062
), new Point3D(-0.872470,-0.069004,
zOff-0.073281
));
object[484] = new Triangle(new Point3D(0.909369,-0.089665,
zOff-0.046716
), new Point3D(0.872470,-0.069004,
zOff-0.073281
), new Point3D(0.851425,-0.053916,
zOff-0.031750
));
object[485] = new Triangle(new Point3D(0.851425,-0.053916,
zOff-0.031750
), new Point3D(0.890783,-0.076535,
zOff+0.002172
), new Point3D(0.909369,-0.089665,
zOff-0.046716
));
object[486] = new Triangle(new Point3D(-0.851425,-0.053916,
zOff-0.031749
), new Point3D(-0.872470,-0.069004,
zOff-0.073281
), new Point3D(-0.909369,-0.089665,
zOff-0.046716
));
object[487] = new Triangle(new Point3D(-0.909369,-0.089665,
zOff-0.046716
), new Point3D(-0.890783,-0.076535,
zOff+0.002173
), new Point3D(-0.851425,-0.053916,
zOff-0.031749
));
object[488] = new Triangle(new Point3D(0.857520,-0.126712,
zOff+0.001809
), new Point3D(0.816005,-0.102595,
zOff-0.030284
), new Point3D(0.845605,-0.107251,
zOff-0.073673
));
object[489] = new Triangle(new Point3D(0.845605,-0.107251,
zOff-0.073673
), new Point3D(0.881752,-0.131638,
zOff-0.049375
), new Point3D(0.857520,-0.126712,
zOff+0.001809
));
object[490] = new Triangle(new Point3D(-0.845605,-0.107251,
zOff-0.073674
), new Point3D(-0.816005,-0.102595,
zOff-0.030284
), new Point3D(-0.857520,-0.126712,
zOff+0.001809
));
object[491] = new Triangle(new Point3D(-0.857520,-0.126712,
zOff+0.001809
), new Point3D(-0.881752,-0.131638,
zOff-0.049375
), new Point3D(-0.845605,-0.107251,
zOff-0.073674
));
object[492] = new Triangle(new Point3D(0.886999,-0.133272,
zOff-0.067116
), new Point3D(0.845605,-0.107251,
zOff-0.073673
), new Point3D(0.859089,-0.108115,
zOff-0.116912
));
object[493] = new Triangle(new Point3D(0.859089,-0.108115,
zOff-0.116912
), new Point3D(0.897444,-0.132578,
zOff-0.107879
), new Point3D(0.886999,-0.133272,
zOff-0.067116
));
object[494] = new Triangle(new Point3D(-0.859089,-0.108115,
zOff-0.116911
), new Point3D(-0.845605,-0.107251,
zOff-0.073674
), new Point3D(-0.886999,-0.133272,
zOff-0.067117
));
object[495] = new Triangle(new Point3D(-0.886999,-0.133272,
zOff-0.067117
), new Point3D(-0.897444,-0.132578,
zOff-0.107879
), new Point3D(-0.859089,-0.108115,
zOff-0.116911
));
object[496] = new Triangle(new Point3D(0.898943,-0.131671,
zOff-0.123282
), new Point3D(0.859089,-0.108115,
zOff-0.116912
), new Point3D(0.868893,-0.103476,
zOff-0.170003
));
object[497] = new Triangle(new Point3D(0.868893,-0.103476,
zOff-0.170003
), new Point3D(0.904082,-0.125783,
zOff-0.173402
), new Point3D(0.898943,-0.131671,
zOff-0.123282
));
object[498] = new Triangle(new Point3D(-0.868893,-0.103476,
zOff-0.170002
), new Point3D(-0.859089,-0.108115,
zOff-0.116911
), new Point3D(-0.898943,-0.131671,
zOff-0.123282
));
object[499] = new Triangle(new Point3D(-0.898943,-0.131671,
zOff-0.123282
), new Point3D(-0.904082,-0.125783,
zOff-0.173401
), new Point3D(-0.868893,-0.103476,
zOff-0.170002
));
object[500] = new Triangle(new Point3D(0.816005,-0.102595,
zOff-0.030284
), new Point3D(0.851425,-0.053916,
zOff-0.031750
), new Point3D(0.872470,-0.069004,
zOff-0.073281
));
object[501] = new Triangle(new Point3D(0.872470,-0.069004,
zOff-0.073281
), new Point3D(0.845605,-0.107251,
zOff-0.073673
), new Point3D(0.816005,-0.102595,
zOff-0.030284
));
object[502] = new Triangle(new Point3D(-0.872470,-0.069004,
zOff-0.073281
), new Point3D(-0.851425,-0.053916,
zOff-0.031749
), new Point3D(-0.816005,-0.102595,
zOff-0.030284
));
object[503] = new Triangle(new Point3D(-0.816005,-0.102595,
zOff-0.030284
), new Point3D(-0.845605,-0.107251,
zOff-0.073674
), new Point3D(-0.872470,-0.069004,
zOff-0.073281
));
object[504] = new Triangle(new Point3D(0.845605,-0.107251,
zOff-0.073673
), new Point3D(0.872470,-0.069004,
zOff-0.073281
), new Point3D(0.886061,-0.070038,
zOff-0.114427
));
object[505] = new Triangle(new Point3D(0.886061,-0.070038,
zOff-0.114427
), new Point3D(0.859089,-0.108115,
zOff-0.116912
), new Point3D(0.845605,-0.107251,
zOff-0.073673
));
object[506] = new Triangle(new Point3D(-0.886061,-0.070038,
zOff-0.114427
), new Point3D(-0.872470,-0.069004,
zOff-0.073281
), new Point3D(-0.845605,-0.107251,
zOff-0.073674
));
object[507] = new Triangle(new Point3D(-0.845605,-0.107251,
zOff-0.073674
), new Point3D(-0.859089,-0.108115,
zOff-0.116911
), new Point3D(-0.886061,-0.070038,
zOff-0.114427
));
object[508] = new Triangle(new Point3D(0.859089,-0.108115,
zOff-0.116912
), new Point3D(0.886061,-0.070038,
zOff-0.114427
), new Point3D(0.893329,-0.069984,
zOff-0.164387
));
object[509] = new Triangle(new Point3D(0.893329,-0.069984,
zOff-0.164387
), new Point3D(0.868893,-0.103476,
zOff-0.170003
), new Point3D(0.859089,-0.108115,
zOff-0.116912
));
object[510] = new Triangle(new Point3D(-0.893329,-0.069984,
zOff-0.164387
), new Point3D(-0.886061,-0.070038,
zOff-0.114427
), new Point3D(-0.859089,-0.108115,
zOff-0.116911
));
object[511] = new Triangle(new Point3D(-0.859089,-0.108115,
zOff-0.116911
), new Point3D(-0.868893,-0.103476,
zOff-0.170002
), new Point3D(-0.893329,-0.069984,
zOff-0.164387
));
object[512] = new Triangle(new Point3D(0.890783,-0.076535,
zOff+0.002172
), new Point3D(0.857520,-0.126712,
zOff+0.001809
), new Point3D(0.881752,-0.131638,
zOff-0.049375
));
object[513] = new Triangle(new Point3D(0.881752,-0.131638,
zOff-0.049375
), new Point3D(0.909369,-0.089665,
zOff-0.046716
), new Point3D(0.890783,-0.076535,
zOff+0.002172
));
object[514] = new Triangle(new Point3D(-0.881752,-0.131638,
zOff-0.049375
), new Point3D(-0.857520,-0.126712,
zOff+0.001809
), new Point3D(-0.890783,-0.076535,
zOff+0.002173
));
object[515] = new Triangle(new Point3D(-0.890783,-0.076535,
zOff+0.002173
), new Point3D(-0.909369,-0.089665,
zOff-0.046716
), new Point3D(-0.881752,-0.131638,
zOff-0.049375
));
object[516] = new Triangle(new Point3D(0.914784,-0.091375,
zOff-0.065062
), new Point3D(0.886999,-0.133272,
zOff-0.067116
), new Point3D(0.897444,-0.132578,
zOff-0.107879
));
object[517] = new Triangle(new Point3D(0.897444,-0.132578,
zOff-0.107879
), new Point3D(0.923196,-0.093532,
zOff-0.104461
), new Point3D(0.914784,-0.091375,
zOff-0.065062
));
object[518] = new Triangle(new Point3D(-0.897444,-0.132578,
zOff-0.107879
), new Point3D(-0.886999,-0.133272,
zOff-0.067117
), new Point3D(-0.914784,-0.091375,
zOff-0.065062
));
object[519] = new Triangle(new Point3D(-0.914784,-0.091375,
zOff-0.065062
), new Point3D(-0.923196,-0.093532,
zOff-0.104461
), new Point3D(-0.897444,-0.132578,
zOff-0.107879
));
object[520] = new Triangle(new Point3D(0.924657,-0.092679,
zOff-0.119837
), new Point3D(0.898943,-0.131671,
zOff-0.123282
), new Point3D(0.904082,-0.125783,
zOff-0.173402
));
object[521] = new Triangle(new Point3D(0.904082,-0.125783,
zOff-0.173402
), new Point3D(0.928842,-0.090227,
zOff-0.168959
), new Point3D(0.924657,-0.092679,
zOff-0.119837
));
object[522] = new Triangle(new Point3D(-0.904082,-0.125783,
zOff-0.173401
), new Point3D(-0.898943,-0.131671,
zOff-0.123282
), new Point3D(-0.924657,-0.092679,
zOff-0.119836
));
object[523] = new Triangle(new Point3D(-0.924657,-0.092679,
zOff-0.119836
), new Point3D(-0.928842,-0.090227,
zOff-0.168958
), new Point3D(-0.904082,-0.125783,
zOff-0.173401
));
object[524] = new Triangle(new Point3D(0.934326,-0.014302,
zOff-0.130906
), new Point3D(0.924344,-0.057588,
zOff-0.136249
), new Point3D(0.915807,-0.049220,
zOff-0.186452
));
object[525] = new Triangle(new Point3D(0.915807,-0.049220,
zOff-0.186452
), new Point3D(0.924467,-0.008582,
zOff-0.180122
), new Point3D(0.934326,-0.014302,
zOff-0.130906
));
object[526] = new Triangle(new Point3D(-0.915807,-0.049220,
zOff-0.186452
), new Point3D(-0.924344,-0.057588,
zOff-0.136249
), new Point3D(-0.934326,-0.014302,
zOff-0.130906
));
object[527] = new Triangle(new Point3D(-0.934326,-0.014302,
zOff-0.130906
), new Point3D(-0.924467,-0.008582,
zOff-0.180123
), new Point3D(-0.915807,-0.049220,
zOff-0.186452
));
object[528] = new Triangle(new Point3D(0.931904,-0.019178,
zOff-0.055940
), new Point3D(0.922778,-0.065860,
zOff-0.063571
), new Point3D(0.925565,-0.059840,
zOff-0.118803
));
object[529] = new Triangle(new Point3D(0.925565,-0.059840,
zOff-0.118803
), new Point3D(0.935451,-0.016360,
zOff-0.113621
), new Point3D(0.931904,-0.019178,
zOff-0.055940
));
object[530] = new Triangle(new Point3D(-0.925565,-0.059840,
zOff-0.118803
), new Point3D(-0.922778,-0.065860,
zOff-0.063571
), new Point3D(-0.931904,-0.019178,
zOff-0.055940
));
object[531] = new Triangle(new Point3D(-0.931904,-0.019178,
zOff-0.055940
), new Point3D(-0.935451,-0.016360,
zOff-0.113621
), new Point3D(-0.925565,-0.059840,
zOff-0.118803
));
object[532] = new Triangle(new Point3D(0.880991,-0.048545,
zOff-0.121215
), new Point3D(0.891699,-0.007282,
zOff-0.116976
), new Point3D(0.885535,-0.002735,
zOff-0.169618
));
object[533] = new Triangle(new Point3D(0.885535,-0.002735,
zOff-0.169618
), new Point3D(0.876022,-0.040388,
zOff-0.175666
), new Point3D(0.880991,-0.048545,
zOff-0.121215
));
object[534] = new Triangle(new Point3D(-0.885535,-0.002735,
zOff-0.169618
), new Point3D(-0.891699,-0.007282,
zOff-0.116976
), new Point3D(-0.880991,-0.048545,
zOff-0.121215
));
object[535] = new Triangle(new Point3D(-0.880991,-0.048545,
zOff-0.121215
), new Point3D(-0.876022,-0.040388,
zOff-0.175666
), new Point3D(-0.885535,-0.002735,
zOff-0.169618
));
object[536] = new Triangle(new Point3D(0.874218,-0.054604,
zOff-0.068224
), new Point3D(0.882672,-0.012151,
zOff-0.061499
), new Point3D(0.891699,-0.007282,
zOff-0.116976
));
object[537] = new Triangle(new Point3D(0.891699,-0.007282,
zOff-0.116976
), new Point3D(0.880991,-0.048545,
zOff-0.121215
), new Point3D(0.874218,-0.054604,
zOff-0.068224
));
object[538] = new Triangle(new Point3D(-0.891699,-0.007282,
zOff-0.116976
), new Point3D(-0.882672,-0.012151,
zOff-0.061499
), new Point3D(-0.874218,-0.054604,
zOff-0.068224
));
object[539] = new Triangle(new Point3D(-0.874218,-0.054604,
zOff-0.068224
), new Point3D(-0.880991,-0.048545,
zOff-0.121215
), new Point3D(-0.891699,-0.007282,
zOff-0.116976
));
object[540] = new Triangle(new Point3D(0.924344,-0.057588,
zOff-0.136249
), new Point3D(0.880991,-0.048545,
zOff-0.121215
), new Point3D(0.876022,-0.040388,
zOff-0.175666
));
object[541] = new Triangle(new Point3D(0.876022,-0.040388,
zOff-0.175666
), new Point3D(0.915807,-0.049220,
zOff-0.186452
), new Point3D(0.924344,-0.057588,
zOff-0.136249
));
object[542] = new Triangle(new Point3D(-0.876022,-0.040388,
zOff-0.175666
), new Point3D(-0.880991,-0.048545,
zOff-0.121215
), new Point3D(-0.924344,-0.057588,
zOff-0.136249
));
object[543] = new Triangle(new Point3D(-0.924344,-0.057588,
zOff-0.136249
), new Point3D(-0.915807,-0.049220,
zOff-0.186452
), new Point3D(-0.876022,-0.040388,
zOff-0.175666
));
object[544] = new Triangle(new Point3D(0.922778,-0.065860,
zOff-0.063571
), new Point3D(0.874218,-0.054604,
zOff-0.068224
), new Point3D(0.880991,-0.048545,
zOff-0.121215
));
object[545] = new Triangle(new Point3D(0.880991,-0.048545,
zOff-0.121215
), new Point3D(0.925565,-0.059840,
zOff-0.118803
), new Point3D(0.922778,-0.065860,
zOff-0.063571
));
object[546] = new Triangle(new Point3D(-0.880991,-0.048545,
zOff-0.121215
), new Point3D(-0.874218,-0.054604,
zOff-0.068224
), new Point3D(-0.922778,-0.065860,
zOff-0.063571
));
object[547] = new Triangle(new Point3D(-0.922778,-0.065860,
zOff-0.063571
), new Point3D(-0.925565,-0.059840,
zOff-0.118803
), new Point3D(-0.880991,-0.048545,
zOff-0.121215
));
object[548] = new Triangle(new Point3D(0.935451,-0.016360,
zOff-0.113621
), new Point3D(0.891699,-0.007282,
zOff-0.116976
), new Point3D(0.882672,-0.012151,
zOff-0.061499
));
object[549] = new Triangle(new Point3D(0.882672,-0.012151,
zOff-0.061499
), new Point3D(0.931904,-0.019178,
zOff-0.055940
), new Point3D(0.935451,-0.016360,
zOff-0.113621
));
object[550] = new Triangle(new Point3D(-0.882672,-0.012151,
zOff-0.061499
), new Point3D(-0.891699,-0.007282,
zOff-0.116976
), new Point3D(-0.935451,-0.016360,
zOff-0.113621
));
object[551] = new Triangle(new Point3D(-0.935451,-0.016360,
zOff-0.113621
), new Point3D(-0.931904,-0.019178,
zOff-0.055940
), new Point3D(-0.882672,-0.012151,
zOff-0.061499
));
object[552] = new Triangle(new Point3D(0.924467,-0.008582,
zOff-0.180122
), new Point3D(0.885535,-0.002735,
zOff-0.169618
), new Point3D(0.891699,-0.007282,
zOff-0.116976
));
object[553] = new Triangle(new Point3D(0.891699,-0.007282,
zOff-0.116976
), new Point3D(0.934326,-0.014302,
zOff-0.130906
), new Point3D(0.924467,-0.008582,
zOff-0.180122
));
object[554] = new Triangle(new Point3D(-0.891699,-0.007282,
zOff-0.116976
), new Point3D(-0.885535,-0.002735,
zOff-0.169618
), new Point3D(-0.924467,-0.008582,
zOff-0.180123
));
object[555] = new Triangle(new Point3D(-0.924467,-0.008582,
zOff-0.180123
), new Point3D(-0.934326,-0.014302,
zOff-0.130906
), new Point3D(-0.891699,-0.007282,
zOff-0.116976
));
object[556] = new Triangle(new Point3D(0.915807,-0.049220,
zOff-0.186452
), new Point3D(0.876022,-0.040388,
zOff-0.175666
), new Point3D(0.885535,-0.002735,
zOff-0.169618
));
object[557] = new Triangle(new Point3D(0.885535,-0.002735,
zOff-0.169618
), new Point3D(0.924467,-0.008582,
zOff-0.180122
), new Point3D(0.915807,-0.049220,
zOff-0.186452
));
object[558] = new Triangle(new Point3D(-0.885535,-0.002735,
zOff-0.169618
), new Point3D(-0.876022,-0.040388,
zOff-0.175666
), new Point3D(-0.915807,-0.049220,
zOff-0.186452
));
object[559] = new Triangle(new Point3D(-0.915807,-0.049220,
zOff-0.186452
), new Point3D(-0.924467,-0.008582,
zOff-0.180123
), new Point3D(-0.885535,-0.002735,
zOff-0.169618
));
object[560] = new Triangle(new Point3D(0.890783,-0.076535,
zOff+0.002172
), new Point3D(0.915533,-0.068232,
zOff-0.045916
), new Point3D(0.926274,-0.021134,
zOff-0.038342
));
object[561] = new Triangle(new Point3D(0.926274,-0.021134,
zOff-0.038342
), new Point3D(0.913551,-0.026340,
zOff+0.009332
), new Point3D(0.890783,-0.076535,
zOff+0.002172
));
object[562] = new Triangle(new Point3D(-0.926274,-0.021134,
zOff-0.038341
), new Point3D(-0.915533,-0.068232,
zOff-0.045915
), new Point3D(-0.890783,-0.076535,
zOff+0.002173
));
object[563] = new Triangle(new Point3D(-0.890783,-0.076535,
zOff+0.002173
), new Point3D(-0.913551,-0.026340,
zOff+0.009333
), new Point3D(-0.926274,-0.021134,
zOff-0.038341
));
object[564] = new Triangle(new Point3D(0.913551,-0.026340,
zOff+0.009332
), new Point3D(0.926274,-0.021134,
zOff-0.038342
), new Point3D(0.882672,-0.012151,
zOff-0.061499
));
object[565] = new Triangle(new Point3D(0.882672,-0.012151,
zOff-0.061499
), new Point3D(0.869531,-0.002747,
zOff-0.026810
), new Point3D(0.913551,-0.026340,
zOff+0.009332
));
object[566] = new Triangle(new Point3D(-0.882672,-0.012151,
zOff-0.061499
), new Point3D(-0.926274,-0.021134,
zOff-0.038341
), new Point3D(-0.913551,-0.026340,
zOff+0.009333
));
object[567] = new Triangle(new Point3D(-0.913551,-0.026340,
zOff+0.009333
), new Point3D(-0.869531,-0.002747,
zOff-0.026810
), new Point3D(-0.882672,-0.012151,
zOff-0.061499
));
object[568] = new Triangle(new Point3D(0.869531,-0.002747,
zOff-0.026810
), new Point3D(0.882672,-0.012151,
zOff-0.061499
), new Point3D(0.874218,-0.054604,
zOff-0.068224
));
object[569] = new Triangle(new Point3D(0.874218,-0.054604,
zOff-0.068224
), new Point3D(0.851425,-0.053916,
zOff-0.031750
), new Point3D(0.869531,-0.002747,
zOff-0.026810
));
object[570] = new Triangle(new Point3D(-0.874218,-0.054604,
zOff-0.068224
), new Point3D(-0.882672,-0.012151,
zOff-0.061499
), new Point3D(-0.869531,-0.002747,
zOff-0.026810
));
object[571] = new Triangle(new Point3D(-0.869531,-0.002747,
zOff-0.026810
), new Point3D(-0.851425,-0.053916,
zOff-0.031749
), new Point3D(-0.874218,-0.054604,
zOff-0.068224
));
object[572] = new Triangle(new Point3D(0.851425,-0.053916,
zOff-0.031750
), new Point3D(0.874218,-0.054604,
zOff-0.068224
), new Point3D(0.915533,-0.068232,
zOff-0.045916
));
object[573] = new Triangle(new Point3D(0.915533,-0.068232,
zOff-0.045916
), new Point3D(0.890783,-0.076535,
zOff+0.002172
), new Point3D(0.851425,-0.053916,
zOff-0.031750
));
object[574] = new Triangle(new Point3D(-0.915533,-0.068232,
zOff-0.045915
), new Point3D(-0.874218,-0.054604,
zOff-0.068224
), new Point3D(-0.851425,-0.053916,
zOff-0.031749
));
object[575] = new Triangle(new Point3D(-0.851425,-0.053916,
zOff-0.031749
), new Point3D(-0.890783,-0.076535,
zOff+0.002173
), new Point3D(-0.915533,-0.068232,
zOff-0.045915
));
object[576] = new Triangle(new Point3D(0.930028,0.047256,
zOff-0.110419
), new Point3D(0.923182,0.000863,
zOff-0.117397
), new Point3D(0.911332,0.007575,
zOff-0.164284
));
object[577] = new Triangle(new Point3D(0.911332,0.007575,
zOff-0.164284
), new Point3D(0.917762,0.051336,
zOff-0.159128
), new Point3D(0.930028,0.047256,
zOff-0.110419
));
object[578] = new Triangle(new Point3D(-0.911332,0.007575,
zOff-0.164284
), new Point3D(-0.923182,0.000863,
zOff-0.117397
), new Point3D(-0.930028,0.047256,
zOff-0.110419
));
object[579] = new Triangle(new Point3D(-0.930028,0.047256,
zOff-0.110419
), new Point3D(-0.917762,0.051336,
zOff-0.159128
), new Point3D(-0.911332,0.007575,
zOff-0.164284
));
object[580] = new Triangle(new Point3D(0.879924,0.001696,
zOff-0.100672
), new Point3D(0.887725,0.046715,
zOff-0.093090
), new Point3D(0.877864,0.052309,
zOff-0.151417
));
object[581] = new Triangle(new Point3D(0.877864,0.052309,
zOff-0.151417
), new Point3D(0.870460,0.010534,
zOff-0.156030
), new Point3D(0.879924,0.001696,
zOff-0.100672
));
object[582] = new Triangle(new Point3D(-0.877864,0.052309,
zOff-0.151417
), new Point3D(-0.887725,0.046715,
zOff-0.093089
), new Point3D(-0.879924,0.001696,
zOff-0.100672
));
object[583] = new Triangle(new Point3D(-0.879924,0.001696,
zOff-0.100672
), new Point3D(-0.870460,0.010534,
zOff-0.156030
), new Point3D(-0.877864,0.052309,
zOff-0.151417
));
object[584] = new Triangle(new Point3D(0.923182,0.000863,
zOff-0.117397
), new Point3D(0.879924,0.001696,
zOff-0.100672
), new Point3D(0.870460,0.010534,
zOff-0.156030
));
object[585] = new Triangle(new Point3D(0.870460,0.010534,
zOff-0.156030
), new Point3D(0.911332,0.007575,
zOff-0.164284
), new Point3D(0.923182,0.000863,
zOff-0.117397
));
object[586] = new Triangle(new Point3D(-0.870460,0.010534,
zOff-0.156030
), new Point3D(-0.879924,0.001696,
zOff-0.100672
), new Point3D(-0.923182,0.000863,
zOff-0.117397
));
object[587] = new Triangle(new Point3D(-0.923182,0.000863,
zOff-0.117397
), new Point3D(-0.911332,0.007575,
zOff-0.164284
), new Point3D(-0.870460,0.010534,
zOff-0.156030
));
object[588] = new Triangle(new Point3D(0.917762,0.051336,
zOff-0.159128
), new Point3D(0.877864,0.052309,
zOff-0.151417
), new Point3D(0.887725,0.046715,
zOff-0.093090
));
object[589] = new Triangle(new Point3D(0.887725,0.046715,
zOff-0.093090
), new Point3D(0.930028,0.047256,
zOff-0.110419
), new Point3D(0.917762,0.051336,
zOff-0.159128
));
object[590] = new Triangle(new Point3D(-0.887725,0.046715,
zOff-0.093089
), new Point3D(-0.877864,0.052309,
zOff-0.151417
), new Point3D(-0.917762,0.051336,
zOff-0.159128
));
object[591] = new Triangle(new Point3D(-0.917762,0.051336,
zOff-0.159128
), new Point3D(-0.930028,0.047256,
zOff-0.110419
), new Point3D(-0.887725,0.046715,
zOff-0.093089
));
object[592] = new Triangle(new Point3D(0.911332,0.007575,
zOff-0.164284
), new Point3D(0.870460,0.010534,
zOff-0.156030
), new Point3D(0.877864,0.052309,
zOff-0.151417
));
object[593] = new Triangle(new Point3D(0.877864,0.052309,
zOff-0.151417
), new Point3D(0.917762,0.051336,
zOff-0.159128
), new Point3D(0.911332,0.007575,
zOff-0.164284
));
object[594] = new Triangle(new Point3D(-0.877864,0.052309,
zOff-0.151417
), new Point3D(-0.870460,0.010534,
zOff-0.156030
), new Point3D(-0.911332,0.007575,
zOff-0.164284
));
object[595] = new Triangle(new Point3D(-0.911332,0.007575,
zOff-0.164284
), new Point3D(-0.917762,0.051336,
zOff-0.159128
), new Point3D(-0.877864,0.052309,
zOff-0.151417
));
object[596] = new Triangle(new Point3D(0.884938,0.042996,
zOff-0.047707
), new Point3D(0.876585,0.049663,
zOff-0.014039
), new Point3D(0.913883,0.041131,
zOff+0.020477
));
object[597] = new Triangle(new Point3D(0.913883,0.041131,
zOff+0.020477
), new Point3D(0.930286,0.040229,
zOff-0.029159
), new Point3D(0.884938,0.042996,
zOff-0.047707
));
object[598] = new Triangle(new Point3D(-0.913883,0.041131,
zOff+0.020477
), new Point3D(-0.876585,0.049663,
zOff-0.014039
), new Point3D(-0.884938,0.042996,
zOff-0.047706
));
object[599] = new Triangle(new Point3D(-0.884938,0.042996,
zOff-0.047706
), new Point3D(-0.930286,0.040229,
zOff-0.029158
), new Point3D(-0.913883,0.041131,
zOff+0.020477
));
object[600] = new Triangle(new Point3D(0.930286,0.040229,
zOff-0.029159
), new Point3D(0.913883,0.041131,
zOff+0.020477
), new Point3D(0.913551,-0.026340,
zOff+0.009332
));
object[601] = new Triangle(new Point3D(0.913551,-0.026340,
zOff+0.009332
), new Point3D(0.926456,-0.013339,
zOff-0.038230
), new Point3D(0.930286,0.040229,
zOff-0.029159
));
object[602] = new Triangle(new Point3D(-0.913551,-0.026340,
zOff+0.009333
), new Point3D(-0.913883,0.041131,
zOff+0.020477
), new Point3D(-0.930286,0.040229,
zOff-0.029158
));
object[603] = new Triangle(new Point3D(-0.930286,0.040229,
zOff-0.029158
), new Point3D(-0.926456,-0.013339,
zOff-0.038229
), new Point3D(-0.913551,-0.026340,
zOff+0.009333
));
object[604] = new Triangle(new Point3D(0.926456,-0.013339,
zOff-0.038230
), new Point3D(0.913551,-0.026340,
zOff+0.009332
), new Point3D(0.869531,-0.002747,
zOff-0.026810
));
object[605] = new Triangle(new Point3D(0.869531,-0.002747,
zOff-0.026810
), new Point3D(0.880647,-0.005964,
zOff-0.055155
), new Point3D(0.926456,-0.013339,
zOff-0.038230
));
object[606] = new Triangle(new Point3D(-0.869531,-0.002747,
zOff-0.026810
), new Point3D(-0.913551,-0.026340,
zOff+0.009333
), new Point3D(-0.926456,-0.013339,
zOff-0.038229
));
object[607] = new Triangle(new Point3D(-0.926456,-0.013339,
zOff-0.038229
), new Point3D(-0.880647,-0.005964,
zOff-0.055154
), new Point3D(-0.869531,-0.002747,
zOff-0.026810
));
object[608] = new Triangle(new Point3D(0.880647,-0.005964,
zOff-0.055155
), new Point3D(0.869531,-0.002747,
zOff-0.026810
), new Point3D(0.876585,0.049663,
zOff-0.014039
));
object[609] = new Triangle(new Point3D(0.876585,0.049663,
zOff-0.014039
), new Point3D(0.884938,0.042996,
zOff-0.047707
), new Point3D(0.880647,-0.005964,
zOff-0.055155
));
object[610] = new Triangle(new Point3D(-0.876585,0.049663,
zOff-0.014039
), new Point3D(-0.869531,-0.002747,
zOff-0.026810
), new Point3D(-0.880647,-0.005964,
zOff-0.055154
));
object[611] = new Triangle(new Point3D(-0.880647,-0.005964,
zOff-0.055154
), new Point3D(-0.884938,0.042996,
zOff-0.047706
), new Point3D(-0.876585,0.049663,
zOff-0.014039
));
object[612] = new Triangle(new Point3D(0.872272,0.066362,
zOff-0.132447
), new Point3D(0.841689,0.058614,
zOff-0.117143
), new Point3D(0.838396,0.093932,
zOff-0.112323
));
object[613] = new Triangle(new Point3D(0.838396,0.093932,
zOff-0.112323
), new Point3D(0.867865,0.103032,
zOff-0.126860
), new Point3D(0.872272,0.066362,
zOff-0.132447
));
object[614] = new Triangle(new Point3D(-0.838396,0.093932,
zOff-0.112324
), new Point3D(-0.841689,0.058614,
zOff-0.117144
), new Point3D(-0.872272,0.066362,
zOff-0.132448
));
object[615] = new Triangle(new Point3D(-0.872272,0.066362,
zOff-0.132448
), new Point3D(-0.867865,0.103032,
zOff-0.126861
), new Point3D(-0.838396,0.093932,
zOff-0.112324
));
object[616] = new Triangle(new Point3D(0.871623,0.084404,
zOff+0.004520
), new Point3D(0.898914,0.079733,
zOff+0.029920
), new Point3D(0.907084,0.096095,
zOff-0.023918
));
object[617] = new Triangle(new Point3D(0.907084,0.096095,
zOff-0.023918
), new Point3D(0.868451,0.088358,
zOff-0.030286
), new Point3D(0.871623,0.084404,
zOff+0.004520
));
object[618] = new Triangle(new Point3D(-0.907084,0.096095,
zOff-0.023918
), new Point3D(-0.898914,0.079733,
zOff+0.029920
), new Point3D(-0.871623,0.084404,
zOff+0.004520
));
object[619] = new Triangle(new Point3D(-0.871623,0.084404,
zOff+0.004520
), new Point3D(-0.868451,0.088358,
zOff-0.030286
), new Point3D(-0.907084,0.096095,
zOff-0.023918
));
object[620] = new Triangle(new Point3D(0.913883,0.041131,
zOff+0.020477
), new Point3D(0.876585,0.049663,
zOff-0.014039
), new Point3D(0.875267,0.048049,
zOff-0.038496
));
object[621] = new Triangle(new Point3D(0.875267,0.048049,
zOff-0.038496
), new Point3D(0.915765,0.053483,
zOff-0.033598
), new Point3D(0.913883,0.041131,
zOff+0.020477
));
object[622] = new Triangle(new Point3D(-0.875267,0.048049,
zOff-0.038496
), new Point3D(-0.876585,0.049663,
zOff-0.014039
), new Point3D(-0.913883,0.041131,
zOff+0.020477
));
object[623] = new Triangle(new Point3D(-0.913883,0.041131,
zOff+0.020477
), new Point3D(-0.915765,0.053483,
zOff-0.033598
), new Point3D(-0.875267,0.048049,
zOff-0.038496
));
object[624] = new Triangle(new Point3D(0.913883,0.041131,
zOff+0.020477
), new Point3D(0.915765,0.053483,
zOff-0.033598
), new Point3D(0.907084,0.096095,
zOff-0.023918
));
object[625] = new Triangle(new Point3D(0.907084,0.096095,
zOff-0.023918
), new Point3D(0.898914,0.079733,
zOff+0.029920
), new Point3D(0.913883,0.041131,
zOff+0.020477
));
object[626] = new Triangle(new Point3D(-0.907084,0.096095,
zOff-0.023918
), new Point3D(-0.915765,0.053483,
zOff-0.033598
), new Point3D(-0.913883,0.041131,
zOff+0.020477
));
object[627] = new Triangle(new Point3D(-0.913883,0.041131,
zOff+0.020477
), new Point3D(-0.898914,0.079733,
zOff+0.029920
), new Point3D(-0.907084,0.096095,
zOff-0.023918
));
object[628] = new Triangle(new Point3D(0.876585,0.049663,
zOff-0.014039
), new Point3D(0.871623,0.084404,
zOff+0.004520
), new Point3D(0.868451,0.088358,
zOff-0.030286
));
object[629] = new Triangle(new Point3D(0.868451,0.088358,
zOff-0.030286
), new Point3D(0.875267,0.048049,
zOff-0.038496
), new Point3D(0.876585,0.049663,
zOff-0.014039
));
object[630] = new Triangle(new Point3D(-0.868451,0.088358,
zOff-0.030286
), new Point3D(-0.871623,0.084404,
zOff+0.004520
), new Point3D(-0.876585,0.049663,
zOff-0.014039
));
object[631] = new Triangle(new Point3D(-0.876585,0.049663,
zOff-0.014039
), new Point3D(-0.875267,0.048049,
zOff-0.038496
), new Point3D(-0.868451,0.088358,
zOff-0.030286
));
object[632] = new Triangle(new Point3D(0.312324,0.053440,
zOff+0.620866
), new Point3D(0.328537,0.093982,
zOff+0.588552
), new Point3D(0.340443,0.011664,
zOff+0.592548
));
object[633] = new Triangle(new Point3D(0.340443,0.011664,
zOff+0.592548
), new Point3D(0.315312,-0.018489,
zOff+0.648782
), new Point3D(0.312324,0.053440,
zOff+0.620866
));
object[634] = new Triangle(new Point3D(-0.340443,0.011664,
zOff+0.592548
), new Point3D(-0.328537,0.093982,
zOff+0.588551
), new Point3D(-0.312324,0.053440,
zOff+0.620865
));
object[635] = new Triangle(new Point3D(-0.312324,0.053440,
zOff+0.620865
), new Point3D(-0.315312,-0.018489,
zOff+0.648782
), new Point3D(-0.340443,0.011664,
zOff+0.592548
));
object[636] = new Triangle(new Point3D(0.328537,0.093982,
zOff+0.588552
), new Point3D(0.393520,0.113739,
zOff+0.531108
), new Point3D(0.404221,0.031526,
zOff+0.530328
));
object[637] = new Triangle(new Point3D(0.404221,0.031526,
zOff+0.530328
), new Point3D(0.340443,0.011664,
zOff+0.592548
), new Point3D(0.328537,0.093982,
zOff+0.588552
));
object[638] = new Triangle(new Point3D(-0.404221,0.031526,
zOff+0.530327
), new Point3D(-0.393520,0.113739,
zOff+0.531108
), new Point3D(-0.328537,0.093982,
zOff+0.588551
));
object[639] = new Triangle(new Point3D(-0.328537,0.093982,
zOff+0.588551
), new Point3D(-0.340443,0.011664,
zOff+0.592548
), new Point3D(-0.404221,0.031526,
zOff+0.530327
));
object[640] = new Triangle(new Point3D(0.331472,-0.048284,
zOff+0.703058
), new Point3D(0.374474,-0.032603,
zOff+0.635550
), new Point3D(0.424676,-0.012678,
zOff+0.704165
));
object[641] = new Triangle(new Point3D(0.424676,-0.012678,
zOff+0.704165
), new Point3D(0.367449,-0.018489,
zOff+0.797669
), new Point3D(0.331472,-0.048284,
zOff+0.703058
));
object[642] = new Triangle(new Point3D(-0.424676,-0.012678,
zOff+0.704165
), new Point3D(-0.374474,-0.032603,
zOff+0.635549
), new Point3D(-0.331472,-0.048284,
zOff+0.703058
));
object[643] = new Triangle(new Point3D(-0.331472,-0.048284,
zOff+0.703058
), new Point3D(-0.367449,-0.018489,
zOff+0.797669
), new Point3D(-0.424676,-0.012678,
zOff+0.704165
));
object[644] = new Triangle(new Point3D(0.374474,-0.032603,
zOff+0.635550
), new Point3D(0.439654,-0.014020,
zOff+0.552722
), new Point3D(0.492976,0.003544,
zOff+0.590183
));
object[645] = new Triangle(new Point3D(0.492976,0.003544,
zOff+0.590183
), new Point3D(0.424676,-0.012678,
zOff+0.704165
), new Point3D(0.374474,-0.032603,
zOff+0.635550
));
object[646] = new Triangle(new Point3D(-0.492976,0.003544,
zOff+0.590183
), new Point3D(-0.439654,-0.014020,
zOff+0.552721
), new Point3D(-0.374474,-0.032603,
zOff+0.635549
));
object[647] = new Triangle(new Point3D(-0.374474,-0.032603,
zOff+0.635549
), new Point3D(-0.424676,-0.012678,
zOff+0.704165
), new Point3D(-0.492976,0.003544,
zOff+0.590183
));
object[648] = new Triangle(new Point3D(0.315312,-0.018489,
zOff+0.648782
), new Point3D(0.340443,0.011664,
zOff+0.592548
), new Point3D(0.374474,-0.032603,
zOff+0.635550
));
object[649] = new Triangle(new Point3D(0.374474,-0.032603,
zOff+0.635550
), new Point3D(0.331472,-0.048284,
zOff+0.703058
), new Point3D(0.315312,-0.018489,
zOff+0.648782
));
object[650] = new Triangle(new Point3D(-0.374474,-0.032603,
zOff+0.635549
), new Point3D(-0.340443,0.011664,
zOff+0.592548
), new Point3D(-0.315312,-0.018489,
zOff+0.648782
));
object[651] = new Triangle(new Point3D(-0.315312,-0.018489,
zOff+0.648782
), new Point3D(-0.331472,-0.048284,
zOff+0.703058
), new Point3D(-0.374474,-0.032603,
zOff+0.635549
));
object[652] = new Triangle(new Point3D(0.340443,0.011664,
zOff+0.592548
), new Point3D(0.404221,0.031526,
zOff+0.530328
), new Point3D(0.439654,-0.014020,
zOff+0.552722
));
object[653] = new Triangle(new Point3D(0.439654,-0.014020,
zOff+0.552722
), new Point3D(0.374474,-0.032603,
zOff+0.635550
), new Point3D(0.340443,0.011664,
zOff+0.592548
));
object[654] = new Triangle(new Point3D(-0.439654,-0.014020,
zOff+0.552721
), new Point3D(-0.404221,0.031526,
zOff+0.530327
), new Point3D(-0.340443,0.011664,
zOff+0.592548
));
object[655] = new Triangle(new Point3D(-0.340443,0.011664,
zOff+0.592548
), new Point3D(-0.374474,-0.032603,
zOff+0.635549
), new Point3D(-0.439654,-0.014020,
zOff+0.552721
));
object[656] = new Triangle(new Point3D(0.321812,0.144385,
zOff+0.648789
), new Point3D(0.352394,0.161522,
zOff+0.643571
), new Point3D(0.328537,0.093982,
zOff+0.588552
));
object[657] = new Triangle(new Point3D(0.328537,0.093982,
zOff+0.588552
), new Point3D(0.312324,0.053440,
zOff+0.620866
), new Point3D(0.321812,0.144385,
zOff+0.648789
));
object[658] = new Triangle(new Point3D(-0.328537,0.093982,
zOff+0.588551
), new Point3D(-0.352394,0.161522,
zOff+0.643571
), new Point3D(-0.321812,0.144385,
zOff+0.648789
));
object[659] = new Triangle(new Point3D(-0.321812,0.144385,
zOff+0.648789
), new Point3D(-0.312324,0.053440,
zOff+0.620865
), new Point3D(-0.328537,0.093982,
zOff+0.588551
));
object[660] = new Triangle(new Point3D(0.352394,0.161522,
zOff+0.643571
), new Point3D(0.421928,0.179342,
zOff+0.565824
), new Point3D(0.393520,0.113739,
zOff+0.531108
));
object[661] = new Triangle(new Point3D(0.393520,0.113739,
zOff+0.531108
), new Point3D(0.328537,0.093982,
zOff+0.588552
), new Point3D(0.352394,0.161522,
zOff+0.643571
));
object[662] = new Triangle(new Point3D(-0.393520,0.113739,
zOff+0.531108
), new Point3D(-0.421928,0.179342,
zOff+0.565823
), new Point3D(-0.352394,0.161522,
zOff+0.643571
));
object[663] = new Triangle(new Point3D(-0.352394,0.161522,
zOff+0.643571
), new Point3D(-0.328537,0.093982,
zOff+0.588551
), new Point3D(-0.393520,0.113739,
zOff+0.531108
));
object[664] = new Triangle(new Point3D(0.367449,-0.018489,
zOff+0.797669
), new Point3D(0.424676,-0.012678,
zOff+0.704165
), new Point3D(0.437231,0.052726,
zOff+0.746681
));
object[665] = new Triangle(new Point3D(0.437231,0.052726,
zOff+0.746681
), new Point3D(0.394331,0.053440,
zOff+0.791861
), new Point3D(0.367449,-0.018489,
zOff+0.797669
));
object[666] = new Triangle(new Point3D(-0.437231,0.052726,
zOff+0.746680
), new Point3D(-0.424676,-0.012678,
zOff+0.704165
), new Point3D(-0.367449,-0.018489,
zOff+0.797669
));
object[667] = new Triangle(new Point3D(-0.367449,-0.018489,
zOff+0.797669
), new Point3D(-0.394331,0.053440,
zOff+0.791861
), new Point3D(-0.437231,0.052726,
zOff+0.746680
));
object[668] = new Triangle(new Point3D(0.424676,-0.012678,
zOff+0.704165
), new Point3D(0.492976,0.003544,
zOff+0.590183
), new Point3D(0.509757,0.067456,
zOff+0.618649
));
object[669] = new Triangle(new Point3D(0.509757,0.067456,
zOff+0.618649
), new Point3D(0.437231,0.052726,
zOff+0.746681
), new Point3D(0.424676,-0.012678,
zOff+0.704165
));
object[670] = new Triangle(new Point3D(-0.509757,0.067456,
zOff+0.618649
), new Point3D(-0.492976,0.003544,
zOff+0.590183
), new Point3D(-0.424676,-0.012678,
zOff+0.704165
));
object[671] = new Triangle(new Point3D(-0.424676,-0.012678,
zOff+0.704165
), new Point3D(-0.437231,0.052726,
zOff+0.746680
), new Point3D(-0.509757,0.067456,
zOff+0.618649
));
object[672] = new Triangle(new Point3D(0.394331,0.053440,
zOff+0.791861
), new Point3D(0.437231,0.052726,
zOff+0.746681
), new Point3D(0.424655,0.134181,
zOff+0.745739
));
object[673] = new Triangle(new Point3D(0.424655,0.134181,
zOff+0.745739
), new Point3D(0.373728,0.136713,
zOff+0.790792
), new Point3D(0.394331,0.053440,
zOff+0.791861
));
object[674] = new Triangle(new Point3D(-0.424655,0.134181,
zOff+0.745739
), new Point3D(-0.437231,0.052726,
zOff+0.746680
), new Point3D(-0.394331,0.053440,
zOff+0.791861
));
object[675] = new Triangle(new Point3D(-0.394331,0.053440,
zOff+0.791861
), new Point3D(-0.373728,0.136713,
zOff+0.790792
), new Point3D(-0.424655,0.134181,
zOff+0.745739
));
object[676] = new Triangle(new Point3D(0.437231,0.052726,
zOff+0.746681
), new Point3D(0.509757,0.067456,
zOff+0.618649
), new Point3D(0.498835,0.148736,
zOff+0.621847
));
object[677] = new Triangle(new Point3D(0.498835,0.148736,
zOff+0.621847
), new Point3D(0.424655,0.134181,
zOff+0.745739
), new Point3D(0.437231,0.052726,
zOff+0.746681
));
object[678] = new Triangle(new Point3D(-0.498835,0.148736,
zOff+0.621847
), new Point3D(-0.509757,0.067456,
zOff+0.618649
), new Point3D(-0.437231,0.052726,
zOff+0.746680
));
object[679] = new Triangle(new Point3D(-0.437231,0.052726,
zOff+0.746680
), new Point3D(-0.424655,0.134181,
zOff+0.745739
), new Point3D(-0.498835,0.148736,
zOff+0.621847
));
object[680] = new Triangle(new Point3D(0.345062,0.174179,
zOff+0.719608
), new Point3D(0.391696,0.178510,
zOff+0.707577
), new Point3D(0.352394,0.161522,
zOff+0.643571
));
object[681] = new Triangle(new Point3D(0.352394,0.161522,
zOff+0.643571
), new Point3D(0.321812,0.144385,
zOff+0.648789
), new Point3D(0.345062,0.174179,
zOff+0.719608
));
object[682] = new Triangle(new Point3D(-0.352394,0.161522,
zOff+0.643571
), new Point3D(-0.391696,0.178510,
zOff+0.707577
), new Point3D(-0.345062,0.174179,
zOff+0.719608
));
object[683] = new Triangle(new Point3D(-0.345062,0.174179,
zOff+0.719608
), new Point3D(-0.321812,0.144385,
zOff+0.648789
), new Point3D(-0.352394,0.161522,
zOff+0.643571
));
object[684] = new Triangle(new Point3D(0.391696,0.178510,
zOff+0.707577
), new Point3D(0.464960,0.194208,
zOff+0.602734
), new Point3D(0.421928,0.179342,
zOff+0.565824
));
object[685] = new Triangle(new Point3D(0.421928,0.179342,
zOff+0.565824
), new Point3D(0.352394,0.161522,
zOff+0.643571
), new Point3D(0.391696,0.178510,
zOff+0.707577
));
object[686] = new Triangle(new Point3D(-0.421928,0.179342,
zOff+0.565823
), new Point3D(-0.464960,0.194208,
zOff+0.602734
), new Point3D(-0.391696,0.178510,
zOff+0.707577
));
object[687] = new Triangle(new Point3D(-0.391696,0.178510,
zOff+0.707577
), new Point3D(-0.352394,0.161522,
zOff+0.643571
), new Point3D(-0.421928,0.179342,
zOff+0.565823
));
object[688] = new Triangle(new Point3D(0.373728,0.136713,
zOff+0.790792
), new Point3D(0.424655,0.134181,
zOff+0.745739
), new Point3D(0.391696,0.178510,
zOff+0.707577
));
object[689] = new Triangle(new Point3D(0.391696,0.178510,
zOff+0.707577
), new Point3D(0.345062,0.174179,
zOff+0.719608
), new Point3D(0.373728,0.136713,
zOff+0.790792
));
object[690] = new Triangle(new Point3D(-0.391696,0.178510,
zOff+0.707577
), new Point3D(-0.424655,0.134181,
zOff+0.745739
), new Point3D(-0.373728,0.136713,
zOff+0.790792
));
object[691] = new Triangle(new Point3D(-0.373728,0.136713,
zOff+0.790792
), new Point3D(-0.345062,0.174179,
zOff+0.719608
), new Point3D(-0.391696,0.178510,
zOff+0.707577
));
object[692] = new Triangle(new Point3D(0.424655,0.134181,
zOff+0.745739
), new Point3D(0.498835,0.148736,
zOff+0.621847
), new Point3D(0.464960,0.194208,
zOff+0.602734
));
object[693] = new Triangle(new Point3D(0.464960,0.194208,
zOff+0.602734
), new Point3D(0.391696,0.178510,
zOff+0.707577
), new Point3D(0.424655,0.134181,
zOff+0.745739
));
object[694] = new Triangle(new Point3D(-0.464960,0.194208,
zOff+0.602734
), new Point3D(-0.498835,0.148736,
zOff+0.621847
), new Point3D(-0.424655,0.134181,
zOff+0.745739
));
object[695] = new Triangle(new Point3D(-0.424655,0.134181,
zOff+0.745739
), new Point3D(-0.391696,0.178510,
zOff+0.707577
), new Point3D(-0.464960,0.194208,
zOff+0.602734
));
object[696] = new Triangle(new Point3D(0.091337,-0.058446,
zOff+0.878949
), new Point3D(0.159847,-0.019315,
zOff+0.905665
), new Point3D(0.104430,-0.001938,
zOff+0.936311
));
object[697] = new Triangle(new Point3D(0.104430,-0.001938,
zOff+0.936311
), new Point3D(0.063782,-0.028352,
zOff+0.910933
), new Point3D(0.091337,-0.058446,
zOff+0.878949
));
object[698] = new Triangle(new Point3D(-0.104430,-0.001938,
zOff+0.936311
), new Point3D(-0.159847,-0.019315,
zOff+0.905666
), new Point3D(-0.091337,-0.058446,
zOff+0.878950
));
object[699] = new Triangle(new Point3D(-0.091337,-0.058446,
zOff+0.878950
), new Point3D(-0.063782,-0.028352,
zOff+0.910933
), new Point3D(-0.104430,-0.001938,
zOff+0.936311
));
object[700] = new Triangle(new Point3D(0.187253,0.067957,
zOff+0.921408
), new Point3D(0.158888,0.128090,
zOff+0.921900
), new Point3D(0.103655,0.118767,
zOff+0.949982
));
object[701] = new Triangle(new Point3D(0.103655,0.118767,
zOff+0.949982
), new Point3D(0.119326,0.063411,
zOff+0.949653
), new Point3D(0.187253,0.067957,
zOff+0.921408
));
object[702] = new Triangle(new Point3D(-0.103655,0.118767,
zOff+0.949982
), new Point3D(-0.158888,0.128090,
zOff+0.921901
), new Point3D(-0.187253,0.067957,
zOff+0.921408
));
object[703] = new Triangle(new Point3D(-0.187253,0.067957,
zOff+0.921408
), new Point3D(-0.119326,0.063411,
zOff+0.949653
), new Point3D(-0.103655,0.118767,
zOff+0.949982
));
object[704] = new Triangle(new Point3D(0.158888,0.128090,
zOff+0.921900
), new Point3D(0.083004,0.149293,
zOff+0.916168
), new Point3D(0.057050,0.136195,
zOff+0.950627
));
object[705] = new Triangle(new Point3D(0.057050,0.136195,
zOff+0.950627
), new Point3D(0.103655,0.118767,
zOff+0.949982
), new Point3D(0.158888,0.128090,
zOff+0.921900
));
object[706] = new Triangle(new Point3D(-0.057050,0.136195,
zOff+0.950627
), new Point3D(-0.083004,0.149293,
zOff+0.916168
), new Point3D(-0.158888,0.128090,
zOff+0.921901
));
object[707] = new Triangle(new Point3D(-0.158888,0.128090,
zOff+0.921901
), new Point3D(-0.103655,0.118767,
zOff+0.949982
), new Point3D(-0.057050,0.136195,
zOff+0.950627
));
object[708] = new Triangle(new Point3D(0.000000,-0.078675,
zOff+0.868507
), new Point3D(0.091337,-0.058446,
zOff+0.878949
), new Point3D(0.063782,-0.028352,
zOff+0.910933
));
object[709] = new Triangle(new Point3D(0.063782,-0.028352,
zOff+0.910933
), new Point3D(0.000000,-0.041908,
zOff+0.901610
), new Point3D(0.000000,-0.078675,
zOff+0.868507
));
object[710] = new Triangle(new Point3D(-0.063782,-0.028352,
zOff+0.910933
), new Point3D(-0.091337,-0.058446,
zOff+0.878950
), new Point3D(0.000000,-0.078675,
zOff+0.868507
));
object[711] = new Triangle(new Point3D(0.000000,-0.078675,
zOff+0.868507
), new Point3D(0.000000,-0.041908,
zOff+0.901610
), new Point3D(-0.063782,-0.028352,
zOff+0.910933
));
object[712] = new Triangle(new Point3D(0.159847,-0.019315,
zOff+0.905665
), new Point3D(0.187253,0.067957,
zOff+0.921408
), new Point3D(0.119326,0.063411,
zOff+0.949653
));
object[713] = new Triangle(new Point3D(0.119326,0.063411,
zOff+0.949653
), new Point3D(0.104430,-0.001938,
zOff+0.936311
), new Point3D(0.159847,-0.019315,
zOff+0.905665
));
object[714] = new Triangle(new Point3D(-0.119326,0.063411,
zOff+0.949653
), new Point3D(-0.187253,0.067957,
zOff+0.921408
), new Point3D(-0.159847,-0.019315,
zOff+0.905666
));
object[715] = new Triangle(new Point3D(-0.159847,-0.019315,
zOff+0.905666
), new Point3D(-0.104430,-0.001938,
zOff+0.936311
), new Point3D(-0.119326,0.063411,
zOff+0.949653
));
object[716] = new Triangle(new Point3D(0.083004,0.149293,
zOff+0.916168
), new Point3D(0.000000,0.156575,
zOff+0.911360
), new Point3D(0.000000,0.143120,
zOff+0.951945
));
object[717] = new Triangle(new Point3D(0.000000,0.143120,
zOff+0.951945
), new Point3D(0.057050,0.136195,
zOff+0.950627
), new Point3D(0.083004,0.149293,
zOff+0.916168
));
object[718] = new Triangle(new Point3D(0.000000,0.143120,
zOff+0.951945
), new Point3D(0.000000,0.156575,
zOff+0.911360
), new Point3D(-0.083004,0.149293,
zOff+0.916168
));
object[719] = new Triangle(new Point3D(-0.083004,0.149293,
zOff+0.916168
), new Point3D(-0.057050,0.136195,
zOff+0.950627
), new Point3D(0.000000,0.143120,
zOff+0.951945
));
object[720] = new Triangle(new Point3D(0.000000,-0.127702,
zOff+1.001965
), new Point3D(0.047772,-0.103494,
zOff+1.012780
), new Point3D(0.049617,-0.120982,
zOff+1.032579
));
object[721] = new Triangle(new Point3D(0.049617,-0.120982,
zOff+1.032579
), new Point3D(0.000000,-0.141907,
zOff+1.025048
), new Point3D(0.000000,-0.127702,
zOff+1.001965
));
object[722] = new Triangle(new Point3D(-0.049617,-0.120982,
zOff+1.032579
), new Point3D(-0.047772,-0.103494,
zOff+1.012780
), new Point3D(0.000000,-0.127702,
zOff+1.001965
));
object[723] = new Triangle(new Point3D(0.000000,-0.127702,
zOff+1.001965
), new Point3D(0.000000,-0.141907,
zOff+1.025048
), new Point3D(-0.049617,-0.120982,
zOff+1.032579
));
object[724] = new Triangle(new Point3D(0.047772,-0.103494,
zOff+1.012780
), new Point3D(0.092241,-0.038993,
zOff+1.035198
), new Point3D(0.079659,-0.097635,
zOff+1.043793
));
object[725] = new Triangle(new Point3D(0.079659,-0.097635,
zOff+1.043793
), new Point3D(0.049617,-0.120982,
zOff+1.032579
), new Point3D(0.047772,-0.103494,
zOff+1.012780
));
object[726] = new Triangle(new Point3D(-0.079659,-0.097635,
zOff+1.043793
), new Point3D(-0.092241,-0.038993,
zOff+1.035198
), new Point3D(-0.047772,-0.103494,
zOff+1.012780
));
object[727] = new Triangle(new Point3D(-0.047772,-0.103494,
zOff+1.012780
), new Point3D(-0.049617,-0.120982,
zOff+1.032579
), new Point3D(-0.079659,-0.097635,
zOff+1.043793
));
object[728] = new Triangle(new Point3D(0.042918,-0.125519,
zOff+1.113995
), new Point3D(0.048728,-0.118947,
zOff+1.137973
), new Point3D(0.022938,-0.128247,
zOff+1.146517
));
object[729] = new Triangle(new Point3D(0.022938,-0.128247,
zOff+1.146517
), new Point3D(0.023813,-0.132405,
zOff+1.116648
), new Point3D(0.042918,-0.125519,
zOff+1.113995
));
object[730] = new Triangle(new Point3D(-0.022938,-0.128247,
zOff+1.146517
), new Point3D(-0.048728,-0.118947,
zOff+1.137973
), new Point3D(-0.042918,-0.125519,
zOff+1.113995
));
object[731] = new Triangle(new Point3D(-0.042918,-0.125519,
zOff+1.113995
), new Point3D(-0.023813,-0.132405,
zOff+1.116648
), new Point3D(-0.022938,-0.128247,
zOff+1.146517
));
object[732] = new Triangle(new Point3D(0.000000,-0.145135,
zOff+1.104640
), new Point3D(0.042918,-0.125519,
zOff+1.113995
), new Point3D(0.023813,-0.132405,
zOff+1.116648
));
object[733] = new Triangle(new Point3D(0.023813,-0.132405,
zOff+1.116648
), new Point3D(0.000000,-0.146367,
zOff+1.113380
), new Point3D(0.000000,-0.145135,
zOff+1.104640
));
object[734] = new Triangle(new Point3D(-0.023813,-0.132405,
zOff+1.116648
), new Point3D(-0.042918,-0.125519,
zOff+1.113995
), new Point3D(0.000000,-0.145135,
zOff+1.104640
));
object[735] = new Triangle(new Point3D(0.000000,-0.145135,
zOff+1.104640
), new Point3D(0.000000,-0.146367,
zOff+1.113380
), new Point3D(-0.023813,-0.132405,
zOff+1.116648
));
object[736] = new Triangle(new Point3D(0.000000,-0.169100,
zOff+1.124282
), new Point3D(0.014373,-0.160608,
zOff+1.127313
), new Point3D(0.014571,-0.150350,
zOff+1.154853
));
object[737] = new Triangle(new Point3D(0.014571,-0.150350,
zOff+1.154853
), new Point3D(0.000000,-0.157626,
zOff+1.155423
), new Point3D(0.000000,-0.169100,
zOff+1.124282
));
object[738] = new Triangle(new Point3D(-0.014571,-0.150350,
zOff+1.154853
), new Point3D(-0.014373,-0.160608,
zOff+1.127313
), new Point3D(0.000000,-0.169100,
zOff+1.124282
));
object[739] = new Triangle(new Point3D(0.000000,-0.169100,
zOff+1.124282
), new Point3D(0.000000,-0.157626,
zOff+1.155423
), new Point3D(-0.014571,-0.150350,
zOff+1.154853
));
object[740] = new Triangle(new Point3D(0.023813,-0.132405,
zOff+1.116648
), new Point3D(0.019238,-0.147894,
zOff+1.121863
), new Point3D(0.000000,-0.159318,
zOff+1.117643
));
object[741] = new Triangle(new Point3D(0.000000,-0.159318,
zOff+1.117643
), new Point3D(0.000000,-0.146367,
zOff+1.113380
), new Point3D(0.023813,-0.132405,
zOff+1.116648
));
object[742] = new Triangle(new Point3D(0.000000,-0.159318,
zOff+1.117643
), new Point3D(-0.019238,-0.147894,
zOff+1.121863
), new Point3D(-0.023813,-0.132405,
zOff+1.116648
));
object[743] = new Triangle(new Point3D(-0.023813,-0.132405,
zOff+1.116648
), new Point3D(0.000000,-0.146367,
zOff+1.113380
), new Point3D(0.000000,-0.159318,
zOff+1.117643
));
object[744] = new Triangle(new Point3D(0.019238,-0.147894,
zOff+1.121863
), new Point3D(0.014373,-0.160608,
zOff+1.127313
), new Point3D(0.000000,-0.169100,
zOff+1.124282
));
object[745] = new Triangle(new Point3D(0.000000,-0.169100,
zOff+1.124282
), new Point3D(0.000000,-0.159318,
zOff+1.117643
), new Point3D(0.019238,-0.147894,
zOff+1.121863
));
object[746] = new Triangle(new Point3D(0.000000,-0.169100,
zOff+1.124282
), new Point3D(-0.014373,-0.160608,
zOff+1.127313
), new Point3D(-0.019238,-0.147894,
zOff+1.121863
));
object[747] = new Triangle(new Point3D(-0.019238,-0.147894,
zOff+1.121863
), new Point3D(0.000000,-0.159318,
zOff+1.117643
), new Point3D(0.000000,-0.169100,
zOff+1.124282
));
object[748] = new Triangle(new Point3D(0.022938,-0.128247,
zOff+1.146517
), new Point3D(0.019369,-0.138013,
zOff+1.150415
), new Point3D(0.019238,-0.147894,
zOff+1.121863
));
object[749] = new Triangle(new Point3D(0.019238,-0.147894,
zOff+1.121863
), new Point3D(0.023813,-0.132405,
zOff+1.116648
), new Point3D(0.022938,-0.128247,
zOff+1.146517
));
object[750] = new Triangle(new Point3D(-0.019238,-0.147894,
zOff+1.121863
), new Point3D(-0.019369,-0.138013,
zOff+1.150415
), new Point3D(-0.022938,-0.128247,
zOff+1.146517
));
object[751] = new Triangle(new Point3D(-0.022938,-0.128247,
zOff+1.146517
), new Point3D(-0.023813,-0.132405,
zOff+1.116648
), new Point3D(-0.019238,-0.147894,
zOff+1.121863
));
object[752] = new Triangle(new Point3D(0.019369,-0.138013,
zOff+1.150415
), new Point3D(0.014571,-0.150350,
zOff+1.154853
), new Point3D(0.014373,-0.160608,
zOff+1.127313
));
object[753] = new Triangle(new Point3D(0.014373,-0.160608,
zOff+1.127313
), new Point3D(0.019238,-0.147894,
zOff+1.121863
), new Point3D(0.019369,-0.138013,
zOff+1.150415
));
object[754] = new Triangle(new Point3D(-0.014373,-0.160608,
zOff+1.127313
), new Point3D(-0.014571,-0.150350,
zOff+1.154853
), new Point3D(-0.019369,-0.138013,
zOff+1.150415
));
object[755] = new Triangle(new Point3D(-0.019369,-0.138013,
zOff+1.150415
), new Point3D(-0.019238,-0.147894,
zOff+1.121863
), new Point3D(-0.014373,-0.160608,
zOff+1.127313
));
object[756] = new Triangle(new Point3D(0.014571,-0.150350,
zOff+1.154853
), new Point3D(0.019369,-0.138013,
zOff+1.150415
), new Point3D(0.019767,-0.116487,
zOff+1.183221
));
object[757] = new Triangle(new Point3D(0.019767,-0.116487,
zOff+1.183221
), new Point3D(0.015046,-0.134938,
zOff+1.186391
), new Point3D(0.014571,-0.150350,
zOff+1.154853
));
object[758] = new Triangle(new Point3D(-0.019767,-0.116487,
zOff+1.183221
), new Point3D(-0.019369,-0.138013,
zOff+1.150415
), new Point3D(-0.014571,-0.150350,
zOff+1.154853
));
object[759] = new Triangle(new Point3D(-0.014571,-0.150350,
zOff+1.154853
), new Point3D(-0.015046,-0.134938,
zOff+1.186391
), new Point3D(-0.019767,-0.116487,
zOff+1.183221
));
object[760] = new Triangle(new Point3D(0.019369,-0.138013,
zOff+1.150415
), new Point3D(0.022938,-0.128247,
zOff+1.146517
), new Point3D(0.028103,-0.119876,
zOff+1.164593
));
object[761] = new Triangle(new Point3D(0.028103,-0.119876,
zOff+1.164593
), new Point3D(0.019767,-0.116487,
zOff+1.183221
), new Point3D(0.019369,-0.138013,
zOff+1.150415
));
object[762] = new Triangle(new Point3D(-0.028103,-0.119876,
zOff+1.164593
), new Point3D(-0.022938,-0.128247,
zOff+1.146517
), new Point3D(-0.019369,-0.138013,
zOff+1.150415
));
object[763] = new Triangle(new Point3D(-0.019369,-0.138013,
zOff+1.150415
), new Point3D(-0.019767,-0.116487,
zOff+1.183221
), new Point3D(-0.028103,-0.119876,
zOff+1.164593
));
object[764] = new Triangle(new Point3D(0.000000,-0.157626,
zOff+1.155423
), new Point3D(0.014571,-0.150350,
zOff+1.154853
), new Point3D(0.015046,-0.134938,
zOff+1.186391
));
object[765] = new Triangle(new Point3D(0.015046,-0.134938,
zOff+1.186391
), new Point3D(0.000000,-0.142214,
zOff+1.186960
), new Point3D(0.000000,-0.157626,
zOff+1.155423
));
object[766] = new Triangle(new Point3D(-0.015046,-0.134938,
zOff+1.186391
), new Point3D(-0.014571,-0.150350,
zOff+1.154853
), new Point3D(0.000000,-0.157626,
zOff+1.155423
));
object[767] = new Triangle(new Point3D(0.000000,-0.157626,
zOff+1.155423
), new Point3D(0.000000,-0.142214,
zOff+1.186960
), new Point3D(-0.015046,-0.134938,
zOff+1.186391
));
object[768] = new Triangle(new Point3D(0.022938,-0.128247,
zOff+1.146517
), new Point3D(0.048728,-0.118947,
zOff+1.137973
), new Point3D(0.053673,-0.109910,
zOff+1.157538
));
object[769] = new Triangle(new Point3D(0.053673,-0.109910,
zOff+1.157538
), new Point3D(0.028103,-0.119876,
zOff+1.164593
), new Point3D(0.022938,-0.128247,
zOff+1.146517
));
object[770] = new Triangle(new Point3D(-0.053673,-0.109910,
zOff+1.157538
), new Point3D(-0.048728,-0.118947,
zOff+1.137973
), new Point3D(-0.022938,-0.128247,
zOff+1.146517
));
object[771] = new Triangle(new Point3D(-0.022938,-0.128247,
zOff+1.146517
), new Point3D(-0.028103,-0.119876,
zOff+1.164593
), new Point3D(-0.053673,-0.109910,
zOff+1.157538
));
object[772] = new Triangle(new Point3D(0.000000,-0.142214,
zOff+1.186960
), new Point3D(0.015046,-0.134938,
zOff+1.186391
), new Point3D(0.019090,-0.138363,
zOff+1.223654
));
object[773] = new Triangle(new Point3D(0.019090,-0.138363,
zOff+1.223654
), new Point3D(0.000000,-0.145639,
zOff+1.223759
), new Point3D(0.000000,-0.142214,
zOff+1.186960
));
object[774] = new Triangle(new Point3D(-0.019090,-0.138363,
zOff+1.223654
), new Point3D(-0.015046,-0.134938,
zOff+1.186391
), new Point3D(0.000000,-0.142214,
zOff+1.186960
));
object[775] = new Triangle(new Point3D(0.000000,-0.142214,
zOff+1.186960
), new Point3D(0.000000,-0.145639,
zOff+1.223759
), new Point3D(-0.019090,-0.138363,
zOff+1.223654
));
object[776] = new Triangle(new Point3D(0.015046,-0.134938,
zOff+1.186391
), new Point3D(0.019767,-0.116487,
zOff+1.183221
), new Point3D(0.027093,-0.133544,
zOff+1.210377
));
object[777] = new Triangle(new Point3D(0.027093,-0.133544,
zOff+1.210377
), new Point3D(0.019090,-0.138363,
zOff+1.223654
), new Point3D(0.015046,-0.134938,
zOff+1.186391
));
object[778] = new Triangle(new Point3D(-0.027093,-0.133544,
zOff+1.210377
), new Point3D(-0.019767,-0.116487,
zOff+1.183221
), new Point3D(-0.015046,-0.134938,
zOff+1.186391
));
object[779] = new Triangle(new Point3D(-0.015046,-0.134938,
zOff+1.186391
), new Point3D(-0.019090,-0.138363,
zOff+1.223654
), new Point3D(-0.027093,-0.133544,
zOff+1.210377
));
object[780] = new Triangle(new Point3D(0.019090,-0.138363,
zOff+1.223654
), new Point3D(0.027093,-0.133544,
zOff+1.210377
), new Point3D(0.056347,-0.119935,
zOff+1.208179
));
object[781] = new Triangle(new Point3D(0.056347,-0.119935,
zOff+1.208179
), new Point3D(0.055478,-0.121187,
zOff+1.222438
), new Point3D(0.019090,-0.138363,
zOff+1.223654
));
object[782] = new Triangle(new Point3D(-0.056347,-0.119935,
zOff+1.208179
), new Point3D(-0.027093,-0.133544,
zOff+1.210377
), new Point3D(-0.019090,-0.138363,
zOff+1.223654
));
object[783] = new Triangle(new Point3D(-0.019090,-0.138363,
zOff+1.223654
), new Point3D(-0.055478,-0.121187,
zOff+1.222438
), new Point3D(-0.056347,-0.119935,
zOff+1.208179
));
object[784] = new Triangle(new Point3D(0.055478,-0.121187,
zOff+1.222438
), new Point3D(0.056347,-0.119935,
zOff+1.208179
), new Point3D(0.078833,-0.096577,
zOff+1.204170
));
object[785] = new Triangle(new Point3D(0.078833,-0.096577,
zOff+1.204170
), new Point3D(0.089835,-0.095681,
zOff+1.217766
), new Point3D(0.055478,-0.121187,
zOff+1.222438
));
object[786] = new Triangle(new Point3D(-0.078833,-0.096577,
zOff+1.204170
), new Point3D(-0.056347,-0.119935,
zOff+1.208179
), new Point3D(-0.055478,-0.121187,
zOff+1.222438
));
object[787] = new Triangle(new Point3D(-0.055478,-0.121187,
zOff+1.222438
), new Point3D(-0.089835,-0.095681,
zOff+1.217766
), new Point3D(-0.078833,-0.096577,
zOff+1.204170
));
object[788] = new Triangle(new Point3D(0.089835,-0.095681,
zOff+1.217766
), new Point3D(0.078833,-0.096577,
zOff+1.204170
), new Point3D(0.088256,-0.080078,
zOff+1.188337
));
object[789] = new Triangle(new Point3D(0.088256,-0.080078,
zOff+1.188337
), new Point3D(0.095396,-0.067690,
zOff+1.191739
), new Point3D(0.089835,-0.095681,
zOff+1.217766
));
object[790] = new Triangle(new Point3D(-0.088256,-0.080078,
zOff+1.188337
), new Point3D(-0.078833,-0.096577,
zOff+1.204170
), new Point3D(-0.089835,-0.095681,
zOff+1.217766
));
object[791] = new Triangle(new Point3D(-0.089835,-0.095681,
zOff+1.217766
), new Point3D(-0.095396,-0.067690,
zOff+1.191739
), new Point3D(-0.088256,-0.080078,
zOff+1.188337
));
object[792] = new Triangle(new Point3D(0.095396,-0.067690,
zOff+1.191739
), new Point3D(0.088256,-0.080078,
zOff+1.188337
), new Point3D(0.083305,-0.086180,
zOff+1.169028
));
object[793] = new Triangle(new Point3D(0.083305,-0.086180,
zOff+1.169028
), new Point3D(0.093449,-0.075976,
zOff+1.159755
), new Point3D(0.095396,-0.067690,
zOff+1.191739
));
object[794] = new Triangle(new Point3D(-0.083305,-0.086180,
zOff+1.169028
), new Point3D(-0.088256,-0.080078,
zOff+1.188337
), new Point3D(-0.095396,-0.067690,
zOff+1.191739
));
object[795] = new Triangle(new Point3D(-0.095396,-0.067690,
zOff+1.191739
), new Point3D(-0.093449,-0.075976,
zOff+1.159755
), new Point3D(-0.083305,-0.086180,
zOff+1.169028
));
object[796] = new Triangle(new Point3D(0.048728,-0.118947,
zOff+1.137973
), new Point3D(0.093449,-0.075976,
zOff+1.159755
), new Point3D(0.083305,-0.086180,
zOff+1.169028
));
object[797] = new Triangle(new Point3D(0.083305,-0.086180,
zOff+1.169028
), new Point3D(0.053673,-0.109910,
zOff+1.157538
), new Point3D(0.048728,-0.118947,
zOff+1.137973
));
object[798] = new Triangle(new Point3D(-0.083305,-0.086180,
zOff+1.169028
), new Point3D(-0.093449,-0.075976,
zOff+1.159755
), new Point3D(-0.048728,-0.118947,
zOff+1.137973
));
object[799] = new Triangle(new Point3D(-0.048728,-0.118947,
zOff+1.137973
), new Point3D(-0.053673,-0.109910,
zOff+1.157538
), new Point3D(-0.083305,-0.086180,
zOff+1.169028
));
object[800] = new Triangle(new Point3D(0.042918,-0.125519,
zOff+1.113995
), new Point3D(0.095197,-0.083267,
zOff+1.125919
), new Point3D(0.093449,-0.075976,
zOff+1.159755
));
object[801] = new Triangle(new Point3D(0.093449,-0.075976,
zOff+1.159755
), new Point3D(0.048728,-0.118947,
zOff+1.137973
), new Point3D(0.042918,-0.125519,
zOff+1.113995
));
object[802] = new Triangle(new Point3D(-0.093449,-0.075976,
zOff+1.159755
), new Point3D(-0.095197,-0.083267,
zOff+1.125919
), new Point3D(-0.042918,-0.125519,
zOff+1.113995
));
object[803] = new Triangle(new Point3D(-0.042918,-0.125519,
zOff+1.113995
), new Point3D(-0.048728,-0.118947,
zOff+1.137973
), new Point3D(-0.093449,-0.075976,
zOff+1.159755
));
object[804] = new Triangle(new Point3D(0.079659,-0.097635,
zOff+1.043793
), new Point3D(0.085277,-0.088300,
zOff+1.076017
), new Point3D(0.067509,-0.109729,
zOff+1.069081
));
object[805] = new Triangle(new Point3D(0.067509,-0.109729,
zOff+1.069081
), new Point3D(0.049617,-0.120982,
zOff+1.032579
), new Point3D(0.079659,-0.097635,
zOff+1.043793
));
object[806] = new Triangle(new Point3D(-0.067509,-0.109729,
zOff+1.069081
), new Point3D(-0.085277,-0.088300,
zOff+1.076017
), new Point3D(-0.079659,-0.097635,
zOff+1.043793
));
object[807] = new Triangle(new Point3D(-0.079659,-0.097635,
zOff+1.043793
), new Point3D(-0.049617,-0.120982,
zOff+1.032579
), new Point3D(-0.067509,-0.109729,
zOff+1.069081
));
object[808] = new Triangle(new Point3D(0.085277,-0.088300,
zOff+1.076017
), new Point3D(0.095197,-0.083267,
zOff+1.125919
), new Point3D(0.042918,-0.125519,
zOff+1.113995
));
object[809] = new Triangle(new Point3D(0.042918,-0.125519,
zOff+1.113995
), new Point3D(0.067509,-0.109729,
zOff+1.069081
), new Point3D(0.085277,-0.088300,
zOff+1.076017
));
object[810] = new Triangle(new Point3D(-0.042918,-0.125519,
zOff+1.113995
), new Point3D(-0.095197,-0.083267,
zOff+1.125919
), new Point3D(-0.085277,-0.088300,
zOff+1.076017
));
object[811] = new Triangle(new Point3D(-0.085277,-0.088300,
zOff+1.076017
), new Point3D(-0.067509,-0.109729,
zOff+1.069081
), new Point3D(-0.042918,-0.125519,
zOff+1.113995
));
object[812] = new Triangle(new Point3D(0.056347,-0.119935,
zOff+1.208179
), new Point3D(0.051109,-0.100720,
zOff+1.181491
), new Point3D(0.088256,-0.080078,
zOff+1.188337
));
object[813] = new Triangle(new Point3D(0.088256,-0.080078,
zOff+1.188337
), new Point3D(0.078833,-0.096577,
zOff+1.204170
), new Point3D(0.056347,-0.119935,
zOff+1.208179
));
object[814] = new Triangle(new Point3D(-0.088256,-0.080078,
zOff+1.188337
), new Point3D(-0.051109,-0.100720,
zOff+1.181491
), new Point3D(-0.056347,-0.119935,
zOff+1.208179
));
object[815] = new Triangle(new Point3D(-0.056347,-0.119935,
zOff+1.208179
), new Point3D(-0.078833,-0.096577,
zOff+1.204170
), new Point3D(-0.088256,-0.080078,
zOff+1.188337
));
object[816] = new Triangle(new Point3D(0.088256,-0.080078,
zOff+1.188337
), new Point3D(0.051109,-0.100720,
zOff+1.181491
), new Point3D(0.053673,-0.109910,
zOff+1.157538
));
object[817] = new Triangle(new Point3D(0.053673,-0.109910,
zOff+1.157538
), new Point3D(0.083305,-0.086180,
zOff+1.169028
), new Point3D(0.088256,-0.080078,
zOff+1.188337
));
object[818] = new Triangle(new Point3D(-0.053673,-0.109910,
zOff+1.157538
), new Point3D(-0.051109,-0.100720,
zOff+1.181491
), new Point3D(-0.088256,-0.080078,
zOff+1.188337
));
object[819] = new Triangle(new Point3D(-0.088256,-0.080078,
zOff+1.188337
), new Point3D(-0.083305,-0.086180,
zOff+1.169028
), new Point3D(-0.053673,-0.109910,
zOff+1.157538
));
object[820] = new Triangle(new Point3D(0.019767,-0.116487,
zOff+1.183221
), new Point3D(0.051109,-0.100720,
zOff+1.181491
), new Point3D(0.056347,-0.119935,
zOff+1.208179
));
object[821] = new Triangle(new Point3D(0.056347,-0.119935,
zOff+1.208179
), new Point3D(0.027093,-0.133544,
zOff+1.210377
), new Point3D(0.019767,-0.116487,
zOff+1.183221
));
object[822] = new Triangle(new Point3D(-0.056347,-0.119935,
zOff+1.208179
), new Point3D(-0.051109,-0.100720,
zOff+1.181491
), new Point3D(-0.019767,-0.116487,
zOff+1.183221
));
object[823] = new Triangle(new Point3D(-0.019767,-0.116487,
zOff+1.183221
), new Point3D(-0.027093,-0.133544,
zOff+1.210377
), new Point3D(-0.056347,-0.119935,
zOff+1.208179
));
object[824] = new Triangle(new Point3D(0.019767,-0.116487,
zOff+1.183221
), new Point3D(0.028103,-0.119876,
zOff+1.164593
), new Point3D(0.053673,-0.109910,
zOff+1.157538
));
object[825] = new Triangle(new Point3D(0.053673,-0.109910,
zOff+1.157538
), new Point3D(0.051109,-0.100720,
zOff+1.181491
), new Point3D(0.019767,-0.116487,
zOff+1.183221
));
object[826] = new Triangle(new Point3D(-0.053673,-0.109910,
zOff+1.157538
), new Point3D(-0.028103,-0.119876,
zOff+1.164593
), new Point3D(-0.019767,-0.116487,
zOff+1.183221
));
object[827] = new Triangle(new Point3D(-0.019767,-0.116487,
zOff+1.183221
), new Point3D(-0.051109,-0.100720,
zOff+1.181491
), new Point3D(-0.053673,-0.109910,
zOff+1.157538
));
object[828] = new Triangle(new Point3D(0.146381,0.088498,
zOff+1.165781
), new Point3D(0.133278,0.100269,
zOff+1.169702
), new Point3D(0.129157,0.080212,
zOff+1.205082
));
object[829] = new Triangle(new Point3D(0.129157,0.080212,
zOff+1.205082
), new Point3D(0.142387,0.068629,
zOff+1.201568
), new Point3D(0.146381,0.088498,
zOff+1.165781
));
object[830] = new Triangle(new Point3D(-0.129157,0.080212,
zOff+1.205082
), new Point3D(-0.133278,0.100269,
zOff+1.169702
), new Point3D(-0.146381,0.088498,
zOff+1.165781
));
object[831] = new Triangle(new Point3D(-0.146381,0.088498,
zOff+1.165781
), new Point3D(-0.142387,0.068629,
zOff+1.201568
), new Point3D(-0.129157,0.080212,
zOff+1.205082
));
object[832] = new Triangle(new Point3D(0.126612,0.056280,
zOff+1.107510
), new Point3D(0.116319,0.067742,
zOff+1.111466
), new Point3D(0.133278,0.100269,
zOff+1.169702
));
object[833] = new Triangle(new Point3D(0.133278,0.100269,
zOff+1.169702
), new Point3D(0.146381,0.088498,
zOff+1.165781
), new Point3D(0.126612,0.056280,
zOff+1.107510
));
object[834] = new Triangle(new Point3D(-0.133278,0.100269,
zOff+1.169702
), new Point3D(-0.116319,0.067742,
zOff+1.111466
), new Point3D(-0.126612,0.056280,
zOff+1.107510
));
object[835] = new Triangle(new Point3D(-0.126612,0.056280,
zOff+1.107510
), new Point3D(-0.146381,0.088498,
zOff+1.165781
), new Point3D(-0.133278,0.100269,
zOff+1.169702
));
object[836] = new Triangle(new Point3D(0.111280,0.002674,
zOff+1.148650
), new Point3D(0.118580,0.011898,
zOff+1.150576
), new Point3D(0.121764,0.014845,
zOff+1.184001
));
object[837] = new Triangle(new Point3D(0.121764,0.014845,
zOff+1.184001
), new Point3D(0.114566,0.005551,
zOff+1.189474
), new Point3D(0.111280,0.002674,
zOff+1.148650
));
object[838] = new Triangle(new Point3D(-0.121764,0.014845,
zOff+1.184001
), new Point3D(-0.118580,0.011898,
zOff+1.150576
), new Point3D(-0.111280,0.002674,
zOff+1.148650
));
object[839] = new Triangle(new Point3D(-0.111280,0.002674,
zOff+1.148650
), new Point3D(-0.114566,0.005551,
zOff+1.189474
), new Point3D(-0.121764,0.014845,
zOff+1.184001
));
object[840] = new Triangle(new Point3D(0.103801,0.011938,
zOff+1.099566
), new Point3D(0.112827,0.019294,
zOff+1.109976
), new Point3D(0.118580,0.011898,
zOff+1.150576
));
object[841] = new Triangle(new Point3D(0.118580,0.011898,
zOff+1.150576
), new Point3D(0.111280,0.002674,
zOff+1.148650
), new Point3D(0.103801,0.011938,
zOff+1.099566
));
object[842] = new Triangle(new Point3D(-0.118580,0.011898,
zOff+1.150576
), new Point3D(-0.112827,0.019294,
zOff+1.109976
), new Point3D(-0.103801,0.011938,
zOff+1.099566
));
object[843] = new Triangle(new Point3D(-0.103801,0.011938,
zOff+1.099566
), new Point3D(-0.111280,0.002674,
zOff+1.148650
), new Point3D(-0.118580,0.011898,
zOff+1.150576
));
object[844] = new Triangle(new Point3D(0.110609,0.048649,
zOff+1.189974
), new Point3D(0.108525,0.056334,
zOff+1.155521
), new Point3D(0.103690,0.064879,
zOff+1.159208
));
object[845] = new Triangle(new Point3D(0.103690,0.064879,
zOff+1.159208
), new Point3D(0.113915,0.044869,
zOff+1.198017
), new Point3D(0.110609,0.048649,
zOff+1.189974
));
object[846] = new Triangle(new Point3D(-0.103690,0.064879,
zOff+1.159208
), new Point3D(-0.108525,0.056334,
zOff+1.155521
), new Point3D(-0.110609,0.048649,
zOff+1.189974
));
object[847] = new Triangle(new Point3D(-0.110609,0.048649,
zOff+1.189974
), new Point3D(-0.113915,0.044869,
zOff+1.198017
), new Point3D(-0.103690,0.064879,
zOff+1.159208
));
object[848] = new Triangle(new Point3D(0.108525,0.056334,
zOff+1.155521
), new Point3D(0.097359,0.046808,
zOff+1.115523
), new Point3D(0.095262,0.048881,
zOff+1.102945
));
object[849] = new Triangle(new Point3D(0.095262,0.048881,
zOff+1.102945
), new Point3D(0.103690,0.064879,
zOff+1.159208
), new Point3D(0.108525,0.056334,
zOff+1.155521
));
object[850] = new Triangle(new Point3D(-0.095262,0.048881,
zOff+1.102945
), new Point3D(-0.097359,0.046808,
zOff+1.115523
), new Point3D(-0.108525,0.056334,
zOff+1.155521
));
object[851] = new Triangle(new Point3D(-0.108525,0.056334,
zOff+1.155521
), new Point3D(-0.103690,0.064879,
zOff+1.159208
), new Point3D(-0.095262,0.048881,
zOff+1.102945
));
object[852] = new Triangle(new Point3D(0.121764,0.014845,
zOff+1.184001
), new Point3D(0.110609,0.048649,
zOff+1.189974
), new Point3D(0.113915,0.044869,
zOff+1.198017
));
object[853] = new Triangle(new Point3D(0.113915,0.044869,
zOff+1.198017
), new Point3D(0.114566,0.005551,
zOff+1.189474
), new Point3D(0.121764,0.014845,
zOff+1.184001
));
object[854] = new Triangle(new Point3D(-0.113915,0.044869,
zOff+1.198017
), new Point3D(-0.110609,0.048649,
zOff+1.189974
), new Point3D(-0.121764,0.014845,
zOff+1.184001
));
object[855] = new Triangle(new Point3D(-0.121764,0.014845,
zOff+1.184001
), new Point3D(-0.114566,0.005551,
zOff+1.189474
), new Point3D(-0.113915,0.044869,
zOff+1.198017
));
object[856] = new Triangle(new Point3D(0.112827,0.019294,
zOff+1.109976
), new Point3D(0.103801,0.011938,
zOff+1.099566
), new Point3D(0.095262,0.048881,
zOff+1.102945
));
object[857] = new Triangle(new Point3D(0.095262,0.048881,
zOff+1.102945
), new Point3D(0.097359,0.046808,
zOff+1.115523
), new Point3D(0.112827,0.019294,
zOff+1.109976
));
object[858] = new Triangle(new Point3D(-0.095262,0.048881,
zOff+1.102945
), new Point3D(-0.103801,0.011938,
zOff+1.099566
), new Point3D(-0.112827,0.019294,
zOff+1.109976
));
object[859] = new Triangle(new Point3D(-0.112827,0.019294,
zOff+1.109976
), new Point3D(-0.097359,0.046808,
zOff+1.115523
), new Point3D(-0.095262,0.048881,
zOff+1.102945
));
object[860] = new Triangle(new Point3D(0.095197,-0.083267,
zOff+1.125919
), new Point3D(0.101630,-0.029718,
zOff+1.135258
), new Point3D(0.101896,-0.030349,
zOff+1.171642
));
object[861] = new Triangle(new Point3D(0.101896,-0.030349,
zOff+1.171642
), new Point3D(0.093449,-0.075976,
zOff+1.159755
), new Point3D(0.095197,-0.083267,
zOff+1.125919
));
object[862] = new Triangle(new Point3D(-0.101896,-0.030349,
zOff+1.171642
), new Point3D(-0.101630,-0.029718,
zOff+1.135258
), new Point3D(-0.095197,-0.083267,
zOff+1.125919
));
object[863] = new Triangle(new Point3D(-0.095197,-0.083267,
zOff+1.125919
), new Point3D(-0.093449,-0.075976,
zOff+1.159755
), new Point3D(-0.101896,-0.030349,
zOff+1.171642
));
object[864] = new Triangle(new Point3D(0.101630,-0.029718,
zOff+1.135258
), new Point3D(0.111280,0.002674,
zOff+1.148650
), new Point3D(0.114566,0.005551,
zOff+1.189474
));
object[865] = new Triangle(new Point3D(0.114566,0.005551,
zOff+1.189474
), new Point3D(0.101896,-0.030349,
zOff+1.171642
), new Point3D(0.101630,-0.029718,
zOff+1.135258
));
object[866] = new Triangle(new Point3D(-0.114566,0.005551,
zOff+1.189474
), new Point3D(-0.111280,0.002674,
zOff+1.148650
), new Point3D(-0.101630,-0.029718,
zOff+1.135258
));
object[867] = new Triangle(new Point3D(-0.101630,-0.029718,
zOff+1.135258
), new Point3D(-0.101896,-0.030349,
zOff+1.171642
), new Point3D(-0.114566,0.005551,
zOff+1.189474
));
object[868] = new Triangle(new Point3D(0.085277,-0.088300,
zOff+1.076017
), new Point3D(0.097759,-0.039730,
zOff+1.085596
), new Point3D(0.101630,-0.029718,
zOff+1.135258
));
object[869] = new Triangle(new Point3D(0.101630,-0.029718,
zOff+1.135258
), new Point3D(0.095197,-0.083267,
zOff+1.125919
), new Point3D(0.085277,-0.088300,
zOff+1.076017
));
object[870] = new Triangle(new Point3D(-0.101630,-0.029718,
zOff+1.135258
), new Point3D(-0.097759,-0.039730,
zOff+1.085596
), new Point3D(-0.085277,-0.088300,
zOff+1.076017
));
object[871] = new Triangle(new Point3D(-0.085277,-0.088300,
zOff+1.076017
), new Point3D(-0.095197,-0.083267,
zOff+1.125919
), new Point3D(-0.101630,-0.029718,
zOff+1.135258
));
object[872] = new Triangle(new Point3D(0.097759,-0.039730,
zOff+1.085596
), new Point3D(0.103801,0.011938,
zOff+1.099566
), new Point3D(0.111280,0.002674,
zOff+1.148650
));
object[873] = new Triangle(new Point3D(0.111280,0.002674,
zOff+1.148650
), new Point3D(0.101630,-0.029718,
zOff+1.135258
), new Point3D(0.097759,-0.039730,
zOff+1.085596
));
object[874] = new Triangle(new Point3D(-0.111280,0.002674,
zOff+1.148650
), new Point3D(-0.103801,0.011938,
zOff+1.099566
), new Point3D(-0.097759,-0.039730,
zOff+1.085596
));
object[875] = new Triangle(new Point3D(-0.097759,-0.039730,
zOff+1.085596
), new Point3D(-0.101630,-0.029718,
zOff+1.135258
), new Point3D(-0.111280,0.002674,
zOff+1.148650
));
object[876] = new Triangle(new Point3D(0.092241,-0.038993,
zOff+1.035198
), new Point3D(0.097759,-0.039730,
zOff+1.085596
), new Point3D(0.085277,-0.088300,
zOff+1.076017
));
object[877] = new Triangle(new Point3D(0.085277,-0.088300,
zOff+1.076017
), new Point3D(0.079659,-0.097635,
zOff+1.043793
), new Point3D(0.092241,-0.038993,
zOff+1.035198
));
object[878] = new Triangle(new Point3D(-0.085277,-0.088300,
zOff+1.076017
), new Point3D(-0.097759,-0.039730,
zOff+1.085596
), new Point3D(-0.092241,-0.038993,
zOff+1.035198
));
object[879] = new Triangle(new Point3D(-0.092241,-0.038993,
zOff+1.035198
), new Point3D(-0.079659,-0.097635,
zOff+1.043793
), new Point3D(-0.085277,-0.088300,
zOff+1.076017
));
object[880] = new Triangle(new Point3D(0.092241,-0.038993,
zOff+1.035198
), new Point3D(0.092241,0.002827,
zOff+1.048213
), new Point3D(0.103801,0.011938,
zOff+1.099566
));
object[881] = new Triangle(new Point3D(0.103801,0.011938,
zOff+1.099566
), new Point3D(0.097759,-0.039730,
zOff+1.085596
), new Point3D(0.092241,-0.038993,
zOff+1.035198
));
object[882] = new Triangle(new Point3D(-0.103801,0.011938,
zOff+1.099566
), new Point3D(-0.092241,0.002827,
zOff+1.048213
), new Point3D(-0.092241,-0.038993,
zOff+1.035198
));
object[883] = new Triangle(new Point3D(-0.092241,-0.038993,
zOff+1.035198
), new Point3D(-0.097759,-0.039730,
zOff+1.085596
), new Point3D(-0.103801,0.011938,
zOff+1.099566
));
object[884] = new Triangle(new Point3D(0.063782,-0.028352,
zOff+0.910933
), new Point3D(0.070666,-0.024614,
zOff+0.963633
), new Point3D(0.038301,-0.049031,
zOff+0.957974
));
object[885] = new Triangle(new Point3D(0.038301,-0.049031,
zOff+0.957974
), new Point3D(0.032031,-0.035330,
zOff+0.928193
), new Point3D(0.063782,-0.028352,
zOff+0.910933
));
object[886] = new Triangle(new Point3D(-0.038301,-0.049031,
zOff+0.957974
), new Point3D(-0.070666,-0.024614,
zOff+0.963633
), new Point3D(-0.063782,-0.028352,
zOff+0.910933
));
object[887] = new Triangle(new Point3D(-0.063782,-0.028352,
zOff+0.910933
), new Point3D(-0.032031,-0.035330,
zOff+0.928193
), new Point3D(-0.038301,-0.049031,
zOff+0.957974
));
object[888] = new Triangle(new Point3D(0.000000,-0.041908,
zOff+0.901610
), new Point3D(0.063782,-0.028352,
zOff+0.910933
), new Point3D(0.032031,-0.035330,
zOff+0.928193
));
object[889] = new Triangle(new Point3D(0.032031,-0.035330,
zOff+0.928193
), new Point3D(0.000000,-0.037965,
zOff+0.916451
), new Point3D(0.000000,-0.041908,
zOff+0.901610
));
object[890] = new Triangle(new Point3D(-0.032031,-0.035330,
zOff+0.928193
), new Point3D(-0.063782,-0.028352,
zOff+0.910933
), new Point3D(0.000000,-0.041908,
zOff+0.901610
));
object[891] = new Triangle(new Point3D(0.000000,-0.041908,
zOff+0.901610
), new Point3D(0.000000,-0.037965,
zOff+0.916451
), new Point3D(-0.032031,-0.035330,
zOff+0.928193
));
object[892] = new Triangle(new Point3D(0.000000,-0.055540,
zOff+0.950617
), new Point3D(0.038301,-0.049031,
zOff+0.957974
), new Point3D(0.046232,-0.051535,
zOff+1.002252
));
object[893] = new Triangle(new Point3D(0.046232,-0.051535,
zOff+1.002252
), new Point3D(0.000000,-0.061562,
zOff+0.995808
), new Point3D(0.000000,-0.055540,
zOff+0.950617
));
object[894] = new Triangle(new Point3D(-0.046232,-0.051535,
zOff+1.002252
), new Point3D(-0.038301,-0.049031,
zOff+0.957974
), new Point3D(0.000000,-0.055540,
zOff+0.950617
));
object[895] = new Triangle(new Point3D(0.000000,-0.055540,
zOff+0.950617
), new Point3D(0.000000,-0.061562,
zOff+0.995808
), new Point3D(-0.046232,-0.051535,
zOff+1.002252
));
object[896] = new Triangle(new Point3D(0.000000,-0.037965,
zOff+0.916451
), new Point3D(0.032031,-0.035330,
zOff+0.928193
), new Point3D(0.038301,-0.049031,
zOff+0.957974
));
object[897] = new Triangle(new Point3D(0.038301,-0.049031,
zOff+0.957974
), new Point3D(0.000000,-0.055540,
zOff+0.950617
), new Point3D(0.000000,-0.037965,
zOff+0.916451
));
object[898] = new Triangle(new Point3D(-0.038301,-0.049031,
zOff+0.957974
), new Point3D(-0.032031,-0.035330,
zOff+0.928193
), new Point3D(0.000000,-0.037965,
zOff+0.916451
));
object[899] = new Triangle(new Point3D(0.000000,-0.037965,
zOff+0.916451
), new Point3D(0.000000,-0.055540,
zOff+0.950617
), new Point3D(-0.038301,-0.049031,
zOff+0.957974
));
object[900] = new Triangle(new Point3D(0.047772,-0.103494,
zOff+1.012780
), new Point3D(0.046232,-0.051535,
zOff+1.002252
), new Point3D(0.073010,-0.023149,
zOff+1.019573
));
object[901] = new Triangle(new Point3D(0.073010,-0.023149,
zOff+1.019573
), new Point3D(0.092241,-0.038993,
zOff+1.035198
), new Point3D(0.047772,-0.103494,
zOff+1.012780
));
object[902] = new Triangle(new Point3D(-0.073010,-0.023149,
zOff+1.019573
), new Point3D(-0.046232,-0.051535,
zOff+1.002252
), new Point3D(-0.047772,-0.103494,
zOff+1.012780
));
object[903] = new Triangle(new Point3D(-0.047772,-0.103494,
zOff+1.012780
), new Point3D(-0.092241,-0.038993,
zOff+1.035198
), new Point3D(-0.073010,-0.023149,
zOff+1.019573
));
object[904] = new Triangle(new Point3D(0.070666,-0.024614,
zOff+0.963633
), new Point3D(0.073010,-0.023149,
zOff+1.019573
), new Point3D(0.046232,-0.051535,
zOff+1.002252
));
object[905] = new Triangle(new Point3D(0.046232,-0.051535,
zOff+1.002252
), new Point3D(0.038301,-0.049031,
zOff+0.957974
), new Point3D(0.070666,-0.024614,
zOff+0.963633
));
object[906] = new Triangle(new Point3D(-0.046232,-0.051535,
zOff+1.002252
), new Point3D(-0.073010,-0.023149,
zOff+1.019573
), new Point3D(-0.070666,-0.024614,
zOff+0.963633
));
object[907] = new Triangle(new Point3D(-0.070666,-0.024614,
zOff+0.963633
), new Point3D(-0.038301,-0.049031,
zOff+0.957974
), new Point3D(-0.046232,-0.051535,
zOff+1.002252
));
object[908] = new Triangle(new Point3D(0.047772,-0.103494,
zOff+1.012780
), new Point3D(0.000000,-0.127702,
zOff+1.001965
), new Point3D(0.000000,-0.061562,
zOff+0.995808
));
object[909] = new Triangle(new Point3D(0.000000,-0.061562,
zOff+0.995808
), new Point3D(0.046232,-0.051535,
zOff+1.002252
), new Point3D(0.047772,-0.103494,
zOff+1.012780
));
object[910] = new Triangle(new Point3D(0.000000,-0.061562,
zOff+0.995808
), new Point3D(0.000000,-0.127702,
zOff+1.001965
), new Point3D(-0.047772,-0.103494,
zOff+1.012780
));
object[911] = new Triangle(new Point3D(-0.047772,-0.103494,
zOff+1.012780
), new Point3D(-0.046232,-0.051535,
zOff+1.002252
), new Point3D(0.000000,-0.061562,
zOff+0.995808
));
object[912] = new Triangle(new Point3D(0.000000,0.143120,
zOff+0.951945
), new Point3D(0.000000,0.123060,
zOff+0.998133
), new Point3D(0.045798,0.116932,
zOff+0.996815
));
object[913] = new Triangle(new Point3D(0.045798,0.116932,
zOff+0.996815
), new Point3D(0.057050,0.136195,
zOff+0.950627
), new Point3D(0.000000,0.143120,
zOff+0.951945
));
object[914] = new Triangle(new Point3D(-0.045798,0.116932,
zOff+0.996815
), new Point3D(0.000000,0.123060,
zOff+0.998133
), new Point3D(0.000000,0.143120,
zOff+0.951945
));
object[915] = new Triangle(new Point3D(0.000000,0.143120,
zOff+0.951945
), new Point3D(-0.057050,0.136195,
zOff+0.950627
), new Point3D(-0.045798,0.116932,
zOff+0.996815
));
object[916] = new Triangle(new Point3D(0.000000,0.123060,
zOff+0.998133
), new Point3D(0.000000,0.122049,
zOff+1.046589
), new Point3D(0.039194,0.112464,
zOff+1.044649
));
object[917] = new Triangle(new Point3D(0.039194,0.112464,
zOff+1.044649
), new Point3D(0.045798,0.116932,
zOff+0.996815
), new Point3D(0.000000,0.123060,
zOff+0.998133
));
object[918] = new Triangle(new Point3D(-0.039194,0.112464,
zOff+1.044649
), new Point3D(0.000000,0.122049,
zOff+1.046589
), new Point3D(0.000000,0.123060,
zOff+0.998133
));
object[919] = new Triangle(new Point3D(0.000000,0.123060,
zOff+0.998133
), new Point3D(-0.045798,0.116932,
zOff+0.996815
), new Point3D(-0.039194,0.112464,
zOff+1.044649
));
object[920] = new Triangle(new Point3D(0.119326,0.063411,
zOff+0.949653
), new Point3D(0.104775,0.052530,
zOff+0.995841
), new Point3D(0.095706,0.010676,
zOff+0.982202
));
object[921] = new Triangle(new Point3D(0.095706,0.010676,
zOff+0.982202
), new Point3D(0.104430,-0.001938,
zOff+0.936311
), new Point3D(0.119326,0.063411,
zOff+0.949653
));
object[922] = new Triangle(new Point3D(-0.095706,0.010676,
zOff+0.982202
), new Point3D(-0.104775,0.052530,
zOff+0.995841
), new Point3D(-0.119326,0.063411,
zOff+0.949653
));
object[923] = new Triangle(new Point3D(-0.119326,0.063411,
zOff+0.949653
), new Point3D(-0.104430,-0.001938,
zOff+0.936311
), new Point3D(-0.095706,0.010676,
zOff+0.982202
));
object[924] = new Triangle(new Point3D(0.104775,0.052530,
zOff+0.995841
), new Point3D(0.101738,0.053184,
zOff+1.040846
), new Point3D(0.092420,0.014569,
zOff+1.033318
));
object[925] = new Triangle(new Point3D(0.092420,0.014569,
zOff+1.033318
), new Point3D(0.095706,0.010676,
zOff+0.982202
), new Point3D(0.104775,0.052530,
zOff+0.995841
));
object[926] = new Triangle(new Point3D(-0.092420,0.014569,
zOff+1.033318
), new Point3D(-0.101738,0.053184,
zOff+1.040846
), new Point3D(-0.104775,0.052530,
zOff+0.995841
));
object[927] = new Triangle(new Point3D(-0.104775,0.052530,
zOff+0.995841
), new Point3D(-0.095706,0.010676,
zOff+0.982202
), new Point3D(-0.092420,0.014569,
zOff+1.033318
));
object[928] = new Triangle(new Point3D(0.057050,0.136195,
zOff+0.950627
), new Point3D(0.045798,0.116932,
zOff+0.996815
), new Point3D(0.089104,0.101511,
zOff+0.996171
));
object[929] = new Triangle(new Point3D(0.089104,0.101511,
zOff+0.996171
), new Point3D(0.103655,0.118767,
zOff+0.949982
), new Point3D(0.057050,0.136195,
zOff+0.950627
));
object[930] = new Triangle(new Point3D(-0.089104,0.101511,
zOff+0.996171
), new Point3D(-0.045798,0.116932,
zOff+0.996815
), new Point3D(-0.057050,0.136195,
zOff+0.950627
));
object[931] = new Triangle(new Point3D(-0.057050,0.136195,
zOff+0.950627
), new Point3D(-0.103655,0.118767,
zOff+0.949982
), new Point3D(-0.089104,0.101511,
zOff+0.996171
));
object[932] = new Triangle(new Point3D(0.045798,0.116932,
zOff+0.996815
), new Point3D(0.039194,0.112464,
zOff+1.044649
), new Point3D(0.086066,0.095725,
zOff+1.043640
));
object[933] = new Triangle(new Point3D(0.086066,0.095725,
zOff+1.043640
), new Point3D(0.089104,0.101511,
zOff+0.996171
), new Point3D(0.045798,0.116932,
zOff+0.996815
));
object[934] = new Triangle(new Point3D(-0.086066,0.095725,
zOff+1.043640
), new Point3D(-0.039194,0.112464,
zOff+1.044649
), new Point3D(-0.045798,0.116932,
zOff+0.996815
));
object[935] = new Triangle(new Point3D(-0.045798,0.116932,
zOff+0.996815
), new Point3D(-0.089104,0.101511,
zOff+0.996171
), new Point3D(-0.086066,0.095725,
zOff+1.043640
));
object[936] = new Triangle(new Point3D(0.103655,0.118767,
zOff+0.949982
), new Point3D(0.089104,0.101511,
zOff+0.996171
), new Point3D(0.104775,0.052530,
zOff+0.995841
));
object[937] = new Triangle(new Point3D(0.104775,0.052530,
zOff+0.995841
), new Point3D(0.119326,0.063411,
zOff+0.949653
), new Point3D(0.103655,0.118767,
zOff+0.949982
));
object[938] = new Triangle(new Point3D(-0.104775,0.052530,
zOff+0.995841
), new Point3D(-0.089104,0.101511,
zOff+0.996171
), new Point3D(-0.103655,0.118767,
zOff+0.949982
));
object[939] = new Triangle(new Point3D(-0.103655,0.118767,
zOff+0.949982
), new Point3D(-0.119326,0.063411,
zOff+0.949653
), new Point3D(-0.104775,0.052530,
zOff+0.995841
));
object[940] = new Triangle(new Point3D(0.089104,0.101511,
zOff+0.996171
), new Point3D(0.086066,0.095725,
zOff+1.043640
), new Point3D(0.101738,0.053184,
zOff+1.040846
));
object[941] = new Triangle(new Point3D(0.101738,0.053184,
zOff+1.040846
), new Point3D(0.104775,0.052530,
zOff+0.995841
), new Point3D(0.089104,0.101511,
zOff+0.996171
));
object[942] = new Triangle(new Point3D(-0.101738,0.053184,
zOff+1.040846
), new Point3D(-0.086066,0.095725,
zOff+1.043640
), new Point3D(-0.089104,0.101511,
zOff+0.996171
));
object[943] = new Triangle(new Point3D(-0.089104,0.101511,
zOff+0.996171
), new Point3D(-0.104775,0.052530,
zOff+0.995841
), new Point3D(-0.101738,0.053184,
zOff+1.040846
));
object[944] = new Triangle(new Point3D(0.063782,-0.028352,
zOff+0.910933
), new Point3D(0.104430,-0.001938,
zOff+0.936311
), new Point3D(0.095706,0.010676,
zOff+0.982202
));
object[945] = new Triangle(new Point3D(0.095706,0.010676,
zOff+0.982202
), new Point3D(0.070666,-0.024614,
zOff+0.963633
), new Point3D(0.063782,-0.028352,
zOff+0.910933
));
object[946] = new Triangle(new Point3D(-0.095706,0.010676,
zOff+0.982202
), new Point3D(-0.104430,-0.001938,
zOff+0.936311
), new Point3D(-0.063782,-0.028352,
zOff+0.910933
));
object[947] = new Triangle(new Point3D(-0.063782,-0.028352,
zOff+0.910933
), new Point3D(-0.070666,-0.024614,
zOff+0.963633
), new Point3D(-0.095706,0.010676,
zOff+0.982202
));
object[948] = new Triangle(new Point3D(0.070666,-0.024614,
zOff+0.963633
), new Point3D(0.095706,0.010676,
zOff+0.982202
), new Point3D(0.092420,0.014569,
zOff+1.033318
));
object[949] = new Triangle(new Point3D(0.092420,0.014569,
zOff+1.033318
), new Point3D(0.073010,-0.023149,
zOff+1.019573
), new Point3D(0.070666,-0.024614,
zOff+0.963633
));
object[950] = new Triangle(new Point3D(-0.092420,0.014569,
zOff+1.033318
), new Point3D(-0.095706,0.010676,
zOff+0.982202
), new Point3D(-0.070666,-0.024614,
zOff+0.963633
));
object[951] = new Triangle(new Point3D(-0.070666,-0.024614,
zOff+0.963633
), new Point3D(-0.073010,-0.023149,
zOff+1.019573
), new Point3D(-0.092420,0.014569,
zOff+1.033318
));
object[952] = new Triangle(new Point3D(0.092241,-0.038993,
zOff+1.035198
), new Point3D(0.073010,-0.023149,
zOff+1.019573
), new Point3D(0.092420,0.014569,
zOff+1.033318
));
object[953] = new Triangle(new Point3D(0.092420,0.014569,
zOff+1.033318
), new Point3D(0.092241,0.002827,
zOff+1.048213
), new Point3D(0.092241,-0.038993,
zOff+1.035198
));
object[954] = new Triangle(new Point3D(-0.092420,0.014569,
zOff+1.033318
), new Point3D(-0.073010,-0.023149,
zOff+1.019573
), new Point3D(-0.092241,-0.038993,
zOff+1.035198
));
object[955] = new Triangle(new Point3D(-0.092241,-0.038993,
zOff+1.035198
), new Point3D(-0.092241,0.002827,
zOff+1.048213
), new Point3D(-0.092420,0.014569,
zOff+1.033318
));
object[956] = new Triangle(new Point3D(0.089835,-0.095681,
zOff+1.217766
), new Point3D(0.095396,-0.067690,
zOff+1.191739
), new Point3D(0.102048,-0.038444,
zOff+1.202231
));
object[957] = new Triangle(new Point3D(0.102048,-0.038444,
zOff+1.202231
), new Point3D(0.102048,-0.047704,
zOff+1.239313
), new Point3D(0.089835,-0.095681,
zOff+1.217766
));
object[958] = new Triangle(new Point3D(-0.102048,-0.038444,
zOff+1.202231
), new Point3D(-0.095396,-0.067690,
zOff+1.191739
), new Point3D(-0.089835,-0.095681,
zOff+1.217766
));
object[959] = new Triangle(new Point3D(-0.089835,-0.095681,
zOff+1.217766
), new Point3D(-0.102048,-0.047704,
zOff+1.239313
), new Point3D(-0.102048,-0.038444,
zOff+1.202231
));
object[960] = new Triangle(new Point3D(0.102048,-0.047704,
zOff+1.239313
), new Point3D(0.102048,-0.038444,
zOff+1.202231
), new Point3D(0.111524,0.003484,
zOff+1.213058
));
object[961] = new Triangle(new Point3D(0.111524,0.003484,
zOff+1.213058
), new Point3D(0.111066,0.001421,
zOff+1.251224
), new Point3D(0.102048,-0.047704,
zOff+1.239313
));
object[962] = new Triangle(new Point3D(-0.111524,0.003484,
zOff+1.213058
), new Point3D(-0.102048,-0.038444,
zOff+1.202231
), new Point3D(-0.102048,-0.047704,
zOff+1.239313
));
object[963] = new Triangle(new Point3D(-0.102048,-0.047704,
zOff+1.239313
), new Point3D(-0.111066,0.001421,
zOff+1.251224
), new Point3D(-0.111524,0.003484,
zOff+1.213058
));
object[964] = new Triangle(new Point3D(0.114566,0.005551,
zOff+1.189474
), new Point3D(0.111524,0.003484,
zOff+1.213058
), new Point3D(0.102048,-0.038444,
zOff+1.202231
));
object[965] = new Triangle(new Point3D(0.102048,-0.038444,
zOff+1.202231
), new Point3D(0.101896,-0.030349,
zOff+1.171642
), new Point3D(0.114566,0.005551,
zOff+1.189474
));
object[966] = new Triangle(new Point3D(-0.102048,-0.038444,
zOff+1.202231
), new Point3D(-0.111524,0.003484,
zOff+1.213058
), new Point3D(-0.114566,0.005551,
zOff+1.189474
));
object[967] = new Triangle(new Point3D(-0.114566,0.005551,
zOff+1.189474
), new Point3D(-0.101896,-0.030349,
zOff+1.171642
), new Point3D(-0.102048,-0.038444,
zOff+1.202231
));
object[968] = new Triangle(new Point3D(0.095396,-0.067690,
zOff+1.191739
), new Point3D(0.093449,-0.075976,
zOff+1.159755
), new Point3D(0.101896,-0.030349,
zOff+1.171642
));
object[969] = new Triangle(new Point3D(0.101896,-0.030349,
zOff+1.171642
), new Point3D(0.102048,-0.038444,
zOff+1.202231
), new Point3D(0.095396,-0.067690,
zOff+1.191739
));
object[970] = new Triangle(new Point3D(-0.101896,-0.030349,
zOff+1.171642
), new Point3D(-0.093449,-0.075976,
zOff+1.159755
), new Point3D(-0.095396,-0.067690,
zOff+1.191739
));
object[971] = new Triangle(new Point3D(-0.095396,-0.067690,
zOff+1.191739
), new Point3D(-0.102048,-0.038444,
zOff+1.202231
), new Point3D(-0.101896,-0.030349,
zOff+1.171642
));
object[972] = new Triangle(new Point3D(0.111066,0.001421,
zOff+1.251224
), new Point3D(0.111524,0.003484,
zOff+1.213058
), new Point3D(0.114430,0.042882,
zOff+1.219497
));
object[973] = new Triangle(new Point3D(0.114430,0.042882,
zOff+1.219497
), new Point3D(0.115620,0.060925,
zOff+1.250078
), new Point3D(0.111066,0.001421,
zOff+1.251224
));
object[974] = new Triangle(new Point3D(-0.114430,0.042882,
zOff+1.219497
), new Point3D(-0.111524,0.003484,
zOff+1.213058
), new Point3D(-0.111066,0.001421,
zOff+1.251224
));
object[975] = new Triangle(new Point3D(-0.111066,0.001421,
zOff+1.251224
), new Point3D(-0.115620,0.060925,
zOff+1.250078
), new Point3D(-0.114430,0.042882,
zOff+1.219497
));
object[976] = new Triangle(new Point3D(0.114566,0.005551,
zOff+1.189474
), new Point3D(0.113915,0.044869,
zOff+1.198017
), new Point3D(0.114430,0.042882,
zOff+1.219497
));
object[977] = new Triangle(new Point3D(0.114430,0.042882,
zOff+1.219497
), new Point3D(0.111524,0.003484,
zOff+1.213058
), new Point3D(0.114566,0.005551,
zOff+1.189474
));
object[978] = new Triangle(new Point3D(-0.114430,0.042882,
zOff+1.219497
), new Point3D(-0.113915,0.044869,
zOff+1.198017
), new Point3D(-0.114566,0.005551,
zOff+1.189474
));
object[979] = new Triangle(new Point3D(-0.114566,0.005551,
zOff+1.189474
), new Point3D(-0.111524,0.003484,
zOff+1.213058
), new Point3D(-0.114430,0.042882,
zOff+1.219497
));
object[980] = new Triangle(new Point3D(0.115620,0.060925,
zOff+1.250078
), new Point3D(0.114430,0.042882,
zOff+1.219497
), new Point3D(0.113915,0.044869,
zOff+1.198017
));
object[981] = new Triangle(new Point3D(0.113915,0.044869,
zOff+1.198017
), new Point3D(0.114313,0.090466,
zOff+1.206012
), new Point3D(0.115620,0.060925,
zOff+1.250078
));
object[982] = new Triangle(new Point3D(-0.113915,0.044869,
zOff+1.198017
), new Point3D(-0.114430,0.042882,
zOff+1.219497
), new Point3D(-0.115620,0.060925,
zOff+1.250078
));
object[983] = new Triangle(new Point3D(-0.115620,0.060925,
zOff+1.250078
), new Point3D(-0.114313,0.090466,
zOff+1.206012
), new Point3D(-0.113915,0.044869,
zOff+1.198017
));
object[984] = new Triangle(new Point3D(0.103690,0.064879,
zOff+1.159208
), new Point3D(0.095262,0.048881,
zOff+1.102945
), new Point3D(0.103405,0.068923,
zOff+1.086863
));
object[985] = new Triangle(new Point3D(0.103405,0.068923,
zOff+1.086863
), new Point3D(0.111832,0.098249,
zOff+1.149653
), new Point3D(0.103690,0.064879,
zOff+1.159208
));
object[986] = new Triangle(new Point3D(-0.103405,0.068923,
zOff+1.086863
), new Point3D(-0.095262,0.048881,
zOff+1.102945
), new Point3D(-0.103690,0.064879,
zOff+1.159208
));
object[987] = new Triangle(new Point3D(-0.103690,0.064879,
zOff+1.159208
), new Point3D(-0.111832,0.098249,
zOff+1.149653
), new Point3D(-0.103405,0.068923,
zOff+1.086863
));
object[988] = new Triangle(new Point3D(0.113915,0.044869,
zOff+1.198017
), new Point3D(0.103690,0.064879,
zOff+1.159208
), new Point3D(0.111832,0.098249,
zOff+1.149653
));
object[989] = new Triangle(new Point3D(0.111832,0.098249,
zOff+1.149653
), new Point3D(0.114313,0.090466,
zOff+1.206012
), new Point3D(0.113915,0.044869,
zOff+1.198017
));
object[990] = new Triangle(new Point3D(-0.111832,0.098249,
zOff+1.149653
), new Point3D(-0.103690,0.064879,
zOff+1.159208
), new Point3D(-0.113915,0.044869,
zOff+1.198017
));
object[991] = new Triangle(new Point3D(-0.113915,0.044869,
zOff+1.198017
), new Point3D(-0.114313,0.090466,
zOff+1.206012
), new Point3D(-0.111832,0.098249,
zOff+1.149653
));
object[992] = new Triangle(new Point3D(0.105582,-0.002273,
zOff+1.340257
), new Point3D(0.105537,0.077840,
zOff+1.334483
), new Point3D(0.058839,0.097716,
zOff+1.356957
));
object[993] = new Triangle(new Point3D(0.058839,0.097716,
zOff+1.356957
), new Point3D(0.050303,-0.012749,
zOff+1.372469
), new Point3D(0.105582,-0.002273,
zOff+1.340257
));
object[994] = new Triangle(new Point3D(-0.058839,0.097716,
zOff+1.356957
), new Point3D(-0.105537,0.077840,
zOff+1.334483
), new Point3D(-0.105582,-0.002273,
zOff+1.340257
));
object[995] = new Triangle(new Point3D(-0.105582,-0.002273,
zOff+1.340257
), new Point3D(-0.050303,-0.012749,
zOff+1.372469
), new Point3D(-0.058839,0.097716,
zOff+1.356957
));
object[996] = new Triangle(new Point3D(0.050303,-0.012749,
zOff+1.372469
), new Point3D(0.058839,0.097716,
zOff+1.356957
), new Point3D(0.000000,0.104823,
zOff+1.361797
));
object[997] = new Triangle(new Point3D(0.000000,0.104823,
zOff+1.361797
), new Point3D(0.000000,-0.017533,
zOff+1.377521
), new Point3D(0.050303,-0.012749,
zOff+1.372469
));
object[998] = new Triangle(new Point3D(0.000000,0.104823,
zOff+1.361797
), new Point3D(-0.058839,0.097716,
zOff+1.356957
), new Point3D(-0.050303,-0.012749,
zOff+1.372469
));
object[999] = new Triangle(new Point3D(-0.050303,-0.012749,
zOff+1.372469
), new Point3D(0.000000,-0.017533,
zOff+1.377521
), new Point3D(0.000000,0.104823,
zOff+1.361797
));
object[1000] = new Triangle(new Point3D(0.055478,-0.121187,
zOff+1.222438
), new Point3D(0.080320,-0.068964,
zOff+1.297068
), new Point3D(0.037307,-0.098012,
zOff+1.316153
));
object[1001] = new Triangle(new Point3D(0.037307,-0.098012,
zOff+1.316153
), new Point3D(0.019090,-0.138363,
zOff+1.223654
), new Point3D(0.055478,-0.121187,
zOff+1.222438
));
object[1002] = new Triangle(new Point3D(-0.037307,-0.098012,
zOff+1.316153
), new Point3D(-0.080320,-0.068964,
zOff+1.297068
), new Point3D(-0.055478,-0.121187,
zOff+1.222438
));
object[1003] = new Triangle(new Point3D(-0.055478,-0.121187,
zOff+1.222438
), new Point3D(-0.019090,-0.138363,
zOff+1.223654
), new Point3D(-0.037307,-0.098012,
zOff+1.316153
));
object[1004] = new Triangle(new Point3D(0.080320,-0.068964,
zOff+1.297068
), new Point3D(0.105582,-0.002273,
zOff+1.340257
), new Point3D(0.050303,-0.012749,
zOff+1.372469
));
object[1005] = new Triangle(new Point3D(0.050303,-0.012749,
zOff+1.372469
), new Point3D(0.037307,-0.098012,
zOff+1.316153
), new Point3D(0.080320,-0.068964,
zOff+1.297068
));
object[1006] = new Triangle(new Point3D(-0.050303,-0.012749,
zOff+1.372469
), new Point3D(-0.105582,-0.002273,
zOff+1.340257
), new Point3D(-0.080320,-0.068964,
zOff+1.297068
));
object[1007] = new Triangle(new Point3D(-0.080320,-0.068964,
zOff+1.297068
), new Point3D(-0.037307,-0.098012,
zOff+1.316153
), new Point3D(-0.050303,-0.012749,
zOff+1.372469
));
object[1008] = new Triangle(new Point3D(0.019090,-0.138363,
zOff+1.223654
), new Point3D(0.037307,-0.098012,
zOff+1.316153
), new Point3D(0.000000,-0.110452,
zOff+1.318807
));
object[1009] = new Triangle(new Point3D(0.000000,-0.110452,
zOff+1.318807
), new Point3D(0.000000,-0.145639,
zOff+1.223759
), new Point3D(0.019090,-0.138363,
zOff+1.223654
));
object[1010] = new Triangle(new Point3D(0.000000,-0.110452,
zOff+1.318807
), new Point3D(-0.037307,-0.098012,
zOff+1.316153
), new Point3D(-0.019090,-0.138363,
zOff+1.223654
));
object[1011] = new Triangle(new Point3D(-0.019090,-0.138363,
zOff+1.223654
), new Point3D(0.000000,-0.145639,
zOff+1.223759
), new Point3D(0.000000,-0.110452,
zOff+1.318807
));
object[1012] = new Triangle(new Point3D(0.037307,-0.098012,
zOff+1.316153
), new Point3D(0.050303,-0.012749,
zOff+1.372469
), new Point3D(0.000000,-0.017533,
zOff+1.377521
));
object[1013] = new Triangle(new Point3D(0.000000,-0.017533,
zOff+1.377521
), new Point3D(0.000000,-0.110452,
zOff+1.318807
), new Point3D(0.037307,-0.098012,
zOff+1.316153
));
object[1014] = new Triangle(new Point3D(0.000000,-0.017533,
zOff+1.377521
), new Point3D(-0.050303,-0.012749,
zOff+1.372469
), new Point3D(-0.037307,-0.098012,
zOff+1.316153
));
object[1015] = new Triangle(new Point3D(-0.037307,-0.098012,
zOff+1.316153
), new Point3D(0.000000,-0.110452,
zOff+1.318807
), new Point3D(0.000000,-0.017533,
zOff+1.377521
));
object[1016] = new Triangle(new Point3D(0.102048,-0.047704,
zOff+1.239313
), new Point3D(0.111066,0.001421,
zOff+1.251224
), new Point3D(0.105582,-0.002273,
zOff+1.340257
));
object[1017] = new Triangle(new Point3D(0.105582,-0.002273,
zOff+1.340257
), new Point3D(0.080320,-0.068964,
zOff+1.297068
), new Point3D(0.102048,-0.047704,
zOff+1.239313
));
object[1018] = new Triangle(new Point3D(-0.105582,-0.002273,
zOff+1.340257
), new Point3D(-0.111066,0.001421,
zOff+1.251224
), new Point3D(-0.102048,-0.047704,
zOff+1.239313
));
object[1019] = new Triangle(new Point3D(-0.102048,-0.047704,
zOff+1.239313
), new Point3D(-0.080320,-0.068964,
zOff+1.297068
), new Point3D(-0.105582,-0.002273,
zOff+1.340257
));
object[1020] = new Triangle(new Point3D(0.055478,-0.121187,
zOff+1.222438
), new Point3D(0.089835,-0.095681,
zOff+1.217766
), new Point3D(0.102048,-0.047704,
zOff+1.239313
));
object[1021] = new Triangle(new Point3D(0.102048,-0.047704,
zOff+1.239313
), new Point3D(0.080320,-0.068964,
zOff+1.297068
), new Point3D(0.055478,-0.121187,
zOff+1.222438
));
object[1022] = new Triangle(new Point3D(-0.102048,-0.047704,
zOff+1.239313
), new Point3D(-0.089835,-0.095681,
zOff+1.217766
), new Point3D(-0.055478,-0.121187,
zOff+1.222438
));
object[1023] = new Triangle(new Point3D(-0.055478,-0.121187,
zOff+1.222438
), new Point3D(-0.080320,-0.068964,
zOff+1.297068
), new Point3D(-0.102048,-0.047704,
zOff+1.239313
));
object[1024] = new Triangle(new Point3D(0.000000,0.104823,
zOff+1.361797
), new Point3D(0.058839,0.097716,
zOff+1.356957
), new Point3D(0.061731,0.177219,
zOff+1.263337
));
object[1025] = new Triangle(new Point3D(0.061731,0.177219,
zOff+1.263337
), new Point3D(0.000000,0.186615,
zOff+1.265857
), new Point3D(0.000000,0.104823,
zOff+1.361797
));
object[1026] = new Triangle(new Point3D(-0.061731,0.177219,
zOff+1.263337
), new Point3D(-0.058839,0.097716,
zOff+1.356957
), new Point3D(0.000000,0.104823,
zOff+1.361797
));
object[1027] = new Triangle(new Point3D(0.000000,0.104823,
zOff+1.361797
), new Point3D(0.000000,0.186615,
zOff+1.265857
), new Point3D(-0.061731,0.177219,
zOff+1.263337
));
object[1028] = new Triangle(new Point3D(0.058839,0.097716,
zOff+1.356957
), new Point3D(0.105537,0.077840,
zOff+1.334483
), new Point3D(0.107479,0.142775,
zOff+1.245043
));
object[1029] = new Triangle(new Point3D(0.107479,0.142775,
zOff+1.245043
), new Point3D(0.061731,0.177219,
zOff+1.263337
), new Point3D(0.058839,0.097716,
zOff+1.356957
));
object[1030] = new Triangle(new Point3D(-0.107479,0.142775,
zOff+1.245043
), new Point3D(-0.105537,0.077840,
zOff+1.334483
), new Point3D(-0.058839,0.097716,
zOff+1.356957
));
object[1031] = new Triangle(new Point3D(-0.058839,0.097716,
zOff+1.356957
), new Point3D(-0.061731,0.177219,
zOff+1.263337
), new Point3D(-0.107479,0.142775,
zOff+1.245043
));
object[1032] = new Triangle(new Point3D(0.061731,0.177219,
zOff+1.263337
), new Point3D(0.107479,0.142775,
zOff+1.245043
), new Point3D(0.101345,0.140973,
zOff+1.169047
));
object[1033] = new Triangle(new Point3D(0.101345,0.140973,
zOff+1.169047
), new Point3D(0.055858,0.174671,
zOff+1.167600
), new Point3D(0.061731,0.177219,
zOff+1.263337
));
object[1034] = new Triangle(new Point3D(-0.101345,0.140973,
zOff+1.169047
), new Point3D(-0.107479,0.142775,
zOff+1.245043
), new Point3D(-0.061731,0.177219,
zOff+1.263337
));
object[1035] = new Triangle(new Point3D(-0.061731,0.177219,
zOff+1.263337
), new Point3D(-0.055858,0.174671,
zOff+1.167600
), new Point3D(-0.101345,0.140973,
zOff+1.169047
));
object[1036] = new Triangle(new Point3D(0.000000,0.186615,
zOff+1.265857
), new Point3D(0.061731,0.177219,
zOff+1.263337
), new Point3D(0.055858,0.174671,
zOff+1.167600
));
object[1037] = new Triangle(new Point3D(0.055858,0.174671,
zOff+1.167600
), new Point3D(0.000000,0.183427,
zOff+1.165146
), new Point3D(0.000000,0.186615,
zOff+1.265857
));
object[1038] = new Triangle(new Point3D(-0.055858,0.174671,
zOff+1.167600
), new Point3D(-0.061731,0.177219,
zOff+1.263337
), new Point3D(0.000000,0.186615,
zOff+1.265857
));
object[1039] = new Triangle(new Point3D(0.000000,0.186615,
zOff+1.265857
), new Point3D(0.000000,0.183427,
zOff+1.165146
), new Point3D(-0.055858,0.174671,
zOff+1.167600
));
object[1040] = new Triangle(new Point3D(0.000000,0.183427,
zOff+1.165146
), new Point3D(0.055858,0.174671,
zOff+1.167600
), new Point3D(0.041401,0.127253,
zOff+1.090983
));
object[1041] = new Triangle(new Point3D(0.041401,0.127253,
zOff+1.090983
), new Point3D(0.000000,0.125331,
zOff+1.093945
), new Point3D(0.000000,0.183427,
zOff+1.165146
));
object[1042] = new Triangle(new Point3D(-0.041401,0.127253,
zOff+1.090983
), new Point3D(-0.055858,0.174671,
zOff+1.167600
), new Point3D(0.000000,0.183427,
zOff+1.165146
));
object[1043] = new Triangle(new Point3D(0.000000,0.183427,
zOff+1.165146
), new Point3D(0.000000,0.125331,
zOff+1.093945
), new Point3D(-0.041401,0.127253,
zOff+1.090983
));
object[1044] = new Triangle(new Point3D(0.055858,0.174671,
zOff+1.167600
), new Point3D(0.101345,0.140973,
zOff+1.169047
), new Point3D(0.087100,0.105219,
zOff+1.095900
));
object[1045] = new Triangle(new Point3D(0.087100,0.105219,
zOff+1.095900
), new Point3D(0.041401,0.127253,
zOff+1.090983
), new Point3D(0.055858,0.174671,
zOff+1.167600
));
object[1046] = new Triangle(new Point3D(-0.087100,0.105219,
zOff+1.095900
), new Point3D(-0.101345,0.140973,
zOff+1.169047
), new Point3D(-0.055858,0.174671,
zOff+1.167600
));
object[1047] = new Triangle(new Point3D(-0.055858,0.174671,
zOff+1.167600
), new Point3D(-0.041401,0.127253,
zOff+1.090983
), new Point3D(-0.087100,0.105219,
zOff+1.095900
));
object[1048] = new Triangle(new Point3D(0.111066,0.001421,
zOff+1.251224
), new Point3D(0.115620,0.060925,
zOff+1.250078
), new Point3D(0.105537,0.077840,
zOff+1.334483
));
object[1049] = new Triangle(new Point3D(0.105537,0.077840,
zOff+1.334483
), new Point3D(0.105582,-0.002273,
zOff+1.340257
), new Point3D(0.111066,0.001421,
zOff+1.251224
));
object[1050] = new Triangle(new Point3D(-0.105537,0.077840,
zOff+1.334483
), new Point3D(-0.115620,0.060925,
zOff+1.250078
), new Point3D(-0.111066,0.001421,
zOff+1.251224
));
object[1051] = new Triangle(new Point3D(-0.111066,0.001421,
zOff+1.251224
), new Point3D(-0.105582,-0.002273,
zOff+1.340257
), new Point3D(-0.105537,0.077840,
zOff+1.334483
));
object[1052] = new Triangle(new Point3D(0.115620,0.060925,
zOff+1.250078
), new Point3D(0.114313,0.090466,
zOff+1.206012
), new Point3D(0.107479,0.142775,
zOff+1.245043
));
object[1053] = new Triangle(new Point3D(0.107479,0.142775,
zOff+1.245043
), new Point3D(0.105537,0.077840,
zOff+1.334483
), new Point3D(0.115620,0.060925,
zOff+1.250078
));
object[1054] = new Triangle(new Point3D(-0.107479,0.142775,
zOff+1.245043
), new Point3D(-0.114313,0.090466,
zOff+1.206012
), new Point3D(-0.115620,0.060925,
zOff+1.250078
));
object[1055] = new Triangle(new Point3D(-0.115620,0.060925,
zOff+1.250078
), new Point3D(-0.105537,0.077840,
zOff+1.334483
), new Point3D(-0.107479,0.142775,
zOff+1.245043
));
object[1056] = new Triangle(new Point3D(0.114313,0.090466,
zOff+1.206012
), new Point3D(0.111832,0.098249,
zOff+1.149653
), new Point3D(0.101345,0.140973,
zOff+1.169047
));
object[1057] = new Triangle(new Point3D(0.101345,0.140973,
zOff+1.169047
), new Point3D(0.107479,0.142775,
zOff+1.245043
), new Point3D(0.114313,0.090466,
zOff+1.206012
));
object[1058] = new Triangle(new Point3D(-0.101345,0.140973,
zOff+1.169047
), new Point3D(-0.111832,0.098249,
zOff+1.149653
), new Point3D(-0.114313,0.090466,
zOff+1.206012
));
object[1059] = new Triangle(new Point3D(-0.114313,0.090466,
zOff+1.206012
), new Point3D(-0.107479,0.142775,
zOff+1.245043
), new Point3D(-0.101345,0.140973,
zOff+1.169047
));
object[1060] = new Triangle(new Point3D(0.103405,0.068923,
zOff+1.086863
), new Point3D(0.087100,0.105219,
zOff+1.095900
), new Point3D(0.101345,0.140973,
zOff+1.169047
));
object[1061] = new Triangle(new Point3D(0.101345,0.140973,
zOff+1.169047
), new Point3D(0.111832,0.098249,
zOff+1.149653
), new Point3D(0.103405,0.068923,
zOff+1.086863
));
object[1062] = new Triangle(new Point3D(-0.101345,0.140973,
zOff+1.169047
), new Point3D(-0.087100,0.105219,
zOff+1.095900
), new Point3D(-0.103405,0.068923,
zOff+1.086863
));
object[1063] = new Triangle(new Point3D(-0.103405,0.068923,
zOff+1.086863
), new Point3D(-0.111832,0.098249,
zOff+1.149653
), new Point3D(-0.101345,0.140973,
zOff+1.169047
));
object[1064] = new Triangle(new Point3D(0.101738,0.053184,
zOff+1.040846
), new Point3D(0.086066,0.095725,
zOff+1.043640
), new Point3D(0.087100,0.105219,
zOff+1.095900
));
object[1065] = new Triangle(new Point3D(0.087100,0.105219,
zOff+1.095900
), new Point3D(0.103405,0.068923,
zOff+1.086863
), new Point3D(0.101738,0.053184,
zOff+1.040846
));
object[1066] = new Triangle(new Point3D(-0.087100,0.105219,
zOff+1.095900
), new Point3D(-0.086066,0.095725,
zOff+1.043640
), new Point3D(-0.101738,0.053184,
zOff+1.040846
));
object[1067] = new Triangle(new Point3D(-0.101738,0.053184,
zOff+1.040846
), new Point3D(-0.103405,0.068923,
zOff+1.086863
), new Point3D(-0.087100,0.105219,
zOff+1.095900
));
object[1068] = new Triangle(new Point3D(0.086066,0.095725,
zOff+1.043640
), new Point3D(0.039194,0.112464,
zOff+1.044649
), new Point3D(0.041401,0.127253,
zOff+1.090983
));
object[1069] = new Triangle(new Point3D(0.041401,0.127253,
zOff+1.090983
), new Point3D(0.087100,0.105219,
zOff+1.095900
), new Point3D(0.086066,0.095725,
zOff+1.043640
));
object[1070] = new Triangle(new Point3D(-0.041401,0.127253,
zOff+1.090983
), new Point3D(-0.039194,0.112464,
zOff+1.044649
), new Point3D(-0.086066,0.095725,
zOff+1.043640
));
object[1071] = new Triangle(new Point3D(-0.086066,0.095725,
zOff+1.043640
), new Point3D(-0.087100,0.105219,
zOff+1.095900
), new Point3D(-0.041401,0.127253,
zOff+1.090983
));
object[1072] = new Triangle(new Point3D(0.000000,0.122049,
zOff+1.046589
), new Point3D(0.000000,0.125331,
zOff+1.093945
), new Point3D(0.041401,0.127253,
zOff+1.090983
));
object[1073] = new Triangle(new Point3D(0.041401,0.127253,
zOff+1.090983
), new Point3D(0.039194,0.112464,
zOff+1.044649
), new Point3D(0.000000,0.122049,
zOff+1.046589
));
object[1074] = new Triangle(new Point3D(-0.041401,0.127253,
zOff+1.090983
), new Point3D(0.000000,0.125331,
zOff+1.093945
), new Point3D(0.000000,0.122049,
zOff+1.046589
));
object[1075] = new Triangle(new Point3D(0.000000,0.122049,
zOff+1.046589
), new Point3D(-0.039194,0.112464,
zOff+1.044649
), new Point3D(-0.041401,0.127253,
zOff+1.090983
));
object[1076] = new Triangle(new Point3D(0.101738,0.053184,
zOff+1.040846
), new Point3D(0.103405,0.068923,
zOff+1.086863
), new Point3D(0.095262,0.048881,
zOff+1.102945
));
object[1077] = new Triangle(new Point3D(0.095262,0.048881,
zOff+1.102945
), new Point3D(0.092420,0.014569,
zOff+1.033318
), new Point3D(0.101738,0.053184,
zOff+1.040846
));
object[1078] = new Triangle(new Point3D(-0.095262,0.048881,
zOff+1.102945
), new Point3D(-0.103405,0.068923,
zOff+1.086863
), new Point3D(-0.101738,0.053184,
zOff+1.040846
));
object[1079] = new Triangle(new Point3D(-0.101738,0.053184,
zOff+1.040846
), new Point3D(-0.092420,0.014569,
zOff+1.033318
), new Point3D(-0.095262,0.048881,
zOff+1.102945
));
object[1080] = new Triangle(new Point3D(0.103801,0.011938,
zOff+1.099566
), new Point3D(0.092241,0.002827,
zOff+1.048213
), new Point3D(0.092420,0.014569,
zOff+1.033318
));
object[1081] = new Triangle(new Point3D(0.092420,0.014569,
zOff+1.033318
), new Point3D(0.095262,0.048881,
zOff+1.102945
), new Point3D(0.103801,0.011938,
zOff+1.099566
));
object[1082] = new Triangle(new Point3D(-0.092420,0.014569,
zOff+1.033318
), new Point3D(-0.092241,0.002827,
zOff+1.048213
), new Point3D(-0.103801,0.011938,
zOff+1.099566
));
object[1083] = new Triangle(new Point3D(-0.103801,0.011938,
zOff+1.099566
), new Point3D(-0.095262,0.048881,
zOff+1.102945
), new Point3D(-0.092420,0.014569,
zOff+1.033318
));
object[1084] = new Triangle(new Point3D(0.129157,0.080212,
zOff+1.205082
), new Point3D(0.120510,0.063693,
zOff+1.199364
), new Point3D(0.131710,0.042011,
zOff+1.193638
));
object[1085] = new Triangle(new Point3D(0.131710,0.042011,
zOff+1.193638
), new Point3D(0.142387,0.068629,
zOff+1.201568
), new Point3D(0.129157,0.080212,
zOff+1.205082
));
object[1086] = new Triangle(new Point3D(-0.131710,0.042011,
zOff+1.193638
), new Point3D(-0.120510,0.063693,
zOff+1.199364
), new Point3D(-0.129157,0.080212,
zOff+1.205082
));
object[1087] = new Triangle(new Point3D(-0.129157,0.080212,
zOff+1.205082
), new Point3D(-0.142387,0.068629,
zOff+1.201568
), new Point3D(-0.131710,0.042011,
zOff+1.193638
));
object[1088] = new Triangle(new Point3D(0.120510,0.063693,
zOff+1.199364
), new Point3D(0.110609,0.048649,
zOff+1.189974
), new Point3D(0.121764,0.014845,
zOff+1.184001
));
object[1089] = new Triangle(new Point3D(0.121764,0.014845,
zOff+1.184001
), new Point3D(0.131710,0.042011,
zOff+1.193638
), new Point3D(0.120510,0.063693,
zOff+1.199364
));
object[1090] = new Triangle(new Point3D(-0.121764,0.014845,
zOff+1.184001
), new Point3D(-0.110609,0.048649,
zOff+1.189974
), new Point3D(-0.120510,0.063693,
zOff+1.199364
));
object[1091] = new Triangle(new Point3D(-0.120510,0.063693,
zOff+1.199364
), new Point3D(-0.131710,0.042011,
zOff+1.193638
), new Point3D(-0.121764,0.014845,
zOff+1.184001
));
object[1092] = new Triangle(new Point3D(0.097359,0.046808,
zOff+1.115523
), new Point3D(0.109445,0.056474,
zOff+1.110226
), new Point3D(0.119965,0.037792,
zOff+1.105212
));
object[1093] = new Triangle(new Point3D(0.119965,0.037792,
zOff+1.105212
), new Point3D(0.112827,0.019294,
zOff+1.109976
), new Point3D(0.097359,0.046808,
zOff+1.115523
));
object[1094] = new Triangle(new Point3D(-0.119965,0.037792,
zOff+1.105212
), new Point3D(-0.109445,0.056474,
zOff+1.110226
), new Point3D(-0.097359,0.046808,
zOff+1.115523
));
object[1095] = new Triangle(new Point3D(-0.097359,0.046808,
zOff+1.115523
), new Point3D(-0.112827,0.019294,
zOff+1.109976
), new Point3D(-0.119965,0.037792,
zOff+1.105212
));
object[1096] = new Triangle(new Point3D(0.109445,0.056474,
zOff+1.110226
), new Point3D(0.116319,0.067742,
zOff+1.111466
), new Point3D(0.126612,0.056280,
zOff+1.107510
));
object[1097] = new Triangle(new Point3D(0.126612,0.056280,
zOff+1.107510
), new Point3D(0.119965,0.037792,
zOff+1.105212
), new Point3D(0.109445,0.056474,
zOff+1.110226
));
object[1098] = new Triangle(new Point3D(-0.126612,0.056280,
zOff+1.107510
), new Point3D(-0.116319,0.067742,
zOff+1.111466
), new Point3D(-0.109445,0.056474,
zOff+1.110226
));
object[1099] = new Triangle(new Point3D(-0.109445,0.056474,
zOff+1.110226
), new Point3D(-0.119965,0.037792,
zOff+1.105212
), new Point3D(-0.126612,0.056280,
zOff+1.107510
));
object[1100] = new Triangle(new Point3D(0.146381,0.088498,
zOff+1.165781
), new Point3D(0.122048,0.047162,
zOff+1.149317
), new Point3D(0.119965,0.037792,
zOff+1.105212
));
object[1101] = new Triangle(new Point3D(0.119965,0.037792,
zOff+1.105212
), new Point3D(0.126612,0.056280,
zOff+1.107510
), new Point3D(0.146381,0.088498,
zOff+1.165781
));
object[1102] = new Triangle(new Point3D(-0.119965,0.037792,
zOff+1.105212
), new Point3D(-0.122048,0.047162,
zOff+1.149317
), new Point3D(-0.146381,0.088498,
zOff+1.165781
));
object[1103] = new Triangle(new Point3D(-0.146381,0.088498,
zOff+1.165781
), new Point3D(-0.126612,0.056280,
zOff+1.107510
), new Point3D(-0.119965,0.037792,
zOff+1.105212
));
object[1104] = new Triangle(new Point3D(0.122048,0.047162,
zOff+1.149317
), new Point3D(0.118580,0.011898,
zOff+1.150576
), new Point3D(0.112827,0.019294,
zOff+1.109976
));
object[1105] = new Triangle(new Point3D(0.112827,0.019294,
zOff+1.109976
), new Point3D(0.119965,0.037792,
zOff+1.105212
), new Point3D(0.122048,0.047162,
zOff+1.149317
));
object[1106] = new Triangle(new Point3D(-0.112827,0.019294,
zOff+1.109976
), new Point3D(-0.118580,0.011898,
zOff+1.150576
), new Point3D(-0.122048,0.047162,
zOff+1.149317
));
object[1107] = new Triangle(new Point3D(-0.122048,0.047162,
zOff+1.149317
), new Point3D(-0.119965,0.037792,
zOff+1.105212
), new Point3D(-0.112827,0.019294,
zOff+1.109976
));
object[1108] = new Triangle(new Point3D(0.118580,0.011898,
zOff+1.150576
), new Point3D(0.122048,0.047162,
zOff+1.149317
), new Point3D(0.131710,0.042011,
zOff+1.193638
));
object[1109] = new Triangle(new Point3D(0.131710,0.042011,
zOff+1.193638
), new Point3D(0.121764,0.014845,
zOff+1.184001
), new Point3D(0.118580,0.011898,
zOff+1.150576
));
object[1110] = new Triangle(new Point3D(-0.131710,0.042011,
zOff+1.193638
), new Point3D(-0.122048,0.047162,
zOff+1.149317
), new Point3D(-0.118580,0.011898,
zOff+1.150576
));
object[1111] = new Triangle(new Point3D(-0.118580,0.011898,
zOff+1.150576
), new Point3D(-0.121764,0.014845,
zOff+1.184001
), new Point3D(-0.131710,0.042011,
zOff+1.193638
));
object[1112] = new Triangle(new Point3D(0.122048,0.047162,
zOff+1.149317
), new Point3D(0.146381,0.088498,
zOff+1.165781
), new Point3D(0.142387,0.068629,
zOff+1.201568
));
object[1113] = new Triangle(new Point3D(0.142387,0.068629,
zOff+1.201568
), new Point3D(0.131710,0.042011,
zOff+1.193638
), new Point3D(0.122048,0.047162,
zOff+1.149317
));
object[1114] = new Triangle(new Point3D(-0.142387,0.068629,
zOff+1.201568
), new Point3D(-0.146381,0.088498,
zOff+1.165781
), new Point3D(-0.122048,0.047162,
zOff+1.149317
));
object[1115] = new Triangle(new Point3D(-0.122048,0.047162,
zOff+1.149317
), new Point3D(-0.131710,0.042011,
zOff+1.193638
), new Point3D(-0.142387,0.068629,
zOff+1.201568
));
object[1116] = new Triangle(new Point3D(0.110609,0.048649,
zOff+1.189974
), new Point3D(0.120510,0.063693,
zOff+1.199364
), new Point3D(0.118119,0.079305,
zOff+1.162864
));
object[1117] = new Triangle(new Point3D(0.118119,0.079305,
zOff+1.162864
), new Point3D(0.108525,0.056334,
zOff+1.155521
), new Point3D(0.110609,0.048649,
zOff+1.189974
));
object[1118] = new Triangle(new Point3D(-0.118119,0.079305,
zOff+1.162864
), new Point3D(-0.120510,0.063693,
zOff+1.199364
), new Point3D(-0.110609,0.048649,
zOff+1.189974
));
object[1119] = new Triangle(new Point3D(-0.110609,0.048649,
zOff+1.189974
), new Point3D(-0.108525,0.056334,
zOff+1.155521
), new Point3D(-0.118119,0.079305,
zOff+1.162864
));
object[1120] = new Triangle(new Point3D(0.120510,0.063693,
zOff+1.199364
), new Point3D(0.129157,0.080212,
zOff+1.205082
), new Point3D(0.133278,0.100269,
zOff+1.169702
));
object[1121] = new Triangle(new Point3D(0.133278,0.100269,
zOff+1.169702
), new Point3D(0.118119,0.079305,
zOff+1.162864
), new Point3D(0.120510,0.063693,
zOff+1.199364
));
object[1122] = new Triangle(new Point3D(-0.133278,0.100269,
zOff+1.169702
), new Point3D(-0.129157,0.080212,
zOff+1.205082
), new Point3D(-0.120510,0.063693,
zOff+1.199364
));
object[1123] = new Triangle(new Point3D(-0.120510,0.063693,
zOff+1.199364
), new Point3D(-0.118119,0.079305,
zOff+1.162864
), new Point3D(-0.133278,0.100269,
zOff+1.169702
));
object[1124] = new Triangle(new Point3D(0.108525,0.056334,
zOff+1.155521
), new Point3D(0.118119,0.079305,
zOff+1.162864
), new Point3D(0.109445,0.056474,
zOff+1.110226
));
object[1125] = new Triangle(new Point3D(0.109445,0.056474,
zOff+1.110226
), new Point3D(0.097359,0.046808,
zOff+1.115523
), new Point3D(0.108525,0.056334,
zOff+1.155521
));
object[1126] = new Triangle(new Point3D(-0.109445,0.056474,
zOff+1.110226
), new Point3D(-0.118119,0.079305,
zOff+1.162864
), new Point3D(-0.108525,0.056334,
zOff+1.155521
));
object[1127] = new Triangle(new Point3D(-0.108525,0.056334,
zOff+1.155521
), new Point3D(-0.097359,0.046808,
zOff+1.115523
), new Point3D(-0.109445,0.056474,
zOff+1.110226
));
object[1128] = new Triangle(new Point3D(0.118119,0.079305,
zOff+1.162864
), new Point3D(0.133278,0.100269,
zOff+1.169702
), new Point3D(0.116319,0.067742,
zOff+1.111466
));
object[1129] = new Triangle(new Point3D(0.116319,0.067742,
zOff+1.111466
), new Point3D(0.109445,0.056474,
zOff+1.110226
), new Point3D(0.118119,0.079305,
zOff+1.162864
));
object[1130] = new Triangle(new Point3D(-0.116319,0.067742,
zOff+1.111466
), new Point3D(-0.133278,0.100269,
zOff+1.169702
), new Point3D(-0.118119,0.079305,
zOff+1.162864
));
object[1131] = new Triangle(new Point3D(-0.118119,0.079305,
zOff+1.162864
), new Point3D(-0.109445,0.056474,
zOff+1.110226
), new Point3D(-0.116319,0.067742,
zOff+1.111466
));
object[1132] = new Triangle(new Point3D(0.675813,0.084344,
zOff+0.177210
), new Point3D(0.716407,0.056734,
zOff+0.139702
), new Point3D(0.710147,-0.017765,
zOff+0.139420
));
object[1133] = new Triangle(new Point3D(0.710147,-0.017765,
zOff+0.139420
), new Point3D(0.665620,0.037281,
zOff+0.183307
), new Point3D(0.675813,0.084344,
zOff+0.177210
));
object[1134] = new Triangle(new Point3D(-0.710147,-0.017765,
zOff+0.139419
), new Point3D(-0.716407,0.056734,
zOff+0.139702
), new Point3D(-0.675813,0.084344,
zOff+0.177210
));
object[1135] = new Triangle(new Point3D(-0.675813,0.084344,
zOff+0.177210
), new Point3D(-0.665620,0.037281,
zOff+0.183306
), new Point3D(-0.710147,-0.017765,
zOff+0.139419
));
object[1136] = new Triangle(new Point3D(0.716407,0.056734,
zOff+0.139702
), new Point3D(0.711550,0.055822,
zOff+0.109432
), new Point3D(0.704111,-0.027508,
zOff+0.108221
));
object[1137] = new Triangle(new Point3D(0.704111,-0.027508,
zOff+0.108221
), new Point3D(0.710147,-0.017765,
zOff+0.139420
), new Point3D(0.716407,0.056734,
zOff+0.139702
));
object[1138] = new Triangle(new Point3D(-0.704111,-0.027508,
zOff+0.108221
), new Point3D(-0.711550,0.055822,
zOff+0.109431
), new Point3D(-0.716407,0.056734,
zOff+0.139702
));
object[1139] = new Triangle(new Point3D(-0.716407,0.056734,
zOff+0.139702
), new Point3D(-0.710147,-0.017765,
zOff+0.139419
), new Point3D(-0.704111,-0.027508,
zOff+0.108221
));
object[1140] = new Triangle(new Point3D(0.676809,-0.009731,
zOff+0.201148
), new Point3D(0.725255,-0.060962,
zOff+0.147813
), new Point3D(0.765992,-0.064711,
zOff+0.167801
));
object[1141] = new Triangle(new Point3D(0.765992,-0.064711,
zOff+0.167801
), new Point3D(0.708690,-0.030568,
zOff+0.225212
), new Point3D(0.676809,-0.009731,
zOff+0.201148
));
object[1142] = new Triangle(new Point3D(-0.765992,-0.064711,
zOff+0.167801
), new Point3D(-0.725255,-0.060962,
zOff+0.147812
), new Point3D(-0.676809,-0.009731,
zOff+0.201147
));
object[1143] = new Triangle(new Point3D(-0.676809,-0.009731,
zOff+0.201147
), new Point3D(-0.708690,-0.030568,
zOff+0.225212
), new Point3D(-0.765992,-0.064711,
zOff+0.167801
));
object[1144] = new Triangle(new Point3D(0.725255,-0.060962,
zOff+0.147813
), new Point3D(0.724172,-0.073470,
zOff+0.117582
), new Point3D(0.777874,-0.075458,
zOff+0.142467
));
object[1145] = new Triangle(new Point3D(0.777874,-0.075458,
zOff+0.142467
), new Point3D(0.765992,-0.064711,
zOff+0.167801
), new Point3D(0.725255,-0.060962,
zOff+0.147813
));
object[1146] = new Triangle(new Point3D(-0.777874,-0.075458,
zOff+0.142467
), new Point3D(-0.724172,-0.073470,
zOff+0.117582
), new Point3D(-0.725255,-0.060962,
zOff+0.147812
));
object[1147] = new Triangle(new Point3D(-0.725255,-0.060962,
zOff+0.147812
), new Point3D(-0.765992,-0.064711,
zOff+0.167801
), new Point3D(-0.777874,-0.075458,
zOff+0.142467
));
object[1148] = new Triangle(new Point3D(0.665620,0.037281,
zOff+0.183307
), new Point3D(0.710147,-0.017765,
zOff+0.139420
), new Point3D(0.725255,-0.060962,
zOff+0.147813
));
object[1149] = new Triangle(new Point3D(0.725255,-0.060962,
zOff+0.147813
), new Point3D(0.676809,-0.009731,
zOff+0.201148
), new Point3D(0.665620,0.037281,
zOff+0.183307
));
object[1150] = new Triangle(new Point3D(-0.725255,-0.060962,
zOff+0.147812
), new Point3D(-0.710147,-0.017765,
zOff+0.139419
), new Point3D(-0.665620,0.037281,
zOff+0.183306
));
object[1151] = new Triangle(new Point3D(-0.665620,0.037281,
zOff+0.183306
), new Point3D(-0.676809,-0.009731,
zOff+0.201147
), new Point3D(-0.725255,-0.060962,
zOff+0.147812
));
object[1152] = new Triangle(new Point3D(0.710147,-0.017765,
zOff+0.139420
), new Point3D(0.704111,-0.027508,
zOff+0.108221
), new Point3D(0.724172,-0.073470,
zOff+0.117582
));
object[1153] = new Triangle(new Point3D(0.724172,-0.073470,
zOff+0.117582
), new Point3D(0.725255,-0.060962,
zOff+0.147813
), new Point3D(0.710147,-0.017765,
zOff+0.139420
));
object[1154] = new Triangle(new Point3D(-0.724172,-0.073470,
zOff+0.117582
), new Point3D(-0.704111,-0.027508,
zOff+0.108221
), new Point3D(-0.710147,-0.017765,
zOff+0.139419
));
object[1155] = new Triangle(new Point3D(-0.710147,-0.017765,
zOff+0.139419
), new Point3D(-0.725255,-0.060962,
zOff+0.147812
), new Point3D(-0.724172,-0.073470,
zOff+0.117582
));
object[1156] = new Triangle(new Point3D(0.713656,0.090635,
zOff+0.197107
), new Point3D(0.744904,0.082967,
zOff+0.146030
), new Point3D(0.716407,0.056734,
zOff+0.139702
));
object[1157] = new Triangle(new Point3D(0.716407,0.056734,
zOff+0.139702
), new Point3D(0.675813,0.084344,
zOff+0.177210
), new Point3D(0.713656,0.090635,
zOff+0.197107
));
object[1158] = new Triangle(new Point3D(-0.716407,0.056734,
zOff+0.139702
), new Point3D(-0.744904,0.082967,
zOff+0.146029
), new Point3D(-0.713656,0.090635,
zOff+0.197106
));
object[1159] = new Triangle(new Point3D(-0.713656,0.090635,
zOff+0.197106
), new Point3D(-0.675813,0.084344,
zOff+0.177210
), new Point3D(-0.716407,0.056734,
zOff+0.139702
));
object[1160] = new Triangle(new Point3D(0.744904,0.082967,
zOff+0.146030
), new Point3D(0.746921,0.086392,
zOff+0.115393
), new Point3D(0.711550,0.055822,
zOff+0.109432
));
object[1161] = new Triangle(new Point3D(0.711550,0.055822,
zOff+0.109432
), new Point3D(0.716407,0.056734,
zOff+0.139702
), new Point3D(0.744904,0.082967,
zOff+0.146030
));
object[1162] = new Triangle(new Point3D(-0.711550,0.055822,
zOff+0.109431
), new Point3D(-0.746921,0.086392,
zOff+0.115392
), new Point3D(-0.744904,0.082967,
zOff+0.146029
));
object[1163] = new Triangle(new Point3D(-0.744904,0.082967,
zOff+0.146029
), new Point3D(-0.716407,0.056734,
zOff+0.139702
), new Point3D(-0.711550,0.055822,
zOff+0.109431
));
object[1164] = new Triangle(new Point3D(0.708690,-0.030568,
zOff+0.225212
), new Point3D(0.765992,-0.064711,
zOff+0.167801
), new Point3D(0.794721,-0.024715,
zOff+0.175040
));
object[1165] = new Triangle(new Point3D(0.794721,-0.024715,
zOff+0.175040
), new Point3D(0.759741,-0.014125,
zOff+0.250775
), new Point3D(0.708690,-0.030568,
zOff+0.225212
));
object[1166] = new Triangle(new Point3D(-0.794721,-0.024715,
zOff+0.175039
), new Point3D(-0.765992,-0.064711,
zOff+0.167801
), new Point3D(-0.708690,-0.030568,
zOff+0.225212
));
object[1167] = new Triangle(new Point3D(-0.708690,-0.030568,
zOff+0.225212
), new Point3D(-0.759741,-0.014125,
zOff+0.250775
), new Point3D(-0.794721,-0.024715,
zOff+0.175039
));
object[1168] = new Triangle(new Point3D(0.765992,-0.064711,
zOff+0.167801
), new Point3D(0.777874,-0.075458,
zOff+0.142467
), new Point3D(0.811726,-0.029668,
zOff+0.148840
));
object[1169] = new Triangle(new Point3D(0.811726,-0.029668,
zOff+0.148840
), new Point3D(0.794721,-0.024715,
zOff+0.175040
), new Point3D(0.765992,-0.064711,
zOff+0.167801
));
object[1170] = new Triangle(new Point3D(-0.811726,-0.029668,
zOff+0.148840
), new Point3D(-0.777874,-0.075458,
zOff+0.142467
), new Point3D(-0.765992,-0.064711,
zOff+0.167801
));
object[1171] = new Triangle(new Point3D(-0.765992,-0.064711,
zOff+0.167801
), new Point3D(-0.794721,-0.024715,
zOff+0.175039
), new Point3D(-0.811726,-0.029668,
zOff+0.148840
));
object[1172] = new Triangle(new Point3D(0.822220,0.025730,
zOff+0.144237
), new Point3D(0.802968,0.025983,
zOff+0.171356
), new Point3D(0.794721,-0.024715,
zOff+0.175040
));
object[1173] = new Triangle(new Point3D(0.794721,-0.024715,
zOff+0.175040
), new Point3D(0.811726,-0.029668,
zOff+0.148840
), new Point3D(0.822220,0.025730,
zOff+0.144237
));
object[1174] = new Triangle(new Point3D(-0.794721,-0.024715,
zOff+0.175039
), new Point3D(-0.802968,0.025983,
zOff+0.171356
), new Point3D(-0.822220,0.025730,
zOff+0.144237
));
object[1175] = new Triangle(new Point3D(-0.822220,0.025730,
zOff+0.144237
), new Point3D(-0.811726,-0.029668,
zOff+0.148840
), new Point3D(-0.794721,-0.024715,
zOff+0.175039
));
object[1176] = new Triangle(new Point3D(0.802968,0.025983,
zOff+0.171356
), new Point3D(0.768432,0.028868,
zOff+0.245831
), new Point3D(0.759741,-0.014125,
zOff+0.250775
));
object[1177] = new Triangle(new Point3D(0.759741,-0.014125,
zOff+0.250775
), new Point3D(0.794721,-0.024715,
zOff+0.175040
), new Point3D(0.802968,0.025983,
zOff+0.171356
));
object[1178] = new Triangle(new Point3D(-0.759741,-0.014125,
zOff+0.250775
), new Point3D(-0.768432,0.028868,
zOff+0.245830
), new Point3D(-0.802968,0.025983,
zOff+0.171356
));
object[1179] = new Triangle(new Point3D(-0.802968,0.025983,
zOff+0.171356
), new Point3D(-0.794721,-0.024715,
zOff+0.175039
), new Point3D(-0.759741,-0.014125,
zOff+0.250775
));
object[1180] = new Triangle(new Point3D(0.752818,0.069912,
zOff+0.230331
), new Point3D(0.779828,0.070206,
zOff+0.160664
), new Point3D(0.744904,0.082967,
zOff+0.146030
));
object[1181] = new Triangle(new Point3D(0.744904,0.082967,
zOff+0.146030
), new Point3D(0.713656,0.090635,
zOff+0.197107
), new Point3D(0.752818,0.069912,
zOff+0.230331
));
object[1182] = new Triangle(new Point3D(-0.744904,0.082967,
zOff+0.146029
), new Point3D(-0.779828,0.070206,
zOff+0.160664
), new Point3D(-0.752818,0.069912,
zOff+0.230331
));
object[1183] = new Triangle(new Point3D(-0.752818,0.069912,
zOff+0.230331
), new Point3D(-0.713656,0.090635,
zOff+0.197106
), new Point3D(-0.744904,0.082967,
zOff+0.146029
));
object[1184] = new Triangle(new Point3D(0.779828,0.070206,
zOff+0.160664
), new Point3D(0.797960,0.070879,
zOff+0.137397
), new Point3D(0.746921,0.086392,
zOff+0.115393
));
object[1185] = new Triangle(new Point3D(0.746921,0.086392,
zOff+0.115393
), new Point3D(0.744904,0.082967,
zOff+0.146030
), new Point3D(0.779828,0.070206,
zOff+0.160664
));
object[1186] = new Triangle(new Point3D(-0.746921,0.086392,
zOff+0.115392
), new Point3D(-0.797960,0.070879,
zOff+0.137397
), new Point3D(-0.779828,0.070206,
zOff+0.160664
));
object[1187] = new Triangle(new Point3D(-0.779828,0.070206,
zOff+0.160664
), new Point3D(-0.744904,0.082967,
zOff+0.146029
), new Point3D(-0.746921,0.086392,
zOff+0.115392
));
object[1188] = new Triangle(new Point3D(0.802968,0.025983,
zOff+0.171356
), new Point3D(0.822220,0.025730,
zOff+0.144237
), new Point3D(0.797960,0.070879,
zOff+0.137397
));
object[1189] = new Triangle(new Point3D(0.797960,0.070879,
zOff+0.137397
), new Point3D(0.779828,0.070206,
zOff+0.160664
), new Point3D(0.802968,0.025983,
zOff+0.171356
));
object[1190] = new Triangle(new Point3D(-0.797960,0.070879,
zOff+0.137397
), new Point3D(-0.822220,0.025730,
zOff+0.144237
), new Point3D(-0.802968,0.025983,
zOff+0.171356
));
object[1191] = new Triangle(new Point3D(-0.802968,0.025983,
zOff+0.171356
), new Point3D(-0.779828,0.070206,
zOff+0.160664
), new Point3D(-0.797960,0.070879,
zOff+0.137397
));
object[1192] = new Triangle(new Point3D(0.779828,0.070206,
zOff+0.160664
), new Point3D(0.752818,0.069912,
zOff+0.230331
), new Point3D(0.768432,0.028868,
zOff+0.245831
));
object[1193] = new Triangle(new Point3D(0.768432,0.028868,
zOff+0.245831
), new Point3D(0.802968,0.025983,
zOff+0.171356
), new Point3D(0.779828,0.070206,
zOff+0.160664
));
object[1194] = new Triangle(new Point3D(-0.768432,0.028868,
zOff+0.245830
), new Point3D(-0.752818,0.069912,
zOff+0.230331
), new Point3D(-0.779828,0.070206,
zOff+0.160664
));
object[1195] = new Triangle(new Point3D(-0.779828,0.070206,
zOff+0.160664
), new Point3D(-0.802968,0.025983,
zOff+0.171356
), new Point3D(-0.768432,0.028868,
zOff+0.245830
));
object[1196] = new Triangle(new Point3D(0.070872,0.101545,
zOff-0.447379
), new Point3D(0.158311,0.142241,
zOff-0.431811
), new Point3D(0.155935,0.141203,
zOff-0.647936
));
object[1197] = new Triangle(new Point3D(0.155935,0.141203,
zOff-0.647936
), new Point3D(0.096008,0.118854,
zOff-0.691001
), new Point3D(0.070872,0.101545,
zOff-0.447379
));
object[1198] = new Triangle(new Point3D(-0.155935,0.141203,
zOff-0.647936
), new Point3D(-0.158311,0.142241,
zOff-0.431811
), new Point3D(-0.070872,0.101545,
zOff-0.447379
));
object[1199] = new Triangle(new Point3D(-0.070872,0.101545,
zOff-0.447379
), new Point3D(-0.096008,0.118854,
zOff-0.691001
), new Point3D(-0.155935,0.141203,
zOff-0.647936
));
object[1200] = new Triangle(new Point3D(0.034653,0.000078,
zOff-0.466132
), new Point3D(0.070872,0.101545,
zOff-0.447379
), new Point3D(0.096008,0.118854,
zOff-0.691001
));
object[1201] = new Triangle(new Point3D(0.096008,0.118854,
zOff-0.691001
), new Point3D(0.068775,0.039799,
zOff-0.683630
), new Point3D(0.034653,0.000078,
zOff-0.466132
));
object[1202] = new Triangle(new Point3D(-0.096008,0.118854,
zOff-0.691001
), new Point3D(-0.070872,0.101545,
zOff-0.447379
), new Point3D(-0.034653,0.000078,
zOff-0.466132
));
object[1203] = new Triangle(new Point3D(-0.034653,0.000078,
zOff-0.466132
), new Point3D(-0.068775,0.039799,
zOff-0.683630
), new Point3D(-0.096008,0.118854,
zOff-0.691001
));
object[1204] = new Triangle(new Point3D(0.070872,-0.102722,
zOff-0.477085
), new Point3D(0.034653,0.000078,
zOff-0.466132
), new Point3D(0.068775,0.039799,
zOff-0.683630
));
object[1205] = new Triangle(new Point3D(0.068775,0.039799,
zOff-0.683630
), new Point3D(0.097036,-0.043218,
zOff-0.676266
), new Point3D(0.070872,-0.102722,
zOff-0.477085
));
object[1206] = new Triangle(new Point3D(-0.068775,0.039799,
zOff-0.683630
), new Point3D(-0.034653,0.000078,
zOff-0.466132
), new Point3D(-0.070872,-0.102722,
zOff-0.477085
));
object[1207] = new Triangle(new Point3D(-0.070872,-0.102722,
zOff-0.477085
), new Point3D(-0.097036,-0.043218,
zOff-0.676266
), new Point3D(-0.068775,0.039799,
zOff-0.683630
));
object[1208] = new Triangle(new Point3D(0.158311,-0.146636,
zOff-0.473821
), new Point3D(0.070872,-0.102722,
zOff-0.477085
), new Point3D(0.097036,-0.043218,
zOff-0.676266
));
object[1209] = new Triangle(new Point3D(0.097036,-0.043218,
zOff-0.676266
), new Point3D(0.161251,-0.073031,
zOff-0.667938
), new Point3D(0.158311,-0.146636,
zOff-0.473821
));
object[1210] = new Triangle(new Point3D(-0.097036,-0.043218,
zOff-0.676266
), new Point3D(-0.070872,-0.102722,
zOff-0.477085
), new Point3D(-0.158311,-0.146636,
zOff-0.473821
));
object[1211] = new Triangle(new Point3D(-0.158311,-0.146636,
zOff-0.473821
), new Point3D(-0.161251,-0.073031,
zOff-0.667938
), new Point3D(-0.097036,-0.043218,
zOff-0.676266
));
object[1212] = new Triangle(new Point3D(0.245750,-0.105939,
zOff-0.458254
), new Point3D(0.158311,-0.146636,
zOff-0.473821
), new Point3D(0.161251,-0.073031,
zOff-0.667938
));
object[1213] = new Triangle(new Point3D(0.161251,-0.073031,
zOff-0.667938
), new Point3D(0.224907,-0.042622,
zOff-0.658153
), new Point3D(0.245750,-0.105939,
zOff-0.458254
));
object[1214] = new Triangle(new Point3D(-0.161251,-0.073031,
zOff-0.667938
), new Point3D(-0.158311,-0.146636,
zOff-0.473821
), new Point3D(-0.245750,-0.105939,
zOff-0.458254
));
object[1215] = new Triangle(new Point3D(-0.245750,-0.105939,
zOff-0.458254
), new Point3D(-0.224907,-0.042622,
zOff-0.658153
), new Point3D(-0.161251,-0.073031,
zOff-0.667938
));
object[1216] = new Triangle(new Point3D(0.281969,-0.004472,
zOff-0.439501
), new Point3D(0.245750,-0.105939,
zOff-0.458254
), new Point3D(0.224907,-0.042622,
zOff-0.658153
));
object[1217] = new Triangle(new Point3D(0.224907,-0.042622,
zOff-0.658153
), new Point3D(0.249612,0.040643,
zOff-0.658014
), new Point3D(0.281969,-0.004472,
zOff-0.439501
));
object[1218] = new Triangle(new Point3D(-0.224907,-0.042622,
zOff-0.658153
), new Point3D(-0.245750,-0.105939,
zOff-0.458254
), new Point3D(-0.281969,-0.004472,
zOff-0.439501
));
object[1219] = new Triangle(new Point3D(-0.281969,-0.004472,
zOff-0.439501
), new Point3D(-0.249612,0.040643,
zOff-0.658014
), new Point3D(-0.224907,-0.042622,
zOff-0.658153
));
object[1220] = new Triangle(new Point3D(0.245750,0.098328,
zOff-0.428548
), new Point3D(0.281969,-0.004472,
zOff-0.439501
), new Point3D(0.249612,0.040643,
zOff-0.658014
));
object[1221] = new Triangle(new Point3D(0.249612,0.040643,
zOff-0.658014
), new Point3D(0.223879,0.119451,
zOff-0.672888
), new Point3D(0.245750,0.098328,
zOff-0.428548
));
object[1222] = new Triangle(new Point3D(-0.249612,0.040643,
zOff-0.658014
), new Point3D(-0.281969,-0.004472,
zOff-0.439501
), new Point3D(-0.245750,0.098328,
zOff-0.428548
));
object[1223] = new Triangle(new Point3D(-0.245750,0.098328,
zOff-0.428548
), new Point3D(-0.223879,0.119451,
zOff-0.672888
), new Point3D(-0.249612,0.040643,
zOff-0.658014
));
object[1224] = new Triangle(new Point3D(0.158311,0.142241,
zOff-0.431811
), new Point3D(0.245750,0.098328,
zOff-0.428548
), new Point3D(0.223879,0.119451,
zOff-0.672888
));
object[1225] = new Triangle(new Point3D(0.223879,0.119451,
zOff-0.672888
), new Point3D(0.155935,0.141203,
zOff-0.647936
), new Point3D(0.158311,0.142241,
zOff-0.431811
));
object[1226] = new Triangle(new Point3D(-0.223879,0.119451,
zOff-0.672888
), new Point3D(-0.245750,0.098328,
zOff-0.428548
), new Point3D(-0.158311,0.142241,
zOff-0.431811
));
object[1227] = new Triangle(new Point3D(-0.158311,0.142241,
zOff-0.431811
), new Point3D(-0.155935,0.141203,
zOff-0.647936
), new Point3D(-0.223879,0.119451,
zOff-0.672888
));
object[1228] = new Triangle(new Point3D(0.015091,-0.025738,
zOff-0.172510
), new Point3D(0.000000,-0.025738,
zOff-0.178002
), new Point3D(-0.000000,0.083921,
zOff-0.119597
));
object[1229] = new Triangle(new Point3D(-0.000000,0.083921,
zOff-0.119597
), new Point3D(0.046134,0.088369,
zOff-0.134903
), new Point3D(0.015091,-0.025738,
zOff-0.172510
));
object[1230] = new Triangle(new Point3D(-0.000000,0.083921,
zOff-0.119597
), new Point3D(0.000000,-0.025738,
zOff-0.178002
), new Point3D(-0.015091,-0.025738,
zOff-0.172510
));
object[1231] = new Triangle(new Point3D(-0.015091,-0.025738,
zOff-0.172510
), new Point3D(-0.046134,0.088369,
zOff-0.134903
), new Point3D(-0.000000,0.083921,
zOff-0.119597
));
object[1232] = new Triangle(new Point3D(0.046134,-0.139845,
zOff-0.134903
), new Point3D(0.000000,-0.137788,
zOff-0.146723
), new Point3D(0.000000,-0.025738,
zOff-0.178002
));
object[1233] = new Triangle(new Point3D(0.000000,-0.025738,
zOff-0.178002
), new Point3D(0.015091,-0.025738,
zOff-0.172510
), new Point3D(0.046134,-0.139845,
zOff-0.134903
));
object[1234] = new Triangle(new Point3D(0.000000,-0.025738,
zOff-0.178002
), new Point3D(0.000000,-0.137788,
zOff-0.146723
), new Point3D(-0.046134,-0.139845,
zOff-0.134903
));
object[1235] = new Triangle(new Point3D(-0.046134,-0.139845,
zOff-0.134903
), new Point3D(-0.015091,-0.025738,
zOff-0.172510
), new Point3D(0.000000,-0.025738,
zOff-0.178002
));
object[1236] = new Triangle(new Point3D(0.046134,0.088369,
zOff-0.134903
), new Point3D(0.123267,0.149062,
zOff-0.034942
), new Point3D(0.130716,0.135401,
zOff-0.232943
));
object[1237] = new Triangle(new Point3D(0.130716,0.135401,
zOff-0.232943
), new Point3D(0.048273,0.088557,
zOff-0.242439
), new Point3D(0.046134,0.088369,
zOff-0.134903
));
object[1238] = new Triangle(new Point3D(-0.130716,0.135401,
zOff-0.232943
), new Point3D(-0.123267,0.149062,
zOff-0.034942
), new Point3D(-0.046134,0.088369,
zOff-0.134903
));
object[1239] = new Triangle(new Point3D(-0.046134,0.088369,
zOff-0.134903
), new Point3D(-0.048273,0.088557,
zOff-0.242439
), new Point3D(-0.130716,0.135401,
zOff-0.232943
));
object[1240] = new Triangle(new Point3D(0.048273,0.088557,
zOff-0.242439
), new Point3D(0.130716,0.135401,
zOff-0.232943
), new Point3D(0.158311,0.142241,
zOff-0.431811
));
object[1241] = new Triangle(new Point3D(0.158311,0.142241,
zOff-0.431811
), new Point3D(0.070872,0.101545,
zOff-0.447379
), new Point3D(0.048273,0.088557,
zOff-0.242439
));
object[1242] = new Triangle(new Point3D(-0.158311,0.142241,
zOff-0.431811
), new Point3D(-0.130716,0.135401,
zOff-0.232943
), new Point3D(-0.048273,0.088557,
zOff-0.242439
));
object[1243] = new Triangle(new Point3D(-0.048273,0.088557,
zOff-0.242439
), new Point3D(-0.070872,0.101545,
zOff-0.447379
), new Point3D(-0.158311,0.142241,
zOff-0.431811
));
object[1244] = new Triangle(new Point3D(0.015091,-0.025738,
zOff-0.172510
), new Point3D(0.046134,0.088369,
zOff-0.134903
), new Point3D(0.048273,0.088557,
zOff-0.242439
));
object[1245] = new Triangle(new Point3D(0.048273,0.088557,
zOff-0.242439
), new Point3D(0.016575,-0.024764,
zOff-0.277663
), new Point3D(0.015091,-0.025738,
zOff-0.172510
));
object[1246] = new Triangle(new Point3D(-0.048273,0.088557,
zOff-0.242439
), new Point3D(-0.046134,0.088369,
zOff-0.134903
), new Point3D(-0.015091,-0.025738,
zOff-0.172510
));
object[1247] = new Triangle(new Point3D(-0.015091,-0.025738,
zOff-0.172510
), new Point3D(-0.016575,-0.024764,
zOff-0.277663
), new Point3D(-0.048273,0.088557,
zOff-0.242439
));
object[1248] = new Triangle(new Point3D(0.016575,-0.024764,
zOff-0.277663
), new Point3D(0.048273,0.088557,
zOff-0.242439
), new Point3D(0.070872,0.101545,
zOff-0.447379
));
object[1249] = new Triangle(new Point3D(0.070872,0.101545,
zOff-0.447379
), new Point3D(0.034653,0.000078,
zOff-0.466132
), new Point3D(0.016575,-0.024764,
zOff-0.277663
));
object[1250] = new Triangle(new Point3D(-0.070872,0.101545,
zOff-0.447379
), new Point3D(-0.048273,0.088557,
zOff-0.242439
), new Point3D(-0.016575,-0.024764,
zOff-0.277663
));
object[1251] = new Triangle(new Point3D(-0.016575,-0.024764,
zOff-0.277663
), new Point3D(-0.034653,0.000078,
zOff-0.466132
), new Point3D(-0.070872,0.101545,
zOff-0.447379
));
object[1252] = new Triangle(new Point3D(0.046134,-0.139845,
zOff-0.134903
), new Point3D(0.015091,-0.025738,
zOff-0.172510
), new Point3D(0.016575,-0.024764,
zOff-0.277663
));
object[1253] = new Triangle(new Point3D(0.016575,-0.024764,
zOff-0.277663
), new Point3D(0.048273,-0.138179,
zOff-0.244378
), new Point3D(0.046134,-0.139845,
zOff-0.134903
));
object[1254] = new Triangle(new Point3D(-0.016575,-0.024764,
zOff-0.277663
), new Point3D(-0.015091,-0.025738,
zOff-0.172510
), new Point3D(-0.046134,-0.139845,
zOff-0.134903
));
object[1255] = new Triangle(new Point3D(-0.046134,-0.139845,
zOff-0.134903
), new Point3D(-0.048273,-0.138179,
zOff-0.244378
), new Point3D(-0.016575,-0.024764,
zOff-0.277663
));
object[1256] = new Triangle(new Point3D(0.048273,-0.138179,
zOff-0.244378
), new Point3D(0.016575,-0.024764,
zOff-0.277663
), new Point3D(0.034653,0.000078,
zOff-0.466132
));
object[1257] = new Triangle(new Point3D(0.034653,0.000078,
zOff-0.466132
), new Point3D(0.070872,-0.102722,
zOff-0.477085
), new Point3D(0.048273,-0.138179,
zOff-0.244378
));
object[1258] = new Triangle(new Point3D(-0.034653,0.000078,
zOff-0.466132
), new Point3D(-0.016575,-0.024764,
zOff-0.277663
), new Point3D(-0.048273,-0.138179,
zOff-0.244378
));
object[1259] = new Triangle(new Point3D(-0.048273,-0.138179,
zOff-0.244378
), new Point3D(-0.070872,-0.102722,
zOff-0.477085
), new Point3D(-0.034653,0.000078,
zOff-0.466132
));
object[1260] = new Triangle(new Point3D(0.072682,-0.188604,
zOff-0.063546
), new Point3D(0.046134,-0.139845,
zOff-0.134903
), new Point3D(0.048273,-0.138179,
zOff-0.244378
));
object[1261] = new Triangle(new Point3D(0.048273,-0.138179,
zOff-0.244378
), new Point3D(0.130716,-0.185251,
zOff-0.235684
), new Point3D(0.072682,-0.188604,
zOff-0.063546
));
object[1262] = new Triangle(new Point3D(-0.048273,-0.138179,
zOff-0.244378
), new Point3D(-0.046134,-0.139845,
zOff-0.134903
), new Point3D(-0.072682,-0.188604,
zOff-0.063546
));
object[1263] = new Triangle(new Point3D(-0.072682,-0.188604,
zOff-0.063546
), new Point3D(-0.130716,-0.185251,
zOff-0.235684
), new Point3D(-0.048273,-0.138179,
zOff-0.244378
));
object[1264] = new Triangle(new Point3D(0.130716,-0.185251,
zOff-0.235684
), new Point3D(0.048273,-0.138179,
zOff-0.244378
), new Point3D(0.070872,-0.102722,
zOff-0.477085
));
object[1265] = new Triangle(new Point3D(0.070872,-0.102722,
zOff-0.477085
), new Point3D(0.158311,-0.146636,
zOff-0.473821
), new Point3D(0.130716,-0.185251,
zOff-0.235684
));
object[1266] = new Triangle(new Point3D(-0.070872,-0.102722,
zOff-0.477085
), new Point3D(-0.048273,-0.138179,
zOff-0.244378
), new Point3D(-0.130716,-0.185251,
zOff-0.235684
));
object[1267] = new Triangle(new Point3D(-0.130716,-0.185251,
zOff-0.235684
), new Point3D(-0.158311,-0.146636,
zOff-0.473821
), new Point3D(-0.070872,-0.102722,
zOff-0.477085
));
object[1268] = new Triangle(new Point3D(0.219990,-0.144815,
zOff+0.015275
), new Point3D(0.072682,-0.188604,
zOff-0.063546
), new Point3D(0.130716,-0.185251,
zOff-0.235684
));
object[1269] = new Triangle(new Point3D(0.130716,-0.185251,
zOff-0.235684
), new Point3D(0.236854,-0.138407,
zOff-0.209253
), new Point3D(0.219990,-0.144815,
zOff+0.015275
));
object[1270] = new Triangle(new Point3D(-0.130716,-0.185251,
zOff-0.235684
), new Point3D(-0.072682,-0.188604,
zOff-0.063546
), new Point3D(-0.219990,-0.144815,
zOff+0.015275
));
object[1271] = new Triangle(new Point3D(-0.219990,-0.144815,
zOff+0.015275
), new Point3D(-0.236854,-0.138407,
zOff-0.209253
), new Point3D(-0.130716,-0.185251,
zOff-0.235684
));
object[1272] = new Triangle(new Point3D(0.236854,-0.138407,
zOff-0.209253
), new Point3D(0.130716,-0.185251,
zOff-0.235684
), new Point3D(0.158311,-0.146636,
zOff-0.473821
));
object[1273] = new Triangle(new Point3D(0.158311,-0.146636,
zOff-0.473821
), new Point3D(0.245750,-0.105939,
zOff-0.458254
), new Point3D(0.236854,-0.138407,
zOff-0.209253
));
object[1274] = new Triangle(new Point3D(-0.158311,-0.146636,
zOff-0.473821
), new Point3D(-0.130716,-0.185251,
zOff-0.235684
), new Point3D(-0.236854,-0.138407,
zOff-0.209253
));
object[1275] = new Triangle(new Point3D(-0.236854,-0.138407,
zOff-0.209253
), new Point3D(-0.245750,-0.105939,
zOff-0.458254
), new Point3D(-0.158311,-0.146636,
zOff-0.473821
));
object[1276] = new Triangle(new Point3D(0.252964,-0.025738,
zOff+0.027542
), new Point3D(0.219990,-0.144815,
zOff+0.015275
), new Point3D(0.236854,-0.138407,
zOff-0.209253
));
object[1277] = new Triangle(new Point3D(0.236854,-0.138407,
zOff-0.209253
), new Point3D(0.274648,-0.025086,
zOff-0.196380
), new Point3D(0.252964,-0.025738,
zOff+0.027542
));
object[1278] = new Triangle(new Point3D(-0.236854,-0.138407,
zOff-0.209253
), new Point3D(-0.219990,-0.144815,
zOff+0.015275
), new Point3D(-0.252964,-0.025738,
zOff+0.027542
));
object[1279] = new Triangle(new Point3D(-0.252964,-0.025738,
zOff+0.027542
), new Point3D(-0.274648,-0.025086,
zOff-0.196380
), new Point3D(-0.236854,-0.138407,
zOff-0.209253
));
object[1280] = new Triangle(new Point3D(0.274648,-0.025086,
zOff-0.196380
), new Point3D(0.236854,-0.138407,
zOff-0.209253
), new Point3D(0.245750,-0.105939,
zOff-0.458254
));
object[1281] = new Triangle(new Point3D(0.245750,-0.105939,
zOff-0.458254
), new Point3D(0.281969,-0.004472,
zOff-0.439501
), new Point3D(0.274648,-0.025086,
zOff-0.196380
));
object[1282] = new Triangle(new Point3D(-0.245750,-0.105939,
zOff-0.458254
), new Point3D(-0.236854,-0.138407,
zOff-0.209253
), new Point3D(-0.274648,-0.025086,
zOff-0.196380
));
object[1283] = new Triangle(new Point3D(-0.274648,-0.025086,
zOff-0.196380
), new Point3D(-0.281969,-0.004472,
zOff-0.439501
), new Point3D(-0.245750,-0.105939,
zOff-0.458254
));
object[1284] = new Triangle(new Point3D(0.215462,0.108613,
zOff+0.000062
), new Point3D(0.252964,-0.025738,
zOff+0.027542
), new Point3D(0.274648,-0.025086,
zOff-0.196380
));
object[1285] = new Triangle(new Point3D(0.274648,-0.025086,
zOff-0.196380
), new Point3D(0.236854,0.088329,
zOff-0.207314
), new Point3D(0.215462,0.108613,
zOff+0.000062
));
object[1286] = new Triangle(new Point3D(-0.274648,-0.025086,
zOff-0.196380
), new Point3D(-0.252964,-0.025738,
zOff+0.027542
), new Point3D(-0.215462,0.108613,
zOff+0.000062
));
object[1287] = new Triangle(new Point3D(-0.215462,0.108613,
zOff+0.000062
), new Point3D(-0.236854,0.088329,
zOff-0.207314
), new Point3D(-0.274648,-0.025086,
zOff-0.196380
));
object[1288] = new Triangle(new Point3D(0.236854,0.088329,
zOff-0.207314
), new Point3D(0.274648,-0.025086,
zOff-0.196380
), new Point3D(0.281969,-0.004472,
zOff-0.439501
));
object[1289] = new Triangle(new Point3D(0.281969,-0.004472,
zOff-0.439501
), new Point3D(0.245750,0.098328,
zOff-0.428548
), new Point3D(0.236854,0.088329,
zOff-0.207314
));
object[1290] = new Triangle(new Point3D(-0.281969,-0.004472,
zOff-0.439501
), new Point3D(-0.274648,-0.025086,
zOff-0.196380
), new Point3D(-0.236854,0.088329,
zOff-0.207314
));
object[1291] = new Triangle(new Point3D(-0.236854,0.088329,
zOff-0.207314
), new Point3D(-0.245750,0.098328,
zOff-0.428548
), new Point3D(-0.281969,-0.004472,
zOff-0.439501
));
object[1292] = new Triangle(new Point3D(0.123267,0.149062,
zOff-0.034942
), new Point3D(0.215462,0.108613,
zOff+0.000062
), new Point3D(0.236854,0.088329,
zOff-0.207314
));
object[1293] = new Triangle(new Point3D(0.236854,0.088329,
zOff-0.207314
), new Point3D(0.130716,0.135401,
zOff-0.232943
), new Point3D(0.123267,0.149062,
zOff-0.034942
));
object[1294] = new Triangle(new Point3D(-0.236854,0.088329,
zOff-0.207314
), new Point3D(-0.215462,0.108613,
zOff+0.000062
), new Point3D(-0.123267,0.149062,
zOff-0.034942
));
object[1295] = new Triangle(new Point3D(-0.123267,0.149062,
zOff-0.034942
), new Point3D(-0.130716,0.135401,
zOff-0.232943
), new Point3D(-0.236854,0.088329,
zOff-0.207314
));
object[1296] = new Triangle(new Point3D(0.130716,0.135401,
zOff-0.232943
), new Point3D(0.236854,0.088329,
zOff-0.207314
), new Point3D(0.245750,0.098328,
zOff-0.428548
));
object[1297] = new Triangle(new Point3D(0.245750,0.098328,
zOff-0.428548
), new Point3D(0.158311,0.142241,
zOff-0.431811
), new Point3D(0.130716,0.135401,
zOff-0.232943
));
object[1298] = new Triangle(new Point3D(-0.245750,0.098328,
zOff-0.428548
), new Point3D(-0.236854,0.088329,
zOff-0.207314
), new Point3D(-0.130716,0.135401,
zOff-0.232943
));
object[1299] = new Triangle(new Point3D(-0.130716,0.135401,
zOff-0.232943
), new Point3D(-0.158311,0.142241,
zOff-0.431811
), new Point3D(-0.245750,0.098328,
zOff-0.428548
));
object[1300] = new Triangle(new Point3D(0.072682,-0.188604,
zOff-0.063546
), new Point3D(0.000000,-0.210704,
zOff-0.089553
), new Point3D(0.000000,-0.137788,
zOff-0.146723
));
object[1301] = new Triangle(new Point3D(0.000000,-0.137788,
zOff-0.146723
), new Point3D(0.046134,-0.139845,
zOff-0.134903
), new Point3D(0.072682,-0.188604,
zOff-0.063546
));
object[1302] = new Triangle(new Point3D(0.000000,-0.137788,
zOff-0.146723
), new Point3D(0.000000,-0.210704,
zOff-0.089553
), new Point3D(-0.072682,-0.188604,
zOff-0.063546
));
object[1303] = new Triangle(new Point3D(-0.072682,-0.188604,
zOff-0.063546
), new Point3D(-0.046134,-0.139845,
zOff-0.134903
), new Point3D(0.000000,-0.137788,
zOff-0.146723
));
object[1304] = new Triangle(new Point3D(0.123267,0.149062,
zOff-0.034942
), new Point3D(0.046134,0.088369,
zOff-0.134903
), new Point3D(-0.000000,0.083921,
zOff-0.119597
));
object[1305] = new Triangle(new Point3D(-0.000000,0.083921,
zOff-0.119597
), new Point3D(-0.000000,0.131332,
zOff-0.050238
), new Point3D(0.123267,0.149062,
zOff-0.034942
));
object[1306] = new Triangle(new Point3D(-0.000000,0.083921,
zOff-0.119597
), new Point3D(-0.046134,0.088369,
zOff-0.134903
), new Point3D(-0.123267,0.149062,
zOff-0.034942
));
object[1307] = new Triangle(new Point3D(-0.123267,0.149062,
zOff-0.034942
), new Point3D(-0.000000,0.131332,
zOff-0.050238
), new Point3D(-0.000000,0.083921,
zOff-0.119597
));
object[1308] = new Triangle(new Point3D(-0.000000,-0.218894,
zOff+0.122312
), new Point3D(-0.000000,-0.219562,
zOff+0.033356
), new Point3D(0.094293,-0.197921,
zOff+0.043232
));
object[1309] = new Triangle(new Point3D(0.094293,-0.197921,
zOff+0.043232
), new Point3D(0.104881,-0.199859,
zOff+0.131371
), new Point3D(-0.000000,-0.218894,
zOff+0.122312
));
object[1310] = new Triangle(new Point3D(-0.094293,-0.197921,
zOff+0.043232
), new Point3D(-0.000000,-0.219562,
zOff+0.033356
), new Point3D(-0.000000,-0.218894,
zOff+0.122312
));
object[1311] = new Triangle(new Point3D(-0.000000,-0.218894,
zOff+0.122312
), new Point3D(-0.104881,-0.199859,
zOff+0.131371
), new Point3D(-0.094293,-0.197921,
zOff+0.043232
));
object[1312] = new Triangle(new Point3D(-0.000000,-0.219562,
zOff+0.033356
), new Point3D(0.000000,-0.210704,
zOff-0.089553
), new Point3D(0.072682,-0.188604,
zOff-0.063546
));
object[1313] = new Triangle(new Point3D(0.072682,-0.188604,
zOff-0.063546
), new Point3D(0.094293,-0.197921,
zOff+0.043232
), new Point3D(-0.000000,-0.219562,
zOff+0.033356
));
object[1314] = new Triangle(new Point3D(-0.072682,-0.188604,
zOff-0.063546
), new Point3D(0.000000,-0.210704,
zOff-0.089553
), new Point3D(-0.000000,-0.219562,
zOff+0.033356
));
object[1315] = new Triangle(new Point3D(-0.000000,-0.219562,
zOff+0.033356
), new Point3D(-0.094293,-0.197921,
zOff+0.043232
), new Point3D(-0.072682,-0.188604,
zOff-0.063546
));
object[1316] = new Triangle(new Point3D(0.104881,-0.199859,
zOff+0.131371
), new Point3D(0.094293,-0.197921,
zOff+0.043232
), new Point3D(0.208755,-0.136467,
zOff+0.094678
));
object[1317] = new Triangle(new Point3D(0.208755,-0.136467,
zOff+0.094678
), new Point3D(0.195054,-0.149905,
zOff+0.158359
), new Point3D(0.104881,-0.199859,
zOff+0.131371
));
object[1318] = new Triangle(new Point3D(-0.208755,-0.136467,
zOff+0.094678
), new Point3D(-0.094293,-0.197921,
zOff+0.043232
), new Point3D(-0.104881,-0.199859,
zOff+0.131371
));
object[1319] = new Triangle(new Point3D(-0.104881,-0.199859,
zOff+0.131371
), new Point3D(-0.195054,-0.149905,
zOff+0.158359
), new Point3D(-0.208755,-0.136467,
zOff+0.094678
));
object[1320] = new Triangle(new Point3D(0.094293,-0.197921,
zOff+0.043232
), new Point3D(0.072682,-0.188604,
zOff-0.063546
), new Point3D(0.219990,-0.144815,
zOff+0.015275
));
object[1321] = new Triangle(new Point3D(0.219990,-0.144815,
zOff+0.015275
), new Point3D(0.208755,-0.136467,
zOff+0.094678
), new Point3D(0.094293,-0.197921,
zOff+0.043232
));
object[1322] = new Triangle(new Point3D(-0.219990,-0.144815,
zOff+0.015275
), new Point3D(-0.072682,-0.188604,
zOff-0.063546
), new Point3D(-0.094293,-0.197921,
zOff+0.043232
));
object[1323] = new Triangle(new Point3D(-0.094293,-0.197921,
zOff+0.043232
), new Point3D(-0.208755,-0.136467,
zOff+0.094678
), new Point3D(-0.219990,-0.144815,
zOff+0.015275
));
object[1324] = new Triangle(new Point3D(0.195054,-0.149905,
zOff+0.158359
), new Point3D(0.208755,-0.136467,
zOff+0.094678
), new Point3D(0.245225,-0.033914,
zOff+0.126404
));
object[1325] = new Triangle(new Point3D(0.245225,-0.033914,
zOff+0.126404
), new Point3D(0.241692,-0.052375,
zOff+0.188382
), new Point3D(0.195054,-0.149905,
zOff+0.158359
));
object[1326] = new Triangle(new Point3D(-0.245225,-0.033914,
zOff+0.126404
), new Point3D(-0.208755,-0.136467,
zOff+0.094678
), new Point3D(-0.195054,-0.149905,
zOff+0.158359
));
object[1327] = new Triangle(new Point3D(-0.195054,-0.149905,
zOff+0.158359
), new Point3D(-0.241692,-0.052375,
zOff+0.188382
), new Point3D(-0.245225,-0.033914,
zOff+0.126404
));
object[1328] = new Triangle(new Point3D(0.208755,-0.136467,
zOff+0.094678
), new Point3D(0.219990,-0.144815,
zOff+0.015275
), new Point3D(0.252964,-0.025738,
zOff+0.027542
));
object[1329] = new Triangle(new Point3D(0.252964,-0.025738,
zOff+0.027542
), new Point3D(0.245225,-0.033914,
zOff+0.126404
), new Point3D(0.208755,-0.136467,
zOff+0.094678
));
object[1330] = new Triangle(new Point3D(-0.252964,-0.025738,
zOff+0.027542
), new Point3D(-0.219990,-0.144815,
zOff+0.015275
), new Point3D(-0.208755,-0.136467,
zOff+0.094678
));
object[1331] = new Triangle(new Point3D(-0.208755,-0.136467,
zOff+0.094678
), new Point3D(-0.245225,-0.033914,
zOff+0.126404
), new Point3D(-0.252964,-0.025738,
zOff+0.027542
));
object[1332] = new Triangle(new Point3D(0.241692,-0.052375,
zOff+0.188382
), new Point3D(0.245225,-0.033914,
zOff+0.126404
), new Point3D(0.200305,0.088860,
zOff+0.105271
));
object[1333] = new Triangle(new Point3D(0.200305,0.088860,
zOff+0.105271
), new Point3D(0.203492,0.053164,
zOff+0.184866
), new Point3D(0.241692,-0.052375,
zOff+0.188382
));
object[1334] = new Triangle(new Point3D(-0.200305,0.088860,
zOff+0.105271
), new Point3D(-0.245225,-0.033914,
zOff+0.126404
), new Point3D(-0.241692,-0.052375,
zOff+0.188382
));
object[1335] = new Triangle(new Point3D(-0.241692,-0.052375,
zOff+0.188382
), new Point3D(-0.203492,0.053164,
zOff+0.184866
), new Point3D(-0.200305,0.088860,
zOff+0.105271
));
object[1336] = new Triangle(new Point3D(0.245225,-0.033914,
zOff+0.126404
), new Point3D(0.252964,-0.025738,
zOff+0.027542
), new Point3D(0.215462,0.108613,
zOff+0.000062
));
object[1337] = new Triangle(new Point3D(0.215462,0.108613,
zOff+0.000062
), new Point3D(0.200305,0.088860,
zOff+0.105271
), new Point3D(0.245225,-0.033914,
zOff+0.126404
));
object[1338] = new Triangle(new Point3D(-0.215462,0.108613,
zOff+0.000062
), new Point3D(-0.252964,-0.025738,
zOff+0.027542
), new Point3D(-0.245225,-0.033914,
zOff+0.126404
));
object[1339] = new Triangle(new Point3D(-0.245225,-0.033914,
zOff+0.126404
), new Point3D(-0.200305,0.088860,
zOff+0.105271
), new Point3D(-0.215462,0.108613,
zOff+0.000062
));
object[1340] = new Triangle(new Point3D(0.203492,0.053164,
zOff+0.184866
), new Point3D(0.200305,0.088860,
zOff+0.105271
), new Point3D(0.110514,0.134390,
zOff+0.088478
));
object[1341] = new Triangle(new Point3D(0.110514,0.134390,
zOff+0.088478
), new Point3D(0.087011,0.096453,
zOff+0.209792
), new Point3D(0.203492,0.053164,
zOff+0.184866
));
object[1342] = new Triangle(new Point3D(-0.110514,0.134390,
zOff+0.088478
), new Point3D(-0.200305,0.088860,
zOff+0.105271
), new Point3D(-0.203492,0.053164,
zOff+0.184866
));
object[1343] = new Triangle(new Point3D(-0.203492,0.053164,
zOff+0.184866
), new Point3D(-0.087011,0.096453,
zOff+0.209792
), new Point3D(-0.110514,0.134390,
zOff+0.088478
));
object[1344] = new Triangle(new Point3D(0.200305,0.088860,
zOff+0.105271
), new Point3D(0.215462,0.108613,
zOff+0.000062
), new Point3D(0.123267,0.149062,
zOff-0.034942
));
object[1345] = new Triangle(new Point3D(0.123267,0.149062,
zOff-0.034942
), new Point3D(0.110514,0.134390,
zOff+0.088478
), new Point3D(0.200305,0.088860,
zOff+0.105271
));
object[1346] = new Triangle(new Point3D(-0.123267,0.149062,
zOff-0.034942
), new Point3D(-0.215462,0.108613,
zOff+0.000062
), new Point3D(-0.200305,0.088860,
zOff+0.105271
));
object[1347] = new Triangle(new Point3D(-0.200305,0.088860,
zOff+0.105271
), new Point3D(-0.110514,0.134390,
zOff+0.088478
), new Point3D(-0.123267,0.149062,
zOff-0.034942
));
object[1348] = new Triangle(new Point3D(0.087011,0.096453,
zOff+0.209792
), new Point3D(0.110514,0.134390,
zOff+0.088478
), new Point3D(0.000000,0.133534,
zOff+0.082629
));
object[1349] = new Triangle(new Point3D(0.000000,0.133534,
zOff+0.082629
), new Point3D(0.000000,0.109094,
zOff+0.215496
), new Point3D(0.087011,0.096453,
zOff+0.209792
));
object[1350] = new Triangle(new Point3D(0.000000,0.133534,
zOff+0.082629
), new Point3D(-0.110514,0.134390,
zOff+0.088478
), new Point3D(-0.087011,0.096453,
zOff+0.209792
));
object[1351] = new Triangle(new Point3D(-0.087011,0.096453,
zOff+0.209792
), new Point3D(0.000000,0.109094,
zOff+0.215496
), new Point3D(0.000000,0.133534,
zOff+0.082629
));
object[1352] = new Triangle(new Point3D(0.110514,0.134390,
zOff+0.088478
), new Point3D(0.123267,0.149062,
zOff-0.034942
), new Point3D(-0.000000,0.131332,
zOff-0.050238
));
object[1353] = new Triangle(new Point3D(-0.000000,0.131332,
zOff-0.050238
), new Point3D(0.000000,0.133534,
zOff+0.082629
), new Point3D(0.110514,0.134390,
zOff+0.088478
));
object[1354] = new Triangle(new Point3D(-0.000000,0.131332,
zOff-0.050238
), new Point3D(-0.123267,0.149062,
zOff-0.034942
), new Point3D(-0.110514,0.134390,
zOff+0.088478
));
object[1355] = new Triangle(new Point3D(-0.110514,0.134390,
zOff+0.088478
), new Point3D(0.000000,0.133534,
zOff+0.082629
), new Point3D(-0.000000,0.131332,
zOff-0.050238
));
object[1356] = new Triangle(new Point3D(0.223879,0.119451,
zOff-0.672888
), new Point3D(0.228842,0.126042,
zOff-0.752756
), new Point3D(0.164577,0.156026,
zOff-0.759911
));
object[1357] = new Triangle(new Point3D(0.164577,0.156026,
zOff-0.759911
), new Point3D(0.155935,0.141203,
zOff-0.647936
), new Point3D(0.223879,0.119451,
zOff-0.672888
));
object[1358] = new Triangle(new Point3D(-0.164577,0.156026,
zOff-0.759911
), new Point3D(-0.228842,0.126042,
zOff-0.752756
), new Point3D(-0.223879,0.119451,
zOff-0.672888
));
object[1359] = new Triangle(new Point3D(-0.223879,0.119451,
zOff-0.672888
), new Point3D(-0.155935,0.141203,
zOff-0.647936
), new Point3D(-0.164577,0.156026,
zOff-0.759911
));
object[1360] = new Triangle(new Point3D(0.228842,0.126042,
zOff-0.752756
), new Point3D(0.241504,0.134819,
zOff-0.831812
), new Point3D(0.183073,0.165013,
zOff-0.837127
));
object[1361] = new Triangle(new Point3D(0.183073,0.165013,
zOff-0.837127
), new Point3D(0.164577,0.156026,
zOff-0.759911
), new Point3D(0.228842,0.126042,
zOff-0.752756
));
object[1362] = new Triangle(new Point3D(-0.183073,0.165013,
zOff-0.837127
), new Point3D(-0.241504,0.134819,
zOff-0.831812
), new Point3D(-0.228842,0.126042,
zOff-0.752756
));
object[1363] = new Triangle(new Point3D(-0.228842,0.126042,
zOff-0.752756
), new Point3D(-0.164577,0.156026,
zOff-0.759911
), new Point3D(-0.183073,0.165013,
zOff-0.837127
));
object[1364] = new Triangle(new Point3D(0.249612,0.040643,
zOff-0.658014
), new Point3D(0.257119,0.052352,
zOff-0.762105
), new Point3D(0.228842,0.126042,
zOff-0.752756
));
object[1365] = new Triangle(new Point3D(0.228842,0.126042,
zOff-0.752756
), new Point3D(0.223879,0.119451,
zOff-0.672888
), new Point3D(0.249612,0.040643,
zOff-0.658014
));
object[1366] = new Triangle(new Point3D(-0.228842,0.126042,
zOff-0.752756
), new Point3D(-0.257119,0.052352,
zOff-0.762105
), new Point3D(-0.249612,0.040643,
zOff-0.658014
));
object[1367] = new Triangle(new Point3D(-0.249612,0.040643,
zOff-0.658014
), new Point3D(-0.223879,0.119451,
zOff-0.672888
), new Point3D(-0.228842,0.126042,
zOff-0.752756
));
object[1368] = new Triangle(new Point3D(0.257119,0.052352,
zOff-0.762105
), new Point3D(0.268422,0.079194,
zOff-0.843054
), new Point3D(0.241504,0.134819,
zOff-0.831812
));
object[1369] = new Triangle(new Point3D(0.241504,0.134819,
zOff-0.831812
), new Point3D(0.228842,0.126042,
zOff-0.752756
), new Point3D(0.257119,0.052352,
zOff-0.762105
));
object[1370] = new Triangle(new Point3D(-0.241504,0.134819,
zOff-0.831812
), new Point3D(-0.268422,0.079194,
zOff-0.843054
), new Point3D(-0.257119,0.052352,
zOff-0.762105
));
object[1371] = new Triangle(new Point3D(-0.257119,0.052352,
zOff-0.762105
), new Point3D(-0.228842,0.126042,
zOff-0.752756
), new Point3D(-0.241504,0.134819,
zOff-0.831812
));
object[1372] = new Triangle(new Point3D(0.224907,-0.042622,
zOff-0.658153
), new Point3D(0.232616,-0.037816,
zOff-0.747171
), new Point3D(0.257119,0.052352,
zOff-0.762105
));
object[1373] = new Triangle(new Point3D(0.257119,0.052352,
zOff-0.762105
), new Point3D(0.249612,0.040643,
zOff-0.658014
), new Point3D(0.224907,-0.042622,
zOff-0.658153
));
object[1374] = new Triangle(new Point3D(-0.257119,0.052352,
zOff-0.762105
), new Point3D(-0.232616,-0.037816,
zOff-0.747171
), new Point3D(-0.224907,-0.042622,
zOff-0.658153
));
object[1375] = new Triangle(new Point3D(-0.224907,-0.042622,
zOff-0.658153
), new Point3D(-0.249612,0.040643,
zOff-0.658014
), new Point3D(-0.257119,0.052352,
zOff-0.762105
));
object[1376] = new Triangle(new Point3D(0.240793,-0.011527,
zOff-0.820634
), new Point3D(0.250387,0.015299,
zOff-0.891580
), new Point3D(0.268422,0.079194,
zOff-0.843054
));
object[1377] = new Triangle(new Point3D(0.268422,0.079194,
zOff-0.843054
), new Point3D(0.257119,0.052352,
zOff-0.762105
), new Point3D(0.240793,-0.011527,
zOff-0.820634
));
object[1378] = new Triangle(new Point3D(-0.268422,0.079194,
zOff-0.843054
), new Point3D(-0.250387,0.015299,
zOff-0.891580
), new Point3D(-0.240793,-0.011527,
zOff-0.820634
));
object[1379] = new Triangle(new Point3D(-0.240793,-0.011527,
zOff-0.820634
), new Point3D(-0.257119,0.052352,
zOff-0.762105
), new Point3D(-0.268422,0.079194,
zOff-0.843054
));
object[1380] = new Triangle(new Point3D(0.161251,-0.073031,
zOff-0.667938
), new Point3D(0.168303,-0.070680,
zOff-0.747099
), new Point3D(0.232616,-0.037816,
zOff-0.747171
));
object[1381] = new Triangle(new Point3D(0.232616,-0.037816,
zOff-0.747171
), new Point3D(0.224907,-0.042622,
zOff-0.658153
), new Point3D(0.161251,-0.073031,
zOff-0.667938
));
object[1382] = new Triangle(new Point3D(-0.232616,-0.037816,
zOff-0.747171
), new Point3D(-0.168303,-0.070680,
zOff-0.747099
), new Point3D(-0.161251,-0.073031,
zOff-0.667938
));
object[1383] = new Triangle(new Point3D(-0.161251,-0.073031,
zOff-0.667938
), new Point3D(-0.224907,-0.042622,
zOff-0.658153
), new Point3D(-0.232616,-0.037816,
zOff-0.747171
));
object[1384] = new Triangle(new Point3D(0.178813,-0.036888,
zOff-0.841525
), new Point3D(0.189120,-0.009081,
zOff-0.913956
), new Point3D(0.250387,0.015299,
zOff-0.891580
));
object[1385] = new Triangle(new Point3D(0.250387,0.015299,
zOff-0.891580
), new Point3D(0.240793,-0.011527,
zOff-0.820634
), new Point3D(0.178813,-0.036888,
zOff-0.841525
));
object[1386] = new Triangle(new Point3D(-0.250387,0.015299,
zOff-0.891580
), new Point3D(-0.189120,-0.009081,
zOff-0.913956
), new Point3D(-0.178813,-0.036888,
zOff-0.841525
));
object[1387] = new Triangle(new Point3D(-0.178813,-0.036888,
zOff-0.841525
), new Point3D(-0.240793,-0.011527,
zOff-0.820634
), new Point3D(-0.250387,0.015299,
zOff-0.891580
));
object[1388] = new Triangle(new Point3D(0.097036,-0.043218,
zOff-0.676266
), new Point3D(0.105026,-0.037517,
zOff-0.763134
), new Point3D(0.168303,-0.070680,
zOff-0.747099
));
object[1389] = new Triangle(new Point3D(0.168303,-0.070680,
zOff-0.747099
), new Point3D(0.161251,-0.073031,
zOff-0.667938
), new Point3D(0.097036,-0.043218,
zOff-0.676266
));
object[1390] = new Triangle(new Point3D(-0.168303,-0.070680,
zOff-0.747099
), new Point3D(-0.105026,-0.037517,
zOff-0.763134
), new Point3D(-0.097036,-0.043218,
zOff-0.676266
));
object[1391] = new Triangle(new Point3D(-0.097036,-0.043218,
zOff-0.676266
), new Point3D(-0.161251,-0.073031,
zOff-0.667938
), new Point3D(-0.168303,-0.070680,
zOff-0.747099
));
object[1392] = new Triangle(new Point3D(0.113560,-0.010081,
zOff-0.839803
), new Point3D(0.136240,0.020163,
zOff-0.908888
), new Point3D(0.189120,-0.009081,
zOff-0.913956
));
object[1393] = new Triangle(new Point3D(0.189120,-0.009081,
zOff-0.913956
), new Point3D(0.178813,-0.036888,
zOff-0.841525
), new Point3D(0.113560,-0.010081,
zOff-0.839803
));
object[1394] = new Triangle(new Point3D(-0.189120,-0.009081,
zOff-0.913956
), new Point3D(-0.136240,0.020163,
zOff-0.908888
), new Point3D(-0.113560,-0.010081,
zOff-0.839803
));
object[1395] = new Triangle(new Point3D(-0.113560,-0.010081,
zOff-0.839803
), new Point3D(-0.178813,-0.036888,
zOff-0.841525
), new Point3D(-0.189120,-0.009081,
zOff-0.913956
));
object[1396] = new Triangle(new Point3D(0.068775,0.039799,
zOff-0.683630
), new Point3D(0.077694,0.053720,
zOff-0.795271
), new Point3D(0.105026,-0.037517,
zOff-0.763134
));
object[1397] = new Triangle(new Point3D(0.105026,-0.037517,
zOff-0.763134
), new Point3D(0.097036,-0.043218,
zOff-0.676266
), new Point3D(0.068775,0.039799,
zOff-0.683630
));
object[1398] = new Triangle(new Point3D(-0.105026,-0.037517,
zOff-0.763134
), new Point3D(-0.077694,0.053720,
zOff-0.795271
), new Point3D(-0.068775,0.039799,
zOff-0.683630
));
object[1399] = new Triangle(new Point3D(-0.068775,0.039799,
zOff-0.683630
), new Point3D(-0.097036,-0.043218,
zOff-0.676266
), new Point3D(-0.105026,-0.037517,
zOff-0.763134
));
object[1400] = new Triangle(new Point3D(0.077694,0.053720,
zOff-0.795271
), new Point3D(0.106994,0.082882,
zOff-0.881887
), new Point3D(0.136240,0.020163,
zOff-0.908888
));
object[1401] = new Triangle(new Point3D(0.136240,0.020163,
zOff-0.908888
), new Point3D(0.113560,-0.010081,
zOff-0.839803
), new Point3D(0.077694,0.053720,
zOff-0.795271
));
object[1402] = new Triangle(new Point3D(-0.136240,0.020163,
zOff-0.908888
), new Point3D(-0.106994,0.082882,
zOff-0.881887
), new Point3D(-0.077694,0.053720,
zOff-0.795271
));
object[1403] = new Triangle(new Point3D(-0.077694,0.053720,
zOff-0.795271
), new Point3D(-0.113560,-0.010081,
zOff-0.839803
), new Point3D(-0.136240,0.020163,
zOff-0.908888
));
object[1404] = new Triangle(new Point3D(0.096008,0.118854,
zOff-0.691001
), new Point3D(0.101969,0.127009,
zOff-0.776208
), new Point3D(0.077694,0.053720,
zOff-0.795271
));
object[1405] = new Triangle(new Point3D(0.077694,0.053720,
zOff-0.795271
), new Point3D(0.068775,0.039799,
zOff-0.683630
), new Point3D(0.096008,0.118854,
zOff-0.691001
));
object[1406] = new Triangle(new Point3D(-0.077694,0.053720,
zOff-0.795271
), new Point3D(-0.101969,0.127009,
zOff-0.776208
), new Point3D(-0.096008,0.118854,
zOff-0.691001
));
object[1407] = new Triangle(new Point3D(-0.096008,0.118854,
zOff-0.691001
), new Point3D(-0.068775,0.039799,
zOff-0.683630
), new Point3D(-0.077694,0.053720,
zOff-0.795271
));
object[1408] = new Triangle(new Point3D(0.101969,0.127009,
zOff-0.776208
), new Point3D(0.127357,0.137426,
zOff-0.859270
), new Point3D(0.106994,0.082882,
zOff-0.881887
));
object[1409] = new Triangle(new Point3D(0.106994,0.082882,
zOff-0.881887
), new Point3D(0.077694,0.053720,
zOff-0.795271
), new Point3D(0.101969,0.127009,
zOff-0.776208
));
object[1410] = new Triangle(new Point3D(-0.106994,0.082882,
zOff-0.881887
), new Point3D(-0.127357,0.137426,
zOff-0.859270
), new Point3D(-0.101969,0.127009,
zOff-0.776208
));
object[1411] = new Triangle(new Point3D(-0.101969,0.127009,
zOff-0.776208
), new Point3D(-0.077694,0.053720,
zOff-0.795271
), new Point3D(-0.106994,0.082882,
zOff-0.881887
));
object[1412] = new Triangle(new Point3D(0.155935,0.141203,
zOff-0.647936
), new Point3D(0.164577,0.156026,
zOff-0.759911
), new Point3D(0.101969,0.127009,
zOff-0.776208
));
object[1413] = new Triangle(new Point3D(0.101969,0.127009,
zOff-0.776208
), new Point3D(0.096008,0.118854,
zOff-0.691001
), new Point3D(0.155935,0.141203,
zOff-0.647936
));
object[1414] = new Triangle(new Point3D(-0.101969,0.127009,
zOff-0.776208
), new Point3D(-0.164577,0.156026,
zOff-0.759911
), new Point3D(-0.155935,0.141203,
zOff-0.647936
));
object[1415] = new Triangle(new Point3D(-0.155935,0.141203,
zOff-0.647936
), new Point3D(-0.096008,0.118854,
zOff-0.691001
), new Point3D(-0.101969,0.127009,
zOff-0.776208
));
object[1416] = new Triangle(new Point3D(0.164577,0.156026,
zOff-0.759911
), new Point3D(0.183073,0.165013,
zOff-0.837127
), new Point3D(0.127357,0.137426,
zOff-0.859270
));
object[1417] = new Triangle(new Point3D(0.127357,0.137426,
zOff-0.859270
), new Point3D(0.101969,0.127009,
zOff-0.776208
), new Point3D(0.164577,0.156026,
zOff-0.759911
));
object[1418] = new Triangle(new Point3D(-0.127357,0.137426,
zOff-0.859270
), new Point3D(-0.183073,0.165013,
zOff-0.837127
), new Point3D(-0.164577,0.156026,
zOff-0.759911
));
object[1419] = new Triangle(new Point3D(-0.164577,0.156026,
zOff-0.759911
), new Point3D(-0.101969,0.127009,
zOff-0.776208
), new Point3D(-0.127357,0.137426,
zOff-0.859270
));
object[1420] = new Triangle(new Point3D(0.168303,-0.070680,
zOff-0.747099
), new Point3D(0.105026,-0.037517,
zOff-0.763134
), new Point3D(0.113560,-0.010081,
zOff-0.839803
));
object[1421] = new Triangle(new Point3D(0.113560,-0.010081,
zOff-0.839803
), new Point3D(0.178813,-0.036888,
zOff-0.841525
), new Point3D(0.168303,-0.070680,
zOff-0.747099
));
object[1422] = new Triangle(new Point3D(-0.113560,-0.010081,
zOff-0.839803
), new Point3D(-0.105026,-0.037517,
zOff-0.763134
), new Point3D(-0.168303,-0.070680,
zOff-0.747099
));
object[1423] = new Triangle(new Point3D(-0.168303,-0.070680,
zOff-0.747099
), new Point3D(-0.178813,-0.036888,
zOff-0.841525
), new Point3D(-0.113560,-0.010081,
zOff-0.839803
));
object[1424] = new Triangle(new Point3D(0.232616,-0.037816,
zOff-0.747171
), new Point3D(0.168303,-0.070680,
zOff-0.747099
), new Point3D(0.178813,-0.036888,
zOff-0.841525
));
object[1425] = new Triangle(new Point3D(0.178813,-0.036888,
zOff-0.841525
), new Point3D(0.240793,-0.011527,
zOff-0.820634
), new Point3D(0.232616,-0.037816,
zOff-0.747171
));
object[1426] = new Triangle(new Point3D(-0.178813,-0.036888,
zOff-0.841525
), new Point3D(-0.168303,-0.070680,
zOff-0.747099
), new Point3D(-0.232616,-0.037816,
zOff-0.747171
));
object[1427] = new Triangle(new Point3D(-0.232616,-0.037816,
zOff-0.747171
), new Point3D(-0.240793,-0.011527,
zOff-0.820634
), new Point3D(-0.178813,-0.036888,
zOff-0.841525
));
object[1428] = new Triangle(new Point3D(0.257119,0.052352,
zOff-0.762105
), new Point3D(0.232616,-0.037816,
zOff-0.747171
), new Point3D(0.240793,-0.011527,
zOff-0.820634
));
object[1429] = new Triangle(new Point3D(-0.240793,-0.011527,
zOff-0.820634
), new Point3D(-0.232616,-0.037816,
zOff-0.747171
), new Point3D(-0.257119,0.052352,
zOff-0.762105
));
object[1430] = new Triangle(new Point3D(0.105026,-0.037517,
zOff-0.763134
), new Point3D(0.077694,0.053720,
zOff-0.795271
), new Point3D(0.113560,-0.010081,
zOff-0.839803
));
object[1431] = new Triangle(new Point3D(-0.113560,-0.010081,
zOff-0.839803
), new Point3D(-0.077694,0.053720,
zOff-0.795271
), new Point3D(-0.105026,-0.037517,
zOff-0.763134
));
object[1432] = new Triangle(new Point3D(0.127357,0.137426,
zOff-0.859270
), new Point3D(0.183073,0.165013,
zOff-0.837127
), new Point3D(0.224145,0.257968,
zOff-1.054636
));
object[1433] = new Triangle(new Point3D(0.224145,0.257968,
zOff-1.054636
), new Point3D(0.148393,0.235571,
zOff-1.067859
), new Point3D(0.127357,0.137426,
zOff-0.859270
));
object[1434] = new Triangle(new Point3D(-0.224145,0.257968,
zOff-1.054636
), new Point3D(-0.183073,0.165013,
zOff-0.837127
), new Point3D(-0.127357,0.137426,
zOff-0.859270
));
object[1435] = new Triangle(new Point3D(-0.127357,0.137426,
zOff-0.859270
), new Point3D(-0.148393,0.235571,
zOff-1.067859
), new Point3D(-0.224145,0.257968,
zOff-1.054636
));
object[1436] = new Triangle(new Point3D(0.106994,0.082882,
zOff-0.881887
), new Point3D(0.127357,0.137426,
zOff-0.859270
), new Point3D(0.148393,0.235571,
zOff-1.067859
));
object[1437] = new Triangle(new Point3D(0.148393,0.235571,
zOff-1.067859
), new Point3D(0.113769,0.150062,
zOff-1.081681
), new Point3D(0.106994,0.082882,
zOff-0.881887
));
object[1438] = new Triangle(new Point3D(-0.148393,0.235571,
zOff-1.067859
), new Point3D(-0.127357,0.137426,
zOff-0.859270
), new Point3D(-0.106994,0.082882,
zOff-0.881887
));
object[1439] = new Triangle(new Point3D(-0.106994,0.082882,
zOff-0.881887
), new Point3D(-0.113769,0.150062,
zOff-1.081681
), new Point3D(-0.148393,0.235571,
zOff-1.067859
));
object[1440] = new Triangle(new Point3D(0.136240,0.020163,
zOff-0.908888
), new Point3D(0.106994,0.082882,
zOff-0.881887
), new Point3D(0.113769,0.150062,
zOff-1.081681
));
object[1441] = new Triangle(new Point3D(0.113769,0.150062,
zOff-1.081681
), new Point3D(0.152061,0.074427,
zOff-1.093921
), new Point3D(0.136240,0.020163,
zOff-0.908888
));
object[1442] = new Triangle(new Point3D(-0.113769,0.150062,
zOff-1.081681
), new Point3D(-0.106994,0.082882,
zOff-0.881887
), new Point3D(-0.136240,0.020163,
zOff-0.908888
));
object[1443] = new Triangle(new Point3D(-0.136240,0.020163,
zOff-0.908888
), new Point3D(-0.152061,0.074427,
zOff-1.093921
), new Point3D(-0.113769,0.150062,
zOff-1.081681
));
object[1444] = new Triangle(new Point3D(0.189120,-0.009081,
zOff-0.913956
), new Point3D(0.136240,0.020163,
zOff-0.908888
), new Point3D(0.152061,0.074427,
zOff-1.093921
));
object[1445] = new Triangle(new Point3D(0.152061,0.074427,
zOff-1.093921
), new Point3D(0.208904,0.022465,
zOff-1.095118
), new Point3D(0.189120,-0.009081,
zOff-0.913956
));
object[1446] = new Triangle(new Point3D(-0.152061,0.074427,
zOff-1.093921
), new Point3D(-0.136240,0.020163,
zOff-0.908888
), new Point3D(-0.189120,-0.009081,
zOff-0.913956
));
object[1447] = new Triangle(new Point3D(-0.189120,-0.009081,
zOff-0.913956
), new Point3D(-0.208904,0.022465,
zOff-1.095118
), new Point3D(-0.152061,0.074427,
zOff-1.093921
));
object[1448] = new Triangle(new Point3D(0.250387,0.015299,
zOff-0.891580
), new Point3D(0.189120,-0.009081,
zOff-0.913956
), new Point3D(0.208904,0.022465,
zOff-1.095118
));
object[1449] = new Triangle(new Point3D(0.208904,0.022465,
zOff-1.095118
), new Point3D(0.257917,0.041468,
zOff-1.090888
), new Point3D(0.250387,0.015299,
zOff-0.891580
));
object[1450] = new Triangle(new Point3D(-0.208904,0.022465,
zOff-1.095118
), new Point3D(-0.189120,-0.009081,
zOff-0.913956
), new Point3D(-0.250387,0.015299,
zOff-0.891580
));
object[1451] = new Triangle(new Point3D(-0.250387,0.015299,
zOff-0.891580
), new Point3D(-0.257917,0.041468,
zOff-1.090888
), new Point3D(-0.208904,0.022465,
zOff-1.095118
));
object[1452] = new Triangle(new Point3D(0.268422,0.079194,
zOff-0.843054
), new Point3D(0.250387,0.015299,
zOff-0.891580
), new Point3D(0.257917,0.041468,
zOff-1.090888
));
object[1453] = new Triangle(new Point3D(0.257917,0.041468,
zOff-1.090888
), new Point3D(0.313715,0.105553,
zOff-1.077001
), new Point3D(0.268422,0.079194,
zOff-0.843054
));
object[1454] = new Triangle(new Point3D(-0.257917,0.041468,
zOff-1.090888
), new Point3D(-0.250387,0.015299,
zOff-0.891580
), new Point3D(-0.268422,0.079194,
zOff-0.843054
));
object[1455] = new Triangle(new Point3D(-0.268422,0.079194,
zOff-0.843054
), new Point3D(-0.313715,0.105553,
zOff-1.077001
), new Point3D(-0.257917,0.041468,
zOff-1.090888
));
object[1456] = new Triangle(new Point3D(0.241504,0.134819,
zOff-0.831812
), new Point3D(0.268422,0.079194,
zOff-0.843054
), new Point3D(0.313715,0.105553,
zOff-1.077001
));
object[1457] = new Triangle(new Point3D(0.313715,0.105553,
zOff-1.077001
), new Point3D(0.301842,0.202189,
zOff-1.060598
), new Point3D(0.241504,0.134819,
zOff-0.831812
));
object[1458] = new Triangle(new Point3D(-0.313715,0.105553,
zOff-1.077001
), new Point3D(-0.268422,0.079194,
zOff-0.843054
), new Point3D(-0.241504,0.134819,
zOff-0.831812
));
object[1459] = new Triangle(new Point3D(-0.241504,0.134819,
zOff-0.831812
), new Point3D(-0.301842,0.202189,
zOff-1.060598
), new Point3D(-0.313715,0.105553,
zOff-1.077001
));
object[1460] = new Triangle(new Point3D(0.183073,0.165013,
zOff-0.837127
), new Point3D(0.241504,0.134819,
zOff-0.831812
), new Point3D(0.301842,0.202189,
zOff-1.060598
));
object[1461] = new Triangle(new Point3D(0.301842,0.202189,
zOff-1.060598
), new Point3D(0.224145,0.257968,
zOff-1.054636
), new Point3D(0.183073,0.165013,
zOff-0.837127
));
object[1462] = new Triangle(new Point3D(-0.301842,0.202189,
zOff-1.060598
), new Point3D(-0.241504,0.134819,
zOff-0.831812
), new Point3D(-0.183073,0.165013,
zOff-0.837127
));
object[1463] = new Triangle(new Point3D(-0.183073,0.165013,
zOff-0.837127
), new Point3D(-0.224145,0.257968,
zOff-1.054636
), new Point3D(-0.301842,0.202189,
zOff-1.060598
));
object[1464] = new Triangle(new Point3D(0.224145,0.257968,
zOff-1.054636
), new Point3D(0.301842,0.202189,
zOff-1.060598
), new Point3D(0.284826,0.183271,
zOff-1.299399
));
object[1465] = new Triangle(new Point3D(0.284826,0.183271,
zOff-1.299399
), new Point3D(0.230880,0.207018,
zOff-1.300987
), new Point3D(0.224145,0.257968,
zOff-1.054636
));
object[1466] = new Triangle(new Point3D(-0.284826,0.183271,
zOff-1.299399
), new Point3D(-0.301842,0.202189,
zOff-1.060598
), new Point3D(-0.224145,0.257968,
zOff-1.054636
));
object[1467] = new Triangle(new Point3D(-0.224145,0.257968,
zOff-1.054636
), new Point3D(-0.230880,0.207018,
zOff-1.300987
), new Point3D(-0.284826,0.183271,
zOff-1.299399
));
object[1468] = new Triangle(new Point3D(0.301842,0.202189,
zOff-1.060598
), new Point3D(0.313715,0.105553,
zOff-1.077001
), new Point3D(0.296148,0.088804,
zOff-1.298199
));
object[1469] = new Triangle(new Point3D(0.296148,0.088804,
zOff-1.298199
), new Point3D(0.284826,0.183271,
zOff-1.299399
), new Point3D(0.301842,0.202189,
zOff-1.060598
));
object[1470] = new Triangle(new Point3D(-0.296148,0.088804,
zOff-1.298199
), new Point3D(-0.313715,0.105553,
zOff-1.077001
), new Point3D(-0.301842,0.202189,
zOff-1.060598
));
object[1471] = new Triangle(new Point3D(-0.301842,0.202189,
zOff-1.060598
), new Point3D(-0.284826,0.183271,
zOff-1.299399
), new Point3D(-0.296148,0.088804,
zOff-1.298199
));
object[1472] = new Triangle(new Point3D(0.313715,0.105553,
zOff-1.077001
), new Point3D(0.257917,0.041468,
zOff-1.090888
), new Point3D(0.262645,0.046099,
zOff-1.308575
));
object[1473] = new Triangle(new Point3D(0.262645,0.046099,
zOff-1.308575
), new Point3D(0.296148,0.088804,
zOff-1.298199
), new Point3D(0.313715,0.105553,
zOff-1.077001
));
object[1474] = new Triangle(new Point3D(-0.262645,0.046099,
zOff-1.308575
), new Point3D(-0.257917,0.041468,
zOff-1.090888
), new Point3D(-0.313715,0.105553,
zOff-1.077001
));
object[1475] = new Triangle(new Point3D(-0.313715,0.105553,
zOff-1.077001
), new Point3D(-0.296148,0.088804,
zOff-1.298199
), new Point3D(-0.262645,0.046099,
zOff-1.308575
));
object[1476] = new Triangle(new Point3D(0.257917,0.041468,
zOff-1.090888
), new Point3D(0.208904,0.022465,
zOff-1.095118
), new Point3D(0.226240,0.036806,
zOff-1.309325
));
object[1477] = new Triangle(new Point3D(0.226240,0.036806,
zOff-1.309325
), new Point3D(0.262645,0.046099,
zOff-1.308575
), new Point3D(0.257917,0.041468,
zOff-1.090888
));
object[1478] = new Triangle(new Point3D(-0.226240,0.036806,
zOff-1.309325
), new Point3D(-0.208904,0.022465,
zOff-1.095118
), new Point3D(-0.257917,0.041468,
zOff-1.090888
));
object[1479] = new Triangle(new Point3D(-0.257917,0.041468,
zOff-1.090888
), new Point3D(-0.262645,0.046099,
zOff-1.308575
), new Point3D(-0.226240,0.036806,
zOff-1.309325
));
object[1480] = new Triangle(new Point3D(0.208904,0.022465,
zOff-1.095118
), new Point3D(0.152061,0.074427,
zOff-1.093921
), new Point3D(0.188717,0.075726,
zOff-1.311690
));
object[1481] = new Triangle(new Point3D(0.188717,0.075726,
zOff-1.311690
), new Point3D(0.226240,0.036806,
zOff-1.309325
), new Point3D(0.208904,0.022465,
zOff-1.095118
));
object[1482] = new Triangle(new Point3D(-0.188717,0.075726,
zOff-1.311690
), new Point3D(-0.152061,0.074427,
zOff-1.093921
), new Point3D(-0.208904,0.022465,
zOff-1.095118
));
object[1483] = new Triangle(new Point3D(-0.208904,0.022465,
zOff-1.095118
), new Point3D(-0.226240,0.036806,
zOff-1.309325
), new Point3D(-0.188717,0.075726,
zOff-1.311690
));
object[1484] = new Triangle(new Point3D(0.152061,0.074427,
zOff-1.093921
), new Point3D(0.113769,0.150062,
zOff-1.081681
), new Point3D(0.162110,0.134475,
zOff-1.318020
));
object[1485] = new Triangle(new Point3D(0.162110,0.134475,
zOff-1.318020
), new Point3D(0.188717,0.075726,
zOff-1.311690
), new Point3D(0.152061,0.074427,
zOff-1.093921
));
object[1486] = new Triangle(new Point3D(-0.162110,0.134475,
zOff-1.318020
), new Point3D(-0.113769,0.150062,
zOff-1.081681
), new Point3D(-0.152061,0.074427,
zOff-1.093921
));
object[1487] = new Triangle(new Point3D(-0.152061,0.074427,
zOff-1.093921
), new Point3D(-0.188717,0.075726,
zOff-1.311690
), new Point3D(-0.162110,0.134475,
zOff-1.318020
));
object[1488] = new Triangle(new Point3D(0.113769,0.150062,
zOff-1.081681
), new Point3D(0.148393,0.235571,
zOff-1.067859
), new Point3D(0.174592,0.183700,
zOff-1.306255
));
object[1489] = new Triangle(new Point3D(0.174592,0.183700,
zOff-1.306255
), new Point3D(0.162110,0.134475,
zOff-1.318020
), new Point3D(0.113769,0.150062,
zOff-1.081681
));
object[1490] = new Triangle(new Point3D(-0.174592,0.183700,
zOff-1.306255
), new Point3D(-0.148393,0.235571,
zOff-1.067859
), new Point3D(-0.113769,0.150062,
zOff-1.081681
));
object[1491] = new Triangle(new Point3D(-0.113769,0.150062,
zOff-1.081681
), new Point3D(-0.162110,0.134475,
zOff-1.318020
), new Point3D(-0.174592,0.183700,
zOff-1.306255
));
object[1492] = new Triangle(new Point3D(0.148393,0.235571,
zOff-1.067859
), new Point3D(0.224145,0.257968,
zOff-1.054636
), new Point3D(0.230880,0.207018,
zOff-1.300987
));
object[1493] = new Triangle(new Point3D(0.230880,0.207018,
zOff-1.300987
), new Point3D(0.174592,0.183700,
zOff-1.306255
), new Point3D(0.148393,0.235571,
zOff-1.067859
));
object[1494] = new Triangle(new Point3D(-0.230880,0.207018,
zOff-1.300987
), new Point3D(-0.224145,0.257968,
zOff-1.054636
), new Point3D(-0.148393,0.235571,
zOff-1.067859
));
object[1495] = new Triangle(new Point3D(-0.148393,0.235571,
zOff-1.067859
), new Point3D(-0.174592,0.183700,
zOff-1.306255
), new Point3D(-0.230880,0.207018,
zOff-1.300987
));
object[1496] = new Triangle(new Point3D(0.174592,0.183700,
zOff-1.306255
), new Point3D(0.230880,0.207018,
zOff-1.300987
), new Point3D(0.218278,0.173160,
zOff-1.472211
));
object[1497] = new Triangle(new Point3D(0.218278,0.173160,
zOff-1.472211
), new Point3D(0.196205,0.148459,
zOff-1.473945
), new Point3D(0.174592,0.183700,
zOff-1.306255
));
object[1498] = new Triangle(new Point3D(-0.218278,0.173160,
zOff-1.472211
), new Point3D(-0.230880,0.207018,
zOff-1.300987
), new Point3D(-0.174592,0.183700,
zOff-1.306255
));
object[1499] = new Triangle(new Point3D(-0.174592,0.183700,
zOff-1.306255
), new Point3D(-0.196205,0.148459,
zOff-1.473945
), new Point3D(-0.218278,0.173160,
zOff-1.472211
));
object[1500] = new Triangle(new Point3D(0.162110,0.134475,
zOff-1.318020
), new Point3D(0.174592,0.183700,
zOff-1.306255
), new Point3D(0.196205,0.148459,
zOff-1.473945
));
object[1501] = new Triangle(new Point3D(0.196205,0.148459,
zOff-1.473945
), new Point3D(0.175862,0.104249,
zOff-1.474747
), new Point3D(0.162110,0.134475,
zOff-1.318020
));
object[1502] = new Triangle(new Point3D(-0.196205,0.148459,
zOff-1.473945
), new Point3D(-0.174592,0.183700,
zOff-1.306255
), new Point3D(-0.162110,0.134475,
zOff-1.318020
));
object[1503] = new Triangle(new Point3D(-0.162110,0.134475,
zOff-1.318020
), new Point3D(-0.175862,0.104249,
zOff-1.474747
), new Point3D(-0.196205,0.148459,
zOff-1.473945
));
object[1504] = new Triangle(new Point3D(0.188717,0.075726,
zOff-1.311690
), new Point3D(0.162110,0.134475,
zOff-1.318020
), new Point3D(0.175862,0.104249,
zOff-1.474747
));
object[1505] = new Triangle(new Point3D(0.175862,0.104249,
zOff-1.474747
), new Point3D(0.203042,0.057602,
zOff-1.473153
), new Point3D(0.188717,0.075726,
zOff-1.311690
));
object[1506] = new Triangle(new Point3D(-0.175862,0.104249,
zOff-1.474747
), new Point3D(-0.162110,0.134475,
zOff-1.318020
), new Point3D(-0.188717,0.075726,
zOff-1.311690
));
object[1507] = new Triangle(new Point3D(-0.188717,0.075726,
zOff-1.311690
), new Point3D(-0.203042,0.057602,
zOff-1.473153
), new Point3D(-0.175862,0.104249,
zOff-1.474747
));
object[1508] = new Triangle(new Point3D(0.226240,0.036806,
zOff-1.309325
), new Point3D(0.188717,0.075726,
zOff-1.311690
), new Point3D(0.203042,0.057602,
zOff-1.473153
));
object[1509] = new Triangle(new Point3D(0.203042,0.057602,
zOff-1.473153
), new Point3D(0.235635,0.040773,
zOff-1.471271
), new Point3D(0.226240,0.036806,
zOff-1.309325
));
object[1510] = new Triangle(new Point3D(-0.203042,0.057602,
zOff-1.473153
), new Point3D(-0.188717,0.075726,
zOff-1.311690
), new Point3D(-0.226240,0.036806,
zOff-1.309325
));
object[1511] = new Triangle(new Point3D(-0.226240,0.036806,
zOff-1.309325
), new Point3D(-0.235635,0.040773,
zOff-1.471271
), new Point3D(-0.203042,0.057602,
zOff-1.473153
));
object[1512] = new Triangle(new Point3D(0.262645,0.046099,
zOff-1.308575
), new Point3D(0.226240,0.036806,
zOff-1.309325
), new Point3D(0.235635,0.040773,
zOff-1.471271
));
object[1513] = new Triangle(new Point3D(0.235635,0.040773,
zOff-1.471271
), new Point3D(0.262884,0.065525,
zOff-1.471958
), new Point3D(0.262645,0.046099,
zOff-1.308575
));
object[1514] = new Triangle(new Point3D(-0.235635,0.040773,
zOff-1.471271
), new Point3D(-0.226240,0.036806,
zOff-1.309325
), new Point3D(-0.262645,0.046099,
zOff-1.308575
));
object[1515] = new Triangle(new Point3D(-0.262645,0.046099,
zOff-1.308575
), new Point3D(-0.262884,0.065525,
zOff-1.471958
), new Point3D(-0.235635,0.040773,
zOff-1.471271
));
object[1516] = new Triangle(new Point3D(0.296148,0.088804,
zOff-1.298199
), new Point3D(0.262645,0.046099,
zOff-1.308575
), new Point3D(0.262884,0.065525,
zOff-1.471958
));
object[1517] = new Triangle(new Point3D(0.262884,0.065525,
zOff-1.471958
), new Point3D(0.284251,0.100698,
zOff-1.474747
), new Point3D(0.296148,0.088804,
zOff-1.298199
));
object[1518] = new Triangle(new Point3D(-0.262884,0.065525,
zOff-1.471958
), new Point3D(-0.262645,0.046099,
zOff-1.308575
), new Point3D(-0.296148,0.088804,
zOff-1.298199
));
object[1519] = new Triangle(new Point3D(-0.296148,0.088804,
zOff-1.298199
), new Point3D(-0.284251,0.100698,
zOff-1.474747
), new Point3D(-0.262884,0.065525,
zOff-1.471958
));
object[1520] = new Triangle(new Point3D(0.284826,0.183271,
zOff-1.299399
), new Point3D(0.296148,0.088804,
zOff-1.298199
), new Point3D(0.284251,0.100698,
zOff-1.474747
));
object[1521] = new Triangle(new Point3D(0.284251,0.100698,
zOff-1.474747
), new Point3D(0.250765,0.161395,
zOff-1.476134
), new Point3D(0.284826,0.183271,
zOff-1.299399
));
object[1522] = new Triangle(new Point3D(-0.284251,0.100698,
zOff-1.474747
), new Point3D(-0.296148,0.088804,
zOff-1.298199
), new Point3D(-0.284826,0.183271,
zOff-1.299399
));
object[1523] = new Triangle(new Point3D(-0.284826,0.183271,
zOff-1.299399
), new Point3D(-0.250765,0.161395,
zOff-1.476134
), new Point3D(-0.284251,0.100698,
zOff-1.474747
));
object[1524] = new Triangle(new Point3D(0.230880,0.207018,
zOff-1.300987
), new Point3D(0.284826,0.183271,
zOff-1.299399
), new Point3D(0.250765,0.161395,
zOff-1.476134
));
object[1525] = new Triangle(new Point3D(0.250765,0.161395,
zOff-1.476134
), new Point3D(0.218278,0.173160,
zOff-1.472211
), new Point3D(0.230880,0.207018,
zOff-1.300987
));
object[1526] = new Triangle(new Point3D(-0.250765,0.161395,
zOff-1.476134
), new Point3D(-0.284826,0.183271,
zOff-1.299399
), new Point3D(-0.230880,0.207018,
zOff-1.300987
));
object[1527] = new Triangle(new Point3D(-0.230880,0.207018,
zOff-1.300987
), new Point3D(-0.218278,0.173160,
zOff-1.472211
), new Point3D(-0.250765,0.161395,
zOff-1.476134
));
object[1528] = new Triangle(new Point3D(0.190547,-0.234180,
zOff-1.664951
), new Point3D(0.170251,-0.239963,
zOff-1.702562
), new Point3D(0.200578,-0.322873,
zOff-1.706809
));
object[1529] = new Triangle(new Point3D(0.200578,-0.322873,
zOff-1.706809
), new Point3D(0.207917,-0.311782,
zOff-1.666386
), new Point3D(0.190547,-0.234180,
zOff-1.664951
));
object[1530] = new Triangle(new Point3D(-0.200578,-0.322873,
zOff-1.706809
), new Point3D(-0.170251,-0.239963,
zOff-1.702562
), new Point3D(-0.190547,-0.234180,
zOff-1.664951
));
object[1531] = new Triangle(new Point3D(-0.190547,-0.234180,
zOff-1.664951
), new Point3D(-0.207917,-0.311782,
zOff-1.666386
), new Point3D(-0.200578,-0.322873,
zOff-1.706809
));
object[1532] = new Triangle(new Point3D(0.170251,-0.239963,
zOff-1.702562
), new Point3D(0.188947,-0.231321,
zOff-1.729323
), new Point3D(0.207428,-0.309434,
zOff-1.735196
));
object[1533] = new Triangle(new Point3D(0.207428,-0.309434,
zOff-1.735196
), new Point3D(0.200578,-0.322873,
zOff-1.706809
), new Point3D(0.170251,-0.239963,
zOff-1.702562
));
object[1534] = new Triangle(new Point3D(-0.207428,-0.309434,
zOff-1.735196
), new Point3D(-0.188947,-0.231321,
zOff-1.729323
), new Point3D(-0.170251,-0.239963,
zOff-1.702562
));
object[1535] = new Triangle(new Point3D(-0.170251,-0.239963,
zOff-1.702562
), new Point3D(-0.200578,-0.322873,
zOff-1.706809
), new Point3D(-0.207428,-0.309434,
zOff-1.735196
));
object[1536] = new Triangle(new Point3D(0.382548,-0.154702,
zOff-1.732423
), new Point3D(0.389578,-0.149082,
zOff-1.707148
), new Point3D(0.391799,-0.243571,
zOff-1.708483
));
object[1537] = new Triangle(new Point3D(0.391799,-0.243571,
zOff-1.708483
), new Point3D(0.383330,-0.235654,
zOff-1.734296
), new Point3D(0.382548,-0.154702,
zOff-1.732423
));
object[1538] = new Triangle(new Point3D(-0.391799,-0.243571,
zOff-1.708483
), new Point3D(-0.389578,-0.149082,
zOff-1.707148
), new Point3D(-0.382548,-0.154702,
zOff-1.732423
));
object[1539] = new Triangle(new Point3D(-0.382548,-0.154702,
zOff-1.732423
), new Point3D(-0.383330,-0.235654,
zOff-1.734296
), new Point3D(-0.391799,-0.243571,
zOff-1.708483
));
object[1540] = new Triangle(new Point3D(0.389578,-0.149082,
zOff-1.707148
), new Point3D(0.372059,-0.157733,
zOff-1.679263
), new Point3D(0.383884,-0.237953,
zOff-1.674692
));
object[1541] = new Triangle(new Point3D(0.383884,-0.237953,
zOff-1.674692
), new Point3D(0.391799,-0.243571,
zOff-1.708483
), new Point3D(0.389578,-0.149082,
zOff-1.707148
));
object[1542] = new Triangle(new Point3D(-0.383884,-0.237953,
zOff-1.674692
), new Point3D(-0.372059,-0.157733,
zOff-1.679263
), new Point3D(-0.389578,-0.149082,
zOff-1.707148
));
object[1543] = new Triangle(new Point3D(-0.389578,-0.149082,
zOff-1.707148
), new Point3D(-0.391799,-0.243571,
zOff-1.708483
), new Point3D(-0.383884,-0.237953,
zOff-1.674692
));
object[1544] = new Triangle(new Point3D(0.296739,0.122368,
zOff-1.569023
), new Point3D(0.300819,0.126726,
zOff-1.650424
), new Point3D(0.267859,0.207093,
zOff-1.641633
));
object[1545] = new Triangle(new Point3D(0.267859,0.207093,
zOff-1.641633
), new Point3D(0.255237,0.186272,
zOff-1.563626
), new Point3D(0.296739,0.122368,
zOff-1.569023
));
object[1546] = new Triangle(new Point3D(-0.267859,0.207093,
zOff-1.641633
), new Point3D(-0.300819,0.126726,
zOff-1.650424
), new Point3D(-0.296739,0.122368,
zOff-1.569023
));
object[1547] = new Triangle(new Point3D(-0.296739,0.122368,
zOff-1.569023
), new Point3D(-0.255237,0.186272,
zOff-1.563626
), new Point3D(-0.267859,0.207093,
zOff-1.641633
));
object[1548] = new Triangle(new Point3D(0.300819,0.126726,
zOff-1.650424
), new Point3D(0.288153,0.125809,
zOff-1.725875
), new Point3D(0.265244,0.203308,
zOff-1.725022
));
object[1549] = new Triangle(new Point3D(0.265244,0.203308,
zOff-1.725022
), new Point3D(0.267859,0.207093,
zOff-1.641633
), new Point3D(0.300819,0.126726,
zOff-1.650424
));
object[1550] = new Triangle(new Point3D(-0.265244,0.203308,
zOff-1.725022
), new Point3D(-0.288153,0.125809,
zOff-1.725875
), new Point3D(-0.300819,0.126726,
zOff-1.650424
));
object[1551] = new Triangle(new Point3D(-0.300819,0.126726,
zOff-1.650424
), new Point3D(-0.267859,0.207093,
zOff-1.641633
), new Point3D(-0.265244,0.203308,
zOff-1.725022
));
object[1552] = new Triangle(new Point3D(0.312091,0.027386,
zOff-1.589246
), new Point3D(0.335057,0.035642,
zOff-1.658692
), new Point3D(0.300819,0.126726,
zOff-1.650424
));
object[1553] = new Triangle(new Point3D(0.300819,0.126726,
zOff-1.650424
), new Point3D(0.296739,0.122368,
zOff-1.569023
), new Point3D(0.312091,0.027386,
zOff-1.589246
));
object[1554] = new Triangle(new Point3D(-0.300819,0.126726,
zOff-1.650424
), new Point3D(-0.335057,0.035642,
zOff-1.658692
), new Point3D(-0.312091,0.027386,
zOff-1.589246
));
object[1555] = new Triangle(new Point3D(-0.312091,0.027386,
zOff-1.589246
), new Point3D(-0.296739,0.122368,
zOff-1.569023
), new Point3D(-0.300819,0.126726,
zOff-1.650424
));
object[1556] = new Triangle(new Point3D(0.335057,0.035642,
zOff-1.658692
), new Point3D(0.320620,0.037989,
zOff-1.724208
), new Point3D(0.288153,0.125809,
zOff-1.725875
));
object[1557] = new Triangle(new Point3D(0.288153,0.125809,
zOff-1.725875
), new Point3D(0.300819,0.126726,
zOff-1.650424
), new Point3D(0.335057,0.035642,
zOff-1.658692
));
object[1558] = new Triangle(new Point3D(-0.288153,0.125809,
zOff-1.725875
), new Point3D(-0.320620,0.037989,
zOff-1.724208
), new Point3D(-0.335057,0.035642,
zOff-1.658692
));
object[1559] = new Triangle(new Point3D(-0.335057,0.035642,
zOff-1.658692
), new Point3D(-0.300819,0.126726,
zOff-1.650424
), new Point3D(-0.288153,0.125809,
zOff-1.725875
));
object[1560] = new Triangle(new Point3D(0.160888,0.103410,
zOff-1.565459
), new Point3D(0.149078,0.103693,
zOff-1.653443
), new Point3D(0.147582,0.002367,
zOff-1.640294
));
object[1561] = new Triangle(new Point3D(0.147582,0.002367,
zOff-1.640294
), new Point3D(0.170650,0.001463,
zOff-1.567566
), new Point3D(0.160888,0.103410,
zOff-1.565459
));
object[1562] = new Triangle(new Point3D(-0.147582,0.002367,
zOff-1.640294
), new Point3D(-0.149078,0.103693,
zOff-1.653443
), new Point3D(-0.160888,0.103410,
zOff-1.565459
));
object[1563] = new Triangle(new Point3D(-0.160888,0.103410,
zOff-1.565459
), new Point3D(-0.170650,0.001463,
zOff-1.567566
), new Point3D(-0.147582,0.002367,
zOff-1.640294
));
object[1564] = new Triangle(new Point3D(0.149078,0.103693,
zOff-1.653443
), new Point3D(0.161407,0.106731,
zOff-1.728028
), new Point3D(0.161110,0.010336,
zOff-1.692693
));
object[1565] = new Triangle(new Point3D(0.161110,0.010336,
zOff-1.692693
), new Point3D(0.147582,0.002367,
zOff-1.640294
), new Point3D(0.149078,0.103693,
zOff-1.653443
));
object[1566] = new Triangle(new Point3D(-0.161110,0.010336,
zOff-1.692693
), new Point3D(-0.161407,0.106731,
zOff-1.728028
), new Point3D(-0.149078,0.103693,
zOff-1.653443
));
object[1567] = new Triangle(new Point3D(-0.149078,0.103693,
zOff-1.653443
), new Point3D(-0.147582,0.002367,
zOff-1.640294
), new Point3D(-0.161110,0.010336,
zOff-1.692693
));
object[1568] = new Triangle(new Point3D(0.182588,0.175873,
zOff-1.564591
), new Point3D(0.153617,0.189990,
zOff-1.642965
), new Point3D(0.149078,0.103693,
zOff-1.653443
));
object[1569] = new Triangle(new Point3D(0.149078,0.103693,
zOff-1.653443
), new Point3D(0.160888,0.103410,
zOff-1.565459
), new Point3D(0.182588,0.175873,
zOff-1.564591
));
object[1570] = new Triangle(new Point3D(-0.149078,0.103693,
zOff-1.653443
), new Point3D(-0.153617,0.189990,
zOff-1.642965
), new Point3D(-0.182588,0.175873,
zOff-1.564591
));
object[1571] = new Triangle(new Point3D(-0.182588,0.175873,
zOff-1.564591
), new Point3D(-0.160888,0.103410,
zOff-1.565459
), new Point3D(-0.149078,0.103693,
zOff-1.653443
));
object[1572] = new Triangle(new Point3D(0.153617,0.189990,
zOff-1.642965
), new Point3D(0.159265,0.187461,
zOff-1.724842
), new Point3D(0.161407,0.106731,
zOff-1.728028
));
object[1573] = new Triangle(new Point3D(0.161407,0.106731,
zOff-1.728028
), new Point3D(0.149078,0.103693,
zOff-1.653443
), new Point3D(0.153617,0.189990,
zOff-1.642965
));
object[1574] = new Triangle(new Point3D(-0.161407,0.106731,
zOff-1.728028
), new Point3D(-0.159265,0.187461,
zOff-1.724842
), new Point3D(-0.153617,0.189990,
zOff-1.642965
));
object[1575] = new Triangle(new Point3D(-0.153617,0.189990,
zOff-1.642965
), new Point3D(-0.149078,0.103693,
zOff-1.653443
), new Point3D(-0.161407,0.106731,
zOff-1.728028
));
object[1576] = new Triangle(new Point3D(0.372059,-0.157733,
zOff-1.679263
), new Point3D(0.287568,-0.204207,
zOff-1.663722
), new Point3D(0.307257,-0.286290,
zOff-1.666081
));
object[1577] = new Triangle(new Point3D(0.307257,-0.286290,
zOff-1.666081
), new Point3D(0.383884,-0.237953,
zOff-1.674692
), new Point3D(0.372059,-0.157733,
zOff-1.679263
));
object[1578] = new Triangle(new Point3D(-0.307257,-0.286290,
zOff-1.666081
), new Point3D(-0.287568,-0.204207,
zOff-1.663722
), new Point3D(-0.372059,-0.157733,
zOff-1.679263
));
object[1579] = new Triangle(new Point3D(-0.372059,-0.157733,
zOff-1.679263
), new Point3D(-0.383884,-0.237953,
zOff-1.674692
), new Point3D(-0.307257,-0.286290,
zOff-1.666081
));
object[1580] = new Triangle(new Point3D(0.287568,-0.204207,
zOff-1.663722
), new Point3D(0.190547,-0.234180,
zOff-1.664951
), new Point3D(0.207917,-0.311782,
zOff-1.666386
));
object[1581] = new Triangle(new Point3D(0.207917,-0.311782,
zOff-1.666386
), new Point3D(0.307257,-0.286290,
zOff-1.666081
), new Point3D(0.287568,-0.204207,
zOff-1.663722
));
object[1582] = new Triangle(new Point3D(-0.207917,-0.311782,
zOff-1.666386
), new Point3D(-0.190547,-0.234180,
zOff-1.664951
), new Point3D(-0.287568,-0.204207,
zOff-1.663722
));
object[1583] = new Triangle(new Point3D(-0.287568,-0.204207,
zOff-1.663722
), new Point3D(-0.307257,-0.286290,
zOff-1.666081
), new Point3D(-0.207917,-0.311782,
zOff-1.666386
));
object[1584] = new Triangle(new Point3D(0.188947,-0.231321,
zOff-1.729323
), new Point3D(0.287211,-0.199503,
zOff-1.736133
), new Point3D(0.306790,-0.283524,
zOff-1.735844
));
object[1585] = new Triangle(new Point3D(0.306790,-0.283524,
zOff-1.735844
), new Point3D(0.207428,-0.309434,
zOff-1.735196
), new Point3D(0.188947,-0.231321,
zOff-1.729323
));
object[1586] = new Triangle(new Point3D(-0.306790,-0.283524,
zOff-1.735844
), new Point3D(-0.287211,-0.199503,
zOff-1.736133
), new Point3D(-0.188947,-0.231321,
zOff-1.729323
));
object[1587] = new Triangle(new Point3D(-0.188947,-0.231321,
zOff-1.729323
), new Point3D(-0.207428,-0.309434,
zOff-1.735196
), new Point3D(-0.306790,-0.283524,
zOff-1.735844
));
object[1588] = new Triangle(new Point3D(0.287211,-0.199503,
zOff-1.736133
), new Point3D(0.382548,-0.154702,
zOff-1.732423
), new Point3D(0.383330,-0.235654,
zOff-1.734296
));
object[1589] = new Triangle(new Point3D(0.383330,-0.235654,
zOff-1.734296
), new Point3D(0.306790,-0.283524,
zOff-1.735844
), new Point3D(0.287211,-0.199503,
zOff-1.736133
));
object[1590] = new Triangle(new Point3D(-0.383330,-0.235654,
zOff-1.734296
), new Point3D(-0.382548,-0.154702,
zOff-1.732423
), new Point3D(-0.287211,-0.199503,
zOff-1.736133
));
object[1591] = new Triangle(new Point3D(-0.287211,-0.199503,
zOff-1.736133
), new Point3D(-0.306790,-0.283524,
zOff-1.735844
), new Point3D(-0.383330,-0.235654,
zOff-1.734296
));
object[1592] = new Triangle(new Point3D(0.161407,0.106731,
zOff-1.728028
), new Point3D(0.223578,0.124218,
zOff-1.731811
), new Point3D(0.240902,0.027069,
zOff-1.729224
));
object[1593] = new Triangle(new Point3D(0.240902,0.027069,
zOff-1.729224
), new Point3D(0.161110,0.010336,
zOff-1.692693
), new Point3D(0.161407,0.106731,
zOff-1.728028
));
object[1594] = new Triangle(new Point3D(-0.240902,0.027069,
zOff-1.729224
), new Point3D(-0.223578,0.124218,
zOff-1.731811
), new Point3D(-0.161407,0.106731,
zOff-1.728028
));
object[1595] = new Triangle(new Point3D(-0.161407,0.106731,
zOff-1.728028
), new Point3D(-0.161110,0.010336,
zOff-1.692693
), new Point3D(-0.240902,0.027069,
zOff-1.729224
));
object[1596] = new Triangle(new Point3D(0.223578,0.124218,
zOff-1.731811
), new Point3D(0.288153,0.125809,
zOff-1.725875
), new Point3D(0.320620,0.037989,
zOff-1.724208
));
object[1597] = new Triangle(new Point3D(0.320620,0.037989,
zOff-1.724208
), new Point3D(0.240902,0.027069,
zOff-1.729224
), new Point3D(0.223578,0.124218,
zOff-1.731811
));
object[1598] = new Triangle(new Point3D(-0.320620,0.037989,
zOff-1.724208
), new Point3D(-0.288153,0.125809,
zOff-1.725875
), new Point3D(-0.223578,0.124218,
zOff-1.731811
));
object[1599] = new Triangle(new Point3D(-0.223578,0.124218,
zOff-1.731811
), new Point3D(-0.240902,0.027069,
zOff-1.729224
), new Point3D(-0.320620,0.037989,
zOff-1.724208
));
object[1600] = new Triangle(new Point3D(0.159265,0.187461,
zOff-1.724842
), new Point3D(0.209425,0.212795,
zOff-1.726734
), new Point3D(0.223578,0.124218,
zOff-1.731811
));
object[1601] = new Triangle(new Point3D(0.223578,0.124218,
zOff-1.731811
), new Point3D(0.161407,0.106731,
zOff-1.728028
), new Point3D(0.159265,0.187461,
zOff-1.724842
));
object[1602] = new Triangle(new Point3D(-0.223578,0.124218,
zOff-1.731811
), new Point3D(-0.209425,0.212795,
zOff-1.726734
), new Point3D(-0.159265,0.187461,
zOff-1.724842
));
object[1603] = new Triangle(new Point3D(-0.159265,0.187461,
zOff-1.724842
), new Point3D(-0.161407,0.106731,
zOff-1.728028
), new Point3D(-0.223578,0.124218,
zOff-1.731811
));
object[1604] = new Triangle(new Point3D(0.209425,0.212795,
zOff-1.726734
), new Point3D(0.265244,0.203308,
zOff-1.725022
), new Point3D(0.288153,0.125809,
zOff-1.725875
));
object[1605] = new Triangle(new Point3D(0.288153,0.125809,
zOff-1.725875
), new Point3D(0.223578,0.124218,
zOff-1.731811
), new Point3D(0.209425,0.212795,
zOff-1.726734
));
object[1606] = new Triangle(new Point3D(-0.288153,0.125809,
zOff-1.725875
), new Point3D(-0.265244,0.203308,
zOff-1.725022
), new Point3D(-0.209425,0.212795,
zOff-1.726734
));
object[1607] = new Triangle(new Point3D(-0.209425,0.212795,
zOff-1.726734
), new Point3D(-0.223578,0.124218,
zOff-1.731811
), new Point3D(-0.288153,0.125809,
zOff-1.725875
));
object[1608] = new Triangle(new Point3D(0.153617,0.189990,
zOff-1.642965
), new Point3D(0.205863,0.228656,
zOff-1.640606
), new Point3D(0.209425,0.212795,
zOff-1.726734
));
object[1609] = new Triangle(new Point3D(0.209425,0.212795,
zOff-1.726734
), new Point3D(0.159265,0.187461,
zOff-1.724842
), new Point3D(0.153617,0.189990,
zOff-1.642965
));
object[1610] = new Triangle(new Point3D(-0.209425,0.212795,
zOff-1.726734
), new Point3D(-0.205863,0.228656,
zOff-1.640606
), new Point3D(-0.153617,0.189990,
zOff-1.642965
));
object[1611] = new Triangle(new Point3D(-0.153617,0.189990,
zOff-1.642965
), new Point3D(-0.159265,0.187461,
zOff-1.724842
), new Point3D(-0.209425,0.212795,
zOff-1.726734
));
object[1612] = new Triangle(new Point3D(0.205863,0.228656,
zOff-1.640606
), new Point3D(0.267859,0.207093,
zOff-1.641633
), new Point3D(0.265244,0.203308,
zOff-1.725022
));
object[1613] = new Triangle(new Point3D(0.265244,0.203308,
zOff-1.725022
), new Point3D(0.209425,0.212795,
zOff-1.726734
), new Point3D(0.205863,0.228656,
zOff-1.640606
));
object[1614] = new Triangle(new Point3D(-0.265244,0.203308,
zOff-1.725022
), new Point3D(-0.267859,0.207093,
zOff-1.641633
), new Point3D(-0.205863,0.228656,
zOff-1.640606
));
object[1615] = new Triangle(new Point3D(-0.205863,0.228656,
zOff-1.640606
), new Point3D(-0.209425,0.212795,
zOff-1.726734
), new Point3D(-0.265244,0.203308,
zOff-1.725022
));
object[1616] = new Triangle(new Point3D(0.182588,0.175873,
zOff-1.564591
), new Point3D(0.210594,0.208889,
zOff-1.562502
), new Point3D(0.205863,0.228656,
zOff-1.640606
));
object[1617] = new Triangle(new Point3D(0.205863,0.228656,
zOff-1.640606
), new Point3D(0.153617,0.189990,
zOff-1.642965
), new Point3D(0.182588,0.175873,
zOff-1.564591
));
object[1618] = new Triangle(new Point3D(-0.205863,0.228656,
zOff-1.640606
), new Point3D(-0.210594,0.208889,
zOff-1.562502
), new Point3D(-0.182588,0.175873,
zOff-1.564591
));
object[1619] = new Triangle(new Point3D(-0.182588,0.175873,
zOff-1.564591
), new Point3D(-0.153617,0.189990,
zOff-1.642965
), new Point3D(-0.205863,0.228656,
zOff-1.640606
));
object[1620] = new Triangle(new Point3D(0.210594,0.208889,
zOff-1.562502
), new Point3D(0.255237,0.186272,
zOff-1.563626
), new Point3D(0.267859,0.207093,
zOff-1.641633
));
object[1621] = new Triangle(new Point3D(0.267859,0.207093,
zOff-1.641633
), new Point3D(0.205863,0.228656,
zOff-1.640606
), new Point3D(0.210594,0.208889,
zOff-1.562502
));
object[1622] = new Triangle(new Point3D(-0.267859,0.207093,
zOff-1.641633
), new Point3D(-0.255237,0.186272,
zOff-1.563626
), new Point3D(-0.210594,0.208889,
zOff-1.562502
));
object[1623] = new Triangle(new Point3D(-0.210594,0.208889,
zOff-1.562502
), new Point3D(-0.205863,0.228656,
zOff-1.640606
), new Point3D(-0.267859,0.207093,
zOff-1.641633
));
object[1624] = new Triangle(new Point3D(0.391799,-0.243571,
zOff-1.708483
), new Point3D(0.310865,-0.304471,
zOff-1.708464
), new Point3D(0.306790,-0.283524,
zOff-1.735844
));
object[1625] = new Triangle(new Point3D(0.306790,-0.283524,
zOff-1.735844
), new Point3D(0.383330,-0.235654,
zOff-1.734296
), new Point3D(0.391799,-0.243571,
zOff-1.708483
));
object[1626] = new Triangle(new Point3D(-0.306790,-0.283524,
zOff-1.735844
), new Point3D(-0.310865,-0.304471,
zOff-1.708464
), new Point3D(-0.391799,-0.243571,
zOff-1.708483
));
object[1627] = new Triangle(new Point3D(-0.391799,-0.243571,
zOff-1.708483
), new Point3D(-0.383330,-0.235654,
zOff-1.734296
), new Point3D(-0.306790,-0.283524,
zOff-1.735844
));
object[1628] = new Triangle(new Point3D(0.310865,-0.304471,
zOff-1.708464
), new Point3D(0.200578,-0.322873,
zOff-1.706809
), new Point3D(0.207428,-0.309434,
zOff-1.735196
));
object[1629] = new Triangle(new Point3D(0.207428,-0.309434,
zOff-1.735196
), new Point3D(0.306790,-0.283524,
zOff-1.735844
), new Point3D(0.310865,-0.304471,
zOff-1.708464
));
object[1630] = new Triangle(new Point3D(-0.207428,-0.309434,
zOff-1.735196
), new Point3D(-0.200578,-0.322873,
zOff-1.706809
), new Point3D(-0.310865,-0.304471,
zOff-1.708464
));
object[1631] = new Triangle(new Point3D(-0.310865,-0.304471,
zOff-1.708464
), new Point3D(-0.306790,-0.283524,
zOff-1.735844
), new Point3D(-0.207428,-0.309434,
zOff-1.735196
));
object[1632] = new Triangle(new Point3D(0.383884,-0.237953,
zOff-1.674692
), new Point3D(0.307257,-0.286290,
zOff-1.666081
), new Point3D(0.310865,-0.304471,
zOff-1.708464
));
object[1633] = new Triangle(new Point3D(0.310865,-0.304471,
zOff-1.708464
), new Point3D(0.391799,-0.243571,
zOff-1.708483
), new Point3D(0.383884,-0.237953,
zOff-1.674692
));
object[1634] = new Triangle(new Point3D(-0.310865,-0.304471,
zOff-1.708464
), new Point3D(-0.307257,-0.286290,
zOff-1.666081
), new Point3D(-0.383884,-0.237953,
zOff-1.674692
));
object[1635] = new Triangle(new Point3D(-0.383884,-0.237953,
zOff-1.674692
), new Point3D(-0.391799,-0.243571,
zOff-1.708483
), new Point3D(-0.310865,-0.304471,
zOff-1.708464
));
object[1636] = new Triangle(new Point3D(0.307257,-0.286290,
zOff-1.666081
), new Point3D(0.207917,-0.311782,
zOff-1.666386
), new Point3D(0.200578,-0.322873,
zOff-1.706809
));
object[1637] = new Triangle(new Point3D(0.200578,-0.322873,
zOff-1.706809
), new Point3D(0.310865,-0.304471,
zOff-1.708464
), new Point3D(0.307257,-0.286290,
zOff-1.666081
));
object[1638] = new Triangle(new Point3D(-0.200578,-0.322873,
zOff-1.706809
), new Point3D(-0.207917,-0.311782,
zOff-1.666386
), new Point3D(-0.307257,-0.286290,
zOff-1.666081
));
object[1639] = new Triangle(new Point3D(-0.307257,-0.286290,
zOff-1.666081
), new Point3D(-0.310865,-0.304471,
zOff-1.708464
), new Point3D(-0.200578,-0.322873,
zOff-1.706809
));
object[1640] = new Triangle(new Point3D(0.389578,-0.149082,
zOff-1.707148
), new Point3D(0.364406,-0.055908,
zOff-1.694332
), new Point3D(0.342325,-0.064960,
zOff-1.651780
));
object[1641] = new Triangle(new Point3D(0.342325,-0.064960,
zOff-1.651780
), new Point3D(0.372059,-0.157733,
zOff-1.679263
), new Point3D(0.389578,-0.149082,
zOff-1.707148
));
object[1642] = new Triangle(new Point3D(-0.342325,-0.064960,
zOff-1.651780
), new Point3D(-0.364406,-0.055908,
zOff-1.694332
), new Point3D(-0.389578,-0.149082,
zOff-1.707148
));
object[1643] = new Triangle(new Point3D(-0.389578,-0.149082,
zOff-1.707148
), new Point3D(-0.372059,-0.157733,
zOff-1.679263
), new Point3D(-0.342325,-0.064960,
zOff-1.651780
));
object[1644] = new Triangle(new Point3D(0.364406,-0.055908,
zOff-1.694332
), new Point3D(0.335057,0.035642,
zOff-1.658692
), new Point3D(0.312091,0.027386,
zOff-1.589246
));
object[1645] = new Triangle(new Point3D(0.312091,0.027386,
zOff-1.589246
), new Point3D(0.342325,-0.064960,
zOff-1.651780
), new Point3D(0.364406,-0.055908,
zOff-1.694332
));
object[1646] = new Triangle(new Point3D(-0.312091,0.027386,
zOff-1.589246
), new Point3D(-0.335057,0.035642,
zOff-1.658692
), new Point3D(-0.364406,-0.055908,
zOff-1.694332
));
object[1647] = new Triangle(new Point3D(-0.364406,-0.055908,
zOff-1.694332
), new Point3D(-0.342325,-0.064960,
zOff-1.651780
), new Point3D(-0.312091,0.027386,
zOff-1.589246
));
object[1648] = new Triangle(new Point3D(0.382548,-0.154702,
zOff-1.732423
), new Point3D(0.358219,-0.058157,
zOff-1.729648
), new Point3D(0.364406,-0.055908,
zOff-1.694332
));
object[1649] = new Triangle(new Point3D(0.364406,-0.055908,
zOff-1.694332
), new Point3D(0.389578,-0.149082,
zOff-1.707148
), new Point3D(0.382548,-0.154702,
zOff-1.732423
));
object[1650] = new Triangle(new Point3D(-0.364406,-0.055908,
zOff-1.694332
), new Point3D(-0.358219,-0.058157,
zOff-1.729648
), new Point3D(-0.382548,-0.154702,
zOff-1.732423
));
object[1651] = new Triangle(new Point3D(-0.382548,-0.154702,
zOff-1.732423
), new Point3D(-0.389578,-0.149082,
zOff-1.707148
), new Point3D(-0.364406,-0.055908,
zOff-1.694332
));
object[1652] = new Triangle(new Point3D(0.358219,-0.058157,
zOff-1.729648
), new Point3D(0.320620,0.037989,
zOff-1.724208
), new Point3D(0.335057,0.035642,
zOff-1.658692
));
object[1653] = new Triangle(new Point3D(0.335057,0.035642,
zOff-1.658692
), new Point3D(0.364406,-0.055908,
zOff-1.694332
), new Point3D(0.358219,-0.058157,
zOff-1.729648
));
object[1654] = new Triangle(new Point3D(-0.335057,0.035642,
zOff-1.658692
), new Point3D(-0.320620,0.037989,
zOff-1.724208
), new Point3D(-0.358219,-0.058157,
zOff-1.729648
));
object[1655] = new Triangle(new Point3D(-0.358219,-0.058157,
zOff-1.729648
), new Point3D(-0.364406,-0.055908,
zOff-1.694332
), new Point3D(-0.335057,0.035642,
zOff-1.658692
));
object[1656] = new Triangle(new Point3D(0.147582,0.002367,
zOff-1.640294
), new Point3D(0.156886,-0.119266,
zOff-1.661692
), new Point3D(0.180219,-0.116674,
zOff-1.608463
));
object[1657] = new Triangle(new Point3D(0.180219,-0.116674,
zOff-1.608463
), new Point3D(0.170650,0.001463,
zOff-1.567566
), new Point3D(0.147582,0.002367,
zOff-1.640294
));
object[1658] = new Triangle(new Point3D(-0.180219,-0.116674,
zOff-1.608463
), new Point3D(-0.156886,-0.119266,
zOff-1.661692
), new Point3D(-0.147582,0.002367,
zOff-1.640294
));
object[1659] = new Triangle(new Point3D(-0.147582,0.002367,
zOff-1.640294
), new Point3D(-0.170650,0.001463,
zOff-1.567566
), new Point3D(-0.180219,-0.116674,
zOff-1.608463
));
object[1660] = new Triangle(new Point3D(0.156886,-0.119266,
zOff-1.661692
), new Point3D(0.170251,-0.239963,
zOff-1.702562
), new Point3D(0.190547,-0.234180,
zOff-1.664951
));
object[1661] = new Triangle(new Point3D(0.190547,-0.234180,
zOff-1.664951
), new Point3D(0.180219,-0.116674,
zOff-1.608463
), new Point3D(0.156886,-0.119266,
zOff-1.661692
));
object[1662] = new Triangle(new Point3D(-0.190547,-0.234180,
zOff-1.664951
), new Point3D(-0.170251,-0.239963,
zOff-1.702562
), new Point3D(-0.156886,-0.119266,
zOff-1.661692
));
object[1663] = new Triangle(new Point3D(-0.156886,-0.119266,
zOff-1.661692
), new Point3D(-0.180219,-0.116674,
zOff-1.608463
), new Point3D(-0.190547,-0.234180,
zOff-1.664951
));
object[1664] = new Triangle(new Point3D(0.161110,0.010336,
zOff-1.692693
), new Point3D(0.173461,-0.111116,
zOff-1.702128
), new Point3D(0.156886,-0.119266,
zOff-1.661692
));
object[1665] = new Triangle(new Point3D(0.156886,-0.119266,
zOff-1.661692
), new Point3D(0.147582,0.002367,
zOff-1.640294
), new Point3D(0.161110,0.010336,
zOff-1.692693
));
object[1666] = new Triangle(new Point3D(-0.156886,-0.119266,
zOff-1.661692
), new Point3D(-0.173461,-0.111116,
zOff-1.702128
), new Point3D(-0.161110,0.010336,
zOff-1.692693
));
object[1667] = new Triangle(new Point3D(-0.161110,0.010336,
zOff-1.692693
), new Point3D(-0.147582,0.002367,
zOff-1.640294
), new Point3D(-0.156886,-0.119266,
zOff-1.661692
));
object[1668] = new Triangle(new Point3D(0.173461,-0.111116,
zOff-1.702128
), new Point3D(0.188947,-0.231321,
zOff-1.729323
), new Point3D(0.170251,-0.239963,
zOff-1.702562
));
object[1669] = new Triangle(new Point3D(0.170251,-0.239963,
zOff-1.702562
), new Point3D(0.156886,-0.119266,
zOff-1.661692
), new Point3D(0.173461,-0.111116,
zOff-1.702128
));
object[1670] = new Triangle(new Point3D(-0.170251,-0.239963,
zOff-1.702562
), new Point3D(-0.188947,-0.231321,
zOff-1.729323
), new Point3D(-0.173461,-0.111116,
zOff-1.702128
));
object[1671] = new Triangle(new Point3D(-0.173461,-0.111116,
zOff-1.702128
), new Point3D(-0.156886,-0.119266,
zOff-1.661692
), new Point3D(-0.170251,-0.239963,
zOff-1.702562
));
object[1672] = new Triangle(new Point3D(0.240902,0.027069,
zOff-1.729224
), new Point3D(0.263643,-0.086785,
zOff-1.733451
), new Point3D(0.173461,-0.111116,
zOff-1.702128
));
object[1673] = new Triangle(new Point3D(0.173461,-0.111116,
zOff-1.702128
), new Point3D(0.161110,0.010336,
zOff-1.692693
), new Point3D(0.240902,0.027069,
zOff-1.729224
));
object[1674] = new Triangle(new Point3D(-0.173461,-0.111116,
zOff-1.702128
), new Point3D(-0.263643,-0.086785,
zOff-1.733451
), new Point3D(-0.240902,0.027069,
zOff-1.729224
));
object[1675] = new Triangle(new Point3D(-0.240902,0.027069,
zOff-1.729224
), new Point3D(-0.161110,0.010336,
zOff-1.692693
), new Point3D(-0.173461,-0.111116,
zOff-1.702128
));
object[1676] = new Triangle(new Point3D(0.263643,-0.086785,
zOff-1.733451
), new Point3D(0.287211,-0.199503,
zOff-1.736133
), new Point3D(0.188947,-0.231321,
zOff-1.729323
));
object[1677] = new Triangle(new Point3D(0.188947,-0.231321,
zOff-1.729323
), new Point3D(0.173461,-0.111116,
zOff-1.702128
), new Point3D(0.263643,-0.086785,
zOff-1.733451
));
object[1678] = new Triangle(new Point3D(-0.188947,-0.231321,
zOff-1.729323
), new Point3D(-0.287211,-0.199503,
zOff-1.736133
), new Point3D(-0.263643,-0.086785,
zOff-1.733451
));
object[1679] = new Triangle(new Point3D(-0.263643,-0.086785,
zOff-1.733451
), new Point3D(-0.173461,-0.111116,
zOff-1.702128
), new Point3D(-0.188947,-0.231321,
zOff-1.729323
));
object[1680] = new Triangle(new Point3D(0.320620,0.037989,
zOff-1.724208
), new Point3D(0.358219,-0.058157,
zOff-1.729648
), new Point3D(0.263643,-0.086785,
zOff-1.733451
));
object[1681] = new Triangle(new Point3D(0.263643,-0.086785,
zOff-1.733451
), new Point3D(0.240902,0.027069,
zOff-1.729224
), new Point3D(0.320620,0.037989,
zOff-1.724208
));
object[1682] = new Triangle(new Point3D(-0.263643,-0.086785,
zOff-1.733451
), new Point3D(-0.358219,-0.058157,
zOff-1.729648
), new Point3D(-0.320620,0.037989,
zOff-1.724208
));
object[1683] = new Triangle(new Point3D(-0.320620,0.037989,
zOff-1.724208
), new Point3D(-0.240902,0.027069,
zOff-1.729224
), new Point3D(-0.263643,-0.086785,
zOff-1.733451
));
object[1684] = new Triangle(new Point3D(0.358219,-0.058157,
zOff-1.729648
), new Point3D(0.382548,-0.154702,
zOff-1.732423
), new Point3D(0.287211,-0.199503,
zOff-1.736133
));
object[1685] = new Triangle(new Point3D(0.287211,-0.199503,
zOff-1.736133
), new Point3D(0.263643,-0.086785,
zOff-1.733451
), new Point3D(0.358219,-0.058157,
zOff-1.729648
));
object[1686] = new Triangle(new Point3D(-0.287211,-0.199503,
zOff-1.736133
), new Point3D(-0.382548,-0.154702,
zOff-1.732423
), new Point3D(-0.358219,-0.058157,
zOff-1.729648
));
object[1687] = new Triangle(new Point3D(-0.358219,-0.058157,
zOff-1.729648
), new Point3D(-0.263643,-0.086785,
zOff-1.733451
), new Point3D(-0.287211,-0.199503,
zOff-1.736133
));
object[1688] = new Triangle(new Point3D(0.287568,-0.204207,
zOff-1.663722
), new Point3D(0.263416,-0.100400,
zOff-1.609237
), new Point3D(0.180219,-0.116674,
zOff-1.608463
));
object[1689] = new Triangle(new Point3D(0.180219,-0.116674,
zOff-1.608463
), new Point3D(0.190547,-0.234180,
zOff-1.664951
), new Point3D(0.287568,-0.204207,
zOff-1.663722
));
object[1690] = new Triangle(new Point3D(-0.180219,-0.116674,
zOff-1.608463
), new Point3D(-0.263416,-0.100400,
zOff-1.609237
), new Point3D(-0.287568,-0.204207,
zOff-1.663722
));
object[1691] = new Triangle(new Point3D(-0.287568,-0.204207,
zOff-1.663722
), new Point3D(-0.190547,-0.234180,
zOff-1.664951
), new Point3D(-0.180219,-0.116674,
zOff-1.608463
));
object[1692] = new Triangle(new Point3D(0.263416,-0.100400,
zOff-1.609237
), new Point3D(0.243545,-0.011042,
zOff-1.556955
), new Point3D(0.170650,0.001463,
zOff-1.567566
));
object[1693] = new Triangle(new Point3D(0.170650,0.001463,
zOff-1.567566
), new Point3D(0.180219,-0.116674,
zOff-1.608463
), new Point3D(0.263416,-0.100400,
zOff-1.609237
));
object[1694] = new Triangle(new Point3D(-0.170650,0.001463,
zOff-1.567566
), new Point3D(-0.243545,-0.011042,
zOff-1.556955
), new Point3D(-0.263416,-0.100400,
zOff-1.609237
));
object[1695] = new Triangle(new Point3D(-0.263416,-0.100400,
zOff-1.609237
), new Point3D(-0.180219,-0.116674,
zOff-1.608463
), new Point3D(-0.170650,0.001463,
zOff-1.567566
));
object[1696] = new Triangle(new Point3D(0.372059,-0.157733,
zOff-1.679263
), new Point3D(0.342325,-0.064960,
zOff-1.651780
), new Point3D(0.263416,-0.100400,
zOff-1.609237
));
object[1697] = new Triangle(new Point3D(0.263416,-0.100400,
zOff-1.609237
), new Point3D(0.287568,-0.204207,
zOff-1.663722
), new Point3D(0.372059,-0.157733,
zOff-1.679263
));
object[1698] = new Triangle(new Point3D(-0.263416,-0.100400,
zOff-1.609237
), new Point3D(-0.342325,-0.064960,
zOff-1.651780
), new Point3D(-0.372059,-0.157733,
zOff-1.679263
));
object[1699] = new Triangle(new Point3D(-0.372059,-0.157733,
zOff-1.679263
), new Point3D(-0.287568,-0.204207,
zOff-1.663722
), new Point3D(-0.263416,-0.100400,
zOff-1.609237
));
object[1700] = new Triangle(new Point3D(0.342325,-0.064960,
zOff-1.651780
), new Point3D(0.312091,0.027386,
zOff-1.589246
), new Point3D(0.243545,-0.011042,
zOff-1.556955
));
object[1701] = new Triangle(new Point3D(0.243545,-0.011042,
zOff-1.556955
), new Point3D(0.263416,-0.100400,
zOff-1.609237
), new Point3D(0.342325,-0.064960,
zOff-1.651780
));
object[1702] = new Triangle(new Point3D(-0.243545,-0.011042,
zOff-1.556955
), new Point3D(-0.312091,0.027386,
zOff-1.589246
), new Point3D(-0.342325,-0.064960,
zOff-1.651780
));
object[1703] = new Triangle(new Point3D(-0.342325,-0.064960,
zOff-1.651780
), new Point3D(-0.263416,-0.100400,
zOff-1.609237
), new Point3D(-0.243545,-0.011042,
zOff-1.556955
));
object[1704] = new Triangle(new Point3D(0.160888,0.103410,
zOff-1.565459
), new Point3D(0.170650,0.001463,
zOff-1.567566
), new Point3D(0.203042,0.057602,
zOff-1.473153
));
object[1705] = new Triangle(new Point3D(0.203042,0.057602,
zOff-1.473153
), new Point3D(0.175862,0.104249,
zOff-1.474747
), new Point3D(0.160888,0.103410,
zOff-1.565459
));
object[1706] = new Triangle(new Point3D(-0.203042,0.057602,
zOff-1.473153
), new Point3D(-0.170650,0.001463,
zOff-1.567566
), new Point3D(-0.160888,0.103410,
zOff-1.565459
));
object[1707] = new Triangle(new Point3D(-0.160888,0.103410,
zOff-1.565459
), new Point3D(-0.175862,0.104249,
zOff-1.474747
), new Point3D(-0.203042,0.057602,
zOff-1.473153
));
object[1708] = new Triangle(new Point3D(0.170650,0.001463,
zOff-1.567566
), new Point3D(0.243545,-0.011042,
zOff-1.556955
), new Point3D(0.235635,0.040773,
zOff-1.471271
));
object[1709] = new Triangle(new Point3D(0.235635,0.040773,
zOff-1.471271
), new Point3D(0.203042,0.057602,
zOff-1.473153
), new Point3D(0.170650,0.001463,
zOff-1.567566
));
object[1710] = new Triangle(new Point3D(-0.235635,0.040773,
zOff-1.471271
), new Point3D(-0.243545,-0.011042,
zOff-1.556955
), new Point3D(-0.170650,0.001463,
zOff-1.567566
));
object[1711] = new Triangle(new Point3D(-0.170650,0.001463,
zOff-1.567566
), new Point3D(-0.203042,0.057602,
zOff-1.473153
), new Point3D(-0.235635,0.040773,
zOff-1.471271
));
object[1712] = new Triangle(new Point3D(0.243545,-0.011042,
zOff-1.556955
), new Point3D(0.312091,0.027386,
zOff-1.589246
), new Point3D(0.262884,0.065525,
zOff-1.471958
));
object[1713] = new Triangle(new Point3D(0.262884,0.065525,
zOff-1.471958
), new Point3D(0.235635,0.040773,
zOff-1.471271
), new Point3D(0.243545,-0.011042,
zOff-1.556955
));
object[1714] = new Triangle(new Point3D(-0.262884,0.065525,
zOff-1.471958
), new Point3D(-0.312091,0.027386,
zOff-1.589246
), new Point3D(-0.243545,-0.011042,
zOff-1.556955
));
object[1715] = new Triangle(new Point3D(-0.243545,-0.011042,
zOff-1.556955
), new Point3D(-0.235635,0.040773,
zOff-1.471271
), new Point3D(-0.262884,0.065525,
zOff-1.471958
));
object[1716] = new Triangle(new Point3D(0.312091,0.027386,
zOff-1.589246
), new Point3D(0.296739,0.122368,
zOff-1.569023
), new Point3D(0.284251,0.100698,
zOff-1.474747
));
object[1717] = new Triangle(new Point3D(0.284251,0.100698,
zOff-1.474747
), new Point3D(0.262884,0.065525,
zOff-1.471958
), new Point3D(0.312091,0.027386,
zOff-1.589246
));
object[1718] = new Triangle(new Point3D(-0.284251,0.100698,
zOff-1.474747
), new Point3D(-0.296739,0.122368,
zOff-1.569023
), new Point3D(-0.312091,0.027386,
zOff-1.589246
));
object[1719] = new Triangle(new Point3D(-0.312091,0.027386,
zOff-1.589246
), new Point3D(-0.262884,0.065525,
zOff-1.471958
), new Point3D(-0.284251,0.100698,
zOff-1.474747
));
object[1720] = new Triangle(new Point3D(0.296739,0.122368,
zOff-1.569023
), new Point3D(0.255237,0.186272,
zOff-1.563626
), new Point3D(0.250765,0.161395,
zOff-1.476134
));
object[1721] = new Triangle(new Point3D(0.250765,0.161395,
zOff-1.476134
), new Point3D(0.284251,0.100698,
zOff-1.474747
), new Point3D(0.296739,0.122368,
zOff-1.569023
));
object[1722] = new Triangle(new Point3D(-0.250765,0.161395,
zOff-1.476134
), new Point3D(-0.255237,0.186272,
zOff-1.563626
), new Point3D(-0.296739,0.122368,
zOff-1.569023
));
object[1723] = new Triangle(new Point3D(-0.296739,0.122368,
zOff-1.569023
), new Point3D(-0.284251,0.100698,
zOff-1.474747
), new Point3D(-0.250765,0.161395,
zOff-1.476134
));
object[1724] = new Triangle(new Point3D(0.255237,0.186272,
zOff-1.563626
), new Point3D(0.210594,0.208889,
zOff-1.562502
), new Point3D(0.218278,0.173160,
zOff-1.472211
));
object[1725] = new Triangle(new Point3D(0.218278,0.173160,
zOff-1.472211
), new Point3D(0.250765,0.161395,
zOff-1.476134
), new Point3D(0.255237,0.186272,
zOff-1.563626
));
object[1726] = new Triangle(new Point3D(-0.218278,0.173160,
zOff-1.472211
), new Point3D(-0.210594,0.208889,
zOff-1.562502
), new Point3D(-0.255237,0.186272,
zOff-1.563626
));
object[1727] = new Triangle(new Point3D(-0.255237,0.186272,
zOff-1.563626
), new Point3D(-0.250765,0.161395,
zOff-1.476134
), new Point3D(-0.218278,0.173160,
zOff-1.472211
));
object[1728] = new Triangle(new Point3D(0.210594,0.208889,
zOff-1.562502
), new Point3D(0.182588,0.175873,
zOff-1.564591
), new Point3D(0.196205,0.148459,
zOff-1.473945
));
object[1729] = new Triangle(new Point3D(0.196205,0.148459,
zOff-1.473945
), new Point3D(0.218278,0.173160,
zOff-1.472211
), new Point3D(0.210594,0.208889,
zOff-1.562502
));
object[1730] = new Triangle(new Point3D(-0.196205,0.148459,
zOff-1.473945
), new Point3D(-0.182588,0.175873,
zOff-1.564591
), new Point3D(-0.210594,0.208889,
zOff-1.562502
));
object[1731] = new Triangle(new Point3D(-0.210594,0.208889,
zOff-1.562502
), new Point3D(-0.218278,0.173160,
zOff-1.472211
), new Point3D(-0.196205,0.148459,
zOff-1.473945
));
object[1732] = new Triangle(new Point3D(0.182588,0.175873,
zOff-1.564591
), new Point3D(0.160888,0.103410,
zOff-1.565459
), new Point3D(0.175862,0.104249,
zOff-1.474747
));
object[1733] = new Triangle(new Point3D(0.175862,0.104249,
zOff-1.474747
), new Point3D(0.196205,0.148459,
zOff-1.473945
), new Point3D(0.182588,0.175873,
zOff-1.564591
));
object[1734] = new Triangle(new Point3D(-0.175862,0.104249,
zOff-1.474747
), new Point3D(-0.160888,0.103410,
zOff-1.565459
), new Point3D(-0.182588,0.175873,
zOff-1.564591
));
object[1735] = new Triangle(new Point3D(-0.182588,0.175873,
zOff-1.564591
), new Point3D(-0.196205,0.148459,
zOff-1.473945
), new Point3D(-0.175862,0.104249,
zOff-1.474747
));
object[1736] = new Triangle(new Point3D(0.067509,-0.109729,
zOff+1.069081
), new Point3D(0.042918,-0.125519,
zOff+1.113995
), new Point3D(0.037307,-0.128477,
zOff+1.092936
));
object[1737] = new Triangle(new Point3D(0.037307,-0.128477,
zOff+1.092936
), new Point3D(0.053694,-0.116388,
zOff+1.070456
), new Point3D(0.067509,-0.109729,
zOff+1.069081
));
object[1738] = new Triangle(new Point3D(-0.037307,-0.128477,
zOff+1.092936
), new Point3D(-0.042918,-0.125519,
zOff+1.113995
), new Point3D(-0.067509,-0.109729,
zOff+1.069081
));
object[1739] = new Triangle(new Point3D(-0.067509,-0.109729,
zOff+1.069081
), new Point3D(-0.053694,-0.116388,
zOff+1.070456
), new Point3D(-0.037307,-0.128477,
zOff+1.092936
));
object[1740] = new Triangle(new Point3D(0.049617,-0.120982,
zOff+1.032579
), new Point3D(0.067509,-0.109729,
zOff+1.069081
), new Point3D(0.053694,-0.116388,
zOff+1.070456
));
object[1741] = new Triangle(new Point3D(0.053694,-0.116388,
zOff+1.070456
), new Point3D(0.037225,-0.124769,
zOff+1.050297
), new Point3D(0.049617,-0.120982,
zOff+1.032579
));
object[1742] = new Triangle(new Point3D(-0.053694,-0.116388,
zOff+1.070456
), new Point3D(-0.067509,-0.109729,
zOff+1.069081
), new Point3D(-0.049617,-0.120982,
zOff+1.032579
));
object[1743] = new Triangle(new Point3D(-0.049617,-0.120982,
zOff+1.032579
), new Point3D(-0.037225,-0.124769,
zOff+1.050297
), new Point3D(-0.053694,-0.116388,
zOff+1.070456
));
object[1744] = new Triangle(new Point3D(0.042918,-0.125519,
zOff+1.113995
), new Point3D(0.000000,-0.145135,
zOff+1.104640
), new Point3D(0.000000,-0.146561,
zOff+1.092984
));
object[1745] = new Triangle(new Point3D(0.000000,-0.146561,
zOff+1.092984
), new Point3D(0.037307,-0.128477,
zOff+1.092936
), new Point3D(0.042918,-0.125519,
zOff+1.113995
));
object[1746] = new Triangle(new Point3D(0.000000,-0.146561,
zOff+1.092984
), new Point3D(0.000000,-0.145135,
zOff+1.104640
), new Point3D(-0.042918,-0.125519,
zOff+1.113995
));
object[1747] = new Triangle(new Point3D(-0.042918,-0.125519,
zOff+1.113995
), new Point3D(-0.037307,-0.128477,
zOff+1.092936
), new Point3D(0.000000,-0.146561,
zOff+1.092984
));
object[1748] = new Triangle(new Point3D(0.000000,-0.141907,
zOff+1.025048
), new Point3D(0.049617,-0.120982,
zOff+1.032579
), new Point3D(0.037225,-0.124769,
zOff+1.050297
));
object[1749] = new Triangle(new Point3D(0.037225,-0.124769,
zOff+1.050297
), new Point3D(0.000000,-0.138500,
zOff+1.046085
), new Point3D(0.000000,-0.141907,
zOff+1.025048
));
object[1750] = new Triangle(new Point3D(-0.037225,-0.124769,
zOff+1.050297
), new Point3D(-0.049617,-0.120982,
zOff+1.032579
), new Point3D(0.000000,-0.141907,
zOff+1.025048
));
object[1751] = new Triangle(new Point3D(0.000000,-0.141907,
zOff+1.025048
), new Point3D(0.000000,-0.138500,
zOff+1.046085
), new Point3D(-0.037225,-0.124769,
zOff+1.050297
));
object[1752] = new Triangle(new Point3D(0.030304,-0.129320,
zOff+1.067873
), new Point3D(0.043476,-0.121665,
zOff+1.067970
), new Point3D(0.000000,-0.133208,
zOff+1.069523
));
object[1753] = new Triangle(new Point3D(0.000000,-0.133208,
zOff+1.069523
), new Point3D(0.000000,-0.144217,
zOff+1.066139
), new Point3D(0.030304,-0.129320,
zOff+1.067873
));
object[1754] = new Triangle(new Point3D(0.000000,-0.133208,
zOff+1.069523
), new Point3D(-0.043476,-0.121665,
zOff+1.067970
), new Point3D(-0.030304,-0.129320,
zOff+1.067873
));
object[1755] = new Triangle(new Point3D(-0.030304,-0.129320,
zOff+1.067873
), new Point3D(0.000000,-0.144217,
zOff+1.066139
), new Point3D(0.000000,-0.133208,
zOff+1.069523
));
object[1756] = new Triangle(new Point3D(0.043476,-0.121665,
zOff+1.067970
), new Point3D(0.029282,-0.132492,
zOff+1.070908
), new Point3D(0.000000,-0.143501,
zOff+1.069496
));
object[1757] = new Triangle(new Point3D(0.000000,-0.143501,
zOff+1.069496
), new Point3D(0.000000,-0.133208,
zOff+1.069523
), new Point3D(0.043476,-0.121665,
zOff+1.067970
));
object[1758] = new Triangle(new Point3D(0.000000,-0.143501,
zOff+1.069496
), new Point3D(-0.029282,-0.132492,
zOff+1.070908
), new Point3D(-0.043476,-0.121665,
zOff+1.067970
));
object[1759] = new Triangle(new Point3D(-0.043476,-0.121665,
zOff+1.067970
), new Point3D(0.000000,-0.133208,
zOff+1.069523
), new Point3D(0.000000,-0.143501,
zOff+1.069496
));
object[1760] = new Triangle(new Point3D(0.037225,-0.124769,
zOff+1.050297
), new Point3D(0.031618,-0.132145,
zOff+1.061552
), new Point3D(0.000000,-0.147330,
zOff+1.058953
));
object[1761] = new Triangle(new Point3D(0.000000,-0.147330,
zOff+1.058953
), new Point3D(0.000000,-0.138500,
zOff+1.046085
), new Point3D(0.037225,-0.124769,
zOff+1.050297
));
object[1762] = new Triangle(new Point3D(0.000000,-0.147330,
zOff+1.058953
), new Point3D(-0.031618,-0.132145,
zOff+1.061552
), new Point3D(-0.037225,-0.124769,
zOff+1.050297
));
object[1763] = new Triangle(new Point3D(-0.037225,-0.124769,
zOff+1.050297
), new Point3D(0.000000,-0.138500,
zOff+1.046085
), new Point3D(0.000000,-0.147330,
zOff+1.058953
));
object[1764] = new Triangle(new Point3D(0.031618,-0.132145,
zOff+1.061552
), new Point3D(0.030304,-0.129320,
zOff+1.067873
), new Point3D(0.000000,-0.144217,
zOff+1.066139
));
object[1765] = new Triangle(new Point3D(0.000000,-0.144217,
zOff+1.066139
), new Point3D(0.000000,-0.147330,
zOff+1.058953
), new Point3D(0.031618,-0.132145,
zOff+1.061552
));
object[1766] = new Triangle(new Point3D(0.000000,-0.144217,
zOff+1.066139
), new Point3D(-0.030304,-0.129320,
zOff+1.067873
), new Point3D(-0.031618,-0.132145,
zOff+1.061552
));
object[1767] = new Triangle(new Point3D(-0.031618,-0.132145,
zOff+1.061552
), new Point3D(0.000000,-0.147330,
zOff+1.058953
), new Point3D(0.000000,-0.144217,
zOff+1.066139
));
object[1768] = new Triangle(new Point3D(0.000000,-0.146561,
zOff+1.092984
), new Point3D(0.000000,-0.149439,
zOff+1.075875
), new Point3D(0.029593,-0.132309,
zOff+1.074592
));
object[1769] = new Triangle(new Point3D(0.029593,-0.132309,
zOff+1.074592
), new Point3D(0.037307,-0.128477,
zOff+1.092936
), new Point3D(0.000000,-0.146561,
zOff+1.092984
));
object[1770] = new Triangle(new Point3D(-0.029593,-0.132309,
zOff+1.074592
), new Point3D(0.000000,-0.149439,
zOff+1.075875
), new Point3D(0.000000,-0.146561,
zOff+1.092984
));
object[1771] = new Triangle(new Point3D(0.000000,-0.146561,
zOff+1.092984
), new Point3D(-0.037307,-0.128477,
zOff+1.092936
), new Point3D(-0.029593,-0.132309,
zOff+1.074592
));
object[1772] = new Triangle(new Point3D(0.000000,-0.149439,
zOff+1.075875
), new Point3D(0.000000,-0.143501,
zOff+1.069496
), new Point3D(0.029282,-0.132492,
zOff+1.070908
));
object[1773] = new Triangle(new Point3D(0.029282,-0.132492,
zOff+1.070908
), new Point3D(0.029593,-0.132309,
zOff+1.074592
), new Point3D(0.000000,-0.149439,
zOff+1.075875
));
object[1774] = new Triangle(new Point3D(-0.029282,-0.132492,
zOff+1.070908
), new Point3D(0.000000,-0.143501,
zOff+1.069496
), new Point3D(0.000000,-0.149439,
zOff+1.075875
));
object[1775] = new Triangle(new Point3D(0.000000,-0.149439,
zOff+1.075875
), new Point3D(-0.029593,-0.132309,
zOff+1.074592
), new Point3D(-0.029282,-0.132492,
zOff+1.070908
));
object[1776] = new Triangle(new Point3D(0.053694,-0.116388,
zOff+1.070456
), new Point3D(0.046541,-0.119992,
zOff+1.067666
), new Point3D(0.031618,-0.132145,
zOff+1.061552
));
object[1777] = new Triangle(new Point3D(0.031618,-0.132145,
zOff+1.061552
), new Point3D(0.037225,-0.124769,
zOff+1.050297
), new Point3D(0.053694,-0.116388,
zOff+1.070456
));
object[1778] = new Triangle(new Point3D(-0.031618,-0.132145,
zOff+1.061552
), new Point3D(-0.046541,-0.119992,
zOff+1.067666
), new Point3D(-0.053694,-0.116388,
zOff+1.070456
));
object[1779] = new Triangle(new Point3D(-0.053694,-0.116388,
zOff+1.070456
), new Point3D(-0.037225,-0.124769,
zOff+1.050297
), new Point3D(-0.031618,-0.132145,
zOff+1.061552
));
object[1780] = new Triangle(new Point3D(0.046541,-0.119992,
zOff+1.067666
), new Point3D(0.043476,-0.121665,
zOff+1.067970
), new Point3D(0.030304,-0.129320,
zOff+1.067873
));
object[1781] = new Triangle(new Point3D(0.030304,-0.129320,
zOff+1.067873
), new Point3D(0.031618,-0.132145,
zOff+1.061552
), new Point3D(0.046541,-0.119992,
zOff+1.067666
));
object[1782] = new Triangle(new Point3D(-0.030304,-0.129320,
zOff+1.067873
), new Point3D(-0.043476,-0.121665,
zOff+1.067970
), new Point3D(-0.046541,-0.119992,
zOff+1.067666
));
object[1783] = new Triangle(new Point3D(-0.046541,-0.119992,
zOff+1.067666
), new Point3D(-0.031618,-0.132145,
zOff+1.061552
), new Point3D(-0.030304,-0.129320,
zOff+1.067873
));
object[1784] = new Triangle(new Point3D(0.037307,-0.128477,
zOff+1.092936
), new Point3D(0.029593,-0.132309,
zOff+1.074592
), new Point3D(0.046541,-0.119992,
zOff+1.067666
));
object[1785] = new Triangle(new Point3D(0.046541,-0.119992,
zOff+1.067666
), new Point3D(0.053694,-0.116388,
zOff+1.070456
), new Point3D(0.037307,-0.128477,
zOff+1.092936
));
object[1786] = new Triangle(new Point3D(-0.046541,-0.119992,
zOff+1.067666
), new Point3D(-0.029593,-0.132309,
zOff+1.074592
), new Point3D(-0.037307,-0.128477,
zOff+1.092936
));
object[1787] = new Triangle(new Point3D(-0.037307,-0.128477,
zOff+1.092936
), new Point3D(-0.053694,-0.116388,
zOff+1.070456
), new Point3D(-0.046541,-0.119992,
zOff+1.067666
));
object[1788] = new Triangle(new Point3D(0.029593,-0.132309,
zOff+1.074592
), new Point3D(0.029282,-0.132492,
zOff+1.070908
), new Point3D(0.043476,-0.121665,
zOff+1.067970
));
object[1789] = new Triangle(new Point3D(0.043476,-0.121665,
zOff+1.067970
), new Point3D(0.046541,-0.119992,
zOff+1.067666
), new Point3D(0.029593,-0.132309,
zOff+1.074592
));
object[1790] = new Triangle(new Point3D(-0.043476,-0.121665,
zOff+1.067970
), new Point3D(-0.029282,-0.132492,
zOff+1.070908
), new Point3D(-0.029593,-0.132309,
zOff+1.074592
));
object[1791] = new Triangle(new Point3D(-0.029593,-0.132309,
zOff+1.074592
), new Point3D(-0.046541,-0.119992,
zOff+1.067666
), new Point3D(-0.043476,-0.121665,
zOff+1.067970
));
object[1792] = new Triangle(new Point3D(0.881752,-0.131638,
zOff-0.049375
), new Point3D(0.886999,-0.133272,
zOff-0.067116
), new Point3D(0.914784,-0.091375,
zOff-0.065062
));
object[1793] = new Triangle(new Point3D(0.914784,-0.091375,
zOff-0.065062
), new Point3D(0.909369,-0.089665,
zOff-0.046716
), new Point3D(0.881752,-0.131638,
zOff-0.049375
));
object[1794] = new Triangle(new Point3D(-0.914784,-0.091375,
zOff-0.065062
), new Point3D(-0.886999,-0.133272,
zOff-0.067117
), new Point3D(-0.881752,-0.131638,
zOff-0.049375
));
object[1795] = new Triangle(new Point3D(-0.881752,-0.131638,
zOff-0.049375
), new Point3D(-0.909369,-0.089665,
zOff-0.046716
), new Point3D(-0.914784,-0.091375,
zOff-0.065062
));
object[1796] = new Triangle(new Point3D(0.881752,-0.131638,
zOff-0.049375
), new Point3D(0.845605,-0.107251,
zOff-0.073673
), new Point3D(0.886999,-0.133272,
zOff-0.067116
));
object[1797] = new Triangle(new Point3D(-0.886999,-0.133272,
zOff-0.067117
), new Point3D(-0.845605,-0.107251,
zOff-0.073674
), new Point3D(-0.881752,-0.131638,
zOff-0.049375
));
object[1798] = new Triangle(new Point3D(0.909369,-0.089665,
zOff-0.046716
), new Point3D(0.914784,-0.091375,
zOff-0.065062
), new Point3D(0.872470,-0.069004,
zOff-0.073281
));
object[1799] = new Triangle(new Point3D(-0.872470,-0.069004,
zOff-0.073281
), new Point3D(-0.914784,-0.091375,
zOff-0.065062
), new Point3D(-0.909369,-0.089665,
zOff-0.046716
));
object[1800] = new Triangle(new Point3D(0.897444,-0.132578,
zOff-0.107879
), new Point3D(0.898943,-0.131671,
zOff-0.123282
), new Point3D(0.924657,-0.092679,
zOff-0.119837
));
object[1801] = new Triangle(new Point3D(0.924657,-0.092679,
zOff-0.119837
), new Point3D(0.923196,-0.093532,
zOff-0.104461
), new Point3D(0.897444,-0.132578,
zOff-0.107879
));
object[1802] = new Triangle(new Point3D(-0.924657,-0.092679,
zOff-0.119836
), new Point3D(-0.898943,-0.131671,
zOff-0.123282
), new Point3D(-0.897444,-0.132578,
zOff-0.107879
));
object[1803] = new Triangle(new Point3D(-0.897444,-0.132578,
zOff-0.107879
), new Point3D(-0.923196,-0.093532,
zOff-0.104461
), new Point3D(-0.924657,-0.092679,
zOff-0.119836
));
object[1804] = new Triangle(new Point3D(0.923196,-0.093532,
zOff-0.104461
), new Point3D(0.924657,-0.092679,
zOff-0.119837
), new Point3D(0.886061,-0.070038,
zOff-0.114427
));
object[1805] = new Triangle(new Point3D(-0.886061,-0.070038,
zOff-0.114427
), new Point3D(-0.924657,-0.092679,
zOff-0.119836
), new Point3D(-0.923196,-0.093532,
zOff-0.104461
));
object[1806] = new Triangle(new Point3D(0.897444,-0.132578,
zOff-0.107879
), new Point3D(0.859089,-0.108115,
zOff-0.116912
), new Point3D(0.898943,-0.131671,
zOff-0.123282
));
object[1807] = new Triangle(new Point3D(-0.898943,-0.131671,
zOff-0.123282
), new Point3D(-0.859089,-0.108115,
zOff-0.116911
), new Point3D(-0.897444,-0.132578,
zOff-0.107879
));
object[1808] = new Triangle(new Point3D(0.935451,-0.016360,
zOff-0.113621
), new Point3D(0.925565,-0.059840,
zOff-0.118803
), new Point3D(0.924344,-0.057588,
zOff-0.136249
));
object[1809] = new Triangle(new Point3D(0.924344,-0.057588,
zOff-0.136249
), new Point3D(0.934326,-0.014302,
zOff-0.130906
), new Point3D(0.935451,-0.016360,
zOff-0.113621
));
object[1810] = new Triangle(new Point3D(-0.924344,-0.057588,
zOff-0.136249
), new Point3D(-0.925565,-0.059840,
zOff-0.118803
), new Point3D(-0.935451,-0.016360,
zOff-0.113621
));
object[1811] = new Triangle(new Point3D(-0.935451,-0.016360,
zOff-0.113621
), new Point3D(-0.934326,-0.014302,
zOff-0.130906
), new Point3D(-0.924344,-0.057588,
zOff-0.136249
));
object[1812] = new Triangle(new Point3D(0.891699,-0.007282,
zOff-0.116976
), new Point3D(0.935451,-0.016360,
zOff-0.113621
), new Point3D(0.934326,-0.014302,
zOff-0.130906
));
object[1813] = new Triangle(new Point3D(-0.934326,-0.014302,
zOff-0.130906
), new Point3D(-0.935451,-0.016360,
zOff-0.113621
), new Point3D(-0.891699,-0.007282,
zOff-0.116976
));
object[1814] = new Triangle(new Point3D(0.880991,-0.048545,
zOff-0.121215
), new Point3D(0.924344,-0.057588,
zOff-0.136249
), new Point3D(0.925565,-0.059840,
zOff-0.118803
));
object[1815] = new Triangle(new Point3D(-0.925565,-0.059840,
zOff-0.118803
), new Point3D(-0.924344,-0.057588,
zOff-0.136249
), new Point3D(-0.880991,-0.048545,
zOff-0.121215
));
object[1816] = new Triangle(new Point3D(0.926274,-0.021134,
zOff-0.038342
), new Point3D(0.915533,-0.068232,
zOff-0.045916
), new Point3D(0.922778,-0.065860,
zOff-0.063571
));
object[1817] = new Triangle(new Point3D(0.922778,-0.065860,
zOff-0.063571
), new Point3D(0.931904,-0.019178,
zOff-0.055940
), new Point3D(0.926274,-0.021134,
zOff-0.038342
));
object[1818] = new Triangle(new Point3D(-0.922778,-0.065860,
zOff-0.063571
), new Point3D(-0.915533,-0.068232,
zOff-0.045915
), new Point3D(-0.926274,-0.021134,
zOff-0.038341
));
object[1819] = new Triangle(new Point3D(-0.926274,-0.021134,
zOff-0.038341
), new Point3D(-0.931904,-0.019178,
zOff-0.055940
), new Point3D(-0.922778,-0.065860,
zOff-0.063571
));
object[1820] = new Triangle(new Point3D(0.882672,-0.012151,
zOff-0.061499
), new Point3D(0.926274,-0.021134,
zOff-0.038342
), new Point3D(0.931904,-0.019178,
zOff-0.055940
));
object[1821] = new Triangle(new Point3D(-0.931904,-0.019178,
zOff-0.055940
), new Point3D(-0.926274,-0.021134,
zOff-0.038341
), new Point3D(-0.882672,-0.012151,
zOff-0.061499
));
object[1822] = new Triangle(new Point3D(0.874218,-0.054604,
zOff-0.068224
), new Point3D(0.922778,-0.065860,
zOff-0.063571
), new Point3D(0.915533,-0.068232,
zOff-0.045916
));
object[1823] = new Triangle(new Point3D(-0.915533,-0.068232,
zOff-0.045915
), new Point3D(-0.922778,-0.065860,
zOff-0.063571
), new Point3D(-0.874218,-0.054604,
zOff-0.068224
));
object[1824] = new Triangle(new Point3D(0.926253,-0.002689,
zOff-0.098107
), new Point3D(0.923182,0.000863,
zOff-0.117397
), new Point3D(0.930028,0.047256,
zOff-0.110419
));
object[1825] = new Triangle(new Point3D(0.930028,0.047256,
zOff-0.110419
), new Point3D(0.932375,0.045451,
zOff-0.090558
), new Point3D(0.926253,-0.002689,
zOff-0.098107
));
object[1826] = new Triangle(new Point3D(-0.930028,0.047256,
zOff-0.110419
), new Point3D(-0.923182,0.000863,
zOff-0.117397
), new Point3D(-0.926253,-0.002689,
zOff-0.098106
));
object[1827] = new Triangle(new Point3D(-0.926253,-0.002689,
zOff-0.098106
), new Point3D(-0.932375,0.045451,
zOff-0.090557
), new Point3D(-0.930028,0.047256,
zOff-0.110419
));
object[1828] = new Triangle(new Point3D(0.879924,0.001696,
zOff-0.100672
), new Point3D(0.923182,0.000863,
zOff-0.117397
), new Point3D(0.926253,-0.002689,
zOff-0.098107
));
object[1829] = new Triangle(new Point3D(-0.926253,-0.002689,
zOff-0.098106
), new Point3D(-0.923182,0.000863,
zOff-0.117397
), new Point3D(-0.879924,0.001696,
zOff-0.100672
));
object[1830] = new Triangle(new Point3D(0.887725,0.046715,
zOff-0.093090
), new Point3D(0.932375,0.045451,
zOff-0.090558
), new Point3D(0.930028,0.047256,
zOff-0.110419
));
object[1831] = new Triangle(new Point3D(-0.930028,0.047256,
zOff-0.110419
), new Point3D(-0.932375,0.045451,
zOff-0.090557
), new Point3D(-0.887725,0.046715,
zOff-0.093089
));
object[1832] = new Triangle(new Point3D(0.926456,-0.013339,
zOff-0.038230
), new Point3D(0.929043,-0.009459,
zOff-0.060514
), new Point3D(0.933458,0.042458,
zOff-0.051820
));
object[1833] = new Triangle(new Point3D(0.933458,0.042458,
zOff-0.051820
), new Point3D(0.930286,0.040229,
zOff-0.029159
), new Point3D(0.926456,-0.013339,
zOff-0.038230
));
object[1834] = new Triangle(new Point3D(-0.933458,0.042458,
zOff-0.051819
), new Point3D(-0.929043,-0.009459,
zOff-0.060513
), new Point3D(-0.926456,-0.013339,
zOff-0.038229
));
object[1835] = new Triangle(new Point3D(-0.926456,-0.013339,
zOff-0.038229
), new Point3D(-0.930286,0.040229,
zOff-0.029158
), new Point3D(-0.933458,0.042458,
zOff-0.051819
));
object[1836] = new Triangle(new Point3D(0.929043,-0.009459,
zOff-0.060514
), new Point3D(0.926253,-0.002689,
zOff-0.098107
), new Point3D(0.932375,0.045451,
zOff-0.090558
));
object[1837] = new Triangle(new Point3D(0.932375,0.045451,
zOff-0.090558
), new Point3D(0.933458,0.042458,
zOff-0.051820
), new Point3D(0.929043,-0.009459,
zOff-0.060514
));
object[1838] = new Triangle(new Point3D(-0.932375,0.045451,
zOff-0.090557
), new Point3D(-0.926253,-0.002689,
zOff-0.098106
), new Point3D(-0.929043,-0.009459,
zOff-0.060513
));
object[1839] = new Triangle(new Point3D(-0.929043,-0.009459,
zOff-0.060513
), new Point3D(-0.933458,0.042458,
zOff-0.051819
), new Point3D(-0.932375,0.045451,
zOff-0.090557
));
object[1840] = new Triangle(new Point3D(0.930286,0.040229,
zOff-0.029159
), new Point3D(0.933458,0.042458,
zOff-0.051820
), new Point3D(0.884938,0.042996,
zOff-0.047707
));
object[1841] = new Triangle(new Point3D(-0.884938,0.042996,
zOff-0.047706
), new Point3D(-0.933458,0.042458,
zOff-0.051819
), new Point3D(-0.930286,0.040229,
zOff-0.029158
));
object[1842] = new Triangle(new Point3D(0.933458,0.042458,
zOff-0.051820
), new Point3D(0.932375,0.045451,
zOff-0.090558
), new Point3D(0.887725,0.046715,
zOff-0.093090
));
object[1843] = new Triangle(new Point3D(0.887725,0.046715,
zOff-0.093090
), new Point3D(0.884938,0.042996,
zOff-0.047707
), new Point3D(0.933458,0.042458,
zOff-0.051820
));
object[1844] = new Triangle(new Point3D(-0.887725,0.046715,
zOff-0.093089
), new Point3D(-0.932375,0.045451,
zOff-0.090557
), new Point3D(-0.933458,0.042458,
zOff-0.051819
));
object[1845] = new Triangle(new Point3D(-0.933458,0.042458,
zOff-0.051819
), new Point3D(-0.884938,0.042996,
zOff-0.047706
), new Point3D(-0.887725,0.046715,
zOff-0.093089
));
object[1846] = new Triangle(new Point3D(0.880647,-0.005964,
zOff-0.055155
), new Point3D(0.929043,-0.009459,
zOff-0.060514
), new Point3D(0.926456,-0.013339,
zOff-0.038230
));
object[1847] = new Triangle(new Point3D(-0.926456,-0.013339,
zOff-0.038229
), new Point3D(-0.929043,-0.009459,
zOff-0.060513
), new Point3D(-0.880647,-0.005964,
zOff-0.055154
));
object[1848] = new Triangle(new Point3D(0.880647,-0.005964,
zOff-0.055155
), new Point3D(0.879924,0.001696,
zOff-0.100672
), new Point3D(0.926253,-0.002689,
zOff-0.098107
));
object[1849] = new Triangle(new Point3D(0.926253,-0.002689,
zOff-0.098107
), new Point3D(0.929043,-0.009459,
zOff-0.060514
), new Point3D(0.880647,-0.005964,
zOff-0.055155
));
object[1850] = new Triangle(new Point3D(-0.926253,-0.002689,
zOff-0.098106
), new Point3D(-0.879924,0.001696,
zOff-0.100672
), new Point3D(-0.880647,-0.005964,
zOff-0.055154
));
object[1851] = new Triangle(new Point3D(-0.880647,-0.005964,
zOff-0.055154
), new Point3D(-0.929043,-0.009459,
zOff-0.060513
), new Point3D(-0.926253,-0.002689,
zOff-0.098106
));
object[1852] = new Triangle(new Point3D(0.884938,0.042996,
zOff-0.047707
), new Point3D(0.887725,0.046715,
zOff-0.093090
), new Point3D(0.879924,0.001696,
zOff-0.100672
));
object[1853] = new Triangle(new Point3D(0.879924,0.001696,
zOff-0.100672
), new Point3D(0.880647,-0.005964,
zOff-0.055155
), new Point3D(0.884938,0.042996,
zOff-0.047707
));
object[1854] = new Triangle(new Point3D(-0.879924,0.001696,
zOff-0.100672
), new Point3D(-0.887725,0.046715,
zOff-0.093089
), new Point3D(-0.884938,0.042996,
zOff-0.047706
));
object[1855] = new Triangle(new Point3D(-0.884938,0.042996,
zOff-0.047706
), new Point3D(-0.880647,-0.005964,
zOff-0.055154
), new Point3D(-0.879924,0.001696,
zOff-0.100672
));
object[1856] = new Triangle(new Point3D(0.859940,0.091969,
zOff-0.067420
), new Point3D(0.868451,0.088358,
zOff-0.030286
), new Point3D(0.904957,0.099634,
zOff-0.043982
));
object[1857] = new Triangle(new Point3D(0.904957,0.099634,
zOff-0.043982
), new Point3D(0.893539,0.102212,
zOff-0.080384
), new Point3D(0.859940,0.091969,
zOff-0.067420
));
object[1858] = new Triangle(new Point3D(-0.904957,0.099634,
zOff-0.043982
), new Point3D(-0.868451,0.088358,
zOff-0.030286
), new Point3D(-0.859940,0.091969,
zOff-0.067420
));
object[1859] = new Triangle(new Point3D(-0.859940,0.091969,
zOff-0.067420
), new Point3D(-0.893539,0.102212,
zOff-0.080384
), new Point3D(-0.904957,0.099634,
zOff-0.043982
));
object[1860] = new Triangle(new Point3D(0.868451,0.088358,
zOff-0.030286
), new Point3D(0.907084,0.096095,
zOff-0.023918
), new Point3D(0.904957,0.099634,
zOff-0.043982
));
object[1861] = new Triangle(new Point3D(-0.904957,0.099634,
zOff-0.043982
), new Point3D(-0.907084,0.096095,
zOff-0.023918
), new Point3D(-0.868451,0.088358,
zOff-0.030286
));
object[1862] = new Triangle(new Point3D(0.875267,0.048049,
zOff-0.038496
), new Point3D(0.911906,0.057202,
zOff-0.053200
), new Point3D(0.915765,0.053483,
zOff-0.033598
));
object[1863] = new Triangle(new Point3D(-0.915765,0.053483,
zOff-0.033598
), new Point3D(-0.911906,0.057202,
zOff-0.053200
), new Point3D(-0.875267,0.048049,
zOff-0.038496
));
object[1864] = new Triangle(new Point3D(0.875267,0.048049,
zOff-0.038496
), new Point3D(0.863064,0.053949,
zOff-0.074769
), new Point3D(0.898147,0.062605,
zOff-0.087743
));
object[1865] = new Triangle(new Point3D(0.898147,0.062605,
zOff-0.087743
), new Point3D(0.911906,0.057202,
zOff-0.053200
), new Point3D(0.875267,0.048049,
zOff-0.038496
));
object[1866] = new Triangle(new Point3D(-0.898147,0.062605,
zOff-0.087743
), new Point3D(-0.863064,0.053949,
zOff-0.074769
), new Point3D(-0.875267,0.048049,
zOff-0.038496
));
object[1867] = new Triangle(new Point3D(-0.875267,0.048049,
zOff-0.038496
), new Point3D(-0.911906,0.057202,
zOff-0.053200
), new Point3D(-0.898147,0.062605,
zOff-0.087743
));
object[1868] = new Triangle(new Point3D(0.868451,0.088358,
zOff-0.030286
), new Point3D(0.859940,0.091969,
zOff-0.067420
), new Point3D(0.863064,0.053949,
zOff-0.074769
));
object[1869] = new Triangle(new Point3D(0.863064,0.053949,
zOff-0.074769
), new Point3D(0.875267,0.048049,
zOff-0.038496
), new Point3D(0.868451,0.088358,
zOff-0.030286
));
object[1870] = new Triangle(new Point3D(-0.863064,0.053949,
zOff-0.074769
), new Point3D(-0.859940,0.091969,
zOff-0.067420
), new Point3D(-0.868451,0.088358,
zOff-0.030286
));
object[1871] = new Triangle(new Point3D(-0.868451,0.088358,
zOff-0.030286
), new Point3D(-0.875267,0.048049,
zOff-0.038496
), new Point3D(-0.863064,0.053949,
zOff-0.074769
));
object[1872] = new Triangle(new Point3D(0.915765,0.053483,
zOff-0.033598
), new Point3D(0.911906,0.057202,
zOff-0.053200
), new Point3D(0.904957,0.099634,
zOff-0.043982
));
object[1873] = new Triangle(new Point3D(0.904957,0.099634,
zOff-0.043982
), new Point3D(0.907084,0.096095,
zOff-0.023918
), new Point3D(0.915765,0.053483,
zOff-0.033598
));
object[1874] = new Triangle(new Point3D(-0.904957,0.099634,
zOff-0.043982
), new Point3D(-0.911906,0.057202,
zOff-0.053200
), new Point3D(-0.915765,0.053483,
zOff-0.033598
));
object[1875] = new Triangle(new Point3D(-0.915765,0.053483,
zOff-0.033598
), new Point3D(-0.907084,0.096095,
zOff-0.023918
), new Point3D(-0.904957,0.099634,
zOff-0.043982
));
object[1876] = new Triangle(new Point3D(0.911906,0.057202,
zOff-0.053200
), new Point3D(0.898147,0.062605,
zOff-0.087743
), new Point3D(0.893539,0.102212,
zOff-0.080384
));
object[1877] = new Triangle(new Point3D(0.893539,0.102212,
zOff-0.080384
), new Point3D(0.904957,0.099634,
zOff-0.043982
), new Point3D(0.911906,0.057202,
zOff-0.053200
));
object[1878] = new Triangle(new Point3D(-0.893539,0.102212,
zOff-0.080384
), new Point3D(-0.898147,0.062605,
zOff-0.087743
), new Point3D(-0.911906,0.057202,
zOff-0.053200
));
object[1879] = new Triangle(new Point3D(-0.911906,0.057202,
zOff-0.053200
), new Point3D(-0.904957,0.099634,
zOff-0.043982
), new Point3D(-0.893539,0.102212,
zOff-0.080384
));
object[1880] = new Triangle(new Point3D(0.838396,0.093932,
zOff-0.112323
), new Point3D(0.859940,0.091969,
zOff-0.067420
), new Point3D(0.885789,0.102654,
zOff-0.095838
));
object[1881] = new Triangle(new Point3D(0.885789,0.102654,
zOff-0.095838
), new Point3D(0.867865,0.103032,
zOff-0.126860
), new Point3D(0.838396,0.093932,
zOff-0.112323
));
object[1882] = new Triangle(new Point3D(-0.885789,0.102654,
zOff-0.095839
), new Point3D(-0.859940,0.091969,
zOff-0.067420
), new Point3D(-0.838396,0.093932,
zOff-0.112324
));
object[1883] = new Triangle(new Point3D(-0.838396,0.093932,
zOff-0.112324
), new Point3D(-0.867865,0.103032,
zOff-0.126861
), new Point3D(-0.885789,0.102654,
zOff-0.095839
));
object[1884] = new Triangle(new Point3D(0.859940,0.091969,
zOff-0.067420
), new Point3D(0.893539,0.102212,
zOff-0.080384
), new Point3D(0.885789,0.102654,
zOff-0.095838
));
object[1885] = new Triangle(new Point3D(-0.885789,0.102654,
zOff-0.095839
), new Point3D(-0.893539,0.102212,
zOff-0.080384
), new Point3D(-0.859940,0.091969,
zOff-0.067420
));
object[1886] = new Triangle(new Point3D(0.863064,0.053949,
zOff-0.074769
), new Point3D(0.889994,0.064123,
zOff-0.102510
), new Point3D(0.898147,0.062605,
zOff-0.087743
));
object[1887] = new Triangle(new Point3D(-0.898147,0.062605,
zOff-0.087743
), new Point3D(-0.889994,0.064123,
zOff-0.102511
), new Point3D(-0.863064,0.053949,
zOff-0.074769
));
object[1888] = new Triangle(new Point3D(0.863064,0.053949,
zOff-0.074769
), new Point3D(0.841689,0.058614,
zOff-0.117143
), new Point3D(0.872272,0.066362,
zOff-0.132447
));
object[1889] = new Triangle(new Point3D(0.872272,0.066362,
zOff-0.132447
), new Point3D(0.889994,0.064123,
zOff-0.102510
), new Point3D(0.863064,0.053949,
zOff-0.074769
));
object[1890] = new Triangle(new Point3D(-0.872272,0.066362,
zOff-0.132448
), new Point3D(-0.841689,0.058614,
zOff-0.117144
), new Point3D(-0.863064,0.053949,
zOff-0.074769
));
object[1891] = new Triangle(new Point3D(-0.863064,0.053949,
zOff-0.074769
), new Point3D(-0.889994,0.064123,
zOff-0.102511
), new Point3D(-0.872272,0.066362,
zOff-0.132448
));
object[1892] = new Triangle(new Point3D(0.859940,0.091969,
zOff-0.067420
), new Point3D(0.838396,0.093932,
zOff-0.112323
), new Point3D(0.841689,0.058614,
zOff-0.117143
));
object[1893] = new Triangle(new Point3D(0.841689,0.058614,
zOff-0.117143
), new Point3D(0.863064,0.053949,
zOff-0.074769
), new Point3D(0.859940,0.091969,
zOff-0.067420
));
object[1894] = new Triangle(new Point3D(-0.841689,0.058614,
zOff-0.117144
), new Point3D(-0.838396,0.093932,
zOff-0.112324
), new Point3D(-0.859940,0.091969,
zOff-0.067420
));
object[1895] = new Triangle(new Point3D(-0.859940,0.091969,
zOff-0.067420
), new Point3D(-0.863064,0.053949,
zOff-0.074769
), new Point3D(-0.841689,0.058614,
zOff-0.117144
));
object[1896] = new Triangle(new Point3D(0.898147,0.062605,
zOff-0.087743
), new Point3D(0.889994,0.064123,
zOff-0.102510
), new Point3D(0.885789,0.102654,
zOff-0.095838
));
object[1897] = new Triangle(new Point3D(0.885789,0.102654,
zOff-0.095838
), new Point3D(0.893539,0.102212,
zOff-0.080384
), new Point3D(0.898147,0.062605,
zOff-0.087743
));
object[1898] = new Triangle(new Point3D(-0.885789,0.102654,
zOff-0.095839
), new Point3D(-0.889994,0.064123,
zOff-0.102511
), new Point3D(-0.898147,0.062605,
zOff-0.087743
));
object[1899] = new Triangle(new Point3D(-0.898147,0.062605,
zOff-0.087743
), new Point3D(-0.893539,0.102212,
zOff-0.080384
), new Point3D(-0.885789,0.102654,
zOff-0.095839
));
object[1900] = new Triangle(new Point3D(0.889994,0.064123,
zOff-0.102510
), new Point3D(0.872272,0.066362,
zOff-0.132447
), new Point3D(0.867865,0.103032,
zOff-0.126860
));
object[1901] = new Triangle(new Point3D(0.867865,0.103032,
zOff-0.126860
), new Point3D(0.885789,0.102654,
zOff-0.095838
), new Point3D(0.889994,0.064123,
zOff-0.102510
));
object[1902] = new Triangle(new Point3D(-0.867865,0.103032,
zOff-0.126861
), new Point3D(-0.872272,0.066362,
zOff-0.132448
), new Point3D(-0.889994,0.064123,
zOff-0.102511
));
object[1903] = new Triangle(new Point3D(-0.889994,0.064123,
zOff-0.102511
), new Point3D(-0.885789,0.102654,
zOff-0.095839
), new Point3D(-0.867865,0.103032,
zOff-0.126861
));
object[1904] = new Triangle(new Point3D(0.655824,0.084579,
zOff+0.468911
), new Point3D(0.718044,0.056100,
zOff+0.362761
), new Point3D(0.696709,0.126239,
zOff+0.336341
));
object[1905] = new Triangle(new Point3D(0.696709,0.126239,
zOff+0.336341
), new Point3D(0.632646,0.171060,
zOff+0.436373
), new Point3D(0.655824,0.084579,
zOff+0.468911
));
object[1906] = new Triangle(new Point3D(0.718044,0.056100,
zOff+0.362761
), new Point3D(0.768432,0.028868,
zOff+0.245831
), new Point3D(0.752818,0.069912,
zOff+0.230331
));
object[1907] = new Triangle(new Point3D(0.752818,0.069912,
zOff+0.230331
), new Point3D(0.696709,0.126239,
zOff+0.336341
), new Point3D(0.718044,0.056100,
zOff+0.362761
));
object[1908] = new Triangle(new Point3D(0.632646,0.171060,
zOff+0.436373
), new Point3D(0.696709,0.126239,
zOff+0.336341
), new Point3D(0.644401,0.145406,
zOff+0.294285
));
object[1909] = new Triangle(new Point3D(0.644401,0.145406,
zOff+0.294285
), new Point3D(0.576704,0.185186,
zOff+0.393133
), new Point3D(0.632646,0.171060,
zOff+0.436373
));
object[1910] = new Triangle(new Point3D(0.696709,0.126239,
zOff+0.336341
), new Point3D(0.752818,0.069912,
zOff+0.230331
), new Point3D(0.713656,0.090635,
zOff+0.197107
));
object[1911] = new Triangle(new Point3D(0.713656,0.090635,
zOff+0.197107
), new Point3D(0.644401,0.145406,
zOff+0.294285
), new Point3D(0.696709,0.126239,
zOff+0.336341
));
object[1912] = new Triangle(new Point3D(0.645634,0.016372,
zOff+0.436656
), new Point3D(0.707660,-0.005060,
zOff+0.347741
), new Point3D(0.718044,0.056100,
zOff+0.362761
));
object[1913] = new Triangle(new Point3D(0.718044,0.056100,
zOff+0.362761
), new Point3D(0.655824,0.084579,
zOff+0.468911
), new Point3D(0.645634,0.016372,
zOff+0.436656
));
object[1914] = new Triangle(new Point3D(0.707660,-0.005060,
zOff+0.347741
), new Point3D(0.759741,-0.014125,
zOff+0.250775
), new Point3D(0.768432,0.028868,
zOff+0.245831
));
object[1915] = new Triangle(new Point3D(0.768432,0.028868,
zOff+0.245831
), new Point3D(0.718044,0.056100,
zOff+0.362761
), new Point3D(0.707660,-0.005060,
zOff+0.347741
));
object[1916] = new Triangle(new Point3D(0.600061,0.004501,
zOff+0.376837
), new Point3D(0.654516,-0.020633,
zOff+0.300780
), new Point3D(0.707660,-0.005060,
zOff+0.347741
));
object[1917] = new Triangle(new Point3D(0.707660,-0.005060,
zOff+0.347741
), new Point3D(0.645634,0.016372,
zOff+0.436656
), new Point3D(0.600061,0.004501,
zOff+0.376837
));
object[1918] = new Triangle(new Point3D(0.654516,-0.020633,
zOff+0.300780
), new Point3D(0.708690,-0.030568,
zOff+0.225212
), new Point3D(0.759741,-0.014125,
zOff+0.250775
));
object[1919] = new Triangle(new Point3D(0.759741,-0.014125,
zOff+0.250775
), new Point3D(0.707660,-0.005060,
zOff+0.347741
), new Point3D(0.654516,-0.020633,
zOff+0.300780
));
object[1920] = new Triangle(new Point3D(0.576704,0.185186,
zOff+0.393133
), new Point3D(0.644401,0.145406,
zOff+0.294285
), new Point3D(0.596726,0.125735,
zOff+0.264648
));
object[1921] = new Triangle(new Point3D(0.596726,0.125735,
zOff+0.264648
), new Point3D(0.527865,0.155713,
zOff+0.359143
), new Point3D(0.576704,0.185186,
zOff+0.393133
));
object[1922] = new Triangle(new Point3D(0.644401,0.145406,
zOff+0.294285
), new Point3D(0.713656,0.090635,
zOff+0.197107
), new Point3D(0.675813,0.084344,
zOff+0.177210
));
object[1923] = new Triangle(new Point3D(0.675813,0.084344,
zOff+0.177210
), new Point3D(0.596726,0.125735,
zOff+0.264648
), new Point3D(0.644401,0.145406,
zOff+0.294285
));
object[1924] = new Triangle(new Point3D(0.531700,0.099899,
zOff+0.335270
), new Point3D(0.593230,0.069153,
zOff+0.254871
), new Point3D(0.612443,0.006741,
zOff+0.266298
));
object[1925] = new Triangle(new Point3D(0.612443,0.006741,
zOff+0.266298
), new Point3D(0.555445,0.033435,
zOff+0.338206
), new Point3D(0.531700,0.099899,
zOff+0.335270
));
object[1926] = new Triangle(new Point3D(0.593230,0.069153,
zOff+0.254871
), new Point3D(0.665620,0.037281,
zOff+0.183307
), new Point3D(0.676809,-0.009731,
zOff+0.201148
));
object[1927] = new Triangle(new Point3D(0.676809,-0.009731,
zOff+0.201148
), new Point3D(0.612443,0.006741,
zOff+0.266298
), new Point3D(0.593230,0.069153,
zOff+0.254871
));
object[1928] = new Triangle(new Point3D(0.555445,0.033435,
zOff+0.338206
), new Point3D(0.612443,0.006741,
zOff+0.266298
), new Point3D(0.654516,-0.020633,
zOff+0.300780
));
object[1929] = new Triangle(new Point3D(0.654516,-0.020633,
zOff+0.300780
), new Point3D(0.600061,0.004501,
zOff+0.376837
), new Point3D(0.555445,0.033435,
zOff+0.338206
));
object[1930] = new Triangle(new Point3D(0.612443,0.006741,
zOff+0.266298
), new Point3D(0.676809,-0.009731,
zOff+0.201148
), new Point3D(0.708690,-0.030568,
zOff+0.225212
));
object[1931] = new Triangle(new Point3D(0.708690,-0.030568,
zOff+0.225212
), new Point3D(0.654516,-0.020633,
zOff+0.300780
), new Point3D(0.612443,0.006741,
zOff+0.266298
));
object[1932] = new Triangle(new Point3D(0.527865,0.155713,
zOff+0.359143
), new Point3D(0.596726,0.125735,
zOff+0.264648
), new Point3D(0.593230,0.069153,
zOff+0.254871
));
object[1933] = new Triangle(new Point3D(0.593230,0.069153,
zOff+0.254871
), new Point3D(0.531700,0.099899,
zOff+0.335270
), new Point3D(0.527865,0.155713,
zOff+0.359143
));
object[1934] = new Triangle(new Point3D(0.596726,0.125735,
zOff+0.264648
), new Point3D(0.675813,0.084344,
zOff+0.177210
), new Point3D(0.665620,0.037281,
zOff+0.183307
));
object[1935] = new Triangle(new Point3D(0.665620,0.037281,
zOff+0.183307
), new Point3D(0.593230,0.069153,
zOff+0.254871
), new Point3D(0.596726,0.125735,
zOff+0.264648
));
object[1936] = new Triangle(new Point3D(-0.768432,0.028868,
zOff+0.245830
), new Point3D(-0.718044,0.056100,
zOff+0.362761
), new Point3D(-0.696709,0.126239,
zOff+0.336341
));
object[1937] = new Triangle(new Point3D(-0.696709,0.126239,
zOff+0.336341
), new Point3D(-0.752818,0.069912,
zOff+0.230331
), new Point3D(-0.768432,0.028868,
zOff+0.245830
));
object[1938] = new Triangle(new Point3D(-0.718044,0.056100,
zOff+0.362761
), new Point3D(-0.655824,0.084579,
zOff+0.468910
), new Point3D(-0.632646,0.171060,
zOff+0.436372
));
object[1939] = new Triangle(new Point3D(-0.632646,0.171060,
zOff+0.436372
), new Point3D(-0.696709,0.126239,
zOff+0.336341
), new Point3D(-0.718044,0.056100,
zOff+0.362761
));
object[1940] = new Triangle(new Point3D(-0.752818,0.069912,
zOff+0.230331
), new Point3D(-0.696709,0.126239,
zOff+0.336341
), new Point3D(-0.644401,0.145406,
zOff+0.294284
));
object[1941] = new Triangle(new Point3D(-0.644401,0.145406,
zOff+0.294284
), new Point3D(-0.713656,0.090635,
zOff+0.197106
), new Point3D(-0.752818,0.069912,
zOff+0.230331
));
object[1942] = new Triangle(new Point3D(-0.696709,0.126239,
zOff+0.336341
), new Point3D(-0.632646,0.171060,
zOff+0.436372
), new Point3D(-0.576704,0.185186,
zOff+0.393132
));
object[1943] = new Triangle(new Point3D(-0.576704,0.185186,
zOff+0.393132
), new Point3D(-0.644401,0.145406,
zOff+0.294284
), new Point3D(-0.696709,0.126239,
zOff+0.336341
));
object[1944] = new Triangle(new Point3D(-0.759741,-0.014125,
zOff+0.250775
), new Point3D(-0.707660,-0.005060,
zOff+0.347741
), new Point3D(-0.718044,0.056100,
zOff+0.362761
));
object[1945] = new Triangle(new Point3D(-0.718044,0.056100,
zOff+0.362761
), new Point3D(-0.768432,0.028868,
zOff+0.245830
), new Point3D(-0.759741,-0.014125,
zOff+0.250775
));
object[1946] = new Triangle(new Point3D(-0.707660,-0.005060,
zOff+0.347741
), new Point3D(-0.645634,0.016372,
zOff+0.436656
), new Point3D(-0.655824,0.084579,
zOff+0.468910
));
object[1947] = new Triangle(new Point3D(-0.655824,0.084579,
zOff+0.468910
), new Point3D(-0.718044,0.056100,
zOff+0.362761
), new Point3D(-0.707660,-0.005060,
zOff+0.347741
));
object[1948] = new Triangle(new Point3D(-0.708690,-0.030568,
zOff+0.225212
), new Point3D(-0.654516,-0.020633,
zOff+0.300779
), new Point3D(-0.707660,-0.005060,
zOff+0.347741
));
object[1949] = new Triangle(new Point3D(-0.707660,-0.005060,
zOff+0.347741
), new Point3D(-0.759741,-0.014125,
zOff+0.250775
), new Point3D(-0.708690,-0.030568,
zOff+0.225212
));
object[1950] = new Triangle(new Point3D(-0.654516,-0.020633,
zOff+0.300779
), new Point3D(-0.600061,0.004501,
zOff+0.376836
), new Point3D(-0.645634,0.016372,
zOff+0.436656
));
object[1951] = new Triangle(new Point3D(-0.645634,0.016372,
zOff+0.436656
), new Point3D(-0.707660,-0.005060,
zOff+0.347741
), new Point3D(-0.654516,-0.020633,
zOff+0.300779
));
object[1952] = new Triangle(new Point3D(-0.713656,0.090635,
zOff+0.197106
), new Point3D(-0.644401,0.145406,
zOff+0.294284
), new Point3D(-0.596726,0.125735,
zOff+0.264647
));
object[1953] = new Triangle(new Point3D(-0.596726,0.125735,
zOff+0.264647
), new Point3D(-0.675813,0.084344,
zOff+0.177210
), new Point3D(-0.713656,0.090635,
zOff+0.197106
));
object[1954] = new Triangle(new Point3D(-0.644401,0.145406,
zOff+0.294284
), new Point3D(-0.576704,0.185186,
zOff+0.393132
), new Point3D(-0.527865,0.155713,
zOff+0.359142
));
object[1955] = new Triangle(new Point3D(-0.527865,0.155713,
zOff+0.359142
), new Point3D(-0.596726,0.125735,
zOff+0.264647
), new Point3D(-0.644401,0.145406,
zOff+0.294284
));
object[1956] = new Triangle(new Point3D(-0.665620,0.037281,
zOff+0.183306
), new Point3D(-0.593230,0.069153,
zOff+0.254870
), new Point3D(-0.612443,0.006741,
zOff+0.266297
));
object[1957] = new Triangle(new Point3D(-0.612443,0.006741,
zOff+0.266297
), new Point3D(-0.676809,-0.009731,
zOff+0.201147
), new Point3D(-0.665620,0.037281,
zOff+0.183306
));
object[1958] = new Triangle(new Point3D(-0.593230,0.069153,
zOff+0.254870
), new Point3D(-0.531700,0.099899,
zOff+0.335269
), new Point3D(-0.555445,0.033435,
zOff+0.338205
));
object[1959] = new Triangle(new Point3D(-0.555445,0.033435,
zOff+0.338205
), new Point3D(-0.612443,0.006741,
zOff+0.266297
), new Point3D(-0.593230,0.069153,
zOff+0.254870
));
object[1960] = new Triangle(new Point3D(-0.676809,-0.009731,
zOff+0.201147
), new Point3D(-0.612443,0.006741,
zOff+0.266297
), new Point3D(-0.654516,-0.020633,
zOff+0.300779
));
object[1961] = new Triangle(new Point3D(-0.654516,-0.020633,
zOff+0.300779
), new Point3D(-0.708690,-0.030568,
zOff+0.225212
), new Point3D(-0.676809,-0.009731,
zOff+0.201147
));
object[1962] = new Triangle(new Point3D(-0.612443,0.006741,
zOff+0.266297
), new Point3D(-0.555445,0.033435,
zOff+0.338205
), new Point3D(-0.600061,0.004501,
zOff+0.376836
));
object[1963] = new Triangle(new Point3D(-0.600061,0.004501,
zOff+0.376836
), new Point3D(-0.654516,-0.020633,
zOff+0.300779
), new Point3D(-0.612443,0.006741,
zOff+0.266297
));
object[1964] = new Triangle(new Point3D(-0.675813,0.084344,
zOff+0.177210
), new Point3D(-0.596726,0.125735,
zOff+0.264647
), new Point3D(-0.593230,0.069153,
zOff+0.254870
));
object[1965] = new Triangle(new Point3D(-0.593230,0.069153,
zOff+0.254870
), new Point3D(-0.665620,0.037281,
zOff+0.183306
), new Point3D(-0.675813,0.084344,
zOff+0.177210
));
object[1966] = new Triangle(new Point3D(-0.596726,0.125735,
zOff+0.264647
), new Point3D(-0.527865,0.155713,
zOff+0.359142
), new Point3D(-0.531700,0.099899,
zOff+0.335269
));
object[1967] = new Triangle(new Point3D(-0.531700,0.099899,
zOff+0.335269
), new Point3D(-0.593230,0.069153,
zOff+0.254870
), new Point3D(-0.596726,0.125735,
zOff+0.264647
));
return object; });
