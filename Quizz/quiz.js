// The quiz object
function Quiz(){
	//stores the list of questions
	this.questions=[];
	//indicates the score of the user
	this.score=0;
	//indicates the index of the current question 
	this.questionIndex=0;
}

//push question into the list
Quiz.prototype.addQuestion=function(question){
	this.questions.push(question);
};

//get the current question
Quiz.prototype.getQuestion=function(){
	return this.questions[this.questionIndex];
};

//get the next question 
Quiz.prototype.nextQuestion=function(answer){
	
	//test if the answer is correct to increment score
	if (this.questions[this.questionIndex].test_Answer(answer)){
		this.score++;
	}
	this.questionIndex++;
	
};

//return a boolean to indicates if we went through all the elements of the list
Quiz.prototype.finish=function(){
	if (this.questionIndex > this.questions.length-1){
	return true 
	}
	else{
		return false
	}
};

//show how many questions the user did
Quiz.prototype.showProgress=function(progress){
	number=this.questionIndex+1
	progress.innerHTML="Question "+number+" of "+this.questions.length;
};

//display the score
Quiz.prototype.showResult=function(quiz){
	
	quiz.innerHTML='<h2>Game Over</h2><h1>Your score is '+this.score+'/'+this.questions.length+'</h1>';
	quiz.innerHTML+='</br></br><a href="index.html">Want to try again ? Click here </a>'
}

//the logic of the quizz
Quiz.prototype.main=function(){
	
	if (this.finish()){
		let quiz=document.getElementById("quiz");
		this.showResult(quiz);
	}
	else{
		let q=document.getElementById("question");
		this.getQuestion().toHtmlQuestion(q);
		let opt=document.getElementById("give");
		this.getQuestion().toHtml(opt);
		let progress=document.getElementById("progress");
		this.showProgress(progress);
		}	
};

//randomize the elements of the list
Quiz.prototype.randomize=function(){
	
    for (var i = this.questions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.questions[i];
        this.questions[i] = this.questions[j];
        this.questions[j] = temp;
}	
    if (this.questions[0] instanceof Blind) {this.randomize();}
};