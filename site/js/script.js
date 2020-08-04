var names=["saurav","rahul","mohan","john","Johan"];

for(var i=0;i<names.length;i++){
	
	var name=names[i];
	var firstletter = name.charAt(0);
	if (firstletter === 'j'|| firstletter === 'J') {
		console.log("Goodbye "+ names[i]);
	}
	else{
		console.log("Hello "+names[i]);
	}

}
