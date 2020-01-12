function Song(title,duration,artist)
{
 Media.call(this,title,duration);
 this.artist=artist;
 
}

//The object Song will inherit all methods of Media.prototype
Song.prototype = Object.create(Media.prototype);

//the functions toHtml and toHtmlMedia specify the html to show if the media type is a song

Song.prototype.toHTML = function(indice){
	
	// if  isPlaying is set to true we add the element to the class current
	if (this.isPlaying)
	{
		let li='<li class="current"><img class="thumbnail" src="'+this.path_thumbnail+'music.png" />'+this.title+'</br> '+this.artist+  '</br>'+this.duration+'</li>';
		return li;	 
	}
    else
    {
		let li='<li><img class="thumbnail" src="'+this.path_thumbnail+'music.png" />'+this.title+'</br>'+this.artist+'</br>'+this.duration+'</li>';
	    return li;	 
	}	
};

Song.prototype.toHTMLMedia = function(indice){
	
	// if  isPlaying is set to true we add the audio tag and the defined path to the playing audio
	if (this.isPlaying){
		
		let html='<audio id="myAudio"  type="audio/mpeg" src="'+this.path_media+indice+'.mp3" controls></audio>';
		return html;
	}
	else
	{
		let html='<img src="'+this.path_thumbnail+'cover.png" />';
		return html;
	}
}

