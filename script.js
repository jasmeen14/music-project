console.log("Welcome");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio("music/ranjha.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Ranjha",filePath: "music/Ranjha.mp3",coverPath: "images/ranjha.jpeg"},
    {songName: "Raataan Lambiyan",filePath: "music/Raataan Lambiyan.mp3",coverPath: "images/raataan-labiyan.jpeg"},
    {songName: "Sauda Khara Khara",filePath: "music/Sauda Khara Khara.mp3",coverPath: "images/sauda-khara-khara.jpeg"},
    {songName: "Cheez Badi",filePath: "music/Cheez Badi.mp3",coverPath: "images/cheez-badi.jpeg"},
    {songName: "Jab Tak",filePath: "music/Jab Tak.mp3",coverPath: "images/jab-tak.jpeg"},
    {songName: "Mere Sohneya",filePath: "music/Mere Sohneya.mp3",coverPath: "images/MERE-SOHNEYA.jpeg"},
    {songName: "Kaise Hua",filePath: "music/Kaise Hua.mp3",coverPath: "images/kaise-hua.jpeg"},
    {songName: "Hasina Pagal Deewani",filePath: "music/Hasina Pagal Deewani.mp3",coverPath: "images/hasina-pagal-deewani.jpeg"},
    {songName: "Tera Ban Jaunga",filePath: "music/Tera Ban Jaunga.mp3",coverPath: "images/tera-ban-jaunga.jpeg"},
    {songName: "Burjkhalifa",filePath: "music/Burjkhalifa.mp3",coverPath: "images/burjkhalifa.jpeg"},
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
     //Update Seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
   

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
   element.addEventListener('click',(e)=>{
       makeAllPlays();
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       audioElement.src = 'music/Sauda Khara Khara.mp3';
       audioElement.currentTime = 0;
       audioElement.play();   
    })
});