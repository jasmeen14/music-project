console.log("Welcome");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio("music/ranjha.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Ranjha",filePath: "music/ranjha.mp3",coverPath: "images/ranjha.jpeg"},
    {songName: "Ranjha",filePath: "music/ranjha.mp3",coverPath: "images/ranjha.jpeg"},
    {songName: "Ranjha",filePath: "music/ranjha.mp3",coverPath: "images/ranjha.jpeg"},
    {songName: "Ranjha",filePath: "music/ranjha.mp3",coverPath: "images/ranjha.jpeg"},
    {songName: "Ranjha",filePath: "music/ranjha.mp3",coverPath: "images/ranjha.jpeg"},
    {songName: "Ranjha",filePath: "music/ranjha.mp3",coverPath: "images/ranjha.jpeg"},
    {songName: "Ranjha",filePath: "music/ranjha.mp3",coverPath: "images/ranjha.jpeg"},
    {songName: "Ranjha",filePath: "music/ranjha.mp3",coverPath: "images/ranjha.jpeg"},
    {songName: "Ranjha",filePath: "music/ranjha.mp3",coverPath: "images/ranjha.jpeg"},
    {songName: "Ranjha",filePath: "music/ranjha.mp3",coverPath: "images/ranjha.jpeg"},
]
 

//audioElement.play();

//Handle Play Pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
   }
   else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play'); 
    gif.style.opacity = 0;  
   }
})
//listen events
audioElement.addEventListener('timeupdate',()=>{
     console.log('timeupdate');
     //Update Seekbar
})