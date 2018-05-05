{ 
	print "object["NR-1"] = new Triangle(new Point3D("$1","$2","
	if ($3 >= 0)
		print "zOff+"$3
	else
		print "zOff"$3

	print "), new Point3D("$4","$5","
	if ($6 >= 0)
		print "zOff+"$6
	else
		print "zOff"$6

	print "), new Point3D("$7","$8","
	if ($9 >= 0)
		print "zOff+"$9
	else
		print "zOff"$9
	
	print "));" 
}