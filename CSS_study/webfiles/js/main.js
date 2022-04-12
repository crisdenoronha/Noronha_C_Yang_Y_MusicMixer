(() => {
  const icons = document.querySelectorAll('.icons');
  const dropZones = document.querySelectorAll('.drop-zone');


  //to DRAG the icon : DRAGSTART; DRAG; DRAGEND
 icons.forEach(icone => {
    icone.addEventListener('dragstart', dragstart);
  });

  function dragstart(event){
    //event.preventDefault();
    console.log('started draggin a piece');
    event.dataTransfer.setData('currentItem', event.target.id);
  }


  //to DROP the icon :  DRAGOVER; DROP

 dropZones.forEach(zone => {
	zone.addEventListener('dragover', dragover);
	zone.addEventListener('drop', allowDrop);
 });

 	function dragover(event) {
		event.preventDefault();
		//console.log('dragged over me');
	}

  let audioEl = document.querySelector("audio"),
  playButton = document.getElementById("playButton"),
  pauseButton = document.getElementById("pauseButton"),
  rewindButton = document.getElementById("rewindButton");

 

	function allowDrop(event) {
		event.preventDefault();
		console.log('drop on me');
		//retrieve the dragged element using the dataTransfer object
		//this was set in the drag event using the setData method
        if (this.childElementCount > 0) {return; }

		let droppedEl = event.dataTransfer.getData('currentItem');
		console.log(droppedEl);

    let target = document.querySelector(`#${droppedEl}`);

		this.appendChild(target);

    let newaudio = document.createElement('audio');

    newaudio.loop = true;
    
    // this ` is a backtick - it is a JavaScript template string (lets you use JS expressions inline)
    // refer to the MDN documentation
    newaudio.src = `audio/${target.dataset.trackref}.mp3`; // this is the track we want to play
    newaudio.load();

    // append this to the document
    document.body.appendChild(newaudio);
    newaudio.play();
	}



//pause all sounds
function pauseTrack() {
  let music = document.querySelectorAll('audio');
  music.forEach(sound => sound.pause());

  // select and loop through all of the audio elements and make them pause
}

pauseButton.addEventListener("click", pauseTrack);




//play music
  function playTrack(){
    let music = document.querySelectorAll('audio');
    music.forEach(sound => sound.play());
    // select and loop through all of the audio elements and make them play
  }

  playButton.addEventListener("click", playTrack);





//reset dropZone
let boxes = document.querySelectorAll('.box'),
    box = document.querySelector('.box'),
    skyZones = document.querySelectorAll('.drop-zone');

  function iconReturn() {
  skyZones.forEach (zone =>{

    if (zone.childElementCount > 0) {
    box.appendChild(zone.firstElementChild);
    audioEl.pause();
    }
  })
  }
  	boxes.forEach(item => item.addEventListener('click', iconReturn));

//animation

/*function animation() {
dropZones.forEach (zone =>{

  if (zone.childElementCount > 0) {
  //animation movements here
  }
})
  icons.forEach(item => item.addEventListener('drop', animation));
}*/
})();
