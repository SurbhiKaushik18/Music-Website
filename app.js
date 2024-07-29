const music = new Audio("Audio/Ranjha - Shershaah 320 Kbps.mp3");
  //music.play();
const songs = [
    {
        id:1,
        songName: Ranjha<br>
        <div class="subtitle">B Praak</div>,
        poster:"images/img.jpg"
    },
    {
        id:2,
        songName: Ranjha<br>
        <div class="subtitle">B Praak</div>,
        poster:"images/img.jpg"
    },
    {
        id:3,
        songName: Ranjha<br>
        <div class="subtitle">B Praak</div>,
        poster:"images/img.jpg"
    },
    {
        id:4,
        songName: Ranjha<br>
        <div class="subtitle">B Praak</div>,
        poster:"images/img.jpg"
    },
    {
        id:5,
        songName: Ranjha<br>
        <div class="subtitle">B Praak</div>,
        poster:"images/img.jpg"
    },
]









let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 330;
});

pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
});