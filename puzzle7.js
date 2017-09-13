function heis(){
  down()
  while(getColor()!="red") {
  	down()
	}
	if (getColor()=="red"){
    right()
    right()
	}
}

function duo(){
  up()
  while(getColor()!="red") {
  	up()
	}
	if (getColor()=="red"){
    right()
    right()
	}
}

heis()
duo()
heis()
duo()
heis()
