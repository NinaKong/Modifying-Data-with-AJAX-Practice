
var httpRequest; 
if(window.XMLHttpRequest) {
	httpRequest = new XMLHttpRequest();
} else {
	httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
}

httpRequest.open('GET', 'data/data.txt');

httpRequest.onreadystatechange = function(){
	if((httpRequest.status == 200)&&(httpRequest.readyState==4)) {
	    var data = document.getElementById('readData');
	    data.innerHTML = httpRequest.responseText;

	    var tagData = document.getElementsByTagName('li');
	    for (var i = 0; i < tagData.length; i++) {
	        tagData[i].innerHTML = httpRequest.responseText;
	    }
	}
}
httpRequest.send();


