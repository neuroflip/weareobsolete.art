#!/usr/bin/env bash

echo "define([\"Util\", \"Triangle\", \"Point3D\"], function(Util, Triangle, Point3D) {" > ../js/$1.js
echo "var object = Util.createArray(11), cubeWidth = 50.0, zOff = Util.zOff;" >> ../js/$1.js

awk -f ./rawImport.awk $1.raw >> ../js/$1.js

echo "return object; });" >> ../js/$1.js
