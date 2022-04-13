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

      //boxes.forEach(box => box.classList.add('stop'));
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

 
  let playButton = document.getElementById("playButton"),
    pauseButton = document.getElementById("pauseButton"),
    resetButton = document.getElementById("resetButton");
  

 

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

//reset all icons
function resetPage(){
  location.reload();
}

resetButton.addEventListener("click", resetPage);


//reset dropZone BOX1
let box1 = document.querySelector('#box1'),
    box2 = document.querySelector('#box2'),
    box3 = document.querySelector('#box3'),
    box4 = document.querySelector('#box4'),
    box5 = document.querySelector('#box5'),
    box6 = document.querySelector('#box6'),
    box7 = document.querySelector('#box7'),
    box8 = document.querySelector('#box8'),
    box9 = document.querySelector('#box9'),
    box10 = document.querySelector('#box10'),
    skyZones = document.querySelectorAll('.drop-zone');

  function iconReturn1() {
  skyZones.forEach (zone =>{

    if (this.childElementCount > 0) {return; }

    else if (zone.childElementCount > 0) {
     box1.appendChild(zone.firstElementChild)
    }

    let music = document.querySelectorAll('audio');
    music.forEach(sound => sound.pause());

  })
  }
  	box1.addEventListener('click', iconReturn1);

//reset dropZone BOX2
  function iconReturn2(event) {
    skyZones.forEach (zone =>{
  
      if (this.childElementCount > 0) {return; }

      else if (zone.childElementCount > 0) {
       box2.appendChild(zone.firstElementChild)
      }

      let music = document.querySelectorAll('audio');
      music.forEach(sound => sound.pause());
      
    })
    }
      box2.addEventListener('click', iconReturn2);

  //reset dropZone BOX3
  function iconReturn3() {
    skyZones.forEach (zone =>{
  
      if (this.childElementCount > 0) {return; }

      else if (zone.childElementCount > 0) {
       box3.appendChild(zone.firstElementChild)
      }
  
      let music = document.querySelectorAll('audio');
      music.forEach(sound => sound.pause());
      
    })
    }
      box3.addEventListener('click', iconReturn3); 


  //reset dropZone BOX4  
  function iconReturn4() {
    skyZones.forEach (zone =>{
  
      if (this.childElementCount > 0) {return; }

      else if (zone.childElementCount > 0) {
       box4.appendChild(zone.firstElementChild)
      }

      let music = document.querySelectorAll('audio');
      music.forEach(sound => sound.pause());
    })
    }
      box4.addEventListener('click', iconReturn4);

  //reset dropZone BOX5
    function iconReturn5() {
      skyZones.forEach (zone =>{
    
        if (this.childElementCount > 0) {return; }

        else if (zone.childElementCount > 0) {
         box5.appendChild(zone.firstElementChild)
        }
  
        let music = document.querySelectorAll('audio');
        music.forEach(sound => sound.pause());
      })
      }
        box5.addEventListener('click', iconReturn5);
  
  //reset dropZone BOX6
    function iconReturn6() {
      skyZones.forEach (zone =>{
    
        if (this.childElementCount > 0) {return; }

        else if (zone.childElementCount > 0) {
         box6.appendChild(zone.firstElementChild)
        }
  
        let music = document.querySelectorAll('audio');
        music.forEach(sound => sound.pause());
      })
      }
        box6.addEventListener('click', iconReturn6);

  //reset dropZone BOX7
  function iconReturn7() {
    skyZones.forEach (zone =>{
  
      if (this.childElementCount > 0) {return; }

      else if (zone.childElementCount > 0) {
       box7.appendChild(zone.firstElementChild)
      }

      let music = document.querySelectorAll('audio');
      music.forEach(sound => sound.pause());
    })
    }
      box7.addEventListener('click', iconReturn7);
  
    //reset dropZone BOX8
    function iconReturn8() {
      skyZones.forEach (zone =>{
    
        if (this.childElementCount > 0) {return; }

        else if (zone.childElementCount > 0) {
         box8.appendChild(zone.firstElementChild)
        }
  
        let music = document.querySelectorAll('audio');
        music.forEach(sound => sound.pause());
      })
      }
        box8.addEventListener('click', iconReturn8);

   //reset dropZone BOX9
   function iconReturn9() {
    skyZones.forEach (zone =>{
  
      if (this.childElementCount > 0) {return; }

      else if (zone.childElementCount > 0) {
       box9.appendChild(zone.firstElementChild)
      }

      let music = document.querySelectorAll('audio');
      music.forEach(sound => sound.pause());
    })
    }
      box9.addEventListener('click', iconReturn9);
  
   //reset dropZone BOX10
   function iconReturn10() {
    skyZones.forEach (zone =>{
  
      if (this.childElementCount > 0) {return; }

      else if (zone.childElementCount > 0) {
       box10.appendChild(zone.firstElementChild)
      }

      let music = document.querySelectorAll('audio');
      music.forEach(sound => sound.pause());
    })
    }
      box10.addEventListener('click', iconReturn10);


})();
