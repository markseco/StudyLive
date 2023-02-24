const songs = [
    "chill.mp3",
    "chill.mp3",
    "chill.mp3",
    // add more songs as needed
  ];
  

  function next() {

    const index = Math.floor(Math.random() * songs.length);
    const audio = document.getElementById("audio");
    
    audio.src = songs[index];
    audio.play();
  }


