# Playslist-Quizz-JS

This project presents a Playlist and a Quizz using Javascript  . 
I worked with the principles of inheritance and prototypes .  
My project is divided into four folders :  
  * __assets__ : includes all images i used in the project  
  * __medias__ : includes video and audio ressources
  * __Playlist__ : includes all scripts related to the playlist
  * __Quizz__ : includes all scripts related to the quizz
  * __Inscription-JS__ : includes scripts related to registration using javascript only
  * __Inscription-Node__ :includes scripts related to registration using ajax and Node.js

# Playlist

it has four objects :

## Media 

the object Media has : 
  * __title__ : presents the title of the media 
  * __duration__ : the duration of the media
  * __isPlaying__ : indicates if a media is playing or not , set to false by default 
  * __opinion__ : indicates the opinion of the user about the media , set to 0 by default to express neutrality 
  * __path_media__ : defines the path to get our songs or videos
  * __path_thumbnail__ : defines the path to get thumbnails for videos
 
Functions :

  * __Play__ : sets isPlaying to True
  * __Stop__ : sets isPlaying to False
  * __like__ : sets opinion to 1 
  * __dislike__ : sets opinion to 0
  * __OpinionToHTML__ : manages the ui functionnality of like and dislike buttons

## Movie

the object inherit prototypes and constructor from the object Media   
it has one more attribute called year   
it has two more functions : toHtml and toHtmlMedia to manage the ui functionnality of the element in the playlist depending on its type 

## Song

the object inherit prototypes and constructor from the object Media
it has one more attribute called artist 
it has two more functions toHtml and toHtmlMedia that manage the ui functionnality 

## Playlist

the object playlist has two attributes : 
* __medias__ : list that stores song and movie objects
* __nowPlayingIndex__ : specifies the index of the playing media

Functions :

* __add__ : pushes a new element into the medias list
* __getMedia__ : gets the media whose index is the nowPlayingIndex
* __play__ : starts playing the song or the movie
* __next__ : gets the next media by incrementing the nowPlayingIndex and play it 
* __previous__ : gets the previous media by decrementing the nowPlayingIndex and play it
* __stop__ : stops the media from playing
* __renderInElement__ : manages the ui functionnality of the playlist  
* __type__ : specifies the type of the media : song or movie

# Quizz

it has also four objects :

## Question 

the question object has three attributes :
* __question__ : represents the text of the question
* __giving__ : represents what is giving to the user depending on the type of the question
* __answer__ : represents the answer to the question

Functions :

* __test_Answer__ : tests the answer giving by the user
* __toHtmlQuestion__ : displays the content of the question

## Multiple

the object Multiple Question inherit constructor and prototypes from the object Question and it has no additionnal attributes   
It has one function :     
__toHtml__ : adds the html content to the multiple question , the html  represents buttons with names of different choices    

## Blind

the object Blind Question inherit constructor and prototypes from the object Question and it has no additionnal attributes    
It has one function :   
__toHtml__ : add the html content to the blind question , it includes the iframe tag and the path to the audio ,an input text to enter the answer and a button submit to submit the anwer  

## Quiz

the quiz object has three attributes :
* __questions__ : a list of question objects
* __score__ : the score of the user
* __questionIndex__ : the index of the current question

Functions :

* __addQuestion__ : pushes the question object into the list
* __getQuestion__ : gets the current question
* __nextQuestion__ : gets the next question by incrementing questionIndex  and incrementing the score if the answer is correct
* __finish__ : returns a boolean to indicate if we went through all the elements of the list
* __showProgress__ : shows the number of  elements of the list we went through
* __showScore__ : shows the score of the user
* __randomize__ : randomize the elements of the list 
* __main__ : defines the logic of the game

IN ADDITION TO THAT , there are some scripts to start applications named app.js for both folders .  

# Inscription-JS

includes *inscription.js* . This script aims to registrate the user .   
The user needs to fill in his firstname, lastname and email adress . Some tests of validation of the fields take place in the script .  
If the registration succeed , the user can access to the playlist .

# Inscription-Node  

includes two files : 
* __fnode.js__ : that includes function *http.createServer(function(req,res) { ... })* to create the web server and function *listen(1337, '127.0.0.1')* to start listening on the port 1337 .   
*req* gives  details about the request sent to the server and *res* is the object that allows sending a response to the request .   
* __form.html__ : includes the content html of the form written with JQuery , and a function *validate()* to validate the fields before sending the request to the server via AJAX   .
The server responds to the request by displaying a welcome message with the registered email 

# Visualization  

To start application , open the file Playlist/index.html  in your browser  . A registration form will show up , and after registration you can access to the playlist and to the Quizz via a link .   

To try the registration via Node.js , you should install Node.js , and to place in the directory *Inscription-Node* and run node fnode.js in the command line . You will get the message *Server is running at http:127.0.0.1:1337/ * .You open http:127.0.0.1:1337/  in your browser and a  registration form will show up .