(() => {
  const icons = document.querySelectorAll('.icons');
  const dropZones = document.querySelectorAll('.drop-zone');


  //to DRAG : DRAGSTART; DRAG; DRAGEND
 icons.forEach(icone => {
    icone.addEventListener('dragstart', dragstart);
    icone.addEventListener('drag', drag);
    icone.addEventListener('dragend', dragend);
  });

  function dragstart(){
    console.log('icone> dragstart');
  }

  function drag(){
    console.log('icone> drag');
  }

  function dragend(){
    console.log('icone> dragend');
  }

  //to DROP :  DRAGOVER; DROP
  		
 dropZones.forEach(zone => {
	zone.addEventListener('dragover', dragover);
	zone.addEventListener('drop', allowDrop);
 });

 	function dragover(event) {
		event.preventDefault();
		console.log('dragged over me');
	}

	function allowDrop(event) {
		event.preventDefault();
		console.log('drop on me');
		//retrieve the dragged element using the dataTransfer object
		//this was set in the drag event using the setData method
        if (this.childElementCount > 0) {return; }

		let droppedEl = event.dataTransfer.getData('currentItem');
		console.log(droppedEl);

		this.appendChild(document.querySelector(`.puzzle-image${droppedEl}`));
	}


})();

