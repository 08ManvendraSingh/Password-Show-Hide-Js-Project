function show(){
	var output=document.querySelector('.output');
	var i=document.querySelector(".ii");
	console.log(output);
	if(output.type === "password"){
		output.type = "text";
		i.classList.add("hide");
	}
	else{
		output.type = "password";
		i.classList.remove("hide");
	}
}