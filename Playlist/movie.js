function Movie(title,duration,year)
{
 Media.call(this,title,duration);
 this.year=year;
}

//The object Movie will inherit all methods of Media.prototype
Movie.prototype = Object.create(Media.prototype);

//the functions toHtml and toHtmlMedia specify the html to show if the media type is a movie
Movie.prototype.toHTML = function(indice){
	
	// if  isPlaying is set to true we add the class current to the element
	if (this.isPlaying)
	{  
		let li='<li class="current"><img class="thumbnail" src="'+this.path_thumbnail+indice+'.png" />'+this.title+'</br> '+this.year+'</br>'+this.duration+'</li>';
		return li;	 
	}
    else
    {
		let li='<li><img class="thumbnail" src="'+this.path_thumbnail+indice+'.png" />'+this.title+'</br>'+this.year+'</br>'+this.duration+'</li>';
	    return li;	 
	}
   
};

Movie.prototype.toHTMLMedia = function(indice){
	
	// if  isPlaying is set to true we add the video tag and the defined path to the playing video
	if (this.isPlaying){
		
		let html='<video id="myVideo"   src="'+this.path_media+indice+'.mp4" controls ></video>';
		return html;
	}
	else
	{
		let html='<img src="'+this.path_thumbnail+'cover.png" /></a>';
		return html;
	}
};