const songs = [
    "chill.mp3",
    "song2.mp3",
    "song3.mp3",
    // add more songs as needed
  ];
  

  function next() {

    const index = Math.floor(Math.random() * songs.length);
    const audio = document.getElementById("audio");
    
    audio.src = songs[index];
    audio.play();
  }

