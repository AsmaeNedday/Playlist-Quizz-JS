
This project presents a Playlist and a Quizz using Javascript .
I worked with the principles of inheritance and prototypes .
My project is divided into four folders :
  * __assets__ : includes all images i used in the project  
  * __medias__ : includes video and audio ressources
  * __Playlist__ : includes all scripts related to the playlist
  * __Quizz__ : includes all scripts related to the quizz

#titre Playlist:

it has four objects :

##titre Media 

the object Media has : 
  * __title__ : presents the title of the media : song or movie
  * __duration__ : the duration of the media
  * __isPlaying__ : if a media is playing or not , set to false by default 
  * __opinion__ : the opinion of the user about the media , set to 0 by default to express neutrality 
  * __path_media__ : we define the path to get our songs or videos
  * __path_thumbnail__ : we define the path to get thumbnails for videos
 
Functions :
  __Play__ : set isPlaying to True
  __Stop__ : set isPlaying to False
  __like__ : set opinion to 1 
  __dislike__ : set opinion to 0
  __OpinionToHTML__ : manage the ui functionnality of like and dilike buttons

##titre Movie

the object inherit prototypes and constructor from the object Media 
it has one more attribute called year  
it has two more funtions : toHtml and toHtmlMedia to manage the ui functionnality of the element in the playlist depending on his type 

##titre Song

the object inherit prototypes and constructor from the object Song
it has one more attribute called artist 
it has two more functions that manage the ui functionnality 

##titre Playlist
  

