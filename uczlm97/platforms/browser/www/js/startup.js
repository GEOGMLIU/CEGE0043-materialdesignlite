function trackAndCircle()
{
	trackLocation();
	addPointLinePoly();
	//getEarthquakes();
	popupClickLocation();
}

function startup()
{
	document.addEventListener('DOMContentLoaded', function(){
		trackAndCircle();
	}, false);
}