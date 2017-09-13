right();
if(getColor()=="red") {
  up()
  up()
	up()
  var direction = 0
} else {
  down();
	down();
	down();
  var direction = 1
}

if (getColor()=="red"){
  left();
} else {
	right();
}

if (direction == 0) {
	up()
}

if (direction == 1) {
  down()
}
