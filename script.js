const music=document.querySelector("audio");
const img=document.querySelector("img");
const play=document.getElementById("play");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");

const songs=
[
    {
        name:"sub-1",
        title:"Lut Gate",
        artist:"Jubin"
    },
    {
        name:"sub-2",
        title:"Let_Me_Love_U",
        artist:"Justin"
    },
    {
        name:"sub-3",
        title:"Believer",
        artist:"DJ Snake"
    }
   

]

let isPlaying=false;
const playMusic=()=>
{
    
    isPlaying=true;
    music.play();
    play.classList.replace('fa-play',"fa-pause"); 
    img.classList.add("anime")

};
const pauseMusic=()=>
{
    
    isPlaying=false;
    music.pause();
    play.classList.replace('fa-pause',"fa-play"); 
    img.classList.remove("anime")

};

play.addEventListener('click',()=>
{
    // if(isPlaying)
    // {
    //     pauseMusic();
    // }
    // else
    // {
    //     playMusic();
    // }

    isPlaying?pauseMusic():playMusic();
});

const loadSong=(songs)=>
    {
        title.textContent=songs.title;
        artist.textContent=songs.artist;
        music.src="music/"+songs.name +".mp3";
        img.src="images/"+songs.name+".jpg";
    };
    songIndex=0;

    const nextSong=()=>
    {
        songIndex=(songIndex+1)%songs.length;
        loadSong(songs[songIndex]);
        playMusic();
    };
    const prevSong=()=>
    {
        songIndex=(songIndex-1 +songs.length)%songs.length;
        loadSong(songs[songIndex]);
        playMusic();
    };

    next.addEventListener('click',nextSong);
    prev.addEventListener('click',prevSong);


