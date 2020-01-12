//Blind Question object

function Blind(question,giving,answer){
	Question.call(this,question,giving,answer);
}

Blind.prototype=Object.create(Question.prototype);

//add the html elements for the blind question
Blind.prototype.toHtml=function(options){
	
	//the html contains the audio to play , an input text  to enter the answer and a button to submit the answer
	options.innerHTML="";
    options.innerHTML+='<iframe src="'+this.giving+'" allow="autoplay" style="display:none"></iframe>';
    options.innerHTML+='<input type="text" id="myText" placeholder="Enter your answer..."/>';
	options.innerHTML+='</br><button onclick="myFunction(document.getElementById(\'myText\').value.toUpperCase())">Submit</button>';	
    	
	
}