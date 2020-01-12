// The playlist object
function Playlist(){
 //list that will store song objects and movie objects	
 this.medias=[];
 //index that specify the index of the playing media in the list
 this.nowPlayingIndex=0; 
}

//push a new media in the list of the playlist
Playlist.prototype.add = function(media){
	this.medias.push(media);	
};

//get the media that its index is equal to nowPlayingIndex
Playlist.prototype.getMedia=function(){
	return this.medias[this.nowPlayingIndex];
}

//play the selected media
Playlist.prototype.play = function(){
	this.getMedia().play();	
};

//play the next media
Playlist.prototype.next = function(){
	this.stop();
	if ( this.nowPlayingIndex == this.medias.length -1){
	this.nowPlayingIndex=0; }
	else{
	this.nowPlayingIndex++;}
    this.play();
};

//play the previous media
Playlist.prototype.previous = function(){
	this.stop();
	if ( this.nowPlayingIndex ==0){
	this.nowPlayingIndex=this.medias.length -1; }
	else{
	this.nowPlayingIndex--;}
    this.play();
};

//stop the playing media
Playlist.prototype.stop = function(){
	this.medias[this.nowPlayingIndex].stop();
};

//manage the display of the elements of the playlist
Playlist.prototype.renderInElement = function(playlist,media){
   this.getMedia().OpinionToHTML();	
   playlist.innerHTML="";
   for (let i=0;i< this.medias.length;i++)
   {
	   playlist.innerHTML=playlist.innerHTML+this.medias[i].toHTML(i);
   }
   media.innerHTML=this.getMedia().toHTMLMedia(this.nowPlayingIndex);
   
   
};
 
//specify the type of the media : song or movie	
Playlist.prototype.type=function(){
	
	if ( this.medias[this.nowPlayingIndex] instanceof Song ) return 1;
	else return -1;
	
}
	