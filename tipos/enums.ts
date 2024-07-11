(()=>{
    //Se le pueden dar valores numericos y apuntara a ellos sino siempre ira de 0 hacia adelante    
    enum AudioLevel {
        min = 1,
        medium=5,
        max = 10
    }

    let currentAudio=AudioLevel.medium;

    console.log({currentAudio});
    console.log(AudioLevel);
    
    
})();