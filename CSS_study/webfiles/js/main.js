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

    loadTrack(target.dataset.trackref);
	}

  let audioEl = document.querySelector("audio"),
     trackThumbs = document.querySelectorAll(".track-ref"),
     playButton = document.getElementById("playButton"),
     pauseButton = document.getElementById("pauseButton"),
     rewindButton = document.getElementById("rewindButton");

//dropZones with music
  function loadTrack(track) {
  let currentTrack = `audio/${track}.mp3`;
  audioEl.src = currentTrack;
  playTrack();
 }

//play music
  function playTrack(){
     audioEl.play();
  }

  playButton.addEventListener("click", playTrack);

//pause music
  function pauseTrack(){
     audioEl.pause();
  }

  pauseButton.addEventListener("click", pauseTrack);

//rewind music
  function rewindTrack(){
   audioEl.currentTime = 0;
   playTrack();
  }
  rewindButton.addEventListener("click", rewindTrack);

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
