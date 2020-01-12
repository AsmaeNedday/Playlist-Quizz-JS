// Start the application

//create a new quiz 
let quiz=new Quiz();

//add questions to our quizz
quiz.addQuestion(new Multiple("Who is the singer of girls like you ?",["Maroon","Shawn mendes","Justin Bieber","Ed Sheeran"],"Maroon"));
quiz.addQuestion(new Multiple("Who is the singer of roar ?",["Taylor Swift","Adel","Katy Perry","Demi Lovato"],"Katy Perry"));
quiz.addQuestion(new Multiple("What is the release date of attack on titans ?",["2018","2015","2017","2019"],"2015"));
quiz.addQuestion(new Multiple("Who is the singer of unstoppable?",["Selena Gomez","Adel","Sia","Miley Cyrus"],"Sia"));
quiz.addQuestion(new Multiple("Who is the singer of Havana ?",["Camila Cabello","Ariana Grand","Katy Perry","Jennifer Lopez"],"Camila Cabello"));
let song1= new Song('Treat you better','04:16','Mendes');
quiz.addQuestion(new Blind("What is the title of the playing song ?",song1.path_media+'1.mp3',song1.title.toUpperCase()));
let song2=new Song('I Love you boy','4:29','Suzy');
quiz.addQuestion(new Blind("What is the title of the playing song?",song2.path_media+'2.mp3',song2.title.toUpperCase()));

//randomize the list of questions
quiz.randomize();

//go to next question
function myFunction(answer) {
quiz.nextQuestion(answer);quiz.main();
}

//start the quizz
quiz.main();
