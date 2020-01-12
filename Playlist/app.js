//The main script

// function that displays the playlist
function show_Playlist()
{
//we create our songs and movies 	
let song1 = new Song('Girls like you','4:30','Maroon');
let song2 = new Song('Treat you better','4:16','Mendes');
let song3 = new Song('I Love you boy','4:29','Suzy');
let movie1 = new Movie('20-Seconds Animation','0:21','2013' );
let movie2 = new Movie('Attack on titans','1:35','2015');

//we create the playlist
let playlist = new Playlist();

//we add them to the playlist
playlist.add(song1);
playlist.add(song2);
playlist.add(song3);
playlist.add(movie1);
playlist.add(movie2)

//we display html elements of the playlist page
document.getElementById("container").style="display:flex";
document.getElementById("quizz").innerHTML="Want to play a Quizz ? Click here";
document.getElementById("quizz").href="../Quizz/index.html";

//we declare our object with keys:names of buttons and values:name of icons
let Dbuttons={'play':'fa fa-play','previous':'fa fa-backward','next':'fa fa-forward','stop':'fa fa-pause','like':'fa fa-thumbs-up','dislike':'fa fa-thumbs-down'};
let buttons =document.getElementById("buttons");
buttons.innerHTML="";
for (let [cle, valeur] of Object.entries(Dbuttons))
{
	buttons.innerHTML+='<button id="'+cle+'"><i class="'+valeur+'"></i></button>';
}


let htmlplaylist=document.getElementById("playlist");
let htmlMedia=document.getElementById("media");
//change the html of the playlist
playlist.renderInElement(htmlplaylist,htmlMedia);



let Bplay = document.getElementById("play");
// code to execute if clicked on play button
Bplay.onclick = function() {
  playlist.play();
  playlist.renderInElement(htmlplaylist,media);
  //test the type of the media to know which is the type of the element to call : video or audio
  if (playlist.type() == 1)
  {let x = document.getElementById("myAudio");x.play(); }
  else
  {let x = document.getElementById("myVideo");x.play(); } 	    
}

let Bnext = document.getElementById("next");
// code to execute if clicked on next button
Bnext.onclick = function() {
  playlist.next();
  playlist.renderInElement(htmlplaylist,media);
  if (playlist.type() == 1)
  {let x = document.getElementById("myAudio");x.play(); }
  else
  {let x = document.getElementById("myVideo");x.play(); } 
  
}

let BPrevious = document.getElementById("previous");
// code to execute if clicked on previous button
BPrevious.onclick = function() {
  playlist.previous();
  playlist.renderInElement(htmlplaylist,media);
  if (playlist.type() == 1)
  {let x = document.getElementById("myAudio");x.play(); }
  else
  {let x = document.getElementById("myVideo");x.play(); } 
  
}

let Bstop = document.getElementById("stop");
// code to execute if clicked on stop button
Bstop.onclick = function() { 
  if (playlist.getMedia().isPlaying)
  {playlist.stop();
  if (playlist.type() == 1)
  {let x = document.getElementById("myAudio");x.pause(); }
  else
  {let x = document.getElementById("myVideo");x.pause(); } 
  }
}

let Blike=document.getElementById("like");
// code to execute if clicked on like button
Blike.onclick = function(){
playlist.getMedia().like(); 
}

let Bdislike=document.getElementById("dislike");
// code to execute if clicked on dislike button
Bdislike.onclick=function(){
playlist.getMedia().dislike();
}


}  

