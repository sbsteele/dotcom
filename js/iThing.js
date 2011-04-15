function isiThing(){
	return (
		(navigator.platform.indexOf("iPhone") != -1) ||
		(navigator.platform.indexOf("iPod") != -1) ||
		(navigator.platform.indexOf("iPad") != -1)
	);
}
if(isiThing()){
	document.writeln('<link rel="stylesheet" href="css/iThing.css">');
}