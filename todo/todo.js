function newElement(){
	var enterValue = document.getElementById("enter").value;
	var a = document.createTextNode(enterValue);
	var div = document.createElement("div");
	var	out = document.getElementById("out");
	var button = document.createElement("input");
		button.type = "button";
		button.value = "Удалить";
	var span = document.createElement("span");

	if(enterValue !=""){
		document.createTextNode(enterValue);
	}else{
		alert("Поле не может быть пустым!!!");
		input.remove();
	}
	
	var strike= false;
span.onclick = function(){
		if(strike){
			span.style.textDecoration = "";
		}else{
			span.style.textDecoration = "line-through";
		}
	
		strike=!strike;	
	}
button.onclick = function(){
		div.remove();
	}
	document.getElementById("enter").value="";
	
	span.appendChild(a);
	div.appendChild(span);
	div.appendChild(button);
	out.appendChild(div);	
}