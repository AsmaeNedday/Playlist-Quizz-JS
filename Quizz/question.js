// The question object
function Question(question,giving,answer){
	//the question text
	this.question=question;
	//the giving options or the giving song to guess its title
	this.giving=giving;
	//the answer to the question
	this.answer=answer;
}

//test if the response of the user is similar to the answer
Question.prototype.test_Answer=function(response){
	if (response.toUpperCase() == this.answer.toUpperCase()){
		return true;
	}
	else{
		return false;
	}
};

//display the question content in the page
Question.prototype.toHtmlQuestion=function(question){
	question.innerHTML=this.question;
	
};
