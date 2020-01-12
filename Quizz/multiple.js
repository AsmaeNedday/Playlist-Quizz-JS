//Multiple Question object
function Multiple(question,giving,answer){
	Question.call(this,question,giving,answer);
}

Multiple.prototype=Object.create(Question.prototype);

//add the html to the multiple question
Multiple.prototype.toHtml=function(options){
	
	//the html contains button to each giving option
	options.innerHTML="";
	for (let i=0;i<this.giving.length;i++){
		options.innerHTML=options.innerHTML +'<button onclick="myFunction(this.textContent)">'+this.giving[i]+'</button>';	
	}
}




