console.log("Welcome");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio("music/ranjha.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Ranjha",filePath: "music/Ranjha.mp3",coverPath: "images/ranjha.jpg"},
    {songName: "Raataan Lambiyan",filePath: "music/Raataan_Lambiyan.mp3",coverPath: "images/raataan-labiyan.jpg"},
    {songName: "Sauda Khara Khara",filePath: "music/Sauda_Khara_Khara.mp3",coverPath: "images/sauda-khara-khara.jpg"},
    {songName: "Cheez Badi",filePath: "music/Cheez_Badi.mp3",coverPath: "images/cheez-badi.jpg"},
    {songName: "Jab Tak",filePath: "music/Jab_Tak.mp3",coverPath: "images/jab-tak.jpg"},
    {songName: "Mere Sohneya",filePath: "music/Mere_Sohneya.mp3",coverPath: "images/MERE-SOHNEYA.jpg"},
    {songName: "Kaise Hua",filePath: "music/Kaise_Hua.mp3",coverPath: "images/kaise-hua.jpg"},
    {songName: "Hasina Pagal Deewani",filePath: "music/Hasina_Pagal_Deewani.mp3",coverPath: "images/hasina-pagal-deewani.jpg"},
    {songName: "Tera Ban Jaunga",filePath: "music/Tera_Ban_Jaunga.mp3",coverPath: "images/tera-ban-jaunga.jpg"},
    {songName: "Burjkhalifa",filePath: "music/Burjkhalifa.mp3",coverPath: "images/burjkhalifa.jpg"},
]
  songItems.forEach((element,i)=>{
      console.log(element,i);
     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  })

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
       index = parseInt(e.target.id);
       console.log(index);
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       console.log(index);
       audioElement.src = 'music/${index}.mp3';
       console.log(audioElement.src);
       audioElement.currentTime = 0;
       audioElement.play();  
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause'); 
    })
})