console.log("Welcome to Spotify")
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItem'))
let masterSongName = document.getElementById('masterSongName')

let songs = [
    {songName:"Change-the-World", filePath:"songs/song1.mp3", coverPath: "covers/1.jpg" },
    {songName:"Cielo", filePath:"songs/song2.mp3", coverPath: "covers/2.jpg" },
    {songName:"Invincible", filePath:"songs/song3.mp3", coverPath: "covers/3.jpg" },
    {songName:"My-Heart", filePath:"songs/song4.mp3", coverPath: "covers/4.jpg" },
    {songName:"Janji-Heors-Tonight", filePath:"songs/song5.mp3", coverPath: "covers/5.jpg" },
    {songName:"Chamak-Challo", filePath:"songs/song2.mp3", coverPath: "covers/6.jpg" },
    {songName:"Rabata", filePath:"songs/song2.mp3", coverPath: "covers/7.jpg" },
    {songName:"Ganja-Ganja", filePath:"songs/song2.mp3", coverPath: "covers/8.jpg" },
]
// to display right song name and song cover photo 
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath; 
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName; 
});

// play pause button handling in songs listed 
const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle')
        element.classList.remove('fa-pause-circle')
    })

}




// handle play pause click 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
 }
 else{
    audioElement.pause();
    masterPlay.classList.add('fa-play-circle')
    masterPlay.classList.remove('fa-pause-circle')
    gif.style.opacity = 0;
 }
});

// handling songs 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays(); 
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex +1}.mp3`
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    });
});

audioElement.addEventListener('timeupdate', () => {
    const progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    // update progressBar
    myProgressBar.value = progress
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

next.addEventListener('click',()=>{
    if(songIndex >= 7)
    {
        songINdex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
prev.addEventListener('click',()=>{
    if(songIndex <= 0)
    {
        songINdex = 9;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})