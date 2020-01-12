function Media(title,duration) {
 this.title=title;
 this.duration=duration;
 //boolean that indicates if the media is playing or not
 this.isPlaying=false; 
 //variable to store the opinion of the user about the media
 this.opinion=0;
 //the defined path to get medias :songs or videos
 this.path_media="../medias/";
 //the defined path to get thumbnails for medias 
 this.path_thumbnail="../assets/";
}

//set isPlaying to true
Media.prototype.play = function(){
	this.isPlaying=true;
};

//set isPlaying to false
Media.prototype.stop = function(){
    this.isPlaying=false;	
};

//set positive opinion about the palying media
Media.prototype.like = function(){
	if (this.opinion==1)this.opinion=0;
	else this.opinion=1;
	this.OpinionToHTML();	
};

//set negative opinion about the playing media
Media.prototype.dislike = function(){
	if (this.opinion==-1)this.opinion=0;
	else this.opinion=-1;
	this.OpinionToHTML();
}

//set the html of the buttons like and dislike depending on the opinion of the user
Media.prototype.OpinionToHTML=function(){
	let Blike=document.getElementById("like");
	let Bdislike=document.getElementById("dislike");
	if (this.opinion==-1){
		
		Bdislike.style.backgroundColor="#00BFFF"; 
		Blike.style.backgroundColor="white"; 
	}
	if (this.opinion==1){
		
		Blike.style.backgroundColor="#00BFFF"; 
		Bdislike.style.backgroundColor="white"; 
	}
	if (this.opinion==0){
		Bdislike.style.backgroundColor="#FFFFFF"; 
		Blike.style.backgroundColor="#FFFFFF"; 
	}
	
	}



